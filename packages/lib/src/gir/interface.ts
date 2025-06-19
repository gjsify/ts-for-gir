import { Logger } from "../logger.ts";
import type { InterfaceResolution } from "../types/index.ts";

import {
    type GirInterfaceElement,
} from "../index.ts";

import {
    IntrospectedClassFunction,
} from "./class-function.ts";
import {
    IntrospectedVirtualClassFunction,
} from "./virtual-function.ts";
import {
    IntrospectedStaticClassFunction,
} from "./static-function.ts";
import {
    IntrospectedConstructor,
} from "./constructor.ts";

import { IntrospectedClassCallback } from "./class-callback.ts";
import { IntrospectedProperty, IntrospectedField } from "./property.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import { sanitizeIdentifierName } from "../utils/naming.ts";
import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { parseTypeIdentifier } from "../utils/types.ts";
import { resolveTypeIdentifier } from "../utils/type-resolution.ts";
import { IntrospectedSignal } from "./signal.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedClass } from "./introspected-class.ts";
import { IntrospectedBaseClass } from "./introspected-base-class.ts";

import type { OptionsLoad } from "../types/index.ts";

const log = new Logger(true, "gir/class");

export class IntrospectedInterface extends IntrospectedBaseClass {
    noParent = false;
    mainConstructor: null | IntrospectedConstructor = null;

    /**
     * Returns all signals for this interface (most interfaces don't have signals, but some might)
     */
    getAllSignals(): Array<{
        name: string;
        signal?: IntrospectedSignal;
        isNotifySignal?: boolean;
        isDetailSignal?: boolean;
        parameterTypes?: string[];
        returnType?: string;
    }> {
        // Most interfaces don't have signals, but we provide a consistent API
        return [];
    }

    copy(
        options: {
            parent?: undefined;
            noParent?: boolean;
            constructors?: IntrospectedConstructor[];
            members?: IntrospectedClassFunction[];
            props?: IntrospectedProperty[];
            fields?: IntrospectedField[];
            callbacks?: IntrospectedClassCallback[];
        } = {}
    ): IntrospectedInterface {
        const {
            name,
            namespace,
            superType,
            noParent,
            members,
            constructors,
            props,
            fields,
            callbacks,
            mainConstructor,
            generics
        } = this;

        const clazz = new IntrospectedInterface({ name, namespace });

        clazz._copyBaseProperties(this);

        clazz.noParent = noParent;

        if (superType) {
            clazz.superType = superType;
        }

        clazz.props = (options.props ?? props).map(p => p.copy({ parent: clazz }));
        clazz.fields = (options.fields ?? fields).map(f => f.copy({ parent: clazz }));
        clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy({ parent: clazz }));
        clazz.mainConstructor = mainConstructor?.copy({ parent: clazz }) ?? null;
        clazz.constructors = (options.constructors ?? constructors).map(c => c.copy({ parent: clazz }));
        clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
        clazz.generics = [...generics];

