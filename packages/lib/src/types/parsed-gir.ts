import type { GirXML } from '@gi.ts/parser'
import type { GirRepository } from './gir-repository.ts'

export interface ParsedGir extends GirXML {
    repository: GirRepository[]
}
