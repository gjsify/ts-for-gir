import { deprecatedVersion, GirNamespace, introducedVersion, isDeprecated } from "./namespace.js";
import {
  CallableParamElement,
  Direction,
  AliasElement,
  DocElement,
  InfoAttrs,
  Type,
  ConstantElement,
  CallableReturn,
  FieldElement
} from "@gi.ts/parser";
import {
  TypeIdentifier,
  ThisType,
  ArrayType,
  ClosureType,
  GTypeType,
  BinaryType,
  ObjectType,
  NullableType,
  TypeExpression,
  StringType,
  NumberType,
  BooleanType,
  Uint8ArrayType,
  AnyType,
  UnknownType,
  NeverType,
  VoidType,
  GenerifiedTypeIdentifier,
  GenericType,

  NativeType
} from "../gir.js";
import {GirBase, GirOptions, GirMetadata} from './base.js';
import { GirBaseClass } from "./class.js";
import { TwoKeyMap } from "../util.js";

const reservedWords = [
  // For now, at least, the typescript compiler doesn't throw on numerical types like int, float, etc.
  "abstract",
  "arguments",
  "await",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "const",
  "continue",
  "constructor", // This isn't technically reserved, but it's problematic.
  "debugger",
  "default",
  "delete",
  "do",
  // "double",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "final",
  "finally",
  // "float",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  // "int",
  "interface",
  "let",
  // "long",
  "native",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "throws",
  "transient",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "volatile",
  "while",
  "with",
  "yield"
];

export function getAliasType(modName: string, _ns: GirNamespace, parameter: AliasElement): TypeExpression {
  let name = parameter.type?.[0].$["name"] || "unknown";

  let nameParts = name.split(" ");

  if (nameParts.length === 1) {
    name = nameParts[0];
  } else {
    name = nameParts[1];
  }

  return parseTypeExpression(modName, name);
}

/**
 * This function determines whether a given type is a "pointer type"...
 *
 * Any type where the c:type ends with *
 */
function isPointerType(types: Type[] | undefined) {
  const type = types?.[0];
  if (!type) return false;

  const ctype = type.$["c:type"];
  if (!ctype) return false;

  const typeName = type.$.name;
  if (!typeName) return false;

  if (isPrimitiveType(typeName)) return false;

  return ctype.endsWith("*");
}

