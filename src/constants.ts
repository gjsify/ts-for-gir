import { FunctionDescription, LocalNameCheck, PropertyDescription } from './types'

/**
 * In gjs all classes have a static name property but the classes listed below already have a static name property
 */
export const STATIC_NAME_ALREADY_EXISTS = ['GMime.Charset', 'Camel.StoreInfo']

export const MAXIMUM_RECURSION_DEPTH = 100

export const COMMENT_REG_EXP = /\/\*.*\*\//g
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g

export const FALSY_FUNCTION_DESCRIPTION: FunctionDescription = {
    desc: [],
    name: null,
    patched: false,
}

export const FALSY_LOCAL_NAME_CHECK: LocalNameCheck = { desc: [], added: false }
export const FALSY_PROPERTY_DESCRIPTION: PropertyDescription = {
    desc: [],
    propName: null,
    origName: null,
    patched: false,
}
