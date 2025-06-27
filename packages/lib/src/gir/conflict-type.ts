import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { TypeExpression } from "../gir.ts";
import type { OptionsBase } from "../types/index.ts";

/**
 * Defines different types of conflicts that can occur in type definitions
 */
export enum ConflictType {
	PROPERTY_NAME_CONFLICT = 1,
	FIELD_NAME_CONFLICT,
	FUNCTION_NAME_CONFLICT,
	ACCESSOR_PROPERTY_CONFLICT,
	PROPERTY_ACCESSOR_CONFLICT,
}

/**
 * Represents a type conflict that needs to be resolved by generators.
 * This is used to handle type conflicts by wrapping conflicting types
 * with information about why they are conflicting.
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

	rewrap(type: TypeExpression): TypeConflict {
		return new TypeConflict(this.type.rewrap(type), this.conflictType);
	}

	unwrap(): TypeExpression {
		return this.type;
	}

	// TODO: This constant "true" is a remnant of the Anyified type.
	equals(): boolean {
		return true;
	}

	resolve(namespace: IntrospectedNamespace, options: OptionsBase): TypeExpression {
		const resolvedType = this.type.resolve(namespace, options);
		const typeString = resolvedType.print(namespace, options);
		throw new Error(`Type conflict was not resolved for ${typeString} in ${namespace.namespace}`);
	}

	print(namespace: IntrospectedNamespace, options: OptionsBase): string {
		const resolvedType = this.type.resolve(namespace, options);
		const typeString = resolvedType.print(namespace, options);
		throw new Error(`Type conflict was not resolved for ${typeString} in ${namespace.namespace}`);
	}
}
