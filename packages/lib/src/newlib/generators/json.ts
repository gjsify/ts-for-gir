import { FormatGenerator } from "./generator.js";
import { GirNamespace } from "../gir/namespace.js";

import { GirBaseClass, GirRecord, GirInterface, GirClass } from "../gir/class.js";
import { GirConst } from "../gir/const.js";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum.js";
import { GirProperty, GirField } from "../gir/property.js";
import { GirSignal, GirSignalType } from "../gir/signal.js";
import {
  GirFunction,
  GirConstructor,
  GirFunctionParameter,
  GirCallback,
  GirDirectAllocationConstructor
} from "../gir/function.js";
import { GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function.js";
import { sanitizeIdentifierName, isInvalid, resolveDirectedType } from "../gir/util.js";
import {
  TypeExpression,
  NativeType,
  AnyType,
  VoidType,
  StringType,
  NumberType,
  ArrayType,
  TypeIdentifier,
  OrType,
  TupleType,
  NullableType,
  ClosureType,
  GirBase,
  AnyFunctionType,
  TypeConflict,
  GirMetadata
} from "../gir.js";
import { Direction } from "@gi.ts/parser";
import { GirAlias } from "../gir/alias.js";
import { GenerationOptions } from "../types.js";

export const enum NodeKind {
  class = "class",
  interface = "interface",
  function = "function",
  classFunction = "class_function",
  staticClassFunction = "static_class_function",
  virtualClassFunction = "virtual_class_function",
  prop = "prop",
  field = "field",
  alias = "alias",
  namespace = "namespace",
  callback = "callback",
  constant = "constant",
  record = "record",
  constructor = "constructor",
  propertiesConstructor = "properties_constructor",
  parameter = "parameter",
  enum = "enum",
  enumMember = "enum_member",
  error = "error"
}

export type Primitive = string[] | number[] | boolean[] | null | string | number | boolean;
export type Json = {
  [key: string]: Primitive | Json | Json[];
};
export type NodeJson = {
  kind: NodeKind;
  doc: string | null;
  metadata: MetadataJson | null;
  private: boolean;
} & Json;

export const enum TypeKind {
  or = "or",
  tuple = "tuple",
  identifier = "identifier",
  native = "native",
  array = "array",
  nulled = "null",
  closure = "closure"
}

function generateType(type: TypeExpression): TypeJson {
  if (type instanceof TypeIdentifier) {
    return {
      kind: TypeKind.identifier,
      name: type.name,
      namespace: type.namespace
    };
  } else if (type instanceof NativeType) {
    return {
      kind: TypeKind.native,
      type: type.expression()
    };
  } else if (type instanceof ClosureType) {
    return {
      kind: TypeKind.closure,
      type: generateType(type.type),
      user_data: type.user_data
    };
  } else if (type instanceof ArrayType) {
    return {
      kind: TypeKind.array,
      type: generateType(type.type),
      depth: type.arrayDepth
    };
  } else if (type instanceof NullableType) {
    return {
      kind: TypeKind.nulled,
      type: generateType(type.type)
    };
  } else if (type instanceof TypeConflict) {
    // Type conflicts aren't considered in JSON outputs.
    return generateType(type.type);
  } else if (type instanceof TupleType) {
    return {
      kind: TypeKind.tuple,
      types: type.types.map(t => generateType(t))
    };
  } else if (type instanceof OrType) {
    return {
      kind: TypeKind.or,
      types: type.types.map(t => generateType(t))
    };
  } else {
    return {
      kind: TypeKind.native,
      type: "any"
    };
  }
}

function capitalize(str: string) {
  if (str.length === 0) {
    return "";
  }

  if (str.length === 1) {
    return str[0].toUpperCase();
  }

  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

export interface ParameterJson extends NodeJson {
  kind: NodeKind.parameter;
  optional: boolean;
  varargs: boolean;
  name: string;
  type: TypeJson;
}

export type TypeJson = Json &
  (
    | {
        kind: TypeKind.native;
        type: string;
      }
    | {
        kind: TypeKind.array;
        depth: number;
        type: TypeJson;
      }
    | {
        kind: TypeKind.or | TypeKind.tuple;
        types: TypeJson[];
      }
    | {
        kind: TypeKind.nulled;
        type: TypeJson;
      }
    | {
        kind: TypeKind.closure;
        user_data: number | null;
        type: TypeJson;
      }
    | {
        kind: TypeKind.identifier;
        namespace: string;
        name: string;
      }
  );
export interface EnumMemberJson extends NodeJson {
  kind: NodeKind.enumMember;
  name: string;
  value: string | null;
}

export interface EnumJson extends NodeJson {
  kind: NodeKind.enum;
  name: string;
  members: EnumMemberJson[];
}
export interface CallbackJson extends NodeJson {
  kind: NodeKind.callback;
  name: string;
  type: [Json, Json];
  parameters: ParameterJson[];
  returnType: TypeJson;
}
export interface PropertyJson extends NodeJson {
  kind: NodeKind.prop;
  name: string;
  type: TypeJson;
}
export interface FieldJson extends NodeJson {
  kind: NodeKind.field;
  name: string;
  type: TypeJson;
}

export interface MethodJson extends NodeJson {
  kind: NodeKind.classFunction;
  name: string;
  parameters: ParameterJson[];
  returnType: TypeJson[] | TypeJson;
}

export interface StaticMethodJson extends NodeJson {
  kind: NodeKind.staticClassFunction;
  name: string;
  parameters: ParameterJson[];
  returnType: TypeJson[] | TypeJson;
}
export interface VirtualMethodJson extends NodeJson {
  kind: NodeKind.virtualClassFunction;
  name: string;
  parameters: ParameterJson[];
  returnType: TypeJson[] | TypeJson;
}
export interface MetadataJson extends Json {}
export interface ConstJson extends NodeJson {
  kind: NodeKind.constant;
  name: string;
  type: TypeJson;
}

export interface InterfaceJson extends NodeJson {
  kind: NodeKind.interface;
  name: string;
  extends: TypeJson | null;
  type: TypeJson;
  props: PropertyJson[];
  methods: MethodJson[];
  staticMethods: StaticMethodJson[];
  virtualMethods: VirtualMethodJson[];
}

export interface BaseClassJson extends NodeJson {
  name: string;
  type: TypeJson;
  constructors: MethodJson[];
  mainConstructor: PropertiesConstructorJson | ConstructorJson | null;
  extends: TypeJson | null;
  implements: TypeJson[];
  props: PropertyJson[];
  fields: FieldJson[];
  methods: MethodJson[];
  staticMethods: StaticMethodJson[];
  virtualMethods: VirtualMethodJson[];
}

export interface ClassJson extends BaseClassJson {
  kind: NodeKind.class;
  abstract: boolean;
}

export interface RecordJson extends BaseClassJson {
  kind: NodeKind.record;
  mainConstructor: ConstructorJson | null;
}

export interface ErrorJson extends BaseClassJson {
  kind: NodeKind.error;
  mainConstructor: ConstructorJson | null;
}

export interface FunctionJson extends NodeJson {
  name: string;
  kind: NodeKind.function;
  parameters: ParameterJson[];
  returnType: TypeJson[] | TypeJson;
}

export interface AliasJson extends NodeJson {
  name: string;
  kind: NodeKind.alias;
  type: TypeJson;
}

export interface PropertiesConstructorJson extends NodeJson {
  name: string;
  kind: NodeKind.propertiesConstructor;
  properties: ParameterJson[];
}

export interface ConstructorJson extends NodeJson {
  name: string;
  kind: NodeKind.constructor;
  parameters: ParameterJson[];
}

export type ImportsJson = { [lib: string]: string };

export interface NamespaceJson extends Json {
  kind: NodeKind.namespace;
  imports: ImportsJson;
  version: string;
  name: string;
  alias: AliasJson[];
  enums: EnumJson[];
  errors: ErrorJson[];
  functions: FunctionJson[];
  callbacks: CallbackJson[];
  constants: ConstJson[];
  records: RecordJson[];
  interfaces: InterfaceJson[];
  classes: ClassJson[];
}

export class JsonGenerator extends FormatGenerator<Json> {
  constructor(namespace: GirNamespace, options: GenerationOptions) {
    super(namespace, options);
  }

  /**
   * Intelligently reformats # and () references
   * to handle c-prefixes and namespacing.
   *
   * @param doc
   */
  private generateDoc(doc: string): string {
    const { namespace } = this;

    function resolveClass(ns: GirNamespace, className: string): readonly [GirBase | null, boolean] {
      let classes = ns.getMembers(className);

      let plural = false;

      if (classes.length === 0 && className.endsWith("Class")) {
        classes = ns.getMembers(className.slice(0, -5));
      }

      if (classes.length === 0 && className.endsWith("Iface")) {
        classes = ns.getMembers(className.slice(0, -5));
      }

      if (classes.length === 0 && className.endsWith("Interface")) {
        classes = ns.getMembers(className.slice(0, -9));
      }

      if (classes.length === 0 && className.endsWith("s")) {
        plural = true;
        classes = ns.getMembers(className.slice(0, -1));
      }

      return [classes[0] ?? null, plural] as const;
    }

    function formatReference(identifier: string, member_name: string, punc?: string): string | null {
      const parts = identifier
        .split(/([A-Z])/)
        .filter(p => p != "")
        .reduce((prev, next) => {
          if (next.toUpperCase() === next) {
            prev.push(`${next}`);
          } else {
            const lastCapital = prev.pop();

            prev.push(`${lastCapital}${next}`);
          }

          return prev;
        }, [] as string[]);

      let [base_part] = parts;

      const [, , namespaces, className] = parts.slice(1).reduce(
        ([underscore, camel, ns, selected], next) => {
          const next_underscore = [underscore, next.toLowerCase()].join("_");

          const namespaces = namespace.getImportsForCPrefix(next_underscore);
          const nextCamel = camel + capitalize(next);

          if (namespaces.length > 0) {
            return [next_underscore, nextCamel, namespaces, capitalize(next)] as const;
          }

          return [next_underscore, nextCamel, ns, selected + capitalize(next)] as const;
        },
        [
          base_part.toLowerCase(),
          capitalize(base_part),
          namespace.getImportsForCPrefix(base_part.toLowerCase()),
          ""
        ] as const
      );

      let ns = namespaces.find(n => n.hasSymbol(className));

      if (!ns) {
        ns = namespaces.find(n => {
          const [c] = resolveClass(n, className);

          return c != null;
        });
      }

      if (ns) {
        const is_prop = punc === ":";
        const modified_name = is_prop ? member_name.replace(/[\-]/g, "_") : member_name;

        let [clazz, plural] = resolveClass(ns, className);

        if (clazz instanceof GirBaseClass || clazz instanceof GirEnum) {
          const r = `#${plural ? "{" : ""}${ns.name}.${clazz.name}${punc ? `${punc}${modified_name}` : ""}${
            plural ? "}s" : ""
          }`;
          return r;
        }

        return `#${ns.name}${punc ? ` (${punc}${modified_name})` : ""}`;
      } else {
        return null;
      }
    }

    function formatFunctionReference(func: string, upper = false): string | null {
      // namespace_class_do_thing()

      const parts = func.toLowerCase().split("_");

      // ['namespace', 'class', 'do', 'thing']

      const [base_part] = parts;

      // ['namespace']

      const namespaceBase = [
        base_part.toLowerCase(),
        capitalize(base_part),
        namespace.getImportsForCPrefix(base_part.toLowerCase()),
        0
      ] as const;

      // ['namespace', 'Namespace', { Namespace }, -1]

      const [, , namespaces, i] = parts
        .slice(1)
        .reduce(([prev, camel, currentNamespaces, selected], next, i) => {
          const underscore = [prev, next.toLowerCase()].join("_");
          const namespaces = namespace.getImportsForCPrefix(underscore);
          const identifier = camel + capitalize(next);

          // We've found namespace(s) which matches the c_prefix
          if (namespaces.length > 0) {
            return [underscore, identifier, namespaces, i] as const;
          }

          return [underscore, identifier, currentNamespaces, selected] as const;
        }, namespaceBase);

      // If no namespaces are found for the function's c_prefix, we return the original reference.
      if (namespaces.length === 0) {
        return null;
      }

      // ['class', 'do', 'thing']

      const nameParts = parts.slice(i + 1);

      // 'class_do_thing'

      const functionName = nameParts.join("_");
      const functionNamespace = namespaces.find(n => n.hasSymbol(functionName.toLowerCase()));
      const constNamespace = namespaces.find(n => n.hasSymbol(functionName.toUpperCase()));
      const enumNamespace = namespaces.find(n => n.enum_constants.has(func.toUpperCase()));

      if (functionNamespace) {
        const [member = null] = functionNamespace.getMembers(functionName.toLowerCase());

        if (member instanceof GirFunction) {
          return `${functionNamespace.name}.${member.name}`;
        }

        return null;
      } else if (constNamespace) {
        const [member = null] = constNamespace.getMembers(functionName.toUpperCase());

        if (member instanceof GirConst) {
          return `${constNamespace.name}.${member.name}`;
        }

        return null;
      } else if (enumNamespace) {
        const constantInfo = enumNamespace.enum_constants.get(func.toUpperCase());

        if (constantInfo) {
          const [enumName, memberName] = constantInfo;

          const [klass = null] = enumNamespace.getMembers(enumName);

          if (klass instanceof GirEnum) {
            return `${enumNamespace.name}.${klass.name}.${memberName.toUpperCase()}`;
          }
        }

        return null;
      } else {
        // ['class', 'do', 'thing']

        const { selectedClassName, resolvedNamespace, selectedIndex } = parts.slice(i + 1).reduce(
          ({ className, selectedClassName, resolvedNamespace, selectedIndex }, next, i) => {
            // Class
            const identifier = `${className}${capitalize(next)}`;

            const withSymbol = namespaces.find(n => n.hasSymbol(identifier));

            if (withSymbol) {
              // { className: Class, resolvedNamespace: {Namespace}, selectedIndex: 0 }
              return {
                className: identifier,
                selectedClassName: identifier,
                resolvedNamespace: withSymbol,
                selectedIndex: i
              } as const;
            }

            return { className: identifier, selectedClassName, resolvedNamespace, selectedIndex } as const;
          },
          {
            className: "" as string,
            selectedClassName: "" as string,
            resolvedNamespace: null as GirNamespace | null,
            selectedIndex: -1
          }
        );

        if (resolvedNamespace && selectedIndex >= 0) {
          const nextIndex = i + selectedIndex + 1 /* (slice omits first index) */ + 1; /* (the next index) */
          const functionName = parts.slice(nextIndex).join("_");

          let [klass] = resolveClass(resolvedNamespace, selectedClassName);

          if (klass instanceof GirBaseClass || klass instanceof GirEnum) {
            return `${resolvedNamespace.name}.${klass.name}.${
              upper ? functionName.toUpperCase() : functionName
            }`;
          }

          return `${resolvedNamespace.name}.${selectedClassName}.${
            upper ? functionName.toUpperCase() : functionName
          }`;
        }
      }

      return null;
    }

    return `${doc}`
      .replace(
        /[#]{0,1}([A-Z][A-z]+)\.([a-z_]+)\(\)/g,
        (original, identifier: string, member_name: string) => {
          const resolved = formatReference(identifier, member_name, ".");
          return resolved != null ? `${resolved}()` : original;
        }
      )
      .replace(
        /#([A-Z][A-z]*)(([:]{1,2})([a-z\-]+)){0,1}/g,
        (original, identifier: string, _: string, punc: string, member_name: string) => {
          const resolved = formatReference(identifier, member_name, punc);
          return resolved != null ? resolved : original;
        }
      )
      .replace(
        /([A-Z][A-z]*)(([:]{1,2})([a-z\-]+))/g,
        (original, identifier: string, _: string, punc: string, member_name: string) => {
          const resolved = formatReference(identifier, member_name, punc);
          return resolved != null ? resolved : original;
        }
      )
      .replace(/(\s)([a-z_]+)\(\)/g, (original: string, w: string, func: string) => {
        const resolved = formatFunctionReference(func);
        return resolved != null ? `${w}${resolved}()` : original;
      })
      .replace(/%([A-Z_]+)/g, (original: string, identifier: string) => {
        const resolved = formatFunctionReference(identifier.toLowerCase(), true);
        return resolved != null ? `%${resolved}` : original;
      })
      .replace(/#([A-Z_]+)/g, (original: string, identifier: string) => {
        const resolved = formatFunctionReference(identifier.toLowerCase(), true);
        return resolved != null ? `#${resolved}` : original;
      });
  }

  private generateMetadata(metadata: GirMetadata): MetadataJson {
    return { ...metadata } as MetadataJson;
  }

  private generateParameters(parameters: GirFunctionParameter[]): ParameterJson[] {
    const { namespace, options } = this;

    return parameters.map(p => ({
      kind: NodeKind.parameter,
      direction: p.direction,
      optional: p.isOptional,
      varargs: p.isVarArgs,
      name: p.name,
      resoleNames: p.resolve_names,
      type: generateType(p.type.resolve(namespace, options)),
      ...this._generateDocAndMetadata(p)
    }));
  }

  generateCallbackType(node: GirCallback): [Json, Json] {
    return [{}, {}];
  }

  generateCallback(node: GirCallback): CallbackJson {
    const { namespace, options } = this;

    const parameters = this.generateParameters(node.parameters);

    return {
      kind: NodeKind.callback,
      name: node.name,
      type: this.generateCallbackType(node),
      parameters,
      returnType: generateType(node.return().resolve(namespace, options)),
      ...this._generateDocAndMetadata(node)
    };
  }

  generateReturn(
    return_type: TypeExpression,
    output_parameters: GirFunctionParameter[]
  ): TypeJson | TypeJson[] {
    const { namespace, options } = this;
    const type = return_type.resolve(namespace, options);

    if (output_parameters.length > 0) {
      const exclude_first = type.equals(VoidType);
      const returns = [
        ...(exclude_first ? [] : [type]),
        ...output_parameters.map(op => op.type.resolve(namespace, options))
      ];

      return returns.map(r => generateType(r));
    }

    return generateType(type);
  }

  generateEnum(node: GirEnum): EnumJson {
    return {
      kind: NodeKind.enum,
      name: node.name,
      members: Array.from(node.members.values()).map(member => member.asString(this)),
      ...this._generateDocAndMetadata(node)
    };
  }

  generateError(node: GirError): ErrorJson {
    const { namespace } = this;
    const clazz = node.asClass();

    clazz.members = [];
    clazz.members.push(...Array.from(node.functions.values()));

    const GLib = namespace.assertInstalledImport("GLib");
    const GLibError = GLib.assertClass("Error");

    clazz.parent = GLibError.getType();

    // Manually construct a GLib.Error constructor.
    clazz.mainConstructor = new GirConstructor({
      name: "new",
      parameters: [
        new GirFunctionParameter({
          name: "options",
          type: NativeType.of("{ message: string, code: number}"),
          direction: Direction.In
        })
      ],
      return_type: clazz.getType()
    });

    return {
      ...clazz.asString(this),
      kind: NodeKind.error
    };
  }

  _generateDocAndMetadata(node: GirBase) {
    const { options } = this;

    if (options.withDocs) {
      return {
        private: node.isPrivate,
        doc: this.generateDoc(node.doc ?? "") ?? null,
        metadata: this.generateMetadata(node.metadata ?? {}) ?? null
      };
    }

    return {
      private: false,
      doc: null,
      metadata: null
    };
  }

  generateConst(node: GirConst): ConstJson {
    const { namespace, options } = this;

    return {
      kind: NodeKind.constant,
      name: node.name,
      type: generateType(node.type.resolve(namespace, options)),
      ...this._generateDocAndMetadata(node)
    };
  }

  private implements(node: GirClass): TypeIdentifier[] {
    const { namespace, options } = this;

    if (node.interfaces.length > 0) {
      return node.interfaces
        .map(i => i.resolveIdentifier(namespace, options))
        .filter((i): i is TypeIdentifier => i != null);
    }

    return [];
  }

  private extends(node: GirBaseClass): TypeIdentifier | null {
    const { namespace: ns, options } = this;

    if (node.parent) {
      return node.parent.resolveIdentifier(ns, options);
    }

    return null;
  }

  generateInterface(node: GirInterface): InterfaceJson {
    const { namespace } = this;
    // If an interface does not list a prerequisite type, we fill it with GObject.Object
    if (node.parent == null) {
      const gobject = namespace.assertInstalledImport("GObject");

      // TODO Optimize GObject.Object
      if (!gobject) {
        throw new Error("GObject not generated, all interfaces extend from GObject.Object!");
      }

      const GObject = gobject.getClass("Object");

      if (!GObject) {
        throw new Error(
          `GObject.Object could not be found while generating ${node.namespace.name}.${node.name}`
        );
      }

      node.parent = GObject.getType();
    }

    const { name } = node;

    const Extends = this.extends(node);

    const Properties = node.props.map(v => v && v.asString(this));

    const Methods = node.members
      .filter(m => !(m instanceof GirStaticClassFunction) && !(m instanceof GirVirtualClassFunction))
      .map(v => v && v.asString(this));
    const StaticMethods = node.members
      .filter((m): m is GirStaticClassFunction => m instanceof GirStaticClassFunction)
      .map(v => v && v.asString(this));
    const VirtualMethods = node.members
      .filter((m): m is GirVirtualClassFunction => m instanceof GirVirtualClassFunction)
      .map(v => v && v.asString(this));

    return {
      kind: NodeKind.interface,
      name,
      type: generateType(node.getType()),
      extends: Extends ? generateType(Extends) : null,
      props: Properties,
      methods: Methods,
      staticMethods: StaticMethods,
      virtualMethods: VirtualMethods,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateRecord(node: GirRecord): RecordJson {
    const { name } = node;

    const Extends = this.extends(node);

    const Properties = node.props.map(v => v && v.asString(this));

    const Fields = node.fields.map(v => v && v.asString(this));

    const Constructors = node.constructors.map(v => v && this.generateConstructorFunction(v));

    const Methods = node.members
      .filter(m => !(m instanceof GirStaticClassFunction) && !(m instanceof GirVirtualClassFunction))
      .map(v => v && v.asString(this));
    const StaticMethods = node.members
      .filter((m): m is GirStaticClassFunction => m instanceof GirStaticClassFunction)
      .map(v => v && v.asString(this));
    const VirtualMethods = node.members
      .filter((m): m is GirVirtualClassFunction => m instanceof GirVirtualClassFunction)
      .map(v => v && v.asString(this));

    const Callbacks = node.callbacks.map(c => c && c.asString(this));

    return {
      kind: NodeKind.record,
      name,
      type: generateType(node.getType()),
      mainConstructor: node.mainConstructor?.asString(this) ?? null,
      extends: Extends ? generateType(Extends) : null,
      implements: [],
      props: Properties,
      fields: Fields,
      constructors: Constructors,
      methods: Methods,
      staticMethods: StaticMethods,
      virtualMethods: VirtualMethods,
      callbacks: Callbacks,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateClass(node: GirClass): ClassJson {
    const Extends = this.extends(node);
    const Implements = this.implements(node);

    let MainConstructor: PropertiesConstructorJson | ConstructorJson | null = null;

    const ConstructorProps = node.props.map(v => this.generateProperty(v, true));

    if (node.mainConstructor) {
      MainConstructor = this.generateConstructor(node.mainConstructor);
    } else {
      MainConstructor = {
        kind: NodeKind.propertiesConstructor,
        name: "new",
        private: false,
        properties: ConstructorProps.map(p => ({
          kind: NodeKind.parameter,
          private: p.private,
          varargs: false,
          name: p.name,
          type: p.type,
          doc: p.doc,
          metadata: p.metadata,
          optional: true
        })),
        doc: null,
        metadata: null
      };
    }

    const Properties = node.props.map(v => v.asString(this));

    const Fields = node.fields.map(v => v.asString(this));

    const Constructors = node.constructors.map(v => this.generateConstructorFunction(v));

    const Methods = node.members
      .filter(m => !(m instanceof GirStaticClassFunction) && !(m instanceof GirVirtualClassFunction))
      .map(v => v && v.asString(this));
    const StaticMethods = node.members
      .filter((m): m is GirStaticClassFunction => m instanceof GirStaticClassFunction)
      .map(v => v && v.asString(this));
    const VirtualMethods = node.members
      .filter((m): m is GirVirtualClassFunction => m instanceof GirVirtualClassFunction)
      .map(v => v && v.asString(this));

    // TODO Move these to a cleaner place.

    const Connect = new GirClassFunction({
      name: "connect",
      parent: node,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: StringType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "callback",
          type: AnyFunctionType,
          direction: Direction.In
        })
      ],
      return_type: NumberType
    });

    const ConnectAfter = new GirClassFunction({
      name: "connect_after",
      parent: node,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: StringType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "callback",
          type: AnyFunctionType,
          direction: Direction.In
        })
      ],
      return_type: NumberType
    });

    const Emit = new GirClassFunction({
      name: "emit",
      parent: node,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: StringType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "args",
          isVarArgs: true,
          type: new ArrayType(AnyType),
          direction: Direction.In
        })
      ],
      return_type: VoidType
    });

    let default_signals = [] as GirClassFunction[];
    let hasConnect, hasConnectAfter, hasEmit;

    if (node.signals.length > 0) {
      hasConnect = node.members.some(m => m.name === "connect");
      hasConnectAfter = node.members.some(m => m.name === "connect_after");
      hasEmit = node.members.some(m => m.name === "emit");

      if (!hasConnect) {
        default_signals.push(Connect);
      }
      if (!hasConnectAfter) {
        default_signals.push(ConnectAfter);
      }
      if (!hasEmit) {
        default_signals.push(Emit);
      }

      hasConnect = !default_signals.some(s => s.name === "connect");
      hasConnectAfter = !default_signals.some(s => s.name === "connect_after");
      hasEmit = !default_signals.some(s => s.name === "emit");
    }

    const SignalsList = [
      ...default_signals.map(s => s.asString(this)),
      ...node.signals
        .map(s => {
          const methods = [] as Json[];

          if (!hasConnect) methods.push(s.asString(this, GirSignalType.CONNECT));
          if (!hasConnectAfter) methods.push(s.asString(this, GirSignalType.CONNECT_AFTER));
          if (!hasEmit) methods.push(s.asString(this, GirSignalType.EMIT));

          return methods;
        })
        .flat()
    ];

    const Signals = SignalsList;

    return {
      kind: NodeKind.class,
      abstract: node.isAbstract,
      type: generateType(node.getType()),
      name: node.name,
      mainConstructor: MainConstructor,
      signals: Signals,
      extends: Extends ? generateType(Extends) : null,
      implements: Implements.map(i => generateType(i)),
      props: Properties,
      fields: Fields,
      constructors: Constructors,
      methods: Methods,
      staticMethods: StaticMethods,
      virtualMethods: VirtualMethods,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateField(node: GirField): FieldJson {
    const { namespace, options } = this;
    const { name, computed } = node;
    const invalid = isInvalid(name);

    const Static = node.isStatic;
    const ReadOnly = node.writable;

    return {
      kind: NodeKind.field,
      readonly: ReadOnly,
      static: Static,
      computed,
      type: generateType(node.type.resolve(namespace, options)),
      name: invalid ? `"${name}"` : name,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateProperty(node: GirProperty, construct: boolean = false): PropertyJson {
    const { namespace, options } = this;

    const invalid = isInvalid(node.name);
    const ReadOnly = node.writable || construct;

    const Name = invalid ? `"${node.name}"` : node.name;

    let Type = generateType(node.type.resolve(namespace, options));
    return {
      kind: NodeKind.prop,
      readonly: ReadOnly,
      constructOnly: node.constructOnly,
      readable: node.readable,
      writable: node.writable,
      static: false,
      type: Type,
      name: Name,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateSignal(node: GirSignal, type: GirSignalType = GirSignalType.CONNECT): MethodJson {
    switch (type) {
      case GirSignalType.CONNECT:
        return node.asConnect(false).asString(this);
      case GirSignalType.CONNECT_AFTER:
        return node.asConnect(true).asString(this);
      case GirSignalType.EMIT:
        return node.asEmit().asString(this);
    }
  }

  generateEnumMember(node: GirEnumMember): EnumMemberJson {
    const invalid = isInvalid(node.name);

    let enumMember: {
      name: string;
      value: string | null;
    };

    if (
      node.value != null &&
      !Number.isNaN(Number.parseInt(node.value, 10)) &&
      Number.isNaN(Number.parseInt(node.name, 10)) &&
      node.name !== "NaN"
    ) {
      enumMember = { name: invalid ? `"${node.name}"` : `${node.name}`, value: `${node.value}` };
    } else {
      enumMember = { name: invalid ? `"${node.name}"` : `${node.name}`, value: null };
    }

    return {
      kind: NodeKind.enumMember,
      ...enumMember,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateParameter(node: GirFunctionParameter): ParameterJson {
    const { namespace, options } = this;

    let type = generateType(
      resolveDirectedType(node.type, node.direction)?.resolve(namespace, options) ??
        node.type.resolve(namespace, options)
    );

    return {
      kind: NodeKind.parameter,
      name: node.name,
      type,
      varargs: node.isVarArgs,
      optional: node.isOptional,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateFunction(node: GirFunction): FunctionJson {
    const { namespace } = this;
    // Register our identifier with the sanitized identifiers.
    // We avoid doing this in fromXML because other class-level function classes
    // depends on that code.
    sanitizeIdentifierName(namespace.name, node.raw_name);

    const Parameters = this.generateParameters(node.parameters);
    const ReturnType = this.generateReturn(node.return(), node.output_parameters);

    return {
      kind: NodeKind.function,
      name: node.name,
      parameters: Parameters,
      returnType: ReturnType,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateConstructorFunction(node: GirConstructor): MethodJson {
    const { namespace, options } = this;

    const Parameters = this.generateParameters(node.parameters);

    return {
      kind: NodeKind.classFunction,
      static: true,
      name: node.name,
      parameters: Parameters,
      returnType: generateType(node.return().resolve(namespace, options)),
      ...this._generateDocAndMetadata(node)
    };
  }

  generateConstructor(node: GirConstructor): ConstructorJson {
    return {
      name: node.name,
      kind: NodeKind.constructor,
      parameters: this.generateParameters(node.parameters),
      ...this._generateDocAndMetadata(node)
    };
  }

  generateDirectAllocationConstructor(node: GirDirectAllocationConstructor): ConstructorJson {
    return {
      name: node.name,
      kind: NodeKind.constructor,
      parameters: this.generateParameters(
        node.fields.map(
          field =>
            new GirFunctionParameter({
              name: field.name,
              direction: Direction.In,
              type: field.type,
              isOptional: true
            })
        )
      ),
      ...this._generateDocAndMetadata(node)
    };
  }

  generateClassFunction(node: GirClassFunction): MethodJson {
    let parameters = node.parameters.map(p => this.generateParameter(p));
    let output_parameters = node.output_parameters;
    let return_type = node.return();

    const ReturnType = this.generateReturn(return_type, output_parameters);

    return {
      kind: NodeKind.classFunction,
      name: node.name,
      parameters,
      returnType: ReturnType,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateStaticClassFunction(node: GirStaticClassFunction): StaticMethodJson {
    let parameters = node.parameters.map(p => this.generateParameter(p));
    let output_parameters = node.output_parameters;
    let return_type = node.return();

    const ReturnType = this.generateReturn(return_type, output_parameters);

    return {
      kind: NodeKind.staticClassFunction,
      name: node.name,
      parameters,
      returnType: ReturnType,
      ...this._generateDocAndMetadata(node)
    };
  }

  generateAlias(node: GirAlias): AliasJson {
    const { namespace, options } = this;
    const type = node.type.resolve(namespace, options);

    const { name } = node;

    return {
      kind: NodeKind.alias,
      name,
      type: generateType(type.resolve(namespace, options)),
      ...this._generateDocAndMetadata(node)
    };
  }

  generateVirtualClassFunction(node: GirVirtualClassFunction): VirtualMethodJson {
    return {
      ...this.generateClassFunction(node),
      kind: NodeKind.virtualClassFunction
    };
  }

  async generateNamespace(node: GirNamespace): Promise<NamespaceJson> {
    function shouldGenerate(node: GirBase) {
      return node.emit;
    }

    const { name, version } = node;

    const members = Array.from(node.members.values())
      .flatMap(m => m)
      .filter(shouldGenerate);

    const classes = members.filter((m): m is GirClass => m instanceof GirClass).map(m => m.asString(this));
    const interfaces = members

      .filter((m): m is GirInterface => m instanceof GirInterface)
      .map(m => m.asString(this));
    const records = members.filter((m): m is GirRecord => m instanceof GirRecord).map(m => m.asString(this));
    const constants = members.filter((m): m is GirConst => m instanceof GirConst).map(m => m.asString(this));
    const callbacks = members

      .filter((m): m is GirCallback => m instanceof GirCallback)
      .map(m => m.asString(this));
    // Functions can have overrides.
    const functions = [
      ...members

        .filter((m): m is GirFunction => !(m instanceof GirCallback) && m instanceof GirFunction)
        .reduce((prev, next) => {
          if (!prev.has(next.name)) prev.set(next.name, next.asString(this));

          return prev;
        }, new Map<string, FunctionJson>())
        .values()
    ];
    const errors = members.filter((m): m is GirError => m instanceof GirError).map(m => m.asString(this));
    const enums = members

      .filter((m): m is GirEnum => !(m instanceof GirError) && m instanceof GirEnum)
      .map(m => m.asString(this));
    const alias = members.filter((m): m is GirAlias => m instanceof GirAlias).map(m => m.asString(this));

    // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
    const imports = node.getImports();

    return {
      kind: NodeKind.namespace,
      name,
      version,
      imports: Object.fromEntries(imports),
      classes,
      interfaces,
      records,
      constants,
      functions,
      callbacks,
      errors,
      enums,
      alias
    };
  }

  async stringifyNamespace(node: GirNamespace): Promise<string | null> {
    const { namespace, options } = this;

    if (options.verbose) {
      console.debug(`Resolving the types of ${namespace.name}...`);
    }

    try {
      const output = await this.generateNamespace(node);

      if (options.verbose) {
        console.debug(`Printing ${namespace.name}...`);
      }

      if (!output) return null;

      return JSON.stringify(output, null, 4);
    } catch (err) {
      console.error(`Failed to generate namespace: ${node.name}`);
      console.error(err);
      return null;
    }
  }
}
