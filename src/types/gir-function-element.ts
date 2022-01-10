import type {
    GirCallableAttrs,
    GirInfoAttrs,
    GirDocElement,
    TsForGjsExtended,
    GirCallableParams,
    GirCallableReturn,
} from '.'

export interface GirFunctionElement extends TsForGjsExtended, TsForGjsExtended, GirDocElement {
    /** element defining a standalone function (as usual in most programming languages) */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
