import type { FormatGenerator, GenericDescriptor } from '../generators/generator.ts'
import type { TypeExpression } from '../gir.ts'
import type { GirAliasElement } from '../index.ts'
import type { IntrospectedOptions, OptionsLoad } from '../types/index.ts'
import { parseDoc, parseMetadata } from '../utils/gir-parsing.ts'
import { isIntrospectable } from '../utils/girs.ts'
import { sanitizeIdentifierName } from '../utils/naming.ts'
import { getAliasType } from '../utils/types.ts'
import type { GirVisitor } from '../visitor.ts'
import { IntrospectedNamespaceMember } from './introspected-namespace-member.ts'
import type { IntrospectedNamespace } from './namespace.ts'

export class IntrospectedAlias extends IntrospectedNamespaceMember {
    readonly type: TypeExpression
    readonly generics: GenericDescriptor[]

    constructor({
        namespace,
        name,
        type,
        generics = [],
        ...args
    }: IntrospectedOptions<{
        namespace: IntrospectedNamespace
        name: string
        type: TypeExpression
        generics?: GenericDescriptor[]
    }>) {
        super(name, namespace, { ...args })

        this.type = type
        this.generics = generics
    }

    accept(visitor: GirVisitor): IntrospectedAlias {
        const node = this.copy({
            type: visitor.visitType?.(this.type),
        })

        return visitor.visitAlias?.(node) ?? node
    }

    copy(options?: { parent?: undefined; type?: TypeExpression }): IntrospectedAlias {
        const { name, namespace, type } = this

        return new IntrospectedAlias({ name, namespace, type: options?.type ?? type })._copyBaseProperties(this)
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T['generateAlias']> {
        return generator.generateAlias(this) as ReturnType<T['generateAlias']>
    }

    static fromXML(
        element: GirAliasElement,
        ns: IntrospectedNamespace,
        options: OptionsLoad,
    ): IntrospectedAlias | null {
        if (!element.$.name) {
            console.error(`Alias in ${ns.namespace} lacks name.`)
            return null
        }

        const alias = new IntrospectedAlias({
            namespace: ns,
            name: sanitizeIdentifierName(ns.namespace, element.$.name),
            type: getAliasType(ns.namespace, ns, element),
            isIntrospectable: isIntrospectable(element),
        })

        if (options.loadDocs) {
            alias.doc = parseDoc(element)
            alias.metadata = parseMetadata(element)
        }

        return alias
    }
}
