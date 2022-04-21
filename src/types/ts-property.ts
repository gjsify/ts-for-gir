import { TsVar } from './index.js'

/**
 * Holds the data to generate a property in/for Typescript
 */
export interface TsProperty extends TsVar {
    readonly?: boolean
    /** Temporary property, we will try later to resolve the conflicts correctly */
    hasConflict?: boolean
}
