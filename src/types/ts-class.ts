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
    TsMethod,
    ClassParent,
    TypeClass,
} from './index.js'

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
    /** Array of signal methods for GObject properties */
    propertySignalMethods: TsMethod[]
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

    // CUSTOM
    girTypeName: TypeClass
    /** Will be exported in Typescript as a `class` */
    tsTypeName: 'class'
}
