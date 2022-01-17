import { GirDocElement, GirInfoAttrs, GirCallableAttrs, GirCallableParams, GirCallableReturn, DescFunction } from '.'

export interface GirMethodElement extends GirDocElement {
    /** element defining a method from a class */
    $: GirInfoAttrs &
        GirCallableAttrs & {
            /** The GObject property that is set by this method */
            'glib:set-property': string
            /** The GObject property that is retrieved by this method */
            'glib:get-property': string
        }

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _desc?: DescFunction
}
