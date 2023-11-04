import { GirXML } from '@gi.ts/parser'
import { GirRepository } from './gir-repository'

export interface ParsedGir extends GirXML {
    repository: GirRepository[]
}
