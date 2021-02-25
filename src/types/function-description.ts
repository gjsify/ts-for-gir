import { boolean, string } from '@oclif/command/lib/flags'

export interface FunctionDescription {
    desc: string[]
    name: string | null
    patched: boolean
}
