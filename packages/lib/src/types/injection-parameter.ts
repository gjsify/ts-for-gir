import type { InjectionType, TsDoc } from './index.js'

export interface InjectionParameter {
    name: string
    type: InjectionType[]
    /** If `true` the parameter is a rest parameter like `(...names: string[])` */
    isRest?: boolean
    doc?: Partial<TsDoc>
}
