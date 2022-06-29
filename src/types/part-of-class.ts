import { PartOfModule, GirClassElement, GirUnionElement, GirInterfaceElement, GirRecordElement } from './index.js'

// Custom properties, not part of parsed gir xml
export interface PartOfClass extends PartOfModule {
    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
}
