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

    // CUSTOM
    _girType?: 'constructor'
    /** Will be exported in Typescript as a `static function` of a `class` */
    _tsType?: 'static'
    _tsData?: TsFunction
    /**Typescript data to generate documentations in TSDoc style */
    _tsDoc?: TsDoc
}
