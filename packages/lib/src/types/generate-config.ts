export type ModuleResolution = 'package' | 'file'

/**
 * Type for currently used config e.g. in GirModule
 */
export interface GenerateConfig {
    /** root / working directory of your project */
    root: string
    /** directory to output to */
    outdir: string | null
    /** GIR directories */
    girDirectories: string[]
    /** Switch on/off the verbose mode */
    verbose: boolean
    /** Do not export all symbols for each module as a namespace */
    noNamespace: boolean
    /** Do not generate documentation comments */
    noComments: boolean
    /** Do not generate debugging inline comments */
    noDebugComments: boolean
    /** Fix Inheritance and implementation type conflicts */
    fixConflicts: boolean
    /** Generate a tsconfig alias */
    generateAlias: boolean
    /** Generate promisified functions for async/finish calls */
    promisify: boolean
    /**
     * Scope of the generated NPM packages
     * @see https://docs.npmjs.com/cli/v7/using-npm/scope
     */
    npmScope: string
    /** Adds Yarn workspace support to the NPM packages */
    packageYarn: boolean
    /** How imports within modules should resolve other modules */
    moduleResolution: ModuleResolution
    /** Disable pretty printing the output */
    noPrettyPrint: boolean
    /** Disable GLib.Variant class with string parsing */
    noAdvancedVariants: boolean
}
