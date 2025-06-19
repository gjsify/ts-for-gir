import { Logger } from "../logger.ts";
import {
    NativeType,
    TypeIdentifier,
    NeverType,
    ArrayType,
    Generic,
    GenericType,
    GenerifiedTypeIdentifier,
    AnyType,
    ConflictType,
    TypeConflict
} from "../gir.ts";
import { TypeExpression } from "../gir.ts";
import { IntrospectedBase } from "./introspected-base.ts";
import { IntrospectedClassMember } from "./introspected-class-member.ts";
import { IntrospectedNamespaceMember } from "./introspected-namespace-member.ts";
import type { IntrospectedOptions } from "../types/index.ts";

import {
    
    ClassStructTypeIdentifier,
    type GirInterfaceElement,
    type GirClassElement,
    type GirRecordElement,
    type GirUnionElement
} from "../index.ts";

import  { GirDirection } from '@gi.ts/parser'
import {
    IntrospectedClassFunction,
    IntrospectedVirtualClassFunction,
    IntrospectedStaticClassFunction,
    IntrospectedFunction,
    IntrospectedConstructor,
    IntrospectedFunctionParameter,
    IntrospectedDirectAllocationConstructor
} from "./function.ts";
import { IntrospectedClassCallback } from "./callback.ts";
import { IntrospectedProperty, IntrospectedField } from "./property.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import {
    sanitizeIdentifierName,
    parseTypeIdentifier,
    isSubtypeOf,
    resolveTypeIdentifier,
    parseDoc,
    parseMetadata
} from "../utils/index.ts";
import { IntrospectedSignal } from "./signal.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { GenericNameGenerator } from "./generics.ts";
import { findMap } from "../util.ts";

import type { OptionsLoad } from "../types/index.ts";

export enum FilterBehavior {
    DELETE,
    PRESERVE
}

const log = new Logger(true, "gir/class");

export function filterConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
    ns: IntrospectedNamespace,
    c: IntrospectedBaseClass,
    elements: T[],
    behavior = FilterBehavior.PRESERVE
): T[] {
    const filtered = [...elements.filter(p => p && p.name)];
    const prev = [] as T[];
    const thisType = c.getType();
    for (const next of filtered) {
        const field_conflicts = c.findParentMap(resolved_parent => {
            return findMap([...resolved_parent.fields], p => {
                if (p.name && p.name == next.name) {
                    if (next instanceof IntrospectedProperty) {
                        return ConflictType.ACCESSOR_PROPERTY_CONFLICT;
                    }

                    if (
                        next instanceof IntrospectedField &&
                        !isSubtypeOf(ns, thisType, resolved_parent.getType(), next.type, p.type)
                    ) {
                        return ConflictType.FIELD_NAME_CONFLICT;
                    }
                }

                return undefined;
            });
        });

        const prop_conflicts = !field_conflicts
            ? c.findParentMap(resolved_parent => {
                  return findMap([...resolved_parent.props], p => {
                      if (p.name && p.name == next.name) {
                          // TODO: This is very TypeScript-specific but until we include which parent
                          // a conflict originates from in the return, we have to handle this here
                          // and not in the generator...
                          //
                          // Classes can override parent interface accessors with properties _but_
                          // classes cannot override parent class accessors with properties without
                          // an error occuring.
                          if (p.parent instanceof IntrospectedClass && next instanceof IntrospectedField) {
                              return ConflictType.PROPERTY_ACCESSOR_CONFLICT;
                          }

                          if (
                              next instanceof IntrospectedProperty &&
                              !isSubtypeOf(ns, thisType, resolved_parent.getType(), next.type, p.type)
                          ) {
                              log.warn(
                                  `>> Conflict in ${next.parent?.name}.${next.name} with ${p.parent?.name}.${p.name}.`
                              );
                              return ConflictType.PROPERTY_NAME_CONFLICT;
                          }
                      }

                      return undefined;
                  });
              })
            : undefined;

        const function_conflicts =
            !field_conflicts && !prop_conflicts
                ? c.findParentMap(resolved_parent =>
                      findMap([...resolved_parent.constructors, ...resolved_parent.members], p => {
                          if (p.name && p.name == next.name) {
                              if (
                                  !(next instanceof IntrospectedClassFunction) ||
                                  isConflictingFunction(ns, thisType, next, resolved_parent.getType(), p)
                              ) {
                                  return ConflictType.FUNCTION_NAME_CONFLICT;
                              }
                          }

                          return undefined;
                      })
                  )
                : undefined;
        const conflict = field_conflicts || prop_conflicts || function_conflicts;
        if (conflict) {
            if (behavior === FilterBehavior.PRESERVE) {
                if (next instanceof IntrospectedField || next instanceof IntrospectedProperty) {
                    prev.push(
                        next.copy({
                            type: new TypeConflict(next.type, conflict)
                        }) as T
                    );
                } else {
                    prev.push(next);
                }
            }
        } else {
            prev.push(next);
        }
    }

    return prev;
}

