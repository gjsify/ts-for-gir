import type { GirFunctionElement, GirMemberElement, PartOfModule, TsEnum } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirEnumElement extends PartOfModule, parser.GirEnumElement {
    member?: GirMemberElement[]
    function?: GirFunctionElement[]

    _tsData?: TsEnum
}
