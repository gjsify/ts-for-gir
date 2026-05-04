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
			__GJS_BUNDLE__: "true",
		},
	},
	typescript: {
		// Disable Deepkit reflection — it transforms `extends()` methods into
		// `function extends()` which is invalid JS and breaks esbuild's parser
		reflection: false,
	},
	aliases: {},
	globals: "auto",
	// fetch/XHR appear as false positives from dead browser-compat code in npm deps.
	// Their polyfills require gi://GjsifyHttpSoupBridge (custom Vala typelib).
	excludeGlobals: ["fetch", "Headers", "Request", "Response", "XMLHttpRequest", "XMLHttpRequestUpload"],
	shebang: true,
};