function isConflictingFunction(
    namespace: IntrospectedNamespace,
    childThis: TypeIdentifier,
    child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
    parentThis: TypeIdentifier,
    parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor
) {
    if (!parent.isIntrospectable || !child.isIntrospectable) return false;

    if (child instanceof IntrospectedConstructor && parent instanceof IntrospectedConstructor) {
        return (
            child.parameters.length > parent.parameters.length ||
            !isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return()) ||
            child.parameters.some(
                (p, i) => !isSubtypeOf(namespace, childThis, parentThis, p.type, parent.parameters[i].type)
            )
        );
    } else if (child instanceof IntrospectedConstructor || parent instanceof IntrospectedConstructor) {
        return true;
    }

    // This occurs if two functions of the same name are passed but they
    // are different types (e.g. GirStaticClassFunction vs GirClassFunction)
    if (Object.getPrototypeOf(child) !== Object.getPrototypeOf(parent)) {
        return false;
    }

    return (
        child.parameters.length > parent.parameters.length ||
        child.output_parameters.length !== parent.output_parameters.length ||
        !isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return()) ||
        child.parameters.some(
            (np, i) => !isSubtypeOf(namespace, childThis, parentThis, np.type, parent.parameters[i].type)
        ) ||
        child.output_parameters.some(
            (np, i) => !isSubtypeOf(namespace, childThis, parentThis, np.type, parent.output_parameters[i].type)
        )
    );
}

export function filterFunctionConflict<
    T extends
        | IntrospectedStaticClassFunction
        | IntrospectedVirtualClassFunction
        | IntrospectedClassFunction
        | IntrospectedConstructor
>(ns: IntrospectedNamespace, base: IntrospectedBaseClass, elements: T[], conflict_ids: string[]) {
    const nextType = base.getType();
    return elements
        .filter(m => m.name)
        .reduce((prev, next) => {
            // TODO This should catch most of them.
            let msg: string | null = null;
            let conflicts =
                conflict_ids.includes(next.name) ||
                base.someParent(resolved_parent => {
                    const parentType = resolved_parent.getType();
                    return [...resolved_parent.constructors, ...resolved_parent.members].some(p => {
                        if (p.name && p.name == next.name) {
                            const conflicting = isConflictingFunction(ns, nextType, next, parentType, p);

                            if (conflicting) {
                                msg = `// Conflicted with ${resolved_parent.namespace.namespace}.${resolved_parent.name}.${p.name}`;
                                return true;
                            }
                            return conflicting;
                        }
                        return false;
                    });
                });

            // Check if the method name conflicts with any props or fields either on
            // the class or in the parent...
            const field_conflicts =
                [...base.props, ...base.fields].some(p => p.name && p.name === next.name) ||
                base.someParent(resolved_parent =>
                    [...resolved_parent.props, ...resolved_parent.fields].some(p => p.name && p.name === next.name)
                );

            const isGObject = base.someParent(p => p.namespace.namespace === "GObject" && p.name === "Object");

            if (isGObject) {
                conflicts = conflicts || ["connect", "connect_after", "emit"].includes(next.name);
            }

            if (conflicts) {
                let never:
                    | IntrospectedConstructor
                    | IntrospectedFunction
                    | IntrospectedClassFunction
                    | IntrospectedStaticClassFunction
                    | IntrospectedVirtualClassFunction;

                const never_param = new IntrospectedFunctionParameter({
                    name: "args",
                    direction: GirDirection.In,
                    isVarArgs: true,
                    type: new ArrayType(NeverType)
                });

                const neverOptions = {
                    name: next.name,
                    parent: base,
                    parameters: [never_param],
                    return_type: AnyType
                };

                if (next instanceof IntrospectedConstructor) {
                    never = new IntrospectedConstructor(neverOptions);
                } else if (next instanceof IntrospectedStaticClassFunction) {
                    never = new IntrospectedStaticClassFunction({ ...neverOptions, parent: next.parent });
                } else if (
                    next instanceof IntrospectedVirtualClassFunction &&
                    next.parent instanceof IntrospectedClass
                ) {
                    never = new IntrospectedVirtualClassFunction({ ...neverOptions, parent: next.parent });
                } else if (next instanceof IntrospectedClassFunction) {
                    never = new IntrospectedClassFunction({ ...neverOptions, parent: next.parent });
                } else {
                    const parent = Object.getPrototypeOf(next as (...args: unknown[]) => unknown) as
                        | ((...args: unknown[]) => unknown)
                        | null
                        | undefined;
                    throw new Error(`Unknown function type ${parent?.name} encountered.`);
                }

                if (msg) never.setWarning(msg);

                prev.push(next, never as T);
            } else if (field_conflicts) {
                log.warn(`Omitting ${next.name} due to field or property conflict.`);
            } else {
                prev.push(next);
            }

            return prev;
        }, [] as T[]);
}

