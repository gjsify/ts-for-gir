/* eslint-disable @typescript-eslint/unbound-method */
import lodash from 'lodash'
import Path from 'path'
import fs from 'fs'
import { getTsconfig, TsConfigJsonResolved } from 'get-tsconfig'
import { fileURLToPath } from 'url'
import { Environment, GirCallableParamElement, GirInfoAttrs, TsFunction, TsType } from './types/index.js'
import { inspect } from 'util'
import { Logger } from './logger.js'

import { COMMENT_REG_EXP, PARAM_REG_EXP, OPT_PARAM_REG_EXP } from './constants.js'

export { inspect }

export const isEqual = lodash.isEqual

export const map = lodash.map

export const find = lodash.find

export const merge = lodash.merge

export const clone = lodash.clone

export const cloneDeep = lodash.cloneDeep

export const splitModuleName = (packageName: string): { packageName: string; namespace: string; version: string } => {
    // There are modules that use multiple hyphens like 'GUPnP-DLNA-1.0'
    const splits = packageName.split('-')
    const version = splits.splice(-1, 1)[0]
    const namespace = splits.join('')
    return {
        packageName,
        namespace,
        version,
    }
}

/** Remove namespace prefix */
export const removeNamespace = (type: string, namespace: string) => {
    if (type.startsWith(namespace + '.')) {
        type = type.substring(namespace.length + 1)
    }
    return type
}

/** Remove class module name prefix */
export const removeClassModule = removeNamespace

export const addNamespace = (type: string, namespace: string) => {
    if (!type.startsWith(namespace + '.')) {
        type = namespace + '.' + type
    }
    return type
}

/**
 * Checking whether some variable is iterable
 * see https://stackoverflow.com/a/32538867
 * @param obj Variable to check for iterable
 */
export const isIterable = (obj: unknown[]): boolean => {
    return obj != null && typeof obj[Symbol.iterator] === 'function'
}

export const isNumeric = (str: string): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !isNaN((str as any) - parseFloat(str))
}

export const getFirstChar = (str: string): string => {
    return str.charAt(0)
}

export const getLastChar = (str: string): string => {
    return str.charAt(str.length - 1)
}

export const isFirstCharNumeric = (str: string): boolean => {
    return isNumeric(getFirstChar(str))
}

export const camelCase = (str: string): string => {
    return str
        .replace(/\s(.)|(\s|-|_|\.)(.)/g, (a) => {
            return a.toUpperCase()
        })
        .replace(/(\s|-|_|\.)/g, '')
}

export const lowerCamelCase = (str: string): string => {
    str = camelCase(str)
    str = getFirstChar(str).toLowerCase() + str.slice(1)
    return str
}

export const upperCamelCase = (str: string): string => {
    str = camelCase(str)
    str = getFirstChar(str).toUpperCase() + str.slice(1)
    return str
}

