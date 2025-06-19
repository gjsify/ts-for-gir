import { TypeExpression } from "../gir.ts";
import { IntrospectedBase, IntrospectedClassMember, type Options } from "./base.ts";
import type { GirFieldElement, GirPropertyElement } from "../index.ts";

import { getType, parseDoc, parseMetadata } from "../utils/index.ts";
import { isIntrospectable } from "../utils/index.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedBaseClass } from "./class.ts";
import { IntrospectedEnum } from "./enum.ts";

import type { OptionsLoad } from "../types/index.ts";

export class IntrospectedField extends IntrospectedClassMember {
    type: TypeExpression;

    // TODO: Make these properties readonly
    optional: boolean = false;
    computed: boolean;
    isStatic: boolean;
    writable: boolean;
    isNative: boolean = false;

    copy(options?: { parent?: IntrospectedBaseClass; type?: TypeExpression; isStatic?: boolean }): IntrospectedField {
        const { type, name, parent, optional, computed, isStatic, writable } = this;

        return new IntrospectedField({
            name,
            parent,
            type: options?.type ?? type,
            optional,
            computed,
            isStatic: options?.isStatic ?? isStatic,
            writable
        })._copyBaseProperties(this);
    }

    constructor({
        name,
        parent,
        type,
        computed = false,
        optional = false,
        isStatic = false,
        writable = true,
        ...args
    }: Options<{
        name: string;
        parent?: IntrospectedBaseClass | null;
        type: TypeExpression;
        computed?: boolean;
        optional?: boolean;
        isStatic?: boolean;
        writable?: boolean;
    }>) {
        super(name, parent ?? null, { ...args });

        this.type = type;
        this.computed = computed;
        this.optional = optional;
        this.isStatic = isStatic;
        this.writable = writable;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateField"]> {
        return generator.generateField(this) as ReturnType<T["generateField"]>;
    }

    accept(visitor: GirVisitor): IntrospectedField {
        const node = this.copy({
            type: visitor.visitType?.(this.type) ?? this.type
        });

        return visitor.visitField?.(node) ?? node;
    }

    static fromXML(field: GirFieldElement, parent: IntrospectedBaseClass): IntrospectedField {
        const namespace = parent.namespace;
        const name = field.$["name"];
        const _name = name.replace(/[-]/g, "_");
        const f = new IntrospectedField({
            name: _name,
            parent,
            type: getType(namespace, field),
            isPrivate: field.$.private === "1",
            isIntrospectable: isIntrospectable(field)
        });

        return f;
    }
}

export class JSField extends IntrospectedField {
    isNative = true;
}

export class IntrospectedProperty extends IntrospectedBase<IntrospectedEnum | IntrospectedBaseClass> {
    type: TypeExpression;

    readonly writable: boolean = false;
    readonly readable: boolean = true;
    readonly constructOnly: boolean;

    get namespace() {
        return this.parent.namespace;
    }

    copy(options?: {
        name?: string;
        parent?: IntrospectedBaseClass | IntrospectedEnum;
        type?: TypeExpression;
    }): IntrospectedProperty {
        const { name, writable, readable, type, constructOnly, parent } = this;

        return new IntrospectedProperty({
            name: options?.name ?? name,
            writable,
            readable,
            type: options?.type ?? type,
            constructOnly,
            parent: options?.parent ?? parent
        })._copyBaseProperties(this);
    }

    accept(visitor: GirVisitor): IntrospectedProperty {
        const node = this.copy({
            parent: this.parent,
            type: visitor.visitType?.(this.type) ?? this.type
        });

        return visitor.visitProperty?.(node) ?? node;
    }

    constructor({
        name,
        type,
        writable,
        readable,
        constructOnly,
        parent,
        ...args
    }: Options<{
        name: string;
        type: TypeExpression;
        writable: boolean;
        readable: boolean;
        constructOnly: boolean;
        parent: IntrospectedBaseClass | IntrospectedEnum;
    }>) {
        super(name, parent, { ...args });

        this.type = type;
        this.writable = writable;
        this.readable = readable;
        this.constructOnly = constructOnly;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T, construct?: boolean): ReturnType<T["generateProperty"]> {
        return generator.generateProperty(this, construct) as ReturnType<T["generateProperty"]>;
    }

    toCamelCase() {
        const [part, ...parts] = this.name.split("_");

        if (parts.length === 0) {
            return this.copy({
                name: part,
                parent: this.parent
            });
        }

        const camelCase = `${part}${parts.map(s => `${s[0].toUpperCase()}${s.slice(1)}`).join("")}`;

        return this.copy({
            name: camelCase,
            parent: this.parent
        });
    }

    static fromXML(
        element: GirPropertyElement,
        parent: IntrospectedBaseClass | IntrospectedEnum,
        options: OptionsLoad
    ): IntrospectedProperty {
        const ns = parent.namespace;
        const name = element.$["name"];
        const _name = name.replace(/[-]/g, "_");
        const property = new IntrospectedProperty({
            name: _name,
            writable: element.$?.writable === "1",
            readable: element.$?.readable !== "0",
            constructOnly: element.$?.["construct-only"] === "1",
            type: getType(ns, element),
            parent,
            isIntrospectable: isIntrospectable(element)
        });

        if (options.loadDocs) {
            property.doc = parseDoc(element);
            property.metadata = parseMetadata(element);
        }

        return property;
    }
}
