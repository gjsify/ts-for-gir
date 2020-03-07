import { GirType } from './gir-type'

export interface GirArray {
    $?: {
        length?: string
        'zero-terminated'?: string
        'c:type'?: string
    }
    type?: GirType[]
}
