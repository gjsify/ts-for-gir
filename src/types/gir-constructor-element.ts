import { GirInfoAttrs, GirCallableAttrs, GirCallableParams, GirCallableReturn, TsForGjsExtended } from '.'

export interface GirConstructorElement extends TsForGjsExtended {
    /** A constructor of a class */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
