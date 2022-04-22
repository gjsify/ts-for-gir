import {
    GirInfoAttrs,
    GirCallableAttrs,
    GirCallableParams,
    GirCallableReturn,
    PartOfClass,
    TsFunction,
    TsDoc,
} from './index.js'

export interface GirConstructorElement extends PartOfClass {
    /** A constructor of a class */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsFunction
    /**Typescript data to generate documentations in TSDoc style */
    _tsDoc?: TsDoc
}
