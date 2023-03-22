import type { PackageDataParsed } from './index.js'

export interface PackageSectionParsed {
    $: {
        name: string
    }
    package?: PackageDataParsed[]
    section?: PackageSectionParsed[]
}
