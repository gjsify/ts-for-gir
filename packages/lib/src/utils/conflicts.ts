import { GirDirection } from "@gi.ts/parser";
import { IntrospectedConstructor } from "../gir/constructor.ts";
import { FilterBehavior } from "../gir/data.ts";
import type { IntrospectedFunction } from "../gir/function.ts";
import type { IntrospectedClassMember } from "../gir/introspected-class-member.ts";
import type { IntrospectedBaseClass } from "../gir/introspected-classes.ts";
import {
	IntrospectedClass,
	IntrospectedClassFunction,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
} from "../gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import { IntrospectedField, IntrospectedProperty } from "../gir/property.ts";
import type { TypeIdentifier } from "../gir.ts";
import { AnyType, ArrayType, ConflictType, NeverType, TypeConflict } from "../gir.ts";
import { Logger } from "../logger.ts";
import { findMap } from "../util.ts";
import { isSubtypeOf } from "./type-resolution.ts";

const log = new Logger(true, "gir/utils/conflicts");

// Constants for GObject methods that always conflict
const GOBJECT_RESERVED_METHODS = ["connect", "connect_after", "emit"] as const;

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

export function filterFunctionConflict<
	T extends
		| IntrospectedStaticClassFunction
		| IntrospectedVirtualClassFunction
		| IntrospectedClassFunction
		| IntrospectedConstructor,
>(
	ns: IntrospectedNamespace,
	base: IntrospectedBaseClass,
	elements: T[],
	conflict_ids: string[],
	isInheritedMethods: boolean = false,
): T[] {
	const nextType = base.getType();

	return elements
		.filter((m) => m.name)
		.reduce((prev, next) => {
			const conflictResult = checkFunctionConflicts(ns, base, next, conflict_ids, nextType);

			if (conflictResult.shouldOmit) {
				// Always omit methods that conflict with properties/fields
				log.warn(`Omitting ${next.name} due to field or property conflict.`);
			} else if (conflictResult.hasConflict) {
				if (isInheritedMethods) {
					log.warn(`Omitting ${next.name} due to parent method conflict.`);
				} else {
					const neverFunction = createNeverFunction(next, base, conflictResult.message);
					prev.push(next, neverFunction as T);
				}
			} else {
				prev.push(next);
			}

			return prev;
		}, [] as T[]);
}

export function filterConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	ns: IntrospectedNamespace,
	c: IntrospectedBaseClass,
	elements: T[],
	behavior = FilterBehavior.PRESERVE,
): T[] {
	const filtered = elements.filter((p) => p?.name);
	const thisType = c.getType();
	const result: T[] = [];

	for (const element of filtered) {
		const conflictType = detectConflictType(ns, c, element, thisType);

		if (conflictType) {
			if (behavior === FilterBehavior.PRESERVE) {
				const conflictElement = createConflictElement(element, conflictType);
				if (conflictElement) {
					result.push(conflictElement);
				} else {
					result.push(element);
				}
			}
		} else {
			result.push(element);
		}
	}

	return result;
}

// Helper Functions

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
	if (
		child.parameters.some((np, i) => !isSubtypeOf(namespace, childThis, parentThis, np.type, parent.parameters[i].type))
	) {
		return true;
	}

	// Only check output parameters if both functions have them (constructors don't have output_parameters)
	const childHasOutputParams = "output_parameters" in child;
	const parentHasOutputParams = "output_parameters" in parent;

	if (childHasOutputParams && parentHasOutputParams) {
		// Length mismatch
		if (child.output_parameters.length !== parent.output_parameters.length) {
			return true;
		}

		// Type mismatch
		if (
			child.output_parameters.some(
				(np, i) => !isSubtypeOf(namespace, childThis, parentThis, np.type, parent.output_parameters[i].type),
			)
		) {
			return true;
		}
	}

	return false;
}

interface ConflictResult {
	hasConflict: boolean;
	shouldOmit: boolean;
	message: string | null;
}

function checkFunctionConflicts<T extends IntrospectedClassFunction | IntrospectedConstructor>(
	ns: IntrospectedNamespace,
	base: IntrospectedBaseClass,
	functionElement: T,
	conflict_ids: string[],
	nextType: TypeIdentifier,
): ConflictResult {
	let message: string | null = null;

	// Check explicit conflict IDs
	if (conflict_ids.includes(functionElement.name)) {
		return { hasConflict: true, shouldOmit: false, message };
	}

	// Check parent function conflicts
	const hasParentConflict = base.someParent((resolved_parent) => {
		const parentType = resolved_parent.getType();
		return [...resolved_parent.constructors, ...resolved_parent.members].some((p) => {
			if (p.name && p.name === functionElement.name) {
				const conflicting = isConflictingFunction(ns, nextType, functionElement, parentType, p);

				if (conflicting) {
					message = `// Conflicted with ${resolved_parent.namespace.namespace}.${resolved_parent.name}.${p.name}`;
					return true;
				}
				return false;
			}
			return false;
		});
	});

	// Check field/property conflicts
	const hasFieldConflicts = checkFieldPropertyConflicts(base, functionElement.name);

	// Check GObject reserved methods
	const hasGObjectConflicts = checkGObjectConflicts(base, functionElement.name);

	const hasConflict = hasParentConflict || hasGObjectConflicts;

	return {
		hasConflict,
		shouldOmit: hasFieldConflicts && !hasConflict,
		message,
	};
}

function checkFieldPropertyConflicts(base: IntrospectedBaseClass, name: string): boolean {
	// Check if the method name conflicts with any props or fields either on
	// the class or in the parent...
	return (
		[...base.props, ...base.fields].some((p) => p.name && p.name === name) ||
		base.someParent((resolved_parent) =>
			[...resolved_parent.props, ...resolved_parent.fields].some((p) => p.name && p.name === name),
		)
	);
}

