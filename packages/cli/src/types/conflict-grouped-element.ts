import type { TsFunction, TsProperty, TsVar, TsClass, ConflictChildElement } from './index.js'

export interface ConflictGroupedElement<T = TsFunction | TsProperty | TsVar> {
    baseElements: ConflictChildElement<T>[]
    inheritedElements: ConflictChildElement<T>[]
    baseClass: TsClass
}
