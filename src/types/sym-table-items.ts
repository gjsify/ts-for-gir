import { GirClassElement, GirUnionElement, GirInterfaceElement } from './index'

export interface SymTableItems {
    [name: string]: GirClassElement | GirUnionElement | GirInterfaceElement
}
