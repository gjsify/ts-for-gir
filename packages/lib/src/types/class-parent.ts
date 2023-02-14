import { GirClassElement, GirUnionElement, GirInterfaceElement, GirRecordElement, TypeGirClass } from './index.js'

export interface ClassParent {
    parentName: string
    qualifiedParentName: string
    /** qualified if its module != qualifiedName's module */
    localParentName: string
    type: 'parent' | 'prerequisite' | 'implements'
    /** Parent class / interface */
    cls?: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
    girTypeName: TypeGirClass
    /** True if the parent dependency exists */
    dependencyExists: boolean
}
