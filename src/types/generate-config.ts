import { BuildType, Environment } from '.'

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
    /** GIR directories */
    girDirectories: string[]
    /** Switch on/off the verbose mode */
    verbose: boolean
    /** prettifies the generated .d.ts files */
    pretty: boolean
    /** Export all symbols for each module as a single entity using ES6 export default */
    exportDefault: boolean
    /** Do not generate documentation comments */
    noComments: boolean
}
