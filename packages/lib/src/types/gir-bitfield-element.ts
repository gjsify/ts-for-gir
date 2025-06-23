import type { PartOfModule, GirMemberElement, GirFunctionElement } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirBitfieldElement extends PartOfModule, parser.GirBitfieldElement {
    member: GirMemberElement[]
    function: GirFunctionElement[]
}
