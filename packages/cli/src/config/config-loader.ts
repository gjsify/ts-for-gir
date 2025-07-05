/**
 * Config loader functionality for ts-for-gir
 */

import { dirname, resolve } from "node:path";
import type { ConfigFlags, OptionsGeneration, UserConfig, UserConfigLoadResult } from "@ts-for-gir/lib";
import { APP_NAME, isEqual } from "@ts-for-gir/lib";
import { type Options as ConfigSearchOptions, cosmiconfig } from "cosmiconfig";
import { setConfigFilePath } from "./config-writer.ts";
import { options } from "./options.ts";

/**
 * The user can create a `.ts-for-girrc` file for his default configs,
 * this method load this config file an returns the user configuration
 * @param configName If the user uses a custom config file name
 */
export async function loadConfigFile(configName?: string): Promise<UserConfigLoadResult | null> {
	const configSearchOptions: Partial<ConfigSearchOptions> = {
		loaders: {
			// ESM loader
			".js": async (filepath) => {
				const file = await import(filepath);

				// Files with `exports.default = { ... }`
				if (file?.default?.default) {
					return file.default.default as Partial<UserConfig>;
				}
				// Files with `export default { ... }`
				if (file?.default) {
					return file.default as Partial<UserConfig>;
				}
				// Files with `export { ... }`
				return file as Partial<UserConfig>;
			},
		},
	};

	if (configName) {
		configSearchOptions.searchPlaces = [configName];
	}

	const configFile: UserConfigLoadResult | null = await cosmiconfig(APP_NAME, configSearchOptions).search();

	if (configFile?.filepath) {
		setConfigFilePath(configFile.filepath);
	}

	return configFile;
}

/**
 * Convert UserConfig to OptionsGeneration
 */
export function getOptionsGeneration(config: UserConfig): OptionsGeneration {
	const generateConfig: OptionsGeneration = {
		...config,
	};
	return generateConfig;
}

/**
 * Validate the configuration
 */
export function validate(config: UserConfig): UserConfig {
	return config;
}

/**
 * Merge a single config value from file config to user config
 * @param userConfig The user config object to update
 * @param configFileData The config file data to merge from
 * @param key The config key to merge
 * @param optionDefault The default value from options
 * @param validator Optional validation function
 */
function mergeConfigValue<K extends keyof UserConfig>(
	userConfig: UserConfig,
	configFileData: Partial<UserConfig>,
	key: K,
	optionDefault: unknown,
	validator?: (value: unknown) => boolean,
): void {
	const fileValue = configFileData[key];
	const userValue = userConfig[key];

	// Skip if no file value
	if (fileValue === undefined) return;

	// Apply validator if provided
	if (validator && !validator(fileValue)) return;

	// Check if user value is default
	const isDefault =
		userValue === optionDefault ||
		(Array.isArray(userValue) && Array.isArray(optionDefault) && isEqual(userValue, optionDefault));

	if (isDefault) {
		(userConfig[key] as UserConfig[K]) = fileValue as UserConfig[K];
	}
}

/**
 * Loads the values of the config file and concatenate them with passed cli flags / arguments.
 * The values from config file are preferred if the cli flag value is the default (and so not set / overwritten)
 * @param cliOptions CLI options passed by the user
 */
export async function load(cliOptions: ConfigFlags): Promise<UserConfig> {
	const configFile = await loadConfigFile(cliOptions.configName);
	const configFileData = configFile?.config || {};

	const userConfig: UserConfig = {
		...cliOptions,
	};

	if (configFileData) {
		// Boolean options
		mergeConfigValue(userConfig, configFileData, "verbose", options.verbose.default, (v) => typeof v === "boolean");
		mergeConfigValue(
			userConfig,
			configFileData,
			"ignoreVersionConflicts",
			options.ignoreVersionConflicts.default,
			(v) => typeof v === "boolean",
		);
		mergeConfigValue(userConfig, configFileData, "print", options.print.default, (v) => typeof v === "boolean");
		mergeConfigValue(
			userConfig,
			configFileData,
			"noNamespace",
			options.noNamespace.default,
			(v) => typeof v === "boolean",
		);
		mergeConfigValue(
			userConfig,
			configFileData,
			"noComments",
			options.noComments.default,
			(v) => typeof v === "boolean",
		);
		mergeConfigValue(userConfig, configFileData, "promisify", options.promisify.default, (v) => typeof v === "boolean");
		mergeConfigValue(userConfig, configFileData, "workspace", options.workspace.default, (v) => typeof v === "boolean");
		mergeConfigValue(
			userConfig,
			configFileData,
			"onlyVersionPrefix",
			options.onlyVersionPrefix.default,
			(v) => typeof v === "boolean",
		);
		mergeConfigValue(
			userConfig,
			configFileData,
			"noPrettyPrint",
			options.noPrettyPrint.default,
			(v) => typeof v === "boolean",
		);
		mergeConfigValue(
			userConfig,
			configFileData,
			"noAdvancedVariants",
			options.noAdvancedVariants.default,
			(v) => typeof v === "boolean",
		);
		mergeConfigValue(userConfig, configFileData, "package", options.package.default, (v) => typeof v === "boolean");
		mergeConfigValue(userConfig, configFileData, "reporter", options.reporter.default, (v) => typeof v === "boolean");

		// String options
		mergeConfigValue(userConfig, configFileData, "npmScope", options.npmScope.default);
		mergeConfigValue(userConfig, configFileData, "reporterOutput", options.reporterOutput.default);

		// Array options
		mergeConfigValue(userConfig, configFileData, "girDirectories", options.girDirectories.default);
		mergeConfigValue(userConfig, configFileData, "ignore", options.ignore.default);
		mergeConfigValue(userConfig, configFileData, "modules", options.modules.default);

		// Special handling for root
		if (userConfig.root === options.root.default && (configFileData.root || configFile?.filepath)) {
			// Use the config file path as the root path if no root path is set
			userConfig.root =
				configFileData.root || (configFile?.filepath ? dirname(configFile.filepath) : (options.root.default as string));
		}

		// Special handling for outdir
		if (userConfig.outdir === options.outdir.default && configFileData.outdir) {
			userConfig.outdir = userConfig.print ? null : configFileData.outdir;
		}
	}

	// Make paths absolute
	if (userConfig.outdir && !userConfig.outdir.startsWith("/")) {
		userConfig.outdir = resolve(userConfig.root, userConfig.outdir);
	}

	if (userConfig.girDirectories) {
		userConfig.girDirectories = userConfig.girDirectories.map((dir) => {
			if (!dir.startsWith("/")) {
				return resolve(userConfig.root, dir);
			}
			return dir;
		});
	}

	return validate(userConfig);
}
