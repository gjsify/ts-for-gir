import { BuildType, Environment, ModuleType } from './index.js'

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
    /** Module type, can be CommonJS or ESM */
    moduleType?: ModuleType
    /** GIR directories */
    girDirectories: string[]
    /** Switch on/off the verbose mode */
    verbose: boolean
    /** Do not ask for package versions if multiple versions are found */
    ignoreVersionConflicts: boolean
    /** print the output to console and create no files */
    print: boolean
    /** prettifies the generated .d.ts files */
    pretty: boolean
    /** GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules */
    modules: string[]
    /** modules that should be ignored */
    ignore?: string[]
    /** Export all symbols for each module as a namespace */
    useNamespace: boolean
    /** Do not generate documentation comments */
    noComments: boolean
    /** Do not generate debugging inline comments */
    noDebugComments: boolean
}
