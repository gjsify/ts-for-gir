import { DescVar, DescFunction, DescProperty } from '.'

export interface LocalNameCheck {
    desc: DescVar | DescFunction | DescProperty
    added: boolean
    isOverloadable: boolean
}
