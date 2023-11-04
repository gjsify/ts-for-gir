import {
  
  NativeType,
  TypeIdentifier,
  
  NeverType,
  ArrayType,
  ClosureType,
  BinaryType,
  PromiseType,
  VoidType,
  TupleType,
  BooleanType,
  Generic,
  GenericType,
  GenerifiedTypeIdentifier,
  AnyType,
  ConflictType,
  TypeConflict
} from "../gir.js";
import {  TypeExpression } from "../gir.js";
import {GirBase, GirOptions, GirMetadata} from './base.js';

import { InterfaceElement, ClassElement, RecordElement, Direction, UnionElement } from "@gi.ts/parser";
import {
  GirClassFunction,
  GirVirtualClassFunction,
  GirStaticClassFunction,
  GirCallback,
  GirFunction,
  GirConstructor,
  GirFunctionParameter,
  GirDirectAllocationConstructor
} from "./function.js";
import { GirProperty, GirField } from "./property.js";
import { GirNamespace, isIntrospectable } from "./namespace.js";
import {
  sanitizeIdentifierName,
  parseTypeIdentifier,
  isSubtypeOf,
  resolveTypeIdentifier,
  parseDoc,
  parseMetadata
} from "./util.js";
import { GirSignal } from "./signal.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";
import { GenericNameGenerator } from "./generics.js";
import { findMap } from "../util.js";

export enum FilterBehavior {
  DELETE,
  PRESERVE
}

export function filterConflicts<T extends GirBase>(
  ns: GirNamespace,
  c: GirBaseClass,
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
          if (next instanceof GirProperty) {
            return ConflictType.ACCESSOR_PROPERTY_CONFLICT;
          }

          if (
            next instanceof GirField &&
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
              if (next instanceof GirField) {
                return ConflictType.PROPERTY_ACCESSOR_CONFLICT;
              }

              if (
                next instanceof GirProperty &&
                !isSubtypeOf(ns, thisType, resolved_parent.getType(), next.type, p.type)
              ) {
                console.log(
                  `>> Conflict in ${next.parent?.name}.${next.name} with ${p.parent?.name}.${p.name}.`
                );
                return ConflictType.PROPERTY_NAME_CONFLICT;
              }
            }

            return undefined;
          });
        })
      : undefined;

    let function_conflicts =
      !field_conflicts && !prop_conflicts
        ? c.findParentMap(resolved_parent =>
            findMap([...resolved_parent.constructors, ...resolved_parent.members], p => {
              if (p.name && p.name == next.name) {
                if (
                  !(next instanceof GirClassFunction) ||
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
        if (next instanceof GirField || next instanceof GirProperty) {
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
  namespace: GirNamespace,
  childThis: TypeIdentifier,
  child: GirFunction | GirClassFunction | GirConstructor,
  parentThis: TypeIdentifier,
  parent: GirClassFunction | GirFunction | GirConstructor
) {
  if (child instanceof GirConstructor && parent instanceof GirConstructor) {
    return (
      child.parameters.length > parent.parameters.length ||
      !isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return()) ||
      child.parameters.some(
        (p, i) => !isSubtypeOf(namespace, childThis, parentThis, p.type, parent.parameters[i].type)
      )
    );
  } else if (child instanceof GirConstructor || parent instanceof GirConstructor) {
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
  T extends GirStaticClassFunction | GirVirtualClassFunction | GirClassFunction | GirConstructor
>(ns: GirNamespace, base: GirBaseClass, elements: T[], conflict_ids: string[]) {
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
              let conflicting = isConflictingFunction(ns, nextType, next, parentType, p);

              if (conflicting) {
                msg = `// Conflicted with ${resolved_parent.namespace.name}.${resolved_parent.name}.${p.name}`;
                return true;
              }
              return conflicting;
            }
            return false;
          });
        });

      let field_conflicts = base.someParent(resolved_parent =>
        [...resolved_parent.props, ...resolved_parent.fields].some(p => p.name && p.name == next.name)
      );

      const isGObject = base.someParent(p => p.namespace.name === "GObject" && p.name === "Object");

      if (isGObject) {
        conflicts = conflicts || ["connect", "connect_after", "emit"].includes(next.name);
      }

      if (conflicts) {
        let never: GirConstructor | GirFunction | GirStaticClassFunction | GirVirtualClassFunction;

        const never_param = new GirFunctionParameter({
          name: "args",
          direction: Direction.In,
          isVarArgs: true,
          type: new ArrayType(NeverType)
        });

        const neverOptions = {
          name: next.name,
          parameters: [never_param],
          return_type: AnyType
        };

        if (next instanceof GirConstructor) {
          never = new GirConstructor(neverOptions);
        } else if (next instanceof GirStaticClassFunction) {
          never = new GirStaticClassFunction({ ...neverOptions, parent: next.parent });
        } else if (next instanceof GirVirtualClassFunction && next.parent instanceof GirClass) {
          never = new GirVirtualClassFunction({ ...neverOptions, parent: next.parent });
        } else if (next instanceof GirClassFunction) {
          never = new GirClassFunction({ ...neverOptions, parent: next.parent });
        } else {
          throw new Error(`Unknown function type ${Object.getPrototypeOf(next)?.name} encountered.`);
        }

        if (msg) never.setWarning(msg);

        prev.push(next, never as T);
      } else if (field_conflicts) {
        console.error(`Omitting ${next.name} due to field conflict.`);
      } else {
        prev.push(next);
      }

      return prev;
    }, [] as T[]);
}

