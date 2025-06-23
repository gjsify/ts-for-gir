import { Logger } from "../logger.ts";
import {
    NativeType,
    TypeIdentifier,
    ArrayType,
} from "../gir.ts";
import { TypeExpression } from "../gir.ts";
import type { RecordResolution } from "../types/index.ts";

import { ClassStructTypeIdentifier } from "../gir.ts";
import type { GirRecordElement, GirUnionElement } from "../types/index.ts";

import {
    IntrospectedClassFunction,
} from "./introspected-classes.ts";
import { IntrospectedConstructor } from "./constructor.ts";
import { IntrospectedStaticClassFunction } from "./introspected-classes.ts";

import { IntrospectedClassCallback } from "./introspected-classes.ts";
import { IntrospectedProperty, IntrospectedField } from "./property.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import {
    parseDoc,
    parseMetadata
} from "../utils/gir-parsing.ts";

import { parseTypeIdentifier } from "../utils/types.ts";
import { resolveTypeIdentifier } from "../utils/type-resolution.ts";
import { sanitizeIdentifierName } from "../utils/naming.ts";

import { IntrospectedSignal } from "./signal.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedBaseClass } from "./introspected-classes.ts";

import type { OptionsLoad } from "../types/index.ts";

const log = new Logger(true, "gir/class");

export class IntrospectedRecord extends IntrospectedBaseClass {
    private _isForeign: boolean = false;
    private _structFor: ClassStructTypeIdentifier | null = null;
    private _isSimple: boolean | null = null;
    private _isSimpleWithoutPointers: string | null = null;

    /**
     * Returns all signals for this record (records typically don't have signals)
     */
    getAllSignals(): Array<{
        name: string;
        signal?: IntrospectedSignal;
        isNotifySignal?: boolean;
        isDetailSignal?: boolean;
        parameterTypes?: string[];
        returnType?: string;
    }> {
        // Records typically don't have signals, but we provide a consistent API
        return [];
    }

    isForeign(): boolean {
        return this._isForeign;
    }

    get structFor() {
        return this._structFor;
    }

    getType(): TypeIdentifier {
        if (this._structFor) {
            return this._structFor;
        }

        return new TypeIdentifier(this.name, this.namespace.namespace);
    }

    someParent(predicate: (p: IntrospectedRecord) => boolean): boolean {
        const resolution = this.resolveParents();
        const parent = resolution.extends();

        return !!parent && (predicate(parent.node) || parent.node.someParent(predicate));
    }

    findParent(predicate: (p: IntrospectedRecord) => boolean): IntrospectedRecord | undefined {
        const resolution = this.resolveParents();

        const parent = resolution.extends();

        if (parent) {
            if (predicate(parent.node)) return parent.node;

            const found = parent.node.findParent(predicate);

            if (found) return found;
        }

        return undefined;
    }

    findParentMap<K>(predicate: (p: IntrospectedRecord) => K | undefined): K | undefined {
        const resolution = this.resolveParents();

        const parent = resolution.extends();

        if (parent) {
            const result = predicate(parent.node);

            if (result !== undefined) return result;

            return parent.node.findParentMap(predicate);
        }

        return undefined;
    }

    accept(visitor: GirVisitor): IntrospectedRecord {
        const node = this.copy({
            constructors: this.constructors.map(c => c.accept(visitor)),
            members: this.members.map(m => m.accept(visitor)),
            props: this.props.map(p => p.accept(visitor)),
            fields: this.fields.map(f => f.accept(visitor)),
            callbacks: this.callbacks.map(c => c.accept(visitor))
        });

        return visitor.visitRecord?.(node) ?? node;
    }

    resolveParents(): RecordResolution {
        const { namespace, superType } = this;

        return {
            *[Symbol.iterator]() {
                let current = this.extends();

                while (current !== undefined) {
                    yield current;
                    current = current.extends();
                }
            },
            extends() {
                const resolved_parent = superType ? resolveTypeIdentifier(namespace, superType) : undefined;
                if (resolved_parent instanceof IntrospectedRecord) return resolved_parent.resolveParents();

                return undefined;
            },
            node: this,
            identifier: this.getType()
        };
    }

