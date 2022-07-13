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
]
