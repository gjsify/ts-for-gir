import type { PartOfModule, GirClassElement, GirUnionElement, GirInterfaceElement, GirRecordElement } from './index.ts'

// Custom properties, not part of parsed gir xml
export interface PartOfClass extends PartOfModule {
    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement
}
