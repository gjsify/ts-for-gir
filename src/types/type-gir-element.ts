import { TypeClass, TypeMethod, TypeVariable, TypeAlias, TypeEnumeration, TypeInterface } from './index.js'

/** Any gir element type */
export type TypeGirElement =
    | TypeClass
    | 'function'
    | 'static-function'
    | TypeMethod
    | TypeVariable
    | TypeAlias
    | TypeEnumeration
    | 'enum-member'
    | 'bitfield-member'
    | TypeInterface
