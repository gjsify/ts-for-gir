import { GirArrayType, GirDocElement } from './index.js'
import { Type } from '@gi.ts/parser'
export interface GirType extends Type, GirDocElement {
    array?: GirArrayType[]
    type: GirType[]
}
