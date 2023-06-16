import { PropertyElement } from '@gi.ts/parser'
import { GirInfoElements, GirAnyType, PartOfClass, TsProperty } from './index.js'

export interface GirPropertyElement extends PropertyElement, PartOfClass, GirInfoElements, GirAnyType {
    _tsData?: TsProperty
}
