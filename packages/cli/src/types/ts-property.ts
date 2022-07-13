import { TsVar, TsDoc, TypeGirProperty, TypeTsProperty } from './index.js'

/**
 * Holds the data to generate a property in/for Typescript
 */
export interface TsProperty extends TsVar {
    readonly: boolean
    isStatic: boolean
    /** Temporary property, we will try later to resolve the conflicts correctly */
    hasUnresolvedConflict?: boolean

    /** true if this function was injected using the `Injector`. This information is used in the `ConflictResolver` */
    isInjected: boolean

    // CUSTOM
    girTypeName: TypeGirProperty
    /** Will be exported in Typescript as a `field` of a `class` or as a "constructor-property" */
    tsTypeName: TypeTsProperty

    /** Typescript data to generate documentations in TSDoc style */
    doc: TsDoc
}
