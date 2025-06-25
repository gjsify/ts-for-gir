import { RESERVED_NAMESPACE_NAMES } from "../constants.ts";
import { isFirstCharNumeric, upperCamelCase } from "./strings.ts";

// Reserved words for identifier sanitization
const reservedWords = [
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
	"else",
	"enum",
	"eval",
	"export",
	"extends",
	"false",
	"final",
	"finally",
	"for",
	"function",
	"goto",
	"if",
	"implements",
	"import",
	"in",
	"instanceof",
	"interface",
	"let",
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
	"yield",
];

// Map to store sanitized identifiers
export const SanitizedIdentifiers = new Map<string, string>();

/**
 * Transform a package name to import name format (lowercase)
 * @param packageName The package name to transform
 * @returns The transformed import name
 */
export function transformImportName(packageName: string): string {
	return packageName.toLowerCase();
}

/**
 * Transform a module namespace name to the proper format
 * Handles numeric names and reserved namespace names
 * @param name The namespace name to transform
 * @returns The transformed namespace name
 */
export function transformModuleNamespaceName(name: string): string {
	// Handle numeric names - prepend 'TODO_' if name starts with a number
	name = transformNumericName(name);

	// Convert to upperCamelCase
	name = upperCamelCase(name);

	// Handle reserved namespace names
	if (RESERVED_NAMESPACE_NAMES[name]) {
		name = `${name}_`;
	}

	return name;
}

/**
 * Transform names starting with numbers by prepending 'TODO_'
 * In JavaScript there can be no variables, methods, class names or enum names that start with a number
 * @param name The name to transform
 * @returns The transformed name
 */
function transformNumericName(name: string): string {
	if (isFirstCharNumeric(name)) {
		name = `TODO_${name}`;
	}
	return name;
}

/**
 * Sanitize identifier name to be valid JavaScript identifier
 * @param namespace The namespace for the identifier (can be null)
 * @param name The name to sanitize
 * @returns The sanitized identifier name
 */
export function sanitizeIdentifierName(namespace: string | null, name: string): string {
	// This is a unique case where the name is "empty".
	if (name === "") {
		return "''";
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

/**
 * Sanitize namespace name - fix broken namespacing in some GIRs
 * @param namespace The namespace to sanitize
 * @returns The sanitized namespace
 */
export function sanitizeNamespace(namespace: string): string {
	if (namespace === "Tracker_Vala") {
		return "Tracker";
	}

	return namespace;
}

/**
 * Sanitize member names for safe usage
 * @param name The member name to sanitize
 * @returns The sanitized member name
 */
export function sanitizeMemberName(name: string): string {
	// This is a unique case where the name is "empty".
	if (name === "") {
		return "''";
	}

	return name.replace(/[^A-z0-9_]/gi, "_");
}

/**
 * Check if a name would be invalid as JavaScript identifier
 * @param name The name to check
 * @returns True if the name would be invalid
 */
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
