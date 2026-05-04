/**
 * Everything you need for the `ts-for-gir doc` command is located here
 */

declare const __GJS_BUNDLE__: boolean | undefined;

import { GeneratorType } from "@ts-for-gir/generator-base";
import { HtmlDocGenerator } from "@ts-for-gir/generator-html-doc";
import { APP_NAME, type ConfigFlags, NSRegistry } from "@ts-for-gir/lib";
import { docOptions, getOptionsGeneration, load } from "../config.ts";
import { TypeScriptFormatter } from "../formatters/typescript-formatter.ts";
import type { DocCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";
import { runGenerationCommand } from "./run-generation-command.ts";

const command = "doc [modules..]";

const description = "Generates HTML documentation from GIR files using TypeDoc";

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} doc Gtk-4.0 --outdir ./docs`, "Generate HTML documentation for Gtk-4.0"],
	[`${APP_NAME} doc '*' --outdir ./docs`, "Generate documentation for all locally installed GIR modules"],
	[
		`${APP_NAME} doc --merge --jsonDir ./json-output --outdir ./docs`,
		"Generate HTML from pre-generated JSON files (low memory)",
	],
];

const builder = createBuilder<DocCommandArgs>(docOptions, examples);

const handler = async (args: ConfigFlags) => {
	// HTML generation uses TypeDoc's shiki syntax highlighter which requires
	// WebAssembly Promise APIs. GJS / SpiderMonkey 128 does not support WASM,
	// so HTML output cannot run in the GJS bundle. Use Node for `doc`.
	if (typeof __GJS_BUNDLE__ !== "undefined") {
		process.stderr.write(
			"The 'doc' command is not supported in the GJS bundle (shiki / WebAssembly).\n" +
				"Use Node.js instead: npx @ts-for-gir/cli doc\n",
		);
		process.exitCode = 1;
		return;
	}
	const config = getOptionsGeneration(await load(args));
	if (config.merge) {
		if (!config.jsonDir) {
			throw new Error("--jsonDir is required when using --merge mode");
		}
		const generator = new HtmlDocGenerator(config, new NSRegistry());
		await generator.generateFromJson(config.jsonDir);
		return;
	}

	await runGenerationCommand(args, {
		generatorType: GeneratorType.HTML_DOC,
		loggerName: "DocCommand",
		configureRegistry: (registry) => {
			registry.registerFormatter("dts", new TypeScriptFormatter());
		},
	});
};

export const doc = {
	command,
	description,
	builder,
	handler,
	examples,
};
