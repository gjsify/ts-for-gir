import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Package information read from package.json
 * All packages in the workspace share the same version
 */
const PACKAGE = JSON.parse(readFileSync(join(process.cwd(), "./package.json"), "utf-8")) as {
	version: string;
	name: string;
	description: string;
};

/**
 * The current version of the reporter package
 * Read from the workspace package.json to ensure consistency
 */
export const REPORTER_VERSION = PACKAGE.version;

/**
 * The name of the package
 */
export const PACKAGE_NAME = PACKAGE.name;

/**
 * The description of the package
 */
export const PACKAGE_DESCRIPTION = PACKAGE.description;
