/**
 * Default values, parse the config file and handle CLI flags
 */

import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import type { ConfigFlags, OptionsGeneration, UserConfig, UserConfigLoadResult } from "@ts-for-gir/lib";
import { APP_NAME, APP_USAGE, ERROR_CONFIG_EXTENSION_UNSUPPORTED, isEqual, Logger, merge } from "@ts-for-gir/lib";
import { type Options as ConfigSearchOptions, cosmiconfig } from "cosmiconfig";
import type { Options } from "yargs";

const logger = new Logger(false, "Config");

export const appName = APP_NAME;

export const usage = APP_USAGE;

/**
 * Default cli flag and argument values
 */
export const defaults = {
	print: false,
	configName: ".ts-for-girrc.js",
	root: process.cwd(),
	outdir: "./@types",
	girDirectories: getDefaultGirDirectories(),
	modules: ["*"],
	ignore: [],
	verbose: false,
	ignoreVersionConflicts: false,
	noNamespace: false,
	noComments: false,
	promisify: true,
	npmScope: "@girs",
	workspace: false,
	onlyVersionPrefix: false,
	noPrettyPrint: false,
	// Disabled by default because advanced variants are complicated,
	// it does impact performance (especially on older typescript versions)
	// and we'd need to test it works with the updated bindings
	noAdvancedVariants: true,
	package: false,
};

export let configFilePath = join(process.cwd(), defaults.configName);

/**
 * CLI options used in commands/generate.ts and commands/list.ts
 */
export const options: { [name: string]: Options } = {
	modules: {
		description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
		array: true,
		default: defaults.modules,
		normalize: true,
	},
	girDirectories: {
		type: "string",
		alias: "g",
		description: "GIR directories",
		array: true,
		default: defaults.girDirectories,
		normalize: true,
	},
	root: {
		type: "string",
		description: "Root directory of your project",
		default: defaults.root,
		normalize: true,
	},
	outdir: {
		type: "string",
		alias: "o",
		description: "Directory to output to",
		default: defaults.outdir,
		normalize: true,
	},
	ignore: {
		type: "string",
		alias: "i",
		description: "Modules that should be ignored",
		array: true,
		default: defaults.ignore,
		normalize: true,
	},
	verbose: {
		type: "boolean",
		alias: "v",
		description: "Switch on/off the verbose mode",
		default: defaults.verbose,
		normalize: true,
	},
	ignoreVersionConflicts: {
		type: "boolean",
		description: "Skip prompts for library version selection when multiple versions are detected",
		default: defaults.ignoreVersionConflicts,
		normalize: true,
	},
	print: {
		type: "boolean",
		alias: "p",
		description: "Print the output to console and create no files",
		default: defaults.print,
		normalize: true,
	},
	configName: {
		type: "string",
		description: "Specify a custom name for the configuration file",
		default: defaults.configName,
		normalize: true,
	},
	noNamespace: {
		type: "boolean",
		alias: "d",
		description: "Do not export all symbols for each module as a namespace",
		default: defaults.noNamespace,
		normalize: true,
	},
	noComments: {
		type: "boolean",
		alias: "n",
		description: "Do not generate documentation comments",
		default: defaults.noComments,
		normalize: true,
	},
	promisify: {
		type: "boolean",
		description: "Generate promisified functions for async/finish calls",
		default: defaults.promisify,
		normalize: true,
	},
	npmScope: {
		type: "string",
		description: "Scope of the generated NPM packages",
		default: defaults.npmScope,
		normalize: true,
	},
	workspace: {
		type: "boolean",
		description:
			"Uses the workspace protocol for the generated packages which can be used with package managers like Yarn and PNPM",
		default: defaults.workspace,
		normalize: true,
	},
	onlyVersionPrefix: {
		type: "boolean",
		description:
			"Only use the version prefix for the ambient module exports. This is useful if, for whatever reason, you want to use different library versions of the same library in your project.",
		default: defaults.onlyVersionPrefix,
		normalize: true,
	},
	noPrettyPrint: {
		type: "boolean",
		description: "Do not prettify the generated types",
		default: defaults.noPrettyPrint,
		normalize: true,
	},
	noAdvancedVariants: {
		type: "boolean",
		description: "Disable GLib.Variant class with string parsing",
		default: defaults.noAdvancedVariants,
		normalize: true,
	},
	package: {
		type: "boolean",
		description: "Generate the typescript types with package.json support",
		default: defaults.package,
		normalize: true,
	},
};

