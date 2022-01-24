import { DescParameter, FunctionPrefix } from '.'

export interface DescFunction {
    desc: string[] | null
    name: string
    returnType: string
    isArrowType: boolean
    isStatic: boolean
    overrideReturnType?: string
    patched: boolean
    retTypeIsVoid: boolean
    prefix: FunctionPrefix
    params: DescParameter[]
    paramsDef: string[]
    outParams: string[]
}
