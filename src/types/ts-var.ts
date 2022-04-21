import { TsType } from './index.js'

/**
 * Holds the data to generate a variable in/for Typescript
 */
export interface TsVar {
    name: string | null
    type: TsType
    /** Temporary property, we will try later to resolve the conflicts correctly */
    hasConflict?: boolean
}
