import type { PartOfModule, TsVar } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirConstantElement extends PartOfModule, parser.GirConstantElement {
    _tsData?: TsVar
}
