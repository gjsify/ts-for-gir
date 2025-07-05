/**
 * Everything you need for the `ts-for-gir copy` command is located here
 */

import { copyFile, mkdir } from "node:fs/promises";
import { basename, join } from "node:path";
import type { ConfigFlags, GirModuleResolvedBy, UserConfig } from "@ts-for-gir/lib";
import { APP_NAME, ERROR_NO_MODULES_FOUND, Logger, NSRegistry } from "@ts-for-gir/lib";
import { copyOptions, getOptionsGeneration, load } from "../config.ts";
import { ModuleLoader } from "../module-loader.ts";
import type { CopyCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";

const command = "copy [modules..]";

const description = "Scan for *.gir files and copy them to a new directory";

const logger = new Logger(false, "CopyCommand");

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} copy -o ./gir`, "Copy found *.gir files to ./gir"],
	[
		`${APP_NAME} copy -g /usr/share/gir-1.0 --ignore=Gtk-3.0 xrandr-1.3 -o ./gir`,
		"Copy all found *.gir files in /usr/share/gir-1.0 excluding Gtk-3.0 and xrandr-1.3 to ./gir",
	],
];

const builder = createBuilder<CopyCommandArgs>(copyOptions, examples);

const copyGirFile = async (config: UserConfig, depModule: GirModuleResolvedBy) => {
	if (!depModule.path) {
		logger.danger(`- ${depModule.packageName} not found`);
		return;
	}
	if (!config.outdir) {
		logger.error("outdir not found");
		return;
	}
	const filename = basename(depModule.path);
	const dest = join(config.outdir, filename);
	if (depModule.path === dest) {
		logger.yellow(`Skip ${depModule.path}`);
		return;
	}
	logger.success(`Copy ${depModule.path}`);
	await copyFile(depModule.path, dest);
};

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

	if (!config.outdir) {
		logger.error("outdir not found");
		return;
	}

	await mkdir(config.outdir, { recursive: true }).catch((err) => {
		logger.error(`Failed to copy gir files to ${config.outdir}: ${err}`);
	});

	for (const module of moduleGroups) {
		for (const mod of module.modules) {
			await copyGirFile(config, mod);
		}
	}

	if (failed.length > 0) {
		logger.danger("\nDependencies not found:");
		for (const fail of failed) {
			logger.white(`- ${fail}`);
		}
	}
};

export const copy = {
	command,
	description,
	builder,
	handler,
	examples,
};
