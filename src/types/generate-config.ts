import { BuildType, Environment } from '.'

/**
 * Type for currently used config e.g. in GirModule
 */
export interface GenerateConfig {
    environment: Environment
    outdir: string | null
    buildType?: BuildType
    girDirectories: string[]
    verbose: boolean
    pretty: boolean
}
