import {
    GirBoolean,
    GirInfoElements,
    GirInfoAttrs,
    GirFieldElement,
    GirFunctionElement,
    GirUnionElement,
    GirMethodElement,
    GirConstructorElement,
    GirPropertyElement,
    PartOfModule,
    TsClass,
} from './index.js'

export interface GirRecordElement extends PartOfModule, GirInfoElements {
    /** Record definition, equivalent to a C struct, that is a simple structure, not a class */
    $: GirInfoAttrs & {
        /** name of the record */
        name: string
        /** Corresponding C type of the record */
        'c:type'?: string
        /** Binary attribute to tell if the record is disguised, i.e. whether the c:type is a typedef that doesn't look like a pointer, but is one internally */
        /** Its second meaning is "private" and is set when any typedef struct is parsed which doesn't also include a full struct with fields (https://gitlab.gnome.org/GNOME/gobject-introspection/issues/101) */
        disguised?: GirBoolean
        /** GObject compatible C type of the record */
        'glib:type-name'?: string
        /** Function to get the GObject compatible type of the record */
        'glib:get-type'?: string
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefix'?: string
        /** Binary attribute to tell if the record is foreign, that is it is not available in a g-i supported library */
        foreign?: GirBoolean
        /** Name of the GObject compatible gtype this record represents. If }, this record will be hidden from generated public APIs. */
        'glib:is-gtype-struct-for'?: string
    }

    /* Other elements a record can contain */

    field?: GirFieldElement[]
    function?: GirFunctionElement[]
    union?: GirUnionElement[]
    method?: GirMethodElement[]
    constructor?: GirConstructorElement[]
    property?: GirPropertyElement[]

    _tsData?: TsClass
}
