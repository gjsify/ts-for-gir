/**
 * GJS bundle build script.
 *
 * Yarn PnP stores packages in zip files, and esbuild's build.resolve() goes
 * through PnP (which blocks transitive @gjsify/* access in strict mode).
 *
 * Strategy:
 *  1. Extract all @gjsify-* zip files from the PnP cache to a temp dir.
 *  2. Register a custom esbuild plugin (runs BEFORE gjsify) that intercepts
 *     @gjsify/* and node:* resolution and returns the extracted paths directly,
 *     bypassing PnP entirely.
 *  3. Run the gjsify plugin with reflection disabled.
 *
 * process global:
 *  @gjsify/process ends up in a lazy __esm block and is never called before
 *  module-level code (e.g. from glob) accesses `process`.  We therefore put a
 *  minimal synchronous process stub directly in the banner.  GLib is available
 *  as a live ESM binding (from the static `import GLib from "gi://GLib"` that
 *  esbuild emits for @girs/glib-2.0) before any module body code runs.
 */

import { execFileSync } from "node:child_process";
import { chmodSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import gjsifyPlugin from "@gjsify/esbuild-plugin-gjsify";
import { build, type Plugin } from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI_ROOT = join(__dirname, "..");
const MONOREPO_ROOT = join(CLI_ROOT, "..", "..");
const CACHE_DIR = join(MONOREPO_ROOT, ".yarn", "cache");
const TMP_DIR = join(CLI_ROOT, ".gjsify-tmp");

const pkg = JSON.parse(readFileSync(join(CLI_ROOT, "package.json"), "utf8"));

function extractGjsifyPolyfills(): void {
	mkdirSync(join(TMP_DIR, "node_modules"), { recursive: true });

	// Extract @gjsify/* polyfills and @girs/* type shims (which re-export gi://)
	const zipFiles = readdirSync(CACHE_DIR).filter(
		(f) => (f.startsWith("@gjsify-") || f.startsWith("@girs-")) && f.endsWith(".zip"),
	);

	for (const zipFile of zipFiles) {
		const zipPath = join(CACHE_DIR, zipFile);
		try {
			execFileSync("unzip", ["-o", "-q", "-d", TMP_DIR, zipPath, "node_modules/*"], {
				stdio: "pipe",
			});
		} catch {
			// silently skip any zip that fails (e.g. broken cache entry)
		}
	}
}

/**
 * Maps a package + optional sub-path to the real main file inside TMP_DIR.
 * Reads package.json exports/module/main to find the correct entry.
 */
function resolveGjsifyPackage(pkgName: string, subPath?: string): string | null {
	const pkgRoot = join(TMP_DIR, "node_modules", ...pkgName.split("/"));
	const pkgJsonPath = join(pkgRoot, "package.json");
	if (!existsSync(pkgJsonPath)) return null;

	const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));

	if (subPath) {
		const exportKey = `./${subPath}`;
		const exp = pkgJson.exports?.[exportKey];
		let rel: string | undefined;
		if (typeof exp === "string") rel = exp;
		else if (typeof exp?.default === "string") rel = exp.default;
		else if (typeof exp?.import === "string") rel = exp.import;
		else if (typeof exp?.module === "string") rel = exp.module;
		if (rel) return join(pkgRoot, rel);
		return null;
	}

	const exportsRoot = pkgJson.exports?.["."];
	let main: string | undefined;
	if (typeof exportsRoot === "string") main = exportsRoot;
	else if (typeof exportsRoot?.default === "string") main = exportsRoot.default;
	else if (typeof exportsRoot?.import === "string") main = exportsRoot.import;
	else if (typeof exportsRoot?.module === "string") main = exportsRoot.module;
	else if (typeof pkgJson.module === "string") main = pkgJson.module;
	else if (typeof pkgJson.main === "string") main = pkgJson.main;

	if (typeof main === "string") return join(pkgRoot, main);
	return null;
}

