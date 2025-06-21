import type { GirCallbackElement, PartOfClass } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirFieldElement extends PartOfClass, parser.GirFieldElement {
    callback?: GirCallbackElement[]
}
