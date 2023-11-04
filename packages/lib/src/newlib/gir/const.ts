import { TypeExpression } from "../gir.js";
import { IntrospectedBase } from "./base.js";
import { GirConstantElement } from "../../index.js";

import { IntrospectedNamespace } from "./namespace.js";
import { getType, parseDoc, parseMetadata, sanitizeIdentifierName } from "./util.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";

export class IntrospectedConstant extends IntrospectedBase {
    type: TypeExpression;
    value: string | null;

    constructor({
        name,
        type,
        value
    }: {
        name: string;
        type: TypeExpression;
        value: string | null;
        isIntrospectable?: boolean;
    }) {
        super(name);

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
            parent?: undefined;
            type?: TypeExpression;
        } = {}
    ): IntrospectedConstant {
        const { type, name, value } = this;

        return new IntrospectedConstant({
            name,
            type: options.type ?? type,
            value
        })._copyBaseProperties(this);
    }

    static fromXML(
        modName: string,
        ns: IntrospectedNamespace,
        options: LoadOptions,
        _parent,
        constant: GirConstantElement
    ): IntrospectedConstant {
        const c = new IntrospectedConstant({
            name: sanitizeIdentifierName(ns.name, constant.$.name),
            type: getType(modName, ns, constant),
            value: constant.$.value ?? null
        });

        if (options.loadDocs) {
            c.doc = parseDoc(constant);
            c.metadata = parseMetadata(constant);
        }

        return c;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateConst"]> {
        return generator.generateConst(this) as ReturnType<T["generateConst"]>;
    }
}
