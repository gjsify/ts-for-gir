import type { GirXML, GirRepository } from '@gi.ts/parser'

export interface ParsedGir extends GirXML {
    repository: GirRepository[]
}
