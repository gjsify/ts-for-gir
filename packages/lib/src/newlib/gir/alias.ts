import { TypeExpression } from "../gir.js";
import { IntrospectedBase as IntrospectedBase, Options } from "./base.js";

import { GirAliasElement } from "../../index.js";
import { IntrospectedNamespace, isIntrospectable } from "./namespace.js";
import { sanitizeIdentifierName, getAliasType, parseDoc, parseMetadata } from "./util.js";
import { FormatGenerator, GenericDescriptor } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";

export class IntrospectedAlias extends IntrospectedBase {
    readonly type: TypeExpression;
    readonly generics: GenericDescriptor[];

    constructor({
        name,
        type,
        generics = [],
        ...args
    }: Options<{
        name: string;
        type: TypeExpression;
        generics?: GenericDescriptor[];
    }>) {
        super(name, { ...args });

        this.type = type;
        this.generics = generics;
    }

    accept(visitor: GirVisitor): IntrospectedAlias {
        const node = this.copy({
            type: visitor.visitType?.(this.type)
        });

        return visitor.visitAlias?.(node) ?? node;
    }

    copy(options?: { parent?: undefined; type?: TypeExpression }): IntrospectedAlias {
        const { name, type } = this;

        return new IntrospectedAlias({ name, type: options?.type ?? type })._copyBaseProperties(this);
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateAlias"]> {
        return generator.generateAlias(this) as ReturnType<T["generateAlias"]>;
    }

    static fromXML(
        modName: string,
        ns: IntrospectedNamespace,
        options: LoadOptions,
        _parent,
        m: GirAliasElement
    ): IntrospectedAlias | null {
        if (!m.$.name) {
            console.error(`Alias in ${modName} lacks name.`);
            return null;
        }

        const alias = new IntrospectedAlias({
            name: sanitizeIdentifierName(ns.name, m.$.name),
            type: getAliasType(modName, ns, m),
            isIntrospectable: isIntrospectable(m)
        });

        if (options.loadDocs) {
            alias.doc = parseDoc(m);
            alias.metadata = parseMetadata(m);
        }

        return alias;
    }
}
