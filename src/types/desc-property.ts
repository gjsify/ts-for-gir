import { DescVar } from '.'

export interface DescProperty extends DescVar {
    desc: string[] | null
    origName?: string | null
    readonly?: boolean
    // varDesc: string[] | null
}
