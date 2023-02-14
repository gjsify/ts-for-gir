import type { InjectionClass } from '../../../types/index.js'

export const classesGraphene10Node: InjectionClass[] = [
    // See https://github.com/romgrk/node-gtk/blob/master/lib/overrides/Graphene-1.0.js
    {
        versions: ['1.0'],
        qualifiedName: 'Graphene.Rect',
        constructors: [
            {
                girTypeName: 'constructor',
                isStatic: true,
                name: 'create',
                returnTypes: [{ type: 'Graphene.Rect' }],
                inParams: [
                    {
                        name: 'x',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'y',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'width',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'height',
                        type: [{ type: 'number' }],
                    },
                ],
                doc: {
                    text: 'Creates a new Rect with the given values',
                    tags: [
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'x',
                        },
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'y',
                        },
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'width',
                        },
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'height',
                        },
                    ],
                },
            },
        ],
    },
    {
        versions: ['1.0'],
        qualifiedName: 'Graphene.Point',
        constructors: [
            {
                girTypeName: 'constructor',
                isStatic: true,
                name: 'create',
                returnTypes: [{ type: 'Graphene.Point' }],
                inParams: [
                    {
                        name: 'x',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'y',
                        type: [{ type: 'number' }],
                    },
                ],
                doc: {
                    text: 'Creates a new Point with the given values',
                    tags: [
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'x',
                        },
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'y',
                        },
                    ],
                },
            },
        ],
    },
    {
        versions: ['1.0'],
        qualifiedName: 'Graphene.Size',
        constructors: [
            {
                girTypeName: 'constructor',
                isStatic: true,
                name: 'create',
                returnTypes: [{ type: 'Graphene.Size' }],
                inParams: [
                    {
                        name: 'width',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'height',
                        type: [{ type: 'number' }],
                    },
                ],
                doc: {
                    text: 'Creates a new Size with the given values',
                    tags: [
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'width',
                        },
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'height',
                        },
                    ],
                },
            },
        ],
    },
]
