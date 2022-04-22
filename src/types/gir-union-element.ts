import type {
    GirInfoElements,
    GirInfoAttrs,
    GirConstructorElement,
    GirMethodElement,
    GirFunctionElement,
    GirFieldElement,
    GirRecordElement,
    PartOfModule,
    TsClass,
} from './index.js'

export interface GirUnionElement extends PartOfModule, GirInfoElements {
    /** element defining a type of data being a union of type, similar to union in C/C++ but extended with fields and methods */
    $: GirInfoAttrs & {
        /** name of the union */
        name?: string
        /** C type defining the union */
        'c:type'?: string
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefix'?: string
        /** GObject compatible type name */
        'glib:type-name'?: string
        /** function to retrieve the GObject compatible type of the element */
        'glib:get-type'?: string
    }

    field?: GirFieldElement[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    function?: GirFunctionElement[]
    record?: GirRecordElement[]

    _tsData?: TsClass
}
