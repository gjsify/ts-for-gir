import { GirInfoAttrs, GirInfoElements, GirType, PartOfClass, TsAlias } from './index.js'
import { AliasElement } from '@gi.ts/parser'

export interface GirAliasElement extends PartOfClass, GirInfoElements, AliasElement {
    _tsData?: TsAlias
}
