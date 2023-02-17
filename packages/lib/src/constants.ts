import { Environment, Dependency } from './types/index.js'

/**
 * In gjs all classes have a static name property but the classes listed below already have a static name property
 */
export const STATIC_NAME_ALREADY_EXISTS = ['GMime.Charset', 'Camel.StoreInfo']

export const COMMENT_REG_EXP = /\/\*.*\*\//g
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g
export const NEW_LINE_REG_EXP = /[\n\r]+/g

export const MAX_CLASS_PARENT_DEPTH = 100

export const APP_NAME = 'ts-for-gir'
export const APP_USAGE = 'TypeScript type definition generator for GObject introspection GIR files'
export const APP_SOURCE = 'https://github.com/gjsify/ts-for-gjs'
export const APP_VERSION = '3.0.0-beta.10'

/**
 * The namespaces of the dependencies that are used in Gnome Shell
 */
export const GNOME_SHELL_NAMESPACES: string[] = ['GObject', 'GLib', 'Gio', 'Shell', 'St', 'Clutter', 'Meta', 'Gcr', 'Atk']

export const PACKAGE_DESC = (packageName: string) => `TypeScript type definitions for ${packageName}`
export const PACKAGE_KEYWORDS = (packageName: string) => `"Gir", "TypeScript", "${packageName}"`

export const GENERIC_NAMES: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']

export const SIGNAL_METHOD_NAMES_GENERAL: string[] = ['connect', 'emit']
export const SIGNAL_METHOD_NAMES_GJS: string[] = ['connect_after', 'emit', 'disconnect']
export const SIGNAL_METHOD_NAMES_NODE: string[] = ['after', 'on', 'once', 'off']
export const SIGNAL_METHOD_NAMES = (env: Environment) => {
    if (env === 'node') {
        return [...SIGNAL_METHOD_NAMES_GENERAL, SIGNAL_METHOD_NAMES_NODE]
    }
    return [...SIGNAL_METHOD_NAMES_GENERAL, SIGNAL_METHOD_NAMES_GJS]
}
