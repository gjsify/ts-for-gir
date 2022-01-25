import {
    GirCallableParamElement,
    FunctionPrefix,
    GirInstanceParameter,
    GirConstructorElement,
    GirFunctionElement,
    GirVirtualMethodElement,
    GirMethodElement,
} from '.'

export interface DescFunction {
    // desc: string[] | null
    name: string
    returnType: string
    isArrowType: boolean
    isStatic: boolean
    overrideReturnType?: string
    patched: boolean
    retTypeIsVoid: boolean
    prefix: FunctionPrefix
    inParams: GirCallableParamElement[]
    instanceParameters: GirInstanceParameter[]
    outParams: GirCallableParamElement[]
    overloads: Array<GirConstructorElement | GirFunctionElement | GirVirtualMethodElement | GirMethodElement>
}
