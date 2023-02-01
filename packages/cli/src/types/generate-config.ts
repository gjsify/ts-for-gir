import { BuildType, Environment, ModuleType } from './index.js'

/**
 * Type for currently used config e.g. in GirModule
 */
export interface GenerateConfig {
    /** javascript environment */
    environment: Environment
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
    /** prettifies the generated .d.ts files */
    pretty: boolean
    /** Do not export all symbols for each module as a namespace */
    noNamespace: boolean
    /** Do not generate documentation comments */
    noComments: boolean
    /** Do not generate debugging inline comments */
    noDebugComments: boolean
    /** Disable typescript semantic checks using @ts-nocheck */
    noCheck: boolean
    /** Fix Inheritance and implementation type conflicts */
    fixConflicts: boolean
    /** Disables the generation of types that are in conflict with the DOM types */
    noDOMLib: boolean
    /** Generate types for GNOME Shell */
    gnomeShellTypes: boolean
    /** Generate a tsconfig alias */
    generateAlias: boolean
    /** Generate promisified functions for async/finish calls */
    promisify: boolean
}
