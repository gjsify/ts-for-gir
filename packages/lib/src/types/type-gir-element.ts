import type {
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
} from './index.ts'

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
