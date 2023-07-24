import { GirInfoElements, PartOfClass } from './index.js'
import { AliasElement } from '@gi.ts/parser'

export interface GirAliasElement extends PartOfClass, GirInfoElements, AliasElement {}
