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

    localNames: LocalNames
    constructPropNames: LocalNames

    // BASE
    fields: GirFieldElement[]
    properties: GirPropertyElement[]
    /** Constructor properties of base class*/
    constructProps: GirPropertyElement[]
    methods: GirMethodElement[]
    virtualMethods: GirVirtualMethodElement[]
    constructors: GirConstructorElement[]
    staticFunctions: Array<GirFunctionElement | GirConstructorElement>

    extends: {
        [key: string]: {
            class: GirClassElement | GirUnionElement | GirInterfaceElement
            fields: GirFieldElement[]
            properties: GirPropertyElement[]
            methods: GirMethodElement[]
            virtualMethods: GirVirtualMethodElement[]
        }
    }

    implements: {
        [key: string]: {
            interface: GirClassElement | GirUnionElement | GirInterfaceElement
            properties: GirPropertyElement[]
            /** Constructor properties of implemented classes */
            constructProps: GirPropertyElement[]
            methods: GirMethodElement[]
        }
    }
}
