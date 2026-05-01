import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Resolves to the root directory of this package in dev mode.
// Wrapped in try/catch so a bundled consumer that lacks `import.meta.url`
// support degrades to "" instead of crashing at module load.
function resolvePackageDir(): string {
	try {
		return resolve(dirname(fileURLToPath(import.meta.url)), "..");
	} catch {
		return "";
	}
}

export const __dirname = resolvePackageDir();
