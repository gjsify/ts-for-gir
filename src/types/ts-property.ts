import { TsVar } from './index.js'

/**
 * Holds the data to generate a property in/for Typescript
 */
export interface TsProperty extends TsVar {
    readonly?: boolean
    isStatic?: boolean
    /** Temporary property, we will try later to resolve the conflicts correctly */
    hasConflict?: boolean

    // CUSTOM
    girTypeName: 'property'
    /** Will be exported in Typescript as a `field` of a `class` or as a "constructor-property" */
    tsTypeName: 'field' | 'constructor-property'
}
