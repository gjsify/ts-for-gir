import type { TransformationCase } from './transformation-case.ts'

export interface Transformations {
    [type: string]: TransformationCase
}
