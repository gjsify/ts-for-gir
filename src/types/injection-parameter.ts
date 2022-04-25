import type { InjectionType, TsDoc } from './index.js'

export interface InjectionParameter {
    name: string
    type: InjectionType
    doc?: Partial<TsDoc>
}
