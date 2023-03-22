export interface PackageDataParsed {
    /** Description of this package */
    _: string
    $: {
        /** Vala package name */
        name: string
        /** Vala build flags */
        flags?: string
        /** URL to the homepage of this package */
        home?: string
        /** URL to a gallery of widgets of this package */
        gallery?: string
        /** URL to the source code of this package */
        'c-docs'?: string
        /** True if this package should be ignored*/
        ignore?: 'true' | 'false'
        /** True if this package is deprecated */
        deprecated?: 'true' | 'false'
        /** Gir package name with version string */
        gir?: string
        /** URL to the VAPI image sources of this package */
        'vapi-image-source'?: string
        /** Name of the Maintainer of this package */
        maintainers?: string
        /** Name of the Maintainer of this package */
        maintainer?: string
    }
}
