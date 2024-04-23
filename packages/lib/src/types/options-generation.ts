import type { OptionsBase } from './index.js'

/**
 * Type for currently used config e.g. in GirModule
 */
export interface OptionsGeneration extends OptionsBase {
    /** root / working directory of your project */
    root: string
    /** directory to output to */
    outdir: string | null
    /** GIR directories */
    girDirectories: string[]
    /** Do not export all symbols for each module as a namespace */
    noNamespace: boolean
    /** Do not generate documentation comments */
    noComments: boolean
    /** Do not generate debugging inline comments */
    noDebugComments: boolean
    /** Fix Inheritance and implementation type conflicts */
    fixConflicts: boolean
    /** Generate promisified functions for async/finish calls */
    promisify: boolean
    /**
     * Scope of the generated NPM packages
     * @see https://docs.npmjs.com/cli/v7/using-npm/scope
     */
    npmScope: string
    /** Adds Yarn workspace support to the NPM packages */
    packageYarn: boolean
    /** Disable pretty printing the output */
    noPrettyPrint: boolean
    /** Disable GLib.Variant class with string parsing */
    noAdvancedVariants: boolean
}