import { BuildType, Environment, ModuleType } from './index.js'

/**
 * Type for currently used config e.g. in GirModule
 */
export interface GenerateConfig {
    /** javascript environment */
    environment: Environment
    /** root / working directory of your project */
    root: string
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
    /** Do not export all symbols for each module as a namespace */
    noNamespace: boolean
    /** Do not generate documentation comments */
    noComments: boolean
    /** Do not generate debugging inline comments */
    noDebugComments: boolean
    /** Fix Inheritance and implementation type conflicts */
    fixConflicts: boolean
    /** Disables the generation of types that are in conflict with the DOM types */
    noDOMLib: boolean
    /** Generate a tsconfig alias */
    generateAlias: boolean
    /** Generate promisified functions for async/finish calls */
    promisify: boolean
    /**
     * Scope of the generated NPM packages
     * @see https://docs.npmjs.com/cli/v7/using-npm/scope
     */
    npmScope: string
    /** Generates an NPM compatible packages for each GIR module */
    package: boolean
    /** Adds Yarn workspace support to the NPM packages */
    packageYarn: boolean
}
