import { TransformationCase } from './transformation-case'

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
