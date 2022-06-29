import {
    GirCallableAttrs,
    GirInfoAttrs,
    PartOfClass,
    GirDocElement,
    TsMethod,
    GirCallableReturn,
    GirCallableParams,
} from './index.js'

export interface GirVirtualMethodElement extends PartOfClass, GirDocElement {
    $: GirInfoAttrs &
        GirCallableAttrs & {
            /** name of the callable called when invoking this virtual method */
            invoker?: string
        }

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsMethod
}
