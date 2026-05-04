/**
 * GJS bundle build script.
 *
 * Yarn PnP stores packages in zip files, and esbuild's Go file resolver does
 * not read through PnP zip archives.
 *
 * Strategy:
 *  1. Extract all @gjsify-* and @girs-* zip files from the PnP cache to a
 *     temp dir so esbuild can read them from disk.
 *  2. Register a custom esbuild plugin (runs BEFORE gjsify) that intercepts
 *     @gjsify/*, @girs/*, and node:* resolution and returns the extracted
 *     paths directly, bypassing PnP entirely.
 *  3. Run detectAutoGlobals to iteratively detect free globals (URL,
 *     URLSearchParams, etc.) and produce an inject stub.
 *  4. Run the final gjsify build with the detected globals inject stub.
 *
 * @gjsify/esbuild-plugin-gjsify v0.3.0 automatically injects a synchronous
 * process stub (GJS_PROCESS_STUB) as the bundle banner, so no manual banner
 * is needed here.  The shebang is prepended to the output file post-build so
 * it remains the very first line (the plugin prepends its stub before any
 * user-supplied banner text).
 */

import { execFileSync } from "node:child_process";
import { chmodSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import gjsifyPlugin from "@gjsify/esbuild-plugin-gjsify";
import { detectAutoGlobals, resolveGlobalsList, writeRegisterInjectFile } from "@gjsify/esbuild-plugin-gjsify/globals";
import { type BuildOptions, build, type Plugin } from "esbuild";

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

const OUTFILE = join(CLI_ROOT, "bin", "ts-for-gir-gjs");

const pluginOptions = {
	app: "gjs" as const,
	reflection: false,
	aliases: {
		typedoc: join(CLI_ROOT, "src", "stubs", "typedoc-stub.ts"),
		"@ts-for-gir/typedoc-theme": join(CLI_ROOT, "src", "stubs", "typedoc-stub.ts"),
	},
};

// Base esbuild options shared by analysis and final build.
// makePolyfillResolverPlugin() is included so detectAutoGlobals analysis
// passes can resolve @gjsify/* packages stored in Yarn PnP zip archives.
const esbuildBaseOptions: BuildOptions = {
	entryPoints: [join(CLI_ROOT, "src", "start.ts")],
	outfile: OUTFILE,
	bundle: true,
	platform: "node",
	format: "esm",
	define: {
		__TS_FOR_GIR_VERSION__: JSON.stringify(pkg.version),
		__GJS_BUNDLE__: "true",
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
	plugins: [makePolyfillResolverPlugin()],
};

extractGjsifyPolyfills();

try {
	// Iteratively detect free globals (URL, URLSearchParams, etc.) so
	// the gjsify plugin can inject the corresponding register modules.
	// makePolyfillResolverPlugin() in esbuildBaseOptions.plugins is preserved
	// by detectAutoGlobals (v0.3.1+) across all analysis passes.
	const { detected } = await detectAutoGlobals(esbuildBaseOptions, pluginOptions);

	// ts-for-gir is a file-processing CLI — it has no need for HTTP. The fetch/
	// XMLHttpRequest globals appear as false positives from dead browser-compat
	// code in npm dependencies. Injecting them would bundle @gjsify/fetch which
	// imports gi://GjsifyHttpSoupBridge (custom Vala typelib, not in standard GJS).
	const HTTP_GLOBALS = new Set(["fetch", "Headers", "Request", "Response", "XMLHttpRequest", "XMLHttpRequestUpload"]);
	const filteredList = [...detected].filter((g) => !HTTP_GLOBALS.has(g)).join(",");
	const registerPaths = resolveGlobalsList(filteredList);
	const injectPath = (await writeRegisterInjectFile(registerPaths)) ?? undefined;

	await build({
		...esbuildBaseOptions,
		plugins: [
			makePolyfillResolverPlugin(),
			gjsifyPlugin({
				...pluginOptions,
				autoGlobalsInject: injectPath,
			}),
		],
	});

	// @gjsify/esbuild-plugin-gjsify v0.3.0 prepends its GJS_PROCESS_STUB before
	// any user banner, so we add the shebang after the build to guarantee it
	// stays on line 1 of the output file.
	const content = readFileSync(OUTFILE, "utf-8");
	if (!content.startsWith("#!")) {
		writeFileSync(OUTFILE, `#!/usr/bin/env -S gjs -m\n${content}`);
	}
	chmodSync(OUTFILE, 0o755);
	console.log("[build-gjs] GJS bundle written to bin/ts-for-gir-gjs");
} finally {
	rmSync(TMP_DIR, { recursive: true, force: true });
}
