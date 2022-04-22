/**
 * Holds the data to generate an alias in/for Typescript
 */
export interface TsAlias {
    name: string
    type: string
    // CUSTOM
    girTypeName: 'alias'
    /** Will be exported in Typescript as "type": `export type = ${name} = ${type}` */
    tsTypeName: 'type'
}
