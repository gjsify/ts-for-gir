import { BuildType, Environment } from '.'

/**
 * Types for config file
 */
export interface UserConfig {
    environments: Environment[]
    outdir: string | null
    buildType?: BuildType
    girDirectory: string
    verbose: boolean
    ignoreConflicts: boolean
    print: boolean
    pretty: boolean
    modules: string[]
    ignore?: string[]
}
