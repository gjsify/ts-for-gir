import type { GirInfoAttrs } from '../types/index.js'

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
 * Check if a line is a comment line
 * @param line The line to check
 * @returns Whether the line is a comment line or not
 */
export const isCommentLine = (line: string) => {
    const lineTrim = line.trim()
    return lineTrim.startsWith('//') || (lineTrim.startsWith('/*') && lineTrim.endsWith('*/'))
}

/**
 * Convert a GirBoolean to a boolean
 * @param boolStr The GirBoolean string
 * @param defaultVal The default value
 * @returns The boolean value
 */
export const girBool = (boolStr: string | undefined, defaultVal = false): boolean => {
    if (boolStr) {
        if (parseInt(boolStr) === 0) return false
        return true
    }
    return defaultVal
}

export const isIntrospectable = (e: { $?: GirInfoAttrs }) =>
    !e || !e.$ || !e.$.introspectable || e.$.introspectable === '1'
export const isDeprecated = (e: { $: GirInfoAttrs }) => e && e.$ && e.$.deprecated === '1'
export const deprecatedVersion = (e: { $: GirInfoAttrs }) => e?.$?.['deprecated-version']
export const introducedVersion = (e: { $: GirInfoAttrs }) => e?.$?.version
