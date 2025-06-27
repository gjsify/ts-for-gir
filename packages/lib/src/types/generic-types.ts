import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { OptionsBase } from "./index.ts";
import { TypeExpression, TypeIdentifier } from "../gir.ts";

/**
 * Represents a generic type parameter with its constraints and properties
 */
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
		this._genericType = genericType;
		this._defaultType = defaultType ?? null;
		this._deriveFrom = deriveFrom ?? null;
		this._constraint = constraint ?? null;
		this._propagate = propagate;
	}

	unwrap(): GenericType {
		return this._genericType;
	}

	get propagate(): boolean {
		return this._propagate;
	}

	get type(): GenericType {
		return this._genericType;
	}

	get defaultType(): TypeExpression | null {
		return this._defaultType;
	}

	get constraint(): TypeExpression | null {
		return this._constraint;
	}

	get parent(): TypeIdentifier | null {
		return this._deriveFrom;
	}
}

/**
 * Represents a type that has been generified with a generic parameter
 */
export class GenerifiedType extends TypeExpression {
	type: TypeExpression;
	generic: GenericType;

	constructor(type: TypeExpression, generic: GenericType) {
		super();
		this.type = type;
		this.generic = generic;
	}

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		return new GenerifiedType(this.type.resolve(namespace, options), this.generic);
	}

	unwrap(): TypeExpression {
		return this.type;
	}

	rootPrint(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return this.print(namespace, options);
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
		return this.type.print(namespace, options);
	}

	equals(type: TypeExpression): boolean {
		if (type instanceof GenerifiedType) {
			return this.type.equals(type.type) && this.generic.equals(type.generic);
		}

		return false;
	}

	rewrap(type: TypeExpression): TypeExpression {
		return new GenerifiedType(this.type.rewrap(type), this.generic);
	}
}

/**
 * Represents a generic type parameter (like T, U, etc.)
 */
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
			return this.identifier === type.identifier;
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