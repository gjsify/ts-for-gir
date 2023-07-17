import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get __filename on ESM
export const __filename = fileURLToPath(import.meta.url)
// Get __dirname on ESM
export const __dirname = dirname(__filename)
