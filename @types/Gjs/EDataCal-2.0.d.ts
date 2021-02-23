/**
 * EDataCal-2.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as ICalGLib from './ICalGLib-3.0';
import type * as EDataServer from './EDataServer-1.2';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';
import type * as ECal from './ECal-2.0';
import type * as EBackend from './EBackend-1.2';

export const EDS_CALENDAR_MODULES: string
export const EDS_SUBPROCESS_CAL_PATH: string
export const INTERVALTREE_DEBUG: number
export const LIBICAL_GLIB_UNSTABLE_API: number
export function cal_cache_offline_change_free(change?: object | null): void
export function cal_cache_search_data_free(ptr?: object | null): void
export function cal_meta_backend_info_free(ptr?: object | null): void
export interface CalBackendCustomOpFunc {
    (cal_backend: CalBackend, cancellable?: Gio.Cancellable | null): void
}
export interface CalBackendForeachViewFunc {
    (backend: CalBackend, view: DataCalView): boolean
}
export interface CalCacheSearchFunc {
    (cal_cache: CalCache, uid: string, rid: string | null, revision: string, object: string, extra: string, custom_flags: number, offline_state: EBackend.OfflineState): boolean
}
export interface CalBackend_ConstructProps extends EBackend.Backend_ConstructProps {
    cache_dir?: string
    kind?: number
    registry?: EDataServer.SourceRegistry
    writable?: boolean
}
export class CalBackend {
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
    add_timezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_timezone_finish(result: Gio.AsyncResult): boolean
    add_timezone_sync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
    add_view(view: DataCalView): void
    create_cache_filename(uid: string, filename: string, fileindex: number): string
    create_objects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    create_objects_sync(calobjs: string, opflags: ECal.OperationFlags, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    discard_alarm(uid: string, rid: string, alarm_uid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    discard_alarm_sync(uid: string, rid: string, alarm_uid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    dup_cache_dir(): string
    foreach_view(): boolean
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    get_attachment_uris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean
    get_attachment_uris_sync(uid: string, rid: string, out_attachment_uris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_backend_property(prop_name: string): string
    get_cache_dir(): string
    get_free_busy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean
    get_free_busy_sync(start: number, end: number, users: string[], out_freebusy: string[], cancellable?: Gio.Cancellable | null): boolean
    get_kind(): ICalGLib.ComponentKind
    get_object(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_finish(result: Gio.AsyncResult): string
    get_object_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean
    get_object_list_sync(query: string, out_objects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_object_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string
    get_registry(): EDataServer.SourceRegistry
    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_timezone_finish(result: Gio.AsyncResult): string
    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): string
    get_writable(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    list_views(): DataCalView[]
    modify_objects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_objects_finish(result: Gio.AsyncResult): boolean
    modify_objects_sync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    notify_component_created(component: ECal.Component): void
    notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void
    notify_component_removed(id: ECal.ComponentId, old_component: ECal.Component, new_component: ECal.Component): void
    notify_error(message: string): void
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(cancellable?: Gio.Cancellable | null): boolean
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    receive_objects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receive_objects_finish(result: Gio.AsyncResult): boolean
    receive_objects_sync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    ref_data_cal(): DataCal
    ref_proxy_resolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_objects_finish(result: Gio.AsyncResult): boolean
    remove_objects_sync(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    remove_view(view: DataCalView): void
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    send_objects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string
    send_objects_sync(calobj: string, opflags: ECal.OperationFlags, out_users: GLib.Queue, cancellable?: Gio.Cancellable | null): string
    set_cache_dir(cache_dir: string): void
    set_data_cal(data_cal: DataCal): void
    set_writable(writable: boolean): void
    start_view(view: DataCalView): void
    stop_view(view: DataCalView): void
    /* Methods of EBackend-1.2.EBackend.Backend */
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
    /* Methods of ECal-2.0.ECal.TimezoneCache */
    add_timezone(zone: ICalGLib.Timezone): void
    get_timezone(tzid: string): ICalGLib.Timezone | null
    list_timezones(): ICalGLib.Timezone[]
    /* Virtual methods of EDataCal-2.0.EDataCal.CalBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_add_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string): void
    vfunc_impl_discard_alarm(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    vfunc_impl_get_attachment_uris(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string): void
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_object(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string): void
    vfunc_impl_get_object_list(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string): void
    vfunc_impl_get_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string): void
    vfunc_impl_open(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_receive_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_impl_refresh(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_send_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_impl_start_view(view: DataCalView): void
    vfunc_impl_stop_view(view: DataCalView): void
    vfunc_shutdown(): void
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    connect(sigName: "closed", callback: (($obj: CalBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: CalBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (($obj: CalBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: CalBackend) => void)): number
    emit(sigName: "shutdown"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: CalBackend, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: CalBackend, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::cache-dir", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalBackend_ConstructProps)
    _init (config?: CalBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mail_account_get_default(registry: EDataServer.SourceRegistry, address: string, name: string): boolean
    static mail_account_is_valid(registry: EDataServer.SourceRegistry, user: string, name: string): boolean
    static user_declined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean
    static $gtype: GObject.Type
}
export interface CalBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}
export class CalBackendFactory {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    get_hash_key(): string
    get_module_filename(): string
    new_backend(source: EDataServer.Source): EBackend.Backend
    share_subprocess(): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend-1.2.EBackend.BackendFactory */
    vfunc_get_hash_key(): string
    vfunc_new_backend(source: EDataServer.Source): EBackend.Backend
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalBackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalBackendFactory_ConstructProps)
    _init (config?: CalBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}
