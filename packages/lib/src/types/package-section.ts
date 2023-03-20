import type { PackageData } from './index.js'

export interface PackageSection {
    $: {
        name: string
    }
    package?: PackageData[]
    section?: PackageSection[]
}
