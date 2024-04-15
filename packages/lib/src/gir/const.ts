import { TypeExpression } from "../gir.js";
import { IntrospectedNamespaceMember, Options } from "./base.js";
import { GirConstantElement } from "../index.js";

import { IntrospectedNamespace } from "./namespace.js";
import { getType, parseDoc, parseMetadata, sanitizeIdentifierName } from "./util.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";

export class IntrospectedConstant extends IntrospectedNamespaceMember {
    type: TypeExpression;
    value: string | null;

    constructor({
        name,
        type,
        namespace,
        value,
        ...options
    }: Options<{
        name: string;
        type: TypeExpression;
        namespace: IntrospectedNamespace;
        value: string | null;
        isIntrospectable?: boolean;
    }>) {
        super(name, namespace, options);

        this.type = type;
        this.value = value;
    }

    accept(visitor: GirVisitor): IntrospectedConstant {
        const node = this.copy({
            type: visitor.visitType?.(this.type)
        });

        return visitor.visitConst?.(node) ?? node;
    }

    copy(
        options: {
            parent?: IntrospectedNamespace;
            type?: TypeExpression;
        } = {}
    ): IntrospectedConstant {
        const { type, name, value } = this;

        return new IntrospectedConstant({
            name,
            namespace: options.parent ?? this.namespace,
            type: options.type ?? type,
            value
        })._copyBaseProperties(this);
    }

    static fromXML(element: GirConstantElement, ns: IntrospectedNamespace, options: LoadOptions): IntrospectedConstant {
        const c = new IntrospectedConstant({
            name: sanitizeIdentifierName(ns.namespace, element.$.name),
            namespace: ns,
            type: getType(ns, element),
            value: element.$.value ?? null
        });

        if (options.loadDocs) {
            c.doc = parseDoc(element);
            c.metadata = parseMetadata(element);
        }

        return c;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateConst"]> {
        return generator.generateConst(this) as ReturnType<T["generateConst"]>;
    }
}
