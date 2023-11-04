import { PartOfClass, TsAlias } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirAliasElement extends PartOfClass, parser.GirAliasElement {
    _tsData?: TsAlias
}
