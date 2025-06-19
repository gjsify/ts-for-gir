import { Logger } from "../logger.ts";
import {
    GenerifiedTypeIdentifier,
    GenericType,
    TypeIdentifier
} from "../gir.ts";
import { TypeExpression } from "../gir.ts";
import { IntrospectedBase } from "./introspected-base.ts";

import {
    type GirClassElement
} from "../index.ts";

import {
    IntrospectedClassFunction,
    IntrospectedVirtualClassFunction,
    IntrospectedStaticClassFunction,
    IntrospectedConstructor
} from "./function.ts";
import { IntrospectedClassCallback } from "./callback.ts";
import { IntrospectedProperty, IntrospectedField } from "./property.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import {
    sanitizeIdentifierName,
    parseTypeIdentifier,
    resolveTypeIdentifier,
    parseDoc,
    parseMetadata
} from "../utils/index.ts";
import { IntrospectedSignal } from "./signal.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { GenericNameGenerator } from "./generics.ts";
import { findMap } from "../util.ts";

import type { OptionsLoad, ClassMember } from "../types/index.ts";
import { IntrospectedBaseClass } from "./introspected-base-class.ts";
import { 
    type ClassResolution,
} from "../types/index.ts";
import { IntrospectedInterface } from "./interface.ts";

const log = new Logger(true, "gir/introspected-class");

export class IntrospectedClass extends IntrospectedBaseClass {
    signals: IntrospectedSignal[] = [];
    interfaces: TypeIdentifier[] = [];
    isAbstract: boolean = false;
    mainConstructor: null | IntrospectedConstructor = null;
    private _staticDefinition: string | null = null;

    constructor(name: string, namespace: IntrospectedNamespace) {
        super({ name, namespace });
    }

    /**
     * Returns all signals for this class including:
     * - Explicit signals defined on the class
     * - Property notification signals (notify::property-name) for GObject-derived classes
     * - Detailed signal variants for properties (signal-name::property-name)
     */
    getAllSignals(): Array<{
        name: string;
        signal?: IntrospectedSignal;
        isNotifySignal?: boolean;
        isDetailSignal?: boolean;
        parameterTypes?: string[];
        returnType?: string;
    }> {
        const allSignals: Array<{
            name: string;
            signal?: IntrospectedSignal;
            isNotifySignal?: boolean;
            isDetailSignal?: boolean;
            parameterTypes?: string[];
            returnType?: string;
        }> = [];

        // Add explicit signals defined on the class
        this.signals.forEach(signal => {
            allSignals.push({
                name: signal.name,
                signal: signal,
                isNotifySignal: false,
                isDetailSignal: false
            });
        });

        // Check if this class supports GObject notifications
        const isGObjectObject = this.name === 'Object' && this.namespace.namespace === 'GObject';
        const hasNotifySignal = this.signals.some(signal => signal.name === 'notify');
        const hasGObjectParent = this.someParent(
            (p: IntrospectedClass | IntrospectedInterface) => 
                p.namespace.namespace === 'GObject' && p.name === 'Object'
        );

        if (isGObjectObject || hasNotifySignal || hasGObjectParent) {
            // Collect all properties (own + inherited + implemented)
            const allProperties = this.getAllProperties();

            // Generate property notification signals (notify::property-name)
            const uniquePropertyNames = new Set(
                allProperties.map(prop => 
                    prop.name
                        .replace(/_/g, '-')
                        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                        .toLowerCase()
                )
            );

            uniquePropertyNames.forEach(propertyName => {
                allSignals.push({
                    name: `notify::${propertyName}`,
                    isNotifySignal: true,
                    isDetailSignal: false,
                    parameterTypes: ['GObject.ParamSpec'],
                    returnType: 'void'
                });
            });

            // Generate detailed signal variants for properties
            const detailSignals = this.signals.filter(signal => signal.detailed);
            if (detailSignals.length > 0) {
                detailSignals.forEach(detailSignal => {
                    uniquePropertyNames.forEach(propertyName => {
                        allSignals.push({
                            name: `${detailSignal.name}::${propertyName}`,
                            signal: detailSignal,
                            isNotifySignal: false,
                            isDetailSignal: true
                        });
                    });
                });
            }
        }

        return allSignals;
    }

