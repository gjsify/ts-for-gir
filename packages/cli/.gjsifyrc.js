import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf8"));

export default {
	esbuild: {
		outfile: "bin/ts-for-gir-gjs",
		define: {
			__TS_FOR_GIR_VERSION__: JSON.stringify(pkg.version),
		},
	},
	// Prepend `#!/usr/bin/env -S gjs -m` and chmod +x. v0.3.5 (gjsify) made
	// the `--shebang` CLI flag default `undefined` so config-file values are
	// honoured; in v0.3.4 this had to be passed on the command line.
	shebang: true,
	// Tree-shaking can't drop these — they appear as `typeof fetch !== "undefined"`
	// guards inside dead browser-compat fallbacks of npm deps (e.g. cosmiconfig,
	// glob), so `--globals auto` detects them as free identifiers and would
	// otherwise inject @gjsify/fetch + @gjsify/xmlhttprequest registers (~MB of
	// libsoup-backed code) we never call. Exclude them to keep the bundle slim;
	// the runtime never reaches the polyfilled code paths.
	excludeGlobals: ["fetch", "Headers", "Request", "Response", "XMLHttpRequest", "XMLHttpRequestUpload"],
};
