import { BuildType, Environment } from '.'

/**
 * Types for config file
 */
export interface UserConfig {
    environments: Environment[]
    outdir: string | null
    buildType?: BuildType
    girDirectories: string[]
    verbose: boolean
    ignoreConflicts: boolean
    print: boolean
    pretty: boolean
    modules: string[]
    ignore?: string[]
}
