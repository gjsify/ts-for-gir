import { BuildType, Environment } from '.'

export interface UserConfig {
    environments: Environment[]
    outdir: string | null
    buildType?: BuildType
    girDirectory: string
    verbose: boolean
    print: boolean
    pretty: boolean
    modules: string[]
    ignore?: string[]
}
