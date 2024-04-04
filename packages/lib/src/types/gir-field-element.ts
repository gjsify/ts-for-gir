import { GirCallbackElement, PartOfClass } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirFieldElement extends PartOfClass, parser.GirFieldElement {
    callback?: GirCallbackElement[]
}
