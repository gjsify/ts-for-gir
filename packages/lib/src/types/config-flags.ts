import type { UserConfig } from './user-config.ts'

export interface ConfigFlags extends UserConfig {
    configName: string
}
