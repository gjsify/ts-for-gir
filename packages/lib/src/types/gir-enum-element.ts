import type { GirFunctionElement, GirMemberElement, PartOfModule } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirEnumElement extends PartOfModule, parser.GirEnumElement {
    member?: GirMemberElement[]
    function?: GirFunctionElement[]
}
