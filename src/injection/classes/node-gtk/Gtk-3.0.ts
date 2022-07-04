import type { InjectionClass } from '../../../types/index.js'

export const classesGtk30Node: InjectionClass[] = [
    {
        versions: ['3.0'],
        qualifiedName: 'Gtk.Widget',
        methods: [
            {
                girTypeName: 'method',
                name: 'getSizeRequest',
                returnTypes: [{ type: '{ width: number; height: number; }' }],
            },
        ],
    },
    {
        versions: ['3.0'],
        qualifiedName: 'Gtk.Builder',
        methods: [
            {
                girTypeName: 'method',
                name: 'connectSignals',
                returnTypes: [{ type: 'void' }],
                inParams: [
                    {
                        name: 'handlers',
                        type: [{ type: '{ [handler: string]: (...args: any[]) => void; }' }],
                    },
                ],
            },
        ],
    },
]
