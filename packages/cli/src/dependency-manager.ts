import { findFileInDirs } from './utils.js'
import { Logger } from './logger.js'

import type { Dependency, GenerateConfig, GirInclude } from './types/index.js'

export class DependencyManager {
    protected log: Logger

    cache: { [key: string]: Dependency } = {}

    static instance: DependencyManager

    protected constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, 'DependencyManager')
    }

    /**
     * Get the DependencyManager singleton instance
     */
    static getInstance(config: GenerateConfig): DependencyManager {
        if (this.instance) {
            return this.instance
        }
        this.instance = new DependencyManager(config)
        return this.instance
    }

    /**
     * Get the dependency object by namespace and version
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @returns The dependency object
     */
    get(namespace: string, version: string): Dependency {
        const packageName = `${namespace}-${version}`
        if (this.cache[packageName]) {
            return this.cache[packageName]
        }
        const filename = `${packageName}.gir`
        const { exists, path } = findFileInDirs(this.config.girDirectories, filename)
        const dependency: Dependency = {
            namespace,
            exists,
            filename,
            path,
            packageName,
            version,
        }

        this.cache[packageName] = dependency

        return dependency
    }

    /**
     * Transforms a gir include object array to a dependency object array
     * @param girIncludes - Array of gir includes
     * @returns Array of dependencies
     */
    fromGirIncludes(girIncludes: GirInclude[]): Dependency[] {
        const dependencies: Dependency[] = []
        for (const i of girIncludes) {
            dependencies.unshift(this.get(i.$.name, i.$.version || '0.0'))
        }
        return dependencies
    }

    /**
     * Find a dependency by it's namespace from the cache
     * @param namespace The namespace of the dependency
     * @returns The dependency object or null if not found
     */
    find(namespace: string): Dependency | null {
        const packageNames = Object.keys(this.cache)
        const candidates = packageNames.filter((packageName) => {
            return packageName.startsWith(`${namespace}-`) && this.cache[packageName].namespace === namespace
        })

        if (candidates.length > 1) {
            this.log.warn(`Found multiple versions of ${namespace}: ${candidates.join(', ')}`)
        }

        const latestVersion = candidates.sort().pop()

        if (latestVersion) {
            return this.cache[latestVersion]
        }

        return null
    }
}
