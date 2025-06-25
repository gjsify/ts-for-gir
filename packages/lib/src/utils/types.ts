import type { GirAliasElement } from "@gi.ts/parser";
import { GirDirection } from "@gi.ts/parser";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import {
	AnyType,
	ArrayType,
	BinaryType,
	BooleanType,
	NativeType,
	NeverType,
	NumberType,
	ObjectType,
	StringType,
	ThisType,
	type TypeExpression,
	TypeIdentifier,
	Uint8ArrayType,
	UnknownType,
	VoidType,
} from "../gir.ts";

/**
 * Get the type expression for an alias element
 */
export function getAliasType(
	namespace: string,
	_ns: IntrospectedNamespace,
	parameter: GirAliasElement,
): TypeExpression {
	let name = parameter.type?.[0].$.name || "unknown";

	const nameParts = name.split(" ");

	if (nameParts.length === 1) {
		name = nameParts[0];
	} else {
		name = nameParts[1];
	}

	return parseTypeExpression(namespace, name);
}

/**
 * Parse a type string into namespace and name components
 */
export function parseTypeString(type: string): { namespace: string | null; name: string } {
	if (type.includes(".")) {
		const parts = type.split(".");

		if (parts.length > 2) {
			throw new Error(`Invalid type string ${type} passed.`);
		}

		const [namespace, name] = parts;

		return { name, namespace };
	} else {
		return { name: type, namespace: null };
	}
}

/**
 * Parse a type identifier from namespace and type string
 */
export function parseTypeIdentifier(namespace: string, type: string): TypeIdentifier {
	const baseType = parseTypeString(type);

	if (baseType.namespace) {
		return new TypeIdentifier(baseType.name, baseType.namespace);
	} else {
		return new TypeIdentifier(baseType.name, namespace);
	}
}

/**
 * Parse a type expression from namespace and type string
 */
export function parseTypeExpression(namespace: string, type: string): TypeExpression {
	const baseType = parseTypeString(type);
	if (baseType.namespace) {
		if (baseType.namespace === namespace) {
			return new TypeIdentifier(baseType.name, namespace);
		}
		return new TypeIdentifier(baseType.name, baseType.namespace).sanitize();
	} else {
		const primitiveType = resolvePrimitiveType(baseType.name);

		if (primitiveType !== null) {
			return primitiveType;
		} else {
			return new TypeIdentifier(baseType.name, namespace);
		}
	}
}

/**
 * Resolve primitive array types with their correct depth
 */
export function resolvePrimitiveArrayType(name: string, arrayDepth: number): [TypeExpression, number] | null {
	if (arrayDepth > 0) {
		switch (name) {
			case "gint8":
			case "guint8":
				return [Uint8ArrayType, arrayDepth - 1];
			case "gunichar":
				return [StringType, arrayDepth - 1];
		}
	}

	const resolvedName = resolvePrimitiveType(name);

	if (resolvedName) {
		return [resolvedName, arrayDepth];
	} else {
		return null;
	}
}

/**
 * Check if a type name is a primitive type
 */
export function isPrimitiveType(name: string): boolean {
	return resolvePrimitiveType(name) !== null;
}

/**
 * Resolve primitive type names to TypeExpression instances
 */
export function resolvePrimitiveType(name: string): TypeExpression | null {
	switch (name) {
		case "":
			console.error(`Resolving '' to any on ${name}`);
			return AnyType;
		case "filename":
			return StringType;
		// Pass this through
		case "GType":
			return new TypeIdentifier("GType", "GObject");
		case "utf8":
			return StringType;
		case "void": // Support TS "void"
		case "none":
			return VoidType;
		// TODO Some libraries are bad and don't use g-prefixed numerical types
		case "uint":
		case "int":
		case "uint8":
		case "int8":
		case "uint16":
		case "int16":
		case "uint32":
		case "int32":
		case "int64":
		case "uint64":
		case "double":
		case "long":
		case "float":
		// Most libraries will use these though:
		case "gshort":
		case "guint32":
		case "guint16":
		case "gint16":
		case "gint8":
		case "gint32":
		case "gushort":
		case "gfloat":
		case "gchar":
		case "guint":
		case "glong":
		case "gulong":
		case "gint":
		case "guint8":
		case "guint64":
		case "gint64":
		case "gdouble":
		case "gssize":
		case "gsize":
			return NumberType;
		case "gboolean":
			return BooleanType;
		case "gpointer": // This is typically used in callbacks to pass data, so we'll allow anything.
			return AnyType;
		case "object": // Support TS "object"
			return ObjectType;
		case "va_list":
			return AnyType;
		case "guintptr": // You can't use pointers in GJS! (at least that I'm aware of)
			return NeverType;
		case "never": // Support TS "never"
			return NeverType;
		case "unknown": // Support TS "unknown"
			return UnknownType;
		case "any": // Support TS "any"
			return AnyType;
		case "this": // Support TS "this"
			return ThisType;
		case "number": // Support TS "number"
			return NumberType;
		case "gunichar":
		case "string": // Support TS "string"
			return StringType;
		case "boolean": // Support TS "boolean"
			return BooleanType;
	}

	return null;
}

/**
 * Resolve directional types based on GIR direction
 */
export function resolveDirectedType(type: TypeExpression, direction: GirDirection): TypeExpression | null {
	if (type instanceof ArrayType) {
		if (
			(direction === GirDirection.In || direction === GirDirection.Inout) &&
			type.type.equals(Uint8ArrayType) &&
			type.arrayDepth === 0
		) {
			return new BinaryType(type, StringType);
		} else {
			// Rewrap arrays if they have directional types
			return type.rewrap(resolveDirectedType(type.type, direction) ?? type.type);
		}
	} else if (type instanceof TypeIdentifier) {
		if ((direction === GirDirection.In || direction === GirDirection.Inout) && type.is("GLib", "Bytes")) {
			return new BinaryType(type, Uint8ArrayType);
		} else if (type.is("GObject", "Value")) {
			if (direction === GirDirection.In || direction === GirDirection.Inout) {
				return new BinaryType(type, AnyType);
			} else {
				// GJS converts GObject.Value out parameters to their unboxed type, which we don't know,
				// so type as `unknown`
				return UnknownType;
			}
		} else if (type.is("GLib", "HashTable")) {
			if (direction === GirDirection.In) {
				return new BinaryType(new NativeType("{ [key: string]: any }"), type);
			} else {
				return type;
			}
		}
	}

	return null;
}
