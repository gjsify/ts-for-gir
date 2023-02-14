import {
    GirInfoElements,
    GirPrerequisite,
    GirImplements,
    GirConstructorElement,
    GirMethodElement,
    GirVirtualMethodElement,
    GirFunctionElement,
    GirFieldElement,
    GirPropertyElement,
    GirCallbackElement,
    GirConstantElement,
    GirSignalElement,
    PartOfModule,
    TsClass,
} from './index.js'

export interface GirInterfaceElement extends PartOfModule, GirInfoElements {
    /** Abstract interface to other classes */
    $: {
        //Attributes of an Interface (see definition below)

        /** name of the interface */
        name: string
        /** Type name compatible with the GObject type system */
        'glib:type-name': string
        /** Function to get the GObject compatible type of the interface  */
        'glib:get-type': string
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefix'?: string
        /** Corresponding C type */
        'c:type'?: string
        /** GObject compatible C structure defining the Interface */
        'glib:type-struct'?: string
    }

    //Other elements an interface can contain

    prerequisite?: GirPrerequisite[]
    implements?: GirImplements[]
    function?: GirFunctionElement[]
    constructors?: GirConstructorElement[] // Typed as optional
    method?: GirMethodElement[]
    'virtual-method'?: GirVirtualMethodElement[]
    field?: GirFieldElement[]
    property?: GirPropertyElement[]
    signal?: GirSignalElement[]
    'glib:signal'?: GirSignalElement[]
    callback?: GirCallbackElement[]
    constant?: GirConstantElement[]

    _tsData?: TsClass
}
