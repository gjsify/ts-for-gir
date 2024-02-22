import { LibraryVersion } from './library-version.js'
import { __dirname, readJsonFile } from './utils.js'
import { join } from 'path'

/**
 * In gjs all classes have a static name property but the classes listed below already have a static name property
 */
export const STATIC_NAME_ALREADY_EXISTS = ['GMime.Charset', 'Camel.StoreInfo']

export const COMMENT_REG_EXP = /\/\*.*\*\//g
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g
export const NEW_LINE_REG_EXP = /[\n\r]+/g

export const MAX_CLASS_PARENT_DEPTH = 100

export const PACKAGE = await readJsonFile<{
    name: string
    version: string
    description: string
    license: string
    homepage: string
    author: string
}>(join(__dirname, '../package.json'))

export const APP_NAME = 'ts-for-gir'
export const APP_USAGE = 'TypeScript type definition generator for GObject introspection GIR files'
export const APP_SOURCE = 'https://github.com/gjsify/ts-for-gir'
export const APP_VERSION = PACKAGE.version

export const PACKAGE_DESC = (packageName: string, libraryVersion?: LibraryVersion) => {
    if (libraryVersion) {
        return `GJS TypeScript type definitions for ${packageName}, generated from library version ${libraryVersion.toString()}`
    }
    return `GJS TypeScript type definitions for ${packageName}`
}
export const PACKAGE_KEYWORDS = (packageName: string) => {
    return `"Gir", "TypeScript", "types", "GObject-Introspection", "GJS", "${packageName}"`
}

export const GENERIC_NAMES: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']

export const SIGNAL_METHOD_NAMES: string[] = ['connect', 'emit', 'disconnect', 'connect_after', 'emit']
