import { BuildType, Environment } from '.'

/**
 * Types for config file
 */
export interface UserConfig {
    /** javascript environment */
    environments: Environment[]
    /** directory to output to */
    outdir: string | null
    /** Definitions generation type */
    buildType?: BuildType
    /** GIR directories */
    girDirectories: string[]
    /** Switch on/off the verbose mode */
    verbose: boolean
    /** Do not ask for package versions if multiple versions are found */
    ignoreConflicts: boolean
    /** print the output to console and create no files */
    print: boolean
    /** prettifies the generated .d.ts files */
    pretty: boolean
    /** GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules */
    modules: string[]
    /** modules that should be ignored */
    ignore?: string[]
    /** Export all symbols for each module as a single entity using ES6 export default */
    exportDefault: boolean
    /** Do not generate documentation comments */
    noComments: boolean
}
