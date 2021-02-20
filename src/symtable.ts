import { SymTableItems, GenerateConfig, GirConstruct } from './types'
import { Logger } from './logger'

export class SymTable {
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
     * Get symTable key, we use this method to prepend the package version to each key to prevent version conflicts e.g. in Gtk-3 and Gtk-4
     * @param implementation E.g. Gtk.Window
     */
    public getKey(dependencies: string[], implementation: string): string {
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
            return implementation // TODO return null?
        }
        return packageName + '.' + implementation
    }

    public get(dependencies: string[], fullTypeName: string): GirConstruct | undefined {
        const key = this.getKey(dependencies, fullTypeName)
        return SymTable.items[key]
    }

    public getByHand(versionTypeName: string): GirConstruct | undefined {
        return SymTable.items[versionTypeName]
    }

    public set(dependencies: string[], fullTypeName: string, girConstruct: GirConstruct): void {
        const key = this.getKey(dependencies, fullTypeName)
        SymTable.items[key] = girConstruct
    }
}
