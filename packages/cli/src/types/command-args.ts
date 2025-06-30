/**
 * Base interface for all command arguments extending ConfigFlags
 */
export interface BaseCommandArgs {
    /** GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules */
    modules: string[]
    /** GIR directories */
    girDirectories: string[]
    /** Root directory of your project */
    root: string
    /** Modules that should be ignored */
    ignore: string[]
    /** Specify a custom name for the configuration file */
    configName: string
    /** Switch on/off the verbose mode */
    verbose: boolean
}

/**
 * Arguments for the generate command
 */
export interface GenerateCommandArgs extends BaseCommandArgs {
    /** Directory to output to */
    outdir: string | null
    /** Skip prompts for library version selection when multiple versions are detected */
    ignoreVersionConflicts: boolean
    /** Print the output to console and create no files */
    print: boolean
    /** Do not export all symbols for each module as a namespace */
    noNamespace: boolean
    /** Do not generate documentation comments */
    noComments: boolean
    /** Generate promisified functions for async/finish calls */
    promisify: boolean
    /** Scope of the generated NPM packages */
    npmScope: string
    /** Uses the workspace protocol for the generated packages which can be used with package managers like Yarn and PNPM */
    workspace: boolean
    /** Only use the version prefix for the ambient module exports */
    onlyVersionPrefix: boolean
    /** Do not prettify the generated types */
    noPrettyPrint: boolean
    /** Disable GLib.Variant class with string parsing */
    noAdvancedVariants: boolean
    /** Generate the typescript types with package.json support */
    package: boolean
    /** Enable generation problem reporter and create a detailed report file */
    reporter: boolean
    /** Output file path for the reporter */
    reporterOutput: string
}

/**
 * Arguments for the list command
 */
export interface ListCommandArgs extends BaseCommandArgs {
    // List command only uses base arguments
}

/**
 * Arguments for the copy command
 */
export interface CopyCommandArgs extends BaseCommandArgs {
    /** Directory to output to */
    outdir: string | null
}

/**
 * Arguments for the doc command
 */
export interface DocCommandArgs extends BaseCommandArgs {
    /** Directory to output to */
    outdir: string | null
    /** Skip prompts for library version selection when multiple versions are detected */
    ignoreVersionConflicts: boolean
}

/**
 * Arguments for the analyze command
 */
export interface AnalyzeCommandArgs {
    /** Path to the report file to analyze */
    reportFile: string
    /** Filter by problem severity (debug, info, warning, error, critical) */
    severity?: string[]
    /** Filter by problem category */
    category?: string[]
    /** Filter by namespace/module */
    namespace?: string[]
    /** Filter by specific type name */
    type?: string[]
    /** Show top N most problematic items */
    top?: number
    /** Export filtered results to file */
    export?: string
    /** Output format (json, csv, table) */
    format?: string
    /** Show detailed problem information */
    detailed?: boolean
    /** Show summary statistics only */
    summary?: boolean
    /** Search for problems containing specific text */
    search?: string
    /** Show problems from a specific time range (ISO date) */
    since?: string
    /** Show problems until a specific time (ISO date) */
    until?: string
    /** Switch on/off the verbose mode */
    verbose?: boolean
}