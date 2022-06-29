import type {
    GirBoolean,
    GirInfoElements,
    GirInfoAttrs,
    PartOfModule,
    GirConstructorElement,
    GirImplements,
    GirMethodElement,
    GirFunctionElement,
    GirVirtualMethodElement,
    GirFieldElement,
    GirPropertyElement,
    GirSignalElement,
    GirUnionElement,
    GirConstantElement,
    GirRecordElement,
    GirCallbackElement,
    TsClass,
} from './index.js'

export interface GirClassElement extends PartOfModule, GirInfoElements {
    /** GObject inherited class definition */
    $: GirInfoAttrs & {
        /** Name of the class */
        name: string
        /** GObject compatible type name of the class */
        'glib:type-name': string
        /** Function to get the GObject compatible type of the class */
        'glib:get-type': string
        /** Name of the parent class if any */
        parent?: string
        /** GObject compatible C structure defining the class */
        'glib:type-struct'?: string
        /** GObject compatible function to reference or increase the reference count of the class */
        'glib:ref-func'?: string
        /** GObject compatible function to unreference or decrease the reference count of the class */
        'glib:unref-func'?: string
        /** GObject compatible function to set a value of a property of the class */
        'glib:set-value-func'?: string
        /** GObject compatible function to get a value of a property of the class */
        'glib:get-value-func'?: string
        /** C type of the class */
        'c:type'?: string
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefix'?: string
        /** Binary attribute to declare the class abstract or not */
        abstract?: GirBoolean
        /** Binary attribute to declare the class fundamental or not (top-level class which do not derives from any other type) */
        'glib:fundamental'?: GirBoolean
        /** Binary attribute to declare the class final or not (non-derivable class in a derivable hierarchy) */
        final: GirBoolean
    }

    /* Other elements a class can contain */

    implements?: GirImplements[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    function?: GirFunctionElement[]
    'virtual-method'?: GirVirtualMethodElement[]
    field?: GirFieldElement[]
    property?: GirPropertyElement[]
    signal?: GirSignalElement[]
    'glib:signal'?: GirSignalElement[]
    union?: GirUnionElement[]
    constant?: GirConstantElement[]
    record?: GirRecordElement[]
    callback?: GirCallbackElement[]

    _tsData?: TsClass
}
