import { type IntrospectedConstant, IntrospectedField, IntrospectedProperty } from "../gir/index.ts";
import { isInvalid } from "./naming.ts";
import { generateIndent } from "./strings.ts";

/**
 * Generates a TypeScript member name for properties, constants, and fields
 * Handles computed properties and invalid names
 */
export function generateMemberName(tsVar: IntrospectedProperty | IntrospectedConstant | IntrospectedField): string {
	const name = tsVar.name;
	const invalid = isInvalid(name);
	const hasInvalidName = invalid && (tsVar instanceof IntrospectedProperty || tsVar instanceof IntrospectedField);
	const Name = hasInvalidName ? `"${name}"` : name;

	if (!Name) {
		throw new Error('[generateMemberName] "name" not set!');
	}

	const ComputedName = "computed" in tsVar && tsVar.computed ? `[${name}]` : Name;

	return `${ComputedName}`;
}

/**
 * Adds TSDoc comment lines with proper formatting
 * @see https://github.com/microsoft/tsdoc
 */
export function addTSDocCommentLines(lines: string[], indentCount = 0): string[] {
	const def: string[] = [];
	const indent = generateIndent(indentCount);
	def.push(`${indent}/**`);
	for (const line of lines) {
		def.push(`${indent} * ${line}`);
	}
	def.push(`${indent} */`);
	return def;
}

/**
 * Adds an info comment, is used for debugging the generated types
 */
export function addInfoComment(comment?: string, indentCount = 0): string[] {
	const def: string[] = [];
	const indent = generateIndent(indentCount);
	if (comment) {
		def.push("");
		def.push(`${indent}// ${comment}`);
		def.push("");
	}
	return def;
}

/**
 * Merges multiple description arrays with proper indentation and comment
 */
export function mergeDescs(descs: string[], comment?: string, indentCount = 1): string[] {
	const def: string[] = [];
	const indent = generateIndent(indentCount);

	for (const desc of descs) {
		def.push(`${indent}${desc}`);
	}

	if (def.length > 0) {
		def.unshift(...addInfoComment(comment, indentCount));
	}

	return def;
}
