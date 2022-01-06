/**
 * TrackerMiner-0.16
 */

<<<<<<< HEAD
<<<<<<< HEAD
import type * as Gjs from './Gjs';
import type * as Tracker from './Tracker-0.16';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GModule from './GModule-2.0';
=======
import * as Gjs from './Gjs';
import * as Tracker from './Tracker-0.16';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GModule from './GModule-2.0';
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
import type * as Gjs from './Gjs';
import type * as Tracker from './Tracker-0.16';
import type * as GLib from './GLib-2.0';
import type * as GObject from './GObject-2.0';
import type * as Gio from './Gio-2.0';
import type * as GModule from './GModule-2.0';
>>>>>>> 2968f8b (Update types)

export enum FilterPolicy {
    DENY,
    ACCEPT,
}
export enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
export enum MinerManagerError {
    NOT_AVAILABLE,
    NOENT,
}
export enum MinerWebError {
    WRONG_CREDENTIALS,
    TOKEN_EXPIRED,
    NO_CREDENTIALS,
    KEYRING,
    SERVICE,
    TRACKER,
}
export enum DirectoryFlags {
    NONE,
    RECURSE,
    CHECK_MTIME,
    MONITOR,
    IGNORE,
    PRESERVE,
}
export const MAX_TIMEOUT_INTERVAL: number
export const MINER_DBUS_INTERFACE: string
export const MINER_DBUS_NAME_PREFIX: string
export const MINER_DBUS_PATH_PREFIX: string
export const MINER_ERROR_DOMAIN: string
export const MINER_WEB_DBUS_INTERFACE: string
export const MINER_WEB_ERROR_DOMAIN: string
export function accumulator_check_file(hint: GObject.SignalInvocationHint, return_accumulator: any, handler_return: any, accumulator_data: object): boolean
export function marshal_BOOLEAN__OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_BOOLEAN__OBJECT_BOXED_BOXED_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_BOOLEAN__OBJECT_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_BOOLEAN__OBJECT_OBJECT_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_BOOLEAN__OBJECT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__DOUBLE_UINT_UINT_UINT_UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__OBJECT_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__OBJECT_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__OBJECT_OBJECT_BOOLEAN_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__OBJECT_POINTER_UINT_UINT_UINT_UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__OBJECT_UINT_UINT_UINT_UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__STRING_DOUBLE_INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__STRING_STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__STRING_STRING_BOOLEAN_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__STRING_STRING_DOUBLE_INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function marshal_VOID__STRING_STRING_STRING_BOOLEAN_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
export function media_art_queue_empty(connection: Tracker.SparqlConnection): void
export function media_art_queue_remove(uri: string, mime_type: string): boolean
export function thumbnailer_cleanup(uri_prefix: string): boolean
export function thumbnailer_init(): boolean
export function thumbnailer_move_add(from_uri: string, mime_type: string, to_uri: string): boolean
export function thumbnailer_remove_add(uri: string, mime_type: string): boolean
export function thumbnailer_send(): void
export function thumbnailer_shutdown(): void
export interface Crawler_ConstructProps extends GObject.Object_ConstructProps {
}
export class Crawler {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.Crawler */
    parent: GObject.Object
    priv: CrawlerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.Crawler */
=======
    /* Fields of TrackerMiner.Crawler */
    parent: GObject.Object
    priv: CrawlerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.Crawler */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    get_file_attributes(): string
    get_file_info(file: Gio.File): Gio.FileInfo
    pause(): void
    resume(): void
    set_file_attributes(file_attributes: string): void
    set_throttle(throttle: number): void
    start(file: Gio.File, recurse: boolean): boolean
    stop(): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
<<<<<<< HEAD
    set_property(property_name: string, value: any): void
=======
    set_property(property_name: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
<<<<<<< HEAD
    watch_closure(closure: Function): void
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.Crawler */
=======
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of TrackerMiner.Crawler */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_check_directory(file: Gio.File): boolean
    vfunc_check_file(file: Gio.File): boolean
    vfunc_directory_crawled(directory: Gio.File, tree: GLib.Node, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_finished(interrupted: boolean): void
<<<<<<< HEAD
    /* Virtual methods of GObject-2.0.GObject.Object */
=======
    /* Virtual methods of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
<<<<<<< HEAD
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.Crawler */
=======
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Crawler */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "check-directory", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    connect_after(sigName: "check-directory", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    emit(sigName: "check-directory", object: Gio.File): void
    connect(sigName: "check-directory-contents", callback: (($obj: Crawler, object: Gio.File, p0: object) => boolean)): number
    connect_after(sigName: "check-directory-contents", callback: (($obj: Crawler, object: Gio.File, p0: object) => boolean)): number
    emit(sigName: "check-directory-contents", object: Gio.File, p0: object): void
    connect(sigName: "check-file", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    connect_after(sigName: "check-file", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    emit(sigName: "check-file", object: Gio.File): void
    connect(sigName: "directory-crawled", callback: (($obj: Crawler, object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void)): number
    connect_after(sigName: "directory-crawled", callback: (($obj: Crawler, object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void)): number
    emit(sigName: "directory-crawled", object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number): void
    connect(sigName: "finished", callback: (($obj: Crawler, object: boolean) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Crawler, object: boolean) => void)): number
    emit(sigName: "finished", object: boolean): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
=======
    /* Signals of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify", callback: (($obj: Crawler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Crawler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Crawler_ConstructProps)
    _init (config?: Crawler_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Crawler
    static $gtype: GObject.Type
}
export interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    filter_hidden?: boolean
}
export class IndexingTree {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.IndexingTree */
    filter_hidden: boolean
    /* Fields of TrackerMiner-0.16.TrackerMiner.IndexingTree */
    parent_instance: GObject.Object
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.IndexingTree */
=======
    /* Properties of TrackerMiner.IndexingTree */
    filter_hidden: boolean
    /* Fields of TrackerMiner.IndexingTree */
    parent_instance: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.IndexingTree */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    add(directory: Gio.File, flags: DirectoryFlags): void
    add_filter(filter: FilterType, glob_string: string): void
    clear_filters(type: FilterType): void
    file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean
    file_is_root(file: Gio.File): boolean
    file_matches_filter(type: FilterType, file: Gio.File): boolean
    get_default_policy(filter: FilterType): FilterPolicy
    get_filter_hidden(): boolean
    get_root(file: Gio.File): [ /* returnType */ Gio.File, /* directory_flags */ DirectoryFlags ]
    list_roots(): Gio.File[]
    parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    set_default_policy(filter: FilterType, policy: FilterPolicy): void
    set_filter_hidden(filter_hidden: boolean): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
<<<<<<< HEAD
    set_property(property_name: string, value: any): void
=======
    set_property(property_name: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
<<<<<<< HEAD
    watch_closure(closure: Function): void
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.IndexingTree */
    vfunc_directory_added(directory: Gio.File): void
    vfunc_directory_removed(directory: Gio.File): void
    vfunc_directory_updated(directory: Gio.File): void
    /* Virtual methods of GObject-2.0.GObject.Object */
=======
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of TrackerMiner.IndexingTree */
    vfunc_directory_added(directory: Gio.File): void
    vfunc_directory_removed(directory: Gio.File): void
    vfunc_directory_updated(directory: Gio.File): void
    /* Virtual methods of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
<<<<<<< HEAD
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.IndexingTree */
=======
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.IndexingTree */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    connect_after(sigName: "directory-added", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    emit(sigName: "directory-added", object: Gio.File): void
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    connect_after(sigName: "directory-removed", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    emit(sigName: "directory-removed", object: Gio.File): void
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    connect_after(sigName: "directory-updated", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    emit(sigName: "directory-updated", object: Gio.File): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
=======
    /* Signals of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexingTree_ConstructProps)
    _init (config?: IndexingTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndexingTree
    static $gtype: GObject.Type
}
export interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    progress?: number
    remaining_time?: number
    status?: string
}
export class Miner {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-0.16.TrackerMiner.Miner */
    parent_instance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.Miner */
=======
    /* Properties of TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner.Miner */
    parent_instance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.Miner */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
<<<<<<< HEAD
    set_property(property_name: string, value: any): void
=======
    set_property(property_name: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
<<<<<<< HEAD
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.Miner */
=======
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.Miner */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
<<<<<<< HEAD
    /* Virtual methods of GObject-2.0.GObject.Object */
=======
    /* Virtual methods of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
<<<<<<< HEAD
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.Miner */
=======
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Miner */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Miner) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Miner) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "started", callback: (($obj: Miner) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Miner) => void)): number
    emit(sigName: "stopped"): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
=======
    /* Signals of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Miner_ConstructProps)
    _init (config?: Miner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface MinerFS_ConstructProps extends Miner_ConstructProps {
    initial_crawling?: boolean
    mtime_checking?: boolean
    processing_pool_ready_limit?: number
    processing_pool_wait_limit?: number
    throttle?: number
}
export class MinerFS {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.MinerFS */
=======
    /* Properties of TrackerMiner.MinerFS */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    initial_crawling: boolean
    mtime_checking: boolean
    processing_pool_ready_limit: number
    processing_pool_wait_limit: number
    throttle: number
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerFS */
    parent: Miner
    priv: MinerFSPrivate
    /* Fields of TrackerMiner-0.16.TrackerMiner.Miner */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.MinerFS */
=======
    /* Properties of TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner.MinerFS */
    parent: Miner
    priv: MinerFSPrivate
    /* Fields of TrackerMiner.Miner */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerFS */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    add_directory_without_parent(file: Gio.File): void
    check_directory(file: Gio.File, check_parents: boolean): void
    check_directory_with_priority(file: Gio.File, priority: number, check_parents: boolean): void
    check_file(file: Gio.File, check_parents: boolean): void
    check_file_with_priority(file: Gio.File, priority: number, check_parents: boolean): void
    directory_add(file: Gio.File, recurse: boolean): void
    directory_remove(file: Gio.File): boolean
    directory_remove_full(file: Gio.File): boolean
    file_notify(file: Gio.File, error: GLib.Error): void
    force_mtime_checking(directory: Gio.File): void
    force_recheck(): void
    get_indexing_tree(): IndexingTree
    get_initial_crawling(): boolean
    get_mtime_checking(): boolean
    get_parent_urn(file: Gio.File): string
    get_throttle(): number
    get_urn(file: Gio.File): string
    has_items_to_process(): boolean
    query_urn(file: Gio.File): string
    set_initial_crawling(do_initial_crawling: boolean): void
    set_mtime_checking(mtime_checking: boolean): void
    set_throttle(throttle: number): void
<<<<<<< HEAD
    writeback_file(file: Gio.File, rdf_types: string[], results: any[]): void
    writeback_notify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner-0.16.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    writeback_file(file: Gio.File, rdf_types: string[], results: any): void
    writeback_notify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
<<<<<<< HEAD
    set_property(property_name: string, value: any): void
=======
    set_property(property_name: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
<<<<<<< HEAD
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.MinerFS */
=======
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerFS */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_finished(): void
    vfunc_ignore_next_update_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_process_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_process_file_attributes(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
<<<<<<< HEAD
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
=======
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
<<<<<<< HEAD
    vfunc_progress(status: string, progress: number, remaining_time: number): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    vfunc_progress(status: string, progress: number): void
>>>>>>> 2968f8b (Update types)
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
<<<<<<< HEAD
    /* Virtual methods of GObject-2.0.GObject.Object */
=======
    /* Virtual methods of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
<<<<<<< HEAD
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.MinerFS */
=======
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerFS */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    connect_after(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    emit(sigName: "finished", elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    connect(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
<<<<<<< HEAD
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "writeback-file", file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
=======
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "writeback-file", file: Gio.File, rdf_types: string[], results: any, cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner.Miner */
<<<<<<< HEAD
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    connect(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
>>>>>>> 2968f8b (Update types)
    connect(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "stopped"): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
=======
    /* Signals of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerFS_ConstructProps)
    _init (config?: MinerFS_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MinerManager_ConstructProps extends GObject.Object_ConstructProps {
    auto_start?: boolean
}
export class MinerManager {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerManager */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.MinerManager */
=======
    /* Fields of TrackerMiner.MinerManager */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerManager */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    get_available(): string[]
    get_description(miner: string): string
    get_display_name(miner: string): string
    get_running(): string[]
    get_status(miner: string): [ /* returnType */ boolean, /* status */ string | null, /* progress */ number | null, /* remaining_time */ number | null ]
    ignore_next_update(miner: string, urls: string): boolean
    index_file(file: Gio.File): boolean
    index_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    index_file_finish(result: Gio.AsyncResult): boolean
    is_active(miner: string): boolean
    is_paused(miner: string): [ /* returnType */ boolean, /* applications */ string[] | null, /* reasons */ string[] | null ]
    pause(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    pause_for_process(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    reindex_by_mimetype(mimetypes: string[]): boolean
    resume(miner: string, cookie: number): boolean
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
<<<<<<< HEAD
    set_property(property_name: string, value: any): void
=======
    set_property(property_name: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
<<<<<<< HEAD
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.MinerManager */
=======
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerManager */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_miner_activated(miner_name: string): void
    vfunc_miner_deactivated(miner_name: string): void
    vfunc_miner_paused(miner_name: string): void
    vfunc_miner_progress(miner_name: string, status: string, progress: number): void
    vfunc_miner_resumed(miner_name: string): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
<<<<<<< HEAD
    /* Virtual methods of GObject-2.0.GObject.Object */
=======
    /* Virtual methods of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
<<<<<<< HEAD
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.MinerManager */
=======
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerManager */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-activated", miner: string): void
    connect(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-deactivated", miner: string): void
    connect(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-paused", miner: string): void
    connect(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remaining_time: number): void
    connect(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-resumed", miner: string): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
=======
    /* Signals of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerManager_ConstructProps)
    _init (config?: MinerManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MinerManager
    static new_full(auto_start: boolean): MinerManager
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface MinerWeb_ConstructProps extends Miner_ConstructProps {
    associated?: boolean
}
export class MinerWeb {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.MinerWeb */
    associated: boolean
    /* Properties of TrackerMiner-0.16.TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerWeb */
    parent_instance: Miner
    priv: MinerWebPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.MinerWeb */
=======
    /* Properties of TrackerMiner.MinerWeb */
    associated: boolean
    /* Properties of TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner.MinerWeb */
    parent_instance: Miner
    priv: MinerWebPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerWeb */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    associate(association_data: GLib.HashTable): void
    authenticate(): void
    dissociate(): void
    get_association_data(): GLib.HashTable
<<<<<<< HEAD
    /* Methods of TrackerMiner-0.16.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
<<<<<<< HEAD
    set_property(property_name: string, value: any): void
=======
    set_property(property_name: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
<<<<<<< HEAD
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.MinerWeb */
=======
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerWeb */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_associate(association_data: GLib.HashTable): void
    vfunc_authenticate(): void
    vfunc_dissociate(): void
    vfunc_get_association_data(): GLib.HashTable
<<<<<<< HEAD
    /* Virtual methods of TrackerMiner-0.16.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
=======
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
<<<<<<< HEAD
    vfunc_progress(status: string, progress: number, remaining_time: number): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    vfunc_progress(status: string, progress: number): void
>>>>>>> 2968f8b (Update types)
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
<<<<<<< HEAD
    /* Virtual methods of GObject-2.0.GObject.Object */
=======
    /* Virtual methods of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
<<<<<<< HEAD
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
=======
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Miner */
<<<<<<< HEAD
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    connect(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
>>>>>>> 2968f8b (Update types)
    connect(sigName: "paused", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerWeb, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerWeb, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "stopped"): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
=======
    /* Signals of GObject.Object */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerWeb_ConstructProps)
    _init (config?: MinerWeb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export abstract class CrawlerClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.CrawlerClass */
=======
    /* Fields of TrackerMiner.CrawlerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent: GObject.ObjectClass
    check_directory: (crawler: Crawler, file: Gio.File) => boolean
    check_file: (crawler: Crawler, file: Gio.File) => boolean
    directory_crawled: (crawler: Crawler, directory: Gio.File, tree: GLib.Node, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    finished: (crawler: Crawler, interrupted: boolean) => void
    static name: string
}
export class CrawlerPrivate {
    static name: string
}
export abstract class IndexingTreeClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.IndexingTreeClass */
=======
    /* Fields of TrackerMiner.IndexingTreeClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent_class: GObject.ObjectClass
    directory_added: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_removed: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_updated: (indexing_tree: IndexingTree, directory: Gio.File) => void
    static name: string
}
export abstract class MinerClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerClass */
=======
    /* Fields of TrackerMiner.MinerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent_class: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number) => void
    ignore_next_update: (miner: Miner, urls: string[]) => void
    static name: string
}
export abstract class MinerFSClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerFSClass */
=======
    /* Fields of TrackerMiner.MinerFSClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent: MinerClass
    process_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    ignore_next_update_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS) => void
    process_file_attributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export class MinerFSPrivate {
    static name: string
}
export abstract class MinerManagerClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerManagerClass */
=======
    /* Fields of TrackerMiner.MinerManagerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent_class: GObject.ObjectClass
    miner_progress: (manager: MinerManager, miner_name: string, status: string, progress: number) => void
    miner_paused: (manager: MinerManager, miner_name: string) => void
    miner_resumed: (manager: MinerManager, miner_name: string) => void
    miner_activated: (manager: MinerManager, miner_name: string) => void
    miner_deactivated: (manager: MinerManager, miner_name: string) => void
    static name: string
}
export class MinerPrivate {
    static name: string
}
export abstract class MinerWebClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerWebClass */
=======
    /* Fields of TrackerMiner.MinerWebClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent_class: MinerClass
    authenticate: (miner: MinerWeb) => void
    get_association_data: (miner: MinerWeb) => GLib.HashTable
    associate: (miner: MinerWeb, association_data: GLib.HashTable) => void
    dissociate: (miner: MinerWeb) => void
    static name: string
}
export class MinerWebPrivate {
    static name: string
}