export function promisifyFunctions(functions: GirClassFunction[]) {
  return functions
    .map(node => {
      if (node.parameters.length > 0) {
        const last_param = node.parameters[node.parameters.length - 1];

        if (last_param) {
          const last_param_unwrapped = last_param.type.unwrap();

          if (last_param_unwrapped instanceof ClosureType) {
            const internal = last_param_unwrapped.type;
            if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
              const parent = node.parent;
              const interfaceParent = node.interfaceParent;

              if (parent instanceof GirBaseClass) {
                let async_res = (
                  node instanceof GirStaticClassFunction
                    ? [
                        ...parent.constructors,
                        ...parent.members.filter(m => m instanceof GirStaticClassFunction)
                      ]
                    : [
                        ...(interfaceParent instanceof GirInterface ? [...interfaceParent.members] : []),
                        ...parent.members.filter(m => !(m instanceof GirStaticClassFunction))
                      ]
                ).find(
                  m =>
                    m.name === `${node.name.replace(/_async$/, "")}_finish` ||
                    m.name === `${node.name}_finish`
                );

                if (async_res) {
                  const async_parameters = node.parameters.slice(0, -1).map(p => p.copy());
                  const sync_parameters = node.parameters.map(p => p.copy({ isOptional: false }));
                  const output_parameters =
                    async_res instanceof GirConstructor ? [] : async_res.output_parameters;

                  let async_return = new PromiseType(async_res.return());

                  if (output_parameters.length > 0) {
                    const raw_return = async_res.return();
                    if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
                      const [output_type, ...output_types] = output_parameters.map(op => op.type);
                      async_return = new PromiseType(new TupleType(output_type, ...output_types));
                    } else {
                      const [...output_types] = output_parameters.map(op => op.type);
                      async_return = new PromiseType(new TupleType(raw_return, ...output_types));
                    }
                  }

                  return [
                    node.copy({
                      parameters: async_parameters,
                      returnType: async_return
                    }),
                    node.copy({
                      parameters: sync_parameters
                    }),
                    node.copy({
                      returnType: new BinaryType(async_return, node.return())
                    })
                  ];
                }
              }
            }
          }
        }
      }

      return node;
    })
    .flat(1);
}

export const enum ClassInjectionMember {
  MEMBER = "member",
  CONSTRUCTOR = "_constructor",
  PROPERTY = "prop",
  FIELD = "field",
  MAIN_CONSTRUCTOR = "constructor"
}

export interface ClassDefinition {
  parent: TypeIdentifier;
  interfaces: TypeIdentifier[];
  mainConstructor: GirConstructor;
  constructors: GirConstructor[];
  members: GirClassFunction[];
  props: GirProperty[];
  fields: GirField[];
  callbacks: GirCallback[];
}

