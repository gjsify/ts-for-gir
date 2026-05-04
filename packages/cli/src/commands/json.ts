/**
 * Everything you need for the `ts-for-gir json` command is located here
 */

import { GeneratorType } from "@ts-for-gir/generator-base";
import { APP_NAME, type ConfigFlags } from "@ts-for-gir/lib";
import { generateOptions } from "../config.ts";
import { TypeScriptFormatter } from "../formatters/typescript-formatter.ts";
import type { GenerateCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";
import { runGenerationCommand } from "./run-generation-command.ts";

const command = "json [modules..]";

const description = "Generates JSON representation from GIR files for analysis and tooling";

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} json`, `Run '${APP_NAME} json' in your gjs project to generate JSON files for your project`],
	[`${APP_NAME} json 'Gtk*'`, "You can also use wild cards"],
	[`${APP_NAME} json '*'`, "If you want to parse all of your locally installed gir modules run"],
	[`${APP_NAME} json --configName='.ts-for-gir.gtk4.rc.js`, "Use a special config file"],
	[`${APP_NAME} json --ignore=Gtk-4.0 xrandr-1.3`, "Generate JSON files but not for Gtk-4.0 and xrandr-1.3"],
];

const builder = createBuilder<GenerateCommandArgs>(generateOptions, examples);

const handler = async (args: ConfigFlags) => {
	await runGenerationCommand(args, {
		generatorType: GeneratorType.JSON,
		loggerName: "JsonCommand",
		configureRegistry: (registry) => {
			registry.registerFormatter("dts", new TypeScriptFormatter());
		},
	});
};

export const json = {
	command,
	description,
	builder,
	handler,
	examples,
};
