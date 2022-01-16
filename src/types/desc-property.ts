import { DescVar } from '.'

export interface DescProperty {
    desc: string[]
    readonly: boolean
    origName: string | null
    prefix: '' | 'readonly '
    var: DescVar
}
