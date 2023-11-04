import { PartOfClass } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirCallableReturn extends PartOfClass, parser.GirCallableReturn {
    // CUSTOM
    girTypeName?: 'callable-return'
}