/* Decode the type */
export function getType(
  modName: string,
  _ns: GirNamespace,
  param?: ConstantElement | CallableReturn | FieldElement
): TypeExpression {
  if (!param) return VoidType;

  let name = "";
  let arrayDepth: number | null = null;
  let length: number | null = null;
  let isPointer = false;

  let parameter = param as CallableParamElement;
  if (parameter.array && parameter.array[0]) {
    arrayDepth = 1;

    const [array] = parameter.array;

    if (array.$ && array.$.length != null) {
      length = Number.parseInt(array.$.length, 10);

      if (Number.isNaN(length)) {
        throw new Error(`Error parsing array length: ${array.$.length}`);
      }
    }

    if (array.type && array.type[0].$ && array.type[0].$["name"]) {
      name = array.type[0].$["name"];
    } else if (array.array) {
      let arr = array;
      let depth = 1;

      while (Array.isArray(arr.array)) {
        arr = arr.array[0];
        depth++;
      }

      let possibleName = arr.type?.[0].$["name"];
      if (possibleName) {
        name = possibleName;
      } else {
        name = "unknown";
        console.log(
          `Failed to find array type in ${modName}: `,
          JSON.stringify(parameter.$, null, 4),
          "\nMarking as unknown!"
        );
      }
      arrayDepth = depth;
      isPointer = isPointerType(array.type);
    } else {
      name = "unknown";
    }
  } else if (parameter.type && parameter.type[0] && parameter.type[0].$) {
    let possibleName = parameter.type[0].$["name"];
    if (possibleName) {
      name = possibleName;
    } else {
      name = "unknown";
      console.log(
        `Failed to find type in ${modName}: `,
        JSON.stringify(parameter.$, null, 4),
        "\nMarking as unknown!"
      );
    }
    isPointer = isPointerType(parameter.type);
  } else if (parameter.varargs || (parameter.$ && parameter.$.name === "...")) {
    arrayDepth = 1;
    name = "any";
  } else {
    name = "unknown";
    console.log(
      `Unknown varargs type in ${modName}: `,
      JSON.stringify(parameter.$, null, 4),
      "\nMarking as unknown!"
    );
  }

  let closure = null as null | number;

  if (parameter.$ && parameter.$.closure) {
    closure = Number.parseInt(parameter.$.closure, 10);

    if (Number.isNaN(closure)) {
      throw new Error(`Error parsing closure data position: ${parameter.$.closure}`);
    }
  }

  const nullable = parameter.$ && parameter.$["nullable"] === "1";
  const allowNone = parameter.$ && parameter.$["allow-none"] === "1";

  let x = name.split(" ");
  if (x.length === 1) {
    name = x[0];
  } else {
    name = x[1];
  }

  const baseType = parseTypeString(name);

  if (!baseType) {
    throw new Error(`Un-parsable type: ${name}`);
  }

  let variableType: TypeExpression = parseTypeExpression(modName, name);

  if (variableType instanceof TypeIdentifier) {
    if (variableType.is("GLib", "List") || variableType.is("GLib", "SList")) {
      const listType = parameter?.type?.[0].type?.[0]?.$.name;

      if (listType) {
        name = listType;
        variableType = parseTypeExpression(modName, name);

        arrayDepth = 1;
      }
    } else if (variableType.is("GLib", "HashTable")) {
      const keyType = parameter?.type?.[0]?.type?.[0]?.$.name;
      const valueType = parameter?.type?.[0]?.type?.[1]?.$.name;

      if (keyType && valueType) {
        const key = parseTypeExpression(modName, keyType);
        const value = parseTypeExpression(modName, valueType);

        variableType = new GenerifiedTypeIdentifier("HashTable", "GLib", [key, value]);
      }
    }
  }

  if (arrayDepth != null) {
    const primitiveArrayType = resolvePrimitiveArrayType(name, arrayDepth);

    if (primitiveArrayType) {
      const [primitiveName, primitiveArrayDepth] = primitiveArrayType;

      variableType = ArrayType.new({
        type: primitiveName,
        arrayDepth: primitiveArrayDepth,
        length
      });
    } else {
      variableType = ArrayType.new({ type: variableType, arrayDepth, length });
    }
  } else if (closure != null) {
    variableType = ClosureType.new({ type: variableType, user_data: closure });
  }

  if (
    parameter.$ &&
    (parameter.$.direction === "inout" || parameter.$.direction === "out") &&
    (nullable || allowNone) &&
    !(variableType instanceof NativeType)
  ) {
    return new NullableType(variableType);
  }

  if ((!parameter.$?.direction || parameter.$.direction === "in") && nullable) {
    return new NullableType(variableType);
  }

  variableType.isPointer = isPointer;

  return variableType;
}

export const SanitizedIdentifiers = new Map<string, string>();

export function sanitizeIdentifierName(namespace: string | null, name: string): string {
  // This is a unique case where the name is "empty".
  if (name === "") {
    return `''`;
  }

  let sanitized_name = name.replace(/[^A-z0-9_]/gi, "_");

  if (reservedWords.includes(sanitized_name)) {
    sanitized_name = `__${sanitized_name}`;
  }

  if (sanitized_name.match(/^[^A-z_]/) != null) {
    sanitized_name = `__${sanitized_name}`;
  }

  if (namespace && sanitized_name !== name) {
    SanitizedIdentifiers.set(`${namespace}.${name}`, `${namespace}.${sanitized_name}`);
  }

  return sanitized_name;
}

export function sanitizeMemberName(name: string): string {
  // This is a unique case where the name is "empty".
  if (name === "") {
    return `''`;
  }

  return name.replace(/[^A-z0-9_]/gi, "_");
}

