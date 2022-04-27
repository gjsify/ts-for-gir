import { TsType, TsDoc } from './index.js'

/**
 * Holds the data to generate a variable in/for Typescript
 */
export interface TsVar {
    name: string | null
    type: TsType
    /** Temporary property, we will try later to resolve the conflicts correctly */
    hasConflict?: boolean

    girTypeName: 'constant' | 'field' | 'property'
    /** Will be exported in Typescript as a `constant` or a `field` of a `class` */
    tsTypeName: 'constant' | 'static-property' | 'property' | 'constructor-property'

    /** Typescript data to generate documentations in TSDoc style */
    doc: TsDoc
}