export const findFileInDirs = (dirs: string[], filename: string): { path: string | null; exists: boolean } => {
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
export const union = <T>(target: Set<T> | T[], source: Set<T> | T[]): Set<T> => {
    return (target = new Set<T>([...target, ...source]))
}

export const stripParamNames = (func: string, ignoreTail = false): string => {
    const g = func
    func = func.replace(COMMENT_REG_EXP, '')
    const lb = func.split('(', 2)
    if (lb.length < 2) Logger.error(`Bad function definition ${g}`)
    const rb = lb[1].split(')')
    const tail = ignoreTail ? '' : rb[rb.length - 1]
    let params = rb.slice(0, rb.length - 1).join(')')
    params = params.replace(PARAM_REG_EXP, ':')
    params = params.replace(OPT_PARAM_REG_EXP, '?:')
    return `${lb[0]}(${params})${tail}`
}

export const isCommentLine = (line: string) => {
    const lineTrim = line.trim()
    return lineTrim.startsWith('//') || (lineTrim.startsWith('/*') && lineTrim.endsWith('*/'))
}

export const generateIndent = (indents = 1, spaceForIndent = 4): string => {
    return ' '.repeat(indents * spaceForIndent)
}

// Get __dirname on ESM
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = Path.dirname(__filename)

export const getEnvironmentDir = (environment: Environment, baseDir: string): string => {
    if (!baseDir.endsWith(environment))
        if (environment === 'gjs' && !baseDir.endsWith('/Gjs')) {
            return Path.join(baseDir, 'Gjs')
        }
    if (environment === 'node' && !baseDir.endsWith('/node-gtk')) {
        return Path.join(baseDir, 'node-gtk')
    }
    return baseDir
}

export const getDestPath = (environment: Environment, outputDir: string, outputFilename: string) => {
    const outputEnvDir = getEnvironmentDir(environment, outputDir)
    const destPath = Path.join(outputEnvDir, outputFilename)
    return destPath
}

export const girBool = (boolStr: string | undefined, defaultVal = false): boolean => {
    if (boolStr) {
        if (parseInt(boolStr) === 0) return false
        return true
    }
    return defaultVal
}

/**
 * Returns `true` if the definitions in `d1` and `d2` have equivalent signatures
 * @param d1
 * @param d2
 */
export const signaturesMatch = (d1: string, d2: string) => {
    if (isCommentLine(d1) || isCommentLine(d2)) return false
    return stripParamNames(d1) == stripParamNames(d2)
}

/**
 * GirElements contains an attribute `introspectable`, which is a GirBoolean.
 * If this is attribute is falsy the element is not introspectable,
 * this means doesn't exist in the bindings, due in general to missing information in the annotations in the original C code
 */
export const girElementIsIntrospectable = (girElement?: { $: GirInfoAttrs & { name: string } }, name?: string) => {
    if (!girElement) {
        return false
    }
    name = name || girElement?.$?.name
    if (!name) {
        return false
    }
    // Handle introspectable only if the attribute is also present...
    if (girElement.$.hasOwnProperty('introspectable') && girElement.$.introspectable !== undefined) {
        return girBool(girElement.$.introspectable, true)
    }
    // ...otherwise we assume that it is introspectable
    return true
}

export const typeIsOptional = (types: TsType[]) => {
    for (const type of types) {
        if (type.optional) return true
    }
    return false
}

/**
 * Returns true if `p1s` and `p2s` conflicting with each other.
 * The parameters must have the same length and the same type but can have different names
 * @param params
 * @returns
 */
export function paramsHasConflict(...params: GirCallableParamElement[][]) {
    let conflict = false
    for (const p1s of params) {
        for (const p2s of params) {
            if (p1s.length !== p2s.length) {
                conflict = true
                return conflict
            }

            for (const [i, p1] of p1s.entries()) {
                const p2 = p2s[i]
                if (p2._tsData && p1._tsData) {
                    if (typesHasConflict(p2._tsData?.type, p1._tsData?.type)) {
                        conflict = true
                        return conflict
                    }
                } else {
                    conflict = true
                    return conflict
                }
            }
        }
    }

    return conflict
}

export function typesHasConflict(a: TsType[], b: TsType[]) {
    if (a.length !== b.length) {
        return true
    }
    // return !isEqual(a, b.data)
    for (let i = 0; i < a.length; i++) {
        const aType = a[i]
        const bType = b[i]
        if (
            aType.type !== bType.type ||
            aType.nullable !== bType.nullable ||
            aType.optional !== bType.optional ||
            aType.isFunction !== bType.isFunction ||
            aType.isCallback !== bType.isCallback ||
            aType.isArray !== bType.isArray ||
            aType.callbacks.length !== bType.callbacks.length ||
            aType.generics.length !== bType.generics.length ||
            !isEqual(aType.callbacks, bType.callbacks) ||
            !isEqual(aType.generics, bType.generics) ||
            !isEqual(aType, bType) // TODO
        ) {
            return true
        }
    }

    return false
}

/**
 * Returns `true` if the function / method types of `a` and `b` are not compatible with each other.
 * The parameters must have the same length and the same type but can have different names
 * @param a
 * @param b
 * @returns
 */
export function functionHasConflict(a: TsFunction, b: TsFunction) {
    if (a === b) return false

    // TODO find a better solution for that, not all this methods are conflicting
    if (a.isVirtual !== b.isVirtual) {
        return true
    }

    if (typesHasConflict(a.returnTypes, b.returnTypes)) {
        return true
    }

    if (paramsHasConflict(a.inParams, b.inParams)) {
        return true
    }

    if (paramsHasConflict(a.outParams, b.outParams)) {
        return true
    }

    return false
}

function convertTsJsConfigToObject(path: string) {
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
    let currentPath = Path.resolve(path)
    while (!config && currentPath !== lastPath) {
        const tsConfigPath = Path.join(currentPath, 'tsconfig.json')
        const jsConfigPath = Path.join(currentPath, 'jsconfig.json')
        config =
            (fs.existsSync(tsConfigPath) && convertTsJsConfigToObject(tsConfigPath)) ||
            (fs.existsSync(jsConfigPath) && convertTsJsConfigToObject(jsConfigPath))
        lastPath = currentPath
        currentPath = Path.dirname(currentPath)
    }

    return config || null
}
