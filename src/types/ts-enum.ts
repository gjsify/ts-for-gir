import { TsDoc } from './index.js'

/**
 * Holds the data to generate an `enum` or method in/for Typescript
 */
export interface TsEnum {
    name: string

    girTypeName: 'bitfield' | 'enum'
    /** Will be exported in Typescript as "enumeration": `export enum ${name} { ${memberName}: ${memberType}, ... }` */
    tsTypeName: 'enum'

    /** Typescript data to generate documentations in TSDoc style */
    doc: TsDoc
}
