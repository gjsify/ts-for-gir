import { GirPropertyElement } from '.'

export interface DescClass {
    name: string
    qualifiedName: string
    parentName?: string
    qualifiedParentName?: string
    localParentName?: string // qualified if its module != qualifiedName's module
    namespace: string
    version: string
    isDerivedFromGObject?: boolean
    /**
     * Constructor properties, used to generate the constructor properties interface
     */
    constructProp?: GirPropertyElement[]
    /**
     * Constructor properties of implemented interfaces, used to generate the constructor properties interface
     */
    implConstructProp?: GirPropertyElement[]
    constructPropInterfaceName: string
    inheritConstructPropInterfaceName?: string
    /**
     * `true` if this is this a abstract class.
     * E.g GObject.ObjectClass is a abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
     */
    isAbstract: boolean
}
