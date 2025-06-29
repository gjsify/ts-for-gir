/**
 * Everything you need for the `ts-for-gir list` command is located here
 */

import type { ConfigFlags } from "@ts-for-gir/lib";
import { ERROR_NO_MODULES_FOUND, Logger, NSRegistry, ResolveType } from "@ts-for-gir/lib";
import { appName, getOptionsGeneration, listOptions, load } from "../config.ts";
import { ModuleLoader } from "../module-loader.ts";
import type { ListCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";

const command = "list [modules..]";

const description = "Lists all available GIR modules";

const logger = new Logger(false, "ListCommand");

const examples: ReadonlyArray<[string, string?]> = [
	[`${appName} list -g ./vala-girs/gir-1.0`, "Lists all available GIR modules in ./vala-girs/gir-1.0"],
	[
		`${appName} list --ignore=Gtk-3.0 xrandr-1.3`,
		"Lists all available GIR modules in /usr/share/gir-1.0 but not Gtk-3.0 and xrandr-1.3",
	],
];

const builder = createBuilder<ListCommandArgs>(listOptions, examples);

const handler = async (args: ConfigFlags) => {
	const config = await load(args);
	const generateConfig = getOptionsGeneration(config);
	const registry = new NSRegistry(); // TODO: Use singleton
	const moduleLoader = new ModuleLoader(generateConfig, registry);
	const { grouped, failed } = await moduleLoader.getModules(config.modules, config.ignore);
	const moduleGroups = Object.values(grouped);
	if (Object.keys(grouped).length === 0) {
		return logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories));
	}

	const conflictModules = moduleGroups.filter((moduleGroup) => moduleGroup.hasConflict);

	const byHandModules = moduleGroups.filter((moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.BY_HAND);

	const depModules = moduleGroups.filter((moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.DEPENDENCE);

	logger.info("\nSearch for gir files in:");
	for (const dir of config.girDirectories) {
		logger.white(`- ${dir}`);
	}

	logger.info("\nSelected Modules:");
	for (const moduleGroup of byHandModules) {
		for (const depModule of moduleGroup.modules) {
			logger.white(`- ${depModule.packageName}`);
			logger.gray(`  - ${depModule.path}`);
		}
	}

	if (depModules.length > 0) {
		logger.yellow("\nDependencies:");
		for (const moduleGroup of depModules) {
			for (const depModule of moduleGroup.modules) {
				logger.white(`- ${depModule.packageName}`);
				logger.gray(`- ${depModule.path}`);
			}
		}
	}

	if (conflictModules.length > 0) {
		logger.danger("\nConflicts:");
		for (const moduleGroup of conflictModules) {
			logger.white(`- ${moduleGroup.namespace}`);
			for (const conflictModule of moduleGroup.modules) {
				logger.white(`  - ${conflictModule.packageName}`);
				logger.gray(`  - ${conflictModule.path}`);
			}
		}
	}

	if (failed.length > 0) {
		logger.danger("\nDependencies not found:");
		for (const fail of failed) {
			logger.white(`- ${fail}`);
		}
	}
};

export const list = {
	command,
	description,
	builder,
	handler,
	examples,
};
