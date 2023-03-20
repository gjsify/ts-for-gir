import type { PackageSection } from './index.js'

export interface ParsedPackageData {
    packages: {
        section: PackageSection[]
    }
}
