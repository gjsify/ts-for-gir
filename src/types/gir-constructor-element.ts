import { GirInfoAttrs, GirCallableAttrs, GirCallableParams, GirCallableReturn, PartOfClass, TsFunction } from '.'

export interface GirConstructorElement extends PartOfClass {
    /** A constructor of a class */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM
    _girType?: 'constructor'
    /** Will be exported in Typescript as a `static function` of a `class` */
    _tsType?: 'static-function'
    _tsData?: TsFunction
}
