import { ConflictType, TypeConflict } from "./gir/conflict-type.ts";
import type { IntrospectedNamespace } from "./gir/namespace.ts";
import {
	ANY_FUNCTION_TYPE as AnyFunctionType,
	ANY_TYPE as AnyType,
	BOOLEAN_TYPE as BooleanType,
	NativeType,
	NEVER_TYPE as NeverType,
	NULL_TYPE as NullType,
	NUMBER_TYPE as NumberType,
	OBJECT_TYPE as ObjectType,
	STRING_TYPE as StringType,
	THIS_TYPE as ThisType,
	UINT8_ARRAY_TYPE as Uint8ArrayType,
	UNKNOWN_TYPE as UnknownType,
	VOID_TYPE as VoidType,
} from "./gir/native-type.ts";
import type { IntrospectedField, IntrospectedProperty } from "./gir/property.ts";
import { Logger } from "./logger.ts";
import type { OptionsBase } from "./types/index.ts";
import { isInvalid, sanitizeIdentifierName, sanitizeNamespace } from "./utils/naming.ts";

export abstract class TypeExpression {
	isPointer = false;

	abstract equals(type: TypeExpression): boolean;
	abstract unwrap(): TypeExpression;

	deepUnwrap(): TypeExpression {
		return this.unwrap();
	}

	abstract rewrap(type: TypeExpression): TypeExpression;
	abstract resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression;

	abstract print(namespace: IntrospectedNamespace, options: OptionsBase): string;
	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return this.print(namespace, options);
	}
}

export class TypeIdentifier extends TypeExpression {
	readonly log: Logger;
	readonly name: string;
	readonly namespace: string;

	constructor(name: string, namespace: string) {
		super();
		this.name = name;
		this.namespace = namespace;
		this.log = new Logger(true, `TypeIdentifier(${this.namespace}.${name})`);
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

	/**
	 * TODO: gi.ts didn't deal with sanitizing types but probably should have to avoid
	 * invalid names such as "3gppProfile"
	 */
	sanitize() {
		return new TypeIdentifier(sanitizeIdentifierName(this.namespace, this.name), sanitizeNamespace(this.namespace));
	}

	protected _resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeIdentifier | null {
		const name: string = sanitizeIdentifierName(null, this.name);
		const unresolvedNamespaceName = this.namespace;

		const ns = namespace.assertInstalledImport(unresolvedNamespaceName);

		if (ns.hasSymbol(name)) {
			const c = ns.getClass(name);

			// Some records are structs for other class types.
			// GirRecord.prototype.getType resolves this relationship.
			if (c) return c.getType();

			return new TypeIdentifier(name, ns.namespace);
		}

		// Handle "class callback" types (they're in a definition-merged module)
		let [cb, corrected_name] = ns.findClassCallback(name);
		let resolved_name: string | null = null;

		if (!cb) {
			resolved_name = ns.resolveSymbolFromTypeName(name);
		}

		let c_resolved_name: string | null = null;

		if (!c_resolved_name) {
			c_resolved_name = ns.resolveSymbolFromTypeName(`${unresolvedNamespaceName}${name}`);
		}

		if (!c_resolved_name) {
			c_resolved_name = ns.resolveSymbolFromTypeName(`${ns.namespace}${name}`);
		}

		if (!cb && !resolved_name && !c_resolved_name) {
			// Don't warn if a missing import is at fault, this will be dealt with later.
			if (namespace.namespace === ns.namespace) {
				this.log.warn(`Attempting to fall back on c:type inference for ${ns.namespace}.${name}.`);
			}

			[cb, corrected_name] = ns.findClassCallback(`${ns.namespace}${name}`);

			if (cb) {
				this.log.warn(
					`Falling back on c:type inference for ${ns.namespace}.${name} and found ${ns.namespace}.${corrected_name}.`,
				);
			}
		}

		if (cb) {
			if (options.verbose) {
				this.log.debug(`Callback found: ${cb}.${corrected_name}`);
			}

			return new ModuleTypeIdentifier(corrected_name, cb, ns.namespace);
		} else if (resolved_name) {
			return new TypeIdentifier(resolved_name, ns.namespace);
		} else if (c_resolved_name) {
			this.log.warn(
				`Fall back on c:type inference for ${ns.namespace}.${name} and found ${ns.namespace}.${corrected_name}.`,
			);

			return new TypeIdentifier(c_resolved_name, ns.namespace);
		} else if (namespace.namespace === ns.namespace) {
			this.log.error(`Unable to resolve type ${this.name} in same namespace ${ns.namespace}!`);
			return null;
		}

		this.log.error(`Type ${this.name} could not be resolved in ${namespace.namespace} ${namespace.version}`);
		return null;
	}

	resolveIdentifier(namespace: IntrospectedNamespace, options: OptionsBase): TypeIdentifier | null {
		return this._resolve(namespace, options);
	}

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		const resolved = this._resolve(namespace, options);

		// Generally if we can't resolve a type it is not introspectable,
		// thus we annotate it as "never".
		return resolved ?? NeverType;
	}

