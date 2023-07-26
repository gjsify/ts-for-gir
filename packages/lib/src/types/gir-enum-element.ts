import { EnumElement } from '@gi.ts/parser'
import type { GirFunctionElement, GirMemberElement, GirInfoElements, PartOfModule, TsEnum } from './index.js'

export interface GirEnumElement extends EnumElement, PartOfModule, GirInfoElements {
    member?: GirMemberElement[]
    function?: GirFunctionElement[]

    _tsData?: TsEnum
}
