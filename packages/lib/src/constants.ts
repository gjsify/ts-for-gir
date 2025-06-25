import { join } from "node:path";
import type { LibraryVersion } from "./library-version.ts";
import { readJsonFile } from "./utils/files.ts";

export const COMMENT_REG_EXP = /\/\*.*\*\//g;
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g;
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g;
export const NEW_LINE_REG_EXP = /[\n\r]+/g;

export const PACKAGE = await readJsonFile<{
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
}>(join(process.cwd(), "./package.json"));

export const APP_NAME = "ts-for-gir";
export const APP_USAGE = "TypeScript type definition generator for GObject introspection GIR files";
export const APP_SOURCE = "https://github.com/gjsify/ts-for-gir";
export const APP_VERSION = PACKAGE.version;

export const PACKAGE_DESC = (packageName: string, libraryVersion?: LibraryVersion) => {
	if (libraryVersion) {
		return `GJS TypeScript type definitions for ${packageName}, generated from library version ${libraryVersion.toString()}`;
	}
	return `GJS TypeScript type definitions for ${packageName}`;
};
export const PACKAGE_KEYWORDS = (packageName: string) => {
	return `"Gir", "TypeScript", "types", "GObject-Introspection", "GJS", "${packageName}"`;
};

/** The reserved variable names listed here cannot be resolved simply by quotation marks */
export const RESERVED_QUOTE_VARIABLE_NAMES = ["constructor"];

export const RESERVED_VARIABLE_NAMES = [
	"in",
	"function",
	"true",
	"false",
	"break",
	"arguments",
	"eval",
	"default",
	"new",
	"extends",
	"with",
	"var",
	"class",
	"delete",
	"return",
	"constructor",
	"this", // TODO check if this is used as we would use this in javascript, if so, this is only allowed as the first parameter
];

export const RESERVED_CLASS_NAMES = [
	"break",
	"boolean",
	"case",
	"catch",
	"class",
	"const",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"export",
	"extends",
	"false",
	"finally",
	"for",
	"function",
	"if",
	"implements",
	"import",
	"in",
	"instanceof",
	"interface",
	"let",
	"new",
	"number",
	"package",
	"private",
	"protected",
	"public",
	"return",
	"static",
	"super",
	"switch",
	"string",
	"this",
	"throw",
	"true",
	"try",
	"typeof",
	"var",
	"void",
	"while",
	"with",
	"yield",
];

export const RESERVED_FUNCTION_NAMES = ["false", "true", "break"];

export const RESERVED_NAMESPACE_NAMES = {};
