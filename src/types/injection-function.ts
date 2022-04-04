import type { TsFunction, InjectionParameter, InjectionInstanceParameter } from './index.js'

export interface InjectionFunction
    extends Pick<TsFunction, 'name'>,
        Partial<Pick<TsFunction, 'returnType' | 'isArrowType' | 'isStatic' | 'isGlobal' | 'isVirtual'>> {
    inParams?: InjectionParameter[]
    outParams?: InjectionParameter[]
    instanceParameters?: InjectionInstanceParameter[]
}
