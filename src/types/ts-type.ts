import { GirCallbackElement, TsGenericParameter } from './index.js'

/**
 * Holds the data to generate a type in/for Typescript
 */
export interface TsType {
    optional: boolean
    nullable: boolean
    type: string
    callbacks: GirCallbackElement[]
    generics: TsGenericParameter[]
    // TODO: transform array to type with generics?
    isArray: boolean
    isFunction: boolean
    isCallback: boolean
}
