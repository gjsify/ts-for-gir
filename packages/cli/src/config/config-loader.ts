/**
 * Config loader functionality for ts-for-gir
 */

import { dirname, resolve } from "node:path";
import type { ConfigFlags, OptionsGeneration, UserConfig, UserConfigLoadResult } from "@ts-for-gir/lib";
import { APP_NAME, isEqual } from "@ts-for-gir/lib";
import { type Options as ConfigSearchOptions, cosmiconfig } from "cosmiconfig";
import { setConfigFilePath } from "./config-writer.ts";
import { defaults } from "./defaults.ts";
import { docOptions, options } from "./options.ts";

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
const isBoolean = (v: unknown) => typeof v === "boolean";

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
		// Boolean options — config file overrides CLI defaults
		const booleanKeys: Array<[keyof UserConfig, unknown]> = [
			["verbose", options.verbose.default],
			["ignoreVersionConflicts", options.ignoreVersionConflicts.default],
			["print", options.print.default],
			["noNamespace", options.noNamespace.default],
			["noComments", options.noComments.default],
			["promisify", options.promisify.default],
			["workspace", options.workspace.default],
			["onlyVersionPrefix", options.onlyVersionPrefix.default],
			["noPrettyPrint", options.noPrettyPrint.default],
			["noAdvancedVariants", options.noAdvancedVariants.default],
			["package", options.package.default],
			["reporter", options.reporter.default],
			["combined", docOptions.combined.default],
			["merge", docOptions.merge.default],
		];
		for (const [key, defaultVal] of booleanKeys) {
			mergeConfigValue(userConfig, configFileData, key, defaultVal, isBoolean);
		}

		// String options — config file overrides CLI defaults
		const stringKeys: Array<[keyof UserConfig, unknown]> = [
			["npmScope", options.npmScope.default],
			["reporterOutput", options.reporterOutput.default],
			["depVersionFormat", undefined],
			["theme", docOptions.theme.default],
			["sourceLinkTemplate", undefined],
			["readme", undefined],
			["jsonDir", undefined],
		];
		for (const [key, defaultVal] of stringKeys) {
			mergeConfigValue(userConfig, configFileData, key, defaultVal);
		}

		// Array options — config file overrides CLI defaults
		const arrayKeys: Array<[keyof UserConfig, unknown]> = [
			["girDirectories", options.girDirectories.default],
			["ignore", options.ignore.default],
			["modules", options.modules.default],
		];
		for (const [key, defaultVal] of arrayKeys) {
			mergeConfigValue(userConfig, configFileData, key, defaultVal);
		}

		// Special handling for root
		if (userConfig.root === options.root.default && (configFileData.root || configFile?.filepath)) {
			userConfig.root =
				configFileData.root || (configFile?.filepath ? dirname(configFile.filepath) : (options.root.default as string));
		}

		// Special handling for outdir (override with config file value if still at a default)
		const isDefaultOutdir = userConfig.outdir === options.outdir.default || userConfig.outdir === defaults.docOutdir;
		if (isDefaultOutdir && configFileData.outdir) {
			userConfig.outdir = userConfig.print ? null : configFileData.outdir;
		}
	}

	// Make paths absolute relative to root
	const resolveToRoot = (path: string) => (path.startsWith("/") ? path : resolve(userConfig.root, path));

	if (userConfig.outdir) {
		userConfig.outdir = resolveToRoot(userConfig.outdir);
	}
	if (userConfig.jsonDir) {
		userConfig.jsonDir = resolveToRoot(userConfig.jsonDir);
	}
	if (userConfig.girDirectories) {
		userConfig.girDirectories = userConfig.girDirectories.map(resolveToRoot);
	}

	return validate(userConfig);
}