/** The built-in Node.js → @gjsify/* mapping from the gjsify plugin. */
const NODE_TO_GJSIFY: Record<string, string> = {
	assert: "@gjsify/assert",
	async_hooks: "@gjsify/async_hooks",
	buffer: "@gjsify/buffer",
	child_process: "@gjsify/child_process",
	cluster: "@gjsify/cluster",
	console: "@gjsify/console",
	constants: "@gjsify/constants",
	crypto: "@gjsify/crypto",
	dgram: "@gjsify/dgram",
	diagnostics_channel: "@gjsify/diagnostics_channel",
	dns: "@gjsify/dns",
	domain: "@gjsify/domain",
	events: "@gjsify/events",
	fs: "@gjsify/fs",
	"fs/promises": "@gjsify/fs/promises",
	http: "@gjsify/http",
	http2: "@gjsify/http2",
	https: "@gjsify/https",
	inspector: "@gjsify/inspector",
	module: "@gjsify/module",
	net: "@gjsify/net",
	os: "@gjsify/os",
	path: "@gjsify/path",
	"path/posix": "@gjsify/path",
	perf_hooks: "@gjsify/perf_hooks",
	process: "@gjsify/process",
	querystring: "@gjsify/querystring",
	readline: "@gjsify/readline",
	stream: "@gjsify/stream",
	string_decoder: "@gjsify/string_decoder",
	sys: "@gjsify/sys",
	timers: "@gjsify/timers",
	tls: "@gjsify/tls",
	tty: "@gjsify/tty",
	url: "@gjsify/url",
	util: "@gjsify/util",
	"util/types": "@gjsify/util/types",
	v8: "@gjsify/v8",
	vm: "@gjsify/vm",
	worker_threads: "@gjsify/worker_threads",
	zlib: "@gjsify/zlib",
};

