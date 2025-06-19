import { NumberType, TypeIdentifier } from "../gir.ts";

import { IntrospectedBase } from "./introspected-base.ts";
import { IntrospectedNamespaceMember } from "./introspected-namespace-member.ts";
import type { GirMemberElement, GirEnumElement, GirBitfieldElement } from "../index.ts";

import { IntrospectedRecord } from "./record.ts";
import { IntrospectedField } from "./property.ts";
import { IntrospectedStaticClassFunction } from "./function.ts";
import { GirComplexRecord } from "./gir-complex-record.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import { parseDoc, parseMetadata, sanitizeIdentifierName, sanitizeMemberName } from "../utils/index.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";

import type { OptionsLoad } from "../types/index.ts";

export class IntrospectedEnum extends IntrospectedNamespaceMember {
    members = new Map<string, GirEnumMember>();
    flags: boolean = false;
    ns: IntrospectedNamespace;

    constructor(name: string, namespace: IntrospectedNamespace, options: { isIntrospectable?: boolean } = {}) {
        super(sanitizeIdentifierName(namespace.namespace, name), namespace, options);

        this.ns = namespace;
    }

    copy({
        members
    }: {
        parent?: undefined;
        members?: Map<string, GirEnumMember>;
    } = {}): IntrospectedEnum {
        const { namespace, name, flags } = this;

        const en = new IntrospectedEnum(name, namespace);

        for (const [key, member] of (members ?? this.members).entries()) {
            en.members.set(key, member.copy());
        }

        en.flags = flags;

        en._copyBaseProperties(this);

        return en;
    }

    accept(visitor: GirVisitor): IntrospectedEnum {
        const node = this.copy({
            members: new Map(
                Array.from(this.members.entries()).map(([name, m]) => {
                    return [name, m.accept(visitor)];
                })
            )
        });

        return visitor.visitEnum?.(node) ?? node;
    }

    getType(): TypeIdentifier {
        return new TypeIdentifier(this.name, this.ns.namespace);
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateEnum"]> {
        return generator.generateEnum(this) as ReturnType<T["generateEnum"]>;
    }

    asClass(): IntrospectedRecord {
        const { name, namespace, doc } = this;

        const clazz = new GirComplexRecord({ name, namespace, doc });

        clazz.fields.push(
            ...Array.from(this.members.values()).map(m => {
                const field = new IntrospectedField({
                    name: m.name,
                    parent: clazz,
                    type: NumberType,
                    writable: true,
                    isStatic: true
                });

                field.doc = m.doc;
                field.metadata = m.metadata;

                return field;
            })
        );
        clazz.members = [];
        return clazz;
    }

    static fromXML(
        element: GirEnumElement | GirBitfieldElement,
        ns: IntrospectedNamespace,
        options: OptionsLoad,
        flags = false
    ): IntrospectedEnum {
        const em = new IntrospectedEnum(sanitizeMemberName(element.$.name), ns);

        if (element.$["glib:type-name"]) {
            em.resolve_names.push(element.$["glib:type-name"]);

            ns.registerResolveName(element.$["glib:type-name"], ns.namespace, em.name);
        }

        if (element.$["c:type"]) {
            em.resolve_names.push(element.$["c:type"]);

            ns.registerResolveName(element.$["c:type"], ns.namespace, em.name);
        }

        if (options.loadDocs) {
            em.doc = parseDoc(element);
            em.metadata = parseMetadata(element);
        }

        if (!element.member) {
            return em;
        }

        element.member.forEach(m => {
            const member = GirEnumMember.fromXML(m, em, options);

            em.members.set(member.name, member);
        });

        em.flags = flags;

        return em;
    }
}

export class GirEnumMember extends IntrospectedBase<IntrospectedEnum> {
    value: string;
    c_identifier: string;

    constructor(name: string, value: string, parent: IntrospectedEnum, c_identifier: string) {
        super(name, parent);
        this.value = value;
        this.c_identifier = c_identifier;
    }

    get namespace() {
        return this.parent.namespace;
    }

    accept(visitor: GirVisitor): GirEnumMember {
        const node = this.copy();
        return visitor.visitEnumMember?.(node) ?? node;
    }

    copy(): GirEnumMember {
        const { value, name, parent, c_identifier } = this;

        return new GirEnumMember(name, value, parent, c_identifier)._copyBaseProperties(this);
    }

    static fromXML(element: GirMemberElement, parent: IntrospectedEnum, options: OptionsLoad): GirEnumMember {
        const upper = element.$.name.toUpperCase();
        const c_identifier = element.$["c:identifier"];

        const enumMember = new GirEnumMember(upper, element.$.value, parent, c_identifier);

        if (options.loadDocs) {
            enumMember.doc = parseDoc(element);
            enumMember.metadata = parseMetadata(element);
        }

        return enumMember;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateEnumMember"]> {
        return generator.generateEnumMember(this) as ReturnType<T["generateEnumMember"]>;
    }
}

function isEnumElement(e: unknown): e is GirEnumElement {
    return typeof e === "object" && e != null && "function" in e;
}

export class IntrospectedError extends IntrospectedEnum {
    functions: Map<string, IntrospectedStaticClassFunction> = new Map();

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateError"]> {
        return generator.generateError(this) as ReturnType<T["generateError"]>;
    }

    copy({
        members
    }: {
        parent?: undefined;
        members?: Map<string, GirEnumMember>;
    } = {}): IntrospectedEnum {
        const { namespace, name, flags } = this;

        const en = new IntrospectedError(name, namespace);

        for (const [key, member] of (members ?? this.members).entries()) {
            en.members.set(key, member.copy());
        }

        for (const [key, func] of this.functions.entries()) {
            en.functions.set(key, func.copy({ parent: en }));
        }

        en.flags = flags;

        return en._copyBaseProperties(this);
    }

    static fromXML(
        element: GirEnumElement | GirBitfieldElement,
        ns: IntrospectedNamespace,
        options: OptionsLoad
    ): IntrospectedEnum {
        const err = new IntrospectedError(sanitizeMemberName(element.$.name), ns);

        if (element.$["glib:type-name"]) {
            err.resolve_names.push(element.$["glib:type-name"]);

            ns.registerResolveName(element.$["glib:type-name"], ns.namespace, err.name);
        }

        if (element.$["c:type"]) {
            err.resolve_names.push(element.$["c:type"]);

            ns.registerResolveName(element.$["c:type"], ns.namespace, err.name);
        }

        if (options.loadDocs) {
            err.doc = parseDoc(element);
            err.metadata = parseMetadata(element);
        }

        if (element.member) {
            element.member.forEach(m => {
                const member = GirEnumMember.fromXML(m, err, options);
                err.members.set(member.name, member);
            });
        }

        if (isEnumElement(element) && element.function) {
            element.function.forEach(f => {
                const func = IntrospectedStaticClassFunction.fromXML(f, err, options);
                err.functions.set(func.name, func);
            });
        }

        return err;
    }
}
