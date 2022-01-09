import { GirFunctionElement } from './gir-function-element'
import { GirInfoAttrs } from './gir-info-attrs'
import { GirCallableAttrs } from './gir-callable-attrs'

export interface GirVirtualMethodElement extends GirFunctionElement {
    $: GirInfoAttrs &
        GirCallableAttrs & {
            /** name of the callable called when invoking this virtual method */
            invoker?: string
        }
}
