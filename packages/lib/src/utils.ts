/* eslint-disable @typescript-eslint/unbound-method */
import lodash from 'lodash'
import { join, dirname } from 'path'
import { readFile } from 'fs/promises'

import { fileURLToPath } from 'url'
import { inspect } from 'util'

export { inspect }

// Get __filename on ESM
export const __filename = fileURLToPath(import.meta.url)
// Get __dirname on ESM
export const __dirname = dirname(__filename)

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
 * array buffers, booleans, date objects, maps, numbers, Object objects, regex's, sets, strings, symbols,
 * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
 * object is returned for not cloneable values such as error objects, functions, DOM nodes, and WeakMaps.
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
    // Workaround for Vte-4-2.91
    if (packageName.startsWith('Vte-4')) {
        return {
            packageName,
            namespace: 'Vte',
            version: packageName.replace('Vte-', ''),
        }
    }
    if (!packageName.includes('-')) {
        return {
            packageName,
            namespace: packageName,
            version: '',
        }
    }
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
 * Removes line breaks and consecutive white spaces from a given string
 * @param str
 * @returns
 */
export const cleanString = (str: string) => {
    str = str.replace(/\r?\n|\r/g, ' ')
    str = str.replace(/\s+/g, ' ')
    return str.trim()
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
 * Convert a string to camelCase, keeps the first alphabet character as it is.
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
 * Convert a string to `lowerCamelCase`
 * @param str The string to convert
 * @returns The converted string
 */
export const lowerCamelCase = (str: string): string => {
    str = camelCase(str)
    str = getFirstChar(str).toLowerCase() + str.slice(1)
    return str
}

/**
 * Convert a string to `PascalCase`
 * @param str The string to convert
 * @returns The converted string
 */
export const pascalCase = (str: string): string => {
    str = camelCase(str)
    str = getFirstChar(str).toUpperCase() + str.slice(1)
    return str
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

/**
 * Union (a ∪ b): create a set that contains the elements of both set a and set b.
 * See https://2ality.com/2015/01/es6-set-operations.html#union
 * @param target
 * @param source
 */
export const union = <T>(target: Set<T> | T[], source: Set<T> | T[]): Set<T> => {
    return (target = new Set<T>([...target, ...source]))
}

/**
 * Get the destination path for the environment
 * @param baseOutputPath The base output path
 * @param parts The path parts
 * @returns The destination path
 */
export const getDestPath = (baseOutputPath: string, ...parts: string[]) => {
    const destPath = join(baseOutputPath, ...parts)
    return destPath
}
