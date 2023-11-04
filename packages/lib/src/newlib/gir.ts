import { GirNamespace } from "./gir/namespace.js";
import { GirProperty, GirField } from "./gir/property.js";
import { FormatGenerator } from "./generators/generator.js";
import { GenerationOptions, LoadOptions } from "./types.js";
import { sanitizeIdentifierName } from "./gir/util.js";
import { GirVisitor } from "./visitor.js";

export {GirBase, GirOptions, GirMetadata} from './gir/base.js';

export abstract class TypeExpression {
  isPointer = false;

  abstract equals(type: TypeExpression): boolean;
  abstract unwrap(): TypeExpression;

  deepUnwrap(): TypeExpression {
    return this.unwrap();
  }

  abstract rewrap(type: TypeExpression): TypeExpression;
  abstract resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression;

  abstract print(namespace: GirNamespace, options: GenerationOptions): string;
  rootPrint(namespace: GirNamespace, options: GenerationOptions): string {
    return this.print(namespace, options);
  }
}

export class TypeIdentifier extends TypeExpression {
  readonly name: string;
  readonly namespace: string;

  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }

  equals(type: TypeExpression): boolean {
    return type instanceof TypeIdentifier && type.name === this.name && type.namespace === this.namespace;
  }

  is(namespace: string, name: string) {
    return this.namespace === namespace && this.name === name;
  }

  unwrap() {
    return this;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return type;
  }

  protected _resolve(namespace: GirNamespace, options: GenerationOptions): TypeIdentifier | null {
    const type = this;
    let name: string = sanitizeIdentifierName(null, type.name);
    let ns_name = type.namespace;

    let ns = namespace.assertInstalledImport(ns_name);

    if (ns.hasSymbol(name)) {
      const c = ns.getClass(name);

      // Some records are structs for other class types.
      // GirRecord.prototype.getType resolves this relationship.
      if (c) return c.getType();

      return new TypeIdentifier(name, ns_name);
    }

    // Handle "class callback" types (they're in a definition-merged module)
    let [cb, corrected_name] = ns.findClassCallback(name);
    let resolved_name: string | null = null;

    if (!cb) {
      resolved_name = ns.resolveSymbolFromTypeName(name);
    }

    let c_resolved_name: string | null = null;

    if (!c_resolved_name) {
      c_resolved_name = ns.resolveSymbolFromTypeName(`${ns_name}${name}`);
    }

    if (!cb && !resolved_name && !c_resolved_name) {
      // Don't warn if a missing import is at fault, this will be dealt with later.
      if (namespace.name === ns_name) {
        console.error(`Attempting to fall back on c:type inference for ${ns_name}.${name}.`);
      }

      [cb, corrected_name] = ns.findClassCallback(`${ns_name}${name}`);

      if (cb) {
        console.error(
          `Falling back on c:type inference for ${ns_name}.${name} and found ${ns_name}.${corrected_name}.`
        );
      }
    }

    if (cb) {
      if (options.verbose) {
        console.debug(`Callback found: ${cb}.${corrected_name}`);
      }

      return new TypeIdentifier(corrected_name, cb);
    } else if (resolved_name) {
      return new TypeIdentifier(resolved_name, ns_name);
    } else if (c_resolved_name) {
      console.error(
        `Fell back on c:type inference for ${ns_name}.${name} and found ${ns_name}.${corrected_name}.`
      );

      return new TypeIdentifier(c_resolved_name, ns_name);
    } else if (namespace.name === ns_name) {
      console.error(`Unable to resolve type ${type.name} in same namespace ${ns_name}!`);
      return null;
    }

    console.error(`Type ${type.namespace}.${type.name} could not be resolved in ${namespace.name}`);
    return null;
  }

  resolveIdentifier(namespace: GirNamespace, options: GenerationOptions): TypeIdentifier | null {
    return this._resolve(namespace, options);
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const resolved = this._resolve(namespace, options);

    // Generally if we can't resolve a type it is not introspectable,
    // thus we annotate it as "never".
    return resolved ?? NeverType;
  }

  static new({ name, namespace }: { name: string; namespace: string }) {
    return new TypeIdentifier(name, namespace);
  }

  print(namespace: GirNamespace, _options: GenerationOptions): string {
    if (namespace.name === this.namespace) {
      return `${this.name}`;
    } else {
      return `${this.namespace}.${this.name}`;
    }
  }
}

export class GenerifiedTypeIdentifier extends TypeIdentifier {
  generics: TypeExpression[];

  constructor(name: string, namespace: string, generics: TypeExpression[] = []) {
    super(name, namespace);
    this.generics = generics;
  }

