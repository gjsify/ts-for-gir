import {
    GirDocElement,
    GirInfoAttrs,
    GirCallableAttrs,
    GirCallableParams,
    GirCallableReturn,
    TsMethod,
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

    // CUSTOM
    _girType?: 'method'
    /** Will be exported in Typescript as a `method` of a `class` */
    _tsType?: 'method'
    _tsData?: TsMethod
}
