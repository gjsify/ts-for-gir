import { IntrospectedConstructor } from "../../gir/constructor.ts";
import type { IntrospectedFunction } from "../../gir/function.ts";
import type { IntrospectedClassFunction } from "../../gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "../../gir/namespace.ts";
import type { IntrospectedFunctionParameter } from "../../gir/parameter.ts";
import type { TypeIdentifier } from "../../gir.ts";
import { isSubtypeOf } from "../type-resolution.ts";

/**
 * Checks if two functions are conflicting based on their signatures
 */
export function isConflictingFunction(
	namespace: IntrospectedNamespace,
	childThis: TypeIdentifier,
	child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
	parentThis: TypeIdentifier,
	parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
): boolean {
	if (!parent.isIntrospectable || !child.isIntrospectable) {
		return false;
	}

	// Handle constructor conflicts
	if (isConstructorConflict(namespace, childThis, child, parentThis, parent)) {
		return true;
	}

	// Handle mixed constructor/function conflicts
	if (isMixedConstructorFunctionConflict(child, parent)) {
		return true;
	}

	// Handle different function types (no conflict if different prototypes)
	if (hasDifferentPrototypes(child, parent)) {
		return false;
	}

	// Check parameter and return type conflicts
	return hasParameterOrReturnTypeConflicts(namespace, childThis, child, parentThis, parent);
}

function isConstructorConflict(
	namespace: IntrospectedNamespace,
	childThis: TypeIdentifier,
	child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
	parentThis: TypeIdentifier,
	parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
): boolean {
	if (!(child instanceof IntrospectedConstructor && parent instanceof IntrospectedConstructor)) {
		return false;
	}

	return (
		child.parameters.length > parent.parameters.length ||
		!isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return()) ||
		child.parameters.some((p, i) => !isSubtypeOf(namespace, childThis, parentThis, p.type, parent.parameters[i].type))
	);
}

function isMixedConstructorFunctionConflict(
	child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
	parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
): boolean {
	return child instanceof IntrospectedConstructor !== parent instanceof IntrospectedConstructor;
}

function hasDifferentPrototypes(
	child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
	parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
): boolean {
	// This occurs if two functions of the same name are passed but they
	// are different types (e.g. GirStaticClassFunction vs GirClassFunction)
	return Object.getPrototypeOf(child) !== Object.getPrototypeOf(parent);
}

function hasParameterOrReturnTypeConflicts(
	namespace: IntrospectedNamespace,
	childThis: TypeIdentifier,
	child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
	parentThis: TypeIdentifier,
	parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
): boolean {
	// Check basic parameter conflicts
	if (child.parameters.length > parent.parameters.length) {
		return true;
	}

	// Check return type conflicts
	if (!isSubtypeOf(namespace, childThis, parentThis, child.return(), parent.return())) {
		return true;
	}

	// Check parameter type conflicts
	if (hasParameterTypeConflicts(namespace, childThis, child.parameters, parentThis, parent.parameters)) {
		return true;
	}

	// Check output parameter conflicts if both functions support them
	return hasOutputParameterConflicts(namespace, childThis, child, parentThis, parent);
}

function hasParameterTypeConflicts(
	namespace: IntrospectedNamespace,
	childThis: TypeIdentifier,
	childParams: IntrospectedFunctionParameter[],
	parentThis: TypeIdentifier,
	parentParams: IntrospectedFunctionParameter[],
): boolean {
	return childParams.some(
		(childParam, i) => !isSubtypeOf(namespace, childThis, parentThis, childParam.type, parentParams[i].type),
	);
}

function hasOutputParameterConflicts(
	namespace: IntrospectedNamespace,
	childThis: TypeIdentifier,
	child: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
	parentThis: TypeIdentifier,
	parent: IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
): boolean {
	// Only check output parameters if both functions have them (constructors don't have output_parameters)
	const childHasOutputParams = "output_parameters" in child;
	const parentHasOutputParams = "output_parameters" in parent;

	if (!childHasOutputParams || !parentHasOutputParams) {
		return false;
	}

	// Length mismatch
	if (child.output_parameters.length !== parent.output_parameters.length) {
		return true;
	}

	// Type mismatch
	return child.output_parameters.some(
		(childParam, i) =>
			!isSubtypeOf(namespace, childThis, parentThis, childParam.type, parent.output_parameters[i].type),
	);
}
