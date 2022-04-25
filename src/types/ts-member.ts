import { TsDoc } from './ts-doc'

/**
 * Holds the data to generate a member (of an enum) in/for Typescript
 */
export interface TsMember {
    name: string
    girTypeName: 'bitfield-member' | 'enum-member'
    tsTypeName: 'enum-member'
    doc: TsDoc
}
