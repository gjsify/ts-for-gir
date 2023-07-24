import { GirInfoElements, GirMemberElement, PartOfModule } from './index.js'
import { BitfieldElement } from '@gi.ts/parser'
export interface GirBitfieldElement extends BitfieldElement, PartOfModule, GirInfoElements {
    member: GirMemberElement[]
}
