import { GirClassElement, GirUnionElement, GirInterfaceElement, GirRecordElement } from './index.js'

export interface ClassParent {
    parentName: string
    qualifiedParentName: string
    /** qualified if its module != qualifiedName's module */
    localParentName: string
    type: 'parent' | 'prerequisite' | 'implements'
    cls?: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
}