function makePolyfillResolverPlugin(): Plugin {
	return {
		name: "gjsify-polyfill-resolver",
		setup(build) {
			// @girs/* packages re-export from gi:// — resolve them from TMP_DIR
			// so esbuild bundles the shim (which contains the gi:// import).
			build.onResolve({ filter: /^@girs\// }, (args) => {
				const parts = args.path.slice(1).split("/");
				const pkgName = `@${parts[0]}/${parts[1]}`;
				const subPath = parts.slice(2).join("/") || undefined;
				const resolved = resolveGjsifyPackage(pkgName, subPath);
				if (resolved) return { path: resolved };
				return undefined;
			});

			// gi:// imports are GJS native — mark external so GJS resolves them
			build.onResolve({ filter: /^gi:\/\// }, () => ({ external: true }));

			// Intercept @gjsify/* resolution — return extracted paths directly
			build.onResolve({ filter: /^@gjsify\// }, (args) => {
				// Parse @gjsify/<pkg>[/<sub>...]
				const parts = args.path.slice(1).split("/"); // drop leading '@'
				// parts = ['gjsify', 'fs', 'promises']
				const pkgName = `@${parts[0]}/${parts[1]}`;
				const subPath = parts.slice(2).join("/") || undefined;

				const resolved = resolveGjsifyPackage(pkgName, subPath);
				if (resolved) return { path: resolved };
				return undefined;
			});

			// Also intercept node:* built-ins directly so they go through our resolver
			build.onResolve({ filter: /^node:/ }, (args) => {
				const bare = args.path.replace(/^node:/, "");
				const gjsifyPkg = NODE_TO_GJSIFY[bare];
				if (!gjsifyPkg) return undefined;

				const parts = gjsifyPkg.slice(1).split("/");
				const pkgName = `@${parts[0]}/${parts[1]}`;
				const subPath = parts.slice(2).join("/") || undefined;

				const resolved = resolveGjsifyPackage(pkgName, subPath);
				if (resolved) return { path: resolved };
				return undefined;
			});
		},
	};
}

/**
 * Minimal synchronous process stub for the banner.
 *
 * @gjsify/process ends up in a lazy __esm block; module-level code from deps
 * like `glob` accesses `process.platform` before any lazy init runs.  We set
 * up a lightweight stub here so those accesses succeed.  GLib is already a
 * live ESM binding (from the static gi:// import esbuild generates) before any
 * module body code executes.
 */
const PROCESS_BANNER = `\
if (typeof globalThis.URL === "undefined") {
  globalThis.URL = class URL {
    constructor(input, base) { this.href = String(input); }
    toString() { return this.href; }
    toJSON() { return this.href; }
  };
}
if (typeof globalThis.URLSearchParams === "undefined") {
  globalThis.URLSearchParams = class URLSearchParams {
    constructor(init) {
      this._e = [];
      if (typeof init === "string") {
        var s = init.startsWith("?") ? init.slice(1) : init;
        s.split("&").forEach(function(p) {
          if (!p) return;
          var i = p.indexOf("=");
          this._e.push([decodeURIComponent(i < 0 ? p : p.slice(0, i)), decodeURIComponent(i < 0 ? "" : p.slice(i + 1))]);
        }.bind(this));
      }
    }
    get(k) { var e = this._e.find(function(x){return x[0]===k;}); return e ? e[1] : null; }
    has(k) { return this._e.some(function(x){return x[0]===k;}); }
    set(k, v) { var i = this._e.findIndex(function(x){return x[0]===k;}); if(i>=0) this._e[i][1]=v; else this._e.push([k,v]); }
    append(k, v) { this._e.push([k,v]); }
    toString() { return this._e.map(function(e){return encodeURIComponent(e[0])+"="+encodeURIComponent(e[1]);}).join("&"); }
    entries() { return this._e[Symbol.iterator](); }
    [Symbol.iterator]() { return this._e[Symbol.iterator](); }
  };
}
if (typeof globalThis.process === "undefined") {
  var __gjsify_proc_env__ = new Proxy({}, {
    get: function(_, k) { return GLib.getenv(String(k)) ?? undefined; },
    has: function(_, k) { return GLib.getenv(String(k)) !== null; },
    ownKeys: function() { return GLib.listenv() || []; },
    getOwnPropertyDescriptor: function(_, k) {
      var v = GLib.getenv(String(k));
      return v !== null ? { value: v, writable: true, enumerable: true, configurable: true } : undefined;
    }
  });
  var __gjsify_proc_cols__ = parseInt(GLib.getenv("COLUMNS") || "0") || 80;
  var __gjsify_proc_stdout__ = {
    columns: __gjsify_proc_cols__, isTTY: false,
    write: function(s) {
      var lines = String(s).split("\\n");
      for (var i = 0; i < lines.length - 1; i++) { print(lines[i]); }
      if (lines[lines.length - 1]) { print(lines[lines.length - 1]); }
    }
  };
  var __gjsify_proc_stderr__ = {
    columns: __gjsify_proc_cols__, isTTY: false,
    write: function(s) {
      var lines = String(s).split("\\n");
      for (var i = 0; i < lines.length - 1; i++) { printerr(lines[i]); }
      if (lines[lines.length - 1]) { printerr(lines[lines.length - 1]); }
    }
  };
  globalThis.process = {
    platform: "linux",
    cwd: function() { return GLib.get_current_dir(); },
    chdir: function(d) { GLib.chdir(d); },
    env: __gjsify_proc_env__,
    argv: ["/usr/bin/gjs", import.meta.url ? import.meta.url.replace("file://", "") : "/ts-for-gir-gjs"].concat(typeof ARGV !== "undefined" ? Array.from(ARGV) : []),
    exit: function(code) {
      try { globalThis.imports.system.exit(typeof code === "number" ? code : 0); } catch (_) {}
    },
    exitCode: 0,
    pid: 0,
    version: "v22.0.0",
    versions: {},
    execPath: "/usr/bin/gjs",
    nextTick: function(fn) { var a = Array.prototype.slice.call(arguments, 1); Promise.resolve().then(function() { fn.apply(null, a); }); },
    stdout: __gjsify_proc_stdout__,
    stderr: __gjsify_proc_stderr__
  };
}`;

extractGjsifyPolyfills();

try {
	await build({
		entryPoints: [join(CLI_ROOT, "src", "start.ts")],
		outfile: join(CLI_ROOT, "bin", "ts-for-gir-gjs"),
		bundle: true,
		platform: "node",
		format: "esm",
		banner: {
			js: `#!/usr/bin/env -S gjs -m\n${PROCESS_BANNER}`,
		},
		define: {
			__TS_FOR_GIR_VERSION__: JSON.stringify(pkg.version),
			__GJS_BUNDLE__: "true",
			global: "globalThis",
			window: "globalThis",
			process: "globalThis.process",
		},
		alias: {
			typedoc: join(CLI_ROOT, "src", "stubs", "typedoc-stub.ts"),
			"@ts-for-gir/typedoc-theme": join(CLI_ROOT, "src", "stubs", "typedoc-stub.ts"),
			"@inquirer/prompts": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			inquirer: join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/checkbox": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/confirm": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/core": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/editor": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/expand": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/input": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/number": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/password": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/rawlist": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/search": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
			"@inquirer/select": join(CLI_ROOT, "src", "stubs", "inquirer-stub.ts"),
		},
		plugins: [
			// Must run BEFORE the gjsify plugin so our resolver wins for @gjsify/* and node:* imports
			makePolyfillResolverPlugin(),
			gjsifyPlugin({
				app: "gjs",
				reflection: false,
				aliases: {
					typedoc: join(CLI_ROOT, "src", "stubs", "typedoc-stub.ts"),
					"@ts-for-gir/typedoc-theme": join(CLI_ROOT, "src", "stubs", "typedoc-stub.ts"),
				},
			}),
		],
	});

	chmodSync(join(CLI_ROOT, "bin", "ts-for-gir-gjs"), 0o755);
	console.log("[build-gjs] GJS bundle written to bin/ts-for-gir-gjs");
} finally {
	rmSync(TMP_DIR, { recursive: true, force: true });
}
