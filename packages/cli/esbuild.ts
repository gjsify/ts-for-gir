import { readFileSync } from "node:fs";
import { build } from "esbuild";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));

await build({
	entryPoints: ["src/start.ts"],
	outfile: "bin/ts-for-gir",
	bundle: true,
	platform: "node",
	target: "node18",
	format: "esm",
	banner: {
		js: "#!/usr/bin/env node",
	},
	define: {
		__TS_FOR_GIR_VERSION__: JSON.stringify(pkg.version),
	},
	external: [
		"@ts-for-gir/templates",
		"@inquirer/prompts",
		"ejs",
		"cosmiconfig",
		"glob",
		"inquirer",
		"prettier",
		"colorette",
		"typedoc",
		"yargs",
	],
});