export interface ResolutionNode {
  identifier: TypeIdentifier;
  node: GirBaseClass;
}

export interface InterfaceResolution extends ResolutionNode, Iterable<InterfaceResolution | ClassResolution> {
  extends(): InterfaceResolution | ClassResolution | undefined;
  node: GirInterface;
}

export interface ClassResolution extends ResolutionNode, Iterable<ClassResolution> {
  extends(): ClassResolution | undefined;
  implements(): InterfaceResolution[];
  node: GirClass;
}

export interface RecordResolution extends ResolutionNode, Iterable<RecordResolution> {
  extends(): RecordResolution | undefined;
  node: GirRecord;
}

export abstract class GirBaseClass extends GirBase {
  namespace: GirNamespace;
  indexSignature?: string;
  parent: TypeIdentifier | null;

  mainConstructor: null | GirConstructor | GirDirectAllocationConstructor;
  constructors: GirConstructor[];
  members: GirClassFunction[];
  props: GirProperty[];
  fields: GirField[];
  callbacks: GirCallback[];

  // Generics support
  generics: Generic[] = [];

  constructor(
    options: {
      name: string;
      namespace: GirNamespace;
      isIntrospectable?: boolean;
    } & Partial<ClassDefinition>
  ) {
    const {
      name,
      namespace,
      parent = null,
      mainConstructor = null,
      constructors = [],
      members = [],
      props = [],
      fields = [],
      callbacks = [],
      ...args
    } = options;

    super(name, { ...args });

    this.namespace = namespace;
    this.parent = parent;

    this.mainConstructor = mainConstructor?.copy() ?? null;
    this.constructors = [...constructors.map(c => c.copy())];
    this.members = [...members.map(m => m.copy({ parent: this }))];
    this.props = [...props.map(p => p.copy({ parent: this }))];
    this.fields = [...fields.map(f => f.copy({ parent: this }))];
    this.callbacks = [...callbacks.map(c => c.copy())];
  }

  abstract accept(visitor: GirVisitor): GirBaseClass;

  abstract copy(options?: {
    parent?: undefined;
    constructors?: GirConstructor[];
    members?: GirClassFunction[];
    props?: GirProperty[];
    fields?: GirField[];
    callbacks?: GirCallback[];
  }): GirBaseClass;

  getGenericName = GenericNameGenerator.new();

  abstract resolveParents(): RecordResolution | InterfaceResolution | ClassResolution;
  abstract someParent(predicate: (b: GirBaseClass) => boolean): boolean;
  abstract findParent(predicate: (b: GirBaseClass) => boolean): GirBaseClass | undefined;
  abstract findParentMap<K>(predicate: (b: GirBaseClass) => K | undefined): K | undefined;

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
    return new TypeIdentifier(this.name, this.namespace.name);
  }

  static fromXML(
    _modName: string,
    _ns: GirNamespace,
    _options: LoadOptions,
    _parent,
    _klass: ClassElement | InterfaceElement | RecordElement
  ): GirBaseClass {
    throw new Error("fromXML is not implemented on GirBaseClass");
  }

  abstract asString<T = string>(generator: FormatGenerator<T>): T;
}

export class GirClass extends GirBaseClass {
  signals: GirSignal[] = [];
  interfaces: TypeIdentifier[] = [];
  isAbstract: boolean = false;
  mainConstructor: null | GirConstructor = null;
  private _staticDefinition: string | null = null;

  constructor(name: string, namespace: GirNamespace) {
    super({ name, namespace });
  }

