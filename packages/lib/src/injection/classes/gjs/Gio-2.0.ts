import type { InjectionClass } from '../../../types/index.js'

/**
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/Gio.js
 */
export const classesGio20Gjs: InjectionClass[] = [
    {
        versions: ['2.0'],
        qualifiedName: 'Gio.DBusProxy',
        staticFunctions: [
            {
                name: 'makeProxyWrapper',
                girTypeName: 'static-function',
                isStatic: true,
                generics: [
                    {
                        name: 'T',
                    },
                ],
                returnTypes: [
                    {
                        type: '(bus: DBusConnection, name: string, object: string, asyncCallback?: (initable: (T & DBusProxy) | null, error: unknown | null) => void, cancellable?: Cancellable | null, flags?: DBusProxyFlags) => T & DBusProxy',
                    },
                ],
                inParams: [
                    {
                        name: 'interfaceXml',
                        type: [{ type: 'string' }],
                    },
                ],
            },
        ],
        methods: [
            {
                name: 'connectSignal',
                girTypeName: 'method',
                returnTypes: [{ type: 'number' }],
                generics: [
                    {
                        name: 'T',
                        value: 'any[]',
                    },
                ],
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'callback',
                        type: [{ type: '(proxy: DBusProxy, name: string, args: T) => boolean | void' }],
                    },
                ],
            },
            {
                name: 'disconnectSignal',
                girTypeName: 'method',
                returnTypes: [{ type: 'void' }],
                inParams: [
                    {
                        name: 'id',
                        type: [{ type: 'number' }],
                    },
                ],
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'Gio.DBusConnection',
        methods: [
            {
                name: 'watch_name',
                girTypeName: 'method',
                returnTypes: [{ type: 'number' }],
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'Gio.BusNameWatcherFlags' }],
                    },
                    {
                        name: 'name_appeared_closure',
                        type: [{ type: 'GObject.TClosure', nullable: true }],
                    },
                    {
                        name: 'name_vanished_closure',
                        type: [{ type: 'GObject.TClosure', nullable: true }],
                    },
                ],
            },
            {
                name: 'unwatch_name',
                girTypeName: 'method',
                returnTypes: [{ type: 'void' }],
                inParams: [
                    {
                        name: 'id',
                        type: [{ type: 'number' }],
                    },
                ],
            },
            {
                name: 'own_name',
                girTypeName: 'method',
                returnTypes: [{ type: 'number' }],
                inParams: [
                    {
                        name: 'name',
                        type: [{ type: 'string' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'Gio.BusNameOwnerFlags' }],
                    },
                    {
                        name: 'name_acquired_closure',
                        type: [{ type: 'GObject.TClosure', nullable: true }],
                    },
                    {
                        name: 'name_lost_closure',
                        type: [{ type: 'GObject.TClosure', nullable: true }],
                    },
                ],
            },
            {
                name: 'unown_name',
                girTypeName: 'method',
                returnTypes: [{ type: 'void' }],
                inParams: [
                    {
                        name: 'id',
                        type: [{ type: 'number' }],
                    },
                ],
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'Gio.ListStore',
        generics: [
            {
                name: 'A',
                extends: 'GObject.Object',
                value: 'GObject.Object',
            },
        ],
        methods: [
            {
                name: 'insert_sorted',
                girTypeName: 'method',
                returnTypes: [{ type: 'number' }],
                inParams: [
                    {
                        name: 'item',
                        type: [{ type: 'A' }],
                    },
                    {
                        name: 'compare_func',
                        type: [{ type: 'GLib.CompareDataFunc' }],
                    },
                ],
            },
            {
                name: 'sort',
                girTypeName: 'method',
                returnTypes: [{ type: 'void' }],
                inParams: [
                    {
                        name: 'compare_func',
                        type: [{ type: 'GLib.CompareDataFunc' }],
                    },
                ],
            },
        ],
    },
    {
        versions: ['2.0'],
        qualifiedName: 'Gio.File',
        methods: [
            {
                name: 'replace_contents_async',
                girTypeName: 'method',
                returnTypes: [{ type: 'void' }],
                // contents: Uint8Array, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null
                inParams: [
                    {
                        name: 'contents',
                        type: [{ type: 'Uint8Array' }],
                    },
                    {
                        name: 'etag',
                        type: [{ type: 'string', nullable: true }],
                    },
                    {
                        name: 'make_backup',
                        type: [{ type: 'boolean' }],
                    },
                    {
                        name: 'flags',
                        type: [{ type: 'FileCreateFlags' }],
                    },
                    {
                        name: 'cancellable',
                        type: [{ type: 'Cancellable', nullable: true }],
                    },
                    {
                        name: 'callback',
                        type: [{ type: 'AsyncReadyCallback', nullable: true }],
                    },
                ],
            },
        ],
    },
]
