import type { TsFunction, InjectionParameter, InjectionInstanceParameter, InjectionType } from './index.js'

export interface InjectionFunction
    extends Pick<TsFunction, 'name' | 'girTypeName'>,
        Partial<
            Pick<
                TsFunction,
                | 'isArrowType'
                | 'isStatic'
                | 'isGlobal'
                | 'isVirtual'
                | 'isInjected'
                | 'overloads'
                | 'generics'
                | 'doc'
                | 'parent'
            >
        > {
    returnTypes?: InjectionType[]
    inParams?: InjectionParameter[]
    outParams?: InjectionParameter[]
    instanceParameters?: InjectionInstanceParameter[]
}
