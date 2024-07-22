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
    /** Generate promisified functions for async/finish calls */
    promisify: boolean
    /**
     * Scope of the generated NPM packages
     * @see https://docs.npmjs.com/cli/v7/using-npm/scope
     */
    npmScope: string
    /** Uses the workspace protocol for the generated packages which can be used with package managers like Yarn and PNPM */
    workspace: boolean
    /** Disable GLib.Variant class with string parsing */
    noAdvancedVariants: boolean
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
    onlyVersionPrefix: boolean
    /** Disable pretty printing the output */
    noPrettyPrint: boolean
    /**
     * Generate the typescript types with package.json support
     */
    package: boolean
}
