import { UserConfig } from './user-config'
export interface UserConfigLoadResult {
    config: Partial<UserConfig>
    filepath: string
    isEmpty?: boolean | undefined
}
