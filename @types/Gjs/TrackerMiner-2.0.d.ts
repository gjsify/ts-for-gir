/**
 * TrackerMiner-2.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum DecoratorError {
    EMPTY,
    PAUSED,
}
export enum FilterPolicy {
    DENY,
    ACCEPT,
}
export enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
export enum MinerError {
    NAME_MISSING,
    NAME_UNAVAILABLE,
    PAUSED,
    PAUSED_ALREADY,
    INVALID_COOKIE,
}
export enum MinerFSError {
    MINER_FS_ERROR_INIT,
}
export enum MinerFSEventType {
    CREATED,
    UPDATED,
    DELETED,
    MOVED,
}
export enum NetworkType {
    NONE,
    UNKNOWN,
    GPRS,
    EDGE,
    /* 3G (invalid, starts with a number) */
    LAN,
}
export enum DirectoryFlags {
    NONE,
    RECURSE,
    CHECK_MTIME,
    MONITOR,
    IGNORE,
    PRESERVE,
    PRIORITY,
    NO_STAT,
    CHECK_DELETED,
}
export const MINER_DBUS_INTERFACE: string
export const MINER_DBUS_NAME_PREFIX: string
export const MINER_DBUS_PATH_PREFIX: string
export const MINER_ERROR_DOMAIN: string
export class DataProvider {
    /* Methods of TrackerMiner.DataProvider */
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator
    /* Virtual methods of TrackerMiner.DataProvider */
    vfunc_begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    vfunc_begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator
    static name: string
}
export interface Decorator_ConstructProps extends Miner_ConstructProps {
    class_names?: string[]
    commit_batch_size?: number
    data_source?: string
    priority_rdf_types?: string[]
}
export class Decorator {
    /* Properties of TrackerMiner.Decorator */
    class_names: string[]
    commit_batch_size: number
    priority_rdf_types: string[]
    /* Properties of TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner.Decorator */
    parent_instance: Miner
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.Decorator */
    delete_id(id: number): void
    get_class_names(): string[]
    get_data_source(): string
    get_n_items(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(result: Gio.AsyncResult): DecoratorInfo
    prepend_id(id: number, class_name_id: number): void
    set_priority_rdf_types(rdf_types: string): void
    /* Methods of TrackerMiner.Miner */
    is_paused(): boolean
    is_started(): boolean
    pause(): void
    resume(): boolean
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
    /* Virtual methods of TrackerMiner.Decorator */
    vfunc_finished(): void
    vfunc_items_available(): void
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number, remaining_time: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Decorator) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Decorator) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "started", callback: (($obj: Decorator) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decorator_ConstructProps)
    _init (config?: Decorator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DecoratorFS_ConstructProps extends Decorator_ConstructProps {
}
export class DecoratorFS {
    /* Properties of TrackerMiner.Decorator */
    class_names: string[]
    commit_batch_size: number
    priority_rdf_types: string[]
    /* Properties of TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner.DecoratorFS */
    parent_instance: Decorator
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.DecoratorFS */
    prepend_file(file: Gio.File): number
    /* Methods of TrackerMiner.Decorator */
    delete_id(id: number): void
    get_class_names(): string[]
    get_data_source(): string
    get_n_items(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(result: Gio.AsyncResult): DecoratorInfo
    prepend_id(id: number, class_name_id: number): void
    set_priority_rdf_types(rdf_types: string): void
    /* Methods of TrackerMiner.Miner */
    is_paused(): boolean
    is_started(): boolean
    pause(): void
    resume(): boolean
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
    /* Virtual methods of TrackerMiner.Decorator */
    vfunc_finished(): void
    vfunc_items_available(): void
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number, remaining_time: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DecoratorFS_ConstructProps)
    _init (config?: DecoratorFS_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    filter_hidden?: boolean
    root?: Gio.File
}
export class IndexingTree {
    /* Properties of TrackerMiner.IndexingTree */
    filter_hidden: boolean
    /* Fields of TrackerMiner.IndexingTree */
    parent_instance: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.IndexingTree */
    add(directory: Gio.File, flags: DirectoryFlags): void
    add_filter(filter: FilterType, glob_string: string): void
    clear_filters(type: FilterType): void
    file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean
    file_is_root(file: Gio.File): boolean
    file_matches_filter(type: FilterType, file: Gio.File): boolean
    get_default_policy(filter: FilterType): FilterPolicy
    get_filter_hidden(): boolean
    get_master_root(): Gio.File
    get_root(file: Gio.File): [ /* returnType */ Gio.File, /* directory_flags */ DirectoryFlags ]
    list_roots(): Gio.File[]
    notify_update(file: Gio.File, recursive: boolean): boolean
    parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    set_default_policy(filter: FilterType, policy: FilterPolicy): void
    set_filter_hidden(filter_hidden: boolean): void
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
    /* Virtual methods of TrackerMiner.IndexingTree */
    vfunc_child_updated(root: Gio.File, child: Gio.File): void
    vfunc_directory_added(directory: Gio.File): void
    vfunc_directory_removed(directory: Gio.File): void
    vfunc_directory_updated(directory: Gio.File): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.IndexingTree */
    connect(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    connect_after(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-added", directory: Gio.File): void
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-removed", directory: Gio.File): void
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-updated", directory: Gio.File): void
    /* Signals of GObject.Object */
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
    static new_with_root(root: Gio.File): IndexingTree
    static $gtype: GObject.Type
}
export interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    progress?: number
    remaining_time?: number
    status?: string
}
export class Miner {
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
    is_paused(): boolean
    is_started(): boolean
    pause(): void
    resume(): boolean
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
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number, remaining_time: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Miner */
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
    /* Signals of GObject.Object */
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
    data_provider?: DataProvider
    processing_pool_ready_limit?: number
    processing_pool_wait_limit?: number
    root?: Gio.File
    throttle?: number
}
export class MinerFS {
    /* Properties of TrackerMiner.MinerFS */
    processing_pool_ready_limit: number
    processing_pool_wait_limit: number
    throttle: number
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
    check_file(file: Gio.File, priority: number, check_parents: boolean): void
    get_data_provider(): DataProvider
    get_indexing_tree(): IndexingTree
    get_throttle(): number
    get_urn(file: Gio.File): string | null
    has_items_to_process(): boolean
    notify_finish(task: Gio.Task, sparql: string | null, error: GLib.Error): void
    query_urn(file: Gio.File): string
    set_throttle(throttle: number): void
    /* Methods of TrackerMiner.Miner */
    is_paused(): boolean
    is_started(): boolean
    pause(): void
    resume(): boolean
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
    /* Virtual methods of TrackerMiner.MinerFS */
    vfunc_filter_event(type: MinerFSEventType, file: Gio.File, source_file: Gio.File): boolean
    vfunc_finished(elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_finished_root(root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_move_file(dest: Gio.File, source: Gio.File, recursive: boolean): string
    vfunc_process_file(file: Gio.File, task: Gio.Task): boolean
    vfunc_process_file_attributes(file: Gio.File, task: Gio.Task): boolean
    vfunc_remove_children(file: Gio.File): string
    vfunc_remove_file(file: Gio.File): string
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number, remaining_time: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    connect_after(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    emit(sigName: "finished", elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    connect(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    connect_after(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    emit(sigName: "finished-root", file: Gio.File): void
    connect(sigName: "move-file", callback: (($obj: MinerFS, object: Gio.File, p0: Gio.File, p1: boolean) => string)): number
    connect_after(sigName: "move-file", callback: (($obj: MinerFS, object: Gio.File, p0: Gio.File, p1: boolean) => string)): number
    emit(sigName: "move-file", object: Gio.File, p0: Gio.File, p1: boolean): void
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Gio.Task) => boolean)): number
    connect_after(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Gio.Task) => boolean)): number
    emit(sigName: "process-file", file: Gio.File, builder: Gio.Task): void
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Gio.Task) => boolean)): number
    connect_after(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Gio.Task) => boolean)): number
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Gio.Task): void
    connect(sigName: "remove-children", callback: (($obj: MinerFS, object: Gio.File) => string)): number
    connect_after(sigName: "remove-children", callback: (($obj: MinerFS, object: Gio.File) => string)): number
    emit(sigName: "remove-children", object: Gio.File): void
    connect(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File) => string)): number
    connect_after(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File) => string)): number
    emit(sigName: "remove-file", file: Gio.File): void
    /* Signals of TrackerMiner.Miner */
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface MinerOnline_ConstructProps extends Miner_ConstructProps {
}
export class MinerOnline {
    /* Properties of TrackerMiner.Miner */
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner.MinerOnline */
    parent_instance: Miner
    /* Fields of TrackerMiner.Miner */
    priv: MinerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerOnline */
    get_network_type(): NetworkType
    /* Methods of TrackerMiner.Miner */
    is_paused(): boolean
    is_started(): boolean
    pause(): void
    resume(): boolean
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
    /* Virtual methods of TrackerMiner.MinerOnline */
    vfunc_connected(network: NetworkType): boolean
    vfunc_disconnected(): void
    /* Virtual methods of TrackerMiner.Miner */
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number, remaining_time: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerOnline */
    connect(sigName: "connected", callback: (($obj: MinerOnline, type: any) => boolean)): number
    connect_after(sigName: "connected", callback: (($obj: MinerOnline, type: any) => boolean)): number
    emit(sigName: "connected", type: any): void
    connect(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "disconnected"): void
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerOnline_ConstructProps)
    _init (config?: MinerOnline_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MinerProxy_ConstructProps extends GObject.Object_ConstructProps {
    dbus_connection?: Gio.DBusConnection
    dbus_path?: string
    miner?: Miner
}
export class MinerProxy {
    /* Fields of TrackerMiner.MinerProxy */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Virtual methods of TrackerMiner.MinerProxy */
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
    connect(sigName: "notify", callback: (($obj: MinerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerProxy_ConstructProps)
    _init (config?: MinerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(miner: Miner, connection: Gio.DBusConnection, dbus_path: string, cancellable?: Gio.Cancellable | null): MinerProxy
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class DataProviderIface {
    /* Fields of TrackerMiner.DataProviderIface */
    g_iface: GObject.TypeInterface
    begin: (data_provider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Gio.FileEnumerator
    begin_async: (data_provider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    begin_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => Gio.FileEnumerator
    static name: string
}
export abstract class DecoratorClass {
    /* Fields of TrackerMiner.DecoratorClass */
    parent_class: MinerClass
    items_available: (decorator: Decorator) => void
    finished: (decorator: Decorator) => void
    padding: object[]
    static name: string
}
export abstract class DecoratorFSClass {
    /* Fields of TrackerMiner.DecoratorFSClass */
    parent_class: DecoratorClass
    padding: object[]
    static name: string
}
export class DecoratorInfo {
    /* Methods of TrackerMiner.DecoratorInfo */
    complete(sparql: string): void
    complete_error(error: GLib.Error): void
    get_mimetype(): string
    get_task(): Gio.Task
    get_url(): string
    get_urn(): string
    ref(): DecoratorInfo
    unref(): void
    static name: string
}
export abstract class IndexingTreeClass {
    /* Fields of TrackerMiner.IndexingTreeClass */
    parent_class: GObject.ObjectClass
    directory_added: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_removed: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_updated: (indexing_tree: IndexingTree, directory: Gio.File) => void
    child_updated: (indexing_tree: IndexingTree, root: Gio.File, child: Gio.File) => void
    padding: object[]
    static name: string
}
export abstract class MinerClass {
    /* Fields of TrackerMiner.MinerClass */
    parent_class: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number, remaining_time: number) => void
    padding: object[]
    static name: string
}
export abstract class MinerFSClass {
    /* Fields of TrackerMiner.MinerFSClass */
    parent: MinerClass
    process_file: (fs: MinerFS, file: Gio.File, task: Gio.Task) => boolean
    finished: (fs: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    process_file_attributes: (fs: MinerFS, file: Gio.File, task: Gio.Task) => boolean
    finished_root: (fs: MinerFS, root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    remove_file: (fs: MinerFS, file: Gio.File) => string
    remove_children: (fs: MinerFS, file: Gio.File) => string
    move_file: (fs: MinerFS, dest: Gio.File, source: Gio.File, recursive: boolean) => string
    filter_event: (fs: MinerFS, type: MinerFSEventType, file: Gio.File, source_file: Gio.File) => boolean
    padding: object[]
    static name: string
}
export class MinerFSPrivate {
    static name: string
}
export abstract class MinerOnlineClass {
    /* Fields of TrackerMiner.MinerOnlineClass */
    parent_class: MinerClass
    connected: (miner: MinerOnline, network: NetworkType) => boolean
    disconnected: (miner: MinerOnline) => void
    padding: object[]
    static name: string
}
export class MinerPrivate {
    static name: string
}
export abstract class MinerProxyClass {
    /* Fields of TrackerMiner.MinerProxyClass */
    parent_class: GObject.ObjectClass
    static name: string
}