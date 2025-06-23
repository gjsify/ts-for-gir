import type { UserConfig } from './user-config.ts'
export interface UserConfigLoadResult {
    config: Partial<UserConfig>
    filepath: string
    isEmpty?: boolean | undefined
}