        return clazz;
    }

    someParent(predicate: (p: IntrospectedClass | IntrospectedInterface) => boolean): boolean {
        const resolution = this.resolveParents();
        const parent = resolution.extends();

        return !!parent && (predicate(parent.node) || parent.node.someParent(predicate));
    }

    findParent(
        predicate: (p: IntrospectedClass | IntrospectedInterface) => boolean
    ): IntrospectedInterface | IntrospectedClass | undefined {
        const resolution = this.resolveParents();

        const parent = resolution.extends();

        if (parent) {
            if (predicate(parent.node)) return parent.node;

            const found = parent.node.findParent(predicate);

            if (found) return found;
        }

        return undefined;
    }

    findParentMap<K>(predicate: (p: IntrospectedClass | IntrospectedInterface) => K | undefined): K | undefined {
        const resolution = this.resolveParents();

        const parent = resolution.extends();

        if (parent) {
            const result = predicate(parent.node);

            if (result !== undefined) return result;

            return parent.node.findParentMap(predicate);
        }

        return undefined;
    }

    resolveParents(): InterfaceResolution {
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
                if (!superType) return undefined;
                const resolved = resolveTypeIdentifier(namespace, superType);
                if (resolved && (resolved instanceof IntrospectedClass || resolved instanceof IntrospectedInterface))
                    return resolved.resolveParents();
                return undefined;
            },
            node: this,
            identifier: this.getType()
        };
    }

    accept(visitor: GirVisitor): IntrospectedInterface {
        const node = this.copy({
            constructors: this.constructors.map(c => c.accept(visitor)),
            members: this.members.map(m => m.accept(visitor)),
            props: this.props.map(p => p.accept(visitor)),
            fields: this.fields.map(f => f.accept(visitor)),
            callbacks: this.callbacks.map(c => c.accept(visitor))
        });

        return visitor.visitInterface?.(node) ?? node;
    }

    static fromXML(
        element: GirInterfaceElement,
        namespace: IntrospectedNamespace,
        options: OptionsLoad
    ): IntrospectedInterface {
        const name = sanitizeIdentifierName(namespace.namespace, element.$.name);

        if (options.verbose) {
            log.debug(`  >> GirInterface: Parsing definition ${element.$.name} (${name})...`);
        }

        const clazz = new IntrospectedInterface({ name, namespace });

        if (options.loadDocs) {
            clazz.doc = parseDoc(element);
            clazz.metadata = parseMetadata(element);
        }

        if (element.$["glib:type-name"]) {
            clazz.resolve_names.push(element.$["glib:type-name"]);

            namespace.registerResolveName(element.$["glib:type-name"], namespace.namespace, name);
        }

        if (element.$["glib:type-struct"]) {
            clazz.resolve_names.push();

            namespace.registerResolveName(element.$["glib:type-struct"], namespace.namespace, name);
        }

        if (element.$["c:type"]) {
            clazz.resolve_names.push(element.$["c:type"]);

            namespace.registerResolveName(element.$["c:type"], namespace.namespace, name);
        }

        try {
            // Setup the "parent" (prerequisite) for this interface.
            if (element.prerequisite && element.prerequisite[0]) {
                const [prerequisite] = element.prerequisite;

                if (prerequisite.$.name) {
                    clazz.superType = parseTypeIdentifier(namespace.namespace, prerequisite.$.name);
                }
            }

            if (Array.isArray(element.constructor)) {
                for (const constructor of element.constructor) {
                    clazz.constructors.push(IntrospectedConstructor.fromXML(constructor, clazz, options));
                }
            }

            // Properties
            if (element.property) {
                clazz.props.push(
                    ...element.property
                        .map(prop => IntrospectedProperty.fromXML(prop, clazz, options))
                        .map(prop => {
                            switch (options.propertyCase) {
                                case "both":
                                    const camelCase = prop.toCamelCase();

                                    // Ensure we don't duplicate properties like 'show'
                                    if (prop.name !== camelCase.name) {
                                        return [prop, prop.toCamelCase()];
                                    }

                                    return [prop];
                                case "camel":
                                    return [prop.toCamelCase()];
                                case "underscore":
                                    return [prop];
                            }
                        })
                        .flat(1)
                );
            }

            // Instance Methods
            if (element.method) {
                for (const method of element.method) {
                    const m = IntrospectedClassFunction.fromXML(method, clazz, options);

                    clazz.members.push(m);
                }
            }

            // Virtual Methods
            if (element["virtual-method"]) {
                for (const method of element["virtual-method"]) {
                    clazz.members.push(IntrospectedVirtualClassFunction.fromXML(method, clazz, options));
                }
            }

            // Callback Types
            if (element.callback) {
                for (const callback of element.callback) {
                    if (options.verbose) {
                        log.debug(`Adding callback ${callback.$.name} for ${namespace.namespace}`);
                    }

                    clazz.callbacks.push(IntrospectedClassCallback.fromXML(callback, clazz, options));
                }
            }

            // Static methods (functions)
            if (element.function) {
                for (const func of element.function) {
                    clazz.members.push(IntrospectedStaticClassFunction.fromXML(func, clazz, options));
                }
            }
        } catch (e) {
            log.error(`Failed to parse interface: ${clazz.name}.`, e);
        }
        return clazz;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateInterface"]> {
        return generator.generateInterface(this) as ReturnType<T["generateInterface"]>;
    }
}