  print(namespace: GirNamespace, _options: GenerationOptions): string {
    const Generics = this.generics.map(generic => generic.print(namespace, _options)).join(", ");

    if (namespace.name === this.namespace) {
      return `${this.name}${this.generics.length > 0 ? `<${Generics}>` : ""}`;
    } else {
      return `${this.namespace}.${this.name}${this.generics.length > 0 ? `<${Generics}>` : ""}`;
    }
  }

  _resolve(namespace: GirNamespace, options: GenerationOptions): TypeIdentifier | null {
    const iden = super._resolve(namespace, options);

    if (iden) {
      return new GenerifiedTypeIdentifier(iden.name, iden.namespace, [...this.generics]);
    }

    return iden;
  }
}

export class NativeType extends TypeExpression {
  readonly expression: (options?: GenerationOptions) => string;

  constructor(expression: ((options?: GenerationOptions) => string) | string) {
    super();

    this.expression = typeof expression === "string" ? () => expression : expression;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return type;
  }

  resolve(_namespace: GirNamespace, _options: GenerationOptions): TypeExpression {
    return this;
  }

  print(_namespace: GirNamespace, options: GenerationOptions) {
    return this.expression(options);
  }

  equals(type: TypeExpression, options?: GenerationOptions): boolean {
    return type instanceof NativeType && this.expression(options) === type.expression(options);
  }

  unwrap(): TypeExpression {
    return this;
  }

  static withGenerator(generator: (options?: GenerationOptions) => string): TypeExpression {
    return new NativeType(generator);
  }

  static of(nativeType: string) {
    return new NativeType(nativeType);
  }
}

export class OrType extends TypeExpression {
  readonly types: ReadonlyArray<TypeExpression>;

  constructor(type: TypeExpression, ...types: TypeExpression[]) {
    super();
    this.types = [type, ...types];
  }

  rewrap(type: TypeExpression): TypeExpression {
    return type;
  }

  unwrap(): TypeExpression {
    return this;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const [type, ...types] = this.types;

    return new OrType(type.resolve(namespace, options), ...types.map(t => t.resolve(namespace, options)));
  }

  print(namespace: GirNamespace, options: GenerationOptions): string {
    return `(${this.types.map(t => t.print(namespace, options)).join(" | ")})`;
  }

  rootPrint(namespace: GirNamespace, options: GenerationOptions): string {
    return `${this.types.map(t => t.print(namespace, options)).join(" | ")}`;
  }

  equals(type: TypeExpression) {
    if (type instanceof OrType) {
      return this.types.every(t => type.types.some(type => type.equals(t)));
    } else {
      return false;
    }
  }
}

export class TupleType extends OrType {
  print(namespace: GirNamespace, options: GenerationOptions): string {
    return `[${this.types.map(t => t.print(namespace, options)).join(", ")}]`;
  }

  rootPrint(namespace: GirNamespace, options: GenerationOptions): string {
    return this.print(namespace, options);
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const [type, ...types] = this.types;

    return new TupleType(type.resolve(namespace, options), ...types.map(t => t.resolve(namespace, options)));
  }

  equals(type: TypeExpression) {
    if (type instanceof TupleType) {
      return this.types.length === type.types.length && this.types.every((t, i) => type.types[i].equals(t));
    } else {
      return false;
    }
  }
}

export class BinaryType extends OrType {
  constructor(primary: TypeExpression, secondary: TypeExpression) {
    super(primary, secondary);
  }

  unwrap(): TypeExpression {
    return this;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions) {
    return new BinaryType(this.a.resolve(namespace, options), this.b.resolve(namespace, options));
  }

  is(_namespace: string | null, _name: string) {
    return false;
  }

  get a() {
    return this.types[0];
  }

  get b() {
    return this.types[1];
  }
}

export class FunctionType extends TypeExpression {
  parameterTypes: { [name: string]: TypeExpression };
  returnType: TypeExpression;

  constructor(parameters: { [name: string]: TypeExpression }, returnType: TypeExpression) {
    super();

    this.parameterTypes = parameters;
    this.returnType = returnType;
  }

  equals(type: TypeExpression): boolean {
    if (type instanceof FunctionType) {
      return (
        Object.values(this.parameterTypes).every(t =>
          Object.values(type.parameterTypes).some(tp => t.equals(tp))
        ) &&
        Object.values(type.parameterTypes).every(t =>
          Object.values(this.parameterTypes).some(tp => t.equals(tp))
        ) &&
        this.returnType.equals(type.returnType)
      );
    }

    return false;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return type;
  }

  unwrap(): TypeExpression {
    return this;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    return new FunctionType(
      Object.fromEntries(
        Object.entries(this.parameterTypes).map(([k, p]) => {
          return [k, p.resolve(namespace, options)];
        })
      ),
      this.returnType.resolve(namespace, options)
    );
  }

