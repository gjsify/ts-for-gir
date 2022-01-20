/* eslint-disable @typescript-eslint/unbound-method */
import lodash from 'lodash'
import Path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { Environment } from './types/index.js'

import { COMMENT_REG_EXP, PARAM_REG_EXP, OPT_PARAM_REG_EXP } from './constants.js'

export const isEqual = lodash.isEqual

export const map = lodash.map

export const find = lodash.find

export const merge = lodash.merge

export const clone = lodash.clone

export function splitModuleName(packageName: string): { packageName: string; namespace: string; version: string } {
    // There are modules that use multiple hyphens like 'GUPnP-DLNA-1.0'
    const splits = packageName.split('-')
    const version = splits.splice(-1, 1)[0]
    const namespace = splits.join('-')
    return {
        packageName,
        namespace,
        version,
    }
}

/**
 * Checking whether some variable is iterable
 * see https://stackoverflow.com/a/32538867
 * @param obj Variable to check for iterable
 */
export function isIterable(obj: unknown[]): boolean {
    return obj != null && typeof obj[Symbol.iterator] === 'function'
}

export function isNumeric(str: string): boolean {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !isNaN((str as any) - parseFloat(str))
}

export function getFirstChar(str: string): string {
    return str.charAt(0)
}

export function getLastChar(str: string): string {
    return str.charAt(str.length - 1)
}

export function isFirstCharNumeric(str: string): boolean {
    return isNumeric(getFirstChar(str))
}

export function camelCase(str: string): string {
    return str
        .replace(/\s(.)|(\s|-|_|\.)(.)/g, (a) => {
            return a.toUpperCase()
        })
        .replace(/(\s|-|_|\.)/g, '')
}

export function lowerCamelCase(str: string): string {
    str = camelCase(str)
    str = getFirstChar(str).toLowerCase() + str.slice(1)
    return str
}

export function upperCamelCase(str: string): string {
    str = camelCase(str)
    str = getFirstChar(str).toUpperCase() + str.slice(1)
    return str
}

export function findFileInDirs(dirs: string[], filename: string): { path: string | null; exists: boolean } {
    let exists = false
    for (const dir of dirs) {
        const filePath = Path.join(dir, filename)
        exists = fs.existsSync(filePath)
        if (exists) {
            return {
                path: filePath,
                exists,
            }
        }
    }
    return {
        path: null,
        exists,
    }
}

/**
 * Union (a ∪ b): create a set that contains the elements of both set a and set b.
 * See https://2ality.com/2015/01/es6-set-operations.html#union
 * @param target
 * @param source
 */
export function union<T>(target: Set<T> | T[], source: Set<T> | T[]): Set<T> {
    return (target = new Set<T>([...target, ...source]))
}

export function stripParamNames(func: string, ignoreTail = false): string {
    const g = func
    func = func.replace(COMMENT_REG_EXP, '')
    const lb = func.split('(', 2)
    if (lb.length < 2) console.error(`Bad function definition ${g}`)
    const rb = lb[1].split(')')
    const tail = ignoreTail ? '' : rb[rb.length - 1]
    let params = rb.slice(0, rb.length - 1).join(')')
    params = params.replace(PARAM_REG_EXP, ':')
    params = params.replace(OPT_PARAM_REG_EXP, '?:')
    return `${lb[0]}(${params})${tail}`
}

export function isCommentLine(line: string) {
    const lineTrim = line.trim()
    return lineTrim.startsWith('//') || (lineTrim.startsWith('/*') && lineTrim.endsWith('*/'))
}

export function generateIndent(indents = 1, spaceForIndent = 4): string {
    return ' '.repeat(indents * spaceForIndent)
}

// Get __dirname on ESM
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = Path.dirname(__filename)

export function getEnvironmentDir(environment: Environment, baseDir: string): string {
    if (!baseDir.endsWith(environment))
        if (environment === 'gjs' && !baseDir.endsWith('/Gjs')) {
            return Path.join(baseDir, 'Gjs')
        }
    if (environment === 'node' && !baseDir.endsWith('/node-gtk')) {
        return Path.join(baseDir, 'node-gtk')
    }
    return baseDir
}
