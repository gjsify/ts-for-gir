import { ConstantElement } from '@gi.ts/parser'
import type { GirInfoElements, GirAnyType, GirInfoAttrs, PartOfModule, TsVar } from './index.js'

export interface GirConstantElement extends ConstantElement, PartOfModule, GirInfoElements, GirAnyType {
    _tsData?: TsVar
}
