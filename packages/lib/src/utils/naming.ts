import { upperCamelCase, isFirstCharNumeric } from './strings.js'
import { RESERVED_NAMESPACE_NAMES } from '../constants.js'

/**
 * Transform a package name to import name format (lowercase)
 * @param packageName The package name to transform
 * @returns The transformed import name
 */
export function transformImportName(packageName: string): string {
    return packageName.toLowerCase()
}

/**
 * Transform a module namespace name to the proper format
 * Handles numeric names and reserved namespace names
 * @param name The namespace name to transform
 * @returns The transformed namespace name
 */
export function transformModuleNamespaceName(name: string): string {
    // Handle numeric names - prepend 'TODO_' if name starts with a number
    name = transformNumericName(name)
    
    // Convert to upperCamelCase
    name = upperCamelCase(name)

    // Handle reserved namespace names
    if (RESERVED_NAMESPACE_NAMES[name]) {
        name = `${name}_`
    }
    
    return name
}

/**
 * Transform names starting with numbers by prepending 'TODO_'
 * In JavaScript there can be no variables, methods, class names or enum names that start with a number
 * @param name The name to transform
 * @returns The transformed name
 */
function transformNumericName(name: string): string {
    if (isFirstCharNumeric(name)) {
        name = `TODO_${name}`
    }
    return name
} 