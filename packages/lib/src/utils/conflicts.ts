import { GirDirection } from "@gi.ts/parser";
import { LazyReporter } from "@ts-for-gir/reporter";
import { IntrospectedConstructor } from "../gir/constructor.ts";
import { FilterBehavior } from "../gir/data.ts";
import type { IntrospectedFunction } from "../gir/function.ts";
import type { IntrospectedClassMember } from "../gir/introspected-class-member.ts";
import type { IntrospectedBaseClass } from "../gir/introspected-classes.ts";
import {
	IntrospectedClass,
	IntrospectedClassFunction,
	IntrospectedInterface,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
} from "../gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import { IntrospectedField, IntrospectedProperty } from "../gir/property.ts";
import type { TypeIdentifier } from "../gir.ts";
import { AnyType, ArrayType, ConflictType, NeverType, TypeConflict } from "../gir.ts";
import { findMap } from "../util.ts";
import { isSubtypeOf } from "./type-resolution.ts";

export const conflictsReporter = new LazyReporter("conflicts");

// Use a function to always get the current reporter instance.
// A module-level `const log = conflictsReporter.get()` would capture a stale
// reference from before configure() is called, causing problems to be logged
// to console but not stored in the report.
function getLog() {
	return conflictsReporter.get();
}

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
				getLog().reportTypeConflict(
					"field_property",
					next.name,
					next.parent?.namespace.namespace || "unknown",
					"Field/property name conflict",
				);
			} else if (conflictResult.hasConflict) {
				if (isInheritedMethods) {
					getLog().reportTypeConflict(
						"method",
						next.name,
						next.parent?.namespace.namespace || "unknown",
						"Parent method conflict",
					);
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

	// Check virtual function signature conflicts (for interfaces)
	if (element instanceof IntrospectedVirtualClassFunction) {
		const vfuncConflict = checkVfuncSignatureConflicts(ns, c, element, thisType);
		if (vfuncConflict) return vfuncConflict;
	}

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
					getLog().reportTypeConflict(
						"general",
						element.name,
						element.parent?.namespace.namespace || "unknown",
						`Conflict with ${p.parent?.name}.${p.name}`,
					);
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

function checkVfuncSignatureConflicts(
	ns: IntrospectedNamespace,
	c: IntrospectedBaseClass,
	element: IntrospectedVirtualClassFunction,
	thisType: TypeIdentifier,
): ConflictType | undefined {
	// Only check for vfunc conflicts on interfaces
	if (!(c instanceof IntrospectedInterface)) {
		return undefined;
	}

	// Check if this virtual method conflicts with parent class or interface methods
	return c.findParentMap((resolved_parent) => {
		// Look for virtual methods with the same name in parent classes/interfaces
		const parentVirtualMethods = resolved_parent.members.filter(
			(m) => m instanceof IntrospectedVirtualClassFunction && m.name === element.name,
		);

		for (const parentMethod of parentVirtualMethods) {
			// Check if signatures conflict
			if (isConflictingFunction(ns, thisType, element, resolved_parent.getType(), parentMethod)) {
				return ConflictType.VFUNC_SIGNATURE_CONFLICT;
			}
		}

		// Also check if the parent is an interface that might have virtual methods from its Interface namespace
		// This is important for cases like List extends Collection where both have vfunc_get_read_only_view
		if (resolved_parent instanceof IntrospectedInterface) {
			// Get the virtual methods from the parent interface
			const parentInterfaceVirtualMethods = resolved_parent.members.filter(
				(m) => m instanceof IntrospectedVirtualClassFunction && m.name === element.name,
			);

			for (const parentMethod of parentInterfaceVirtualMethods) {
				// Check if signatures conflict between the interfaces
				if (isConflictingFunction(ns, thisType, element, resolved_parent.getType(), parentMethod)) {
					return ConflictType.VFUNC_SIGNATURE_CONFLICT;
				}
			}
		}

		return undefined;
	});
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

	// For VFUNC_SIGNATURE_CONFLICT, we'll handle it differently in the generator
	// Just mark the element so the generator knows to create overloads
	if (conflictType === ConflictType.VFUNC_SIGNATURE_CONFLICT && element instanceof IntrospectedVirtualClassFunction) {
		// Return the element with a marker that will be handled in the generator
		// We don't use TypeConflict here as that causes resolution errors
		return element;
	}

	return null;
}

/**
 * Check if an interface has virtual methods that conflict with parent class or interface methods.
 * This is used to determine whether to inherit from Interface namespace or generate method overloads.
 */
export function hasVfuncSignatureConflicts(ns: IntrospectedNamespace, interfaceClass: IntrospectedInterface): boolean {
	const thisType = interfaceClass.getType();
	const virtualMethods = interfaceClass.members.filter(
		(m) => m instanceof IntrospectedVirtualClassFunction,
	) as IntrospectedVirtualClassFunction[];

	// If we don't have any virtual methods, no conflicts possible
	if (virtualMethods.length === 0) {
		return false;
	}

	// Check each virtual method for conflicts with parent classes/interfaces
	for (const vmethod of virtualMethods) {
		const conflictType = checkVfuncSignatureConflicts(ns, interfaceClass, vmethod, thisType);
		if (conflictType === ConflictType.VFUNC_SIGNATURE_CONFLICT) {
			return true;
		}
	}

	// Check if any parent interface already inherits from its own .Interface namespace
	// If it does, and we have virtual methods with the same name but different signatures,
	// we have a conflict (e.g., List extends Collection, List.Interface and BidirList extends List, BidirList.Interface)
	const hasParentWithVirtualMethods = interfaceClass.someParent((parent) => {
		// Only check parent interfaces (not classes)
		if (!(parent instanceof IntrospectedInterface)) {
			return false;
		}

		// Check if the parent interface has virtual methods (which means it probably inherits from its .Interface namespace)
		const parentHasVirtualMethods = parent.members.some((m) => m instanceof IntrospectedVirtualClassFunction);

		if (!parentHasVirtualMethods) {
			return false; // Parent has no virtual methods, no conflict
		}

		// Check if any of our virtual methods have the same name as parent's virtual methods
		// but with different signatures (especially return types)
		for (const vmethod of virtualMethods) {
			// Find virtual methods with the same name in the parent
			const parentVirtualMethods = parent.members.filter(
				(m) => m instanceof IntrospectedVirtualClassFunction && m.name === vmethod.name,
			) as IntrospectedVirtualClassFunction[];

			for (const parentMethod of parentVirtualMethods) {
				// For interfaces, even if the return type is a subtype, TypeScript won't allow
				// multiple inheritance from interfaces with the same method but different return types
				// So we need to check if there's any difference in signatures
				// Note: We can't just use isConflictingFunction because it allows subtype relationships
				// but TypeScript doesn't allow that for interface multiple inheritance

				// Check if return types are different (even if one is a subtype of the other)
				const ourReturn = vmethod.return();
				const parentReturn = parentMethod.return();

				// Check if return types are not exactly the same
				// For interface inheritance, even subtype relationships cause conflicts
				if (!ourReturn.equals(parentReturn)) {
					return true; // Different return types = conflict
				}

				// Also check parameters using the existing conflict detection
				if (isConflictingFunction(ns, thisType, vmethod, parent.getType(), parentMethod)) {
					return true;
				}
			}
		}

		return false;
	});

	return hasParentWithVirtualMethods;
}
