/**
 * EDataBook-1.2
 */

import * as Gjs from './Gjs';
import * as libxml2 from './libxml2-2.0';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as EDataServer from './EDataServer-1.2';
import * as Soup from './Soup-2.4';
import * as GData from './GData-0.0';
import * as Json from './Json-1.0';
import * as Goa from './Goa-1.0';
import * as Camel from './Camel-1.2';
import * as EBookContacts from './EBookContacts-1.2';
import * as EBackend from './EBackend-1.2';

export enum BookCacheCursorOrigin {
    CURRENT,
    BEGIN,
    END,
}
export enum BookSqliteError {
    ENGINE,
    CONSTRAINT,
    CONTACT_NOT_FOUND,
    INVALID_QUERY,
    UNSUPPORTED_QUERY,
    UNSUPPORTED_FIELD,
    END_OF_LIST,
    LOAD,
}
export enum bSqlChangeType {
    CONTACT_ADDED,
    LOCALE_CHANGED,
    LAST,
}
export enum bSqlCursorOrigin {
    CURRENT,
    BEGIN,
    END,
}
export enum bSqlLockType {
    READ,
    WRITE,
}
export enum bSqlUnlockAction {
    NONE,
    COMMIT,
    ROLLBACK,
}
export enum BookCacheCursorStepFlags {
    MOVE,
    FETCH,
}
export enum bSqlCursorStepFlags {
    MOVE,
    FETCH,
}
export const BOOK_SQL_IS_POPULATED_KEY: string
export const BOOK_SQL_SYNC_DATA_KEY: string
export const EDS_ADDRESS_BOOK_MODULES: string
export const EDS_SUBPROCESS_BOOK_PATH: string
export const XIMIAN_VCARD: string
export function book_cache_search_data_free(data?: object | null): void
export function book_meta_backend_info_free(ptr?: object | null): void
export function ebsql_get_contact_extra_unlocked(ebsql: BookSqlite, uid: string): [ /* returnType */ boolean, /* ret_extra */ string ]
export function ebsql_get_contact_unlocked(ebsql: BookSqlite, uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* contact */ EBookContacts.Contact ]
export function ebsql_get_vcard_unlocked(ebsql: BookSqlite, uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* ret_vcard */ string ]
export interface BookBackendCustomOpFunc {
    (book_backend: BookBackend, cancellable?: Gio.Cancellable | null): void
}
export interface BookBackendForeachViewFunc {
    (backend: BookBackend, view: DataBookView): boolean
}
export interface BookCacheSearchFunc {
    (book_cache: BookCache, uid: string, revision: string, object: string, extra: string, custom_flags: number, offline_state: EBackend.OfflineState): boolean
}
export interface DataBookCursorCompareContactFunc {
    (cursor: DataBookCursor, contact: EBookContacts.Contact): number
}
export interface DataBookCursorGetPositionFunc {
    (cursor: DataBookCursor, cancellable?: Gio.Cancellable | null): boolean
}
export interface DataBookCursorLoadLocaleFunc {
    (cursor: DataBookCursor): boolean
}
export interface DataBookCursorSetAlphabetIndexFunc {
    (cursor: DataBookCursor, index: number, locale: string): boolean
}
export interface DataBookCursorSetSexpFunc {
    (cursor: DataBookCursor, sexp?: string | null): boolean
}
export interface DataBookCursorStepFunc {
    (cursor: DataBookCursor, revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): number
}
export interface bSqlChangeCallback {
    (change_type: bSqlChangeType, uid: string, extra: string, vcard: string): void
}
export interface bSqlVCardCallback {
    (uid: string, extra: string): string
}
export interface BookBackend_ConstructProps extends EBackend.Backend_ConstructProps {
    cache_dir?: string
    registry?: EDataServer.SourceRegistry
    writable?: boolean
}
export class BookBackend {
    /* Properties of EDataBook.BookBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.BookBackend */
    add_view(view: DataBookView): void
    configure_direct(config: string): void
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_contacts_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    create_contacts_sync(vcards: string, opflags: number, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    delete_cursor(cursor: DataBookCursor): boolean
    dup_cache_dir(): string
    dup_locale(): string
    foreach_view(): boolean
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    get_backend_property(prop_name: string): string
    get_cache_dir(): string
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_finish(result: Gio.AsyncResult): EBookContacts.Contact
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_list_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_list_uids_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    get_direct_book(): DataBookDirect | null
    get_registry(): EDataServer.SourceRegistry
    get_writable(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    list_views(): DataBookView[]
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    notify_complete(): void
    notify_error(message: string): void
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    notify_remove(id: string): void
    notify_update(contact: EBookContacts.Contact): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(cancellable?: Gio.Cancellable | null): boolean
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    ref_data_book(): DataBook | null
    ref_proxy_resolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    remove_view(view: DataBookView): void
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    set_cache_dir(cache_dir: string): void
    set_data_book(data_book: DataBook): void
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    set_writable(writable: boolean): void
    start_view(view: DataBookView): void
    stop_view(view: DataBookView): void
    sync(): void
    /* Methods of EBackend.Backend */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentials_required_finish(result: Gio.AsyncResult): boolean
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    ensure_source_status_connected(): void
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    get_online(): boolean
    get_source(): EDataServer.Source
    get_user_prompter(): object | null
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    prepare_shutdown(): void
    ref_connectable(): Gio.SocketConnectable | null
    ref_main_context(): GLib.MainContext
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    set_connectable(connectable: Gio.SocketConnectable): void
    set_online(online: boolean): void
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
    /* Methods of GObject.Object */
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
    /* Virtual methods of EDataBook.BookBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_configure_direct(config: string): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void
    /* Virtual methods of EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataBook.BookBackend */
    connect(sigName: "closed", callback: (($obj: BookBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (($obj: BookBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookBackend) => void)): number
    emit(sigName: "shutdown"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackend_ConstructProps)
    _init (config?: BookBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}
export class BookBackendFactory {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend.BackendFactory */
    get_hash_key(): string
    get_module_filename(): string
    new_backend(source: EDataServer.Source): EBackend.Backend
    share_subprocess(): boolean
    /* Methods of EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
    /* Methods of GObject.Object */
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
    /* Virtual methods of EBackend.BackendFactory */
    vfunc_get_hash_key(): string
    vfunc_new_backend(source: EDataServer.Source): EBackend.Backend
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackendFactory_ConstructProps)
    _init (config?: BookBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}
export class BookBackendSExp {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.BookBackendSExp */
    lock(): void
    match_contact(contact: EBookContacts.Contact): boolean
    match_vcard(vcard: string): boolean
    text(): string
    unlock(): void
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackendSExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendSExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackendSExp_ConstructProps)
    _init (config?: BookBackendSExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): BookBackendSExp
    static $gtype: GObject.Type
}
export interface BookBackendSync_ConstructProps extends BookBackend_ConstructProps {
}
export class BookBackendSync {
    /* Properties of EDataBook.BookBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.BookBackendSync */
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    get_contact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    open(cancellable?: Gio.Cancellable | null): boolean
    refresh(cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_removed_uids */ string[] ]
    /* Methods of EDataBook.BookBackend */
    add_view(view: DataBookView): void
    configure_direct(config: string): void
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_contacts_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    create_contacts_sync(vcards: string, opflags: number, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    delete_cursor(cursor: DataBookCursor): boolean
    dup_cache_dir(): string
    dup_locale(): string
    foreach_view(): boolean
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    get_backend_property(prop_name: string): string
    get_cache_dir(): string
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_finish(result: Gio.AsyncResult): EBookContacts.Contact
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_list_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_list_uids_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    get_direct_book(): DataBookDirect | null
    get_registry(): EDataServer.SourceRegistry
    get_writable(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    list_views(): DataBookView[]
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    notify_complete(): void
    notify_error(message: string): void
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    notify_remove(id: string): void
    notify_update(contact: EBookContacts.Contact): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(cancellable?: Gio.Cancellable | null): boolean
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    ref_data_book(): DataBook | null
    ref_proxy_resolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    remove_view(view: DataBookView): void
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    set_cache_dir(cache_dir: string): void
    set_data_book(data_book: DataBook): void
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    set_writable(writable: boolean): void
    start_view(view: DataBookView): void
    stop_view(view: DataBookView): void
    sync(): void
    /* Methods of EBackend.Backend */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentials_required_finish(result: Gio.AsyncResult): boolean
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    ensure_source_status_connected(): void
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    get_online(): boolean
    get_source(): EDataServer.Source
    get_user_prompter(): object | null
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    prepare_shutdown(): void
    ref_connectable(): Gio.SocketConnectable | null
    ref_main_context(): GLib.MainContext
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    set_connectable(connectable: Gio.SocketConnectable): void
    set_online(online: boolean): void
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
    /* Methods of GObject.Object */
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
    /* Virtual methods of EDataBook.BookBackendSync */
    vfunc_open_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook.BookBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_configure_direct(config: string): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void
    /* Virtual methods of EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataBook.BookBackend */
    connect(sigName: "closed", callback: (($obj: BookBackendSync, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookBackendSync, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (($obj: BookBackendSync) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookBackendSync) => void)): number
    emit(sigName: "shutdown"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookBackendSync_ConstructProps)
    _init (config?: BookBackendSync_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookCache_ConstructProps extends EBackend.Cache_ConstructProps {
}
export class BookCache {
    /* Properties of EDataBook.BookCache */
    readonly locale: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.BookCache */
    cursor_calculate(cursor: BookCacheCursor, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_total */ number | null, /* out_position */ number | null ]
    cursor_compare_contact(cursor: BookCacheCursor, contact: EBookContacts.Contact): [ /* returnType */ number, /* out_matches_sexp */ boolean | null ]
    cursor_free(cursor: BookCacheCursor): void
    cursor_set_sexp(cursor: BookCacheCursor, sexp: string): boolean
    cursor_set_target_alphabetic_index(cursor: BookCacheCursor, idx: number): void
    cursor_step(cursor: BookCacheCursor, flags: BookCacheCursorStepFlags, origin: BookCacheCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* out_results */ BookCacheSearchData[] | null ]
    dup_contact_revision(contact: EBookContacts.Contact): string
    dup_locale(): string
    get_contact(uid: string, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact ]
    get_contact_custom_flags(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_custom_flags */ number ]
    get_contact_extra(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_extra */ string ]
    get_uids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    get_vcard(uid: string, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_vcard */ string ]
    put_contact(contact: EBookContacts.Contact, extra: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    put_contacts(contacts: EBookContacts.Contact[], extras: string[] | null, custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    ref_collator(): EDataServer.Collator
    ref_source(): EDataServer.Source
    remove_contact(uid: string, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string[], custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    search(sexp: string | null, meta_contacts: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_list */ BookCacheSearchData[] ]
    search_uids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_list */ string[] ]
    search_with_callback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    set_contact_custom_flags(uid: string, custom_flags: number, cancellable?: Gio.Cancellable | null): boolean
    set_contact_extra(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean
    set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EBackend.Cache */
    change_revision(): void
    clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean
    contains(uid: string, deleted_flag: EBackend.CacheDeletedFlag): boolean
    copy_missing_to_column_values(column_names: string[], column_values: string[], other_columns: EBackend.CacheColumnValues): /* other_columns */ EBackend.CacheColumnValues
    dup_key(key: string): string
    dup_revision(): string
    erase(): void
    foreach(deleted_flag: EBackend.CacheDeletedFlag, where_clause: string | null, func: EBackend.CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    foreach_update(deleted_flag: EBackend.CacheDeletedFlag, where_clause: string | null, func: EBackend.CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    freeze_revision_change(): void
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* out_revision */ string | null, /* out_other_columns */ EBackend.CacheColumnValues | null ]
    get_count(deleted_flag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    get_filename(): string
    get_key_int(key: string): number
    get_object_include_deleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* out_revision */ string | null, /* out_other_columns */ EBackend.CacheColumnValues | null ]
    get_objects(deleted_flag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects */ string[], /* out_revisions */ string[] | null ]
    get_offline_changes(cancellable?: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    get_sqlitedb(): object | null
    get_uids(deleted_flag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[], /* out_revisions */ string[] | null ]
    get_version(): number
    initialize_sync(filename: string, other_columns?: EBackend.CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    is_revision_change_frozen(): boolean
    lock(lock_type: EBackend.CacheLockType): void
    put(uid: string, revision: string | null, object: string, other_columns: EBackend.CacheColumnValues | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove(uid: string, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove_all(cancellable?: Gio.Cancellable | null): boolean
    set_key(key: string, value?: string | null): boolean
    set_key_int(key: string, value: number): boolean
    set_offline_state(uid: string, state: EBackend.OfflineState, cancellable?: Gio.Cancellable | null): boolean
    set_revision(revision?: string | null): void
    set_version(version: number): void
    sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean
    sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean
    sqlite_select(sql_stmt: string, func: EBackend.CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    thaw_revision_change(): void
    unlock(action: EBackend.CacheUnlockAction): void
    /* Methods of GObject.Object */
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
    /* Methods of EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EDataBook.BookCache */
    vfunc_dup_contact_revision(contact: EBookContacts.Contact): string
    vfunc_e164_changed(contact: EBookContacts.Contact, is_replace: boolean): void
    /* Virtual methods of EBackend.Cache */
    vfunc_before_put(uid: string, revision: string, object: string, other_columns: EBackend.CacheColumnValues, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean
    vfunc_erase(): void
    vfunc_put_locked(uid: string, revision: string, object: string, other_columns: EBackend.CacheColumnValues, offline_state: EBackend.OfflineState, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_revision_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataBook.BookCache */
    connect(sigName: "dup-contact-revision", callback: (($obj: BookCache, object: EBookContacts.Contact) => string)): number
    connect_after(sigName: "dup-contact-revision", callback: (($obj: BookCache, object: EBookContacts.Contact) => string)): number
    emit(sigName: "dup-contact-revision", object: EBookContacts.Contact): void
    connect(sigName: "e164-changed", callback: (($obj: BookCache, object: EBookContacts.Contact, p0: boolean) => void)): number
    connect_after(sigName: "e164-changed", callback: (($obj: BookCache, object: EBookContacts.Contact, p0: boolean) => void)): number
    emit(sigName: "e164-changed", object: EBookContacts.Contact, p0: boolean): void
    /* Signals of EBackend.Cache */
    connect(sigName: "before-put", callback: (($obj: BookCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    connect_after(sigName: "before-put", callback: (($obj: BookCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    connect(sigName: "before-remove", callback: (($obj: BookCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    connect_after(sigName: "before-remove", callback: (($obj: BookCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    connect(sigName: "revision-changed", callback: (($obj: BookCache) => void)): number
    connect_after(sigName: "revision-changed", callback: (($obj: BookCache) => void)): number
    emit(sigName: "revision-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookCache_ConstructProps)
    _init (config?: BookCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, source?: EDataServer.Source | null, cancellable?: Gio.Cancellable | null): BookCache
    static new_full(filename: string, source?: EDataServer.Source | null, setup?: EBookContacts.SourceBackendSummarySetup | null, cancellable?: Gio.Cancellable | null): BookCache
    static $gtype: GObject.Type
}
export interface BookMetaBackend_ConstructProps extends BookBackendSync_ConstructProps {
    cache?: BookCache
}
export class BookMetaBackend {
    /* Properties of EDataBook.BookMetaBackend */
    cache: BookCache
    /* Properties of EDataBook.BookBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.BookMetaBackend */
    connect_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_sync_tag(): string | null
    empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean
    ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean
    get_capabilities(): string
    get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    get_connected_writable(): boolean
    get_ever_connected(): boolean
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    inline_local_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean
    list_existing_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ BookMetaBackendInfo[] ]
    load_contact_sync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string ]
    process_changes_sync(created_objects?: BookMetaBackendInfo[] | null, modified_objects?: BookMetaBackendInfo[] | null, removed_objects?: BookMetaBackendInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    ref_cache(): BookCache
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_contact_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    requires_reconnect(): boolean
    save_contact_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    schedule_refresh(): void
    search_sync(expr: string | null, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    search_uids_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    set_cache(cache: BookCache): void
    set_connected_writable(value: boolean): void
    set_ever_connected(value: boolean): void
    split_changes_sync(objects: BookMetaBackendInfo[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ BookMetaBackendInfo[], /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] | null ]
    store_inline_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataBook.BookBackendSync */
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    get_contact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    open(cancellable?: Gio.Cancellable | null): boolean
    refresh(cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_removed_uids */ string[] ]
    /* Methods of EDataBook.BookBackend */
    add_view(view: DataBookView): void
    configure_direct(config: string): void
    create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_contacts_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    create_contacts_sync(vcards: string, opflags: number, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    create_cursor(sort_fields: EBookContacts.ContactField, sort_types: EBookContacts.BookCursorSortType, n_fields: number): DataBookCursor
    delete_cursor(cursor: DataBookCursor): boolean
    dup_cache_dir(): string
    dup_locale(): string
    foreach_view(): boolean
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    get_backend_property(prop_name: string): string
    get_cache_dir(): string
    get_contact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_finish(result: Gio.AsyncResult): EBookContacts.Contact
    get_contact_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_list_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean
    get_contact_list_sync(query: string, out_contacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_contact_list_uids_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    get_contact_list_uids_sync(query: string, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    get_direct_book(): DataBookDirect | null
    get_registry(): EDataServer.SourceRegistry
    get_writable(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    list_views(): DataBookView[]
    modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_contacts_finish(result: Gio.AsyncResult): boolean
    modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    notify_complete(): void
    notify_error(message: string): void
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    notify_remove(id: string): void
    notify_update(contact: EBookContacts.Contact): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(cancellable?: Gio.Cancellable | null): boolean
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    ref_data_book(): DataBook | null
    ref_proxy_resolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_contacts_finish(result: Gio.AsyncResult): boolean
    remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    remove_view(view: DataBookView): void
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    set_cache_dir(cache_dir: string): void
    set_data_book(data_book: DataBook): void
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    set_writable(writable: boolean): void
    start_view(view: DataBookView): void
    stop_view(view: DataBookView): void
    sync(): void
    /* Methods of EBackend.Backend */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentials_required_finish(result: Gio.AsyncResult): boolean
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    ensure_source_status_connected(): void
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    get_online(): boolean
    get_source(): EDataServer.Source
    get_user_prompter(): object | null
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    prepare_shutdown(): void
    ref_connectable(): Gio.SocketConnectable | null
    ref_main_context(): GLib.MainContext
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    set_connectable(connectable: Gio.SocketConnectable): void
    set_online(online: boolean): void
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
    /* Methods of GObject.Object */
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
    /* Virtual methods of EDataBook.BookMetaBackend */
    vfunc_connect_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    vfunc_get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ BookMetaBackendInfo[] ]
    vfunc_load_contact_sync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string ]
    vfunc_remove_contact_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    vfunc_requires_reconnect(): boolean
    vfunc_save_contact_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    vfunc_search_sync(expr: string | null, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    vfunc_search_uids_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    vfunc_source_changed(): void
    /* Virtual methods of EDataBook.BookBackendSync */
    vfunc_open_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook.BookBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_configure_direct(config: string): void
    vfunc_impl_create_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean
    vfunc_impl_dup_locale(): string
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfunc_impl_get_contact_list(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_get_contact_list_uids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfunc_impl_modify_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfunc_impl_notify_update(contact: EBookContacts.Contact): void
    vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_remove_contacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_impl_start_view(view: DataBookView): void
    vfunc_impl_stop_view(view: DataBookView): void
    vfunc_shutdown(): void
    /* Virtual methods of EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataBook.BookMetaBackend */
    connect(sigName: "refresh-completed", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "refresh-completed", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "refresh-completed"): void
    connect(sigName: "source-changed", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "source-changed"): void
    /* Signals of EDataBook.BookBackend */
    connect(sigName: "closed", callback: (($obj: BookMetaBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookMetaBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "shutdown"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookMetaBackend_ConstructProps)
    _init (config?: BookMetaBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookSqlite_ConstructProps extends GObject.Object_ConstructProps {
}
export class BookSqlite {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.BookSqlite */
    add_contact(contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    add_contacts(contacts: EBookContacts.Contact[], extra: string[] | null, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    get_contact(uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* ret_contact */ EBookContacts.Contact ]
    get_contact_extra(uid: string): [ /* returnType */ boolean, /* ret_extra */ string ]
    get_key_value(key: string): [ /* returnType */ boolean, /* value */ string ]
    get_key_value_int(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_locale(): [ /* returnType */ boolean, /* locale_out */ string ]
    get_vcard(uid: string, meta_contact: boolean): [ /* returnType */ boolean, /* ret_vcard */ string ]
    has_contact(uid: string): [ /* returnType */ boolean, /* exists */ boolean ]
    lock(lock_type: bSqlLockType, cancellable?: Gio.Cancellable | null): boolean
    ref_collator(): EDataServer.Collator
    ref_source(): EDataServer.Source
    remove_contact(uid: string, cancellable?: Gio.Cancellable | null): boolean
    remove_contacts(uids: string[], cancellable?: Gio.Cancellable | null): boolean
    search(sexp: string | null, meta_contacts: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_list */ bSqlSearchData[] ]
    search_uids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_list */ string[] ]
    set_contact_extra(uid: string, extra?: string | null): boolean
    set_key_value(key: string, value: string): boolean
    set_key_value_int(key: string, value: number): boolean
    set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean
    unlock(action: bSqlUnlockAction): boolean
    /* Methods of GObject.Object */
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
    /* Methods of EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EDataBook.BookSqlite */
    vfunc_before_insert_contact(db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_before_remove_contact(db: object | null, contact_uid: string, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataBook.BookSqlite */
    connect(sigName: "before-insert-contact", callback: (($obj: BookSqlite, object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null) => boolean)): number
    connect_after(sigName: "before-insert-contact", callback: (($obj: BookSqlite, object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null) => boolean)): number
    emit(sigName: "before-insert-contact", object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null): void
    connect(sigName: "before-remove-contact", callback: (($obj: BookSqlite, object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null) => boolean)): number
    connect_after(sigName: "before-remove-contact", callback: (($obj: BookSqlite, object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null) => boolean)): number
    emit(sigName: "before-remove-contact", object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BookSqlite_ConstructProps)
    _init (config?: BookSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, source: EDataServer.Source, cancellable?: Gio.Cancellable | null): BookSqlite
    static new_full(path: string, source: EDataServer.Source, setup?: EBookContacts.SourceBackendSummarySetup | null, vcard_callback?: bSqlVCardCallback | null, change_callback?: bSqlChangeCallback | null, cancellable?: Gio.Cancellable | null): BookSqlite
    static error_quark(): GLib.Quark
    static search_data_free(data: bSqlSearchData): void
    static $gtype: GObject.Type
}
export interface DataBook_ConstructProps extends GObject.Object_ConstructProps {
    backend?: BookBackend
    connection?: Gio.DBusConnection
    object_path?: string
}
export class DataBook {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.DataBook */
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    ref_backend(): BookBackend
    report_backend_property_changed(prop_name: string, prop_value: string): void
    report_error(message: string): void
    respond_create_contacts(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void
    respond_get_contact(opid: number, error?: GLib.Error | null, contact?: EBookContacts.Contact | null): void
    respond_get_contact_list(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void
    respond_get_contact_list_uids(opid: number, error: GLib.Error, uids?: string[] | null): void
    respond_modify_contacts(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void
    respond_open(opid: number, error: GLib.Error): void
    respond_refresh(opid: number, error: GLib.Error): void
    respond_remove_contacts(opid: number, error: GLib.Error, ids?: string[] | null): void
    set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject.Object */
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook.DataBook */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBook_ConstructProps)
    _init (config?: DataBook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, connection: Gio.DBusConnection, object_path: string): DataBook
    static string_slist_to_comma_string(strings: string[]): string
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DataBookCursor_ConstructProps extends GObject.Object_ConstructProps {
    backend?: BookBackend
}
export class DataBookCursor {
    /* Properties of EDataBook.DataBookCursor */
    readonly position: number
    readonly total: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookCursor */
    contact_added(contact: EBookContacts.Contact): void
    contact_removed(contact: EBookContacts.Contact): void
    get_backend(): BookBackend
    get_position(): number
    get_total(): number
    load_locale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    step(revision_guard: string, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Methods of GObject.Object */
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
    /* Virtual methods of EDataBook.DataBookCursor */
    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string ]
    vfunc_set_alphabetic_index(index: number, locale: string): boolean
    vfunc_set_sexp(sexp?: string | null): boolean
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookCursor_ConstructProps)
    _init (config?: DataBookCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataBookCursorCache_ConstructProps extends DataBookCursor_ConstructProps {
    book_cache?: BookCache
    cursor?: object
}
export class DataBookCursorCache {
    /* Properties of EDataBook.DataBookCursor */
    readonly position: number
    readonly total: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookCursor */
    contact_added(contact: EBookContacts.Contact): void
    contact_removed(contact: EBookContacts.Contact): void
    get_backend(): BookBackend
    get_position(): number
    get_total(): number
    load_locale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    step(revision_guard: string, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Methods of GObject.Object */
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
    /* Virtual methods of EDataBook.DataBookCursor */
    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string ]
    vfunc_set_alphabetic_index(index: number, locale: string): boolean
    vfunc_set_sexp(sexp?: string | null): boolean
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookCursorCache_ConstructProps)
    _init (config?: DataBookCursorCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(book_backend: BookBackend, book_cache: BookCache, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): DataBookCursorCache
    static $gtype: GObject.Type
}
export interface DataBookCursorSqlite_ConstructProps extends DataBookCursor_ConstructProps {
    cursor?: object
    ebsql?: BookSqlite
    revision_key?: string
}
export class DataBookCursorSqlite {
    /* Properties of EDataBook.DataBookCursor */
    readonly position: number
    readonly total: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookCursor */
    contact_added(contact: EBookContacts.Contact): void
    contact_removed(contact: EBookContacts.Contact): void
    get_backend(): BookBackend
    get_position(): number
    get_total(): number
    load_locale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
    set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    step(revision_guard: string, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Methods of GObject.Object */
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
    /* Virtual methods of EDataBook.DataBookCursor */
    vfunc_compare_contact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matches_sexp */ boolean | null ]
    vfunc_get_position(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfunc_load_locale(): [ /* returnType */ boolean, /* locale */ string ]
    vfunc_set_alphabetic_index(index: number, locale: string): boolean
    vfunc_set_sexp(sexp?: string | null): boolean
    vfunc_step(revision_guard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookCursorSqlite_ConstructProps)
    _init (config?: DataBookCursorSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, ebsql: BookSqlite, revision_key: string, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): DataBookCursorSqlite
    static $gtype: GObject.Type
}
export interface DataBookDirect_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataBookDirect {
    /* Fields of EDataBook.DataBookDirect */
    parent: GObject.Object
    priv: DataBookDirectPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookDirect */
    register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookDirect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookDirect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookDirect_ConstructProps)
    _init (config?: DataBookDirect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend_path: string, backend_factory_name: string, config: string): DataBookDirect
    static $gtype: GObject.Type
}
export interface DataBookFactory_ConstructProps extends EBackend.DataFactory_ConstructProps {
}
export class DataBookFactory {
    /* Properties of EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of EDataBook.DataBookFactory */
    parent: EBackend.DataFactory
    priv: DataBookFactoryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend.DataFactory */
    backend_closed(backend: EBackend.Backend): void
    backend_closed_by_sender(backend: EBackend.Backend, sender: string): void
    construct_path(): string
    create_backend(backend_factory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend
    get_backend_per_process(): number
    get_registry(): EDataServer.SourceRegistry
    get_reload_supported(): boolean
    list_opened_backends(): EBackend.Backend[]
    open_backend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    ref_backend_factory(backend_name: string, extension_name: string): EBackend.BackendFactory
    spawn_subprocess_backend(invocation: Gio.DBusMethodInvocation, uid: string, extension_name: string, subprocess_path: string): void
    use_backend_per_process(): boolean
    /* Methods of EBackend.DBusServer */
    hold(): void
    load_modules(): void
    quit(code: EBackend.DBusServerExitCode): void
    release(): void
    run(wait_for_client: boolean): EBackend.DBusServerExitCode
    /* Methods of GObject.Object */
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
    /* Methods of EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.DataFactory */
    vfunc_complete_open(invocation: Gio.DBusMethodInvocation, object_path: string, bus_name: string, extension_name: string): void
    vfunc_create_backend(backend_factory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend
    vfunc_open_backend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: EBackend.DBusServerExitCode): void
    vfunc_run_server(): EBackend.DBusServerExitCode
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: (($obj: DataBookFactory, code: EBackend.DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DataBookFactory, code: EBackend.DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: EBackend.DBusServerExitCode): void
    connect(sigName: "run-server", callback: (($obj: DataBookFactory) => EBackend.DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DataBookFactory) => EBackend.DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookFactory_ConstructProps)
    _init (config?: DataBookFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend_per_process: number, cancellable?: Gio.Cancellable | null): DataBookFactory
    static $gtype: GObject.Type
}
export interface DataBookView_ConstructProps extends GObject.Object_ConstructProps {
    backend?: BookBackend
    connection?: Gio.DBusConnection
    object_path?: string
    sexp?: BookBackendSExp
}
export class DataBookView {
    /* Fields of EDataBook.DataBookView */
    parent: GObject.Object
    priv: DataBookViewPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookView */
    get_connection(): Gio.DBusConnection
    get_fields_of_interest(): GLib.HashTable | null
    get_flags(): EBookContacts.BookClientViewFlags
    get_object_path(): string
    get_sexp(): BookBackendSExp
    is_completed(): boolean
    notify_complete(error: GLib.Error): void
    notify_progress(percent: number, message: string): void
    notify_remove(id: string): void
    notify_update(contact: EBookContacts.Contact): void
    notify_update_prefiltered_vcard(id: string, vcard: string): void
    notify_update_vcard(id: string, vcard: string): void
    ref_backend(): BookBackend | null
    /* Methods of GObject.Object */
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook.DataBookView */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataBookView_ConstructProps)
    _init (config?: DataBookView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, object_path: string): DataBookView
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SubprocessBookFactory_ConstructProps extends EBackend.SubprocessFactory_ConstructProps {
}
export class SubprocessBookFactory {
    /* Properties of EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of EDataBook.SubprocessBookFactory */
    parent: EBackend.SubprocessFactory
    priv: SubprocessBookFactoryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend.SubprocessFactory */
    call_backends_prepare_shutdown(): void
    get_backends_list(): EBackend.Backend[]
    get_registry(): EDataServer.SourceRegistry
    open_backend(connection: Gio.DBusConnection, uid: string, backend_factory_type_name: string, module_filename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    ref_initable_backend(uid: string, backend_factory_type_name: string, module_filename: string, cancellable?: Gio.Cancellable | null): EBackend.Backend | null
    set_backend_callbacks(backend: EBackend.Backend, proxy: Gio.DBusInterfaceSkeleton): void
    /* Methods of GObject.Object */
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.SubprocessFactory */
    vfunc_backend_closed(backend: EBackend.Backend): void
    vfunc_backend_created(backend: EBackend.Backend): void
    vfunc_open_data(backend: EBackend.Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessBookFactory_ConstructProps)
    _init (config?: SubprocessBookFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): SubprocessBookFactory
    static $gtype: GObject.Type
}
export interface SystemLocaleWatcher_ConstructProps extends GObject.Object_ConstructProps {
}
export class SystemLocaleWatcher {
    /* Properties of EDataBook.SystemLocaleWatcher */
    readonly locale: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataBook.SystemLocaleWatcher */
    dup_locale(): string | null
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemLocaleWatcher_ConstructProps)
    _init (config?: SystemLocaleWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SystemLocaleWatcher
    static $gtype: GObject.Type
}
export abstract class BookBackendClass {
    /* Fields of EDataBook.BookBackendClass */
    use_serial_dispatch_queue: boolean
    impl_get_backend_property: (backend: BookBackend, prop_name: string) => string
    impl_open: (backend: BookBackend, book: DataBook, opid: number, cancellable?: Gio.Cancellable | null) => void
    impl_refresh: (backend: BookBackend, book: DataBook, opid: number, cancellable?: Gio.Cancellable | null) => void
    impl_create_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    impl_modify_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    impl_remove_contacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number) => void
    impl_get_contact: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string) => void
    impl_get_contact_list: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    impl_get_contact_list_uids: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    impl_start_view: (backend: BookBackend, view: DataBookView) => void
    impl_stop_view: (backend: BookBackend, view: DataBookView) => void
    impl_notify_update: (backend: BookBackend, contact: EBookContacts.Contact) => void
    impl_configure_direct: (backend: BookBackend, config: string) => void
    impl_set_locale: (backend: BookBackend, locale: string, cancellable?: Gio.Cancellable | null) => boolean
    impl_dup_locale: (backend: BookBackend) => string
    impl_delete_cursor: (backend: BookBackend, cursor: DataBookCursor) => boolean
    closed: (backend: BookBackend, sender: string) => void
    shutdown: (backend: BookBackend) => void
    reserved_padding: object[]
    static name: string
}
export abstract class BookBackendFactoryClass {
    /* Fields of EDataBook.BookBackendFactoryClass */
    factory_name: string
    backend_type: GObject.Type
    static name: string
}
export class BookBackendFactoryPrivate {
    static name: string
}
export class BookBackendPrivate {
    static name: string
}
export abstract class BookBackendSExpClass {
    static name: string
}
export class BookBackendSExpPrivate {
    static name: string
}
export abstract class BookBackendSyncClass {
    /* Fields of EDataBook.BookBackendSyncClass */
    open_sync: (backend: BookBackendSync, cancellable?: Gio.Cancellable | null) => boolean
    refresh_sync: (backend: BookBackendSync, cancellable?: Gio.Cancellable | null) => boolean
    reserved_padding: object[]
    static name: string
}
export class BookBackendSyncPrivate {
    static name: string
}
export abstract class BookCacheClass {
    /* Fields of EDataBook.BookCacheClass */
    e164_changed: (book_cache: BookCache, contact: EBookContacts.Contact, is_replace: boolean) => void
    dup_contact_revision: (book_cache: BookCache, contact: EBookContacts.Contact) => string
    static name: string
}
export class BookCacheCursor {
    static name: string
    static new(book_cache: BookCache, sexp: string, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): BookCacheCursor
    constructor(book_cache: BookCache, sexp: string, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[])
    /* Static methods and pseudo-constructors */
    static new(book_cache: BookCache, sexp: string, sort_fields: EBookContacts.ContactField[], sort_types: EBookContacts.BookCursorSortType[]): BookCacheCursor
}
export class BookCachePrivate {
    static name: string
}
export class BookCacheSearchData {
    /* Fields of EDataBook.BookCacheSearchData */
    uid: string
    vcard: string
    extra: string
    /* Methods of EDataBook.BookCacheSearchData */
    copy(): BookCacheSearchData
    static name: string
    static new(uid: string, vcard: string, extra?: string | null): BookCacheSearchData
    constructor(uid: string, vcard: string, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, vcard: string, extra?: string | null): BookCacheSearchData
    static free(data?: object | null): void
}
export abstract class BookMetaBackendClass {
    /* Fields of EDataBook.BookMetaBackendClass */
    connect_sync: (meta_backend: BookMetaBackend, credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync: (meta_backend: BookMetaBackend, cancellable?: Gio.Cancellable | null) => boolean
    get_changes_sync: (meta_backend: BookMetaBackend, last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ BookMetaBackendInfo[], /* out_modified_objects */ BookMetaBackendInfo[], /* out_removed_objects */ BookMetaBackendInfo[] ]
    list_existing_sync: (meta_backend: BookMetaBackend, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ BookMetaBackendInfo[] ]
    load_contact_sync: (meta_backend: BookMetaBackend, uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_contact */ EBookContacts.Contact, /* out_extra */ string ]
    save_contact_sync: (meta_backend: BookMetaBackend, overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    remove_contact_sync: (meta_backend: BookMetaBackend, conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null) => boolean
    search_sync: (meta_backend: BookMetaBackend, expr: string | null, meta_contact: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_contacts */ EBookContacts.Contact[] ]
    search_uids_sync: (meta_backend: BookMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_uids */ string[] ]
    requires_reconnect: (meta_backend: BookMetaBackend) => boolean
    source_changed: (meta_backend: BookMetaBackend) => void
    get_ssl_error_details: (meta_backend: BookMetaBackend) => [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    static name: string
}
export class BookMetaBackendInfo {
    /* Fields of EDataBook.BookMetaBackendInfo */
    uid: string
    revision: string
    object: string
    extra: string
    /* Methods of EDataBook.BookMetaBackendInfo */
    copy(): BookMetaBackendInfo
    static name: string
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): BookMetaBackendInfo
    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): BookMetaBackendInfo
    static free(ptr?: object | null): void
}
export class BookMetaBackendPrivate {
    static name: string
}
export abstract class BookSqliteClass {
    /* Fields of EDataBook.BookSqliteClass */
    before_insert_contact: (ebsql: BookSqlite, db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    before_remove_contact: (ebsql: BookSqlite, db: object | null, contact_uid: string, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export class BookSqlitePrivate {
    static name: string
}
export abstract class DataBookClass {
    static name: string
}
export abstract class DataBookCursorCacheClass {
    static name: string
}
export class DataBookCursorCachePrivate {
    static name: string
}
export abstract class DataBookCursorClass {
    /* Fields of EDataBook.DataBookCursorClass */
    set_sexp: DataBookCursorSetSexpFunc
    step: DataBookCursorStepFunc
    set_alphabetic_index: DataBookCursorSetAlphabetIndexFunc
    get_position: DataBookCursorGetPositionFunc
    compare_contact: DataBookCursorCompareContactFunc
    load_locale: DataBookCursorLoadLocaleFunc
    static name: string
}
export class DataBookCursorPrivate {
    static name: string
}
export abstract class DataBookCursorSqliteClass {
    static name: string
}
export class DataBookCursorSqlitePrivate {
    static name: string
}
export abstract class DataBookDirectClass {
    /* Fields of EDataBook.DataBookDirectClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DataBookDirectPrivate {
    static name: string
}
export abstract class DataBookFactoryClass {
    /* Fields of EDataBook.DataBookFactoryClass */
    parent_class: EBackend.DataFactoryClass
    static name: string
}
export class DataBookFactoryPrivate {
    static name: string
}
export class DataBookPrivate {
    static name: string
}
export abstract class DataBookViewClass {
    /* Fields of EDataBook.DataBookViewClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DataBookViewPrivate {
    static name: string
}
export abstract class SubprocessBookFactoryClass {
    /* Fields of EDataBook.SubprocessBookFactoryClass */
    parent_class: EBackend.SubprocessFactoryClass
    static name: string
}
export class SubprocessBookFactoryPrivate {
    static name: string
}
export abstract class SystemLocaleWatcherClass {
    /* Fields of EDataBook.SystemLocaleWatcherClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SystemLocaleWatcherPrivate {
    static name: string
}
export class bSqlCursor {
    static name: string
}
export class bSqlSearchData {
    /* Fields of EDataBook.bSqlSearchData */
    uid: string
    vcard: string
    extra: string
    static name: string
}