import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { LibraryVersion } from "./library-version.ts";

const require = createRequire(import.meta.url);

export const COMMENT_REG_EXP = /\/\*.*\*\//g;
export const PARAM_REG_EXP = /[0-9a-zA-Z_]*:/g;
export const OPT_PARAM_REG_EXP = /[0-9a-zA-Z_]*\?:/g;
export const NEW_LINE_REG_EXP = /[\n\r]+/g;

/**
 * Package information interface for workspace root package.json
 */
interface WorkspacePackage {
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
}

/**
 * Resolves the workspace root package.json path
 * Uses require.resolve to find the correct path regardless of execution context
 */
function resolveWorkspacePackageJson(): string {
	try {
		// Try to resolve from the workspace root by going up from this package
		// @ts-for-gir/lib -> ts-for-gir root
		return require.resolve("../../../package.json");
	} catch {
		// Fallback: try to resolve from current package's package.json location
		try {
			const currentPackageJson = require.resolve("@ts-for-gir/lib/package.json");
			return join(dirname(dirname(currentPackageJson)), "package.json");
		} catch {
			throw new Error("Unable to resolve workspace package.json path");
		}
	}
}

/**
 * Reads and parses the workspace package.json file synchronously
 * Contains version and metadata shared across all workspace packages
 */
function readWorkspacePackageSync(): WorkspacePackage {
	try {
		const packagePath = resolveWorkspacePackageJson();
		// Use dynamic import to avoid top-level await in constants
		const { readFileSync } = require("node:fs");
		const content = readFileSync(packagePath, "utf-8");
		return JSON.parse(content) as WorkspacePackage;
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		throw new Error(`Failed to read workspace package.json: ${message}`);
	}
}

// Read package information once at module load
export const PACKAGE = readWorkspacePackageSync();

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
