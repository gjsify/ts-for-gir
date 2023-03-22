import type { PackageSectionParsed } from './index.js'

export interface ParsedPackageData {
    packages: {
        section: PackageSectionParsed[]
    }
}
