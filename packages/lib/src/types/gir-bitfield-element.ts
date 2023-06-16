import { GirInfoAttrs, GirFunctionElement, GirInfoElements, GirMemberElement, TsEnum, PartOfModule } from './index.js'
import { BitfieldElement } from '@gi.ts/parser'
export interface GirBitfieldElement extends BitfieldElement, PartOfModule, GirInfoElements {
    _tsData?: TsEnum

    member: GirMemberElement[]
}
