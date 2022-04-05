import { GirCallbackElement, TsGenericParameter } from '.'

/**
 * Holds the data to generate a type in/for Typescript
 */
export interface TsType {
    optional: boolean
    nullable: boolean
    type: string
    callbacks: GirCallbackElement[]
    generics: TsGenericParameter[]
}
