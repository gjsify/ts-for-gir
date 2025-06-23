import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// Get __filename on ESM
const __filename = fileURLToPath(import.meta.url)
// Get __dirname on ESM, resolve to the root directory of this package
export const __dirname = resolve(dirname(__filename), '../..') // TODO: Bundled this must be '..' but unbundled it must be '../..'
