import { GirCallableParams } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirMemberElement extends parser.GirMemberElement {
    parameters: [GirCallableParams]
}
