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
    TsGenericParameter,
    ClassParent,
} from '.'

export interface TsClass {
    name: string
    qualifiedName: string

    namespace: string
    version: string
    isDerivedFromGObject?: boolean

    constructPropInterfaceName: string
    inheritConstructPropInterfaceNames: string[]
    /**
     * `true` if this is a abstract class.
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
    /** Generic type parameter of this class */
    generics: TsGenericParameter[]

    /**
     * All direct inheritances and implementations.
     * Whether it is an inheritance or an implementation can be recognized by the `type` property
     */
    parents: ClassParent[]

    /** All extended classes, also the indirect extended classes */
    inherit: {
        /** module packageName + package version + full system name of extended class */
        [key: string]: {
            /**
             * The depth of the inheritance, starts at 1.
             * 1 means it is a direct inheritance,
             * greater means it is an indirect inheritance
             */
            depth: number
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

    /** All implemented interfaces, also the indirect implemented interfaces */
    implements: {
        /** module packageName + package version + full system name of implemented class / interface */
        [key: string]: {
            /**
             * The depth of the implementation, starts at 1.
             * 1 means it is a direct implementation,
             * greater means it is an indirect implementation
             */
            depth: number
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

    /**
     * Some classes already have their own `.connect`, `.disconnect` or `.emit` methods,
     * so these cannot be overwritten with the Gjs signal methods which have the same name.
     * If such a name is found, it will be added to this array so that we can omit them during type generation.
     *
     * You can instead use `GObject.signal_connect`, `GObject.signal_connect_after` and `GObject.signal_emit_by_name`
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/GObject.js#L712
     */
    alreadyAssigned: string[]
}