    /**
     * Returns all properties for this class including inherited and implemented properties
     */
    private getAllProperties(): IntrospectedProperty[] {
        const allProperties = [...this.props];

        // Add properties from parent classes
        let currentClass = this as IntrospectedClass;
        while (currentClass) {
            const parentResolution = currentClass.resolveParents().extends();
            if (parentResolution && parentResolution.node instanceof IntrospectedClass) {
                const parentClass = parentResolution.node as IntrospectedClass;
                allProperties.push(...parentClass.props);
                currentClass = parentClass;
            } else {
                break;
            }
        }

        // Add properties from implemented interfaces
        const implementedProps = this.implementedProperties();
        allProperties.push(...implementedProps);

        return allProperties;
    }

    accept(visitor: GirVisitor): IntrospectedClass {
        const node = this.copy({
            signals: this.signals.map(s => s.accept(visitor)),
            constructors: this.constructors.map(c => c.accept(visitor)),
            members: this.members.map(m => m.accept(visitor)),
            props: this.props.map(p => p.accept(visitor)),
            fields: this.fields.map(f => f.accept(visitor)),
            callbacks: this.callbacks.map(c => c.accept(visitor))
        });
        return visitor.visitClass?.(node) ?? node;
    }

    hasInstanceSymbol<S extends { name: string }>(s: S): boolean {
        return (
            this.members.some(p => s.name === p.name && !(p instanceof IntrospectedStaticClassFunction)) ||
            this.props.some(p => s.name === p.name) ||
            this.fields.some(p => s.name === p.name)
        );
    }

    someParent(predicate: (p: IntrospectedClass | IntrospectedInterface) => boolean): boolean {
        const resolution = this.resolveParents();
        const parent = resolution.extends();

        if (parent) {
            if (predicate(parent.node)) return true;

            const some = parent.node.someParent(predicate);

            if (some) return some;
        }

        return (
            resolution
                .implements()
                .map(i => i.node)
                .some(n => predicate(n)) || resolution.implements().some(i => i.node.someParent(predicate))
        );
    }

    findParent(
        predicate: (p: IntrospectedClass | IntrospectedInterface) => boolean
    ): IntrospectedClass | IntrospectedInterface | undefined {
        const resolution = this.resolveParents();

        const parent = resolution.extends();

        if (parent) {
            if (predicate(parent.node)) return this;

            const found = parent.node.findParent(predicate);

            if (found) return found;
        }

        const interfaces = resolution.implements().map(i => i.node);
        return interfaces.find(n => predicate(n)) || interfaces.find(n => n.findParent(predicate));
    }

    findParentMap<K>(predicate: (p: IntrospectedClass | IntrospectedInterface) => K | undefined): K | undefined {
        const resolution = this.resolveParents();

        const parent = resolution.extends();

        if (parent) {
            let found = predicate(parent.node);

            if (found !== undefined) return found;

            found = parent.node.findParentMap(predicate);

            if (found !== undefined) return found;
        }

        const interfaces = resolution.implements().map(i => i.node);

        const result = findMap(interfaces, i => predicate(i));
        if (result !== undefined) return result;

        return findMap(interfaces, i => i.findParentMap(predicate));
    }

