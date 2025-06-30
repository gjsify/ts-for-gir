import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);

/**
 * Package information interface for workspace root package.json
 * All packages in the workspace share the same version from the root
 */
interface WorkspacePackage {
	version: string;
	name: string;
	description: string;
}

/**
 * Resolves the workspace root package.json path
 * Uses require.resolve to find the correct path regardless of execution context
 */
function resolveWorkspacePackageJson(): string {
	try {
		// Try to resolve from the workspace root by going up from this package
		// @ts-for-gir/reporter -> ts-for-gir root
		return require.resolve("../../../package.json");
	} catch {
		// Fallback: try to resolve from current package's package.json location
		try {
			const currentPackageJson = require.resolve("@ts-for-gir/reporter/package.json");
			return join(dirname(dirname(currentPackageJson)), "package.json");
		} catch {
			throw new Error("Unable to resolve workspace package.json path");
		}
	}
}

/**
 * Reads and parses the workspace package.json file
 * Contains version and metadata shared across all workspace packages
 */
function readWorkspacePackage(): WorkspacePackage {
	try {
		const packagePath = resolveWorkspacePackageJson();
		const content = readFileSync(packagePath, "utf-8");
		return JSON.parse(content) as WorkspacePackage;
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		throw new Error(`Failed to read workspace package.json: ${message}`);
	}
}

// Read package information once at module load
const WORKSPACE_PACKAGE = readWorkspacePackage();

/**
 * The current version of ts-for-gir
 * Shared across all workspace packages from the root package.json
 */
export const REPORTER_VERSION = WORKSPACE_PACKAGE.version;

/**
 * The name of the workspace project
 */
export const PACKAGE_NAME = WORKSPACE_PACKAGE.name;

/**
 * The description of the workspace project
 */
export const PACKAGE_DESCRIPTION = WORKSPACE_PACKAGE.description;
