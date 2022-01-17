import {
    GirDocElement,
    GirInfoAttrs,
    GirCallableAttrs,
    GirCallableParams,
    GirCallableReturn,
    DescFunction,
    GirClassElement,
    GirRecordElement,
    GirInterfaceElement,
    PartOfClass,
} from '.'

export interface GirMethodElement extends PartOfClass, GirDocElement {
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
