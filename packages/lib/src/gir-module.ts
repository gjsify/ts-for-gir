import { Logger } from './logger.js'

import type { GirRepository, GirNamespace, GirConstantElement, GenerateConfig } from './types/index.js'
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

    log: Logger

    extends?: string

    // TODO: Storing this for now as gi.ts expects the root object (not just repository)
    xml: GirXML

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: GirConstantElement } = {}

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
}
