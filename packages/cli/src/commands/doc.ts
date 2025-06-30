/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { GeneratorType } from "@ts-for-gir/generator-base";
import type { ConfigFlags } from "@ts-for-gir/lib";
import {
	configureConflictsReporter,
	ERROR_NO_MODULES_FOUND,
	type GirModule,
	Logger,
	NSRegistry,
	TypeIdentifier,
} from "@ts-for-gir/lib";
import type { Argv, BuilderCallback } from "yargs";
import { docOptions, getOptionsGeneration, load } from "../config.ts";
import { GenerationHandler } from "../generation-handler.ts";
import { ModuleLoader } from "../module-loader.ts";
import type { DocCommandArgs } from "../types/index.ts";

const command = "doc [modules..]";

const description = "The HTML documentation generator is not yet implemented, but feel free to implement it 🤗";

const logger = new Logger(false, "DocCommand");

const builder: BuilderCallback<DocCommandArgs, ConfigFlags> = (yargs: Argv<DocCommandArgs>) => {
	const optionNames = Object.keys(docOptions);
	for (const optionName of optionNames) {
		yargs = yargs.option(optionName, docOptions[optionName]);
	}
	return yargs.example(examples) as Argv<ConfigFlags>;
};

const handler = async (args: ConfigFlags) => {
	const config = await load(args);

	const generateConfig = getOptionsGeneration(config);
	const registry = new NSRegistry(); // TODO: Use singleton

	// Configure reporters BEFORE parsing to capture all problems
	if (generateConfig.reporter) {
		TypeIdentifier.configureReporter(generateConfig.reporter, generateConfig.reporterOutput);
		configureConflictsReporter(generateConfig.reporter, generateConfig.reporterOutput);
	}

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
	const tsForGir = new GenerationHandler(generateConfig, GeneratorType.HTML_DOC, registry);

	await tsForGir.start(Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module as GirModule));
};

const examples: ReadonlyArray<[string, string?]> = [];

export const doc = {
	command,
	description,
	builder,
	handler,
	examples,
};
