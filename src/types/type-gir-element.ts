import {
    TypeClass,
    TypeMethod,
    TypeVariable,
    TypeAlias,
    TypeEnumeration,
    TypeInterface,
    TypeField,
    TypeGirFunction,
} from './index.js'

/** Any gir element type */
export type TypeGirElement =
    | TypeClass
    | TypeMethod
    | TypeVariable
    | TypeAlias
    | TypeEnumeration
    | 'enum-member'
    | 'bitfield-member'
    | TypeInterface
    | TypeField
    | TypeGirFunction
