import { DependencyManager } from './dependency-manager.js'
import { Logger } from './logger.js'
import { find } from './utils.js'

import type { GirRepository, GirNamespace, GirConstantElement, GenerateConfig, Dependency } from './types/index.js'
import { GirXML } from '@gi.ts/parser'

export class GirModule {
    /**
     * Array of all gir modules
     */
    static allGirModules: GirModule[] = []
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. '4.0'
     */
    version = '0.0'
    /**
     * E.g. 'Gtk-4.0'
     */
    packageName: string

    repo: GirRepository
    ns: GirNamespace = { $: { name: '', version: '0.0' } }
    dependencyManager: DependencyManager

    log: Logger

    extends?: string

    // TODO: Storing this for now as gi.ts expects the root object (not just repository)
    xml: GirXML

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: GirConstantElement } = {}

    dependencies: Dependency[]
    private _transitiveDependencies: Dependency[] = []

    set transitiveDependencies(deps: Dependency[]) {
        this._transitiveDependencies = this.checkTransitiveDependencies(deps)
    }

    get transitiveDependencies(): Dependency[] {
        return this._transitiveDependencies
    }

    get allDependencies(): Dependency[] {
        return [...new Set([...this.dependencies, ...this.transitiveDependencies])]
    }

    constructor(xml: GirXML, private readonly config: GenerateConfig) {
        this.xml = xml
        this.repo = xml.repository[0]

        if (!this.repo.namespace || !this.repo.namespace.length) {
            throw new Error(`Namespace not found!`)
        }

        this.ns = this.repo.namespace[0]
        this.namespace = this.ns.$.name
        this.version = this.ns.$.version
        this.packageName = `${this.namespace}-${this.version}`

        this.log = new Logger(config.environment, config.verbose, this.packageName || 'GirModule')
    }

    private checkTransitiveDependencies(transitiveDependencies: Dependency[]) {
        // Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
        if (this.packageName !== 'GObject-2.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'GObject-2.0')) {
                transitiveDependencies.push(this.dependencyManager.get('GObject', '2.0'))
            }
        }

        // Add missing dependencies
        if (this.packageName === 'UnityExtras-7.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'Unity-7.0')) {
                transitiveDependencies.push(this.dependencyManager.get('Unity', '7.0'))
            }
        }
        if (this.packageName === 'UnityExtras-6.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'Unity-6.0')) {
                transitiveDependencies.push(this.dependencyManager.get('Unity', '6.0'))
            }
        }
        if (this.packageName === 'GTop-2.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'GLib-2.0')) {
                transitiveDependencies.push(this.dependencyManager.get('GLib', '2.0'))
            }
        }

        return transitiveDependencies
    }
}
