import type { FormatGenerator } from '../generators/generator.ts'
import type { GirMemberElement } from '../index.ts'
import type { OptionsLoad } from '../types/index.ts'
import { parseDoc, parseMetadata } from '../utils/gir-parsing.ts'
import type { GirVisitor } from '../visitor.ts'
import type { IntrospectedEnum } from './enum.ts'
import { IntrospectedBase } from './introspected-base.ts'

export class GirEnumMember extends IntrospectedBase<IntrospectedEnum> {
    value: string
    c_identifier: string

    constructor(name: string, value: string, parent: IntrospectedEnum, c_identifier: string) {
        super(name, parent)
        this.value = value
        this.c_identifier = c_identifier
    }

    get namespace() {
        return this.parent.namespace
    }

    accept(visitor: GirVisitor): GirEnumMember {
        const node = this.copy()
        return visitor.visitEnumMember?.(node) ?? node
    }

    copy(): GirEnumMember {
        const { value, name, parent, c_identifier } = this

        return new GirEnumMember(name, value, parent, c_identifier)._copyBaseProperties(this)
    }

    static fromXML(element: GirMemberElement, parent: IntrospectedEnum, options: OptionsLoad): GirEnumMember {
        const upper = element.$.name.toUpperCase()
        const c_identifier = element.$['c:identifier']

        const enumMember = new GirEnumMember(upper, element.$.value, parent, c_identifier)

        if (options.loadDocs) {
            enumMember.doc = parseDoc(element)
            enumMember.metadata = parseMetadata(element)
        }

        return enumMember
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T['generateEnumMember']> {
        return generator.generateEnumMember(this) as ReturnType<T['generateEnumMember']>
    }
}
