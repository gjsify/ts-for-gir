import type { IntrospectedClassMember } from "../../gir/introspected-class-member.ts";
import type { IntrospectedBaseClass, IntrospectedClassFunction } from "../../gir/introspected-classes.ts";
import type { IntrospectedNamespace } from "../../gir/namespace.ts";
import { IntrospectedProperty } from "../../gir/property.ts";
import type { TypeIdentifier } from "../../gir.ts";
import { ConflictType, TypeConflict } from "../../gir.ts";

/**
 * Detects what type of conflict a class member has, if any
 */
export function detectConflictType<
	T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty,
>(
	namespace: IntrospectedNamespace,
	clazz: IntrospectedBaseClass,
	element: T,
	thisType: TypeIdentifier,
): ConflictType | undefined {
	// Check field conflicts
	const fieldConflict = checkFieldConflicts(clazz, element);
	if (fieldConflict) {
		return fieldConflict;
	}

	// Check property conflicts
	const propertyConflict = checkPropertyConflicts(namespace, clazz, element, thisType);
	if (propertyConflict) {
		return propertyConflict;
	}

	// Check function name conflicts
	return checkFunctionNameConflicts(namespace, clazz, element, thisType);
}

/**
 * Creates a conflict element wrapper for the given element
 */
export function createConflictElement<
	T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty,
>(element: T, conflictType: ConflictType): T | null {
	if (element instanceof IntrospectedProperty) {
		const conflictProperty = element.copy();
		conflictProperty.type = new TypeConflict(conflictProperty.type, conflictType);
		return conflictProperty as T;
	}

	// For other types, we might need to implement specific conflict handling
	// For now, return the original element
	return element;
}

function checkFieldConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	clazz: IntrospectedBaseClass,
	element: T,
): ConflictType | undefined {
	if (!element.name) {
		return undefined;
	}

	const hasFieldConflict = clazz.fields.some((field) => field.name === element.name);

	if (hasFieldConflict) {
		if (element instanceof IntrospectedProperty) {
			return ConflictType.PROPERTY_NAME_CONFLICT;
		}
		return ConflictType.FIELD_NAME_CONFLICT;
	}

	return undefined;
}

function checkPropertyConflicts<T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty>(
	_namespace: IntrospectedNamespace,
	clazz: IntrospectedBaseClass,
	element: T,
	_thisType: TypeIdentifier,
): ConflictType | undefined {
	if (!element.name) {
		return undefined;
	}

	const hasPropertyConflict = clazz.props.some((property) => property.name === element.name && property !== element);

	if (hasPropertyConflict) {
		// Check if this is an accessor property conflict
		if (isAccessorProperty(element)) {
			return ConflictType.ACCESSOR_PROPERTY_CONFLICT;
		}
		return ConflictType.PROPERTY_ACCESSOR_CONFLICT;
	}

	return undefined;
}

function checkFunctionNameConflicts<
	T extends IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty,
>(
	_namespace: IntrospectedNamespace,
	clazz: IntrospectedBaseClass,
	element: T,
	_thisType: TypeIdentifier,
): ConflictType | undefined {
	if (!element.name) {
		return undefined;
	}

	const hasFunctionConflict = clazz.members.some((member) => member.name === element.name && member !== element);

	if (hasFunctionConflict) {
		return ConflictType.FUNCTION_NAME_CONFLICT;
	}

	return undefined;
}

function isAccessorProperty(
	element: IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty,
): boolean {
	// Check if the element is an accessor property
	// This is a simplified check - in practice, you might need more sophisticated logic
	return element instanceof IntrospectedProperty && element.readable && element.writable;
}
