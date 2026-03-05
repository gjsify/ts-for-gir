import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { LibraryVersion } from "./library-version.ts";

export const COMMENT_REG_EXP = /\/\*.*\*\//g;
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g;
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g;
export const NEW_LINE_REG_EXP = /[\n\r]+/g;

/**
 * Package information interface for package.json
 */
interface Package {
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
}

/**
 * Resolves the current package's package.json path
 * Uses import.meta.url for ES Module compatibility
 * Works both in workspace and after publishing
 */
function resolvePackageJson(): string {
	try {
		// Get the directory of the current module
		const currentModulePath = fileURLToPath(import.meta.url);
		const currentDir = dirname(currentModulePath);

		// Go up to the package root (src/ -> package root)
		const packageRoot = join(currentDir, "..");
		const packageJsonPath = join(packageRoot, "package.json");

		return packageJsonPath;
	} catch (error) {
		throw new Error(`Unable to resolve package.json path: ${error instanceof Error ? error.message : "Unknown error"}`);
	}
}

/**
 * Reads and parses the current package's package.json file synchronously
 * Contains version and metadata for this specific package
 */
function readPackageSync(): Package {
	try {
		const packagePath = resolvePackageJson();
		const content = readFileSync(packagePath, "utf-8");
		return JSON.parse(content) as Package;
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		throw new Error(`Failed to read package.json: ${message}`);
	}
}

// Read package information once at module load
export const PACKAGE = readPackageSync();

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

export const RESERVED_NAMESPACE_NAMES: Record<string, boolean> = {};
