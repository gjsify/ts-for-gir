import type { IntrospectedClassFunction } from "../gir/introspected-classes.ts";
import type { ClassFunctionLike, FunctionTypeKind } from "../types/class-function-types.ts";

/**
 * Type guard to check if an object is a class function-like
 */
export function isClassFunctionLike(obj: unknown): obj is ClassFunctionLike {
	return obj != null && typeof obj === "object" && "__functionTypeKind" in obj;
}

/**
 * Type guard to check if an object is a specific function type
 */
export function isFunctionOfType(obj: unknown, type: FunctionTypeKind): boolean {
	return isClassFunctionLike(obj) && obj.__functionTypeKind === type;
}

/**
 * Type guard specifically for class functions
 */
export function isClassFunction(obj: unknown): boolean {
	return isFunctionOfType(obj, "CLASS_FUNCTION");
}

/**
 * Type guard specifically for virtual class functions
 */
export function isVirtualClassFunction(obj: unknown): boolean {
	return isFunctionOfType(obj, "VIRTUAL_CLASS_FUNCTION");
}

/**
 * Type guard specifically for static class functions
 */
export function isStaticClassFunction(fn: IntrospectedClassFunction): boolean {
	// Check if the function has the static class function characteristics
	// IntrospectedStaticClassFunction extends IntrospectedClassFunction but doesn't add unique properties
	// We can identify it by checking the constructor name or other characteristics
	return fn.constructor.name === "IntrospectedStaticClassFunction";
}

/**
 * Type guard specifically for constructors
 */
export function isConstructorFunction(obj: unknown): boolean {
	return isFunctionOfType(obj, "CONSTRUCTOR");
}

/**
 * Helper to get the function type kind from an object
 */
export function getFunctionTypeKind(obj: unknown): FunctionTypeKind | null {
	return isClassFunctionLike(obj) ? obj.__functionTypeKind : null;
}

/**
 * Helper to check if object has namespace property (common pattern in the codebase)
 */
export function hasNamespace(obj: unknown): obj is { namespace: unknown } {
	return obj != null && typeof obj === "object" && "namespace" in obj;
}