/**
 * CLI flags used in commands/generate.ts
 */
export const generateOptions = {
	modules: options.modules,
	girDirectories: options.girDirectories,
	root: options.root,
	outdir: options.outdir,
	ignore: options.ignore,
	verbose: options.verbose,
	ignoreVersionConflicts: options.ignoreVersionConflicts,
	print: options.print,
	configName: options.configName,
	noNamespace: options.noNamespace,
	noComments: options.noComments,
	promisify: options.promisify,
	npmScope: options.npmScope,
	workspace: options.workspace,
	onlyVersionPrefix: options.onlyVersionPrefix,
	noPrettyPrint: options.noPrettyPrint,
	noAdvancedVariants: options.noAdvancedVariants,
	package: options.package,
};

export const listOptions = {
	modules: options.modules,
	girDirectories: options.girDirectories,
	root: options.root,
	ignore: options.ignore,
	configName: options.configName,
	verbose: options.verbose,
};

export const copyOptions = {
	modules: options.modules,
	girDirectories: options.girDirectories,
	root: options.root,
	outdir: options.outdir,
	ignore: options.ignore,
	configName: options.configName,
	verbose: options.verbose,
};

export const docOptions = {
	modules: options.modules,
	girDirectories: options.girDirectories,
	root: options.root,
	outdir: options.outdir,
	ignore: options.ignore,
	verbose: options.verbose,
	ignoreVersionConflicts: options.ignoreVersionConflicts,
	configName: options.configName,
};

/**
 * Overwrites values in the user config file
 * @param configsToAdd
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

/**
 * The user can create a `.ts-for-girrc` file for his default configs,
 * this method load this config file an returns the user configuration
 * @param configName If the user uses a custom config file name
 */
async function loadConfigFile(configName?: string): Promise<UserConfigLoadResult | null> {
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
	const configFile: UserConfigLoadResult | null = await cosmiconfig(appName, configSearchOptions).search();
	if (configFile?.filepath) {
		configFilePath = configFile.filepath;
	}

	return configFile;
}

export function getOptionsGeneration(config: UserConfig): OptionsGeneration {
	const generateConfig: OptionsGeneration = {
		...config,
	};
	return generateConfig;
}

export function validate(config: UserConfig): UserConfig {
	return config;
}

/**
 * Loads the values of the config file and concatenate them with passed cli flags / arguments.
 * The values from config file are preferred if the cli flag value is the default (and so not set / overwritten)
 * @param options
 */
