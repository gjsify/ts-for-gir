import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Get __filename on ESM
const __filename = fileURLToPath(import.meta.url)
// Get __dirname on ESM, resolve to the root directory of this package
export const __dirname = resolve(dirname(__filename), '..')

export const mergeLargeStringArrays = (target: string[], source: string[], chunkSize: number = 1000): string[] => {
    for (let i = 0; i < source.length; i += chunkSize) {
        target.push(...source.slice(i, i + chunkSize))
    }
    return target
}

export const wrapIntoAmbientModule = (
    namespace: string,
    version: string | null,
    content: string[],
    target: string[] = [],
    options: { protocol?: string } = {},
): string[] => {
    target.push(
        `declare module '${options.protocol ? `${options.protocol}://` : ''}${namespace}${version ? `?version=${version}` : ''}' {`,
    )
    mergeLargeStringArrays(target, content)
    target.push('}')
    return target
}
