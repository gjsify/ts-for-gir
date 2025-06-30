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

export const analyzeOptions = {
	reportFile: {
		type: "string" as const,
		alias: "f",
		description: "Path to the report file to analyze",
		demandOption: true,
		normalize: true,
	},
	severity: {
		type: "string" as const,
		alias: "s",
		description: "Filter by problem severity (debug, info, warning, error, critical)",
		array: true,
		choices: ["debug", "info", "warning", "error", "critical"],
	},
	category: {
		type: "string" as const,
		alias: "c",
		description: "Filter by problem category",
		array: true,
		choices: [
			"type_resolution",
			"parsing_failure",
			"generation_failure",
			"type_conflict",
			"dependency_issue",
			"configuration",
			"io_error",
			"general",
		],
	},
	namespace: {
		type: "string" as const,
		alias: "n",
		description: "Filter by namespace/module",
		array: true,
	},
	type: {
		type: "string" as const,
		alias: "t",
		description: "Filter by specific type name",
		array: true,
	},
	top: {
		type: "number" as const,
		description: "Show top N most problematic items",
		default: 10,
	},
	export: {
		type: "string" as const,
		alias: "e",
		description: "Export filtered results to file",
		normalize: true,
	},
	format: {
		type: "string" as const,
		description: "Output format (json, csv, table)",
		choices: ["json", "csv", "table"],
		default: "table",
	},
	detailed: {
		type: "boolean" as const,
		alias: "d",
		description: "Show detailed problem information",
		default: false,
	},
	summary: {
		type: "boolean" as const,
		description: "Show summary statistics only",
		default: false,
	},
	search: {
		type: "string" as const,
		description: "Search for problems containing specific text",
	},
	since: {
		type: "string" as const,
		description: "Show problems from a specific time range (ISO date)",
	},
	until: {
		type: "string" as const,
		description: "Show problems until a specific time (ISO date)",
	},
	verbose: {
		type: "boolean" as const,
		alias: "v",
		description: "Switch on/off the verbose mode",
		default: false,
	},
};