    implementedProperties(potentialConflicts: IntrospectedBase<never>[] = []) {
        const resolution = this.resolveParents();
        const implemented_on_parent = [...(resolution.extends() ?? [])]
            .map(r => r.implements())
            .flat()
            .map(i => i.identifier);
        const properties = new Map<string, IntrospectedProperty>();

        const validateProp = (prop: IntrospectedProperty) =>
            !this.hasInstanceSymbol(prop) &&
            !properties.has(prop.name) &&
            potentialConflicts.every(p => prop.name !== p.name);

        for (const implemented of resolution.implements()) {
            if (implemented.node instanceof IntrospectedClass) continue;

            if (implemented_on_parent.some(p => p.equals(implemented.identifier))) continue;

            for (const prop of implemented.node.props) {
                if (!validateProp(prop)) {
                    continue;
                }
                properties.set(prop.name, prop.copy({ parent: this }));
            }
        }

        for (const implemented of resolution.implements()) {
            [...implemented].forEach(e => {
                if (e.node instanceof IntrospectedClass) return;

                if (implemented_on_parent.some(p => p.equals(e.identifier))) return;

                for (const prop of e.node.props) {
                    if (!validateProp(prop)) {
                        continue;
                    }

                    properties.set(prop.name, prop.copy({ parent: this }));
                }
            });
        }

        // If an interface inherits from a class (such as Gtk.Widget)
        // we need to pull in every method from that class...
        for (const implemented of resolution.implements()) {
            const extended = implemented.extends();

            if (extended?.node instanceof IntrospectedClass) {
                for (const prop of extended.node.props) {
                    if (!validateProp(prop)) continue;

                    properties.set(prop.name, prop);
                }
            }
        }

        return [...properties.values()];
    }

    implementedMethods(potentialConflicts: ClassMember[] = []) {
        const resolution = this.resolveParents();
        const implementedOnParent = [...(resolution.extends() ?? [])].map(r => r.implements()).flat();
        const methods = new Map<string, IntrospectedClassFunction>();

        const validateMethod = (method: IntrospectedClassFunction) =>
            !(method instanceof IntrospectedStaticClassFunction) &&
            !this.hasInstanceSymbol(method) &&
            !methods.has(method.name) &&
            potentialConflicts.every(m => method.name !== m.name);

        for (const implemented of resolution.implements()) {
            if (implemented.node instanceof IntrospectedClass) continue;

            if (
                implementedOnParent.find(p => p.identifier.equals(implemented.identifier))?.node?.generics?.length === 0
            )
                continue;
            for (const member of implemented.node.members) {
                if (!validateMethod(member)) continue;
                methods.set(member.name, member);
            }
        }

        for (const implemented of resolution.implements()) {
            [...implemented].forEach(e => {
                if (e.node instanceof IntrospectedClass) return;

                if (implementedOnParent.find(p => p.identifier.equals(e.identifier))?.node.generics.length === 0)
                    return;
                for (const member of e.node.members) {
                    if (!validateMethod(member)) continue;

                    methods.set(member.name, member);
                }
            });
        }

        // If an interface inherits from a class (such as Gtk.Widget)
        // we need to pull in every method from that class...
        for (const implemented of resolution.implements()) {
            const extended = implemented.extends();

            if (extended?.node instanceof IntrospectedClass) {
                for (const member of extended.node.members) {
                    if (!validateMethod(member)) continue;

                    methods.set(member.name, member);
                }
            }
        }

        return [...methods.values()].map(f => {
            const mapping = new Map<string, TypeExpression>();
            if (f.parent instanceof IntrospectedBaseClass) {
                const inter = this.interfaces.find(i => i.equals(f.parent.getType()));

                if (inter instanceof GenerifiedTypeIdentifier) {
                    f.parent.generics.forEach((g, i) => {
                        if (inter.generics.length > i) {
                            mapping.set(g.type.identifier, inter.generics[i]);
                        }
                    });
                }
            }

            const unwrapped = f.return().deepUnwrap();
            let modifiedReturn = f.return();

            if (unwrapped instanceof GenericType && mapping.has(unwrapped.identifier)) {
                const mapped = mapping.get(unwrapped.identifier);

                if (mapped) {
                    modifiedReturn = f.return().rewrap(mapped);
                }
                // Handles the case where a class implements an interface and thus copies its virtual methods.
            } else if (unwrapped.equals(this.getType())) {
                modifiedReturn = f.return().rewrap(this.getType());
            }

            return f.copy({
                parent: this,
                interfaceParent: f.parent,
                parameters: f.parameters.map(p => {
                    const t = p.type.deepUnwrap();
                    if (t instanceof GenericType && mapping.has(t.identifier)) {
                        const iden = mapping.get(t.identifier);

                        if (iden) {
                            return p.copy({ type: p.type.rewrap(iden) });
                        }
                    }

                    return p;
                }),
                outputParameters: f.output_parameters.map(p => {
                    const t = p.type.deepUnwrap();
                    if (t instanceof GenericType && mapping.has(t.identifier)) {
                        const iden = mapping.get(t.identifier);

                        if (iden) {
                            return p.copy({ type: p.type.rewrap(iden) });
                        }
                    }

                    return p;
                }),
                returnType: modifiedReturn
            });
        });
    }

