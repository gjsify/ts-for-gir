import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get __filename on ESM
export const __filename = fileURLToPath(import.meta.url)
// Get __dirname on ESM
export const __dirname = dirname(__filename)

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
