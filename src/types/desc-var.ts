import { GirCallbackElement } from '.'
export interface DescVar {
    name: string | null
    patched: boolean
    optional: boolean
    type: string
    callbacks: GirCallbackElement[]
}
