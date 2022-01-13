import { DescVar } from '.'

export interface DescProperty {
    desc: string[]
    origName: string | null
    prefix: '' | 'readonly '
    var: DescVar
}
