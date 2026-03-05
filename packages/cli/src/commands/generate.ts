/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { GeneratorType } from "@ts-for-gir/generator-base";
import { APP_NAME, type ConfigFlags } from "@ts-for-gir/lib";
import { generateOptions } from "../config.ts";
import { TypeScriptFormatter } from "../formatters/typescript-formatter.ts";
import type { GenerateCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";
import { runGenerationCommand } from "./run-generation-command.ts";

const command = "generate [modules..]";

const description = "Generates Typescript type definition .d.ts files from GIR for GJS";

const examples: ReadonlyArray<[string, string?]> = [
	[
		`${APP_NAME} generate`,
		`Run '${APP_NAME} generate' in your gjs project to generate typings for your project, pass the gir modules you need for your project`,
	],
	[`${APP_NAME} generate 'Gtk*'`, "You can also use wild cards"],
	[`${APP_NAME} generate '*'`, "If you want to parse all of your locally installed gir modules run"],
	[`${APP_NAME} generate --configName='.ts-for-gir.gtk4.rc.js`, "Use a special config file"],
	[`${APP_NAME} generate --ignore=Gtk-4.0 xrandr-1.3`, "Generate .d.ts. files but not for Gtk-4.0 and xrandr-1.3"],
];

const builder = createBuilder<GenerateCommandArgs>(generateOptions, examples);

const handler = async (args: ConfigFlags) => {
	await runGenerationCommand(args, {
		generatorType: GeneratorType.TYPES,
		loggerName: "GenerateCommand",
		configureRegistry: (registry) => {
			registry.registerFormatter("dts", new TypeScriptFormatter());
		},
	});
};

export const generate = {
	command,
	description,
	builder,
	handler,
	examples,
};
