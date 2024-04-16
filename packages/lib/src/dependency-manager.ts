import { parser, GirXML, GirRepository } from '@gi.ts/parser'
import { readFile } from 'fs/promises'

import { findFileInDirs, splitModuleName } from './utils.js'
import { Logger } from './logger.js'
import { Transformation } from './transformation.js'
import { LibraryVersion } from './library-version.js'

import type { Dependency, OptionsGeneration, GirInclude } from './types/index.js'
import type { GirModule } from './gir-module.js'
import { GirNSRegistry } from './registry.js'

export class DependencyManager extends GirNSRegistry {
    protected log: Logger
    protected transformation: Transformation

    protected _cache: { [packageName: string]: Dependency } = {}

    static instance?: DependencyManager

    protected constructor(protected readonly config: OptionsGeneration) {
        super()

        this.transformation = Transformation.getSingleton(config)
        this.log = new Logger(config.verbose, 'DependencyManager')
    }

    /**
     * Get the DependencyManager singleton instance
     */
    static getInstance(config?: OptionsGeneration): DependencyManager {
        if (this.instance) {
            return this.instance
        }
        if (!config) {
            throw new Error('config is required if DependencyManager is not initialized')
        }
        this.instance = new DependencyManager(config)
        return this.instance
    }

    protected parseArgs(namespaceOrPackageName: string, version?: string) {
        let packageName: string
        let namespace: string
        if (version) {
            namespace = namespaceOrPackageName
            packageName = `${namespace}-${version}`
        } else {
            packageName = namespaceOrPackageName
            const { namespace: _namespace, version: _version } = splitModuleName(packageName)
            namespace = _namespace
            version = _version
        }
        return { packageName, namespace, version }
    }

    /**
     * Get all dependencies in the cache
     * @returns All dependencies in the cache
     */
    all(): Dependency[] {
        return Object.values(this._cache)
    }

    getAllPackageNames(): string[] {
        return Object.keys(this._cache)
    }

    /**
     * Get the core dependencies
     * @returns
     */
    async core(): Promise<Dependency[]> {
        return [await this.get('GObject-2.0'), await this.get('GLib-2.0')]
    }

    createImportProperties(namespace: string, packageName: string) {
        const importPath = this.createImportPath(packageName)
        const importDef = this.createImportDef(namespace, importPath)
        const importName = this.transformation.transformImportName(packageName)
        const importNamespace = this.transformation.transformModuleNamespaceName(packageName)
        return {
            importPath,
            importDef,
            importName,
            importNamespace,
        }
    }

    createImportPath(packageName: string): string {
        const importName = this.transformation.transformImportName(packageName)
        const importPath = `${this.config.npmScope}/${importName}`
        return importPath
    }

    createImportDef(namespace: string, importPath: string): string {
        return this.config.noNamespace
            ? `import type * as ${namespace} from '${importPath}'`
            : `import type ${namespace} from '${importPath}';`
    }

    /**
     * Get the dependency object by packageName
     * @param packageName The package name (with version affix) of the dependency
     * @returns The dependency object
     */
    async get(packageName: string): Promise<Dependency>
    /**
     * Get the dependency object by namespace and version
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @returns The dependency object
     */
    async get(namespace: string, version: string): Promise<Dependency>
    /**
     * Get the dependency object by {@link GirRepository}
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @returns The dependency object
     */
    async get(repo: GirRepository): Promise<Dependency>
    async get(namespaceOrPackageNameOrRepo: string | GirRepository, version?: string): Promise<Dependency> {
        let packageName: string
        let namespace: string
        if (typeof namespaceOrPackageNameOrRepo === 'string') {
            // Special case for Gjs
            if (namespaceOrPackageNameOrRepo === 'Gjs') {
                return this.getGjs()
            }

            const args = this.parseArgs(namespaceOrPackageNameOrRepo, version)
            version = args.version
            packageName = args.packageName
            namespace = args.namespace
        } else {
            // TODO: Move this block to  this.parseArgs
            const repo = namespaceOrPackageNameOrRepo
            const ns = repo.namespace?.[0]
            if (!ns) {
                throw new Error('Invalid GirRepository')
            }
            version = ns.$.version
            namespace = ns.$.name
            packageName = `${namespace}-${version}`
        }

        if (this._cache[packageName]) {
            const dep = this._cache[packageName]
            return dep
        }
        const filename = `${packageName}.gir`
        const { exists, path } = findFileInDirs(this.config.girDirectories, filename)

        let girXML: GirXML | null = null
        if (path) {
            girXML = parser.parseGir(await readFile(path, 'utf8'))
        }

        const dependency: Dependency = {
            namespace,
            exists,
            filename,
            path,
            packageName,
            version: version || '0.0',
            /**
             * TODO: married this with `girModule.libraryVersion`
             */
            libraryVersion: new LibraryVersion(),
            girXML,
            ...this.createImportProperties(namespace, packageName),
        }

        this._cache[packageName] = dependency

        return dependency
    }