	static new({ name, namespace }: { name: string; namespace: string }) {
		return new TypeIdentifier(name, namespace);
	}

	print(namespace: IntrospectedNamespace, _options: OptionsBase): string {
		if (namespace.hasSymbol(this.namespace) && this.namespace !== namespace.namespace) {
			// TODO: Move to TypeScript generator...
			// Libraries like zbar have classes named things like "Gtk"
			return `${this.namespace}__.${this.name}`;
		}

		if (namespace.namespace === this.namespace) {
			return `${this.name}`;
		} else {
			return `${this.namespace}.${this.name}`;
		}
	}
}

export class ModuleTypeIdentifier extends TypeIdentifier {
	readonly moduleName: string;
	readonly namespace: string;

	constructor(name: string, moduleName: string, namespace: string) {
		super(name, namespace);
		this.moduleName = moduleName;
		this.namespace = namespace;
	}

	equals(type: TypeExpression): boolean {
		return super.equals(type) && type instanceof ModuleTypeIdentifier && this.moduleName === type.moduleName;
	}

	is(namespace: string, moduleName: string, name?: string) {
		return this.namespace === namespace && this.moduleName === moduleName && this.name === name && name !== undefined;
	}

	unwrap() {
		return this;
	}

	rewrap(type: TypeExpression): TypeExpression {
		return type;
	}

	sanitize() {
		return new ModuleTypeIdentifier(
			sanitizeIdentifierName(this.namespace, this.name),
			sanitizeIdentifierName(this.namespace, this.moduleName),
			sanitizeNamespace(this.namespace),
		);
	}

	protected _resolve(_namespace: IntrospectedNamespace, _options: OptionsBase): ModuleTypeIdentifier | null {
		return this;
	}

	print(namespace: IntrospectedNamespace, _options: OptionsBase): string {
		if (namespace.namespace === this.namespace) {
			return `${this.moduleName}.${this.name}`;
		} else {
			return `${this.namespace}.${this.moduleName}.${this.name}`;
		}
	}
}

/**
 * This class overrides the default printing for types
 */
export class ClassStructTypeIdentifier extends TypeIdentifier {
	equals(type: TypeExpression): boolean {
		return type instanceof ClassStructTypeIdentifier && super.equals(type);
	}

	print(namespace: IntrospectedNamespace, _options: OptionsBase): string {
		if (namespace.namespace === this.namespace) {
			// TODO: Mapping to invalid names should happen at the generator level...
			return `typeof ${isInvalid(this.name) ? `__${this.name}` : this.name}`;
		} else {
			return `typeof ${this.namespace}.${isInvalid(this.name) ? `__${this.name}` : this.name}`;
		}
	}
}

export class GenerifiedTypeIdentifier extends TypeIdentifier {
	generics: TypeExpression[];

	constructor(name: string, namespace: string, generics: TypeExpression[] = []) {
		super(name, namespace);
		this.generics = generics;
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
		const Generics = this.generics.map((generic) => generic.print(namespace, options)).join(", ");

		if (namespace.namespace === this.namespace) {
			return `${this.name}${this.generics.length > 0 ? `<${Generics}>` : ""}`;
		} else {
			return `${this.namespace}.${this.name}${this.generics.length > 0 ? `<${Generics}>` : ""}`;
		}
	}

	_resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeIdentifier | null {
		const iden = super._resolve(namespace, options);

		if (iden) {
			return new GenerifiedTypeIdentifier(iden.name, iden.namespace, [...this.generics]);
		}

		return iden;
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

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		const [type, ...types] = this.types;

		return new OrType(type.resolve(namespace, options), ...types.map((t) => t.resolve(namespace, options)));
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return `(${this.types.map((t) => t.print(namespace, options)).join(" | ")})`;
	}

	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return `${this.types.map((t) => t.print(namespace, options)).join(" | ")}`;
	}

	equals(type: TypeExpression) {
		if (type instanceof OrType) {
			return this.types.every((t) => type.types.some((type) => type.equals(t)));
		} else {
			return false;
		}
	}
}

