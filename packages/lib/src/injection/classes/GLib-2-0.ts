import type { InjectionClass } from '../../types/index.js'

export const classesGLib20All: InjectionClass[] = [
    {
        versions: ['2.0'],
        qualifiedName: 'GLib.List',
        generics: [
            {
                name: 'A',
                value: 'any',
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'GLib.HashTable',
        // TODO
        // [key: A]: B;
        // properties: [
        //     {
        //         name: '[key: A]'
        //         type: 'B'
        //     }
        // ],
        generics: [
            {
                name: 'A',
                value: 'symbol | string | number',
            },
            {
                name: 'B',
                value: 'string | number | boolean',
            },
        ],
    },
]
