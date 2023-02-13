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
                    text: 'Convert a [`GLib.Bytes`](https://gjs-docs.gnome.org/glib20/glib.bytes) object to a `Uint8Array` object.',
                    tags: [
                        {
                            tagName: '@returns',
                            paramName: '',
                            text: 'A `Uint8Array`',
                        },
                    ],
                },
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'GLib.Error',
        properties: [
            // https://gitlab.gnome.org/GNOME/gjs/-/blob/d1cf26179322b2b87fb980e3b244b5e24dba8dd6/gi/gerror.cpp#L298-305
            {
                name: 'stack',
                type: [{ type: 'string' }],
                girTypeName: 'property',
                doc: {
                    text: 'The stack trace of the error.',
                    tags: [
                        {
                            tagName: '@field',
                            paramName: '',
                            text: '',
                        },
                    ],
                },
            },
            {
                name: 'source',
                type: [{ type: 'string' }],
                girTypeName: 'property',
                doc: {
                    text: 'The name of the file where is the source of the error.',
                    tags: [
                        {
                            tagName: '@field',
                            paramName: '',
                            text: '',
                        },
                    ],
                },
            },
            {
                name: 'line',
                type: [{ type: 'number' }],
                girTypeName: 'property',
                doc: {
                    text: 'The line number of the source of the error.',
                    tags: [
                        {
                            tagName: '@field',
                            paramName: '',
                            text: '',
                        },
                    ],
                },
            },
            {
                name: 'column',
                type: [{ type: 'number' }],
                girTypeName: 'property',
                doc: {
                    text: 'The column number of the source of the error.',
                    tags: [
                        {
                            tagName: '@field',
                            paramName: '',
                            text: '',
                        },
                    ],
                },
            },
        ],
        methods: [
            // https://gitlab.gnome.org/GNOME/gjs/-/blob/33d58646d43b84d4c0ffc3681b89d125d5ccdfc6/installed-tests/js/testExceptions.js#L119-123
            // https://gjs-docs.gnome.org/glib20~2.66.1/glib.error#constructor-new_literal
            {
                name: 'constructor',
                isStatic: true,
                returnTypes: [{ type: 'GLib.Error' }],
                inParams: [
                    {
                        name: 'domain',
                        type: [{ type: 'GLib.Quark' }],
                    },
                    {
                        name: 'code',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'message',
                        type: [{ type: 'string' }],
                    },
                ],
                girTypeName: 'constructor',
            },
            {
                name: 'new',
                returnTypes: [{ type: 'GLib.Error' }],
                inParams: [
                    {
                        name: 'domain',
                        type: [{ type: 'GLib.Quark' }],
                    },
                    {
                        name: 'code',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'message',
                        type: [{ type: 'string' }],
                    },
                ],
                girTypeName: 'constructor',
            },
        ],
    },
]
