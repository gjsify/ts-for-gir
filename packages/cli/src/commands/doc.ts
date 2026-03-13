/**
 * Everything you need for the `ts-for-gir doc` command is located here
 */

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
	if (args.merge) {
		const config = await load(args);
		const generateConfig = getOptionsGeneration(config);
		const jsonDir = generateConfig.jsonDir || args.jsonDir;
		if (!jsonDir) {
			throw new Error("--jsonDir is required when using --merge mode");
		}
		const registry = new NSRegistry();
		const generator = new HtmlDocGenerator(generateConfig, registry);
		await generator.generateFromJson(jsonDir);
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
