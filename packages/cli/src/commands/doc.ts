/**
 * Everything you need for the `ts-for-gir doc` command is located here
 */

import { GeneratorType } from "@ts-for-gir/generator-base";
import { APP_NAME, type ConfigFlags } from "@ts-for-gir/lib";
import { docOptions } from "../config.ts";
import { TypeScriptFormatter } from "../formatters/typescript-formatter.ts";
import type { DocCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";
import { runGenerationCommand } from "./run-generation-command.ts";

const command = "doc [modules..]";

const description = "Generates HTML documentation from GIR files using TypeDoc";

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} doc Gtk-4.0 --outdir ./docs`, "Generate HTML documentation for Gtk-4.0"],
	[`${APP_NAME} doc '*' --outdir ./docs`, "Generate documentation for all locally installed GIR modules"],
];

const builder = createBuilder<DocCommandArgs>(docOptions, examples);

const handler = async (args: ConfigFlags) => {
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
