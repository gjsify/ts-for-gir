/**
 * Holds the data to generate an `enum` or method in/for Typescript
 */
export interface TsEnum {
    name: string
    // CUSTOM
    girTypeName: 'bitfield' | 'enum'
    /** Will be exported in Typescript as "enumeration": `export enum ${name} { ${memberName}: ${memberType}, ... }` */
    tsTypeName: 'enum'
}
