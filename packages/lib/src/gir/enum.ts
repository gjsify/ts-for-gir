import { NumberType, TypeIdentifier } from "../gir.ts";

import { IntrospectedNamespaceMember } from "./introspected-namespace-member.ts";
import type { GirEnumElement, GirBitfieldElement } from "../index.ts";

import { IntrospectedRecord } from "./record.ts";
import { IntrospectedField } from "./property.ts";
import { GirComplexRecord } from "./gir-complex-record.ts";
import { IntrospectedNamespace } from "./namespace.ts";

import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { sanitizeIdentifierName, sanitizeMemberName } from "../utils/naming.ts";

import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";

import type { OptionsLoad } from "../types/index.ts";
import { GirEnumMember } from "./enum-member.ts";

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

