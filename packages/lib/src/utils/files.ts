import { join } from 'path'
import { constants } from 'fs'
import { readFile, access } from 'fs/promises'
import { glob } from 'glob'

import type { FileInfo } from '../types/index.ts'
export { inspect } from 'util'

/**
 * Asynchronously checks if a file exists
 * @param filePath The path to the file
 * @returns A promise that resolves to true if the file exists, false otherwise
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
    try {
        await access(filePath, constants.F_OK)
        return true
    } catch {
        return false
    }
}

/**
 * Find a file in a list of directories
 * @param dirs The directories to search in
 * @param filename The filename to search for
 * @returns The file info
 */
export const findFilesInDirs = async (dirs: string[], filename: string): Promise<FileInfo[]> => {
    const filesInfo: FileInfo[] = []

    const pattern = dirs.map((dir) => join(dir, filename))
    const _files = await glob(pattern)

    // Remove duplicates
    const files = [...new Set(_files)]

    for (const filePath of files) {
        const fileInfo: FileInfo = {
            path: null,
            filename,
            exists: false,
        }
        fileInfo.exists = await fileExists(filePath)
        if (fileInfo.exists) {
            fileInfo.path = filePath
            filesInfo.push(fileInfo)
        }
    }

    if (filesInfo.length === 0) {
        filesInfo.push({
            path: null,
            filename,
            exists: false,
        })
    }

    return filesInfo
}

/**
 * Read a JSON file
 * @param filePath The path to the JSON file
 * @returns The parsed JSON
 */
export const readJsonFile = async <T = unknown>(filePath: string): Promise<T> => {
    const fileContent = await readFile(filePath, 'utf8')
    return JSON.parse(fileContent) as T
}
