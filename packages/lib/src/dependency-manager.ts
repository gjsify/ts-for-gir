import { findFileInDirs, splitModuleName } from './utils.js'
import { Logger } from './logger.js'
import { GNOME_SHELL_NAMESPACES } from './constants.js'
import { Transformation } from './transformation.js'

import type { Dependency, GenerateConfig, GirInclude } from './types/index.js'

export class DependencyManager {
    protected log: Logger
    protected transformation: Transformation

    cache: { [packageName: string]: Dependency } = {}

    static instance: DependencyManager

    protected constructor(protected readonly config: GenerateConfig) {
        this.transformation = new Transformation(config)
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
     * Get all dependencies in the cache
     * @returns All dependencies in the cache
     */
    all(): Dependency[] {
        return Object.values(this.cache)
    }

    forGnomeShell(): Dependency[] {
        const deps: Dependency[] = []
        for (const ns of GNOME_SHELL_NAMESPACES) {
            const dep = this.find(ns)
            if (dep) {
                deps.push(dep)
            }
        }
        return deps
    }

    getImportPath(packageName: string, relativeTo = '.'): string {
        const importName = this.transformation.transformImportName(packageName)
        const importPath = this.config.package
            ? `${this.config.npmScope}/${importName}`
            : `${relativeTo}/${importName}.js`
        return importPath
    }

    getImportDef(namespace: string, importPath: string): string {
        return this.config.noNamespace || namespace === 'Gjs' || namespace === 'GnomeShell'
            ? `import type * as ${namespace} from '${importPath}'`
            : `import type ${namespace} from '${importPath}';`
    }

    /**
     * Get the dependency object by packageName
     * @param packageName The package name (with version affix) of the dependency
     * @param relativeTo Get the import path relative to this path
     * @returns The dependency object
     */
    get(packageName: string, relativeTo?: string): Dependency
    /**
     * Get the dependency object by namespace and version, optional relative to a path
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @param relativeTo Get the import path relative to this path
     * @returns The dependency object
     */
    get(namespace: string, version: string, relativeTo?: string): Dependency
    get(namespaceOrPackageName: string, versionOrRelativeTo?: string, relativeTo?: string): Dependency {
        // Special case for Gjs and GnomeShell
        if (namespaceOrPackageName === 'Gjs') {
            return this.getGjs()
        }
        if (namespaceOrPackageName === 'GnomeShell') {
            return this.getGnomeShell()
        }

        let packageName: string
        let namespace: string
        let version: string | undefined

        if (relativeTo && versionOrRelativeTo) {
            version = versionOrRelativeTo
        } else if (versionOrRelativeTo?.startsWith('.')) {
            relativeTo = versionOrRelativeTo
        } else {
            version = versionOrRelativeTo
        }

        if (!relativeTo) {
            relativeTo = '.'
        }

        if (version) {
            packageName = `${namespaceOrPackageName}-${version}`
            namespace = namespaceOrPackageName
            version = version
        } else {
            packageName = namespaceOrPackageName
            const { namespace: _namespace, version: _version } = splitModuleName(packageName)
            namespace = _namespace
            version = _version
        }
        if (this.cache[packageName]) {
            return this.cache[packageName]
        }
        const filename = `${packageName}.gir`
        const { exists, path } = findFileInDirs(this.config.girDirectories, filename)
        const importPath = this.getImportPath(packageName, relativeTo)
        const importDef = this.getImportDef(namespace, importPath)

        const dependency: Dependency = {
            namespace,
            exists,
            filename,
            path,
            packageName,
            importName: this.transformation.transformImportName(packageName),
            version,
            importPath,
            importDef,
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
     * @param relativeTo The relative path to the dependency
     * @returns The dependency object or null if not found
     */
    find(namespace: string, relativeTo = '.'): Dependency | null {
        // Special case for Gjs and GnomeShell
        if (namespace === 'Gjs') {
            return this.getGjs(relativeTo)
        }
        if (namespace === 'GnomeShell') {
            return this.getGnomeShell(relativeTo)
        }

        const packageNames = Object.keys(this.cache)
        const candidates = packageNames.filter((packageName) => {
            return packageName.startsWith(`${namespace}-`) && this.cache[packageName].namespace === namespace
        })

        if (candidates.length > 1) {
            this.log.warn(`Found multiple versions of ${namespace}: ${candidates.join(', ')}`)
        }

        const latestVersion = candidates.sort().pop()

        if (latestVersion && this.cache[latestVersion]) {
            const dep = this.cache[latestVersion]
            const importPath = relativeTo === '.' ? dep.importPath : this.getImportPath(latestVersion, relativeTo)
            const importDef = relativeTo === '.' ? dep.importDef : this.getImportDef(dep.namespace, importPath)
            return { ...dep, importPath, importDef }
        }

        return null
    }

    getGjs(relativeTo = '.'): Dependency {
        const packageName = 'Gjs'
        if (this.cache[packageName] && relativeTo === '.') {
            return this.cache[packageName]
        }

        const importPath = this.getImportPath(packageName, relativeTo)
        const importDef = this.getImportDef(packageName, importPath)

        const dep: Dependency = {
            namespace: packageName,
            exists: true,
            filename: '',
            path: '',
            packageName: packageName,
            importName: this.transformation.transformImportName(packageName),
            version: '0.0',
            importPath,
            importDef,
        }

        if (relativeTo === '.') {
            this.cache[packageName] = dep
        }
        return dep
    }

    getGnomeShell(relativeTo = '.'): Dependency {
        const packageName = 'GnomeShell'
        if (this.cache[packageName] && relativeTo === '.') {
            return this.cache[packageName]
        }

        const importPath = this.getImportPath(packageName, relativeTo)
        const importDef = this.getImportDef(packageName, importPath)

        const dep: Dependency = {
            namespace: packageName,
            exists: true,
            filename: '',
            path: '',
            packageName: packageName,
            importName: this.transformation.transformImportName(packageName),
            version: '0.0',
            importPath,
            importDef,
        }

        if (relativeTo === '.') {
            this.cache[packageName] = dep
        }
        return dep
    }
}