export const enum ClassInjectionMember {
    MEMBER = "member",
    CONSTRUCTOR = "_constructor",
    PROPERTY = "prop",
    FIELD = "field",
    MAIN_CONSTRUCTOR = "constructor"
}

export interface ClassDefinition {
    superType: TypeIdentifier;
    interfaces: TypeIdentifier[];
    mainConstructor: IntrospectedConstructor;
    constructors: IntrospectedConstructor[];
    members: IntrospectedClassFunction[];
    props: IntrospectedProperty[];
    fields: IntrospectedField[];
    callbacks: IntrospectedClassCallback[];
}

export interface ResolutionNode {
    identifier: TypeIdentifier;
    node: IntrospectedBaseClass;
}

export interface InterfaceResolution extends ResolutionNode, Iterable<InterfaceResolution | ClassResolution> {
    extends(): InterfaceResolution | ClassResolution | undefined;
    node: IntrospectedInterface;
}

export interface ClassResolution extends ResolutionNode, Iterable<ClassResolution> {
    extends(): ClassResolution | undefined;
    implements(): InterfaceResolution[];
    node: IntrospectedClass;
}

export interface RecordResolution extends ResolutionNode, Iterable<RecordResolution> {
    extends(): RecordResolution | undefined;
    node: IntrospectedRecord;
}

export abstract class IntrospectedBaseClass extends IntrospectedNamespaceMember {
    /**
     * Used to add a TypeScript index signature to a class
     *
     * NOTE: This should probably be migrated into the TypeScript generator itself.
     */
    __ts__indexSignature?: string;
    superType: TypeIdentifier | null;

    mainConstructor: null | IntrospectedConstructor | IntrospectedDirectAllocationConstructor;
    constructors: IntrospectedConstructor[];
    members: IntrospectedClassFunction[];
    props: IntrospectedProperty[];
    fields: IntrospectedField[];
    callbacks: IntrospectedClassCallback[];

    // Generics support
    generics: Generic[] = [];

    constructor(
        options: IntrospectedOptions<{
            name: string;
            namespace: IntrospectedNamespace;
        }> &
            Partial<ClassDefinition>
    ) {
        const {
            name,
            namespace,
            superType = null,
            mainConstructor = null,
            constructors = [],
            members = [],
            props = [],
            fields = [],
            callbacks = [],
            ...args
        } = options;

        super(name, namespace, { ...args });

        this.superType = superType;

        this.mainConstructor = mainConstructor?.copy({ parent: this }) ?? null;
        this.constructors = [...constructors.map(c => c.copy({ parent: this }))];
        this.members = [...members.map(m => m.copy({ parent: this }))];
        this.props = [...props.map(p => p.copy({ parent: this }))];
        this.fields = [...fields.map(f => f.copy({ parent: this }))];
        this.callbacks = [...callbacks.map(c => c.copy({ parent: this }))];
    }

    abstract accept(visitor: GirVisitor): IntrospectedBaseClass;

    abstract copy(options?: {
        parent?: undefined;
        constructors?: IntrospectedConstructor[];
        members?: IntrospectedClassFunction[];
        props?: IntrospectedProperty[];
        fields?: IntrospectedField[];
        callbacks?: IntrospectedClassCallback[];
    }): IntrospectedBaseClass;

    getGenericName = GenericNameGenerator.new();

    abstract resolveParents(): RecordResolution | InterfaceResolution | ClassResolution;
    abstract someParent(predicate: (b: IntrospectedBaseClass) => boolean): boolean;
    abstract findParent(predicate: (b: IntrospectedBaseClass) => boolean): IntrospectedBaseClass | undefined;
    abstract findParentMap<K>(predicate: (b: IntrospectedBaseClass) => K | undefined): K | undefined;

    addGeneric(definition: {
        deriveFrom?: TypeIdentifier;
        default?: TypeExpression;
        constraint?: TypeExpression;
        propagate?: boolean;
    }) {
        const param = new Generic(
            new GenericType(this.getGenericName(), definition.constraint),
            definition.default,
            definition.deriveFrom,
            definition.constraint,
            definition.propagate
        );

        this.generics.push(param);
    }

    getType(): TypeIdentifier {
        return new TypeIdentifier(this.name, this.namespace.namespace);
    }

    static fromXML(
         
        element: GirClassElement | GirInterfaceElement | GirRecordElement,
         
        ns: IntrospectedNamespace,
         
        options: OptionsLoad
    ): IntrospectedBaseClass {
        throw new Error("fromXML is not implemented on GirBaseClass");
    }

    abstract asString<T = string>(generator: FormatGenerator<T>): T;
}

type ClassMember = IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty;

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

export class GirComplexRecord extends IntrospectedRecord {
    isSimple() {
        return false;
    }
}

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
