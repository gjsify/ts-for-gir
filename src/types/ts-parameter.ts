import { TsType, TsDoc, TypeGirParameter, TsFunction } from './index.js'

/**
 * Holds the data to generate a parameter of a function or return value in/for Typescript
 */
export interface TsParameter {
    name: string
    type: TsType[]

    /** The parent function of this parameter */
    parent: TsFunction

    /** If `true` the parameter is a rest parameter like `(...names: string[])` */
    isRest: boolean

    girTypeName: TypeGirParameter

    /** Typescript data to generate documentations in TSDoc style */
    doc: TsDoc
}
