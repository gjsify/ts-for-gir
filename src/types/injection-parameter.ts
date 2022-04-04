import type { TsParameter } from './ts-parameter.js'

export interface InjectionParameter extends Partial<TsParameter> {
    name: string
}
