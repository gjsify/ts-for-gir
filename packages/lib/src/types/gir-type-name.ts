import type {
    TypeGirFunction,
    TypeGirElement,
    TypeGirEnumerationMember,
    TypeGirProperty,
    TypeGirClass,
    TypeGirAlias,
    TypeGirVariable,
} from './index.js'

export type GirTypeName =
    | TypeGirFunction
    | TypeGirElement
    | TypeGirEnumerationMember
    | TypeGirProperty
    | TypeGirClass
    | TypeGirAlias
    | TypeGirVariable
    | 'callable-param'
    | 'callable-return'