  rootPrint(namespace: GirNamespace, options: GenerationOptions): string {
    const Parameters = Object.entries(this.parameterTypes)
      .map(([k, v]) => {
        return `${k}: ${v.rootPrint(namespace, options)}`;
      })
      .join(", ");

    return `(${Parameters}) => ${this.returnType.print(namespace, options)}`;
  }

  print(namespace: GirNamespace, options: GenerationOptions): string {
    return `(${this.rootPrint(namespace, options)})`;
  }
}

export class Generic {
  private _deriveFrom: TypeIdentifier | null;
  private _genericType: GenericType;
  private _defaultType: TypeExpression | null;
  private _constraint: TypeExpression | null;
  private _propagate: boolean;

  constructor(
    genericType: GenericType,
    defaultType?: TypeExpression,
    deriveFrom?: TypeIdentifier,
    constraint?: TypeExpression,
    propagate = true
  ) {
    this._genericType = genericType;
    this._defaultType = defaultType ?? null;
    this._deriveFrom = deriveFrom ?? null;
    this._constraint = constraint ?? null;
    this._propagate = propagate;
  }

  unwrap() {
    return this.type;
  }

  get propagate() {
    return this._propagate;
  }

  get type() {
    return this._genericType;
  }

  get defaultType() {
    return this._defaultType;
  }

  get constraint() {
    return this._constraint;
  }

  get parent() {
    return this._deriveFrom;
  }
}

export class GenerifiedType extends TypeExpression {
  type: TypeExpression;
  generic: GenericType;

  constructor(type: TypeExpression, generic: GenericType) {
    super();

    this.type = type;
    this.generic = generic;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions) {
    return new GenerifiedType(
      this.type.resolve(namespace, options),
      this.generic.resolve(namespace, options)
    );
  }

  unwrap() {
    return this.type;
  }

  rootPrint(namespace: GirNamespace, options: GenerationOptions) {
    return `${this.type.print(namespace, options)}<${this.generic.print(namespace, options)}>`;
  }

  print(namespace: GirNamespace, options: GenerationOptions) {
    return `${this.type.print(namespace, options)}<${this.generic.print(namespace, options)}>`;
  }

  equals(type: TypeExpression): boolean {
    if (type instanceof GenerifiedType) {
      return type.type.equals(this.type) && type.generic.equals(this.generic);
    }

    return false;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return new GenerifiedType(this.type.rewrap(type), this.generic);
  }
}

export class GenericType extends TypeExpression {
  identifier: string;
  replacedType?: TypeExpression;

  constructor(identifier: string, replacedType?: TypeExpression) {
    super();
    this.identifier = identifier;
    this.replacedType = replacedType;
  }

  equals(type: TypeExpression): boolean {
    if (type instanceof GenericType) {
      return type.identifier === this.identifier;
    }

    return false;
  }

  unwrap(): TypeExpression {
    return this;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return type;
  }

  resolve(_namespace: GirNamespace, _options: GenerationOptions): GenericType {
    return this;
  }

  print(_namespace: GirNamespace, _options: GenerationOptions): string {
    return `${this.identifier}`;
  }
}

export class NullableType extends BinaryType {
  constructor(type: TypeExpression) {
    super(type, NullType);
  }

  unwrap() {
    return this.type;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return new NullableType(this.type.rewrap(type));
  }

  get type() {
    return this.a;
  }
}

export class PromiseType extends TypeExpression {
  type: TypeExpression;

  constructor(type: TypeExpression) {
    super();
    this.type = type;
  }

  equals(type: TypeExpression): boolean {
    return type instanceof PromiseType && type.type.equals(this.type);
  }

  unwrap() {
    return this.type;
  }

  rewrap(type: TypeExpression): TypeExpression {
    return new PromiseType(this.type.rewrap(type));
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    return new PromiseType(this.type.resolve(namespace, options));
  }

  print(namespace: GirNamespace, options: GenerationOptions): string {
    // TODO: Optimize this check.
    if (!namespace.hasSymbol("Promise")) {
      return `Promise<${this.type.print(namespace, options)}>`;
    }

    return `globalThis.Promise<${this.type.print(namespace, options)}>`;
  }
}

/**
 * A list of possible type conflicts.
 *
 * The format is CHILD_PARENT_CONFLICT so
 * ACCESSOR_PROPERTY_CONFLICT means there
 * is an accessor on a child class and a
 * property on the parent class, which is a
 * conflict.
 *
 * Starts at '1' because the value is often
 * used as truthy.
 */
export enum ConflictType {
  PROPERTY_NAME_CONFLICT = 1,
  FIELD_NAME_CONFLICT,
  FUNCTION_NAME_CONFLICT,
  ACCESSOR_PROPERTY_CONFLICT,
  PROPERTY_ACCESSOR_CONFLICT
}

