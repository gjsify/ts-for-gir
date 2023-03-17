import type { Environment, BuildType } from './types/index.js'

export const NO_TSDATA = (namespace?: string) => {
    let message = 'You need to set the tsData first!'
    if (namespace) message = `[${namespace}] ${message}`
    return message
}

// Error messages

export const ERROR_NO_MODULES_FOUND = (girDirectories: string[]) => `No module found in ${girDirectories.join(', ')}!
Please make sure that you have installed the necessary gir files.
For example with "sudo apt install libgtk-4-dev" for Gtk4 on Ubuntu or "sudo dnf install gtk4-devel" on Fedora.`
export const ERROR_CONFIG_EXTENSION_UNSUPPORTED =
    'Only configs with the extension .js and .json are currently supported. Do nothing'
export const ERROR_NO_MODULE_SPECIFIED = 'Need to specify modules!'

// Warn messages

export const WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE = (packageName: string) =>
    `No gir file found for '${packageName}', this module will be ignored`
export const WARN_CONSTANT_ALREADY_EXPORTED = (name: string) => `The constant '${name}' has already been exported`
export const WARN_USE_ESM_FOR_ALIAS = "moduleType must be 'esm' if generateAlias is true!"
export const WARN_USE_GJS_FOR_ALIAS = "environments must include 'gjs' if generateAlias is true!"

export const WARN_IGNORE_MULTIPLE_CALLBACKS = 'Multiple callbacks are ignored!'
export const WARN_IGNORE_MULTIPLE_FUNC_DESC = 'Ignore multiline function description!'

export const WARN_DUPLICATE_ENUM_IDENTIFIER = (name: string, renamed: string) =>
    `Enum has a duplicate identifier '${name}', renamed to '${renamed}'!`
export const WARN_DUPLICATE_SYMBOL = (symbol: string) => `Duplicate symbol: ${symbol}`
export const WARN_DUPLICATE_PARAMETER = (paramName: string, namespace?: string) => {
    let message = `Duplicate parameter name "${paramName}" found!`
    if (namespace) message = `[${namespace}] ${message}`
    return message
}

export const WARN_NOT_FOUND_TYPE = (logName: string) => `Could not find type for "${logName}"`
export const WARN_NOT_FOUND_PACKAGE_NAME = (namespace: string, implementation: string) =>
    `Package name for namespace ${namespace} not found! (${implementation})`
export const WARN_NOT_FOUND_DEPENDENCY_GIR_FILE = (girFilename: string) =>
    `Dependency gir file not found: '${girFilename}'`

export const WARN_RENAMED_PROPERTY = (originalName: string, newName: string) =>
    `Property name renamed from '${originalName}' to '${newName}'`
export const WARN_RENAMED_FUNCTION = (originalName: string, newName: string) =>
    `Function name renamed from '${originalName}' to '${newName}'`
export const WARN_RENAMED_CLASS = (originalName: string, newName: string) =>
    `Class name renamed from '${originalName}' to '${newName}'`
export const WARN_RENAMED_CONSTANT = (originalName: string, newName: string) =>
    `Constant name renamed from '${originalName}' to '${newName}'`
export const WARN_RENAMED_FIELD = (originalName: string, newName: string) =>
    `Field name renamed from '${originalName}' to '${newName}'`
export const WARN_RENAMED_ENUM = (originalName: string, newName: string) =>
    `Enum name renamed from '${originalName}' to '${newName}'`
export const WARN_RENAMED_PARAMETER = (originalName: string, newName: string) =>
    `Parameter name renamed from '${originalName}' to '${newName}'`

// Info messages

export const DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED =
    'The HtmlDocGenerator is currently not implemented. Do nothing...'
export const START_MODULE = (environment: Environment, buildType?: BuildType) =>
    `Start to generate .d.ts files for '${environment}' as '${buildType || 'unknown'}'.`
export const FILE_PARSING_DONE = 'Files parsed, loading types...'
export const TSDATA_PARSING_DONE = 'Typescript data loaded, generating .d.ts...'
export const GENERATING_TYPES_DONE = 'Done.'