    resolveParents(): ClassResolution {
        const { namespace, superType, interfaces } = this;

        return {
            *[Symbol.iterator]() {
                let current = this.extends();

                while (current !== undefined) {
                    yield current;
                    current = current.extends();
                }
            },
            implements() {
                const z = interfaces
                    .map(i => resolveTypeIdentifier(namespace, i))
                    .filter((i): i is IntrospectedInterface => i instanceof IntrospectedInterface)
                    .map(i => i.resolveParents());

                return z;
            },
            extends() {
                const parentType = superType;
                const resolved_parent = parentType && resolveTypeIdentifier(namespace, parentType);
                if (resolved_parent instanceof IntrospectedClass) return resolved_parent.resolveParents();
                return undefined;
            },
            node: this,
            identifier: this.getType()
        };
    }

    copy(
        options: {
            parent?: undefined;
            signals?: IntrospectedSignal[];
            constructors?: IntrospectedConstructor[];
            members?: IntrospectedClassFunction[];
            props?: IntrospectedProperty[];
            fields?: IntrospectedField[];
            callbacks?: IntrospectedClassCallback[];
        } = {}
    ): IntrospectedClass {
        const {
            name,
            namespace,
            superType,
            interfaces,
            members,
            constructors,
            props,
            fields,
            callbacks,
            isAbstract,
            mainConstructor,
            signals,
            generics,
            _staticDefinition
        } = this;

        const clazz = new IntrospectedClass(name, namespace);

        clazz._copyBaseProperties(this);

        if (superType) {
            clazz.superType = superType;
        }

        clazz._staticDefinition = _staticDefinition;
        clazz.signals = (options.signals ?? signals).map(s => s.copy({ parent: clazz }));
        clazz.interfaces = [...interfaces];
        clazz.props = (options.props ?? props).map(p => p.copy({ parent: clazz }));
        clazz.fields = (options.fields ?? fields).map(f => f.copy({ parent: clazz }));
        clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy({ parent: clazz }));
        clazz.isAbstract = isAbstract;
        clazz.mainConstructor = mainConstructor;
        clazz.constructors = (options.constructors ?? constructors).map(c => c.copy({ parent: clazz }));
        clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
        clazz.generics = [...generics];

        // Ensure the generic iteration resumes
        clazz.getGenericName = GenericNameGenerator.at(this.getGenericName());

