import type {
    GirCallableAttrs,
    GirInfoAttrs,
    GirDocElement,
    PartOfClass,
    GirCallableParams,
    GirCallableReturn,
    DescFunction,
    TypeFunction,
} from '.'

export interface GirFunctionElement extends PartOfClass, GirDocElement {
    /** element defining a standalone function (as usual in most programming languages) */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM
    _type?: TypeFunction
    _desc?: DescFunction
}