    /**
     * Get all dependencies with the given namespace
     * @param namespace The namespace of the dependency
     * @returns All dependencies with the given namespace
     */
    list(namespace: string): Dependency[] {
        const packageNames = this.all()
        const candidates = packageNames.filter((dep) => {
            return dep.namespace === namespace
        })
        return candidates
    }

    /**
     * Get girModule for dependency
     * @param girModules
     * @param packageName
     */
    getModule(girModules: GirModule[], dep: Dependency): GirModule | undefined {
        return girModules.find(
            (m) => m.packageName === dep.packageName && m.namespace === dep.namespace && m.version === dep.version,
        )
    }

    /**
     * Add all dependencies from an array of gir modules
     * @param girModules
     */
    async addAll(girModules: GirModule[]): Promise<Dependency[]> {
        for (const girModule of girModules) {
            await this.get(girModule.namespace, girModule.version || '0.0')
        }
        return this.all()
    }

    /**
     * Transforms a gir include object array to a dependency object array
     * @param girIncludes - Array of gir includes
     * @returns Array of dependencies
     */
    async fromGirIncludes(girIncludes: GirInclude[]): Promise<Dependency[]> {
        const dependencies: Dependency[] = []
        for (const i of girIncludes) {
            dependencies.unshift(await this.get(i.$.name, i.$.version || '0.0'))
        }
        return dependencies
    }

    /**
     * Check if multiple dependencies with the given namespace exist in the cache
     * @param namespace The namespace of the dependency
     * @returns
     */
    hasConflict(namespace: string): boolean {
        const packageNames = this.getAllPackageNames()
        const candidates = packageNames.filter((packageName) => {
            return packageName.startsWith(`${namespace}-`) && this._cache[packageName].namespace === namespace
        })

        return candidates.length > 1
    }

    /**
     * get the latest version of the dependency with the given namespace
     * @param namespace The namespace of the dependency
     * @returns The latest version of the dependency
     */
    getLatestVersion(namespace: string): Dependency | undefined {
        const candidates = this.list(namespace)
        const latestVersion = candidates
            .sort((a, b) => {
                return a.version.localeCompare(b.version)
            })
            .pop()
        return latestVersion
    }

    /**
     * Check if the given version is the latest version of the dependency
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @returns
     */
    isLatestVersion(namespace: string, version: string): boolean {
        const latestVersion = this.getLatestVersion(namespace)
        return latestVersion?.version === version
    }

    /**
     * Find a dependency by it's namespace from the cache, if multiple versions are found, the latest version is returned
     * @param namespace The namespace of the dependency
     * @returns The dependency object or null if not found
     */
    find(namespace: string): Dependency | null {
        // Special case for Gjs
        if (namespace === 'Gjs') {
            return this.getGjs()
        }

        const packageNames = this.getAllPackageNames()
        const candidates = packageNames.filter((packageName) => {
            return packageName.startsWith(`${namespace}-`) && this._cache[packageName].namespace === namespace
        })

        if (candidates.length > 1) {
            this.log.warn(`Found multiple versions of ${namespace}: ${candidates.join(', ')}`)
        }

        const latestVersion = candidates.sort().pop()

        if (latestVersion && this._cache[latestVersion]) {
            const dep = this._cache[latestVersion]
            return dep
        }

        return null
    }

    protected getPseudoPackage(packageName: string): Dependency {
        if (this._cache[packageName]) {
            return this._cache[packageName]
        }

        const dep: Dependency = {
            namespace: packageName,
            exists: true,
            filename: '',
            path: '',
            packageName: packageName,
            version: '0.0',
            libraryVersion: new LibraryVersion(),
            girXML: null,
            ...this.createImportProperties(packageName, packageName),
        }

        return dep
    }

    getGjs(): Dependency {
        return this.getPseudoPackage('Gjs')
    }
}
