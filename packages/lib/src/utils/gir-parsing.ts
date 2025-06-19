import type { 
    GirDocElement, 
    GirInfoAttrs, 
    GirConstantElement, 
    GirCallableReturn, 
    GirFieldElement,
    GirCallableParamElement
} from "@gi.ts/parser";
import { GirDirection } from "@gi.ts/parser";
import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { deprecatedVersion, introducedVersion, isDeprecated } from "./girs.ts";
import type { IntrospectedMetadata } from "../gir/base.ts";
import { 
    TypeExpression, 
    VoidType, 
    ArrayType, 
    ClosureType, 
    NullableType, 
    TypeIdentifier, 
    GenerifiedTypeIdentifier, 
    NativeType 
} from "../gir.ts";
import { parseTypeExpression, resolvePrimitiveArrayType, isPrimitiveType } from "./types.ts";

/**
 * Parse documentation from a GIR element
 */
export function parseDoc(element: GirDocElement): string | null {
    const el = element.doc?.[0]?._;

    return el ? `${el}` : null;
}

/**
 * Parse deprecated documentation from a GIR element
 */
export function parseDeprecatedDoc(element: GirDocElement): string | null {
    return element["doc-deprecated"]?.[0]?._ ?? null;
}

/**
 * Parse metadata from a GIR element
 */
export function parseMetadata(element: { $: GirInfoAttrs } & GirDocElement): IntrospectedMetadata | undefined {
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

/**
 * This function determines whether a given type is a "pointer type"...
 * Any type where the c:type ends with *
 */
function isPointerType(types: import("@gi.ts/parser").GirType[] | undefined) {
    const type = types?.[0];
    if (!type) return false;

    const ctype = type.$["c:type"];
    if (!ctype) return false;

    const typeName = type.$.name;
    if (!typeName) return false;

    if (isPrimitiveType(typeName)) return false;

    return ctype.endsWith("*");
}

/**
 * Decode the type from GIR elements
 */
export function getType(
    ns: IntrospectedNamespace,
    param?: GirConstantElement | GirCallableReturn | GirFieldElement
): TypeExpression {
    const modName = ns.namespace;

    if (!param) return VoidType;

    let name = "";
    let arrayDepth: number | null = null;
    let length: number | null = null;
    let isPointer = false;

    const parameter = param as GirCallableParamElement;
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

            const possibleName = arr.type?.[0].$["name"];
            if (possibleName) {
                name = possibleName;
            } else {
                name = "unknown";
                console.log(
                    `Failed to find array type in ${ns.packageName}: `,
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
        const possibleName = parameter.type[0].$["name"];
        if (possibleName) {
            name = possibleName;
        } else {
            name = "unknown";
            console.log(
                `Failed to find type in ${modName}: `,
                JSON.stringify(parameter.type[0].$, null, 4),
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

    const x = name.split(" ");
    if (x.length === 1) {
        name = x[0];
    } else {
        name = x[1];
    }

    let variableType: TypeExpression = parseTypeExpression(ns.namespace, name);

    if (variableType instanceof TypeIdentifier) {
        if (variableType.is("GLib", "List") || variableType.is("GLib", "SList")) {
            // TODO: $?.name was not necessary in gi.ts, but TelepathyLogger
            // fails to generate now.
            const listType = parameter?.type?.[0].type?.[0]?.$?.name;

            if (listType) {
                name = listType;
                variableType = parseTypeExpression(ns.namespace, name);

                arrayDepth = 1;
            }
        } else if (variableType.is("GLib", "HashTable")) {
            const keyType = parameter?.type?.[0]?.type?.[0]?.$.name;
            const valueType = parameter?.type?.[0]?.type?.[1]?.$.name;

            if (keyType && valueType) {
                const key = parseTypeExpression(ns.namespace, keyType);
                const value = parseTypeExpression(ns.namespace, valueType);

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
        (parameter.$.direction === GirDirection.Inout || parameter.$.direction === GirDirection.Out) &&
        (nullable || allowNone) &&
        !(variableType instanceof NativeType)
    ) {
        return new NullableType(variableType);
    }

    if ((!parameter.$?.direction || parameter.$.direction === GirDirection.In) && nullable) {
        return new NullableType(variableType);
    }

    variableType.isPointer = isPointer;

    return variableType;
} 