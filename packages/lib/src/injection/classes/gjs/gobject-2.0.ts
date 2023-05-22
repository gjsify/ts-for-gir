import type { InjectionClass } from '../../../types/index.js'

export const classesGObject20Gjs: InjectionClass[] = [
    {
        versions: ['2.0'],
        qualifiedName: 'GObject.ParamSpec',
        // Static functions injected by GJS, see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/GObject.js
        staticFunctions: [
            // static char(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecChar
            {
                girTypeName: 'static-function',
                name: 'char',
                returnTypes: [{ type: 'GObject.ParamSpecChar' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static uchar(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUChar
            {
                girTypeName: 'static-function',
                name: 'uchar',
                returnTypes: [{ type: 'GObject.ParamSpecUChar' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static int(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecInt
            {
                girTypeName: 'static-function',
                name: 'int',
                returnTypes: [{ type: 'GObject.ParamSpecInt' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static uint(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUInt
            {
                girTypeName: 'static-function',
                name: 'uint',
                returnTypes: [{ type: 'GObject.ParamSpecUInt' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static long(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecLong
            {
                girTypeName: 'static-function',
                name: 'long',
                returnTypes: [{ type: 'GObject.ParamSpecLong' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static ulong(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecULong
            {
                girTypeName: 'static-function',
                name: 'ulong',
                returnTypes: [{ type: 'GObject.ParamSpecULong' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static int64(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecInt64
            {
                girTypeName: 'static-function',
                name: 'int64',
                returnTypes: [{ type: 'GObject.ParamSpecInt64' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static uint64(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecUInt64
            {
                girTypeName: 'static-function',
                name: 'uint64',
                returnTypes: [{ type: 'GObject.ParamSpecUInt64' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static float(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecFloat
            {
                girTypeName: 'static-function',
                name: 'float',
                returnTypes: [{ type: 'GObject.ParamSpecFloat' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static boolean(name: string, nick: string, blurb: string, flags: ParamFlags, defaultValue: boolean): ParamSpecBoolean
            {
                girTypeName: 'static-function',
                name: 'boolean',
                returnTypes: [{ type: 'GObject.ParamSpecBoolean' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'boolean' }],
                    },
                ],
            },
            // TODO add generic
            // static flags<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, flagsType: GType<T>, defaultValue: number): ParamSpecFlags
            {
                girTypeName: 'static-function',
                name: 'flags',
                returnTypes: [{ type: 'GObject.ParamSpecFlags' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'flagsType',
                        type: [{ type: 'GObject.GType<unknown>' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'boolean' }],
                    },
                ],
            },
            // static enum<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, enumType: GType<T>, defaultValue: number): ParamSpecEnum
            {
                girTypeName: 'static-function',
                name: 'enum',
                returnTypes: [{ type: 'GObject.ParamSpecEnum' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'enumType',
                        type: [{ type: 'GObject.GType<unknown>' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'boolean' }],
                    },
                ],
            },
            // static double(name: string, nick: string, blurb: string, flags: ParamFlags, minimum: number, maximum: number, defaultValue: number): ParamSpecDouble
            {
                girTypeName: 'static-function',
                name: 'double',
                returnTypes: [{ type: 'GObject.ParamSpecDouble' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'minimum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'maximum',
                        type: [{ type: 'number' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            // static string(name: string, nick: string, blurb: string, flags: ParamFlags, defaultValue: string | null): ParamSpecString
            {
                girTypeName: 'static-function',
                name: 'string',
                returnTypes: [{ type: 'GObject.ParamSpecString' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'defaultValue',
                        type: [{ type: 'string | null' }],
                    },
                ],
            },
            // static boxed<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, boxedType: GType<T>): ParamSpecBoxed
            {
                girTypeName: 'static-function',
                name: 'boxed',
                returnTypes: [{ type: 'GObject.ParamSpecBoxed' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'boxedType',
                        type: [{ type: 'GObject.GType<unknown>' }],
                    },
                ],
            },
            // static object<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, objectType: GType<T>): ParamSpecObject
            {
                girTypeName: 'static-function',
                name: 'object',
                returnTypes: [{ type: 'GObject.ParamSpecObject' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'objectType',
                        type: [{ type: 'GObject.GType<unknown>' }],
                    },
                ],
            },
            // static jsobject(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpecBoxed
            {
                girTypeName: 'static-function',
                name: 'jsobject',
                returnTypes: [{ type: 'GObject.ParamSpecBoxed' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                ],
            },
            // static param<T = unknown>(name: string, nick: string, blurb: string, flags: ParamFlags, paramType: GType<T>): ParamSpecParam
            {
                girTypeName: 'static-function',
                name: 'param',
                returnTypes: [{ type: 'GObject.ParamSpecParam' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'nick',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'blurb',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'GObject.ParamFlags' }],
                    },
                    {
                        name: 'paramType',
                        type: [{ type: 'GObject.GType<unknown>' }],
                    },
                ],
            },
            // static override(name: string, oclass: GObject.Object | Function | GObject.GType): void
            {
                girTypeName: 'static-function',
                name: 'override',
                returnTypes: [{ type: 'void' }],
                isStatic: true,
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'oclass',
                        type: [{ type: 'GObject.Object' }, { type: 'Function' }, { type: 'GObject.GType' }],
                    },
                ],
            },
        ],
    },
]
