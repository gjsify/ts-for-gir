import {
    GirCallableAttrs,
    GirInfoAttrs,
    PartOfClass,
    GirDocElement,
    TsMethod,
    GirCallableReturn,
    GirCallableParams,
} from '.'

export interface GirVirtualMethodElement extends PartOfClass, GirDocElement {
    $: GirInfoAttrs &
        GirCallableAttrs & {
            /** name of the callable called when invoking this virtual method */
            invoker?: string
        }

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM

    _girType?: 'virtual-method'
    /** Virtual methods are represented in Typescript as normal methods with the prefix "vfunc_" */
    _tsType?: 'method'
    _tsData?: TsMethod
}
