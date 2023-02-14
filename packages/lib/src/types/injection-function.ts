import type {
    TsFunction,
    InjectionParameter,
    InjectionInstanceParameter,
    InjectionType,
    GirCallableParamElement,
    GirInstanceParameter,
} from './index.js'

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
                | 'isPromise'
                | 'overloads'
                | 'generics'
                | 'doc'
                | 'parent'
            >
        > {
    returnTypes?: InjectionType[]
    inParams?: Array<InjectionParameter | GirCallableParamElement>
    outParams?: Array<InjectionParameter | GirCallableParamElement>
    instanceParameters?: Array<InjectionInstanceParameter | GirInstanceParameter>
}
