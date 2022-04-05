import { TsType } from '.'

/**
 * Holds the data to generate a variable in/for Typescript
 */
export interface TsVar {
    name: string | null
    type: TsType
}