    copy(
        options: {
            parent?: undefined;
            constructors?: IntrospectedConstructor[];
            members?: IntrospectedClassFunction[];
            props?: IntrospectedProperty[];
            fields?: IntrospectedField[];
            callbacks?: IntrospectedClassCallback[];
        } = {}
    ): IntrospectedRecord {
        const {
            name,
            namespace,
            superType,
            members,
            constructors,
            _isForeign,
            _structFor,
            props,
            fields,
            callbacks,
            generics,
            mainConstructor
        } = this;

        const clazz = new IntrospectedRecord({ name, namespace });

        clazz._copyBaseProperties(this);

        if (superType) {
            clazz.superType = superType;
        }

        clazz._structFor = _structFor;
        clazz._isForeign = _isForeign;
        clazz.props = (options.props ?? props).map(p => p.copy({ parent: clazz }));
        clazz.fields = (options.fields ?? fields).map(f => f.copy({ parent: clazz }));
        clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy({ parent: clazz }));
        clazz.mainConstructor = mainConstructor?.copy({ parent: clazz }) ?? null;
        clazz.constructors = (options.constructors ?? constructors).map(c => c.copy({ parent: clazz }));
        clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
        clazz.generics = [...generics];

        return clazz;
    }

    static foreign(name: string, namespace: IntrospectedNamespace): IntrospectedRecord {
        const foreignRecord = new IntrospectedRecord({ name, namespace });
        foreignRecord._isForeign = true;
        return foreignRecord;
    }

    static fromXML(
        element: GirRecordElement | GirUnionElement,
        namespace: IntrospectedNamespace,
        options: OptionsLoad
    ): IntrospectedRecord {
        if (!element.$.name) {
            throw new Error("Invalid GIR File: No name provided for union.");
        }

        const name = sanitizeIdentifierName(namespace.namespace, element.$.name);

        if (options.verbose) {
            log.debug(`  >> GirRecord: Parsing definition ${element.$.name} (${name})...`);
        }

        const clazz = new IntrospectedRecord({ name, namespace });

        clazz.setPrivate(
            element.$.name.startsWith("_") ||
                ("disguised" in element.$ && element.$.disguised === "1") ||
                ("opaque" in element.$ && element.$.opaque === "1")
        );

        if (typeof element.$["glib:is-gtype-struct-for"] === "string" && !!element.$["glib:is-gtype-struct-for"]) {
            const structFor = parseTypeIdentifier(namespace.namespace, element.$["glib:is-gtype-struct-for"]);

            // This let's replace these references when generating.
            clazz._structFor = new ClassStructTypeIdentifier(structFor.name, structFor.namespace);
        } else {
            if (element.$["glib:type-name"]) {
                clazz.resolve_names.push(element.$["glib:type-name"]);

                namespace.registerResolveName(element.$["glib:type-name"], namespace.namespace, name);
            }

            if (element.$["c:type"]) {
                clazz.resolve_names.push(element.$["c:type"]);

                namespace.registerResolveName(element.$["c:type"], namespace.namespace, name);
            }
        }

        if (options.loadDocs) {
            clazz.doc = parseDoc(element);
            clazz.metadata = parseMetadata(element);
        }

        try {
            // Instance Methods
            if (element.method) {
                clazz.members.push(
                    ...element.method.map(method => IntrospectedClassFunction.fromXML(method, clazz, options))
                );
            }

            // Constructors
            if (Array.isArray(element.constructor)) {
                element.constructor.forEach(constructor => {
                    const c = IntrospectedConstructor.fromXML(constructor, clazz, options);

                    clazz.constructors.push(c);
                });
            }

            // Static methods (functions)
            if (element.function) {
                clazz.members.push(
                    ...element.function.map(func => IntrospectedStaticClassFunction.fromXML(func, clazz, options))
                );
            }

            // Is this a foreign type? (don't allow construction if foreign)

            clazz._isForeign = "foreign" in element.$ && element.$.foreign === "1";

            // Fields (for "non-class" records)
            if (element.field) {
                clazz.fields.push(
                    ...element.field
                        .filter(field => !("callback" in field))
                        .map(field => IntrospectedField.fromXML(field, clazz))
                );
            }
        } catch (e) {
            log.error(`Failed to parse record: ${clazz.name}.`, e);
        }

        return clazz;
    }

    /**
     * Calculate if a type expression is "simple" without pointers
     */
    isSimpleTypeWithoutPointers(typeContainer: TypeExpression): boolean {
        if (!this.isSimpleType(typeContainer)) {
            return false;
        }

        if (typeContainer.isPointer) {
            return false;
        }

        // Primitive types can be directly allocated.
        if (typeContainer instanceof NativeType) {
            return true;
        }

        if (typeContainer instanceof ArrayType) {
            if (typeContainer.type.equals(this.getType())) {
                return true;
            }

            return this.isSimpleTypeWithoutPointers(typeContainer.type);
        }

        if (typeContainer instanceof TypeIdentifier) {
            const type = typeContainer;

            const child_ns = this.namespace.assertInstalledImport(type.namespace);

            const alias = child_ns.getAlias(type.name);
            if (alias) {
                return this.isSimpleTypeWithoutPointers(alias.type);
            }

            const child = child_ns.getClass(type.name);
            if (child === this) {
                return false;
            }

            if (child instanceof IntrospectedRecord) {
                return child.isSimpleWithoutPointers() !== null;
            }
        }

        return false;
    }

    /**
     * Calculate if a type expression is "simple"
     */
    isSimpleType(typeContainer: TypeExpression): boolean {
        // Primitive types can be directly allocated.
        if (typeContainer instanceof NativeType) {
            return true;
        }

        if (typeContainer instanceof ArrayType) {
            if (typeContainer.type.equals(this.getType())) {
                return true;
            }

            return this.isSimpleType(typeContainer.type);
        }

        if (typeContainer instanceof TypeIdentifier) {
            const type = typeContainer;

            const child_ns = this.namespace.assertInstalledImport(type.namespace);

            const alias = child_ns.getAlias(type.name);
            if (alias) {
                return this.isSimpleType(alias.type);
            }

            const child = child_ns.getClass(type.name);
            if (child === this) {
                return false;
            }

            if (child instanceof IntrospectedRecord) {
                return child.isSimple();
            }
        }

        return false;
    }

    /**
     * Check if a record is "simple" and can be constructed by GJS
     */
    isSimple() {
        // Records with no fields are not
        // constructable.
        if (this.fields.length === 0) {
            return false;
        }

        // Because we may have to recursively check
        // if types are instantiable we cache whether
        // or not a given Record is simple.
        if (this._isSimple !== null) {
            return this._isSimple;
        }

        const isSimple = this.fields.every(f => this.isSimpleType(f.type));

        this._isSimple = isSimple;

        return isSimple;
    }

    isSimpleWithoutPointers() {
        // Records which are "simple without pointers" is a subset of
        // "simple" records.
        if (!this.isSimple()) {
            return null;
        }

        // Because we may have to recursively check
        // if types are instantiable we cache whether
        // or not a given Record is simple.
        if (this._isSimpleWithoutPointers !== null) {
            return this._isSimpleWithoutPointers;
        }

        const isSimpleWithoutPointers = this.fields.find(f => {
            return !this.isSimpleTypeWithoutPointers(f.type);
        });

        if (!isSimpleWithoutPointers) this._isSimpleWithoutPointers = "all fields good";
        else this._isSimpleWithoutPointers = null;

        return this._isSimpleWithoutPointers;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateRecord"]> {
        return generator.generateRecord(this) as ReturnType<T["generateRecord"]>;
    }
}
