import {
    LocalNames,
    GirPropertyElement,
    GirFieldElement,
    GirClassElement,
    GirUnionElement,
    GirInterfaceElement,
    GirMethodElement,
    GirConstructorElement,
    GirFunctionElement,
    GirVirtualMethodElement,
    GirSignalElement,
    GirRecordElement,
} from '.'

export interface DescClass {
    name: string
    qualifiedName: string
    parentName?: string
    qualifiedParentName?: string
    localParentName?: string // qualified if its module != qualifiedName's module
    namespace: string
    version: string
    isDerivedFromGObject?: boolean

    constructPropInterfaceName: string
    inheritConstructPropInterfaceName?: string
    /**
     * `true` if this is this a abstract class.
     * E.g GObject.ObjectClass is a abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
     */
    isAbstract: boolean
    /** Object with all property / method names (Used to prevent duplicate class properties / method names) */
    localNames: LocalNames
    /** Object of all constructor properties (used to generate the constructor property interface) */
    constructPropNames: LocalNames

    /** Fields of the base class itself */
    fields: GirFieldElement[]
    /** Properties of the base class itself */
    properties: GirPropertyElement[]
    /** Constructor properties of the base class itself */
    constructProps: GirPropertyElement[]
    /** Array of property names of the base class itself (used to generate signals) */
    propertyNames: string[]
    /** Methods of the base class itself */
    methods: GirMethodElement[]
    /** Virtual methods of the base class itself */
    virtualMethods: GirVirtualMethodElement[]
    /** Constructor methods of the base class itself */
    constructors: GirConstructorElement[]
    /** Static functions of the base class itself */
    staticFunctions: Array<GirFunctionElement | GirConstructorElement | GirMethodElement>
    /** Signals of the base class itself */
    signals: GirSignalElement[]

    extends: {
        /** module packageName + full system name of extended class */
        [key: string]: {
            /** The extended class itself */
            class: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
            /** Fields of extended class */
            fields: GirFieldElement[]
            /** Properties of extended class */
            properties: GirPropertyElement[]
            /** Methods of extended class */
            methods: GirMethodElement[]
            /** Virtual methods of extended class */
            virtualMethods: GirVirtualMethodElement[]
            /** Signals of extended class */
            signals: GirSignalElement[]
        }
    }

    implements: {
        /** module packageName + full system name of implemented class / interface */
        [key: string]: {
            /** The implemented class / interface itself */
            interface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
            /** Properties of implemented class / interface */
            properties: GirPropertyElement[]
            /** Constructor properties of implemented class / interface */
            constructProps: GirPropertyElement[]
            /** Methods of implemented class / interface */
            methods: GirMethodElement[]
            /** Signals of implemented class / interface */
            signals: GirSignalElement[]
        }
    }
}
