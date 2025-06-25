import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Get __filename on ESM
const __filename = fileURLToPath(import.meta.url);
// Get __dirname on ESM, resolve to the root directory of this package
export const __dirname = resolve(dirname(__filename), "..");
