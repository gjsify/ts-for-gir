import { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedClassFunction } from "../gir/class-function.ts";
import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import { IntrospectedFunction } from "../gir/function.ts";
import { IntrospectedStaticClassFunction } from "../gir/static-function.ts";
import { IntrospectedConstructor } from "../gir/constructor.ts";

import {
    StringType,
    NativeType,
    FunctionType,
    GenerifiedType,
    GenericType,
    AnyFunctionType,
    ArrayType,
    AnyType,
    VoidType,
    GenerifiedTypeIdentifier,
    Generic,
    Uint8ArrayType,
    BooleanType,
    TypeIdentifier,
    ThisType,
} from "../gir.ts";
import { IntrospectedAlias } from "../gir/alias.ts";
import { GirDirection } from "@gi.ts/parser";
import { IntrospectedField, JSField } from "../gir/property.ts";
import { IntrospectedClass } from "../gir/introspected-class.ts";
import { IntrospectedInterface } from "../gir/interface.ts";

export default {
    namespace: "Gio",
    version: "2.0",
    modifier(namespace: IntrospectedNamespace) {
        // For IterableIterator...
        namespace.___dts___addReference('/// <reference lib="es2015.iterable" />');
        namespace.___dts___addReference('/// <reference lib="es2018.asynciterable" />');

        {
            const DBusNodeInfo = namespace.assertClass("DBusNodeInfo");

            DBusNodeInfo.constructors.push(
                new IntrospectedConstructor({
                    name: "new_for_xml",
                    parent: DBusNodeInfo,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "info",
                            type: StringType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: DBusNodeInfo.getType()
                })
            );
        }

        {
            const DBusInterfaceInfo = namespace.assertClass("DBusInterfaceInfo");

            DBusInterfaceInfo.constructors.push(
                new IntrospectedConstructor({
                    name: "new_for_xml",
                    parent: DBusInterfaceInfo,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "info",
                            type: StringType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: DBusInterfaceInfo.getType()
                })
            );
        }

        {
            const ListStore = namespace.assertClass("ListStore");

            ListStore.fields.push(
                new IntrospectedField({
                    name: "Symbol.iterator",
                    parent: ListStore,
                    computed: true,
                    type: new FunctionType(
                        {},
                        new GenerifiedType(new NativeType("IterableIterator"), new GenericType("A"))
                    )
                })
            );
        }

        {
            const FileEnumerator = namespace.assertClass("FileEnumerator");

            FileEnumerator.fields.push(
                // Implementation of the override [Gio.FileEnumerator[Symbol.iterator](https://gjs-docs.gnome.org/gjs/overrides.md#gio-fileenumerator-symbol-iterator)
                new JSField({
                    name: "Symbol.iterator",
                    parent: FileEnumerator,
                    computed: true,
                    doc: 'Gio.FileEnumerator are sync iterators.\nEach iteration returns a Gio.FileInfo:\n\n```js\nimport Gio from "gi://Gio";\n\nconst dir = Gio.File.new_for_path("/");\nconst enumerator = dir.enumerate_children(\n  "standard::name",\n  Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,\n  null\n);\n\nfor (const file_info of enumerator) {\n  console.log(file_info.get_name());\n}\n```\n',
                    type: new FunctionType(
                        {},
                        new GenerifiedType(new NativeType("IterableIterator"), new GenericType("FileInfo"))
                    )
                }),
                // Implementation of the override [Gio.FileEnumerator[Symbol.asyncIterator]](https://gjs-docs.gnome.org/gjs/overrides.md#gio-fileenumerator-symbol-asynciterator)
                new JSField({
                    name: "Symbol.asyncIterator",
                    parent: FileEnumerator,
                    computed: true,
                    doc: 'Gio.FileEnumerator are async iterators.\nEach iteration returns a Gio.FileInfo:\n\n```js\nimport Gio from "gi://Gio";\n\nconst dir = Gio.File.new_for_path("/");\nconst enumerator = dir.enumerate_children(\n  "standard::name",\n  Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,\n  null\n);\n\nfor await (const file_info of enumerator) {\n  console.log(file_info.get_name());\n}\n```\n',
                    type: new FunctionType(
                        {},
                        new GenerifiedType(new NativeType("AsyncIterableIterator"), new GenericType("FileInfo"))
                    )
                })
            );
        }

        {
            const SettingsSchema = namespace.assertClass("SettingsSchema");

            SettingsSchema.fields.push(
                new JSField({
                    name: "_realGetKey",
                    parent: SettingsSchema,
                    type: new NativeType("typeof SettingsSchema.prototype.get_key")
                })
            );
        }

        {
            const Settings = namespace.assertClass("Settings");

            Settings.fields.push(
                new JSField({
                    name: "_realInit",
                    parent: Settings,
                    type: AnyFunctionType
                }),
                new JSField({
                    name: "_realMethods",
                    parent: Settings,
                    type: new NativeType("typeof Settings.prototype")
                }),
                new JSField({
                    name: "_keys",
                    parent: Settings,
                    type: new ArrayType(StringType)
                }),
                new JSField({
                    name: "_children",
                    parent: Settings,
                    type: new ArrayType(StringType)
                })
            );
        }
        {
            const DBusProxy = namespace.assertClass("DBusProxy");

            // This is not ideal, but DBusProxy's define functions and properties on the prototype.
            DBusProxy.__ts__indexSignature = "[key: string]: any;";

            const makeProxyWrapper = new IntrospectedStaticClassFunction({
                name: "makeProxyWrapper",
                parent: DBusProxy,
                parameters: [
                    new IntrospectedFunctionParameter({
                        name: "args",
                        type: new ArrayType(AnyType),
                        isVarArgs: true,
                        direction: GirDirection.In
                    })
                ],
                return_type: new NativeType(
                    "(bus: DBusConnection, name: string, object: string, asyncCallback?: (initable: (T & DBusProxy) | null, error: unknown | null) => void, cancellable?: Cancellable | null, flags?: DBusProxyFlags) => T & DBusProxy"
                )
            });

            makeProxyWrapper.generics.push(new Generic(new GenericType("T")));

            DBusProxy.members.push(
                makeProxyWrapper,
                new IntrospectedClassFunction({
                    name: "connectSignal",
                    parent: DBusProxy,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "proxy",
                            type: ThisType,
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "name",
                            type: StringType,
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "args",
                            type: new ArrayType(AnyType),
                            direction: GirDirection.In
                        })
                    ],
                    return_type: AnyType
                }),
                new IntrospectedClassFunction({
                    name: "disconnectSignal",
                    parent: DBusProxy,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "args",
                            type: new ArrayType(AnyType),
                            isVarArgs: true,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: AnyType
                })
            );
        }

        {
            const [bus_get] = namespace.getMembers("bus_get");
            const [bus_get_finish] = namespace.getMembers("bus_get_finish");
            const [bus_get_sync] = namespace.getMembers("bus_get_sync");
            const [bus_own_name] = namespace.getMembers("bus_own_name");
            const [bus_own_name_on_connection] = namespace.getMembers("bus_own_name_on_connection");
            const [bus_unown_name] = namespace.getMembers("bus_unown_name");
            const [bus_watch_name] = namespace.getMembers("bus_watch_name");
            const [bus_unwatch_name] = namespace.getMembers("bus_unwatch_name");
            const [bus_watch_name_on_connection] = namespace.getMembers("bus_watch_name_on_connection");

            if (
                !(
                    bus_get instanceof IntrospectedFunction &&
                    bus_get_finish instanceof IntrospectedFunction &&
                    bus_get_sync instanceof IntrospectedFunction &&
                    bus_own_name instanceof IntrospectedFunction &&
                    bus_own_name_on_connection instanceof IntrospectedFunction &&
                    bus_unown_name instanceof IntrospectedFunction &&
                    bus_watch_name instanceof IntrospectedFunction &&
                    bus_unwatch_name instanceof IntrospectedFunction &&
                    bus_watch_name_on_connection instanceof IntrospectedFunction
                )
            ) {
                throw new Error("Invalid dbus functions found in Gio!");
            }

            const DBus = new IntrospectedInterface({
                name: "DBus",
                namespace
            });

            DBus.members.push(
                ...[
                    bus_get,
                    bus_get_finish,
                    bus_get_sync,
                    bus_own_name,
                    bus_own_name_on_connection,
                    bus_unown_name,
                    bus_watch_name,
                    bus_unwatch_name,
                    bus_watch_name_on_connection
                ]
                    .map(fn => fn.asStaticClassFunction(DBus))
                    .map(fn => {
                        const member = fn.copy();

                        member.name = member.name.substring(4);

                        return member;
                    })
            );

            const DBusConnection = namespace.assertClass("DBusConnection");

            const call = DBusConnection.members.find(m => m.name === "call");
            const callFinish = DBusConnection.members.find(m => m.name === "call_finish");

            if (!call || !callFinish) {
                throw new Error("Missing call or call_finish in Gio.DBusConnection.");
            }

            // Add <T> generic
            const call_generic = new Generic(new GenericType("T"), AnyType, undefined, StringType);
            call.generics.push(call_generic);
            callFinish.generics.push(call_generic);

            const replacement = call.copy({
                parameters: call.parameters.map(p => {
                    if (p.name === "reply_type") {
                        // Generify the parameter
                        return p.copy({
                            type: p.type.rewrap(
                                new GenerifiedTypeIdentifier("VariantType", "GLib", [new GenericType("T")])
                            )
                        });
                    }

                    return p;
                })
            });

            const finishReplacement = callFinish.copy({
                returnType: callFinish
                    .return()
                    .rewrap(new GenerifiedTypeIdentifier("Variant", "GLib", [new GenericType("T")]))
            });

            DBusConnection.members.splice(DBusConnection.members.indexOf(call), 1, replacement);
            DBusConnection.members.splice(DBusConnection.members.indexOf(callFinish), 1, finishReplacement);

            DBusConnection.members.push(
                new IntrospectedClassFunction({
                    name: "watch_name",
                    parameters: bus_watch_name_on_connection.parameters.slice(1),
                    return_type: bus_watch_name_on_connection.return_type,
                    parent: DBusConnection
                }),
                new IntrospectedClassFunction({
                    name: "unwatch_name",
                    parameters: bus_unwatch_name.parameters.slice(),
                    return_type: bus_unwatch_name.return_type,
                    parent: DBusConnection
                }),
                new IntrospectedClassFunction({
                    name: "own_name",
                    parameters: bus_own_name_on_connection.parameters.slice(1),
                    return_type: bus_own_name_on_connection.return_type,
                    parent: DBusConnection
                }),
                new IntrospectedClassFunction({
                    name: "unown_name",
                    parameters: bus_unown_name.parameters.slice(),
                    return_type: bus_unown_name.return_type,
                    parent: DBusConnection
                })
            );

            DBus.fields.push(
                new JSField({
                    isStatic: true,
                    name: "session",
                    parent: DBus,
                    type: DBusConnection.getType(),
                    writable: false
                }),
                new JSField({
                    isStatic: true,
                    name: "system",
                    parent: DBus,
                    type: DBusConnection.getType(),
                    writable: false
                })
            );

            namespace.members.set("DBus", DBus);
        }

        // From GJS Documentation:
        //
        // `Gio.DBusExportedObject.wrapJSObject(Gio.DbusInterfaceInfo, jsObj)`

        // Takes `jsObj`, an object instance implementing the interface described by `Gio.DbusInterfaceInfo`, and returns an implementation object with these methods:

        // * `export(busConnection, objectPath)`
        // * `unexport()`
        // * `flush()`
        // * `emit_signal(name, variant)`
        // * `emit_property_changed(name, variant)`

        {
            const Variant = namespace.assertInstalledImport("GLib").assertClass("Variant");
            const DBusConnection = namespace.assertClass("DBusConnection");
            const DBusInterfaceInfo = namespace.assertClass("DBusInterfaceInfo");
            const DBusExportedObject = new IntrospectedClass("DBusExportedObject", namespace);

            DBusExportedObject.members.push(
                new IntrospectedStaticClassFunction({
                    name: "wrapJSObject",
                    parent: DBusExportedObject,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "info",
                            type: StringType,
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "obj",
                            type: AnyType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: DBusExportedObject.getType()
                }),
                new IntrospectedClassFunction({
                    name: "get_info",
                    parent: DBusExportedObject,
                    parameters: [],
                    return_type: DBusInterfaceInfo.getType()
                }),
                new IntrospectedClassFunction({
                    name: "get_connection",
                    parent: DBusExportedObject,
                    parameters: [],
                    return_type: DBusConnection.getType()
                }),
                new IntrospectedClassFunction({
                    name: "get_object_path",
                    parent: DBusExportedObject,
                    parameters: [],
                    return_type: StringType
                }),
                new IntrospectedClassFunction({
                    name: "unexport_from_connection",
                    parent: DBusExportedObject,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "connection",
                            type: DBusConnection.getType(),
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                }),
                // export(busConnection, objectPath)
                new IntrospectedClassFunction({
                    name: "export",
                    parent: DBusExportedObject,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "busConnection",
                            type: DBusConnection.getType(),
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "objectPath",
                            type: StringType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                }),
                // unexport()
                new IntrospectedClassFunction({
                    name: "unexport",
                    parent: DBusExportedObject,
                    return_type: VoidType
                }),
                // flush()
                new IntrospectedClassFunction({
                    name: "flush",
                    parent: DBusExportedObject,
                    return_type: VoidType
                }),
                // emit_signal(name, variant)
                new IntrospectedClassFunction({
                    name: "emit_signal",
                    parent: DBusExportedObject,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "name",
                            type: StringType,
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "variant",
                            type: Variant.getType(),
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                }),
                // emit_property_changed(name, variant)
                new IntrospectedClassFunction({
                    name: "emit_property_changed",
                    parent: DBusExportedObject,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "name",
                            type: StringType,
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "variant",
                            type: Variant.getType(),
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                })
            );

            namespace.members.set("DBusExportedObject", DBusExportedObject);
        }

        {
            // See https://github.com/gjsify/ts-for-gir/issues/130
            const Application = namespace.assertClass("Application");

            Application.members.push(
                new IntrospectedClassFunction({
                    parent: Application,
                    name: "runAsync",
                    parameters: [
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "argv",
                            isOptional: true,
                            type: new ArrayType(StringType),
                            doc: "Commandline arguments"
                        })
                    ],
                    return_type: new NativeType("Promise<number>"),
                    doc: "Similar to `Gio.Application.run` but return a Promise which resolves when the main loop ends, instead of blocking while the main loop runs.\nThis helps avoid the situation where Promises never resolved if you didn't run the application inside a callback."
                })
            );
        }

        {
            const File = namespace.assertClass("File");

            const Flags = namespace.getEnum("FileCreateFlags");

            if (!Flags) throw new Error("Missing FileCreateFlags");

            File.members.push(
                new IntrospectedClassFunction({
                    parent: File,
                    name: "replace_contents_async",
                    return_type: VoidType,
                    // contents: Uint8Array, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null
                    parameters: [
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "contents",
                            type: Uint8ArrayType
                        }),
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "etag",
                            isNullable: true,
                            type: StringType
                        }),
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "make_backup",
                            type: BooleanType
                        }),
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "flags",
                            type: Flags.getType()
                        }),
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "cancellable",
                            isNullable: true,
                            type: namespace.assertClass("Cancellable").getType()
                        }),
                        new IntrospectedFunctionParameter({
                            direction: GirDirection.In,
                            name: "callback",
                            isNullable: true,
                            type: new TypeIdentifier("AsyncReadyCallback", "Gio")
                        })
                    ]
                })
            );
        }

        {
            const InputStream = namespace.assertClass("InputStream");
            const Bytes = namespace.assertInstalledImport("GLib").assertClass("Bytes");

            InputStream.members.push(
                // Implementation of the override [Gio.InputStream.prototype.createAsyncIterator](https://gjs-docs.gnome.org/gjs/overrides.md#gio-inputstream-createasynciterator)
                new IntrospectedClassFunction({
                    name: "createAsyncIterator",
                    parent: InputStream,
                    doc: 'Creates an asynchronous iterator for a Gio.InputStream that reads the stream in chunks.\n\nEach iteration will return a GLib.Bytes object containing at most `count` bytes (default 4096). The iterator will end when the stream is exhausted.\n\nExample:\n```js\nimport Gio from "gi://Gio";\n\nconst textDecoder = new TextDecoder("utf-8");\n\nconst file = Gio.File.new_for_path("/etc/os-release");\nconst inputStream = file.read(null);\n\nfor await (const bytes of inputStream.createAsyncIterator(4)) {\n  log(textDecoder.decode(bytes.toArray()));\n}\n```\n\n@returns An async iterator yielding GLib.Bytes objects',
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "count",
                            type: new NativeType("number"),
                            isOptional: true,
                            direction: GirDirection.In,
                            doc: "Maximum number of bytes to read per chunk (default: 4096)"
                        }),
                        new IntrospectedFunctionParameter({
                            name: "priority",
                            type: new NativeType("number"),
                            isOptional: true,
                            direction: GirDirection.In,
                            doc: "I/O priority of the request (default: GLib.PRIORITY_DEFAULT)"
                        })
                    ],
                    return_type: new GenerifiedType(
                        new NativeType("AsyncIterableIterator"),
                        new GenericType(`${Bytes.namespace.namespace}.${Bytes.name}`)
                    )
                }),
                // Implementation of the override [Gio.InputStream.prototype.createSyncIterator](https://gjs-docs.gnome.org/gjs/overrides.md#gio-inputstream-createsynciterator)
                new IntrospectedClassFunction({
                    name: "createSyncIterator",
                    parent: InputStream,
                    doc: 'Creates a synchronous iterator for a Gio.InputStream that reads the stream in chunks.\n\nEach iteration will return a GLib.Bytes object containing at most `count` bytes (default 4096). The iterator will end when the stream is exhausted.\n\nExample:\n```js\nimport Gio from "gi://Gio";\n\nconst textDecoder = new TextDecoder("utf-8");\n\nconst file = Gio.File.new_for_path("/etc/os-release");\nconst inputStream = file.read(null);\n\nfor (const bytes of inputStream.createSyncIterator(4)) {\n  log(textDecoder.decode(bytes.toArray()));\n}\n```\n\n@returns An iterable yielding GLib.Bytes objects',
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "count",
                            type: new NativeType("number"),
                            isOptional: true,
                            direction: GirDirection.In,
                            doc: "Maximum number of bytes to read per chunk (default: 4096)"
                        }),
                        new IntrospectedFunctionParameter({
                            name: "priority",
                            type: new NativeType("number"),
                            isOptional: true,
                            direction: GirDirection.In,
                            doc: "I/O priority of the request (default: GLib.PRIORITY_DEFAULT)"
                        })
                    ],
                    return_type: new GenerifiedType(
                        new NativeType("IterableIterator"),
                        new GenericType(`${Bytes.namespace.namespace}.${Bytes.name}`)
                    )
                })
            );
        }

        // Add ActionEntry type
        const SimpleAction = namespace.assertClass("SimpleAction");
        const GLib = namespace.assertInstalledImport("GLib");
        const Variant = GLib.assertClass("Variant");

        /**
         * Type for action entries used in {@link ActionMap.add_action_entries}
         * 
         * This type definition matches the GJS override implementation at:
         * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/core/overrides/Gio.js#L827
         * 
         * The add_action_entries method is overridden by GJS to provide a more convenient API
         * for adding multiple actions at once. This type definition provides proper TypeScript
         * typing for that override.
         * 
         * @see https://gitlab.gnome.org/GNOME/gjs/-/issues/407 for the original discussion
         * @see https://github.com/gjsify/ts-for-gir/issues/153 for the related issue in ts-for-gir
         */
        const ActionEntryObj = new IntrospectedAlias({
            name: "ActionEntryObj",
            namespace,
            type: new NativeType(`{
                /** The name of the action */
                name: string;
                /** The type of the parameter that must match the parameter_type specified in the entry */
                parameter_type?: string;
                /** The initial state of the action */
                state?: string;
                /** The callback to connect to the "activate" signal of the action */
                activate?: (_source: ${SimpleAction.name}, parameter: ${Variant.namespace.namespace}.${Variant.name} | null) => void;
                /** The callback to connect to the "change-state" signal of the action */
                change_state?: (_source: ${SimpleAction.name}, value: ${Variant.namespace.namespace}.${Variant.name} | null) => void;
            }`),
            doc: "Type for action entries used in the overridden {@link ActionMap.add_action_entries}"
        });
        
        namespace.members.set("ActionEntryObj", ActionEntryObj);

        // Create new method with updated signature
        const ActionMap = namespace.assertClass("ActionMap") as IntrospectedInterface;
        const newMethod = new IntrospectedClassFunction({
            name: "add_action_entries",
            parent: ActionMap,
            parameters: [
                new IntrospectedFunctionParameter({
                    name: "entries",
                    type: new ArrayType(new TypeIdentifier("ActionEntryObj", "Gio")),
                    direction: GirDirection.In,
                    doc: "Array of action entries to add"
                }),
            ],
            return_type: VoidType,
            doc: "A convenience function for creating multiple simple actions. \nSee Gio.ActionEntryObj for the structure of the action entry."
        });

        // Find and replace the existing method
        const existingMethodIndex = ActionMap.members.findIndex(
            member => member.name === "add_action_entries"
        );

        if (existingMethodIndex !== -1) {
            ActionMap.members[existingMethodIndex] = newMethod;
        } else {
            console.warn("Could not find existing add_action_entries method to override");
            ActionMap.members.push(newMethod);
        }
    }
};
