import { DescVar } from '.'

export interface DescProperty extends DescVar {
    desc: string[] | null
    readonly?: boolean
}
