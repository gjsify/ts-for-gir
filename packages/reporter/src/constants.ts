import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

declare const __TS_FOR_GIR_VERSION__: string;

/**
 * Reads the package version, using the build-time injected value when bundled
 * or falling back to reading package.json in development mode.
 */
function getPackageVersion(): string {
	if (typeof __TS_FOR_GIR_VERSION__ !== "undefined") {
		return __TS_FOR_GIR_VERSION__;
	}
	const currentModulePath = fileURLToPath(import.meta.url);
	const currentDir = dirname(currentModulePath);
	const packageJsonPath = join(currentDir, "..", "package.json");
	const content = readFileSync(packageJsonPath, "utf-8");
	return (JSON.parse(content) as { version: string }).version;
}

export const PACKAGE_VERSION = getPackageVersion();
