import type { TsFunction, TsProperty, TsVar, ConflictGroupedElement } from './index.js'

export interface ConflictGroupedElements<T = TsFunction | TsProperty | TsVar> {
    [name: string]: ConflictGroupedElement<T>
}
