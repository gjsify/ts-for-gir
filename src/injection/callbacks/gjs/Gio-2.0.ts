import type { InjectionCallback } from '../../../types/index.js'

export const callbacksGio20Gjs: InjectionCallback[] = [
    {
        versions: ['2.0'],
        namespace: 'Gio',
        name: 'AsyncReadyCallback',
        // Generics for callback parameters
        // TODO only use `this` if there is also a _finish method
        generics: [
            {
                name: 'T',
                value: 'this',
            },
        ],
        inParams: [
            // Type changed
            {
                name: 'source_object',
                type: [{ type: 'T' }],
            },
            // Not changed
            {
                name: 'res',
                type: [{ type: 'Gio.AsyncResult' }],
            },
        ],
        tsCallbackInterface: {
            generics: [
                {
                    name: 'T',
                    value: 'GObject.Object',
                },
            ],
        },
    },
]
