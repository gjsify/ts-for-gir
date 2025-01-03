import type { GirFunctionElement, GirMemberElement, PartOfModule } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirEnumElement extends PartOfModule, parser.GirEnumElement {
    member?: GirMemberElement[]
    function?: GirFunctionElement[]
}
