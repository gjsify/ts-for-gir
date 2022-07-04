import type { InjectionClass } from '../../../types/index.js'

export const classesGLib20Node: InjectionClass[] = [
    {
        versions: ['2.0'],
        qualifiedName: 'GLib.MainLoop',
        methods: [
            {
                girTypeName: 'method',
                name: 'run',
                returnTypes: [{ type: 'void' }],
            },
            {
                girTypeName: 'method',
                name: 'quit',
                returnTypes: [{ type: 'void' }],
            },
        ],
    },
]
