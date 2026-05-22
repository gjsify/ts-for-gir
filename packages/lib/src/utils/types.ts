import type { GirAliasElement } from "@gi.ts/parser";
import { GirDirection } from "@gi.ts/parser";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import {
	AnyType,
	ArrayType,
	BigintOrNumberType,
	BinaryType,
	BooleanType,
	GenerifiedTypeIdentifier,
	makeNullable,
	makeUnion,
	NativeType,
	NeverType,
	NullableType,
	NullType,
	NumberType,
	ObjectType,
	PromiseType,
	RawPointerType,
	StringType,
	ThisType,
	TupleType,
	TypeExpression,
	TypeIdentifier,
	Uint8ArrayType,
	UnknownType,
	VoidType,
} from "../gir.ts";
import { girParsingReporter } from "./gir-parsing.ts";

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
			girParsingReporter.get().reportTypeResolutionWarning("", "unknown", "Resolving empty type name to 'any'");
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
		case "gint":
		case "guint8":
		case "gdouble":
			return NumberType;
		case "glong":
		case "gulong":
		case "guint64":
		case "gint64":
		case "gssize":
		case "gsize":
		case "guintptr": // Integer of the same width as a pointer
		case "time_t": // C standard library time type (seconds since Unix epoch)
		case "ulong": // C standard library unsigned long type
			return BigintOrNumberType;
		case "gboolean":
			return BooleanType;
		case "gpointer":
			// You can't use pointers. Pointer arguments are mostly not exposed
			// in GJS, but any exposed pointer arguments are always marshalled
			// as null pointers. If the argument is nullable, this will combine
			// with `null` to produce `null`, but if the argument isn't nullable
			// it's impossible to pass a valid parameter to the function.
			return RawPointerType;
		case "object": // Support TS "object"
			return ObjectType;
		case "va_list":
			return AnyType;
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
			return makeUnion(type, StringType);
		} else {
			// Rewrap arrays if they have directional types
			return type.rewrap(resolveDirectedType(type.type, direction) ?? type.type);
		}
	} else if (type instanceof TypeIdentifier) {
		if ((direction === GirDirection.In || direction === GirDirection.Inout) && type.is("GLib", "Bytes")) {
			return makeUnion(type, Uint8ArrayType);
		} else if (type.is("GObject", "Value")) {
			if (direction === GirDirection.In || direction === GirDirection.Inout) {
				return makeUnion(type, AnyType);
			} else {
				// GJS converts GObject.Value out parameters to their unboxed type, which we don't know,
				// so type as `unknown`
				return UnknownType;
			}
		} else if (type.is("GLib", "HashTable")) {
			// GJS marshalls `GHashTable<K, V>` to and from a plain JS object
			// in both directions — only string-typed keys (`utf8`, `filename`)
			// and integer-typed keys (`bool`, signed/unsigned 8/16/32-bit
			// ints) are supported. `gunichar` accepts either string or
			// integer. Anything else throws during marshalling — see
			// https://gitlab.gnome.org/GNOME/gjs/-/blob/main/gi/arg.cpp#L316-420
			// and the discussion at
			// https://github.com/gjsify/ts-for-gir/issues/392.
			//
			// The TS type `GLib.HashTable<K, V>` does not represent any value
			// that user code can actually hold — there's no GHashTable
			// constructor exposed to JS. So in EVERY direction we emit the
			// concrete JS shape (`{ [key: string]: V }` for string-keyed,
			// `{ [key: number]: V }` for integer-keyed) and fall back to
			// `never` when the declared key type can't be marshalled —
			// statically encoding that the function can't be called rather
			// than silently lying with a HashTable type that has no runtime
			// instances.
			return hashTableToJsDict(type);
		}
	} else if (type === BigintOrNumberType && direction === GirDirection.Out) {
		// 64-bit integers accept number or bigint, but only return number to JS
		return NumberType;
	} else if (type === RawPointerType && direction === GirDirection.Out) {
		// Raw pointers are always marshalled as JS null.
		return NullType;
	} else if (type instanceof PromiseType) {
		// Propagate direction into the Promise's inner type so e.g. async
		// functions returning 64-bit ints resolve to `Promise<number>` rather
		// than `Promise<bigint | number>`.
		const resolvedInner = resolveDirectedType(type.type, direction);
		if (resolvedInner) return new PromiseType(resolvedInner);
	} else if (type instanceof NullableType) {
		// Walk into the wrapped type and rebuild as NullableType so e.g.
		// `GLib.HashTable<string, string> | null` becomes
		// `{ [key: string]: string } | null` (without the rebuild, the
		// outer NullableType-aware BinaryType branch below would skip
		// this case to preserve NullableType identity, leaving the inner
		// type unrewritten).
		const inner = resolveDirectedType(type.a, direction);
		if (inner !== null) return makeNullable(inner);
	} else if (type instanceof TupleType) {
		// Walk into each tuple element so a `[HashTable<string, V>, …]`
		// (typical async [result, out-params, …] shape) gets each element
		// rewritten. BinaryType's branch below would also match TupleType
		// since it extends OrType → BinaryType is one of its supertypes,
		// but the rebuild via `makeUnion` would collapse tuple semantics
		// into a union — preserve the tuple by rebuilding the same class.
		let changed = false;
		const inner = type.types.map((t) => {
			const resolved = resolveDirectedType(t, direction);
			if (resolved !== null) {
				changed = true;
				return resolved;
			}
			return t;
		});
		if (changed) {
			const [first, ...rest] = inner;
			return new TupleType(first, ...rest);
		}
	} else if (type instanceof BinaryType) {
		// Walk through binary unions like `Promise<T> | void` (the dual-call
		// async overload) so the inner types still get direction propagation.
		const a = resolveDirectedType(type.a, direction) ?? type.a;
		const b = resolveDirectedType(type.b, direction) ?? type.b;
		if (a !== type.a || b !== type.b) return makeUnion(a, b);
	}

	return null;
}

