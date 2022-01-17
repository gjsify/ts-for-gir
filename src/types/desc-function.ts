import { DescParameter, FunctionPrefix, FunctionType } from '.'

export interface DescFunction {
    desc: string[] | null
    name: string
    type: FunctionType
    returnType: string
    arrowType: boolean
    overrideReturnType?: string
    patched: boolean
    retTypeIsVoid: boolean
    prefix: FunctionPrefix
    params: DescParameter[]
    paramsDef: string[]
    outParams: string[]
}
