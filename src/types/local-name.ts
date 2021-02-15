import { VarDesc } from './var-desc'
import { LocalNameType } from './local-name-type'

export interface LocalName {
    desc: VarDesc
    type: LocalNameType
}
