import type { InjectionClass } from '../types/index.js'

export const classes: InjectionClass[] = [
    {
        qualifiedName: 'GObject.ParamSpec',
        // Static functions injected by GJS, see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/GObject.js
        staticFunctions: [
            // static char(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecChar
            {
                name: 'char',
                returnType: 'ParamSpecChar',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static uchar(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUChar
            {
                name: 'uchar',
                returnType: 'ParamSpecUChar',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static int(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecInt
            {
                name: 'int',
                returnType: 'ParamSpecInt',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static uint(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUInt
            {
                name: 'uint',
                returnType: 'ParamSpecUInt',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static long(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecLong
            {
                name: 'long',
                returnType: 'ParamSpecLong',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static ulong(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecULong
            {
                name: 'ulong',
                returnType: 'ParamSpecULong',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static int64(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecInt64
            {
                name: 'int64',
                returnType: 'ParamSpecInt64',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static uint64(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUInt64
            {
                name: 'uint64',
                returnType: 'ParamSpecUInt64',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static float(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecFloat
            {
                name: 'float',
                returnType: 'ParamSpecFloat',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static boolean(name: string, nick: string, blurb: string, flags: ParamFlags, defaultValue: boolean): ParamSpecBoolean
            {
                name: 'boolean',
                returnType: 'ParamSpecBoolean',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'defaultValue',
                        type: 'boolean',
                    },
                ],
            },
            // TODO add generic
            // static flags<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, flagsType: GType<T>, defaultValue: number): ParamSpecFlags
            {
                name: 'flags',
                returnType: 'ParamSpecFlags',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'flagsType',
                        type: 'GType<unknown>',
                    },
                    {
                        name: 'defaultValue',
                        type: 'boolean',
                    },
                ],
            },
            // static enum<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, enumType: GType<T>, defaultValue: number): ParamSpecEnum
            {
                name: 'enum',
                returnType: 'ParamSpecEnum',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'enumType',
                        type: 'GType<unknown>',
                    },
                    {
                        name: 'defaultValue',
                        type: 'boolean',
                    },
                ],
            },
            // static double(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecDouble
            {
                name: 'double',
                returnType: 'ParamSpecDouble',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'minimum',
                        type: 'number',
                    },
                    {
                        name: 'maximum',
                        type: 'number',
                    },
                    {
                        name: 'defaultValue',
                        type: 'number',
                    },
                ],
            },
            // static string(name: string, nick: string, blurb: string, flags: ParamFlags, defaultValue: string | null): ParamSpecString
            {
                name: 'string',
                returnType: 'ParamSpecString',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'defaultValue',
                        type: 'string | null',
                    },
                ],
            },
            // static boxed<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, boxedType: GType<T>): ParamSpecBoxed
            {
                name: 'boxed',
                returnType: 'ParamSpecBoxed',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'boxedType',
                        type: 'GType<unknown>',
                    },
                ],
            },
            // static object<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, objectType: GType<T>): ParamSpecObject
            {
                name: 'object',
                returnType: 'ParamSpecObject',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'objectType',
                        type: 'GType<unknown>',
                    },
                ],
            },
            // static jsobject(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpecBoxed
            {
                name: 'jsobject',
                returnType: 'ParamSpecBoxed',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                ],
            },
            // static param<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, paramType: GType<T>): ParamSpecParam
            {
                name: 'param',
                returnType: 'ParamSpecParam',
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'nick',
                        type: 'string',
                    },
                    {
                        name: 'blurb',
                        type: 'string',
                    },
                    {
                        name: 'flags',
                        type: 'ParamFlags',
                    },
                    {
                        name: 'paramType',
                        type: 'GType<unknown>',
                    },
                ],
            },
            // static override(oclass: Object | Function | GType, property_id: number, name: string): void
            {
                name: 'override',
                returnType: 'void',
                isStatic: true,
                inParams: [
                    {
                        name: 'oclass',
                        type: 'Object | Function | GType',
                    },
                    {
                        name: 'property_id',
                        type: 'number',
                    },
                    {
                        name: 'name',
                        type: 'string',
                    },
                ],
            },
        ],
    },
]
