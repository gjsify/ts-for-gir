import type {
    GirCallableAttrs,
    GirInfoAttrs,
    GirDocElement,
    GirClassElement,
    GirCallableParams,
    TsForGjsExtended,
    GirCallableReturn,
} from '.'

export interface GirFunctionElement extends TsForGjsExtended, GirDocElement {
    /** element defining a standalone function (as usual in most programming languages) */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // Custom properties

    /**
     * The class this function is defined in
     */
    _class?: GirClassElement
}
