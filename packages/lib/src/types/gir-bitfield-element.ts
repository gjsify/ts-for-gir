import { PartOfModule, GirMemberElement, GirFunctionElement } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirBitfieldElement extends PartOfModule, parser.GirBitfieldElement {
    member: GirMemberElement[]
    function: GirFunctionElement[]
}