function checkGObjectConflicts(base: IntrospectedBaseClass, name: string): boolean {
	const isGObject = base.someParent((p) => p.namespace.namespace === "GObject" && p.name === "Object");
	return isGObject && (GOBJECT_RESERVED_METHODS as readonly string[]).includes(name);
}

function createNeverFunction<T extends IntrospectedClassFunction | IntrospectedConstructor>(
	original: T,
	base: IntrospectedBaseClass,
	message: string | null,
):
	| IntrospectedClassFunction
	| IntrospectedConstructor
	| IntrospectedStaticClassFunction
	| IntrospectedVirtualClassFunction {
	const neverParam = new IntrospectedFunctionParameter({
		name: "args",
		direction: GirDirection.In,
		isVarArgs: true,
		type: new ArrayType(NeverType),
	});

	const neverOptions = {
		name: original.name,
		parent: base,
		parameters: [neverParam],
		return_type: AnyType,
	};

	let neverFunction:
		| IntrospectedClassFunction
		| IntrospectedConstructor
		| IntrospectedStaticClassFunction
		| IntrospectedVirtualClassFunction;

	if (original instanceof IntrospectedConstructor) {
		neverFunction = new IntrospectedConstructor(neverOptions);
	} else if (original instanceof IntrospectedStaticClassFunction) {
		neverFunction = new IntrospectedStaticClassFunction({ ...neverOptions, parent: original.parent });
	} else if (original instanceof IntrospectedVirtualClassFunction && original.parent instanceof IntrospectedClass) {
		neverFunction = new IntrospectedVirtualClassFunction({ ...neverOptions, parent: original.parent });
	} else if (original instanceof IntrospectedClassFunction) {
		neverFunction = new IntrospectedClassFunction({ ...neverOptions, parent: original.parent });
	} else {
		const parent = Object.getPrototypeOf(original as (...args: unknown[]) => unknown) as
			| ((...args: unknown[]) => unknown)
			| null
			| undefined;
		throw new Error(`Unknown function type ${parent?.name} encountered.`);
	}

	if (message) {
		neverFunction.setWarning(message);
	}

	return neverFunction;
}

function detectConflictType<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	ns: IntrospectedNamespace,
	c: IntrospectedBaseClass,
	element: T,
	thisType: TypeIdentifier,
): ConflictType | undefined {
	// Check field conflicts first
	const fieldConflict = checkFieldConflicts(c, element);
	if (fieldConflict) return fieldConflict;

	// Check property conflicts
	const propertyConflict = checkPropertyConflicts(ns, c, element, thisType);
	if (propertyConflict) return propertyConflict;

	// Check function conflicts
	return checkFunctionNameConflicts(ns, c, element, thisType);
}

function checkFieldConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	c: IntrospectedBaseClass,
	element: T,
): ConflictType | undefined {
	return c.findParentMap((resolved_parent) => {
		return findMap([...resolved_parent.fields], (p) => {
			if (p.name && p.name === element.name) {
				if (element instanceof IntrospectedProperty) {
					return ConflictType.ACCESSOR_PROPERTY_CONFLICT;
				}

				if (
					element instanceof IntrospectedField &&
					!isSubtypeOf(c.namespace, c.getType(), resolved_parent.getType(), element.type, p.type)
				) {
					return ConflictType.FIELD_NAME_CONFLICT;
				}
			}

			return undefined;
		});
	});
}

function checkPropertyConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	ns: IntrospectedNamespace,
	c: IntrospectedBaseClass,
	element: T,
	thisType: TypeIdentifier,
): ConflictType | undefined {
	return c.findParentMap((resolved_parent) => {
		return findMap([...resolved_parent.props], (p) => {
			if (p.name && p.name === element.name) {
				// Classes can override parent interface accessors with properties _but_
				// classes cannot override parent class accessors with properties without an error occurring.
				if (p.parent instanceof IntrospectedClass && element instanceof IntrospectedField) {
					return ConflictType.PROPERTY_ACCESSOR_CONFLICT;
				}

				if (
					element instanceof IntrospectedProperty &&
					!isSubtypeOf(ns, thisType, resolved_parent.getType(), element.type, p.type)
				) {
					log.warn(`>> Conflict in ${element.parent?.name}.${element.name} with ${p.parent?.name}.${p.name}.`);
					return ConflictType.PROPERTY_NAME_CONFLICT;
				}
			}

			return undefined;
		});
	});
}

function checkFunctionNameConflicts<
	T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty,
>(ns: IntrospectedNamespace, c: IntrospectedBaseClass, element: T, thisType: TypeIdentifier): ConflictType | undefined {
	return c.findParentMap((resolved_parent) =>
		findMap([...resolved_parent.constructors, ...resolved_parent.members], (p) => {
			if (p.name && p.name === element.name) {
				if (element instanceof IntrospectedProperty) {
					// Properties that conflict with parent functions should be treated as FUNCTION_NAME_CONFLICT
					return ConflictType.FUNCTION_NAME_CONFLICT;
				}
				if (
					!(element instanceof IntrospectedClassFunction) ||
					isConflictingFunction(ns, thisType, element, resolved_parent.getType(), p)
				) {
					return ConflictType.FUNCTION_NAME_CONFLICT;
				}
			}

			return undefined;
		}),
	);
}

function createConflictElement<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	element: T,
	conflictType: ConflictType,
): T | null {
	if (element instanceof IntrospectedField || element instanceof IntrospectedProperty) {
		return element.copy({
			type: new TypeConflict(element.type, conflictType),
		}) as T;
	}

	return null;
}
