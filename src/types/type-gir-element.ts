import {
    TypeClass,
    TypeFunction,
    TypeMethod,
    TypeVariable,
    TypeAlias,
    TypeEnumeration,
    TypeInterface,
} from './index.js'

/** Any gir element type */
export type TypeGirElement =
    | TypeClass
    | TypeFunction
    | TypeMethod
    | TypeVariable
    | TypeAlias
    | TypeEnumeration
    | TypeInterface
