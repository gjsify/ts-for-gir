import { SymTableItems, GenerateConfig, GirConstruct } from './types'
import { Logger } from './logger'

/**
 * The SymTable is used to get any Type from any dependency to compare or to get information from
 */
export class SymTable {
    /**
     * The items are static because any GirModule has the same items to be able to access the types of dependencies as well
     */
    private static items: SymTableItems = {}
    private log: Logger

    public constructor(
        private readonly config: GenerateConfig,
        private readonly modPackageName: string,
        private readonly modNamespace: string,
    ) {
        this.log = new Logger(this.config.environment, this.config.verbose, 'SymTable')
    }

    /**
     * Get symTable key, we use this method to prepend the package version to each key to prevent version conflicts e.g. in 'Gtk-3.0' and 'Gtk-4.0'
     * @param implementation E.g. Gtk.Window
     * @returns E.g. 'Gtk-3.0.Gtk.Window'
     */
    public getKey(dependencies: string[], implementation: string): string | null {
        if (implementation.startsWith(this.modPackageName + '.')) {
            return implementation
        }

        if (implementation.startsWith(this.modNamespace + '.')) {
            return this.modPackageName + '.' + implementation
        }

        if (!implementation.includes('.')) {
            return this.modPackageName + '.' + this.modNamespace + '.' + implementation
        }

        const split = implementation.split('.')
        const namespace = split.slice(0, split.length - 1).join('.')
        const packageName = dependencies.find((dependency) => dependency.startsWith(namespace + '-'))
        if (!packageName) {
            this.log.warn(`Package name for namespace ${namespace} not found! (${implementation})`)
            return null
        }
        return packageName + '.' + implementation
    }

    public get(dependencies: string[], fullTypeName: string): GirConstruct | null {
        const key = this.getKey(dependencies, fullTypeName)
        if (!key) {
            return null
        }
        const result = SymTable.items[key]
        return result || null
    }

    public getByHand(versionTypeName: string): GirConstruct | undefined {
        return SymTable.items[versionTypeName]
    }

    public set(dependencies: string[], fullTypeName: string, girConstruct: GirConstruct): void {
        const key = this.getKey(dependencies, fullTypeName)
        if (key) {
            if (key.endsWith('ServiceAction')) {
                debugger
            }
            SymTable.items[key] = girConstruct
        }
    }
}
