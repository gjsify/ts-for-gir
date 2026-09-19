/**
 * Everything you need for the `ts-for-gir list` command is located here
 */

import type { ConfigFlags } from "@ts-for-gir/lib";
import { APP_NAME, ERROR_NO_MODULES_FOUND, Logger, NSRegistry } from "@ts-for-gir/lib";
import { getOptionsGeneration, listOptions, load } from "../config.ts";
import { ModuleLoader } from "../module-loader.ts";
import type { ListCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";

const command = "list [modules..]";

const description = "Lists all available GIR modules";

const logger = new Logger(true, "ListCommand");

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} list -g ./vala-girs/gir-1.0`, "Lists all available GIR modules in ./vala-girs/gir-1.0"],
	[
		`${APP_NAME} list --ignore=Gtk-3.0 xrandr-1.3`,
		"Lists all available GIR modules in /usr/share/gir-1.0 but not Gtk-3.0 and xrandr-1.3",
	],
];

const builder = createBuilder<ListCommandArgs>(listOptions, examples);

const handler = async (args: ConfigFlags) => {
	const config = await load(args);
	const generateConfig = getOptionsGeneration(config);
	const registry = new NSRegistry();
	const moduleLoader = new ModuleLoader(generateConfig, registry);
	const { grouped, failed } = await moduleLoader.getModules(config.modules, config.ignore);
	const moduleGroups = Object.values(grouped);

	if (Object.keys(grouped).length === 0) {
		return logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories));
	}

	const conflictModules = moduleGroups.filter((moduleGroup) => moduleGroup.hasConflict);
	const allModules = moduleGroups.filter((moduleGroup) => !moduleGroup.hasConflict);

	logger.info("\nSearch for gir files in:");
	for (const dir of config.girDirectories) {
		logger.white(`- ${dir}`);
	}

	// Show all available modules
	logger.info("\nAvailable Modules:");
	for (const moduleGroup of allModules) {
		for (const module of moduleGroup.modules) {
			logger.white(`- ${module.packageName}`);
			logger.gray(`  - ${module.path}`);
		}
	}

	// Only show sections if there is actual content
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
