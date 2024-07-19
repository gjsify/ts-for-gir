import { isNumeric } from './numbers.js'

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

/** Alias for {@link pascalCase} */
export const upperCamelCase = pascalCase

/**
 * Convert a string to `snake_case`
 * @param str The string to convert
 * @returns The converted string
 */
export const snakeCase = (str: string): string => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // replace camelCase with hyphen-case
        .replace(/[^a-zA-Z0-9-]+/g, '_') // replace non-alphanumeric characters with underscore
        .replace(/^_+|_+$/g, '') // remove any leading or trailing underscores
        .toLowerCase()
}

/**
 * Convert a string to `kebab-case`
 * @param str The string to convert
 * @returns The converted string
 */
export const kebabCase = (str: string): string => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // replace camelCase with hyphen-case
        .replace(/[^a-zA-Z0-9-]+/g, '-') // replace non-alphanumeric characters with hyphen
        .replace(/^-+|-+$/g, '') // remove any leading or trailing hyphens
        .toLowerCase()
}

/** Alias for {@link kebabCase} */
export const slugCase = kebabCase

export const underscores = (str: string): string => {
    return str.replace(/-|_/g, '_')
}

/**
 * Add indents to a string
 * @param indents The number of indents
 * @param spaceForIndent The number of spaces for each indent
 * @returns The indented string
 */
export const generateIndent = (indents = 1, spaceForIndent = 4): string => {
    return ' '.repeat(indents * spaceForIndent)
}
