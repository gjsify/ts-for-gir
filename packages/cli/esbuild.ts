import { build } from "esbuild";

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
