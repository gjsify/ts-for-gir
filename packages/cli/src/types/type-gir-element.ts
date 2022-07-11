import {
    TypeGirClass,
    TypeGirMethod,
    TypeGirVariable,
    TypeGirAlias,
    TypeGirEnumeration,
    TypeGirEnumerationMember,
    TypeGirInterface,
    TypeGirParameter,
    TypeGirProperty,
    TypeGirFunction,
} from './index.js'

/** Any gir element type */
export type TypeGirElement =
    | TypeGirClass
    | TypeGirMethod
    | TypeGirVariable
    | TypeGirAlias
    | TypeGirEnumeration
    | TypeGirEnumerationMember
    | TypeGirInterface
    | TypeGirParameter
    | TypeGirProperty
    | TypeGirFunction
