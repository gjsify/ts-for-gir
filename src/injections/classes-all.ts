import type { InjectionClass } from '../types/index.js'

export const classesAll: InjectionClass[] = [
    {
        qualifiedName: 'Gio.ListStore',
        generics: [
            {
                name: 'A',
                extends: 'GObject.Object',
                value: 'GObject.Object',
            },
        ],
    },
    {
        qualifiedName: 'GLib.List',
        generics: [
            {
                name: 'A',
                value: 'any',
            },
        ],
    },
    {
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
