/**
 * Config writer functionality for ts-for-gir
 */

import { writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import type { UserConfig } from "@ts-for-gir/lib";
import { ERROR_CONFIG_EXTENSION_UNSUPPORTED, Logger, merge } from "@ts-for-gir/lib";
import { loadConfigFile } from "./config-loader.ts";
import { defaults } from "./defaults.ts";

const logger = new Logger(false, "ConfigWriter");

export let configFilePath = join(process.cwd(), defaults.configName);

/**
 * Update the config file path when a config is loaded
 */
export function setConfigFilePath(path: string): void {
	configFilePath = path;
}

/**
 * Overwrites values in the user config file
 * @param configsToAdd Configuration values to add/update
 * @param configName Optional custom config file name
 */
export async function addToConfig(configsToAdd: Partial<UserConfig>, configName?: string): Promise<void> {
	const userConfig = await loadConfigFile(configName);
	const path = userConfig?.filepath || configFilePath;
	const configToStore = {};
	merge(configToStore, userConfig?.config || {}, configsToAdd);

	const fileExtension = extname(path);
	let writeConfigString = "";

	switch (fileExtension) {
		case ".js":
			writeConfigString = `export default ${JSON.stringify(configToStore, null, 4)}`;
			break;
		case ".json":
			writeConfigString = `${JSON.stringify(configToStore, null, 4)}`;
			break;
		default:
			logger.error(ERROR_CONFIG_EXTENSION_UNSUPPORTED);
			break;
	}

	if (writeConfigString && path) {
		return writeFile(path, writeConfigString);
	}
}
