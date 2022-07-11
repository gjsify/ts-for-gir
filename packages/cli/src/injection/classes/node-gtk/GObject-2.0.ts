import type { InjectionClass } from '../../../types/index.js'

export const classesGObject20Node: InjectionClass[] = [
    {
        versions: ['2.0'],
        qualifiedName: 'GObject.Object',
        methods: [
            {
                girTypeName: 'method',
                name: 'setProperty',
                isVirtual: true,
                generics: [
                    {
                        name: 'T',
                        value: 'any',
                    },
                ],
                returnTypes: [{ type: 'void' }],
                inParams: [
                    {
                        name: 'propertyName',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'value',
                        type: [{ type: 'T' }],
                    },
                ],
            },
            {
                girTypeName: 'method',
                name: 'getProperty',
                isVirtual: true,
                generics: [
                    {
                        name: 'T',
                        value: 'unknown',
                    },
                ],
                returnTypes: [{ type: 'T' }],
                inParams: [
                    {
                        name: 'propertyName',
                        type: [{ type: 'string' }],
                    },
                ],
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'GObject.Value',
        methods: [
            {
                girTypeName: 'method',
                name: 'getBoxed',
                generics: [
                    {
                        name: 'T',
                        value: 'unknown',
                    },
                ],
                returnTypes: [{ type: 'T' }],
            },
        ],
    },
]
