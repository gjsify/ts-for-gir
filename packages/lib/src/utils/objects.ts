/* eslint-disable @typescript-eslint/unbound-method */
import lodash from 'lodash'
export { inspect } from 'util'

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
 * Checking whether some variable is iterable
 * @see https://stackoverflow.com/a/32538867
 * @param obj Variable to check for iterable
 * @returns Whether the variable is iterable or not
 */
export const isIterable = (obj: unknown[]): boolean => {
    return obj != null && typeof obj[Symbol.iterator] === 'function'
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
