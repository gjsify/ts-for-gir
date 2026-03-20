/**
 * Types for config file
 */
export interface UserConfig {
	/** root / working directory of your project */
	root: string;
	/** directory to output to */
	outdir: string | null;
	/** GIR directories */
	girDirectories: string[];
	/** Switch on/off the verbose mode */
	verbose: boolean;
	/** Do not ask for package versions if multiple versions are found */
	ignoreVersionConflicts: boolean;
	/** print the output to console and create no files */
	print: boolean;
	/** GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules */
	modules: string[];
	/** modules that should be ignored */
	ignore?: string[];
	/** Do not export all symbols for each module as a namespace */
	noNamespace: boolean;
	/** Do not generate documentation comments */
	noComments: boolean;
	/** Generate promisified functions for async/finish calls */
	promisify: boolean;
	/** Scope of the generated NPM packages */
	npmScope: string;
	/** Uses the workspace protocol for the generated packages which can be used with package managers like Yarn and PNPM */
	workspace: boolean;
	/**
	 * Only use the version prefix for the ambient module exports.
	 * This is useful if, for whatever reason, you want to use different library versions of the same library in your project.
	 *
	 * @example
	 * ```ts
	 * declare module 'gi://Gtk?version=4.0' {...}
	 * declare module 'gi://Gtk?version=3.0' {...}
	 * ```
	 */
	onlyVersionPrefix: boolean;
	/** Do not prettify the generated types */
	noPrettyPrint: boolean;
	/** Disable GLib.Variant class with string parsing */
	noAdvancedVariants: boolean;
	/**
	 * Generate the typescript types with package.json support
	 */
	package: boolean;
	/**
	 * Enable generation problem reporter and create a detailed report file
	 */
	reporter: boolean;
	/**
	 * Output file path for the reporter
	 */
	reporterOutput: string;
	/** Generate a single unified documentation for all modules instead of separate per-module docs */
	combined?: boolean;
	/** URL template for source links in generated documentation. Supports {path}, {line}, {gitRevision} placeholders */
	sourceLinkTemplate?: string;
	/** Theme for HTML documentation generation (default: "gi-docgen") */
	theme?: string;
	/** Path to a README file to use as the documentation index page (default: "none") */
	readme?: string;
	/** Use TypeDoc merge mode to generate HTML from pre-generated JSON files */
	merge?: boolean;
	/** Directory containing pre-generated TypeDoc JSON files for merge mode (from 'ts-for-gir json') */
	jsonDir?: string;
}
