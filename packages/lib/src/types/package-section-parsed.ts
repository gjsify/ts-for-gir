import type { PackageDataParsed } from './index.ts'

export interface PackageSectionParsed {
    $: {
        name: string
    }
    package?: PackageDataParsed[]
    section?: PackageSectionParsed[]
}
