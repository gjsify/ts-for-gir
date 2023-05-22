import type { PackageSectionParsed } from './index.js'

export interface PackageData {
    /** Namespace of this package, e.g. Gtk */
    namespace: string
    /** Version of this package, e.g. 4.0 */
    version: string
    /** Description of this package */
    description: string
    /** Gir package name with version string */
    gir?: string
    /** URL to the homepage of this package */
    home?: string
    /** URL to a gallery of widgets of this package */
    gallery?: string
    /** URL to the source code of this package */
    cDocs?: string
    /** True if this package is deprecated */
    deprecated?: boolean
    /** Name of the Maintainer of this package */
    maintainers?: string
    /** The section of this package */
    section?: PackageSectionParsed
}
