import {
    TypeClass,
    TypeMethod,
    TypeVariable,
    TypeAlias,
    TypeEnumeration,
    TypeInterface,
    TypeProperty,
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
    | TypeProperty
    | TypeGirFunction
