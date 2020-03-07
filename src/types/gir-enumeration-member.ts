import { GirDoc } from './gir-doc'

export interface GirEnumerationMember {
    $: {
        name: string
        value: string
        'c:identifier'?: string
        'glib:nick'?: string
    }
    doc?: GirDoc[]
}
