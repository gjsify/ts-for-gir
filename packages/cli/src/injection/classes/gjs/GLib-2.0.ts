import type { InjectionClass } from '../../../types/index.js'

export const classesGLib20Gjs: InjectionClass[] = [
    // https://gjs.guide/guides/glib/gvariant.html#unpacking-variants
    {
        versions: ['2.0'],
        qualifiedName: 'GLib.Variant',
        methods: [
            {
                name: 'constructor',
                isStatic: true,
                returnTypes: [{ type: 'GLib.Variant' }],
                inParams: [
                    {
                        name: 'sig',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'value',
                        type: [{ type: 'any' }],
                    },
                ],
                girTypeName: 'constructor',
            },
            {
                name: 'new',
                returnTypes: [{ type: 'GLib.Variant' }],
                inParams: [
                    {
                        name: 'sig',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'value',
                        type: [{ type: 'any' }],
                    },
                ],
                girTypeName: 'constructor',
            },
            {
                name: 'unpack',
                returnTypes: [{ type: 'T' }],
                girTypeName: 'method',
                generics: [
                    {
                        name: 'T',
                        value: 'unknown',
                    },
                ],
            },
            {
                name: 'deepUnpack',
                returnTypes: [{ type: 'T' }],
                girTypeName: 'method',
                generics: [
                    {
                        name: 'T',
                        value: 'unknown',
                    },
                ],
            },
            {
                name: 'recursiveUnpack',
                returnTypes: [{ type: 'T' }],
                girTypeName: 'method',
                generics: [
                    {
                        name: 'T',
                        value: 'unknown',
                    },
                ],
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'GLib.Bytes',
        methods: [
            {
                name: 'toArray',
                returnTypes: [{ type: 'Uint8Array' }],
                girTypeName: 'method',
                doc: {
                    returns: 'A `Uint8Array`',
                    text: 'Convert a [`GLib.Bytes`](https://gjs-docs.gnome.org/glib20/glib.bytes) object to a `Uint8Array` object.',
                    tags: [],
                },
            },
        ],
    },
]
