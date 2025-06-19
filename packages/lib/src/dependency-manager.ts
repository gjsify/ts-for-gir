import { parser, type GirXML, type GirRepository, type GirNamespace, type GirInclude } from '@gi.ts/parser'
import { readFile } from 'fs/promises'

import { findFilesInDirs, splitModuleName, pascalCase } from './utils/index.ts'
import { sanitizeNamespace } from './utils/index.ts'
import { Logger } from './logger.ts'
import { transformImportName, transformModuleNamespaceName } from './utils/index.ts'
import { LibraryVersion } from './library-version.ts'

import type { Dependency, OptionsGeneration, FileInfo } from './types/index.ts'
import type { GirModule } from './gir-module.ts'
import { GirNSRegistry } from './registry.ts'

export class DependencyManager extends GirNSRegistry {
    protected log: Logger
    protected readonly config: OptionsGeneration
    protected _cache: { [packageName: string]: Dependency } = {}

    static instances: { [key: string]: DependencyManager } = {}

    protected constructor(config: OptionsGeneration) {
        super()
        this.config = config

        this.log = new Logger(config.verbose, 'DependencyManager')
    }

    /**
     * Get the DependencyManager singleton instance
     */
    static getInstance(config?: OptionsGeneration): DependencyManager {
        const configKey = config ? JSON.stringify(config) : Object.keys(this.instances)[0]

        if (this.instances[configKey]) {
            return this.instances[configKey]
        }

        if (!config) {
            throw new Error('config parameter is required to initialize DependencyManager')
        }

        const instance = new DependencyManager(config)
        this.instances[configKey] = instance
        return instance
    }

