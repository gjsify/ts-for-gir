import { findFileInDirs, splitModuleName } from './utils.js'
import { Logger } from './logger.js'
import { GNOME_SHELL_NAMESPACES } from './constants.js'
import { Transformation } from './transformation.js'

import type { Dependency, GenerateConfig, GirInclude } from './types/index.js'

export class DependencyManager {
    protected log: Logger
    protected transformation: Transformation

    cache: { [key: string]: Dependency } = {}

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
        const importPath = this.config.package
            ? `${this.config.npmScope}/${this.transformation.transformImportName(packageName)}`
            : `${relativeTo}/${packageName}.js`
        return importPath
    }

    getImportDef(namespace: string, importPath: string): string {
        return this.config.noNamespace || namespace === 'Gjs' || namespace === 'GnomeShell'
            ? `import type * as ${namespace} from '${importPath}'`
            : `import type ${namespace} from '${importPath}';`
    }

    /**
     * Get the dependency object by namespace and version
     * @param namespace The namespace of the dependency
     * @param version The version of the dependency
     * @returns The dependency object
     */
    get(packageName: string): Dependency
    get(namespace: string, version: string): Dependency
    get(namespaceOrPackageName: string, _version?: string): Dependency {
        // Special case for Gjs and GnomeShell
        if (namespaceOrPackageName === 'Gjs') {
            return this.getGjs()
        }
        if (namespaceOrPackageName === 'GnomeShell') {
            return this.getGnomeShell()
        }

        let packageName: string
        let namespace: string
        let version: string
        if (_version) {
            packageName = `${namespaceOrPackageName}-${_version}`
            namespace = namespaceOrPackageName
            version = _version
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
        const importPath = this.getImportPath(packageName)
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
        if (this.cache['Gjs'] && relativeTo === '.') {
            return this.cache['Gjs']
        }

        const importPath = this.getImportPath('Gjs', relativeTo)
        const importDef = this.getImportDef('Gjs', importPath)

        const dep: Dependency = {
            namespace: 'Gjs',
            exists: true,
            filename: '',
            path: '',
            packageName: 'Gjs',
            importName: this.transformation.transformImportName('Gjs'),
            version: '0.0',
            importPath,
            importDef,
        }

        if (relativeTo === '.') {
            this.cache['Gjs'] = dep
        }
        return dep
    }

    getGnomeShell(relativeTo = '.'): Dependency {
        if (this.cache['GnomeShell'] && relativeTo === '.') {
            return this.cache['GnomeShell']
        }

        const importPath = this.getImportPath('GnomeShell', relativeTo)
        const importDef = this.getImportDef('GnomeShell', importPath)

        const dep: Dependency = {
            namespace: 'GnomeShell',
            exists: true,
            filename: '',
            path: '',
            packageName: 'GnomeShell',
            importName: this.transformation.transformImportName('GnomeShell'),
            version: '0.0',
            importPath,
            importDef,
        }

        if (relativeTo === '.') {
            this.cache['GnomeShell'] = dep
        }
        return dep
    }
}
