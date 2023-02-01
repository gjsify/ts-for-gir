import { TsFunction } from './ts-function'

// Identify promisified funcs
export interface PromisifyFunc {
    async?: TsFunction
    finish?: TsFunction
}
