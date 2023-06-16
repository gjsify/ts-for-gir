import { GirInfoElements, GirInfoAttrs, TsMember } from './index.js'
import { MemberElement } from '@gi.ts/parser'

export interface GirMemberElement extends MemberElement, GirInfoElements {
    _tsData?: TsMember
}