/**
 * This is one of the more interesting usages of our type
 * system. To handle type conflicts we wrap conflicting types
 * in this class with a ConflictType to denote why they are a
 * conflict.
 *
 * TypeConflict will throw if it is printed or resolved, so generators
 * must unwrap it and "resolve" the conflict. Some generators like JSON
 * just disregard this info, other generators like DTS attempt to
 * resolve the conflicts so the typing stays sound.
 */
export class TypeConflict extends TypeExpression {
  readonly conflictType: ConflictType;
  readonly type: TypeExpression;

  constructor(type: TypeExpression, conflictType: ConflictType) {
    super();
    this.type = type;
    this.conflictType = conflictType;
  }

  rewrap(type: TypeExpression) {
    return new TypeConflict(this.type.rewrap(type), this.conflictType);
  }

  unwrap() {
    return this.type;
  }

  // TODO: This constant "true" is a remnant of the Anyified type.
  equals(_type: TypeExpression) {
    return true;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    throw new Error(
      `Type conflict was not resolved for ${this.type
        .resolve(namespace, options)
        .print(namespace, options)} in ${namespace}`
    );
  }

  print(namespace: GirNamespace, options: GenerationOptions): string {
    throw new Error(
      `Type conflict was not resolved for ${this.type
        .resolve(namespace, options)
        .print(namespace, options)} in ${namespace}`
    );
  }
}

export class ClosureType extends TypeExpression {
  type: TypeExpression;
  user_data: number | null = null;

  constructor(type: TypeExpression) {
    super();
    this.type = type;
  }

  equals(type: TypeExpression): boolean {
    if (type instanceof ClosureType) {
      const closureType = type;
      return this.type.equals(closureType.type);
    }

    return false;
  }

  deepUnwrap(): TypeExpression {
    return this.type;
  }

  rewrap(type: TypeExpression): TypeExpression {
    const closure = new ClosureType(this.type.rewrap(type));

    closure.user_data = this.user_data;

    return closure;
  }

  unwrap(): TypeExpression {
    return this;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions) {
    const { user_data, type } = this;

    return ClosureType.new({
      user_data,
      type: type.resolve(namespace, options)
    });
  }

  print(namespace: GirNamespace, options: GenerationOptions): string {
    return this.type.print(namespace, options);
  }

  static new({ type, user_data = null }: { type: TypeExpression; user_data?: number | null }) {
    const vt = new ClosureType(type);
    vt.user_data = user_data;
    return vt;
  }
}

export class ArrayType extends TypeExpression {
  type: TypeExpression;
  arrayDepth: number = 1;
  length: number | null = null;

  constructor(type: TypeExpression) {
    super();
    this.type = type;
  }

  deepUnwrap(): TypeExpression {
    return this.type;
  }

  unwrap(): TypeExpression {
    return this;
  }

  rewrap(type: TypeExpression): TypeExpression {
    const array = new ArrayType(this.type.rewrap(type));

    array.arrayDepth = this.arrayDepth;
    array.length = this.length;

    return array;
  }

  equals(type: TypeExpression) {
    if (type instanceof ArrayType) {
      const arrayType: ArrayType = type;

      return arrayType.type.equals(this.type) && type.arrayDepth === this.arrayDepth;
    }

    return false;
  }

  resolve(namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const { type, arrayDepth, length } = this;
    return ArrayType.new({
      type: type.resolve(namespace, options),
      arrayDepth,
      length
    });
  }

  print(namespace: GirNamespace, options: GenerationOptions): string {
    const depth = this.arrayDepth;
    let typeSuffix: string = "";

    if (depth === 0) {
      typeSuffix = "";
    } else if (depth === 1) {
      typeSuffix = "[]";
    } else {
      typeSuffix = "".padStart(2 * depth, "[]");
    }

    return `${this.type.print(namespace, options)}${typeSuffix}`;
  }

  static new({
    type,
    arrayDepth = 1,
    length = null
  }: {
    type: TypeExpression;
    length?: number | null;
    arrayDepth?: number;
  }) {
    const vt = new ArrayType(type);
    vt.length = length;
    vt.arrayDepth = arrayDepth;
    return vt;
  }
}

export const GTypeType = new TypeIdentifier("GType", "GObject");
export const ThisType = new NativeType("this");
export const ObjectType = new NativeType("object");
export const AnyType = new NativeType("any");
export const NeverType = new NativeType("never");
export const Uint8ArrayType = new NativeType("Uint8Array");
export const BooleanType = new NativeType("boolean");
export const StringType = new NativeType("string");
export const NumberType = new NativeType("number");
export const NullType = new NativeType("null");
export const VoidType = new NativeType("void");
export const UnknownType = new NativeType("unknown");
export const AnyFunctionType = new NativeType("(...args: any[]) => any");

export type GirClassField = GirProperty | GirField;
