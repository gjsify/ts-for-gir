import type { TransformationCase } from './transformation-case.js'

export interface Transformations {
    [type: string]: {
        node: {
            transformation: TransformationCase
        }
        gjs: {
            transformation: TransformationCase
        }
    }
}
