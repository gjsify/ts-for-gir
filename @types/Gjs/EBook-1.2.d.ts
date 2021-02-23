/**
 * EBook-1.2
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as EDataServer from './EDataServer-1.2';
import type * as Soup from './Soup-2.4';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';
import type * as EBookContacts from './EBookContacts-1.2';

export enum BookStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_BOOK,
    NO_SELF_CONTACT,
    SOURCE_NOT_LOADED,
    SOURCE_ALREADY_LOADED,
    PERMISSION_DENIED,
    CONTACT_NOT_FOUND,
    CONTACT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    TLS_NOT_AVAILABLE,
    DBUS_EXCEPTION,
    NO_SUCH_SOURCE,
    OFFLINE_UNAVAILABLE,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    UNSUPPORTED_AUTHENTICATION_METHOD,
    NO_SPACE,
    NOT_SUPPORTED,
}
export function book_error_quark(): GLib.Quark
export function book_utils_get_recipient_certificates_sync(registry: EDataServer.SourceRegistry, only_clients: BookClient[] | null, flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
export interface BookClient_ConstructProps extends EDataServer.Client_ConstructProps {
}
export class BookClient {
    /* Properties of EBook-1.2.EBook.BookClient */
    readonly locale: string
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly main_context: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClient */
    add_contact(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_contact_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_added_uid */ string ]
    add_contact_sync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_added_uid */ string ]
    add_contacts(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_contacts_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_added_uids */ string[] | null ]
    add_contacts_sync(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_added_uids */ string[] | null ]
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    get_contacts(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contacts_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    get_contacts_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    get_contacts_uids(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contacts_uids_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_contact_uids */ string[] ]
    get_contacts_uids_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact_uids */ string[] ]
    get_cursor(sexp: string, sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cursor_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_cursor */ BookClientCursor ]
    get_cursor_sync(sexp: string, sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cursor */ BookClientCursor ]
    get_locale(): string
    get_view(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_view */ BookClientView ]
    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_view */ BookClientView ]
    modify_contact(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_contact_finish(result: Gio.AsyncResult): boolean
    modify_contact_sync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    modify_contacts(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    modify_contacts_sync(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null): boolean
    remove_contact(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_contact_by_uid(uid: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_contact_by_uid_finish(result: Gio.AsyncResult): boolean
    remove_contact_by_uid_sync(uid: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    remove_contact_finish(result: Gio.AsyncResult): boolean
    remove_contact_sync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    remove_contacts_sync(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null): boolean
    set_self(contact: EBookContacts.Contact): boolean
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancel_all(): void
    check_capability(capability: string): boolean
    check_refresh_supported(): boolean
    dup_bus_name(): string
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    get_capabilities(): string[]
    get_source(): EDataServer.Source
    is_online(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    ref_main_context(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    set_bus_name(bus_name: string): void
    unwrap_dbus_error(dbus_error: GLib.Error): void
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBook-1.2.EBook.BookClient */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: BookClient) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: BookClient) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: BookClient, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: BookClient, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: BookClient, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: BookClient, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: BookClient, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: BookClient, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookClient_ConstructProps)
    _init (config?: BookClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source): BookClient
    static connect(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connect_direct(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connect_direct_finish(result: Gio.AsyncResult): BookClient
    static connect_direct_sync(registry: EDataServer.SourceRegistry, source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null): BookClient
    static connect_finish(result: Gio.AsyncResult): BookClient
    static connect_sync(source: EDataServer.Source, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null): BookClient
    static get_self(registry: EDataServer.SourceRegistry): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_client */ BookClient ]
    static is_self(contact: EBookContacts.Contact): boolean
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface BookClientCursor_ConstructProps extends GObject.Object_ConstructProps {
    client?: BookClient
    connection?: Gio.DBusConnection
    context?: GLib.MainContext
    object_path?: string
    sort_fields?: string[]
}
export class BookClientCursor {
    /* Properties of EBook-1.2.EBook.BookClientCursor */
    readonly alphabet: string[]
    readonly position: number
    readonly total: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClientCursor */
    get_alphabet(): [ /* returnType */ string[], /* n_labels */ number | null, /* underflow */ number | null, /* inflow */ number | null, /* overflow */ number | null ]
    get_contact_alphabetic_index(contact: EBookContacts.Contact): number
    get_position(): number
    get_total(): number
    ref_client(): object | null
    set_alphabetic_index(index: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_alphabetic_index_finish(result: Gio.AsyncResult): boolean
    set_alphabetic_index_sync(index: number, cancellable?: Gio.Cancellable | null): boolean
    set_sexp(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_sexp_finish(result: Gio.AsyncResult): boolean
    set_sexp_sync(sexp: string, cancellable?: Gio.Cancellable | null): boolean
    step(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    step_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* out_contacts */ EBookContacts.Contact[] | null ]
    step_sync(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* out_contacts */ EBookContacts.Contact[] | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBook-1.2.EBook.BookClientCursor */
    vfunc_refresh(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBook-1.2.EBook.BookClientCursor */
    connect(sigName: "refresh", callback: (($obj: BookClientCursor) => void)): number
    connect_after(sigName: "refresh", callback: (($obj: BookClientCursor) => void)): number
    emit(sigName: "refresh"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookClientCursor_ConstructProps)
    _init (config?: BookClientCursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface BookClientView_ConstructProps extends GObject.Object_ConstructProps {
    client?: BookClient
    connection?: Gio.DBusConnection
    object_path?: string
}
export class BookClientView {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClientView */
    get_client(): object | null
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    is_running(): boolean
    ref_client(): object | null
    set_fields_of_interest(fields_of_interest: string[]): void
    set_flags(flags: EBookContacts.BookClientViewFlags): void
    start(): void
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBook-1.2.EBook.BookClientView */
    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBook-1.2.EBook.BookClientView */
    connect(sigName: "complete", callback: (($obj: BookClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: BookClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: BookClientView, object?: object | null) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: BookClientView, object?: object | null) => void)): number
    emit(sigName: "objects-added", object?: object | null): void
    connect(sigName: "objects-modified", callback: (($obj: BookClientView, object?: object | null) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: BookClientView, object?: object | null) => void)): number
    emit(sigName: "objects-modified", object?: object | null): void
    connect(sigName: "objects-removed", callback: (($obj: BookClientView, object?: object | null) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: BookClientView, object?: object | null) => void)): number
    emit(sigName: "objects-removed", object?: object | null): void
    connect(sigName: "progress", callback: (($obj: BookClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: BookClientView, object: number, p0: string) => void)): number
    emit(sigName: "progress", object: number, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookClientView_ConstructProps)
    _init (config?: BookClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Destination_ConstructProps extends GObject.Object_ConstructProps {
}
export class Destination {
    /* Fields of EBook-1.2.EBook.Destination */
    object: GObject.Object
    priv: DestinationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.Destination */
    copy(): Destination
    empty(): boolean
    equal(b: Destination): boolean
    export(): string
    export_to_vcard_attribute(attr: EBookContacts.VCardAttribute): void
    get_address(): string | null
    get_contact(): EBookContacts.Contact | null
    get_contact_uid(): string | null
    get_email(): string
    get_email_num(): number
    get_html_mail_pref(): boolean
    get_name(): string | null
    get_source_uid(): string | null
    get_textrep(include_email: boolean): string
    is_auto_recipient(): boolean
    is_evolution_list(): boolean
    is_ignored(): boolean
    list_get_dests(): Destination[]
    list_get_root_dests(): Destination[]
    list_show_addresses(): boolean
    set_auto_recipient(value: boolean): void
    set_client(client: BookClient): void
    set_contact(contact: EBookContacts.Contact, email_num: number): void
    set_contact_uid(uid: string, email_num: number): void
    set_email(email: string): void
    set_html_mail_pref(flag: boolean): void
    set_ignored(ignored: boolean): void
    set_name(name: string): void
    set_raw(raw: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of EBook-1.2.EBook.Destination */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBook-1.2.EBook.Destination */
    connect(sigName: "changed", callback: (($obj: Destination) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Destination) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Destination, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Destination, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Destination_ConstructProps)
    _init (config?: Destination_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Destination
    static exportv(destv: Destination[]): string
    static freev(destv: Destination[]): void
    static get_textrepv(destv: Destination[]): string
    static import(str: string): Destination | null
    static importv(str: string): Destination[]
    static $gtype: GObject.Type
}
export abstract class BookClientClass {
    static name: string
}
export abstract class BookClientCursorClass {
    /* Fields of EBook-1.2.EBook.BookClientCursorClass */
    refresh: (cursor: BookClientCursor) => void
    static name: string
}
export class BookClientCursorPrivate {
    static name: string
}
export class BookClientPrivate {
    static name: string
}
export abstract class BookClientViewClass {
    /* Fields of EBook-1.2.EBook.BookClientViewClass */
    progress: (client_view: BookClientView, percent: number, message: string) => void
    complete: (client_view: BookClientView, error: GLib.Error) => void
    static name: string
}
export class BookClientViewPrivate {
    static name: string
}
export abstract class DestinationClass {
    /* Fields of EBook-1.2.EBook.DestinationClass */
    parent_class: GObject.ObjectClass
    changed: (destination: Destination) => void
    static name: string
}
export class DestinationPrivate {
    static name: string
}