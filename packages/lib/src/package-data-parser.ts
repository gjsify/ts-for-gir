import { parseStringPromise } from 'xml2js'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

import { Logger } from './logger.js'
import { __dirname } from './utils.js'

import type { GenerateConfig, ParsedPackageData, PackageSection, PackageData } from './types/index.js'

export class PackageDataParser {
    log: Logger
    packages: PackageData[] = []
    constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger('', config.verbose || true, 'ModuleLoader')
    }

    protected parseSections(sections: PackageSection[]) {
        for (const section of sections) {
            this.log.log(`Found section`, section.$.name)
            if (section.package) {
                this.parsePackages(section.package)
            }

            if (section.section) {
                this.parseSections(section.section)
            }
        }
    }

    protected parsePackages(packages: PackageData[]) {
        for (const pkg of packages) {
            this.log.log(`Found package`, pkg.$.name)
            // TODO validate and uniform package data
            this.packages.push(pkg)
        }
    }

    async start() {
        this.log.log(`Parsing package.xml...`)
        const fileContents = await readFile(resolve(__dirname, '../packages.xml'), 'utf8')
        const result = (await parseStringPromise(fileContents)) as ParsedPackageData
        this.parseSections(result.packages.section)
    }
}