export class CalBackendSExp {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSExp */
    evaluate_occur_times(start: number, end: number): boolean
    lock(): void
    match_comp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean
    match_object(object: string, cache: ECal.TimezoneCache): boolean
    text(): string
    unlock(): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalBackendSExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalBackendSExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalBackendSExp_ConstructProps)
    _init (config?: CalBackendSExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): CalBackendSExp
    static $gtype: GObject.Type
}
export interface CalBackendSync_ConstructProps extends CalBackend_ConstructProps {
}
export class CalBackendSync {
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSync */
    add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    create_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* new_components */ ECal.Component[] ]
    discard_alarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    get_attachment_uris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, attachments: string[]): void
    get_free_busy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]
    get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string): /* calobj */ string
    get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): /* calobjs */ string[]
    get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    modify_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    receive_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    remove_objects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]
    send_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags, users: string[]): /* modified_calobj */ string
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
    add_timezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_timezone_finish(result: Gio.AsyncResult): boolean
    add_timezone_sync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
    add_view(view: DataCalView): void
    create_cache_filename(uid: string, filename: string, fileindex: number): string
    create_objects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    create_objects_sync(calobjs: string, opflags: ECal.OperationFlags, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    discard_alarm(uid: string, rid: string, alarm_uid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    discard_alarm_sync(uid: string, rid: string, alarm_uid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    dup_cache_dir(): string
    foreach_view(): boolean
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    get_attachment_uris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean
    get_attachment_uris_sync(uid: string, rid: string, out_attachment_uris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_backend_property(prop_name: string): string
    get_cache_dir(): string
    get_free_busy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean
    get_free_busy_sync(start: number, end: number, users: string[], out_freebusy: string[], cancellable?: Gio.Cancellable | null): boolean
    get_kind(): ICalGLib.ComponentKind
    get_object(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_finish(result: Gio.AsyncResult): string
    get_object_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean
    get_object_list_sync(query: string, out_objects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_object_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string
    get_registry(): EDataServer.SourceRegistry
    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_timezone_finish(result: Gio.AsyncResult): string
    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): string
    get_writable(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    list_views(): DataCalView[]
    modify_objects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_objects_finish(result: Gio.AsyncResult): boolean
    modify_objects_sync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    notify_component_created(component: ECal.Component): void
    notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void
    notify_component_removed(id: ECal.ComponentId, old_component: ECal.Component, new_component: ECal.Component): void
    notify_error(message: string): void
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(cancellable?: Gio.Cancellable | null): boolean
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    receive_objects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receive_objects_finish(result: Gio.AsyncResult): boolean
    receive_objects_sync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    ref_data_cal(): DataCal
    ref_proxy_resolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_objects_finish(result: Gio.AsyncResult): boolean
    remove_objects_sync(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    remove_view(view: DataCalView): void
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    send_objects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string
    send_objects_sync(calobj: string, opflags: ECal.OperationFlags, out_users: GLib.Queue, cancellable?: Gio.Cancellable | null): string
    set_cache_dir(cache_dir: string): void
    set_data_cal(data_cal: DataCal): void
    set_writable(writable: boolean): void
    start_view(view: DataCalView): void
    stop_view(view: DataCalView): void
    /* Methods of EBackend-1.2.EBackend.Backend */
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
    /* Methods of ECal-2.0.ECal.TimezoneCache */
    add_timezone(zone: ICalGLib.Timezone): void
    get_timezone(tzid: string): ICalGLib.Timezone | null
    list_timezones(): ICalGLib.Timezone[]
    /* Virtual methods of EDataCal-2.0.EDataCal.CalBackendSync */
    vfunc_add_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    vfunc_discard_alarm_sync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    vfunc_get_object_sync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, calobj: string): void
    vfunc_get_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    vfunc_open_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    vfunc_receive_objects_sync(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_refresh_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    /* Virtual methods of EDataCal-2.0.EDataCal.CalBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_add_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string): void
    vfunc_impl_discard_alarm(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    vfunc_impl_get_attachment_uris(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string): void
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_object(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string): void
    vfunc_impl_get_object_list(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string): void
    vfunc_impl_get_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string): void
    vfunc_impl_open(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_receive_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_impl_refresh(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_send_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_impl_start_view(view: DataCalView): void
    vfunc_impl_stop_view(view: DataCalView): void
    vfunc_shutdown(): void
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    connect(sigName: "closed", callback: (($obj: CalBackendSync, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: CalBackendSync, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (($obj: CalBackendSync) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: CalBackendSync) => void)): number
    emit(sigName: "shutdown"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: CalBackendSync, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: CalBackendSync, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::cache-dir", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalBackendSync_ConstructProps)
    _init (config?: CalBackendSync_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalCache_ConstructProps extends EBackend.Cache_ConstructProps {
}
export class CalCache {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalCache */
    contains(uid: string, rid: string | null, deleted_flag: EBackend.CacheDeletedFlag): boolean
    delete_attachments(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    dup_component_revision(icomp: ICalGLib.Component): string
    dup_timezone_as_string(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone_string */ string ]
    get_component(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_component */ ECal.Component ]
    get_component_as_string(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstring */ string ]
    get_component_custom_flags(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_custom_flags */ number ]
    get_component_extra(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_extra */ string ]
    get_components_by_uid(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    get_components_by_uid_as_string(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    get_components_in_range(range_start: number, range_end: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    get_components_in_range_as_strings(range_start: number, range_end: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    get_ids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ids */ ECal.ComponentId[] ]
    get_offline_changes(cancellable?: Gio.Cancellable | null): CalCacheOfflineChange[]
    get_offline_state(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    list_timezones(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_timezones */ ICalGLib.Timezone[] ]
    put_component(component: ECal.Component, extra: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    put_components(components: ECal.Component[], extras: string[] | null, custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    put_timezone(zone: ICalGLib.Timezone, inc_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean
    remove_component(uid: string, rid: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove_components(ids: ECal.ComponentId[], custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove_timezone(tzid: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean
    remove_timezones(cancellable?: Gio.Cancellable | null): boolean
    search(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ CalCacheSearchData[] ]
    search_components(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    search_ids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ids */ ECal.ComponentId[] ]
    search_with_callback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    set_component_custom_flags(uid: string, rid: string | null, custom_flags: number, cancellable?: Gio.Cancellable | null): boolean
    set_component_extra(uid: string, rid?: string | null, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EBackend-1.2.EBackend.Cache */
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
    /* Methods of ECal-2.0.ECal.TimezoneCache */
    add_timezone(zone: ICalGLib.Timezone): void
    get_timezone(tzid: string): ICalGLib.Timezone | null
    list_timezones(): ICalGLib.Timezone[]
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EDataCal-2.0.EDataCal.CalCache */
    vfunc_dup_component_revision(icomp: ICalGLib.Component): string
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    /* Virtual methods of EBackend-1.2.EBackend.Cache */
    vfunc_before_put(uid: string, revision: string, object: string, other_columns: EBackend.CacheColumnValues, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean
    vfunc_erase(): void
    vfunc_put_locked(uid: string, revision: string, object: string, other_columns: EBackend.CacheColumnValues, offline_state: EBackend.OfflineState, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_revision_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataCal-2.0.EDataCal.CalCache */
    connect(sigName: "dup-component-revision", callback: (($obj: CalCache, object: ICalGLib.Component) => string)): number
    connect_after(sigName: "dup-component-revision", callback: (($obj: CalCache, object: ICalGLib.Component) => string)): number
    emit(sigName: "dup-component-revision", object: ICalGLib.Component): void
    connect(sigName: "get-timezone", callback: (($obj: CalCache, tzid: string) => ICalGLib.Timezone)): number
    connect_after(sigName: "get-timezone", callback: (($obj: CalCache, tzid: string) => ICalGLib.Timezone)): number
    emit(sigName: "get-timezone", tzid: string): void
    /* Signals of EBackend-1.2.EBackend.Cache */
    connect(sigName: "before-put", callback: (($obj: CalCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    connect_after(sigName: "before-put", callback: (($obj: CalCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    connect(sigName: "before-remove", callback: (($obj: CalCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    connect_after(sigName: "before-remove", callback: (($obj: CalCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    connect(sigName: "revision-changed", callback: (($obj: CalCache) => void)): number
    connect_after(sigName: "revision-changed", callback: (($obj: CalCache) => void)): number
    emit(sigName: "revision-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: CalCache, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: CalCache, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalCache_ConstructProps)
    _init (config?: CalCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, cancellable?: Gio.Cancellable | null): CalCache
    static resolve_timezone_cb(tzid: string, cal_cache?: object | null, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static $gtype: GObject.Type
}
export interface CalMetaBackend_ConstructProps extends CalBackendSync_ConstructProps {
    cache?: CalCache
}
export class CalMetaBackend {
    /* Properties of EDataCal-2.0.EDataCal.CalMetaBackend */
    cache: CalCache
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cache_dir: string
    readonly proxy_resolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalMetaBackend */
    connect_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_sync_tag(): string | null
    empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean
    ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean
    gather_timezones_sync(vcalendar: ICalGLib.Component, remove_existing: boolean, cancellable?: Gio.Cancellable | null): boolean
    get_capabilities(): string
    get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] ]
    get_connected_writable(): boolean
    get_ever_connected(): boolean
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    inline_local_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    list_existing_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ CalMetaBackendInfo[] ]
    load_component_sync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_component */ ICalGLib.Component, /* out_extra */ string ]
    merge_instances(instances: ECal.Component[], replace_tzid_with_location: boolean): ICalGLib.Component
    process_changes_sync(created_objects?: CalMetaBackendInfo[] | null, modified_objects?: CalMetaBackendInfo[] | null, removed_objects?: CalMetaBackendInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    ref_cache(): CalCache
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_component_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    requires_reconnect(): boolean
    save_component_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    schedule_refresh(): void
    search_components_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    search_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    set_cache(cache: CalCache): void
    set_connected_writable(value: boolean): void
    set_ever_connected(value: boolean): void
    split_changes_sync(objects: CalMetaBackendInfo[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ CalMetaBackendInfo[], /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] | null ]
    store_inline_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSync */
    add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    create_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* new_components */ ECal.Component[] ]
    discard_alarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    get_attachment_uris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, attachments: string[]): void
    get_free_busy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]
    get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string): /* calobj */ string
    get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): /* calobjs */ string[]
    get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    modify_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    receive_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    remove_objects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]
    send_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags, users: string[]): /* modified_calobj */ string
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
    add_timezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_timezone_finish(result: Gio.AsyncResult): boolean
    add_timezone_sync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
    add_view(view: DataCalView): void
    create_cache_filename(uid: string, filename: string, fileindex: number): string
    create_objects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    create_objects_sync(calobjs: string, opflags: ECal.OperationFlags, out_uids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    discard_alarm(uid: string, rid: string, alarm_uid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    discard_alarm_sync(uid: string, rid: string, alarm_uid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    dup_cache_dir(): string
    foreach_view(): boolean
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void
    get_attachment_uris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean
    get_attachment_uris_sync(uid: string, rid: string, out_attachment_uris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_backend_property(prop_name: string): string
    get_cache_dir(): string
    get_free_busy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean
    get_free_busy_sync(start: number, end: number, users: string[], out_freebusy: string[], cancellable?: Gio.Cancellable | null): boolean
    get_kind(): ICalGLib.ComponentKind
    get_object(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_finish(result: Gio.AsyncResult): string
    get_object_list(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean
    get_object_list_sync(query: string, out_objects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    get_object_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string
    get_registry(): EDataServer.SourceRegistry
    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_timezone_finish(result: Gio.AsyncResult): string
    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): string
    get_writable(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    list_views(): DataCalView[]
    modify_objects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_objects_finish(result: Gio.AsyncResult): boolean
    modify_objects_sync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    notify_component_created(component: ECal.Component): void
    notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void
    notify_component_removed(id: ECal.ComponentId, old_component: ECal.Component, new_component: ECal.Component): void
    notify_error(message: string): void
    notify_property_changed(prop_name: string, prop_value?: string | null): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(cancellable?: Gio.Cancellable | null): boolean
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    receive_objects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receive_objects_finish(result: Gio.AsyncResult): boolean
    receive_objects_sync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    ref_data_cal(): DataCal
    ref_proxy_resolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_objects_finish(result: Gio.AsyncResult): boolean
    remove_objects_sync(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    remove_view(view: DataCalView): void
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    send_objects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string
    send_objects_sync(calobj: string, opflags: ECal.OperationFlags, out_users: GLib.Queue, cancellable?: Gio.Cancellable | null): string
    set_cache_dir(cache_dir: string): void
    set_data_cal(data_cal: DataCal): void
    set_writable(writable: boolean): void
    start_view(view: DataCalView): void
    stop_view(view: DataCalView): void
    /* Methods of EBackend-1.2.EBackend.Backend */
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
    /* Methods of ECal-2.0.ECal.TimezoneCache */
    add_timezone(zone: ICalGLib.Timezone): void
    get_timezone(tzid: string): ICalGLib.Timezone | null
    list_timezones(): ICalGLib.Timezone[]
    /* Virtual methods of EDataCal-2.0.EDataCal.CalMetaBackend */
    vfunc_connect_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] ]
    vfunc_get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ CalMetaBackendInfo[] ]
    vfunc_load_component_sync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_component */ ICalGLib.Component, /* out_extra */ string ]
    vfunc_remove_component_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    vfunc_requires_reconnect(): boolean
    vfunc_save_component_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    vfunc_search_components_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    vfunc_search_sync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    vfunc_source_changed(): void
    /* Virtual methods of EDataCal-2.0.EDataCal.CalBackendSync */
    vfunc_add_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    vfunc_discard_alarm_sync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    vfunc_get_object_sync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, calobj: string): void
    vfunc_get_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    vfunc_open_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    vfunc_receive_objects_sync(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_refresh_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    /* Virtual methods of EDataCal-2.0.EDataCal.CalBackend */
    vfunc_closed(sender: string): void
    vfunc_impl_add_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string): void
    vfunc_impl_discard_alarm(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    vfunc_impl_get_attachment_uris(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string): void
    vfunc_impl_get_backend_property(prop_name: string): string
    vfunc_impl_get_object(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string): void
    vfunc_impl_get_object_list(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string): void
    vfunc_impl_get_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string): void
    vfunc_impl_open(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_receive_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_impl_refresh(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void
    vfunc_impl_send_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    vfunc_impl_start_view(view: DataCalView): void
    vfunc_impl_stop_view(view: DataCalView): void
    vfunc_shutdown(): void
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataCal-2.0.EDataCal.CalMetaBackend */
    connect(sigName: "refresh-completed", callback: (($obj: CalMetaBackend) => void)): number
    connect_after(sigName: "refresh-completed", callback: (($obj: CalMetaBackend) => void)): number
    emit(sigName: "refresh-completed"): void
    connect(sigName: "source-changed", callback: (($obj: CalMetaBackend) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: CalMetaBackend) => void)): number
    emit(sigName: "source-changed"): void
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    connect(sigName: "closed", callback: (($obj: CalMetaBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: CalMetaBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (($obj: CalMetaBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: CalMetaBackend) => void)): number
    emit(sigName: "shutdown"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: (($obj: CalMetaBackend, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: CalMetaBackend, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::cache", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-dir", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalMetaBackend_ConstructProps)
    _init (config?: CalMetaBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataCal_ConstructProps extends GObject.Object_ConstructProps {
    backend?: CalBackend
    connection?: Gio.DBusConnection
    object_path?: string
}
export class DataCal {
    /* Fields of EDataCal-2.0.EDataCal.DataCal */
    parent: GObject.Object
    priv: DataCalPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.DataCal */
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    ref_backend(): CalBackend | null
    report_backend_property_changed(prop_name: string, prop_value: string): void
    report_error(message: string): void
    report_free_busy_data(freebusy: string[]): void
    respond_add_timezone(opid: number, error: GLib.Error): void
    respond_create_objects(opid: number, error: GLib.Error, uids: string[], new_components: ECal.Component[]): void
    respond_discard_alarm(opid: number, error: GLib.Error): void
    respond_get_attachment_uris(opid: number, error: GLib.Error, attachment_uris: string[]): void
    respond_get_free_busy(opid: number, error: GLib.Error, freebusy: string[]): void
    respond_get_object(opid: number, error: GLib.Error, object: string): void
    respond_get_object_list(opid: number, error: GLib.Error, objects: string[]): void
    respond_get_timezone(opid: number, error: GLib.Error, tzobject: string): void
    respond_modify_objects(opid: number, error: GLib.Error, old_components: ECal.Component[], new_components: ECal.Component[]): void
    respond_open(opid: number, error: GLib.Error): void
    respond_receive_objects(opid: number, error: GLib.Error): void
    respond_refresh(opid: number, error: GLib.Error): void
    respond_remove_objects(opid: number, error: GLib.Error, ids: ECal.ComponentId[], old_components: ECal.Component[], new_components: ECal.Component[]): void
    respond_send_objects(opid: number, error: GLib.Error, users: string[], calobj: string): void
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
    /* Virtual methods of EDataCal-2.0.EDataCal.DataCal */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataCal_ConstructProps)
    _init (config?: DataCal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: CalBackend, connection: Gio.DBusConnection, object_path: string): DataCal
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DataCalFactory_ConstructProps extends EBackend.DataFactory_ConstructProps {
}
export class DataCalFactory {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of EDataCal-2.0.EDataCal.DataCalFactory */
    parent: EBackend.DataFactory
    priv: DataCalFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DataFactory */
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
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    load_modules(): void
    quit(code: EBackend.DBusServerExitCode): void
    release(): void
    run(wait_for_client: boolean): EBackend.DBusServerExitCode
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.DataFactory */
    vfunc_complete_open(invocation: Gio.DBusMethodInvocation, object_path: string, bus_name: string, extension_name: string): void
    vfunc_create_backend(backend_factory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend
    vfunc_open_backend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: EBackend.DBusServerExitCode): void
    vfunc_run_server(): EBackend.DBusServerExitCode
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DataCalFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DataCalFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: (($obj: DataCalFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DataCalFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: (($obj: DataCalFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DataCalFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: (($obj: DataCalFactory, code: EBackend.DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DataCalFactory, code: EBackend.DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: EBackend.DBusServerExitCode): void
    connect(sigName: "run-server", callback: (($obj: DataCalFactory) => EBackend.DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DataCalFactory) => EBackend.DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataCalFactory_ConstructProps)
    _init (config?: DataCalFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend_per_process: number, cancellable?: Gio.Cancellable | null): DataCalFactory
    static $gtype: GObject.Type
}
export interface DataCalView_ConstructProps extends GObject.Object_ConstructProps {
    backend?: CalBackend
    connection?: Gio.DBusConnection
    object_path?: string
    sexp?: CalBackendSExp
}
export class DataCalView {
    /* Fields of EDataCal-2.0.EDataCal.DataCalView */
    parent: GObject.Object
    priv: DataCalViewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.DataCalView */
    component_matches(component: ECal.Component): boolean
    get_component_string(component: ECal.Component): string
    get_connection(): Gio.DBusConnection
    get_fields_of_interest(): GLib.HashTable
    get_flags(): ECal.ClientViewFlags
    get_object_path(): string
    get_sexp(): object | null
    is_completed(): boolean
    is_started(): boolean
    is_stopped(): boolean
    notify_complete(error: GLib.Error): void
    notify_components_added(ecalcomponents: ECal.Component[]): void
    notify_components_added_1(component: ECal.Component): void
    notify_components_modified(ecalcomponents: ECal.Component[]): void
    notify_components_modified_1(component: ECal.Component): void
    notify_objects_removed(ids: ECal.ComponentId[]): void
    notify_objects_removed_1(id: ECal.ComponentId): void
    notify_progress(percent: number, message: string): void
    object_matches(object: string): boolean
    ref_backend(): CalBackend | null
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
    /* Virtual methods of EDataCal-2.0.EDataCal.DataCalView */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataCalView_ConstructProps)
    _init (config?: DataCalView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: object | null, sexp: object | null, connection: Gio.DBusConnection, object_path: string): DataCalView
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface IntervalTree_ConstructProps extends GObject.Object_ConstructProps {
}
export class IntervalTree {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.IntervalTree */
    destroy(): void
    dump(): void
    insert(start: number, end: number, comp: ECal.Component): boolean
    remove(uid: string, rid: string): boolean
    search(start: number, end: number): ECal.Component[] | null
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IntervalTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IntervalTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IntervalTree_ConstructProps)
    _init (config?: IntervalTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IntervalTree
    static $gtype: GObject.Type
}
export interface SubprocessCalFactory_ConstructProps extends EBackend.SubprocessFactory_ConstructProps {
}
export class SubprocessCalFactory {
    /* Properties of EBackend-1.2.EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of EDataCal-2.0.EDataCal.SubprocessCalFactory */
    parent: EBackend.SubprocessFactory
    priv: SubprocessCalFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SubprocessFactory */
    call_backends_prepare_shutdown(): void
    get_backends_list(): EBackend.Backend[]
    get_registry(): EDataServer.SourceRegistry
    open_backend(connection: Gio.DBusConnection, uid: string, backend_factory_type_name: string, module_filename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    ref_initable_backend(uid: string, backend_factory_type_name: string, module_filename: string, cancellable?: Gio.Cancellable | null): EBackend.Backend | null
    set_backend_callbacks(backend: EBackend.Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    /* Virtual methods of EBackend-1.2.EBackend.SubprocessFactory */
    vfunc_backend_closed(backend: EBackend.Backend): void
    vfunc_backend_created(backend: EBackend.Backend): void
    vfunc_open_data(backend: EBackend.Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubprocessCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessCalFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: SubprocessCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessCalFactory_ConstructProps)
    _init (config?: SubprocessCalFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): SubprocessCalFactory
    static $gtype: GObject.Type
}
export abstract class CalBackendClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendClass */
    use_serial_dispatch_queue: boolean
    impl_get_backend_property: (backend: CalBackend, prop_name: string) => string
    impl_open: (backend: CalBackend, cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null) => void
    impl_refresh: (backend: CalBackend, cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null) => void
    impl_get_object: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string) => void
    impl_get_object_list: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string) => void
    impl_receive_objects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    impl_send_objects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    impl_get_attachment_uris: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string) => void
    impl_discard_alarm: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    impl_get_timezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string) => void
    impl_add_timezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string) => void
    impl_start_view: (backend: CalBackend, view: DataCalView) => void
    impl_stop_view: (backend: CalBackend, view: DataCalView) => void
    closed: (backend: CalBackend, sender: string) => void
    shutdown: (backend: CalBackend) => void
    reserved_padding: object[]
    static name: string
}
export abstract class CalBackendFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendFactoryClass */
    factory_name: string
    component_kind: ICalGLib.ComponentKind
    backend_type: GObject.Type
    static name: string
}
export class CalBackendFactoryPrivate {
    static name: string
}
export class CalBackendPrivate {
    static name: string
}
export abstract class CalBackendSExpClass {
    static name: string
}
export class CalBackendSExpPrivate {
    static name: string
}
export abstract class CalBackendSyncClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendSyncClass */
    open_sync: (backend: CalBackendSync, cal: DataCal, cancellable?: Gio.Cancellable | null) => void
    refresh_sync: (backend: CalBackendSync, cal: DataCal, cancellable?: Gio.Cancellable | null) => void
    get_object_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, calobj: string) => void
    receive_objects_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    discard_alarm_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    get_timezone_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string) => void
    add_timezone_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string) => void
    reserved_padding: object[]
    static name: string
}
export class CalBackendSyncPrivate {
    static name: string
}
export abstract class CalCacheClass {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheClass */
    dup_component_revision: (cal_cache: CalCache, icomp: ICalGLib.Component) => string
    static name: string
}
export class CalCacheOfflineChange {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheOfflineChange */
    uid: string
    rid: string
    revision: string
    object: string
    state: EBackend.OfflineState
    /* Methods of EDataCal-2.0.EDataCal.CalCacheOfflineChange */
    copy(): CalCacheOfflineChange
    static name: string
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    constructor(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    static free(change?: object | null): void
}
export class CalCachePrivate {
    static name: string
}
export class CalCacheSearchData {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheSearchData */
    uid: string
    rid: string
    object: string
    extra: string
    /* Methods of EDataCal-2.0.EDataCal.CalCacheSearchData */
    copy(): CalCacheSearchData
    static name: string
    static new(uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData
    constructor(uid: string, rid: string | null, object: string, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData
    static free(ptr?: object | null): void
}
export abstract class CalMetaBackendClass {
    /* Fields of EDataCal-2.0.EDataCal.CalMetaBackendClass */
    connect_sync: (meta_backend: CalMetaBackend, credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync: (meta_backend: CalMetaBackend, cancellable?: Gio.Cancellable | null) => boolean
    get_changes_sync: (meta_backend: CalMetaBackend, last_sync_tag: string | null, is_repeat: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_repeat */ boolean, /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] ]
    list_existing_sync: (meta_backend: CalMetaBackend, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string, /* out_existing_objects */ CalMetaBackendInfo[] ]
    load_component_sync: (meta_backend: CalMetaBackend, uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_component */ ICalGLib.Component, /* out_extra */ string ]
    save_component_sync: (meta_backend: CalMetaBackend, overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_uid */ string, /* out_new_extra */ string ]
    remove_component_sync: (meta_backend: CalMetaBackend, conflict_resolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null) => boolean
    search_sync: (meta_backend: CalMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    search_components_sync: (meta_backend: CalMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    requires_reconnect: (meta_backend: CalMetaBackend) => boolean
    source_changed: (meta_backend: CalMetaBackend) => void
    get_ssl_error_details: (meta_backend: CalMetaBackend) => [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    static name: string
}
export class CalMetaBackendInfo {
    /* Fields of EDataCal-2.0.EDataCal.CalMetaBackendInfo */
    uid: string
    revision: string
    object: string
    extra: string
    /* Methods of EDataCal-2.0.EDataCal.CalMetaBackendInfo */
    copy(): CalMetaBackendInfo
    static name: string
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): CalMetaBackendInfo
    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): CalMetaBackendInfo
    static free(ptr?: object | null): void
}
export class CalMetaBackendPrivate {
    static name: string
}
export abstract class DataCalClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DataCalFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalFactoryClass */
    parent_class: EBackend.DataFactoryClass
    static name: string
}
export class DataCalFactoryPrivate {
    static name: string
}
export class DataCalPrivate {
    static name: string
}
export abstract class DataCalViewClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalViewClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataCalViewPrivate {
    static name: string
}
export abstract class IntervalTreeClass {
    static name: string
}
export class IntervalTreePrivate {
    static name: string
}
export abstract class SubprocessCalFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass */
    parent_class: EBackend.SubprocessFactoryClass
    static name: string
}
export class SubprocessCalFactoryPrivate {
    static name: string
}