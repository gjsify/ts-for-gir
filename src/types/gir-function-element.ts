import type {
    GirCallableAttrs,
    GirInfoAttrs,
    GirDocElement,
    PartOfClass,
    GirCallableParams,
    GirCallableReturn,
    TsMethod,
    TypeFunction,
} from './index.js'

export interface GirFunctionElement extends PartOfClass, GirDocElement {
    /** element defining a standalone function (as usual in most programming languages) */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM
    _girType?: TypeFunction
    /** Functions are usually exported as global functions in typescript, but can also be static functions of a class */
    _tsType?: 'function' | 'static'
    _tsData?: TsMethod
}
