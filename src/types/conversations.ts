import { Transformation } from './transformation'

export interface Conversations {
    [type: string]: {
        node: {
            transformation: Transformation
        }
        gjs: {
            transformation: Transformation
        }
    }
}
