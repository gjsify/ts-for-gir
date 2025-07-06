import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Common paths where GIR types might be located
 */
export const COMMON_TYPES_PATHS = [
	path.resolve("./@types"),
	path.resolve("../@types"),
	path.resolve("../../@types"),
	path.resolve("./types"),
	path.resolve("../types"),
	path.resolve("../../types"),
] as const;

/**
 * Find the first available types directory that contains .d.ts files
 */
export function findTypesPath(): string | undefined {
	for (const possiblePath of COMMON_TYPES_PATHS) {
		try {
			if (fs.existsSync(possiblePath)) {
				// Check if it contains .d.ts files
				const files = fs.readdirSync(possiblePath);
				if (files.some((file) => file.endsWith(".d.ts"))) {
					return possiblePath;
				}
			}
		} catch {
			// Continue to next path
		}
	}
	return undefined;
}