export function isInvalid(name: string): boolean {
  if (reservedWords.includes(name)) {
    return true;
  }

  const sanitized = sanitizeMemberName(name);

  if (sanitized.match(/^[^A-z_]/) != null) {
    return true;
  }

  return false;
}

export function parseDoc(element: DocElement): string | null {
  return element.doc?.[0]?._ ?? null;
}

export function parseDeprecatedDoc(element: DocElement): string | null {
  return element["doc-deprecated"]?.[0]?._ ?? null;
}

export function parseMetadata(element: { $: InfoAttrs } & DocElement): GirMetadata | undefined {
  const version = introducedVersion(element);
  const deprecatedIn = deprecatedVersion(element);
  const deprecated = isDeprecated(element);
  const doc = parseDeprecatedDoc(element);

  if (!version && !deprecated && !deprecatedIn && !doc) {
    return undefined;
  }

  return {
    ...(deprecated ? { deprecated } : {}),
    ...(doc ? { deprecatedDoc: doc } : {}),
    ...(deprecatedIn ? { deprecatedVersion: deprecatedIn } : {}),
    ...(version ? { introducedVersion: version } : {})
  };
}

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

export function parseTypeIdentifier(modName: string, type: string): TypeIdentifier {
  const baseType = parseTypeString(type);

  if (baseType.namespace) {
    return new TypeIdentifier(baseType.name, baseType.namespace);
  } else {
    return new TypeIdentifier(baseType.name, modName);
  }
}

export function parseTypeExpression(modName: string, type: string): TypeExpression {
  const baseType = parseTypeString(type);

  if (baseType.namespace) {
    return new TypeIdentifier(baseType.name, baseType.namespace);
  } else {
    const primitiveType = resolvePrimitiveType(baseType.name);

    if (primitiveType !== null) {
      return primitiveType;
    } else {
      return new TypeIdentifier(baseType.name, modName);
    }
  }
}

export function resolvePrimitiveArrayType(name: string, arrayDepth: number): [TypeExpression, number] | null {
  if (arrayDepth > 0) {
    switch (name) {
      case "gint8":
      case "guint8":
        return [Uint8ArrayType, arrayDepth - 1];
    }
  }

  const resolvedName = resolvePrimitiveType(name);

  if (resolvedName) {
    return [resolvedName, arrayDepth];
  } else {
    return null;
  }
}

export function isPrimitiveType(name: string): boolean {
  return resolvePrimitiveType(name) !== null;
}

export function resolvePrimitiveType(name: string): TypeExpression | null {
  switch (name) {
    case "":
      console.error("Resolving '' to any on " + name);
      return AnyType;
    case "filename":
      return StringType;
    // Pass this through
    case "GType":
      return GTypeType;
    case "utf8":
      return StringType;
    case "void": // Support TS "void"
    case "none":
      return VoidType;
    // TODO Some libraries are bad and don't use g-prefixed numerical types
    case "uint32":
    case "int32":
    case "double":
    // Most libraries will use these though:
    case "gshort":
    case "guint32":
    case "guint16":
    case "gint16":
    case "gunichar":
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
    case "long":
      return NumberType;
    case "gboolean":
      return BooleanType;
    case "gpointer": // This is typically used in callbacks to pass data, so we'll allow anything.
      return AnyType;
    case "object":
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
    case "string": // Support TS "string"
      return StringType;
    case "boolean": // Support TS "boolean"
      return BooleanType;
    case "object": // Support TS "object"
      return ObjectType;
  }

  return null;
}

