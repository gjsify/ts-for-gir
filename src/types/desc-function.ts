import { DescParameter } from '.'

export interface DescFunction {
    desc: string[] | null
    name: string
    returnType: string
    arrowType: boolean
    overrideReturnType?: string
    patched: boolean
    retTypeIsVoid: boolean
    prefix: string
    params: DescParameter[]
    paramsDef: string[]
    outParams: string[]
}
