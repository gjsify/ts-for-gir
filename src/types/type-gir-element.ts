import { TypeClass, TypeMethod, TypeVariable, TypeAlias, TypeEnumeration, TypeInterface, TypeField } from './index.js'

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
    | TypeField
