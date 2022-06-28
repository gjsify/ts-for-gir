import { TsDoc, TypeGirEnumerationMember, TypeTsEnumerationMember } from './index.js'

/**
 * Holds the data to generate a member (of an enum) in/for Typescript
 */
export interface TsMember {
    name: string
    girTypeName: TypeGirEnumerationMember
    tsTypeName: TypeTsEnumerationMember
    doc: TsDoc
}
