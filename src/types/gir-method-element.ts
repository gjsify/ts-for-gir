import { GirDocElement, GirInfoAttrs, GirCallableAttrs, GirCallableParams, GirCallableReturn } from '.'

export interface GirMethodElement extends GirDocElement {
    /** element defining a method from a class */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
