import type { LocalNameType, GirMethodElement, GirPropertyElement, GirFieldElement } from './index.ts'

export interface LocalName {
    type: LocalNameType
    method?: GirMethodElement
    property?: GirPropertyElement
    field?: GirFieldElement
}
