import { PartOfClass, TsProperty } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirPropertyElement extends PartOfClass, parser.GirPropertyElement {
    _tsData?: TsProperty
}
