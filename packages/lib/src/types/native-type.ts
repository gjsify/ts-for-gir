import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { OptionsBase } from "./index.ts";
import { TypeExpression } from "../gir.ts";

/**
 * Represents a native TypeScript type that doesn't need resolution
 */
export class NativeType extends TypeExpression {
	readonly expression: (options?: OptionsBase) => string;

	constructor(expression: ((options?: OptionsBase) => string) | string) {
		super();
		this.expression = typeof expression === "string" ? () => expression : expression;
	}

	rewrap(type: TypeExpression): TypeExpression {
		return type;
	}

	resolve(): TypeExpression {
		return this;
	}

	print(_namespace: IntrospectedNamespace, options: OptionsBase): string {
		return this.expression(options);
	}

	equals(type: TypeExpression, options?: OptionsBase): boolean {
		return type instanceof NativeType && this.expression(options) === type.expression(options);
	}

	unwrap(): TypeExpression {
		return this;
	}

	static withGenerator(generator: (options?: OptionsBase) => string): TypeExpression {
		return new NativeType(generator);
	}

	static of(nativeType: string): NativeType {
		return new NativeType(nativeType);
	}
}

// Common native types as constants
export const THIS_TYPE = new NativeType("this");
export const OBJECT_TYPE = new NativeType("object");
export const ANY_TYPE = new NativeType("any");
export const NEVER_TYPE = new NativeType("never");
export const UINT8_ARRAY_TYPE = new NativeType("Uint8Array");
export const BOOLEAN_TYPE = new NativeType("boolean");
export const STRING_TYPE = new NativeType("string");
export const NUMBER_TYPE = new NativeType("number");
export const NULL_TYPE = new NativeType("null");
export const VOID_TYPE = new NativeType("void");
export const UNKNOWN_TYPE = new NativeType("unknown");
export const ANY_FUNCTION_TYPE = new NativeType("(...args: any[]) => any"); 