import { parseStringPromise } from 'xml2js'
import { readFile } from 'fs/promises'
import { resolve } from 'path'
import { Logger, splitModuleName, cleanString } from '@ts-for-gir/lib'
import { __dirname } from './utils.js'

import type {
    GenerateConfig,
    ParsedPackageData,
    PackageSectionParsed,
    PackageDataParsed,
    PackageData,
} from '@ts-for-gir/lib'

export class PackageDataParser {
    protected log: Logger
    protected packages: PackageData[] = []

    constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger('', config.verbose, 'ModuleLoader')
    }

    public get(name: string): PackageData | undefined {
        return this.packages.find((pkg) => pkg.gir === name)
    }

    protected parseSections(sections: PackageSectionParsed[]) {
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

    protected transformPackageData(pkg: PackageDataParsed, parentSection?: PackageSectionParsed): PackageData {
        const { gir, home, gallery, 'c-docs': cDocs, deprecated, maintainers, maintainer } = pkg.$
        const description = cleanString(pkg._)
        if (!gir) {
            throw new Error(`No gir name specified for package "${pkg.$.name}"`)
        }
        const { namespace, version } = splitModuleName(gir)
        const trans: PackageData = {
            description,
            namespace,
            version,
            gir,
            home,
            gallery,
            cDocs,
            deprecated: deprecated === 'true',
            maintainers: maintainers || maintainer,
            section: parentSection,
        }
        return trans
    }

    protected parsePackages(packages: PackageDataParsed[], parentSection?: PackageSectionParsed) {
        for (const pkg of packages) {
            this.log.log(`Found package "${pkg.$.name}"`)
            if (pkg.$.ignore === 'true' || !pkg.$.gir) {
                this.log.warn(`Ignoring package "${pkg.$.name}"`)
                continue
            }
            const transPgk = this.transformPackageData(pkg, parentSection)
            this.packages.push(transPgk)
        }
    }

    async start() {
        const filePath = resolve(__dirname, '../packages.xml')
        this.log.log(`Parsing ${filePath}...`)
        const fileContents = await readFile(filePath, 'utf8')
        const result = (await parseStringPromise(fileContents)) as ParsedPackageData
        this.parseSections(result.packages.section)
    }
}
