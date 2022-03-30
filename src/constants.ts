/**
 * In gjs all classes have a static name property but the classes listed below already have a static name property
 */
export const STATIC_NAME_ALREADY_EXISTS = ['GMime.Charset', 'Camel.StoreInfo']

export const COMMENT_REG_EXP = /\/\*.*\*\//g
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g
export const NEW_LINE_REG_EXP = /[\n\r]+/g

export const APP_NAME = 'ts-for-gir'
export const APP_USAGE = 'Typescript .d.ts generator from GIR for gjs or node-gtk'
export const APP_SOURCE = 'https://github.com/sammydre/ts-for-gjs'
