/**
 * CLI options definitions for ts-for-gir commands
 */

import type { Options } from "yargs";
import { defaults } from "./defaults.ts";

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
	reporter: {
		type: "boolean",
		description: "Enable generation problem reporter and create a detailed report file",
		default: defaults.reporter,
		normalize: true,
	},
	reporterOutput: {
		type: "string",
		description: "Output file path for the reporter (default: ts-for-gir-report.json)",
		default: defaults.reporterOutput,
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
	reporter: options.reporter,
	reporterOutput: options.reporterOutput,
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
	reporter: options.reporter,
	reporterOutput: options.reporterOutput,
};
