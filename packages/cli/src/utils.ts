/* eslint-disable @typescript-eslint/unbound-method */
import lodash from 'lodash'
import Path from 'path'
import fs from 'fs'
import { getTsconfig, TsConfigJsonResolved } from 'get-tsconfig'
import { fileURLToPath } from 'url'
import { Environment, GirInfoAttrs, TsType, FileInfo, Dependency } from './types/index.js'
import { inspect } from 'util'
import { Logger } from './logger.js'

import { COMMENT_REG_EXP, PARAM_REG_EXP, OPT_PARAM_REG_EXP } from './constants.js'

export { inspect }

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 *
 * @category Lang
 * @param value The value to compare.
 * @param other The other value to compare.
 * @returns Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
export const isEqual = lodash.isEqual

/**
 * Creates an array of values by running each element in collection through iteratee. The iteratee is
 * invoked with three arguments: (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
 * _.reject, and _.some.
 *
 * The guarded methods are:
 * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
 * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
 * sample, some, sum, uniq, and words
 *
 * @param collection The collection to iterate over.
 * @param iteratee The function invoked per iteration.
 * @return Returns the new mapped array.
 */
export const map = lodash.map

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param collection The collection to search.
 * @param predicate The function invoked per iteration.
 * @param fromIndex The index to search from.
 * @return Returns the matched element, else undefined.
 */
export const find = lodash.find

/**
 * Recursively merges own and inherited enumerable properties of source
 * objects into the destination object, skipping source properties that resolve
 * to `undefined`. Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment. Source objects
 * are applied from left to right. Subsequent sources overwrite property
 * assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @category Object
 * @param object The destination object.
 * @param [sources] The source objects.
 * @returns Returns `object`.
 * @example
 *
 * var users = {
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
 * };
 *
 * var ages = {
 *   'data': [{ 'age': 36 }, { 'age': 40 }]
 * };
 *
 * _.merge(users, ages);
 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
 */
export const merge = lodash.merge

/**
 * Creates a shallow clone of value.
 *
 * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
 * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
 * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
 * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @param value The value to clone.
 * @return Returns the cloned value.
 */
export const clone = lodash.clone

/**
 * This method is like clone except that it recursively clones value.
 *
 * @param value The value to recursively clone.
 * @return Returns the deep cloned value.
 */
export const cloneDeep = lodash.cloneDeep

/**
 * Split a package name into namespace and version
 */
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

/**
 * Add namespace prefix
 */
export const addNamespace = (type: string, namespace: string) => {
    if (!type.startsWith(namespace + '.')) {
        type = namespace + '.' + type
    }
    return type
}

/**
 * Checking whether some variable is iterable
 * @see https://stackoverflow.com/a/32538867
 * @param obj Variable to check for iterable
 * @returns Whether the variable is iterable or not
 */
export const isIterable = (obj: unknown[]): boolean => {
    return obj != null && typeof obj[Symbol.iterator] === 'function'
}

/**
 * Checking whether a string is numeric
 * @param str The string to check
 * @returns Whether the string is numeric or not
 */
export const isNumeric = (str: string): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !isNaN((str as any) - parseFloat(str))
}

/**
 * Get the first character of a string
 * @param str The string to get the first character from
 * @returns The first character
 */
export const getFirstChar = (str: string): string => {
    return str.charAt(0)
}

/**
 * Get the last character of a string
 * @param str The string to get the last character from
 * @returns The last character
 */
export const getLastChar = (str: string): string => {
    return str.charAt(str.length - 1)
}

/**
 * Check if the first character of a string is numeric
 * @param str The string to check
 * @returns Whether the first character is numeric or not
 */
export const isFirstCharNumeric = (str: string): boolean => {
    return isNumeric(getFirstChar(str))
}

/**
 * Convert a string to camelCase
 * @param str The string to convert
 * @returns The converted string
 */
export const camelCase = (str: string): string => {
    return str
        .replace(/\s(.)|(\s|-|_|\.)(.)/g, (a) => {
            return a.toUpperCase()
        })
        .replace(/(\s|-|_|\.)/g, '')
}

/**
 * Convert a string to lowerCamelCase
 * @param str The string to convert
 * @returns The converted string
 */
export const lowerCamelCase = (str: string): string => {
    str = camelCase(str)
    str = getFirstChar(str).toLowerCase() + str.slice(1)
    return str
}

/**
 * Convert a string to UpperCamelCase
 * @param str The string to convert
 * @returns The converted string
 */
export const upperCamelCase = (str: string): string => {
    str = camelCase(str)
    str = getFirstChar(str).toUpperCase() + str.slice(1)
    return str
}

/**
 * Find a file in a list of directories
 * @param dirs The directories to search in
 * @param filename The filename to search for
 * @returns The file info
 */
export const findFileInDirs = (dirs: string[], filename: string): FileInfo => {
    const FileInfo: FileInfo = {
        path: null,
        filename,
        exists: false,
    }
    for (const dir of dirs) {
        const filePath = Path.join(dir, filename)
        FileInfo.exists = fs.existsSync(filePath)
        if (FileInfo.exists) {
            FileInfo.path = filePath
            return FileInfo
        }
    }

    return FileInfo
}

/**
 * Get the dependency object by namespace and version
 * @param namespace The namespace of the dependency
 * @param version The version of the dependency
 * @returns The dependency object
 */
export const getDependency = (dirs: string[], namespace: string, version: string): Dependency => {
    const packageName = `${namespace}-${version}`
    const filename = `${packageName}.gir`
    const { exists, path } = findFileInDirs(dirs, filename)
    return {
        namespace,
        exists,
        filename,
        path,
        packageName,
        version,
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

export const getDestPath = (environment: Environment, outputDir: string, ...parts: string[]) => {
    const outputEnvDir = getEnvironmentDir(environment, outputDir)
    const destPath = Path.join(outputEnvDir, ...parts)
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
