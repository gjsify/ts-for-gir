import { DescParameter } from '.'

export interface DescFunction {
    desc: string[]
    name: string | null
    patched: boolean
    retTypeIsVoid: boolean
    prefix: string
    params: DescParameter[]
}
