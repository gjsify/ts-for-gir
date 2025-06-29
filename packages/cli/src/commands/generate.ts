/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { GeneratorType } from "@ts-for-gir/generator-base";
import type { ConfigFlags } from "@ts-for-gir/lib";
import { ERROR_NO_MODULES_FOUND, type GirModule, Logger, NSRegistry } from "@ts-for-gir/lib";
import { appName, generateOptions, getOptionsGeneration, load } from "../config.ts";
import { TypeScriptFormatter } from "../formatters/typescript-formatter.ts";
import { GenerationHandler } from "../generation-handler.ts";
import { ModuleLoader } from "../module-loader.ts";
import type { GenerateCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";

const command = "generate [modules..]";

const description = "Generates Typescript type definition .d.ts files from GIR for GJS";

const logger = new Logger(false, "GenerateCommand");

const examples: ReadonlyArray<[string, string?]> = [
	[
		`${appName} generate`,
		`Run '${appName} generate' in your gjs project to generate typings for your project, pass the gir modules you need for your project`,
	],
	[`${appName} generate Gtk*`, "You can also use wild cards"],
	[`${appName} generate '*'`, "If you want to parse all of your locally installed gir modules run"],
	[`${appName} generate --configName='.ts-for-gir.gtk4.rc.js`, "Use a special config file"],
	[`${appName} generate --ignore=Gtk-4.0 xrandr-1.3`, "Generate .d.ts. files but not for Gtk-4.0 and xrandr-1.3"],
];

const builder = createBuilder<GenerateCommandArgs>(generateOptions, examples);

const handler = async (args: ConfigFlags) => {
	const config = await load(args);

	const generateConfig = getOptionsGeneration(config);
	const registry = new NSRegistry(); // TODO: Use singleton

	// Register TypeScript formatter for .d.ts files
	registry.registerFormatter("dts", new TypeScriptFormatter());

	const moduleLoader = new ModuleLoader(generateConfig, registry);
	const { keep } = await moduleLoader.getModulesResolved(
		config.modules,
		config.ignore || [],
		config.ignoreVersionConflicts,
	);

	if (keep.length === 0) {
		logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories));
		return;
	}

	moduleLoader.parse(keep);

	const tsForGir = new GenerationHandler(generateConfig, GeneratorType.TYPES, registry);

	const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module as GirModule);

	await tsForGir.start(girModules);
};

export const generate = {
	command,
	description,
	builder,
	handler,
	examples,
};
