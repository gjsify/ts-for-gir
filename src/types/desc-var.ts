import { DefinitionOptional } from '.'

export interface DescVar {
    desc: string[]
    name: string | null
    patched: boolean
    optional: boolean
    nameSuffix: DefinitionOptional
    type: string
}
