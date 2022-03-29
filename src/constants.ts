/**
 * In gjs all classes have a static name property but the classes listed below already have a static name property
 */
export const STATIC_NAME_ALREADY_EXISTS = ['GMime.Charset', 'Camel.StoreInfo']

export const COMMENT_REG_EXP = /\/\*.*\*\//g
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g

export const APP_NAME = 'ts-for-gir'
export const APP_USAGE = 'Typescript .d.ts generator from GIR for gjs or node-gtk'
export const APP_SOURCE = 'https://github.com/sammydre/ts-for-gjs'

// Error messages

export const ERROR_NO_TSDATA = 'You need to set the tsData first!'
export const ERROR_NO_MODULES_FOUND = (girDirectories: string[]) => `No module found in ${girDirectories.join(', ')}!
Please make sure that you have installed the necessary gir files.
For example with "sudo apt install libgtk-3-dev" for Gtk3 on Ubuntu or "sudo dnf install gtk3-devel" on Fedora.`

// Warn messages

export const WARN_ENUM_DUPLICATE_IDENTIFIER = (name: string, renamed: string) =>
    `Enum has a duplicate identifier '${name}', renamed to '${renamed}'!`
export const WARN_CONSTANT_ALREADY_EXPORTED = (name: string) => `The constant '${name}' has already been exported`
export const WARN_PROPERTY_RENAMED = (originalName: string, newName: string) =>
    `Property name renamed from '${originalName}' to '${newName}'`
