import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const monorepoRoot = join(__dirname, "..", "..");
const pkg = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf8"));

// Build nodePaths from unplugged @gjsify/* packages so esbuild can find them
// (esbuild uses its own file-system resolver which bypasses Yarn PnP)
const unplugged = join(monorepoRoot, ".yarn", "unplugged");
const nodePaths = existsSync(unplugged)
	? readdirSync(unplugged)
			.filter((dir) => dir.startsWith("@gjsify-"))
			.map((dir) => join(unplugged, dir, "node_modules"))
	: [];

export default {
	esbuild: {
		define: {
			__TS_FOR_GIR_VERSION__: JSON.stringify(pkg.version),
			__GJS_BUNDLE__: "true",
		},
		nodePaths,
	},
	typescript: {
		// Disable Deepkit reflection — it transforms `extends()` methods into
		// `function extends()` which is invalid JS and breaks esbuild's parser
		reflection: false,
	},
	aliases: {
		typedoc: "./src/stubs/typedoc-stub.ts",
		"@ts-for-gir/typedoc-theme": "@gjsify/empty",
		// Interactive prompts are not supported in GJS
		"@inquirer/prompts": "@gjsify/empty",
		inquirer: "@gjsify/empty",
		"@inquirer/checkbox": "@gjsify/empty",
		"@inquirer/confirm": "@gjsify/empty",
		"@inquirer/core": "@gjsify/empty",
		"@inquirer/editor": "@gjsify/empty",
		"@inquirer/expand": "@gjsify/empty",
		"@inquirer/input": "@gjsify/empty",
		"@inquirer/number": "@gjsify/empty",
		"@inquirer/password": "@gjsify/empty",
		"@inquirer/rawlist": "@gjsify/empty",
		"@inquirer/search": "@gjsify/empty",
		"@inquirer/select": "@gjsify/empty",
	},
	globals: "auto",
	shebang: true,
};