export class TupleType extends OrType {
	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return `[${this.types.map((t) => t.print(namespace, options)).join(", ")}]`;
	}

	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return this.print(namespace, options);
	}

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		const [type, ...types] = this.types;

		return new TupleType(type.resolve(namespace, options), ...types.map((t) => t.resolve(namespace, options)));
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
	unwrap(): TypeExpression {
		return this;
	}

	resolve(namespace: IntrospectedNamespace, options: OptionsBase) {
		return new BinaryType(this.a.resolve(namespace, options), this.b.resolve(namespace, options));
	}

	is() {
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
				Object.values(this.parameterTypes).every((t) =>
					Object.values(type.parameterTypes).some((tp) => t.equals(tp)),
				) &&
				Object.values(type.parameterTypes).every((t) =>
					Object.values(this.parameterTypes).some((tp) => t.equals(tp)),
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

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		return new FunctionType(
			Object.fromEntries(
				Object.entries(this.parameterTypes).map(([k, p]) => {
					return [k, p.resolve(namespace, options)];
				}),
			),
			this.returnType.resolve(namespace, options),
		);
	}

	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase): string {
		const Parameters = Object.entries(this.parameterTypes)
			.map(([k, v]) => {
				return `${k}: ${v.rootPrint(namespace, options)}`;
			})
			.join(", ");

		return `(${Parameters}) => ${this.returnType.print(namespace, options)}`;
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
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
		propagate = true,
	) {
		this._deriveFrom = deriveFrom ?? null;
		this._genericType = genericType;
		this._defaultType = defaultType ?? null;
		this._constraint = constraint ?? null;
		this._propagate = propagate;
	}

	unwrap() {
		return this._genericType;
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

	resolve(namespace: IntrospectedNamespace, options: OptionsBase) {
		return new GenerifiedType(this.type.resolve(namespace, options), this.generic);
	}

	unwrap() {
		return this.type;
	}

	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase) {
		return this.type.rootPrint(namespace, options);
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase) {
		return this.type.print(namespace, options);
	}

	equals(type: TypeExpression): boolean {
		if (type instanceof GenerifiedType) {
			return this.type.equals(type.type) && this.generic.equals(type.generic);
		}

		return this.type.equals(type);
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
			const genericType = type;
			return this.identifier === genericType.identifier;
		}

		return false;
	}

	unwrap(): TypeExpression {
		return this;
	}

	rewrap(type: TypeExpression): TypeExpression {
		return type;
	}

	resolve(): GenericType {
		return this;
	}

	print(): string {
		return this.identifier;
	}
}

export class NullableType extends BinaryType {
	constructor(type: TypeExpression) {
		super(type, NullType);
	}

	unwrap() {
		return this.a;
	}

	rewrap(type: TypeExpression): TypeExpression {
		return new NullableType(this.a.rewrap(type));
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
		return this;
	}

	rewrap(type: TypeExpression): TypeExpression {
		return new PromiseType(this.type.rewrap(type));
	}

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		return new PromiseType(this.type.resolve(namespace, options));
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
		if (this.type.equals(VoidType)) {
			return "Promise<void>";
		}

		return `Promise<${this.type.print(namespace, options)}>`;
	}

	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return this.print(namespace, options);
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

	resolve(namespace: IntrospectedNamespace, options: OptionsBase) {
		const { user_data, type } = this;

		return ClosureType.new({
			user_data,
			type: type.resolve(namespace, options),
		});
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
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

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		const { type, arrayDepth, length } = this;
		return ArrayType.new({
			type: type.resolve(namespace, options),
			arrayDepth,
			length,
		});
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
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
		length = null,
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

export type GirClassField = IntrospectedProperty | IntrospectedField;

export {
	NativeType,
	ConflictType,
	TypeConflict,
	ThisType,
	ObjectType,
	AnyType,
	NeverType,
	Uint8ArrayType,
	BooleanType,
	StringType,
	NumberType,
	NullType,
	VoidType,
	UnknownType,
	AnyFunctionType,
};