  accept(visitor: GirVisitor): GirClass {
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

  hasInstanceSymbol(s: GirBase): boolean {
    return (
      this.members.some(p => s.name === p.name && !(p instanceof GirStaticClassFunction)) ||
      this.props.some(p => s.name === p.name) ||
      this.fields.some(p => s.name === p.name)
    );
  }

  someParent(predicate: (p: GirClass | GirInterface) => boolean): boolean {
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

  findParent(predicate: (p: GirClass | GirInterface) => boolean): GirClass | GirInterface | undefined {
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

  findParentMap<K>(predicate: (p: GirClass | GirInterface) => K | undefined): K | undefined {
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

  implementedProperties(potentialConflicts: GirBase[] = []) {
    const resolution = this.resolveParents();
    const implemented_on_parent = [...(resolution.extends() ?? [])]
      .map(r => r.implements())
      .flat()
      .map(i => i.identifier);
    const properties = new Map<string, GirProperty>();

    const validateProp = (prop: GirProperty) =>
      !this.hasInstanceSymbol(prop) &&
      !properties.has(prop.name) &&
      potentialConflicts.every(p => prop.name !== p.name);

    for (const implemented of resolution.implements()) {
      if (implemented.node instanceof GirClass) continue;

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
        if (e.node instanceof GirClass) return;

        if (implemented_on_parent.some(p => p.equals(e.identifier))) return;

        for (const prop of e.node.props) {
          if (!validateProp(prop)) {
            continue;
          }

          properties.set(prop.name, prop.copy({ parent: this }));
        }
      });
    }

    return [...properties.values()];
  }

  implementedMethods(potentialConflicts: GirBase[] = []) {
    const resolution = this.resolveParents();
    const implemented_on_parent = [...(resolution.extends() ?? [])].map(r => r.implements()).flat();
    const methods = new Map<string, GirClassFunction>();

    const validateMethod = (method: GirClassFunction) =>
      !(method instanceof GirStaticClassFunction) &&
      !this.hasInstanceSymbol(method) &&
      !methods.has(method.name) &&
      potentialConflicts.every(m => method.name !== m.name);

    for (const implemented of resolution.implements()) {
      if (implemented.node instanceof GirClass) continue;

      if (
        implemented_on_parent.find(p => p.identifier.equals(implemented.identifier))?.node?.generics
          ?.length === 0
      )
        continue;
      for (const member of implemented.node.members) {
        if (!validateMethod(member)) continue;
        methods.set(member.name, member);
      }
    }

    for (const implemented of resolution.implements()) {
      [...implemented].forEach(e => {
        if (e.node instanceof GirClass) return;

        if (implemented_on_parent.find(p => p.identifier.equals(e.identifier))?.node.generics.length === 0)
          return;
        for (const member of e.node.members) {
          if (!validateMethod(member)) continue;

          methods.set(member.name, member);
        }
      });
    }

    return [...methods.values()].map(f => {
      const mapping = new Map<string, TypeExpression>();
      if (f.parent instanceof GirBaseClass) {
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
        let mapped = mapping.get(unwrapped.identifier);

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
    let { namespace, parent, interfaces } = this;

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
          .filter((i): i is GirInterface => i instanceof GirInterface)
          .map(i => i.resolveParents());

        return z;
      },
      extends() {
        let parentType = parent;
        let resolved_parent = parentType && resolveTypeIdentifier(namespace, parentType);
        if (resolved_parent instanceof GirClass) return resolved_parent.resolveParents();
        return undefined;
      },
      node: this,
      identifier: this.getType()
    };
  }

  copy(
    options: {
      parent?: undefined;
      signals?: GirSignal[];
      constructors?: GirConstructor[];
      members?: GirClassFunction[];
      props?: GirProperty[];
      fields?: GirField[];
      callbacks?: GirCallback[];
    } = {}
  ): GirClass {
    const {
      name,
      namespace,
      parent,
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

    const clazz = new GirClass(name, namespace);

    clazz._copyBaseProperties(this);

    if (parent) {
      clazz.parent = parent;
    }

    clazz._staticDefinition = _staticDefinition;
    clazz.signals = (options.signals ?? signals).map(s => s.copy());
    clazz.interfaces = [...interfaces];
    clazz.props = (options.props ?? props).map(p => p.copy());
    clazz.fields = (options.fields ?? fields).map(f => f.copy());
    clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy());
    clazz.isAbstract = isAbstract;
    clazz.mainConstructor = mainConstructor;
    clazz.constructors = (options.constructors ?? constructors).map(c => c.copy());
    clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
    clazz.generics = [...generics];

    // Ensure the generic iteration resumes
    clazz.getGenericName = GenericNameGenerator.at(this.getGenericName());

    return clazz;
  }

  get staticDefinition() {
    return this._staticDefinition;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    _parent,
    klass: ClassElement
  ): GirClass {
    const name = sanitizeIdentifierName(ns.name, klass.$.name);

    if (options.verbose) {
      console.debug(`  >> GirClass: Parsing definition ${klass.$.name} (${name})...`);
    }

    const clazz = new GirClass(name, ns);

    if (options.loadDocs) {
      clazz.doc = parseDoc(klass);
      clazz.metadata = parseMetadata(klass);
    }

    if (klass.$["glib:type-name"]) {
      clazz.resolve_names.push(klass.$["glib:type-name"]);

      ns.registerResolveName(klass.$["glib:type-name"], ns.name, name);
    }

    if (klass.$["glib:type-struct"]) {
      clazz.resolve_names.push();

      ns.registerResolveName(klass.$["glib:type-struct"], ns.name, name);
    }

    if (klass.$["c:type"]) {
      clazz.resolve_names.push(klass.$["c:type"]);

      ns.registerResolveName(klass.$["c:type"], ns.name, name);
    }

    const typeStruct = klass.$["glib:type-struct"];
    if (typeStruct) {
      clazz.registerStaticDefinition(typeStruct);

      clazz.resolve_names.push(typeStruct);

      ns.registerResolveName(typeStruct, ns.name, name);
    }

    try {
      // Setup parent type if this is an interface or class.
      if (klass.$.parent) {
        clazz.parent = parseTypeIdentifier(modName, klass.$.parent);
      }

      if (klass.$.abstract) {
        clazz.isAbstract = true;
      }

      if (Array.isArray(klass.constructor)) {
        clazz.constructors.push(
          ...klass.constructor.map(constructor =>
            GirConstructor.fromXML(modName, ns, options, clazz, constructor)
          )
        );
      }

      if (klass["glib:signal"]) {
        clazz.signals.push(
          ...klass["glib:signal"].map(signal => GirSignal.fromXML(modName, ns, options, clazz, signal))
        );
      }

      // Properties
      if (klass.property) {
        klass.property.forEach(prop => {
          const property = GirProperty.fromXML(modName, ns, options, clazz, prop);
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
      if (klass.method) {
        clazz.members.push(
          ...klass.method.map(method => GirClassFunction.fromXML(modName, ns, options, clazz, method))
        );
      }

      // Fields
      if (klass.field) {
        klass.field
          .filter(field => !("callback" in field))
          .forEach(field => {
            const f = GirField.fromXML(modName, ns, options, null, field);

            clazz.fields.push(f);
          });
      }

      if (klass.implements) {
        klass.implements.forEach(implementee => {
          const name = implementee.$.name;
          const type = parseTypeIdentifier(modName, name);

          // Sometimes namespaces will implicitly import
          // other namespaces like Atk via interface implements.
          if (type && type.namespace && type.namespace !== modName && !ns.hasImport(type.namespace)) {
            ns.addImport(type.namespace);
          }

          if (type) {
            clazz.interfaces.push(type);
          }
        });
      }

      // Callback Types
      if (klass.callback) {
        clazz.callbacks.push(
          ...klass.callback.map(callback => {
            if (options.verbose) {
              console.debug(`Adding callback ${callback.$.name} for ${modName}`);
            }

            return GirCallback.fromXML(modName, ns, options, clazz, callback);
          })
        );
      }

      // Virtual Methods
      if (klass["virtual-method"]) {
        clazz.members.push(
          ...klass["virtual-method"].map(method =>
            GirVirtualClassFunction.fromXML(modName, ns, options, clazz, method)
          )
        );
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function.map(func => GirStaticClassFunction.fromXML(modName, ns, options, clazz, func))
        );
      }
    } catch (e) {
      console.error(`Failed to parse class: ${clazz.name} in ${ns.name}.`);
      console.error(e);
    }

    return clazz;
  }
  registerStaticDefinition(typeStruct: string) {
    this._staticDefinition = typeStruct;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateClass"]> {
    return generator.generateClass(this);
  }
}

export class GirRecord extends GirBaseClass {
  private _isForeign: boolean = false;
  private _structFor: TypeIdentifier | null = null;
  private _isSimple: boolean | null = null;
  private _isSimpleWithoutPointers: string | null = null;

  isForeign(): boolean {
    return this._isForeign;
  }

  getType(): TypeIdentifier {
    if (this._structFor) {
      return this._structFor;
    }

    return new TypeIdentifier(this.name, this.namespace.name);
  }

  someParent(predicate: (p: GirRecord) => boolean): boolean {
    const resolution = this.resolveParents();
    const parent = resolution.extends();

    return !!parent && (predicate(parent.node) || parent.node.someParent(predicate));
  }

  findParent(predicate: (p: GirRecord) => boolean): GirRecord | undefined {
    const resolution = this.resolveParents();

    const parent = resolution.extends();

    if (parent) {
      if (predicate(parent.node)) return parent.node;

      const found = parent.node.findParent(predicate);

      if (found) return found;
    }

    return undefined;
  }

  findParentMap<K>(predicate: (p: GirRecord) => K | undefined): K | undefined {
    const resolution = this.resolveParents();

    const parent = resolution.extends();

    if (parent) {
      const result = predicate(parent.node);

      if (result !== undefined) return result;

      return parent.node.findParentMap(predicate);
    }

    return undefined;
  }

  accept(visitor: GirVisitor): GirRecord {
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
    let { namespace, parent } = this;

    return {
      *[Symbol.iterator]() {
        let current = this.extends();

        while (current !== undefined) {
          yield current;
          current = current.extends();
        }
      },
      extends() {
        let parentType = parent;
        let resolved_parent = parentType ? resolveTypeIdentifier(namespace, parentType) : undefined;
        if (resolved_parent instanceof GirRecord) return resolved_parent.resolveParents();

        return undefined;
      },
      node: this,
      identifier: this.getType()
    };
  }

  copy(
    options: {
      parent?: undefined;
      constructors?: GirConstructor[];
      members?: GirClassFunction[];
      props?: GirProperty[];
      fields?: GirField[];
      callbacks?: GirCallback[];
    } = {}
  ): GirRecord {
    const {
      name,
      namespace,
      parent,
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

    const clazz = new GirRecord({ name, namespace });

    clazz._copyBaseProperties(this);

    if (parent) {
      clazz.parent = parent;
    }

    clazz._structFor = _structFor;
    clazz._isForeign = _isForeign;
    clazz.props = (options.props ?? props).map(p => p.copy({ parent: clazz }));
    clazz.fields = (options.fields ?? fields).map(f => f.copy({ parent: clazz }));
    clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy());
    clazz.mainConstructor = mainConstructor?.copy() ?? null;
    clazz.constructors = (options.constructors ?? constructors).map(c => c.copy());
    clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
    clazz.generics = [...generics];

    return clazz;
  }

  static foreign(name: string, namespace: GirNamespace): GirRecord {
    const foreignRecord = new GirRecord({ name, namespace });
    foreignRecord._isForeign = true;
    return foreignRecord;
  }

  static fromXML(
    modName: string,
    namespace: GirNamespace,
    options: LoadOptions,
    klass: RecordElement | UnionElement
  ): GirRecord {
    if (!klass.$.name) {
      throw new Error(`Invalid GIR File: No name provided for union.`);
    }

    const name = sanitizeIdentifierName(namespace.name, klass.$.name);

    if (options.verbose) {
      console.debug(`  >> GirRecord: Parsing definition ${klass.$.name} (${name})...`);
    }

    const clazz = new GirRecord({ name, namespace });

    clazz.setPrivate(
      klass.$.name.startsWith("_") ||
        ("disguised" in klass.$ && klass.$.disguised === "1") ||
        // Don't generate records for structs
        (typeof klass.$["glib:is-gtype-struct-for"] === "string" && !!klass.$["glib:is-gtype-struct-for"])
    );

    if (typeof klass.$["glib:is-gtype-struct-for"] === "string" && !!klass.$["glib:is-gtype-struct-for"]) {
      clazz.noEmit();

      // This let's us replace these references when generating.
      clazz._structFor = parseTypeIdentifier(modName, klass.$["glib:is-gtype-struct-for"]);
    } else {
      if (klass.$["glib:type-name"]) {
        clazz.resolve_names.push(klass.$["glib:type-name"]);

        namespace.registerResolveName(klass.$["glib:type-name"], namespace.name, name);
      }

      if (klass.$["glib:type-struct"]) {
        clazz.resolve_names.push();

        namespace.registerResolveName(klass.$["glib:type-struct"], namespace.name, name);
      }

      if (klass.$["c:type"]) {
        clazz.resolve_names.push(klass.$["c:type"]);

        namespace.registerResolveName(klass.$["c:type"], namespace.name, name);
      }
    }

    if (options.loadDocs) {
      clazz.doc = parseDoc(klass);
      clazz.metadata = parseMetadata(klass);
    }

    try {
      // Instance Methods
      if (klass.method) {
        clazz.members.push(
          ...klass.method.map(method => GirClassFunction.fromXML(modName, namespace, options, clazz, method))
        );
      }

      // Constructors
      if (Array.isArray(klass.constructor)) {
        klass.constructor.forEach(constructor => {
          const c = GirConstructor.fromXML(modName, namespace, options, clazz, constructor);

          clazz.constructors.push(c);
        });
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function.map(func =>
            GirStaticClassFunction.fromXML(modName, namespace, options, clazz, func)
          )
        );
      }

      // Is this a foreign type? (don't allow construction if foreign)

      clazz._isForeign = "foreign" in klass.$ && klass.$.foreign === "1";

      // Fields (for "non-class" records)
      if (klass.field) {
        clazz.fields.push(
          ...klass.field
            .filter(field => !("callback" in field))
            .map(field => GirField.fromXML(modName, namespace, options, null, field))
        );
      }
    } catch (e) {
      console.error(`Failed to parse record: ${clazz.name}.`);
      console.error(e);
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

      if (child instanceof GirRecord) {
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

      if (child instanceof GirRecord) {
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
      ("not simple");
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

    if (!isSimpleWithoutPointers) this._isSimpleWithoutPointers = `all fields good`;
    else this._isSimpleWithoutPointers = null;

    return this._isSimpleWithoutPointers;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateRecord"]> {
    return generator.generateRecord(this);
  }
}

export class GirComplexRecord extends GirRecord {
  isSimple() {
    return false;
  }
}

export class GirInterface extends GirBaseClass {
  noParent = false;
  mainConstructor: null | GirConstructor = null;

  copy(
    options: {
      parent?: undefined;
      noParent?: boolean;
      constructors?: GirConstructor[];
      members?: GirClassFunction[];
      props?: GirProperty[];
      fields?: GirField[];
      callbacks?: GirCallback[];
    } = {}
  ): GirInterface {
    const {
      name,
      namespace,
      parent,
      noParent,
      members,
      constructors,
      props,
      fields,
      callbacks,
      mainConstructor,
      generics
    } = this;

    const clazz = new GirInterface({ name, namespace });

    clazz._copyBaseProperties(this);

    clazz.noParent = noParent;

    if (parent) {
      clazz.parent = parent;
    }

    clazz.props = (options.props ?? props).map(p => p.copy({ parent: clazz }));
    clazz.fields = (options.fields ?? fields).map(f => f.copy({ parent: clazz }));
    clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy());
    clazz.mainConstructor = mainConstructor?.copy() ?? null;
    clazz.constructors = (options.constructors ?? constructors).map(c => c.copy());
    clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
    clazz.generics = [...generics];

    return clazz;
  }

  someParent(predicate: (p: GirClass | GirInterface) => boolean): boolean {
    const resolution = this.resolveParents();
    const parent = resolution.extends();

    return !!parent && (predicate(parent.node) || parent.node.someParent(predicate));
  }

  findParent(predicate: (p: GirClass | GirInterface) => boolean): GirInterface | GirClass | undefined {
    const resolution = this.resolveParents();

    const parent = resolution.extends();

    if (parent) {
      if (predicate(parent.node)) return parent.node;

      const found = parent.node.findParent(predicate);

      if (found) return found;
    }

    return undefined;
  }

  findParentMap<K>(predicate: (p: GirClass | GirInterface) => K | undefined): K | undefined {
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
    let { namespace, parent } = this;
    return {
      *[Symbol.iterator]() {
        let current = this.extends();

        while (current !== undefined) {
          yield current;
          current = current.extends();
        }
      },
      extends() {
        if (!parent) return undefined;
        const resolved = resolveTypeIdentifier(namespace, parent);
        if (resolved && (resolved instanceof GirClass || resolved instanceof GirInterface))
          return resolved.resolveParents();
        return undefined;
      },
      node: this,
      identifier: this.getType()
    };
  }

  accept(visitor: GirVisitor): GirInterface {
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
    modName: string,
    namespace: GirNamespace,
    options: LoadOptions,
    klass: InterfaceElement
  ): GirInterface {
    const name = sanitizeIdentifierName(namespace.name, klass.$.name);

    if (options.verbose) {
      console.debug(`  >> GirInterface: Parsing definition ${klass.$.name} (${name})...`);
    }

    const clazz = new GirInterface({ name, namespace });

    if (options.loadDocs) {
      clazz.doc = parseDoc(klass);
      clazz.metadata = parseMetadata(klass);
    }

    if (klass.$["glib:type-name"]) {
      clazz.resolve_names.push(klass.$["glib:type-name"]);

      namespace.registerResolveName(klass.$["glib:type-name"], namespace.name, name);
    }

    if (klass.$["glib:type-struct"]) {
      clazz.resolve_names.push();

      namespace.registerResolveName(klass.$["glib:type-struct"], namespace.name, name);
    }

    if (klass.$["c:type"]) {
      clazz.resolve_names.push(klass.$["c:type"]);

      namespace.registerResolveName(klass.$["c:type"], namespace.name, name);
    }

    try {
      // Setup the "parent" (prerequisite) for this interface.
      if (klass.prerequisite && klass.prerequisite[0]) {
        const [prerequisite] = klass.prerequisite;

        clazz.parent = parseTypeIdentifier(modName, prerequisite.$.name);
      }

      if (Array.isArray(klass.constructor)) {
        for (let constructor of klass.constructor) {
          clazz.constructors.push(GirConstructor.fromXML(modName, namespace, options, clazz, constructor));
        }
      }

      // Properties
      if (klass.property) {
        clazz.props.push(
          ...klass.property

            .map(prop => GirProperty.fromXML(modName, namespace, options, clazz, prop))
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
      if (klass.method) {
        for (let method of klass.method) {
          const m = GirClassFunction.fromXML(modName, namespace, options, clazz, method);

          clazz.members.push(m);
        }
      }

      // Virtual Methods
      if (klass["virtual-method"]) {
        for (let method of klass["virtual-method"]) {
          clazz.members.push(GirVirtualClassFunction.fromXML(modName, namespace, options, clazz, method));
        }
      }

      // Callback Types
      if (klass.callback) {
        for (let callback of klass.callback) {
          if (options.verbose) {
            console.debug(`Adding callback ${callback.$.name} for ${modName}`);
          }

          clazz.callbacks.push(GirCallback.fromXML(modName, namespace, options, clazz, callback));
        }
      }

      // Static methods (functions)
      if (klass.function) {
        for (let func of klass.function) {
          clazz.members.push(GirStaticClassFunction.fromXML(modName, namespace, options, clazz, func));
        }
      }
    } catch (e) {
      console.error(`Failed to parse interface: ${clazz.name}.`);
      console.error(e);
    }
    return clazz;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateInterface"]> {
    return generator.generateInterface(this);
  }
}
