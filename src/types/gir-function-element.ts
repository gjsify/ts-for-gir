import type {
    GirCallableAttrs,
    GirInfoAttrs,
    GirDocElement,
    PartOfClass,
    GirCallableParams,
    GirCallableReturn,
    GirClassElement,
    GirRecordElement,
    GirInterfaceElement,
    DescFunction,
} from '.'

export interface GirFunctionElement extends PartOfClass, GirDocElement {
    /** element defining a standalone function (as usual in most programming languages) */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM

    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirRecordElement | GirInterfaceElement

    _desc?: DescFunction
}
