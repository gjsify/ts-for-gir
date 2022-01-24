import { GirCallableAttrs, GirInfoAttrs, GirFunctionElement } from '.'

export interface GirVirtualMethodElement extends GirFunctionElement {
    $: GirInfoAttrs &
        GirCallableAttrs & {
            /** name of the callable called when invoking this virtual method */
            invoker?: string
        }

    // CUSTOM

    _girType: 'virtual-method'
}
