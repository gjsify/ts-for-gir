import * as parser from '@gi.ts/parser'
import type { GirNamespace } from './gir-namespace.ts'

export interface GirRepository extends parser.GirRepository {
    namespace?: GirNamespace[]
}
