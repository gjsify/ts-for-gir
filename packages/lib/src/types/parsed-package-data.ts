import type { PackageSectionParsed } from './index.ts'

export interface ParsedPackageData {
    packages: {
        section: PackageSectionParsed[]
    }
}
