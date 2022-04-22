import { GirClassElement, GirUnionElement, GirInterfaceElement, GirRecordElement, TypeClass } from './index.js'

export interface ClassParent {
    parentName: string
    qualifiedParentName: string
    /** qualified if its module != qualifiedName's module */
    localParentName: string
    type: 'parent' | 'prerequisite' | 'implements'
    /** Parent class / interface */
    cls?: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
    girTypeName: TypeClass
}
