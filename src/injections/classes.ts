import type { InjectionClass } from '../types/index.js'

export const classes: InjectionClass[] = [
    // {
    //     qualifiedName: 'GObject.Object',
    //     // Add signal methods with any type to fix inheritance conflicts (such as Gio.Socket.connect or NMClient.Device.disconnect)
    //     methods: [
    //         {
    //             name: 'connect',
    //             returnType: { type: 'any' },
    //             inParams: [
    //                 {
    //                     name: '...args',
    //                     type: { type: 'any', isArray: true },
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'connect_after',
    //             returnType: { type: 'any' },
    //             inParams: [
    //                 {
    //                     name: '...args',
    //                     type: { type: 'any', isArray: true },
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'emit',
    //             returnType: { type: 'any' },
    //             inParams: [
    //                 {
    //                     name: '...args',
    //                     type: { type: 'any', isArray: true },
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'disconnect',
    //             returnType: { type: 'any' },
    //             inParams: [
    //                 {
    //                     name: '...args',
    //                     type: { type: 'any', isArray: true },
    //                 },
    //             ],
    //         },
    //     ],
    // },
    {
        qualifiedName: 'GObject.ParamSpec',
        // Static functions injected by GJS, see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/GObject.js
        staticFunctions: [
            // static char(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecChar
            {
                name: 'char',
                returnType: { type: 'ParamSpecChar' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static uchar(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUChar
            {
                name: 'uchar',
                returnType: { type: 'ParamSpecUChar' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static int(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecInt
            {
                name: 'int',
                returnType: { type: 'ParamSpecInt' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static uint(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUInt
            {
                name: 'uint',
                returnType: { type: 'ParamSpecUInt' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static long(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecLong
            {
                name: 'long',
                returnType: { type: 'ParamSpecLong' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static ulong(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecULong
            {
                name: 'ulong',
                returnType: { type: 'ParamSpecULong' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static int64(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecInt64
            {
                name: 'int64',
                returnType: { type: 'ParamSpecInt64' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static uint64(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUInt64
            {
                name: 'uint64',
                returnType: { type: 'ParamSpecUInt64' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static float(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecFloat
            {
                name: 'float',
                returnType: { type: 'ParamSpecFloat' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static boolean(name: string, nick: string, blurb: string, flags: ParamFlags, defaultValue: boolean): ParamSpecBoolean
            {
                name: 'boolean',
                returnType: { type: 'ParamSpecBoolean' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'boolean' },
                    },
                ],
            },
            // TODO add generic
            // static flags<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, flagsType: GType<T>, defaultValue: number): ParamSpecFlags
            {
                name: 'flags',
                returnType: { type: 'ParamSpecFlags' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'flagsType',
                        type: { type: 'GType<unknown>' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'boolean' },
                    },
                ],
            },
            // static enum<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, enumType: GType<T>, defaultValue: number): ParamSpecEnum
            {
                name: 'enum',
                returnType: { type: 'ParamSpecEnum' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'enumType',
                        type: { type: 'GType<unknown>' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'boolean' },
                    },
                ],
            },
            // static double(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecDouble
            {
                name: 'double',
                returnType: { type: 'ParamSpecDouble' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'minimum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'maximum',
                        type: { type: 'number' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'number' },
                    },
                ],
            },
            // static string(name: string, nick: string, blurb: string, flags: ParamFlags, defaultValue: string | null): ParamSpecString
            {
                name: 'string',
                returnType: { type: 'ParamSpecString' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'defaultValue',
                        type: { type: 'string | null' },
                    },
                ],
            },
            // static boxed<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, boxedType: GType<T>): ParamSpecBoxed
            {
                name: 'boxed',
                returnType: { type: 'ParamSpecBoxed' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'boxedType',
                        type: { type: 'GType<unknown>' },
                    },
                ],
            },
            // static object<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, objectType: GType<T>): ParamSpecObject
            {
                name: 'object',
                returnType: { type: 'ParamSpecObject' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'objectType',
                        type: { type: 'GType<unknown>' },
                    },
                ],
            },
            // static jsobject(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpecBoxed
            {
                name: 'jsobject',
                returnType: { type: 'ParamSpecBoxed' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                ],
            },
            // static param<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, paramType: GType<T>): ParamSpecParam
            {
                name: 'param',
                returnType: { type: 'ParamSpecParam' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'nick',
                        type: { type: 'string' },
                    },
                    {
                        name: 'blurb',
                        type: { type: 'string' },
                    },
                    {
                        name: 'flags',
                        type: { type: 'ParamFlags' },
                    },
                    {
                        name: 'paramType',
                        type: { type: 'GType<unknown>' },
                    },
                ],
            },
            // static override(name: string, oclass: Object | Function | GType): void
            {
                name: 'override',
                returnType: { type: 'void' },
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: { type: 'string' },
                    },
                    {
                        name: 'oclass',
                        type: { type: 'Object | Function | GType' },
                    },
                ],
            },
        ],
    },
    {
        qualifiedName: 'Gio.ListStore',
        generics: [
            {
                extends: 'GObject.Object',
                default: 'GObject.Object',
            },
        ],
    },
    {
        qualifiedName: 'GLib.List',
        generics: [
            {
                default: 'any',
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
                default: 'symbol | string | number',
            },
            {
                name: 'B',
                default: 'string | number | boolean',
            },
        ],
    },
]
