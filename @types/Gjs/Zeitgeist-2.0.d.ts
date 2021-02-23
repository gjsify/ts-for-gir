/**
 * Zeitgeist-2.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';

export enum ResultType {
    MOST_RECENT_EVENTS,
    LEAST_RECENT_EVENTS,
    MOST_RECENT_SUBJECTS,
    LEAST_RECENT_SUBJECTS,
    MOST_POPULAR_SUBJECTS,
    LEAST_POPULAR_SUBJECTS,
    MOST_POPULAR_ACTOR,
    LEAST_POPULAR_ACTOR,
    MOST_RECENT_ACTOR,
    LEAST_RECENT_ACTOR,
    MOST_RECENT_ORIGIN,
    LEAST_RECENT_ORIGIN,
    MOST_POPULAR_ORIGIN,
    LEAST_POPULAR_ORIGIN,
    OLDEST_ACTOR,
    MOST_RECENT_SUBJECT_INTERPRETATION,
    LEAST_RECENT_SUBJECT_INTERPRETATION,
    MOST_POPULAR_SUBJECT_INTERPRETATION,
    LEAST_POPULAR_SUBJECT_INTERPRETATION,
    MOST_RECENT_MIMETYPE,
    LEAST_RECENT_MIMETYPE,
    MOST_POPULAR_MIMETYPE,
    LEAST_POPULAR_MIMETYPE,
    MOST_RECENT_CURRENT_URI,
    LEAST_RECENT_CURRENT_URI,
    MOST_POPULAR_CURRENT_URI,
    LEAST_POPULAR_CURRENT_URI,
    MOST_RECENT_EVENT_ORIGIN,
    LEAST_RECENT_EVENT_ORIGIN,
    MOST_POPULAR_EVENT_ORIGIN,
    LEAST_POPULAR_EVENT_ORIGIN,
    MOST_RECENT_CURRENT_ORIGIN,
    LEAST_RECENT_CURRENT_ORIGIN,
    MOST_POPULAR_CURRENT_ORIGIN,
    LEAST_POPULAR_CURRENT_ORIGIN,
    RELEVANCY,
}
export enum RelevantResultType {
    RECENT,
    RELATED,
}
export enum StorageState {
    NOT_AVAILABLE,
    AVAILABLE,
    ANY,
}
export enum EngineError {
    BACKUP_FAILED,
    DATABASE_BUSY,
    DATABASE_CANTOPEN,
    DATABASE_CORRUPT,
    DATABASE_ERROR,
    DATABASE_RETIRE_FAILED,
    EXISTING_INSTANCE,
    INVALID_ARGUMENT,
    INVALID_EVENT,
    INVALID_KEY,
}
export enum DataModelError {
    INVALID_SIGNATURE,
    NULL_EVENT,
    TOO_MANY_RESULTS,
}
export const SIG_DATASOURCES: string
export const SECOND: number
export const MINUTE: number
export const HOUR: number
export const DAY: number
export const WEEK: number
export const YEAR: number
export const ALARM: string
export const ATTACHMENT: string
export const CALENDAR: string
export const CALENDAR_DATA_OBJECT: string
export const EVENT: string
export const FREEBUSY: string
export const JOURNAL: string
export const TIMEZONE: string
export const TODO: string
export const CONTACT: string
export const CONTACT_GROUP: string
export const CONTACT_LIST: string
export const CONTACT_LIST_DATA_OBJECT: string
export const ORGANIZATION_CONTACT: string
export const PERSON_CONTACT: string
export const APPLICATION: string
export const ARCHIVE: string
export const ARCHIVE_ITEM: string
export const AUDIO: string
export const BOOKMARK: string
export const BOOKMARK_FOLDER: string
export const CURSOR: string
export const DATA_CONTAINER: string
export const DELETED_RESOURCE: string
export const DOCUMENT: string
export const EMBEDDED_FILE_DATA_OBJECT: string
export const EXECUTABLE: string
export const FILESYSTEM: string
export const FILESYSTEM_IMAGE: string
export const FILE_DATA_OBJECT: string
export const FOLDER: string
export const FONT: string
export const HARD_DISK_PARTITION: string
export const HTML_DOCUMENT: string
export const ICON: string
export const IMAGE: string
export const MEDIA: string
export const MEDIA_LIST: string
export const MEDIA_STREAM: string
export const MIND_MAP: string
export const OPERATING_SYSTEM: string
export const PAGINATED_TEXT_DOCUMENT: string
export const PLAIN_TEXT_DOCUMENT: string
export const PRESENTATION: string
export const RASTER_IMAGE: string
export const REMOTE_DATA_OBJECT: string
export const REMOTE_PORT_ADDRESS: string
export const SOFTWARE: string
export const SOFTWARE_ITEM: string
export const SOFTWARE_SERVICE: string
export const SOURCE_CODE: string
export const SPREADSHEET: string
export const TEXT_DOCUMENT: string
export const TRASH: string
export const VECTOR_IMAGE: string
export const VIDEO: string
export const VISUAL: string
export const WEBSITE: string
export const WEB_DATA_OBJECT: string
export const DATA_OBJECT: string
export const INFORMATION_ELEMENT: string
export const MOVIE: string
export const MUSIC_ALBUM: string
export const MUSIC_PIECE: string
export const TVSERIES: string
export const TVSHOW: string
export const EMAIL: string
export const IMMESSAGE: string
export const MAILBOX: string
export const MAILBOX_DATA_OBJECT: string
export const MESSAGE: string
export const MIME_ENTITY: string
export const ACCEPT_EVENT: string
export const ACCESS_EVENT: string
export const APPLICATION_ACTION: string
export const CREATE_EVENT: string
export const DELETE_EVENT: string
export const DENY_EVENT: string
export const EVENT_INTERPRETATION: string
export const EVENT_MANIFESTATION: string
export const EXPIRE_EVENT: string
export const HEURISTIC_ACTIVITY: string
export const LEAVE_EVENT: string
export const MODIFY_EVENT: string
export const MOVE_EVENT: string
export const RECEIVE_EVENT: string
export const SCHEDULED_ACTIVITY: string
export const SEND_EVENT: string
export const SYSTEM_NOTIFICATION: string
export const USER_ACTIVITY: string
export const WORLD_ACTIVITY: string
export const ENGINE_DBUS_NAME: string
export const ENGINE_DBUS_PATH: string
export const SIG_EVENT: string
export const MAX_DBUS_RESULT_SIZE: number
export const CACHE_SIZE: number
export function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[]
export function data_sources_to_variant(sources: GLib.HashTable): GLib.Variant
export function events_from_variant(vevents: GLib.Variant): Event[]
export function events_to_variant(events: Event[]): GLib.Variant
export function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant
export function timestamp_from_timeval(timeval: GLib.TimeVal): number
export function timestamp_to_timeval(timestamp: number): /* result */ GLib.TimeVal
export function timestamp_from_now(): number
export function timestamp_from_iso8601(datetime: string): number
export function timestamp_to_iso8601(timestamp: number): string
export function timestamp_from_date(date: GLib.Date): number
export function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
export function timestamp_to_date(timestamp: number): /* result */ GLib.Date
export function timestamp_next_midnight(timestamp: number): number
export function timestamp_prev_midnight(timestamp: number): number
export function symbol_get_display_name(symbol_uri: string): string
export function symbol_get_description(symbol_uri: string): string
export function symbol_get_all_parents(symbol_uri: string): string[]
export function symbol_get_all_children(symbol_uri: string): string[]
export function symbol_get_children(symbol_uri: string): string[]
export function symbol_get_parents(symbol_uri: string): string[]
export function symbol_is_a(symbol_uri?: string | null, parent_uri?: string | null): boolean
export function utils_get_data_path(): string
export function utils_get_default_data_path(): string
export function utils_get_database_file_path(): string
export function utils_set_database_file_path(path: string): void
export function utils_get_database_file_backup_path(): string
export function utils_get_database_file_retire_name(): string
export function utils_get_local_extensions_path(): string
export function utils_using_in_memory_database(): boolean
export function utils_backup_database(): void
export function utils_parse_negation(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utils_parse_noexpand(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utils_parse_wildcard(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utils_is_empty_string(s?: string | null): boolean
export function utils_log_may_read_directly(): boolean
export function result_type_is_sort_order_asc(result_type: ResultType): boolean
export function register_mimetype(mimetype: string, interpretation_uri: string): void
export function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void
export function interpretation_for_mimetype(mimetype?: string | null): string | null
export function register_uri_scheme(uri_scheme: string, manifestation_type: string): void
export function manifestation_for_uri(uri: string): string | null
export interface RemoteRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteRegistry {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant
    register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    register_data_source_finish(_res_: Gio.AsyncResult): boolean
    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    vfunc_get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_register_data_source_finish(_res_: Gio.AsyncResult): boolean
    vfunc_set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    vfunc_get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    connect(sigName: "data-source-disconnected", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    connect_after(sigName: "data-source-disconnected", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    emit(sigName: "data-source-disconnected", data_source: GLib.Variant): void
    connect(sigName: "data-source-enabled", callback: (($obj: RemoteRegistry, unique_id: string, enabled: boolean) => void)): number
    connect_after(sigName: "data-source-enabled", callback: (($obj: RemoteRegistry, unique_id: string, enabled: boolean) => void)): number
    emit(sigName: "data-source-enabled", unique_id: string, enabled: boolean): void
    connect(sigName: "data-source-registered", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    connect_after(sigName: "data-source-registered", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    emit(sigName: "data-source-registered", data_source: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteRegistry_ConstructProps)
    _init (config?: RemoteRegistry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteLog_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteLog {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteLog */
    delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    insert_events(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    insert_events_finish(_res_: Gio.AsyncResult): number[]
    install_monitor(monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    install_monitor_finish(_res_: Gio.AsyncResult): void
    remove_monitor(monitor_path: string, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_monitor_finish(_res_: Gio.AsyncResult): void
    quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    quit_finish(_res_: Gio.AsyncResult): void
    get_extensions(): string[]
    get_version(): /* result */ VersionStruct
    get_datapath(): string
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteLog */
    vfunc_delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    vfunc_find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    vfunc_get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_insert_events(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[]
    vfunc_install_monitor(monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_monitor(monitor_path: string, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void
    vfunc_quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_quit_finish(_res_: Gio.AsyncResult): void
    vfunc_get_extensions(): string[]
    vfunc_get_version(): /* result */ VersionStruct
    vfunc_get_datapath(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteLog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteLog_ConstructProps)
    _init (config?: RemoteLog_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    notify_insert_finish(_res_: Gio.AsyncResult): void
    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    notify_delete_finish(_res_: Gio.AsyncResult): void
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void
    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteMonitor_ConstructProps)
    _init (config?: RemoteMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteSimpleIndexer_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteSimpleIndexer {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer */
    search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer */
    vfunc_search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    vfunc_search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteSimpleIndexer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteSimpleIndexer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteSimpleIndexer_ConstructProps)
    _init (config?: RemoteSimpleIndexer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
export class NetworkManagerDBus {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    state(): number
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    vfunc_state(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    connect(sigName: "state-changed", callback: (($obj: NetworkManagerDBus, state: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: NetworkManagerDBus, state: number) => void)): number
    emit(sigName: "state-changed", state: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkManagerDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkManagerDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkManagerDBus_ConstructProps)
    _init (config?: NetworkManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ConnmanManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
export class ConnmanManagerDBus {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    get_state(): string
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    vfunc_get_state(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    connect(sigName: "state-changed", callback: (($obj: ConnmanManagerDBus, state: string) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: ConnmanManagerDBus, state: string) => void)): number
    emit(sigName: "state-changed", state: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnmanManagerDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnmanManagerDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConnmanManagerDBus_ConstructProps)
    _init (config?: ConnmanManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResultSet {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    size(): number
    estimated_matches(): number
    next_value(): Event | null
    has_next(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    vfunc_size(): number
    vfunc_estimated_matches(): number
    vfunc_next_value(): Event | null
    vfunc_has_next(): boolean
    vfunc_tell(): number
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResultSet_ConstructProps)
    _init (config?: ResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataSourceRegistry_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
export class DataSourceRegistry {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry */
    get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[]
    get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource
    register_data_source(data_source: DataSource, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    register_data_source_finish(_res_: Gio.AsyncResult): boolean
    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry */
    connect(sigName: "source-disconnected", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    connect_after(sigName: "source-disconnected", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    emit(sigName: "source-disconnected", data_source: DataSource): void
    connect(sigName: "source-enabled", callback: (($obj: DataSourceRegistry, unique_id: string, enabled: boolean) => void)): number
    connect_after(sigName: "source-enabled", callback: (($obj: DataSourceRegistry, unique_id: string, enabled: boolean) => void)): number
    emit(sigName: "source-enabled", unique_id: string, enabled: boolean): void
    connect(sigName: "source-registered", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    connect_after(sigName: "source-registered", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    emit(sigName: "source-registered", data_source: DataSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSourceRegistry_ConstructProps)
    _init (config?: DataSourceRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSourceRegistry
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
export class Index {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Index */
    search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): ResultSet
    search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Index
    static $gtype: GObject.Type
}
export interface Log_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
export class Log {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Log */
    insert_event(event: Event, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    insert_event_finish(_res_: Gio.AsyncResult): number[]
    insert_events(events: Event[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    insert_events_finish(_res_: Gio.AsyncResult): number[]
    insert_event_no_reply(event: Event): void
    insert_events_no_reply(events: Event[]): void
    find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_events_finish(_res_: Gio.AsyncResult): ResultSet
    find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_events_finish(_res_: Gio.AsyncResult): ResultSet
    find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_events_finish(_res_: Gio.AsyncResult): TimeRange
    quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    quit_finish(_res_: Gio.AsyncResult): void
    install_monitor(monitor: Monitor): void
    remove_monitor(monitor: Monitor): void
    get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    get_extensions(): string[]
    datapath(): string
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Log_ConstructProps)
    _init (config?: Log_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Log
    static get_default(): Log
    static $gtype: GObject.Type
}
export interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    time_range?: TimeRange
    event_templates?: Event[]
}
export class Monitor {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Monitor */
    time_range: TimeRange
    event_templates: Event[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Monitor */
    get_templates(): Event[]
    get_path(): string
    get_time_range(): TimeRange
    set_time_range(value: TimeRange): void
    get_event_templates(): Event[]
    set_event_templates(value: Event[]): void
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
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    notify_insert_finish(_res_: Gio.AsyncResult): void
    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    notify_delete_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.Monitor */
    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void
    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.Monitor */
    connect(sigName: "events-inserted", callback: (($obj: Monitor, time_range: TimeRange, events: ResultSet) => void)): number
    connect_after(sigName: "events-inserted", callback: (($obj: Monitor, time_range: TimeRange, events: ResultSet) => void)): number
    emit(sigName: "events-inserted", time_range: TimeRange, events: ResultSet): void
    connect(sigName: "events-deleted", callback: (($obj: Monitor, time_range: TimeRange, event_ids: number[]) => void)): number
    connect_after(sigName: "events-deleted", callback: (($obj: Monitor, time_range: TimeRange, event_ids: number[]) => void)): number
    emit(sigName: "events-deleted", time_range: TimeRange, event_ids: number[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(time_range: TimeRange, event_templates: Event[]): Monitor
    static $gtype: GObject.Type
}
export interface QueuedProxyWrapper_ConstructProps extends GObject.Object_ConstructProps {
    proxy_created?: boolean
    is_connected?: boolean
}
export class QueuedProxyWrapper {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: QueuedProxyWrapper_ConstructProps)
    _init (config?: QueuedProxyWrapper_ConstructProps): void
    static $gtype: GObject.Type
}
export class QueuedProxyWrapperQueuedMethod {
    /* Fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod */
    ref_count: number
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod */
    get_queued_method(): [ /* returnType */ GLib.SourceFunc, /* result_target */ object | null ]
    static name: string
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
    constructor(callback: GLib.SourceFunc)
    /* Static methods and pseudo-constructors */
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
}
export interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
    unique_id?: string
    name?: string
    description?: string
    event_templates?: Event[]
    enabled?: boolean
    running?: boolean
    timestamp?: number
}
export class DataSource {
    /* Properties of Zeitgeist-2.0.Zeitgeist.DataSource */
    unique_id: string
    name: string
    description: string
    event_templates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.DataSource */
    to_variant(): GLib.Variant
    get_unique_id(): string
    set_unique_id(value: string): void
    get_name(): string
    set_name(value: string): void
    get_description(): string
    set_description(value: string): void
    get_event_templates(): Event[] | null
    set_event_templates(value?: Event[] | null): void
    get_enabled(): boolean
    set_enabled(value: boolean): void
    get_running(): boolean
    set_running(value: boolean): void
    get_timestamp(): number
    set_timestamp(value: number): void
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
    connect(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSource_ConstructProps)
    _init (config?: DataSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSource
    static full(unique_id: string, name: string, description: string, templates?: Event[] | null): DataSource
    static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource
    static $gtype: GObject.Type
}
export interface Event_ConstructProps extends GObject.Object_ConstructProps {
    id?: number
    timestamp?: number
    origin?: string
    actor?: string
    interpretation?: string
    manifestation?: string
    subjects?: Subject[]
    payload?: Uint8Array
}
export class Event {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Event */
    id: number
    timestamp: number
    origin: string
    actor: string
    interpretation: string
    manifestation: string
    subjects: Subject[]
    payload: Uint8Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Event */
    get_subject(index: number): Subject
    num_subjects(): number
    add_subject(subject: Subject): void
    take_subject(subject: Subject): void
    set_actor_from_app_info(info: Gio.AppInfo): void
    to_variant(): GLib.Variant
    debug_print(): void
    matches_template(template_event: Event): boolean
    get_id(): number
    set_id(value: number): void
    get_timestamp(): number
    set_timestamp(value: number): void
    get_origin(): string | null
    set_origin(value?: string | null): void
    get_actor(): string | null
    set_actor(value?: string | null): void
    get_interpretation(): string | null
    set_interpretation(value?: string | null): void
    get_manifestation(): string | null
    set_manifestation(value?: string | null): void
    get_subjects(): Subject[]
    set_subjects(value: Subject[]): void
    get_payload(): Uint8Array | null
    set_payload(value?: Uint8Array | null): void
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
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_variant(event_variant: GLib.Variant): Event
    static new(): Event
    static $gtype: GObject.Type
}
export interface Subject_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
    origin?: string
    text?: string
    storage?: string
    current_uri?: string
    current_origin?: string
    mimetype?: string
    interpretation?: string
    manifestation?: string
}
export class Subject {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Subject */
    uri: string
    origin: string
    text: string
    storage: string
    current_uri: string
    current_origin: string
    mimetype: string
    interpretation: string
    manifestation: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Subject */
    to_variant(): GLib.Variant
    matches_template(template_subject: Subject): boolean
    get_uri(): string | null
    set_uri(value?: string | null): void
    get_origin(): string | null
    set_origin(value?: string | null): void
    get_text(): string | null
    set_text(value?: string | null): void
    get_storage(): string | null
    set_storage(value?: string | null): void
    get_current_uri(): string | null
    set_current_uri(value?: string | null): void
    get_current_origin(): string | null
    set_current_origin(value?: string | null): void
    get_mimetype(): string | null
    set_mimetype(value?: string | null): void
    get_interpretation(): string | null
    set_interpretation(value?: string | null): void
    get_manifestation(): string | null
    set_manifestation(value?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subject_ConstructProps)
    _init (config?: Subject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static full(uri?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, origin?: string | null, text?: string | null, storage?: string | null): Subject
    static move_event(source_uri?: string | null, source_origin?: string | null, destination_uri?: string | null, destination_origin?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, text?: string | null, storage?: string | null): Subject
    static from_variant(subject_variant: GLib.Variant): Subject
    static new(): Subject
    static $gtype: GObject.Type
}
export interface TimeRange_ConstructProps extends GObject.Object_ConstructProps {
    start?: number
    end?: number
}
export class TimeRange {
    /* Properties of Zeitgeist-2.0.Zeitgeist.TimeRange */
    start: number
    end: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.TimeRange */
    to_variant(): GLib.Variant
    intersect(time_range: TimeRange): TimeRange | null
    get_start(): number
    get_end(): number
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
    connect(sigName: "notify", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimeRange_ConstructProps)
    _init (config?: TimeRange_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start_msec: number, end_msec: number): TimeRange
    static anytime(): TimeRange
    static to_now(): TimeRange
    static from_now(): TimeRange
    static from_variant(variant: GLib.Variant): TimeRange
    static $gtype: GObject.Type
}
export interface SimpleResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleResultSet {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    size(): number
    estimated_matches(): number
    next_value(): Event | null
    has_next(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.SimpleResultSet */
    vfunc_size(): number
    vfunc_estimated_matches(): number
    vfunc_next_value(): Event | null
    vfunc_has_next(): boolean
    vfunc_tell(): number
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleResultSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleResultSet_ConstructProps)
    _init (config?: SimpleResultSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(events: Event[]): SimpleResultSet
    static with_num_matches(events: Event[], matches: number): SimpleResultSet
    static $gtype: GObject.Type
}
export abstract class DataSourceRegistryClass {
    static name: string
}
export class DataSourceRegistryPrivate {
    static name: string
}
export abstract class IndexClass {
    static name: string
}
export class IndexPrivate {
    static name: string
}
export abstract class LogClass {
    static name: string
}
export class LogPrivate {
    static name: string
}
export abstract class MonitorClass {
    static name: string
}
export class MonitorPrivate {
    static name: string
}
export abstract class QueuedProxyWrapperClass {
    /* Fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperClass */
    on_connection_established: () => void
    on_connection_lost: () => void
    static name: string
}
export class QueuedProxyWrapperPrivate {
    static name: string
}
export abstract class QueuedProxyWrapperQueuedMethodClass {
    static name: string
}
export class QueuedProxyWrapperQueuedMethodPrivate {
    static name: string
}
export abstract class DataSourceClass {
    static name: string
}
export class DataSourcePrivate {
    static name: string
}
export abstract class EventClass {
    static name: string
}
export class EventPrivate {
    static name: string
}
export abstract class SubjectClass {
    static name: string
}
export class SubjectPrivate {
    static name: string
}
export abstract class TimeRangeClass {
    static name: string
}
export class TimeRangePrivate {
    static name: string
}
export abstract class SimpleResultSetClass {
    static name: string
}
export class SimpleResultSetPrivate {
    static name: string
}
export abstract class RemoteRegistryIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface */
    get_data_sources: (cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    get_data_sources_finish: (_res_: Gio.AsyncResult) => GLib.Variant
    register_data_source: (unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    register_data_source_finish: (_res_: Gio.AsyncResult) => boolean
    set_data_source_enabled: (unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    set_data_source_enabled_finish: (_res_: Gio.AsyncResult) => void
    get_data_source_from_id: (unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    get_data_source_from_id_finish: (_res_: Gio.AsyncResult) => GLib.Variant
    static name: string
}
export abstract class RemoteLogIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteLogIface */
    delete_events: (event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    delete_events_finish: (_res_: Gio.AsyncResult) => GLib.Variant
    find_event_ids: (time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    find_event_ids_finish: (_res_: Gio.AsyncResult) => number[]
    find_events: (time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    find_events_finish: (_res_: Gio.AsyncResult) => GLib.Variant
    find_related_uris: (time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    find_related_uris_finish: (_res_: Gio.AsyncResult) => string[]
    get_events: (event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    get_events_finish: (_res_: Gio.AsyncResult) => GLib.Variant
    insert_events: (events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    insert_events_finish: (_res_: Gio.AsyncResult) => number[]
    install_monitor: (monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    install_monitor_finish: (_res_: Gio.AsyncResult) => void
    remove_monitor: (monitor_path: string, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_monitor_finish: (_res_: Gio.AsyncResult) => void
    quit: (cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    quit_finish: (_res_: Gio.AsyncResult) => void
    get_extensions: () => string[]
    get_version: () => /* result */ VersionStruct
    get_datapath: () => string
    static name: string
}
export abstract class RemoteMonitorIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface */
    notify_insert: (time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null) => void
    notify_insert_finish: (_res_: Gio.AsyncResult) => void
    notify_delete: (time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null) => void
    notify_delete_finish: (_res_: Gio.AsyncResult) => void
    static name: string
}
export abstract class RemoteSimpleIndexerIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface */
    search: (query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    search_finish: (_res_: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    search_with_relevancies: (query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    search_with_relevancies_finish: (_res_: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    static name: string
}
export abstract class NetworkManagerDBusIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface */
    state: () => number
    static name: string
}
export abstract class ConnmanManagerDBusIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface */
    get_state: () => string
    static name: string
}
export abstract class ResultSetIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.ResultSetIface */
    size: () => number
    estimated_matches: () => number
    next_value: () => Event | null
    has_next: () => boolean
    tell: () => number
    reset: () => void
    static name: string
}
export class VersionStruct {
    /* Fields of Zeitgeist-2.0.Zeitgeist.VersionStruct */
    major: number
    minor: number
    micro: number
    static name: string
}