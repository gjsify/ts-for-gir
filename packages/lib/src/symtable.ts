import type { SymTableItems, GenerateConfig, GirAnyElement, Dependency } from './types/index.js'
import { Logger } from './logger.js'
import { WARN_NOT_FOUND_PACKAGE_NAME } from './messages.js'

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
    public getKey(dependencies: Dependency[], implementation: string): string | null {
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
        const namespace = split[0]
        const packageName = dependencies.find((dependency) =>
            dependency.packageName.startsWith(namespace + '-'),
        )?.packageName
        if (!packageName) {
            this.log.warn(WARN_NOT_FOUND_PACKAGE_NAME(namespace, implementation))
            return null
        }
        return packageName + '.' + implementation
    }

    public get<T = object>(dependencies: Dependency[], fullTypeName: string): T | null {
        const key = this.getKey(dependencies, fullTypeName)
        if (!key || !SymTable.items[key]) {
            return null
        }
        const result = SymTable.items[key] || null
        return result as T | null
    }

    public getByHand<T = GirAnyElement>(key: string): T | null {
        return (SymTable.items[key] || null) as unknown as T | null
    }

    public set(dependencies: Dependency[], fullTypeName: string, GirElement: GirAnyElement): void {
        const key = this.getKey(dependencies, fullTypeName)
        if (key) {
            SymTable.items[key] = GirElement
        }
    }
}
