import { TsFunction } from './ts-function'

// Identify promisified funcs
export interface PromisifyFunc {
    /** The Gio async function */
    asyncFn?: TsFunction
    /** The Gio finish function to get the result of the `asyncFn` */
    finishFn?: TsFunction
}
