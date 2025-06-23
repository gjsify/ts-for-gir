import type { GirCallableParams } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirMemberElement extends parser.GirMemberElement {
    parameters: [GirCallableParams]
}
