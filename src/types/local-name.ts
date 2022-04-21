import { LocalNameType, GirMethodElement, GirPropertyElement, GirFieldElement } from './index.js'

export interface LocalName {
    type: LocalNameType
    method?: GirMethodElement
    property?: GirPropertyElement
    field?: GirFieldElement
}
