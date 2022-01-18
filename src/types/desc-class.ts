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
    constructProp?: GirPropertyElement[]
    /**
     * Constructor properties of implemented interfaces
     */
    implConstructProp?: GirPropertyElement[]
}