    protected parsePackageName(namespaceOrPackageName: string, version?: string) {
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

    protected parseArgs(namespaceOrPackageNameOrRepo: string | GirRepository, version?: string, noOverride?: boolean) {
        let packageName: string
        let namespace: string
        let repo: GirRepository | null = null

        if (typeof namespaceOrPackageNameOrRepo === 'string') {
            // Special case for Gjs
            if (!noOverride && namespaceOrPackageNameOrRepo === 'Gjs') {
                return { ...this.getGjs(), repo: null }
            }

            const args = this.parsePackageName(namespaceOrPackageNameOrRepo, version)
            version = args.version
            packageName = args.packageName
            namespace = args.namespace
        } else {
            repo = namespaceOrPackageNameOrRepo
            const ns = repo.namespace?.[0]
            if (!ns) {
                throw new Error('Invalid GirRepository')
            }
            version = ns.$.version
            namespace = ns.$.name
            packageName = `${namespace}-${version}`
        }

        return { packageName, namespace, version, repo }
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
        return [
            await this.get('GObject', '2.0'),
            await this.get('GLib', '2.0'),
            await this.get('Gio', '2.0'),
            await this.get('cairo', '1.0'),
        ]
    }

    createImportProperties(namespace: string, packageName: string, version: string) {
        const importPath = this.createImportPath(packageName, namespace, version)
        const importDef = this.createImportDef(namespace, importPath)
        const packageJsonImport = this.createPackageJsonImport(importPath)
        return {
            importPath,
            importDef,
            packageJsonImport,
        }
    }

    createImportPath(packageName: string, namespace: string, version: string): string {
        if (!this.config.package) {
            return `gi://${namespace}?version=${version}`
        }
        const importName = transformImportName(packageName)
        const importPath = `${this.config.npmScope}/${importName}`
        return importPath
    }

    createImportDef(namespace: string, importPath: string): string {
        return this.config.noNamespace
            ? `import type * as ${namespace} from '${importPath}'`
            : `import type ${namespace} from '${importPath}';`
    }

    createPackageJsonImport(importPath: string): string {
        const depVersion = this.config.workspace ? 'workspace:^' : '*'
        return `"${importPath}": "${depVersion}"`
    }

    protected async parseGir(path: string) {
        const girXML = parser.parseGir(await readFile(path, 'utf8'))
        const repo = girXML.repository[0]
        const ns = repo?.namespace?.[0]
        const version = ns?.$.version
        return { girXML, repo, ns, version }
    }

    protected async parseGirAndReturnLatestVersion(filesInfo: FileInfo[]) {
        const libraryVersions: { libraryVersion: LibraryVersion; girXML: GirXML; fileInfo: FileInfo }[] = []

        if (filesInfo.length > 1) {
            this.log.warn(`Multiple paths found for ${filesInfo[0].filename}`)
        }

        for (const fileInfo of filesInfo) {
            if (!fileInfo.exists || !fileInfo.path) {
                continue
            }
            const { girXML, ns, version } = await this.parseGir(fileInfo.path)
            if (!version || !ns) {
                continue
            }

            const libraryVersion = new LibraryVersion(ns?.constant, version)

            if (filesInfo.length > 1) {
                this.log.muted(` - ${fileInfo.path} (${libraryVersion.toString()})`)
            }

            libraryVersions.push({
                libraryVersion,
                girXML,
                fileInfo,
            })
        }
        // Compare all library versions and return the latest version
        const latestLibraryVersion = libraryVersions.sort((a, b) => a.libraryVersion.compare(b.libraryVersion))[0]

        if (!latestLibraryVersion) {
            this.log.warn('No latest library version found', {
                libraryVersions,
                filesInfo,
            })
            return {
                libraryVersion: new LibraryVersion(),
                girXML: null,
                fileInfo: filesInfo[0],
            }
        }

        if (filesInfo.length > 1) {
            this.log.muted(`Use latest version ${latestLibraryVersion.libraryVersion.toString()} from ${latestLibraryVersion.fileInfo.path}`)
        }

        return latestLibraryVersion
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
    async get(namespace: string, version: string, noOverride?: boolean): Promise<Dependency>
    /**
     * Get the dependency object by {@link GirRepository}
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @returns The dependency object
     */
    async get(repo: GirRepository, version?: string, noOverride?: boolean): Promise<Dependency>
    async get(namespaceOrPackageNameOrRepo: string | GirRepository, _version?: string, noOverride?: boolean): Promise<Dependency> {
        const parsedArgs = this.parseArgs(namespaceOrPackageNameOrRepo, _version, noOverride)
        const { packageName, repo } = parsedArgs
        let { namespace, version } = parsedArgs
        namespace = sanitizeNamespace(namespace)

        if (this._cache[packageName]) {
            const dep = this._cache[packageName]
            return dep
        }
        const filename = `${packageName}.gir`
        const filesInfo = await findFilesInDirs(this.config.girDirectories, filename)

        const { libraryVersion, girXML, fileInfo } = await this.parseGirAndReturnLatestVersion(filesInfo)

        const ns: GirNamespace | null = girXML?.repository[0]?.namespace?.[0] || repo?.namespace?.[0] || null

        // Use the version from the gir file if it exists
        if (ns?.$.version) {
            version = ns?.$.version
        }
        if (ns?.$.name) {
            namespace = ns?.$.name
        }

        const dependency: Dependency = {
            ...fileInfo,
            namespace,
            packageName,
            importName: transformImportName(packageName),
            importNamespace: transformModuleNamespaceName(packageName),
            version,
            libraryVersion,
            girXML,
            ...this.createImportProperties(namespace, packageName, version),
        }


        // Special case for Cairo
        // This is a special case for Cairo because Cairo in GJS is provided as a built-in module that doesn't
        // follow the standard GI repository pattern.
        // So we need to special case it and redirect to the 'cairo' package.
        // This changes the typescript import definition to use the internal 'cairo' package instead of the 'cairo-1.0' Gir package.
        if(!noOverride && namespace === 'cairo' && version === '1.0') {
            dependency.importDef = this.createImportDef('cairo', 'cairo');
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
            return dep.namespace === namespace && dep.exists
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

    protected getPseudoPackage(packageName: string, namespace: string = pascalCase(packageName), version = '2.0'): Dependency {
        if (this._cache[packageName + '_pseudo']) {
            return this._cache[packageName + '_pseudo']
        }

        const dep: Dependency = {
            namespace,
            exists: true,
            filename: '',
            path: '',
            packageName: packageName,
            importName: transformImportName(packageName),
            importNamespace: transformModuleNamespaceName(packageName),
            version,
            libraryVersion: new LibraryVersion(),
            girXML: null,
            ...this.createImportProperties(packageName, packageName, version),
        }

        this._cache[packageName + '_pseudo'] = dep

        return dep
    }

    getGjs(): Dependency {
        return this.getPseudoPackage('Gjs')
    }
}
