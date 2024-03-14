import * as parser from '@gi.ts/parser'
import { GirNamespace } from './gir-namespace'

export interface GirRepository extends parser.GirRepository {
    namespace?: GirNamespace[]
}
