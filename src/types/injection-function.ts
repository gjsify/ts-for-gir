import type { TsFunction, InjectionParameter, InjectionInstanceParameter, InjectionType } from './index.js'

export interface InjectionFunction
    extends Pick<TsFunction, 'name' | 'girTypeName'>,
        Partial<
            Pick<TsFunction, 'isArrowType' | 'isStatic' | 'isGlobal' | 'isVirtual' | 'overloads' | 'generics' | 'doc'>
        > {
    returnTypes?: InjectionType[]
    inParams?: InjectionParameter[]
    outParams?: InjectionParameter[]
    instanceParameters?: InjectionInstanceParameter[]
}