export async function load(cliOptions: ConfigFlags): Promise<UserConfig> {
	const configFile = await loadConfigFile(cliOptions.configName);
	const configFileData = configFile?.config || {};

	const userConfig: UserConfig = {
		...cliOptions,
	};

	if (configFileData) {
		// verbose
		if (userConfig.verbose === options.verbose.default && typeof configFileData.verbose === "boolean") {
			userConfig.verbose = configFileData.verbose;
		}
		// ignoreVersionConflicts
		if (
			userConfig.ignoreVersionConflicts === options.ignoreVersionConflicts.default &&
			typeof configFileData.ignoreVersionConflicts === "boolean"
		) {
			userConfig.ignoreVersionConflicts = configFileData.ignoreVersionConflicts;
		}
		// print
		if (userConfig.print === options.print.default && typeof configFileData.print === "boolean") {
			userConfig.print = configFileData.print;
		}
		// root
		if (userConfig.root === options.root.default && (configFileData.root || configFile?.filepath)) {
			// Use the config file path as the root path if no root path is set
			userConfig.root =
				configFileData.root || (configFile?.filepath ? dirname(configFile.filepath) : (options.root.default as string));
		}
		// outdir
		if (userConfig.outdir === options.outdir.default && configFileData.outdir) {
			userConfig.outdir = userConfig.print ? null : configFileData.outdir;
		}
		// girDirectories
		if (userConfig.girDirectories === options.girDirectories.default && configFileData.girDirectories) {
			userConfig.girDirectories = configFileData.girDirectories;
		}
		// ignore
		if (
			(!userConfig.ignore || userConfig.ignore.length <= 0 || isEqual(userConfig.ignore, defaults.ignore)) &&
			configFileData.ignore
		) {
			userConfig.ignore = configFileData.ignore;
		}
		// modules
		if ((userConfig.modules.length <= 0 || isEqual(userConfig.modules, defaults.modules)) && configFileData.modules) {
			userConfig.modules = configFileData.modules;
		}
		// noNamespace
		if (userConfig.noNamespace === options.noNamespace.default && typeof configFileData.noNamespace === "boolean") {
			userConfig.noNamespace = configFileData.noNamespace;
		}
		// noComments
		if (userConfig.noComments === options.noComments.default && typeof configFileData.noComments === "boolean") {
			userConfig.noComments = configFileData.noComments;
		}
		// promisify
		if (userConfig.promisify === options.promisify.default && typeof configFileData.promisify === "boolean") {
			userConfig.promisify = configFileData.promisify;
		}
		// npmScope
		if (userConfig.npmScope === options.npmScope.default && configFileData.npmScope) {
			userConfig.npmScope = configFileData.npmScope;
		}
		// workspace
		if (userConfig.workspace === options.workspace.default && typeof configFileData.workspace === "boolean") {
			userConfig.workspace = configFileData.workspace;
		}
		// onlyVersionPrefix
		if (
			userConfig.onlyVersionPrefix === options.onlyVersionPrefix.default &&
			typeof configFileData.onlyVersionPrefix === "boolean"
		) {
			userConfig.onlyVersionPrefix = configFileData.onlyVersionPrefix;
		}
		// noPrettyPrint
		if (
			userConfig.noPrettyPrint === options.noPrettyPrint.default &&
			typeof configFileData.noPrettyPrint === "boolean"
		) {
			userConfig.noPrettyPrint = configFileData.noPrettyPrint;
		}
		// noAdvancedVariants
		if (
			userConfig.noAdvancedVariants === options.noAdvancedVariants.default &&
			typeof configFileData.noAdvancedVariants === "boolean"
		) {
			userConfig.noAdvancedVariants = configFileData.noAdvancedVariants;
		}
		// package
		if (userConfig.package === options.package.default && typeof configFileData.package === "boolean") {
			userConfig.package = configFileData.package;
		}
	}

	// If outdir is not absolute, make it absolute to the root path
	if (userConfig.outdir && !userConfig.outdir?.startsWith("/")) {
		userConfig.outdir = resolve(userConfig.root, userConfig.outdir);
	}

	// Same for girDirectories
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

function getDefaultGirDirectories(): string[] {
	const girDirectories = [
		"/usr/local/share/gir-1.0",
		"/usr/share/gir-1.0",
		"/usr/share/*/gir-1.0",
		"/usr/share/gnome-shell",
		"/usr/share/gnome-shell/gir-1.0",
		"/usr/lib64/mutter-*",
		"/usr/lib/mutter-*",
		"/usr/lib/x86_64-linux-gnu/mutter-*",
	];
	// NixOS and other distributions does not have a /usr/local/share directory.
	// Instead, the nix store paths with Gir files are set as XDG_DATA_DIRS.
	// See https://github.com/NixOS/nixpkgs/blob/96e18717904dfedcd884541e5a92bf9ff632cf39/pkgs/development/libraries/gobject-introspection/setup-hook.sh#L7-L10
	const dataDirs = process.env.XDG_DATA_DIRS?.split(":") || [];
	for (let dataDir of dataDirs) {
		dataDir = join(dataDir, "gir-1.0");
		if (!girDirectories.includes(dataDir) && existsSync(dataDir)) {
			girDirectories.push(dataDir);
		}
	}
	return girDirectories;
}