/**
 * Map a `GLib.HashTable<K, V>` reference to the concrete JS object shape
 * GJS marshals it to/from. Direction-independent — the marshalling is
 * symmetric (a method that accepts a HashTable and a method that returns
 * one both see a plain object on the JS side).
 *
 * Key-type rules (per gi/arg.cpp's `gjs_value_from_g_hash` /
 * `gjs_value_to_g_hash`):
 *
 *   string-shaped (`utf8`, `filename`)                 → `{ [key: string]: V }`
 *   integer-shaped (`gboolean`, `gint8`…`guint32`)      → `{ [key: number]: V }`
 *   `gunichar`                                         → `{ [key: string]: V }`
 *                                                        (also accepts numbers,
 *                                                        but the broader string
 *                                                        case is more useful)
 *   anything else (raw pointers, classes, records, …)  → `never`
 *                                                        (uncallable on the JS side)
 *
 * The fallback for "type information missing" (e.g. an introspection
 * record with bare `HashTable` and no generics) is `{ [key: string]: any }`
 * — the most common shape, matching the historical generator output.
 */
function hashTableToJsDict(type: TypeIdentifier): TypeExpression {
	if (!(type instanceof GenerifiedTypeIdentifier) || type.generics.length === 0) {
		// Bare `HashTable` with no generics — emit the catch-all dict shape.
		return new NativeType("{ [key: string]: any }");
	}

	const [keyType, valueType] = type.generics;
	const keyShape = jsKeyShapeFor(keyType);
	if (keyShape === null) {
		// Unsupported key type — function is uncallable from JS.
		return NeverType;
	}

	// Return a TypeExpression subclass that defers printing of V until a
	// real namespace is available (which is the case both at type-resolve
	// time and at template-emit time). A plain `NativeType((options) =>
	// …)` would not work — its callback receives only `options`, not the
	// namespace V's own print needs.
	return new HashTableDictType(keyShape, valueType ?? AnyType);
}

/**
 * Decide which TypeScript index-signature key type a GHashTable key maps to.
 * Returns `null` for unsupported key types — the caller emits `never` so the
 * containing method/property surfaces as uncallable rather than lying with a
 * synthetic key type that doesn't match runtime marshalling.
 */
function jsKeyShapeFor(keyType: TypeExpression): "string" | "number" | null {
	if (keyType === StringType) return "string";
	if (keyType instanceof TypeIdentifier && keyType.is("GLib", "filename")) return "string";
	// Integer-shaped keys: signed/unsigned 8/16/32-bit ints + gboolean
	// (0/1 number) all collapse to TS `number`. 64-bit ints accept either
	// number or bigint at the JS boundary; pick `number` for index keys
	// since object keys are always strings/numbers in JS (no bigint keys).
	if (keyType === NumberType) return "number";
	if (keyType === BooleanType) return "number";
	if (keyType === BigintOrNumberType) return "number";
	return null;
}

/**
 * `{ [key: K]: V }` shape for `GLib.HashTable<K, V>` — a TypeExpression
 * subclass so `V.rootPrint(namespace, options)` happens at emit time with
 * the right namespace, instead of being baked in at type-resolve time.
 */
class HashTableDictType extends TypeExpression {
	constructor(
		readonly keyShape: "string" | "number",
		readonly valueType: TypeExpression,
	) {
		super();
	}

	print(namespace: IntrospectedNamespace, options: import("../types/index.ts").OptionsGeneration): string {
		return `{ [key: ${this.keyShape}]: ${this.valueType.rootPrint(namespace, options)} }`;
	}

	resolve(_namespace: IntrospectedNamespace, _options: import("../types/index.ts").OptionsGeneration): TypeExpression {
		return this;
	}

	equals(type: TypeExpression): boolean {
		return (
			type instanceof HashTableDictType && this.keyShape === type.keyShape && this.valueType.equals(type.valueType)
		);
	}

	rewrap(_type: TypeExpression): TypeExpression {
		return this;
	}

	unwrap(): TypeExpression {
		return this;
	}

	deepUnwrap(): TypeExpression {
		return this.valueType.deepUnwrap();
	}
}