        return clazz;
    }

    get staticDefinition() {
        return this._staticDefinition;
    }

    static fromXML(element: GirClassElement, ns: IntrospectedNamespace, options: OptionsLoad): IntrospectedClass {
        const name = sanitizeIdentifierName(ns.namespace, element.$.name);

        if (options.verbose) {
            log.debug(`  >> GirClass: Parsing definition ${element.$.name} (${name})...`);
        }

        const clazz = new IntrospectedClass(name, ns);

        if (options.loadDocs) {
            clazz.doc = parseDoc(element);
            clazz.metadata = parseMetadata(element);
        }

        if (element.$["glib:type-name"]) {
            clazz.resolve_names.push(element.$["glib:type-name"]);

            ns.registerResolveName(element.$["glib:type-name"], ns.namespace, name);
        }

        if (element.$["glib:type-struct"]) {
            clazz.resolve_names.push();

            ns.registerResolveName(element.$["glib:type-struct"], ns.namespace, name);
        }

        if (element.$["c:type"]) {
            clazz.resolve_names.push(element.$["c:type"]);

            ns.registerResolveName(element.$["c:type"], ns.namespace, name);
        }

        const typeStruct = element.$["glib:type-struct"];
        if (typeStruct) {
            clazz.registerStaticDefinition(typeStruct);

            clazz.resolve_names.push(typeStruct);

            ns.registerResolveName(typeStruct, ns.namespace, name);
        }

        try {
            // Setup parent type if this is an interface or class.
            if (element.$.parent) {
                clazz.superType = parseTypeIdentifier(ns.namespace, element.$.parent);
            }

            if (element.$.abstract) {
                clazz.isAbstract = true;
            }

            if (Array.isArray(element.constructor)) {
                clazz.constructors.push(
                    ...element.constructor.map(constructor =>
                        IntrospectedConstructor.fromXML(constructor, clazz, options)
                    )
                );
            }

            if (element["glib:signal"]) {
                clazz.signals.push(
                    ...element["glib:signal"].map(signal => IntrospectedSignal.fromXML(signal, clazz, options))
                );
            }

            // Properties
            if (element.property) {
                element.property.forEach(prop => {
                    const property = IntrospectedProperty.fromXML(prop, clazz, options);
                    switch (options.propertyCase) {
                        case "both":
                            clazz.props.push(property);

                            const camelCase = property.toCamelCase();

                            // Ensure we don't duplicate properties like 'show'
                            if (property.name !== camelCase.name) {
                                clazz.props.push(camelCase);
                            }

                            break;
                        case "camel":
                            clazz.props.push(property.toCamelCase());
                            break;
                        case "underscore":
                            clazz.props.push(property);
                            break;
                    }
                });
            }

            // Instance Methods
            if (element.method) {
                clazz.members.push(
                    ...element.method.map(method => IntrospectedClassFunction.fromXML(method, clazz, options))
                );
            }

            // Fields
            if (element.field) {
                element.field
                    .filter(field => !("callback" in field))
                    .forEach(field => {
                        const f = IntrospectedField.fromXML(field, clazz);

                        clazz.fields.push(f);
                    });
            }

            if (element.implements) {
                element.implements.forEach(implementee => {
                    const name = implementee.$.name;
                    const type = parseTypeIdentifier(ns.namespace, name);

                    if (type) {
                        clazz.interfaces.push(type);
                    }
                });
            }

            // Callback Types
            if (element.callback) {
                clazz.callbacks.push(
                    ...element.callback.map(callback => {
                        if (options.verbose) {
                            log.debug(`Adding callback ${callback.$.name} for ${ns.namespace}`);
                        }

                        return IntrospectedClassCallback.fromXML(callback, clazz, options);
                    })
                );
            }

            // Virtual Methods
            if (element["virtual-method"]) {
                clazz.members.push(
                    ...element["virtual-method"].map(method =>
                        IntrospectedVirtualClassFunction.fromXML(method, clazz, options)
                    )
                );
            }

            // Static methods (functions)
            if (element.function) {
                clazz.members.push(
                    ...element.function.map(func => IntrospectedStaticClassFunction.fromXML(func, clazz, options))
                );
            }
        } catch (e) {
            log.error(`Failed to parse class: ${clazz.name} in ${ns.namespace}.`, e);
        }

        return clazz;
    }

    registerStaticDefinition(typeStruct: string) {
        this._staticDefinition = typeStruct;
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateClass"]> {
        return generator.generateClass(this) as ReturnType<T["generateClass"]>;
    }
}
