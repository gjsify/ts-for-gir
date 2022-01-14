import { DescParameter } from '.'

export interface DescFunction {
    desc: string[]
    name: string | null
    returnType: string
    arrowType: boolean
    overrideReturnType?: string
    patched: boolean
    retTypeIsVoid: boolean
    prefix: string
    params: DescParameter[]
    outParams: string[]
}
