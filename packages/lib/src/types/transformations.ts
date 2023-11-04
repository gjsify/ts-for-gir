import type { TransformationCase } from './transformation-case.js'

export interface Transformations {
    [type: string]: {
        gjs: {
            transformation: TransformationCase
        }
    }
}