export function resolveDirectedType(type: TypeExpression, direction: Direction): TypeExpression | null {
  if (type instanceof ArrayType) {
    if (
      (direction === Direction.In || direction === Direction.Inout) &&
      type.type.equals(Uint8ArrayType) &&
      type.arrayDepth === 0
    ) {
      return new BinaryType(type, StringType);
    }
  } else if (type instanceof TypeIdentifier) {
    if ((direction === Direction.In || direction === Direction.Inout) && type.is("GLib", "Bytes")) {
      return new BinaryType(type, Uint8ArrayType);
    } else if (type.is("GObject", "Value")) {
      if (direction === Direction.In || direction === Direction.Inout) {
        return new BinaryType(type, AnyType);
      } else {
        // GJS converts GObject.Value out parameters to their unboxed type, which we don't know,
        // so type as `unknown`
        return UnknownType;
      }
    } else if (type.is("GLib", "HashTable")) {
      if (direction === Direction.In) {
        return new BinaryType(new NativeType("{ [key: string]: any }"), type);
      } else {
        return type;
      }
    }
  }

  return null;
}

/**
 * Resolves a class identifier.
 *
 * If the identifier is a class type it is returned,
 * otherwise `null`.
 *
 * @param namespace
 * @param type
 */
export function resolveTypeIdentifier(namespace: GirNamespace, type: TypeIdentifier): GirBaseClass | null {
  const ns = type.namespace;
  const name = type.name;

  const resolved_ns = namespace.assertInstalledImport(ns);

  const pclass = resolved_ns.getClass(name);
  if (pclass) {
    return pclass;
  } else {
    return null;
  }
}

/**
 *
 * @param a
 * @param b
 */
function isTypeConflict(a: TypeExpression, b: TypeExpression) {
  return !a.equals(b) || !b.equals(a);
}

/**
 * Checks if a given type expression in the context of a given this type
 * is a subtype (compatible with) of another type expression in the context
 * of a parent type.
 *
 * @param namespace
 * @param thisType
 * @param parentThisType
 * @param potentialSubtype
 * @param parentType
 */
export function isSubtypeOf(
  namespace: GirNamespace,
  thisType: TypeIdentifier,
  parentThisType: TypeIdentifier,
  potentialSubtype: TypeExpression,
  parentType: TypeExpression
) {
  if (!isTypeConflict(potentialSubtype, parentType)) {
    return true;
  }

  const unwrappedSubtype = potentialSubtype.unwrap();
  let unwrappedParent = parentType.unwrap();

  if (
    (potentialSubtype.equals(ThisType) && unwrappedParent.equals(thisType)) ||
    (parentType.equals(ThisType) && unwrappedSubtype.equals(parentThisType))
  ) {
    return true;
  }

  if (unwrappedParent instanceof GenericType && unwrappedParent.identifier !== "T") {
    // Technically there could be a conflicting generic, but most generic types should specify a replacement for type checking.
    // "T" denotes a local function generic in the current implementation, those can't be ignored.
    if (!unwrappedParent.replacedType) {
      return true;
    }

    // Use the generic replaced type as a stand-in.
    unwrappedParent = unwrappedParent.replacedType;
  }

  if (!(unwrappedSubtype instanceof TypeIdentifier) || !(unwrappedParent instanceof TypeIdentifier)) {
    return false;
  }

  const resolutions =
    namespace.parent.subtypes.get(unwrappedSubtype.name, unwrappedSubtype.namespace) ??
    new TwoKeyMap<string, string, boolean>();
  const resolution = resolutions.get(unwrappedParent.name, unwrappedParent.namespace);

  if (typeof resolution === "boolean") {
    return resolution;
  }

  const resolved = resolveTypeIdentifier(namespace, unwrappedSubtype);

  if (!resolved) {
    return false;
  }
  let x = resolved.resolveParents();

  // This checks that the two types have the same form, regardless of identifier (e.g. A | null and B | null)
  const isStructurallySubtype = potentialSubtype.rewrap(AnyType).equals(parentType.rewrap(AnyType));

  const isSubtype = isStructurallySubtype && x.node.someParent(t => t.getType().equals(unwrappedParent));

  resolutions.set(unwrappedParent.name, unwrappedParent.namespace, isSubtype);

  namespace.parent.subtypes.set(unwrappedSubtype.name, unwrappedSubtype.namespace, resolutions);

  return isSubtype;
}
