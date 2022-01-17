import { LocalNameType, GirMethodElement, GirPropertyElement, GirFieldElement } from '.'

export interface LocalName {
    type: LocalNameType
    method?: GirMethodElement
    property?: GirPropertyElement
    field?: GirFieldElement
}
