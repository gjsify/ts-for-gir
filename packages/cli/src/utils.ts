import { join, dirname, resolve } from 'path'
import { existsSync } from 'fs'
import { getTsconfig, TsConfigJsonResolved } from 'get-tsconfig'

/**
 * Get a typescript or javascript config by path
 * @param path The path to search for a tsconfig.json or jsconfig.json file
 * @returns The config or null if not found
 */
export const getTsJsConfigByPath = (path: string) => {
    try {
        const config = getTsconfig(path)?.config
        if (config) return config
    } catch {
        // ignored
    }
    return null
}

/**
 * Given an directory path search for a tsconfig.json or jsconfig.json file in it or any of its parent directories, then read the file and parse it as json.
 *
 * @param path - The directory path to search for a tsconfig.json or jsconfig.json file
 */
export function readTsJsConfig(path: string) {
    let config: null | false | TsConfigJsonResolved = null
    let lastPath = ''
    let currentPath = resolve(path)
    while (!config && currentPath !== lastPath) {
        const tsConfigPath = join(currentPath, 'tsconfig.json')
        const jsConfigPath = join(currentPath, 'jsconfig.json')
        config =
            (existsSync(tsConfigPath) && getTsJsConfigByPath(tsConfigPath)) ||
            (existsSync(jsConfigPath) && getTsJsConfigByPath(jsConfigPath))
        lastPath = currentPath
        currentPath = dirname(currentPath)
    }

    return config || null
}
