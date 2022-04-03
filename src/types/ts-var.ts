import { GirCallbackElement } from '.'

/**
 * Holds the data to generate a variable in/for Typescript
 */
export interface TsVar {
    name: string | null
    patched: boolean
    optional: boolean
    nullable: boolean
    type: string
    callbacks: GirCallbackElement[]
}
