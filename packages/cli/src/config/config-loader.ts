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
		// Boolean options
		mergeConfigValue(userConfig, configFileData, "verbose", options.verbose.default, isBoolean);
		mergeConfigValue(
			userConfig,
			configFileData,
			"ignoreVersionConflicts",
			options.ignoreVersionConflicts.default,
			isBoolean,
		);
		mergeConfigValue(userConfig, configFileData, "print", options.print.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "noNamespace", options.noNamespace.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "noComments", options.noComments.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "promisify", options.promisify.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "workspace", options.workspace.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "onlyVersionPrefix", options.onlyVersionPrefix.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "noPrettyPrint", options.noPrettyPrint.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "noAdvancedVariants", options.noAdvancedVariants.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "package", options.package.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "reporter", options.reporter.default, isBoolean);

		// String options
		mergeConfigValue(userConfig, configFileData, "npmScope", options.npmScope.default);
		mergeConfigValue(userConfig, configFileData, "reporterOutput", options.reporterOutput.default);

		// Doc-specific options
		mergeConfigValue(userConfig, configFileData, "combined", docOptions.combined.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "sourceLinkTemplate", undefined);
		mergeConfigValue(userConfig, configFileData, "theme", docOptions.theme.default);
		mergeConfigValue(userConfig, configFileData, "readme", docOptions.readme.default);
		mergeConfigValue(userConfig, configFileData, "merge", docOptions.merge.default, isBoolean);
		mergeConfigValue(userConfig, configFileData, "jsonDir", undefined);

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
