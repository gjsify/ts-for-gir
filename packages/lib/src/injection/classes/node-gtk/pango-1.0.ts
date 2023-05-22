import type { InjectionClass } from '../../../types/index.js'

export const classesPango10Node: InjectionClass[] = [
    {
        versions: ['1.0'],
        qualifiedName: 'Pango.Layout',
        methods: [
            {
                girTypeName: 'method',
                name: 'setMarkup',
                inParams: [
                    {
                        name: 'markup',
                        type: [{ type: 'string' }],
                    },
                ],
                returnTypes: [{ type: 'void' }],
            },
            {
                girTypeName: 'method',
                name: 'setText',
                inParams: [
                    {
                        name: 'text',
                        type: [{ type: 'string' }],
                    },
                ],
                returnTypes: [{ type: 'void' }],
            },
        ],
    },
]
