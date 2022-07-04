import type { InjectionClass } from '../../../types/index.js'

export const classesGtk40Node: InjectionClass[] = [
    {
        versions: ['4.0'],
        qualifiedName: 'Gtk.Widget',
        methods: [
            {
                girTypeName: 'method',
                name: 'addCssClass',
                inParams: [
                    {
                        name: 'classNames',
                        type: [{ type: 'string', isArray: true }],
                    },
                ],
                returnTypes: [{ type: 'void' }],
            },
            {
                girTypeName: 'method',
                name: 'removeCssClass',
                inParams: [
                    {
                        name: 'classNames',
                        type: [{ type: 'string', isArray: true }],
                    },
                ],
                returnTypes: [{ type: 'void' }],
            },
        ],
    },
    {
        versions: ['4.0'],
        qualifiedName: 'Gtk.ScrolledWindow',
        methods: [
            {
                girTypeName: 'method',
                name: 'scrollTo',
                returnTypes: [{ type: 'number' }],
                inParams: [
                    {
                        name: 'value',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'vertical',
                        type: [{ type: 'boolean', optional: true }],
                    },
                ],
            },
        ],
    },
]
