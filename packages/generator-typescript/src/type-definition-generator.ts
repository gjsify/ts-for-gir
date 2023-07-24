import { Generator } from '@ts-for-gir/generator-base'
import { PackageDataParser } from './package-data-parser.js'

import type { GirModule } from '@ts-for-gir/lib'

import { mkdir, writeFile } from 'fs/promises'
import { Logger, GENERATING_TYPES_DONE } from '@ts-for-gir/lib'

import type { GenerateConfig, GirModulesGrouped } from '@ts-for-gir/lib'

import prettier from 'prettier'

import { dirname, join as buildPath, resolve as resolvePath } from 'path'

import * as lib from '@gi.ts/lib'

class TypeScriptFormatter extends lib.Formatter {
    format(input: string): string {
        try {
            return prettier.format(input, {
                parser: 'typescript',
                printWidth: 120,
                tabWidth: 4,
            })
        } catch (error) {
            console.error('Failed to format output...')
            console.error(input)
            throw error
        }
    }
}

export class GiTsTypeDefinitionGenerator implements Generator {
    protected log: Logger
    protected packageData?: PackageDataParser

    /** Override config, used to override the config temporarily to generate both ESM and CJS for NPM packages */
    protected overrideConfig: Partial<GenerateConfig> = {}

    /** Get the current config, including the override config */
    protected get config(): GenerateConfig {
        return { ...this._config, ...this.overrideConfig }
    }

    /**
     * @param _config The config to use without the override config
     */
    constructor(protected readonly _config: GenerateConfig) {
        this.log = new Logger(this.config.environment, this.config.verbose, GiTsTypeDefinitionGenerator.name)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async start(girModules: GirModule[], _girModulesGrouped: GirModulesGrouped[] = []) {
        const registry = lib.createRegistry()

        // Register a 'dts' formatter so our output looks decent.
        registry.registerFormatter('dts', new TypeScriptFormatter())
        registry.registerFormatter('dts-inline', new TypeScriptFormatter())

        // type GirMap = Map<
        //     string,
        //     {
        //         [version: string]: () => GirXML
        //     }
        // >

        // const girs = await resolveLibraries(
        //     {
        //         ...(docs.dependencies || {}),
        //         ...(docs.libraries || {}),
        //     },
        //     verbose,
        //     typeof docs.searchPath === 'string' ? [docs.searchPath] : docs.searchPath ?? [],
        // )

        const verbose = this.config.verbose
        const inferGenerics = true
        const withDocs = true
        this.log.log('Loading GIR files...')

        // for (const girModule of Array.from(girModules)) {
        //     const { libraryVersion, namespace: name } = girModule
        //     for (const version of Object.keys(library)) {
        //         const doc = library[version]
        //         const src = await readFile(doc.path, { encoding: 'utf8' })
        //         const result = () => parser.parseGir(src)

        //         gir.set(name, {
        //             ...(gir.get(name) ?? {}),
        //             [version]: result,
        //         })
        //     }
        // }

        registry.registerLoader(
            {
                load(namespace, version) {
                    if (verbose) {
                        console.log(`Loading ${namespace} ${version}...`)
                    }

                    const xml =
                        girModules.find((girModule) => {
                            return girModule.version === version && girModule.namespace === namespace
                        })?.xml ?? null

                    if (!xml) throw new Error(`Failed to find: ${namespace} ${version}`)

                    return xml
                },
                loadAll(namespace) {
                    if (verbose) {
                        console.log(`Loading all versions of ${namespace}...`)
                    }

                    const xmls = girModules
                        .filter((girModule) => girModule.namespace === namespace)
                        .map((girModule) => girModule.xml)

                    return xmls
                },
            },
            {
                loadDocs: withDocs,
                propertyCase: 'both',
                verbose,
            },
        )

        registry.transform({
            inferGenerics,
            verbose,
        })

        // let girsToGenerate: { [lib: string]: string | string[] }

        // if (all) {
        //     girsToGenerate = Object.fromEntries(
        //         [...girs.entries()].map(([k, v]) => {
        //             return [k, Object.keys(v)] as const
        //         }),
        //     )
        // } else if (typeof docs.libraries === 'object') {
        //     girsToGenerate = docs.libraries
        // } else {
        //     console.error('No libraries selected to generate.')
        //     return
        // }

        const file_extension = 'd.ts'
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        const outputFormat: string = 'folder'
        const format = 'dts'
        const versionedOutput = true
        const promisify = true

        const versionedImports = true
        const noAdvancedVariants = true
        const importPrefix = '@girs/'
        const emitMetadata = false

        const noPrettyPrint = false
        const noInitTypes = true
        const output_base = this.config.outdir ?? './types'
        const dir = buildPath(output_base)
        try {
            await mkdir(dir, { recursive: true })
        } catch {}

        // Generate the content
        await Promise.all(
            girModules.map(async (girModule) => {
                let generated: lib.GeneratedModule | null = null

                const output = girModule.namespace
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                let version_suffix = versionedOutput ? girModule.version : ''

                // Hardcode harfbuzz for now...
                if (output.toLowerCase() === 'harfbuzz' && version_suffix === '0') {
                    version_suffix = '2'
                }

                const output_slug = `${output.toLowerCase()}-${version_suffix}`

                const name = girModule.namespace
                const version = girModule.version

                generated = await lib.generateModule(
                    {
                        outputPath: resolvePath(buildPath(output_base, output_slug)),
                        outputFormat,
                        format,
                        promisify,
                        withDocs,
                        versionedOutput,
                        versionedImports,
                        noAdvancedVariants,
                        importPrefix,
                        emitMetadata,
                        verbose,
                        noPrettyPrint,
                        noInitTypes,
                        versionFormat: '{namespace-lower}-{version}',
                    },
                    registry,
                    name,
                    version,
                )

                if (!generated) {
                    console.error(`Failed to generate ${name} ${version}!`)
                    return
                }

                const { formattedOutput, meta } = generated
                let file: string

                if (outputFormat === 'file') {
                    file = buildPath(output_base, `${output_slug}.${file_extension}`)
                } else if (outputFormat === 'folder') {
                    file = buildPath(output_base, `${output_slug}`, `${output_slug}.${file_extension}`)
                } else {
                    throw new Error(`Unknown output format: ${outputFormat}.`)
                }

                if (outputFormat === 'folder') {
                    const directory = dirname(file)

                    try {
                        await mkdir(directory)
                    } catch {}
                }

                if (emitMetadata) {
                    const metaData = JSON.stringify(meta, null, 4)

                    if (outputFormat === 'folder') {
                        const directory = dirname(file)
                        const metaPath = buildPath(directory, 'doc.json')

                        await writeFile(metaPath, metaData)
                    } else {
                        const metaPath = buildPath(output_base, `${output_slug}.doc.json`)

                        await writeFile(metaPath, metaData)
                    }
                }

                await writeFile(file, formattedOutput)
            }),
        )

        const identifiers = lib.getSanitizedIdentifiers()

        if (identifiers.size > 0) {
            console.error('The following types were prefixed with __ to preserve valid JavaScript identifiers.')
            for (const [sanitized, unsanitized] of identifiers.entries()) {
                console.error(`${unsanitized} = ${sanitized}`)
            }
        }

        this.log.success(GENERATING_TYPES_DONE)
    }
}
