import { LocalNameType, DescVar, DescFunction, DescProperty } from '.'

export interface LocalName {
    desc: DescVar | DescFunction | DescProperty
    type: LocalNameType
}
