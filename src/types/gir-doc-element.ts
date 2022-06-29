// Documentation of elements
// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts
export interface GirDocElement {
    /** Version of the documentation */
    'doc-version'?: [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                'xml:space'?: 'preserve'
                /** Preserve the original formatting of the documentation from the source code. Recommended to use this instead of xml:space */
                'xml:whitespace'?: 'preserve'
            }
            /** the text of the version of the documentation */
            _: string
        },
    ]
    /** give the stability of the documentation */
    'doc-stability'?: [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                'xml:space'?: 'preserve'
                /** Preserve the original formatting of the documentation from the source code. Recommended to use this instead of xml:space */
                'xml:whitespace'?: 'preserve'
                /** a text value about the stability of the documentation. Usually a simple description like stable or unstable */
            }
            _: string
        },
    ]
    /** documentation of an element */
    doc: [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                'xml:space'?: 'preserve'
                /** Keep the whitespace as they were in the source code */
                'xml:whitespace'?: 'preserve'
                /** The file containing this documentation */
                filename: string
                /** The first line of the documentation in the source code */
                line: string
                /** The first column of the documentation in the source code */
                column: string
                /** the text of the documentation */
            }
            _: string
        },
    ]
    /** Deprecated documentation of an element. Kept for historical reasons in general */
    'doc-deprecated': [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                'xml:space'?: 'preserve'
                /** Keep the whitespace as they were in the source code */
                'xml:whitespace'?: 'preserve'
                /** the text of the deprecated documentation */
            }
            _: string
        },
    ]
    /** Position of the documentation in the original source code */
    'source-position': [
        {
            /** File name of the source of the documentation */
            filename: string
            /** The first line of the documentation in the source code */
            line: string
            /** The first column of the documentation in the source code */
            column: string[]
        },
    ]
}
