/**
 * RygelServer-2.4
 */

import type * as Gjs from './Gjs';
import type * as RygelCore from './RygelCore-2.4';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as Gee from './Gee-0.8';
import type * as GUPnP from './GUPnP-1.0';
import type * as libxml2 from './libxml2-2.0';
import type * as GstPbutils from './GstPbutils-0.10';
import type * as Gst from './Gst-0.10';
import type * as GModule from './GModule-2.0';
import type * as Soup from './Soup-2.4';
import type * as GUPnPAV from './GUPnPAV-1.0';

export enum LogicalOperator {
    AND,
    OR,
}
export enum ObjectEventType {
    ADDED,
    MODIFIED,
    DELETED,
}
export enum HTTPSeekType {
    BYTE,
    TIME,
}
export enum SerializerType {
    GENERIC_DIDL,
    DIDL_S,
    M3UEXT,
}
export enum WritableContainerError {
    NOT_IMPLEMENTED,
}
export enum MediaEngineError {
    NOT_FOUND,
}
export enum HTTPSeekError {
    INVALID_RANGE,
    OUT_OF_RANGE,
}
export enum DataSourceError {
    GENERAL,
    SEEK_FAILED,
}
export interface SearchableContainer_ConstructProps extends MediaContainer_ConstructProps {
    search_classes?: Gee.ArrayList
}
export class SearchableContainer {
    /* Properties of RygelServer-2.4.RygelServer.SearchableContainer */
    search_classes: Gee.ArrayList
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parent_instance: MediaObject
    priv: MediaContainerPrivate
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    simple_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    simple_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    get_search_classes(): Gee.ArrayList
    set_search_classes(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
    get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void
    get_child_count(): number
    set_child_count(value: number): void
    get_empty_child_count(): number
    set_empty_child_count(value: number): void
    get_all_child_count(): number
    get_create_mode_enabled(): boolean
    set_create_mode_enabled(value: boolean): void
    get_sort_criteria(): string
    set_sort_criteria(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.SearchableContainer */
    vfunc_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    vfunc_get_search_classes(): Gee.ArrayList
    vfunc_set_search_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: SearchableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container_updated", callback: (($obj: SearchableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: SearchableContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub_tree_updates_finished", callback: (($obj: SearchableContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub_tree_updates_finished", sub_tree_root: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-classes", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-classes", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::all-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-criteria", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SearchableContainer_ConstructProps)
    _init (config?: SearchableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TrackableContainer_ConstructProps extends MediaContainer_ConstructProps {
}
export class TrackableContainer {
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parent_instance: MediaObject
    priv: MediaContainerPrivate
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.TrackableContainer */
    clear(_callback_?: Gio.AsyncReadyCallback | null): void
    clear_finish(_res_: Gio.AsyncResult): void
    add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    add_child_finish(_res_: Gio.AsyncResult): void
    add_child_tracked(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    add_child_tracked_finish(_res_: Gio.AsyncResult): void
    remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_child_finish(_res_: Gio.AsyncResult): void
    remove_child_tracked(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_child_tracked_finish(_res_: Gio.AsyncResult): void
    get_service_reset_token(): string
    set_service_reset_token(token: string): void
    get_system_update_id(): number
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
    get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void
    get_child_count(): number
    set_child_count(value: number): void
    get_empty_child_count(): number
    set_empty_child_count(value: number): void
    get_all_child_count(): number
    get_create_mode_enabled(): boolean
    set_create_mode_enabled(value: boolean): void
    get_sort_criteria(): string
    set_sort_criteria(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.TrackableContainer */
    vfunc_add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_child_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_child_finish(_res_: Gio.AsyncResult): void
    vfunc_get_service_reset_token(): string
    vfunc_set_service_reset_token(token: string): void
    vfunc_get_system_update_id(): number
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.4.RygelServer.TrackableContainer */
    connect(sigName: "child_added", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    connect_after(sigName: "child_added", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    emit(sigName: "child_added", object: MediaObject): void
    connect(sigName: "child_removed", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    connect_after(sigName: "child_removed", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    emit(sigName: "child_removed", object: MediaObject): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: TrackableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container_updated", callback: (($obj: TrackableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: TrackableContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub_tree_updates_finished", callback: (($obj: TrackableContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub_tree_updates_finished", sub_tree_root: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::all-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-criteria", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrackableContainer_ConstructProps)
    _init (config?: TrackableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TrackableItem_ConstructProps extends MediaItem_ConstructProps {
}
export class TrackableItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    parent_instance: MediaObject
    priv: MediaItemPrivate
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.TrackableItem */
    changed(): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrackableItem_ConstructProps)
    _init (config?: TrackableItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VisualItem_ConstructProps extends MediaItem_ConstructProps {
    width?: number
    height?: number
    color_depth?: number
    thumbnails?: Gee.ArrayList
}
export class VisualItem {
    /* Properties of RygelServer-2.4.RygelServer.VisualItem */
    width: number
    height: number
    color_depth: number
    thumbnails: Gee.ArrayList
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    parent_instance: MediaObject
    priv: MediaItemPrivate
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.VisualItem */
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.VisualItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::width", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thumbnails", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VisualItem_ConstructProps)
    _init (config?: VisualItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WritableContainer_ConstructProps extends MediaContainer_ConstructProps {
    create_classes?: Gee.ArrayList
}
export class WritableContainer {
    /* Properties of RygelServer-2.4.RygelServer.WritableContainer */
    create_classes: Gee.ArrayList
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parent_instance: MediaObject
    priv: MediaContainerPrivate
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.WritableContainer */
    can_create(upnp_class: string): boolean
    add_item(item: MediaItem, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    add_item_finish(_res_: Gio.AsyncResult): void
    add_container(container: MediaContainer, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    add_container_finish(_res_: Gio.AsyncResult): void
    add_reference(object: MediaObject, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    add_reference_finish(_res_: Gio.AsyncResult): string
    remove_item(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_item_finish(_res_: Gio.AsyncResult): void
    remove_container(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_container_finish(_res_: Gio.AsyncResult): void
    get_create_classes(): Gee.ArrayList
    set_create_classes(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
    get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void
    get_child_count(): number
    set_child_count(value: number): void
    get_empty_child_count(): number
    set_empty_child_count(value: number): void
    get_all_child_count(): number
    get_create_mode_enabled(): boolean
    set_create_mode_enabled(value: boolean): void
    get_sort_criteria(): string
    set_sort_criteria(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.WritableContainer */
    vfunc_add_item(item: MediaItem, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_item_finish(_res_: Gio.AsyncResult): void
    vfunc_add_container(container: MediaContainer, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_container_finish(_res_: Gio.AsyncResult): void
    vfunc_add_reference(object: MediaObject, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_reference_finish(_res_: Gio.AsyncResult): string
    vfunc_remove_item(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_item_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_container(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_container_finish(_res_: Gio.AsyncResult): void
    vfunc_get_create_classes(): Gee.ArrayList
    vfunc_set_create_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: WritableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container_updated", callback: (($obj: WritableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: WritableContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub_tree_updates_finished", callback: (($obj: WritableContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub_tree_updates_finished", sub_tree_root: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::create-classes", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-classes", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::all-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-criteria", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WritableContainer_ConstructProps)
    _init (config?: WritableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataSource {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.DataSource */
    start(offsets?: HTTPSeek | null): void
    freeze(): void
    thaw(): void
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
    /* Virtual methods of RygelServer-2.4.RygelServer.DataSource */
    vfunc_start(offsets?: HTTPSeek | null): void
    vfunc_freeze(): void
    vfunc_thaw(): void
    vfunc_stop(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.4.RygelServer.DataSource */
    connect(sigName: "data_available", callback: (($obj: DataSource, data: Uint8Array[]) => void)): number
    connect_after(sigName: "data_available", callback: (($obj: DataSource, data: Uint8Array[]) => void)): number
    emit(sigName: "data_available", data: Uint8Array[]): void
    connect(sigName: "done", callback: (($obj: DataSource) => void)): number
    connect_after(sigName: "done", callback: (($obj: DataSource) => void)): number
    emit(sigName: "done"): void
    connect(sigName: "error", callback: (($obj: DataSource, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: DataSource, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSource_ConstructProps)
    _init (config?: DataSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UpdatableObject_ConstructProps extends MediaObject_ConstructProps {
}
export class UpdatableObject {
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_instance: GObject.Object
    priv: MediaObjectPrivate
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.UpdatableObject */
    commit(_callback_?: Gio.AsyncReadyCallback | null): void
    commit_finish(_res_: Gio.AsyncResult): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.UpdatableObject */
    vfunc_commit(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_commit_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UpdatableObject_ConstructProps)
    _init (config?: UpdatableObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioItem_ConstructProps extends MediaItem_ConstructProps {
    duration?: number
    bitrate?: number
    sample_freq?: number
    bits_per_sample?: number
    channels?: number
    album?: string
}
export class AudioItem {
    /* Properties of RygelServer-2.4.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sample_freq: number
    bits_per_sample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.AudioItem */
    parent_instance: MediaItem
    priv: AudioItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.AudioItem */
    get_duration(): number
    set_duration(value: number): void
    get_bitrate(): number
    set_bitrate(value: number): void
    get_sample_freq(): number
    set_sample_freq(value: number): void
    get_bits_per_sample(): number
    set_bits_per_sample(value: number): void
    get_channels(): number
    set_channels(value: number): void
    get_album(): string
    set_album(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::duration", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitrate", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-freq", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits-per-sample", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channels", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioItem_ConstructProps)
    _init (config?: AudioItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem
    static $gtype: GObject.Type
}
export interface ImageItem_ConstructProps extends MediaItem_ConstructProps {
    width?: number
    height?: number
    color_depth?: number
    thumbnails?: Gee.ArrayList
}
export class ImageItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Properties of RygelServer-2.4.RygelServer.VisualItem */
    width: number
    height: number
    color_depth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.ImageItem */
    parent_instance: MediaItem
    priv: ImageItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Methods of RygelServer-2.4.RygelServer.VisualItem */
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.ImageItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thumbnails", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageItem_ConstructProps)
    _init (config?: ImageItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): ImageItem
    static $gtype: GObject.Type
}
export interface MediaArtStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaArtStore {
    /* Fields of RygelServer-2.4.RygelServer.MediaArtStore */
    parent_instance: GObject.Object
    priv: MediaArtStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaArtStore */
    find_media_art(item: MusicItem, simple: boolean): Thumbnail | null
    find_media_art_any(item: MusicItem): Thumbnail | null
    get_media_art_file(type: string, item: MusicItem, simple: boolean): Gio.File | null
    add(item: MusicItem, file: Gio.File, data: Uint8Array[] | null): void
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
    connect(sigName: "notify", callback: (($obj: MediaArtStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaArtStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaArtStore_ConstructProps)
    _init (config?: MediaArtStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): MediaArtStore | null
    static $gtype: GObject.Type
}
export interface MediaObjects_ConstructProps extends Gee.ArrayList_ConstructProps {
}
export class MediaObjects {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of RygelServer-2.4.RygelServer.MediaObjects */
    parent_instance: Gee.ArrayList
    priv: MediaObjectsPrivate
    /* Fields of Gee-0.8.Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaObjects */
    sort_by_criteria(sort_criteria: string): void
    /* Methods of Gee-0.8.Gee.ArrayList */
    add_all(collection: Gee.Collection): boolean
    get_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObjects */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.ArrayList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaObjects_ConstructProps)
    _init (config?: MediaObjects_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaObjects
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): MediaObjects
    static $gtype: GObject.Type
}
export interface MusicItem_ConstructProps extends AudioItem_ConstructProps {
    track_number?: number
    album_art?: Thumbnail
}
export class MusicItem {
    /* Properties of RygelServer-2.4.RygelServer.MusicItem */
    track_number: number
    album_art: Thumbnail
    /* Properties of RygelServer-2.4.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sample_freq: number
    bits_per_sample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MusicItem */
    parent_instance: AudioItem
    priv: MusicItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MusicItem */
    lookup_album_art(): void
    get_track_number(): number
    set_track_number(value: number): void
    get_album_art(): Thumbnail
    set_album_art(value: Thumbnail): void
    /* Methods of RygelServer-2.4.RygelServer.AudioItem */
    get_duration(): number
    set_duration(value: number): void
    get_bitrate(): number
    set_bitrate(value: number): void
    get_sample_freq(): number
    set_sample_freq(value: number): void
    get_bits_per_sample(): number
    set_bits_per_sample(value: number): void
    get_channels(): number
    set_channels(value: number): void
    get_album(): string
    set_album(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::track-number", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album-art", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitrate", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-freq", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits-per-sample", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channels", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicItem_ConstructProps)
    _init (config?: MusicItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): MusicItem
    static $gtype: GObject.Type
}
export interface PhotoItem_ConstructProps extends ImageItem_ConstructProps {
}
export class PhotoItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.PhotoItem */
    parent_instance: ImageItem
    priv: PhotoItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.ImageItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PhotoItem_ConstructProps)
    _init (config?: PhotoItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): PhotoItem
    static $gtype: GObject.Type
}
export interface SimpleContainer_ConstructProps extends MediaContainer_ConstructProps {
    search_classes?: Gee.ArrayList
}
export class SimpleContainer {
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Properties of RygelServer-2.4.RygelServer.SearchableContainer */
    search_classes: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.SimpleContainer */
    parent_instance: MediaContainer
    priv: SimpleContainerPrivate
    children: MediaObjects
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.SimpleContainer */
    add_child_item(child: MediaItem): void
    get_all_children(): MediaObjects
    add_child_container(child: MediaContainer): void
    remove_child(child: MediaObject): void
    clear(): void
    is_child_id_unique(child_id: string): boolean
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
    get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void
    get_child_count(): number
    set_child_count(value: number): void
    get_empty_child_count(): number
    set_empty_child_count(value: number): void
    get_all_child_count(): number
    get_create_mode_enabled(): boolean
    set_create_mode_enabled(value: boolean): void
    get_sort_criteria(): string
    set_sort_criteria(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Methods of RygelServer-2.4.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    simple_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    simple_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    get_search_classes(): Gee.ArrayList
    set_search_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.SimpleContainer */
    vfunc_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    vfunc_get_search_classes(): Gee.ArrayList
    vfunc_set_search_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: SimpleContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container_updated", callback: (($obj: SimpleContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: SimpleContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub_tree_updates_finished", callback: (($obj: SimpleContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub_tree_updates_finished", sub_tree_root: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::all-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-criteria", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-classes", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-classes", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleContainer_ConstructProps)
    _init (config?: SimpleContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer | null, title: string): SimpleContainer
    static root(title: string): SimpleContainer
    static $gtype: GObject.Type
}
export interface VideoItem_ConstructProps extends AudioItem_ConstructProps {
    author?: string
    width?: number
    height?: number
    color_depth?: number
    thumbnails?: Gee.ArrayList
}
export class VideoItem {
    /* Properties of RygelServer-2.4.RygelServer.VideoItem */
    author: string
    /* Properties of RygelServer-2.4.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sample_freq: number
    bits_per_sample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Properties of RygelServer-2.4.RygelServer.VisualItem */
    width: number
    height: number
    color_depth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.VideoItem */
    parent_instance: AudioItem
    priv: VideoItemPrivate
    subtitles: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.VideoItem */
    get_author(): string
    set_author(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.AudioItem */
    get_duration(): number
    set_duration(value: number): void
    get_bitrate(): number
    set_bitrate(value: number): void
    get_sample_freq(): number
    set_sample_freq(value: number): void
    get_bits_per_sample(): number
    set_bits_per_sample(value: number): void
    get_channels(): number
    set_channels(value: number): void
    get_album(): string
    set_album(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Methods of RygelServer-2.4.RygelServer.VisualItem */
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.VideoItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitrate", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-freq", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits-per-sample", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channels", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thumbnails", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoItem_ConstructProps)
    _init (config?: VideoItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): VideoItem
    static $gtype: GObject.Type
}
export interface MediaContainer_ConstructProps extends MediaObject_ConstructProps {
    child_count?: number
    empty_child_count?: number
    create_mode_enabled?: boolean
    sort_criteria?: string
}
export class MediaContainer {
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parent_instance: MediaObject
    priv: MediaContainerPrivate
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
    get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void
    get_child_count(): number
    set_child_count(value: number): void
    get_empty_child_count(): number
    set_empty_child_count(value: number): void
    get_all_child_count(): number
    get_create_mode_enabled(): boolean
    set_create_mode_enabled(value: boolean): void
    get_sort_criteria(): string
    set_sort_criteria(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: MediaContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container_updated", callback: (($obj: MediaContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: MediaContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub_tree_updates_finished", callback: (($obj: MediaContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub_tree_updates_finished", sub_tree_root: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::all-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-criteria", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaContainer_ConstructProps)
    _init (config?: MediaContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaItem_ConstructProps extends MediaObject_ConstructProps {
    mime_type?: string
    dlna_profile?: string
    size?: number
    place_holder?: boolean
    description?: string
}
export class MediaItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    parent_instance: MediaObject
    priv: MediaItemPrivate
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaItem_ConstructProps)
    _init (config?: MediaItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaObject_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    ref_id?: string
    upnp_class?: string
    date?: string
    creator?: string
    modified?: number
    object_update_id?: number
    artist?: string
    genre?: string
    parent?: MediaContainer
    parent_ref?: MediaContainer
    title?: string
}
export class MediaObject {
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_instance: GObject.Object
    priv: MediaObjectPrivate
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaObject_ConstructProps)
    _init (config?: MediaObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaServerPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    root_container?: MediaContainer
    upload_profiles?: any[]
    supported_profiles?: any[]
}
export class MediaServerPlugin {
    /* Properties of RygelServer-2.4.RygelServer.MediaServerPlugin */
    readonly search_caps: string
    upload_profiles: any[]
    supported_profiles: any[]
    /* Properties of RygelCore-2.4.RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resource_infos: Gee.ArrayList
    icon_infos: Gee.ArrayList
    default_icons: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.MediaServerPlugin */
    parent_instance: RygelCore.Plugin
    priv: MediaServerPluginPrivate
    /* Fields of GUPnP-1.0.GUPnP.ResourceFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaServerPlugin */
    get_root_container(): MediaContainer
    get_search_caps(): string
    get_upload_profiles(): any[]
    set_upload_profiles(value: any[]): void
    get_supported_profiles(): any[]
    set_supported_profiles(value: any[]): void
    /* Methods of RygelCore-2.4.RygelCore.Plugin */
    add_resource(resource_info: RygelCore.ResourceInfo): void
    add_icon(icon_info: RygelCore.IconInfo): void
    apply_hacks(device: RygelCore.RootDevice, description_path: string): void
    get_capabilities(): RygelCore.PluginCapabilities
    set_capabilities(value: RygelCore.PluginCapabilities): void
    get_name(): string
    get_title(): string
    set_title(value: string): void
    get_description(): string
    get_desc_path(): string
    get_active(): boolean
    set_active(value: boolean): void
    get_resource_infos(): Gee.ArrayList
    get_icon_infos(): Gee.ArrayList
    get_default_icons(): Gee.ArrayList
    /* Methods of GUPnP-1.0.GUPnP.ResourceFactory */
    register_resource_proxy_type(upnp_type: string, type: GObject.Type): void
    register_resource_type(upnp_type: string, type: GObject.Type): void
    unregister_resource_proxy_type(upnp_type: string): boolean
    unregister_resource_type(upnp_type: string): boolean
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaServerPlugin */
    vfunc_get_search_caps(): string
    /* Virtual methods of RygelCore-2.4.RygelCore.Plugin */
    vfunc_apply_hacks(device: RygelCore.RootDevice, description_path: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-caps", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-caps", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upload-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upload-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-icons", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaServerPlugin_ConstructProps)
    _init (config?: MediaServerPlugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desc_path: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaServerPlugin
    static new(): MediaServerPlugin
    static $gtype: GObject.Type
}
export interface TranscodeManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class TranscodeManager {
    /* Fields of RygelServer-2.4.RygelServer.TranscodeManager */
    parent_instance: GObject.Object
    priv: TranscodeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.TranscodeManager */
    create_uri_for_item(item: MediaItem, thumbnail_index: number, subtitle_index: number, transcode_target?: string | null, playlist_target?: string | null): string
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, item: MediaItem): void
    get_transcoder(target: string): Transcoder
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
    /* Virtual methods of RygelServer-2.4.RygelServer.TranscodeManager */
    vfunc_create_uri_for_item(item: MediaItem, thumbnail_index: number, subtitle_index: number, transcode_target?: string | null, playlist_target?: string | null): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TranscodeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TranscodeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TranscodeManager_ConstructProps)
    _init (config?: TranscodeManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transcoder_ConstructProps extends GObject.Object_ConstructProps {
    mime_type?: string
    dlna_profile?: string
    extension?: string
}
export class Transcoder {
    /* Fields of RygelServer-2.4.RygelServer.Transcoder */
    parent_instance: GObject.Object
    priv: TranscoderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.Transcoder */
    create_source(item: MediaItem, src: DataSource): DataSource
    add_resource(didl_item: GUPnPAV.DIDLLiteItem, item: MediaItem, manager: TranscodeManager): GUPnPAV.DIDLLiteResource | null
    can_handle(target: string): boolean
    get_distance(item: MediaItem): number
    mime_type_is_a(mime_type1: string, mime_type2: string): boolean
    get_mime_type(): string
    get_dlna_profile(): string
    get_extension(): string
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
    /* Virtual methods of RygelServer-2.4.RygelServer.Transcoder */
    vfunc_create_source(item: MediaItem, src: DataSource): DataSource
    vfunc_add_resource(didl_item: GUPnPAV.DIDLLiteItem, item: MediaItem, manager: TranscodeManager): GUPnPAV.DIDLLiteResource | null
    vfunc_get_distance(item: MediaItem): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transcoder_ConstructProps)
    _init (config?: Transcoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaServer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    root_container?: MediaContainer
}
export class MediaServer {
    /* Properties of RygelCore-2.4.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of RygelServer-2.4.RygelServer.MediaServer */
    parent_instance: RygelCore.MediaDevice
    priv: MediaServerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.MediaDevice */
    add_interface(iface: string): void
    remove_interface(iface: string): void
    get_interfaces(): string[]
    get_plugin(): RygelCore.Plugin
    set_plugin(value: RygelCore.Plugin): void
    get_title(): string
    get_capabilities(): RygelCore.PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaServer_ConstructProps)
    _init (config?: MediaServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, root_container: MediaContainer, capabilities: RygelCore.PluginCapabilities): MediaServer
    static $gtype: GObject.Type
}
export interface MediaEngine_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaEngine {
    /* Fields of RygelServer-2.4.RygelServer.MediaEngine */
    parent_instance: GObject.Object
    priv: MediaEnginePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaEngine */
    get_dlna_profiles(): any[]
    get_transcoders(): Transcoder[] | null
    create_data_source(uri: string): DataSource | null
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaEngine */
    vfunc_get_dlna_profiles(): any[]
    vfunc_get_transcoders(): Transcoder[] | null
    vfunc_create_data_source(uri: string): DataSource | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaEngine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaEngine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaEngine_ConstructProps)
    _init (config?: MediaEngine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static init(): void
    static get_default(): MediaEngine
    static $gtype: GObject.Type
}
export interface HTTPSeek_ConstructProps extends GObject.Object_ConstructProps {
    seek_type?: HTTPSeekType
    msg?: Soup.Message
    start?: number
    stop?: number
    step?: number
    length?: number
    total_length?: number
}
export class HTTPSeek {
    /* Properties of RygelServer-2.4.RygelServer.HTTPSeek */
    seek_type: HTTPSeekType
    msg: Soup.Message
    start: number
    stop: number
    step: number
    length: number
    total_length: number
    /* Fields of RygelServer-2.4.RygelServer.HTTPSeek */
    parent_instance: GObject.Object
    priv: HTTPSeekPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.HTTPSeek */
    add_response_headers(): void
    get_seek_type(): HTTPSeekType
    set_seek_type(value: HTTPSeekType): void
    get_msg(): Soup.Message
    get_start(): number
    get_stop(): number
    get_step(): number
    get_length(): number
    get_total_length(): number
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
    /* Virtual methods of RygelServer-2.4.RygelServer.HTTPSeek */
    vfunc_add_response_headers(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::seek-type", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-type", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::msg", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::msg", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::step", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPSeek_ConstructProps)
    _init (config?: HTTPSeek_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaylistItem_ConstructProps extends MediaItem_ConstructProps {
}
export class PlaylistItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
    id: string
    ref_id: string
    upnp_class: string
    date: string
    creator: string
    modified: number
    object_update_id: number
    artist: string
    genre: string
    parent: MediaContainer
    parent_ref: MediaContainer
    title: string
    readonly ocm_flags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.4.RygelServer.PlaylistItem */
    parent_instance: MediaItem
    priv: PlaylistItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygel_media_item_address_regex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    create_stream_source(host_ip?: string | null): DataSource | null
    is_live_stream(): boolean
    streamable(): boolean
    get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags
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
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaItem */
    vfunc_create_stream_source(host_ip?: string | null): DataSource | null
    vfunc_streamable(): boolean
    vfunc_get_protocol_info(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    vfunc_add_resources(didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean): void
    /* Virtual methods of RygelServer-2.4.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaylistItem_ConstructProps)
    _init (config?: PlaylistItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): PlaylistItem
    static $gtype: GObject.Type
}
export interface ContentDirectory_ConstructProps extends GUPnP.Service_ConstructProps {
}
export class ContentDirectory {
    /* Fields of RygelServer-2.4.RygelServer.ContentDirectory */
    parent_instance: GUPnP.Service
    priv: ContentDirectoryPrivate
    feature_list: string
    root_container: MediaContainer
    system_update_id: number
    /* Fields of GUPnP-1.0.GUPnP.Service */
    parent: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.Service */
    freeze_notify(): void
    notify_value(variable: string, value: any): void
    signals_autoconnect(user_data?: object | null): void
    thaw_notify(): void
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    get_context(): GUPnP.Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection(): GUPnP.ServiceIntrospection
    get_introspection_async(callback: GUPnP.ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
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
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GUPnP-1.0.GUPnP.Service */
    vfunc_action_invoked(action: GUPnP.ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP-1.0.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: ContentDirectory, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: ContentDirectory, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: ContentDirectory, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: ContentDirectory, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: ContentDirectory, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: ContentDirectory, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentDirectory_ConstructProps)
    _init (config?: ContentDirectory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentDirectory
    static $gtype: GObject.Type
}
export interface HTTPServer_ConstructProps extends TranscodeManager_ConstructProps {
    path_root?: string
}
export class HTTPServer {
    /* Properties of RygelServer-2.4.RygelServer.HTTPServer */
    path_root: string
    /* Fields of RygelServer-2.4.RygelServer.HTTPServer */
    parent_instance: TranscodeManager
    priv: HTTPServerPrivate
    root_container: MediaContainer
    context: GUPnP.Context
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.HTTPServer */
    need_proxy(uri: string): boolean
    get_path_root(): string
    /* Methods of RygelServer-2.4.RygelServer.TranscodeManager */
    create_uri_for_item(item: MediaItem, thumbnail_index: number, subtitle_index: number, transcode_target?: string | null, playlist_target?: string | null): string
    add_resources(didl_item: GUPnPAV.DIDLLiteItem, item: MediaItem): void
    get_transcoder(target: string): Transcoder
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
    /* Virtual methods of RygelServer-2.4.RygelServer.TranscodeManager */
    vfunc_create_uri_for_item(item: MediaItem, thumbnail_index: number, subtitle_index: number, transcode_target?: string | null, playlist_target?: string | null): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPServer_ConstructProps)
    _init (config?: HTTPServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content_dir: ContentDirectory, name: string): HTTPServer
    static $gtype: GObject.Type
}
export interface Serializer_ConstructProps extends GObject.Object_ConstructProps {
    serializer_type?: SerializerType
}
export class Serializer {
    /* Fields of RygelServer-2.4.RygelServer.Serializer */
    parent_instance: GObject.Object
    priv: SerializerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.Serializer */
    add_item(): GUPnPAV.DIDLLiteItem | null
    add_container(): GUPnPAV.DIDLLiteContainer | null
    filter(filter_string: string): void
    get_string(): string
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
    connect(sigName: "notify", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Serializer_ConstructProps)
    _init (config?: Serializer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SerializerType): Serializer
    static $gtype: GObject.Type
}
export abstract class AudioItemClass {
    /* Fields of RygelServer-2.4.RygelServer.AudioItemClass */
    parent_class: MediaItemClass
    static name: string
}
export class AudioItemPrivate {
    static name: string
}
export abstract class ImageItemClass {
    /* Fields of RygelServer-2.4.RygelServer.ImageItemClass */
    parent_class: MediaItemClass
    static name: string
}
export class ImageItemPrivate {
    static name: string
}
export class LogicalExpression {
    static name: string
    static new(): LogicalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LogicalExpression
}
export abstract class MediaArtStoreClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaArtStoreClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MediaArtStorePrivate {
    static name: string
}
export abstract class MediaObjectsClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaObjectsClass */
    parent_class: Gee.ArrayListClass
    static name: string
}
export class MediaObjectsPrivate {
    static name: string
}
export abstract class MusicItemClass {
    /* Fields of RygelServer-2.4.RygelServer.MusicItemClass */
    parent_class: AudioItemClass
    static name: string
}
export class MusicItemPrivate {
    static name: string
}
export abstract class PhotoItemClass {
    /* Fields of RygelServer-2.4.RygelServer.PhotoItemClass */
    parent_class: ImageItemClass
    static name: string
}
export class PhotoItemPrivate {
    static name: string
}
export class RelationalExpression {
    /* Methods of RygelServer-2.4.RygelServer.RelationalExpression */
    compare_string(str?: string | null): boolean
    compare_int(integer: number): boolean
    compare_uint(integer: number): boolean
    static name: string
    static new(): RelationalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RelationalExpression
}
export abstract class SimpleContainerClass {
    /* Fields of RygelServer-2.4.RygelServer.SimpleContainerClass */
    parent_class: MediaContainerClass
    static name: string
}
export class SimpleContainerPrivate {
    static name: string
}
export class Subtitle {
    /* Fields of RygelServer-2.4.RygelServer.Subtitle */
    uri: string
    mime_type: string
    caption_type: string
    size: number
    static name: string
    static new(mime_type: string, caption_type: string): Subtitle
    constructor(mime_type: string, caption_type: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string, caption_type: string): Subtitle
}
export class Thumbnail {
    /* Fields of RygelServer-2.4.RygelServer.Thumbnail */
    dlna_profile: string
    static name: string
    static new(mime_type: string, dlna_profile: string, file_extension: string): Thumbnail
    constructor(mime_type: string, dlna_profile: string, file_extension: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string, dlna_profile: string, file_extension: string): Thumbnail
}
export abstract class VideoItemClass {
    /* Fields of RygelServer-2.4.RygelServer.VideoItemClass */
    parent_class: AudioItemClass
    static name: string
}
export class VideoItemPrivate {
    static name: string
}
export abstract class MediaContainerClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaContainerClass */
    parent_class: MediaObjectClass
    get_children: (self: MediaContainer, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    get_children_finish: (self: MediaContainer, _res_: Gio.AsyncResult) => MediaObjects | null
    find_object: (self: MediaContainer, id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    find_object_finish: (self: MediaContainer, _res_: Gio.AsyncResult) => MediaObject | null
    static name: string
}
export class MediaContainerPrivate {
    static name: string
}
export abstract class MediaItemClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaItemClass */
    parent_class: MediaObjectClass
    create_stream_source: (self: MediaItem, host_ip?: string | null) => DataSource | null
    streamable: (self: MediaItem) => boolean
    add_proxy_resources: (self: MediaItem, server: HTTPServer, didl_item: GUPnPAV.DIDLLiteItem) => void
    get_protocol_info: (self: MediaItem, uri: string | null, protocol: string) => GUPnPAV.ProtocolInfo
    add_resources: (self: MediaItem, didl_item: GUPnPAV.DIDLLiteItem, allow_internal: boolean) => void
    static name: string
}
export class MediaItemPrivate {
    static name: string
}
export abstract class MediaObjectClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaObjectClass */
    parent_class: GObject.ObjectClass
    add_uri: (self: MediaObject, uri: string) => void
    serialize: (self: MediaObject, serializer: Serializer, http_server: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    apply_didl_lite: (self: MediaObject, didl_object: GUPnPAV.DIDLLiteObject) => void
    compare_by_property: (self: MediaObject, media_object: MediaObject, property: string) => number
    add_resource: (self: MediaObject, object: GUPnPAV.DIDLLiteObject, uri: string | null, protocol: string, import_uri?: string | null) => GUPnPAV.DIDLLiteResource
    static name: string
}
export class MediaObjectPrivate {
    static name: string
}
export abstract class MediaServerPluginClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaServerPluginClass */
    parent_class: RygelCore.PluginClass
    static name: string
}
export class MediaServerPluginPrivate {
    static name: string
}
export class SearchExpression {
    /* Fields of RygelServer-2.4.RygelServer.SearchExpression */
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.4.RygelServer.SearchExpression */
    satisfied_by(media_object: MediaObject): boolean
    to_string(): string
    /* Virtual methods of RygelServer-2.4.RygelServer.SearchExpression */
    vfunc_satisfied_by(media_object: MediaObject): boolean
    vfunc_to_string(): string
    static name: string
}
export abstract class TranscodeManagerClass {
    /* Fields of RygelServer-2.4.RygelServer.TranscodeManagerClass */
    parent_class: GObject.ObjectClass
    create_uri_for_item: (self: TranscodeManager, item: MediaItem, thumbnail_index: number, subtitle_index: number, transcode_target?: string | null, playlist_target?: string | null) => string
    get_protocol: (self: TranscodeManager) => string
    get_protocol_info: (self: TranscodeManager) => Gee.ArrayList
    static name: string
}
export class TranscodeManagerPrivate {
    static name: string
}
export abstract class TranscoderClass {
    /* Fields of RygelServer-2.4.RygelServer.TranscoderClass */
    parent_class: GObject.ObjectClass
    create_source: (self: Transcoder, item: MediaItem, src: DataSource) => DataSource
    add_resource: (self: Transcoder, didl_item: GUPnPAV.DIDLLiteItem, item: MediaItem, manager: TranscodeManager) => GUPnPAV.DIDLLiteResource | null
    get_distance: (self: Transcoder, item: MediaItem) => number
    static name: string
}
export class TranscoderPrivate {
    static name: string
}
export abstract class MediaServerClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaServerClass */
    parent_class: RygelCore.MediaDeviceClass
    static name: string
}
export class MediaServerPrivate {
    static name: string
}
export abstract class MediaEngineClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaEngineClass */
    parent_class: GObject.ObjectClass
    get_dlna_profiles: (self: MediaEngine) => any[]
    get_transcoders: (self: MediaEngine) => Transcoder[] | null
    create_data_source: (self: MediaEngine, uri: string) => DataSource | null
    static name: string
}
export class MediaEnginePrivate {
    static name: string
}
export abstract class HTTPSeekClass {
    /* Fields of RygelServer-2.4.RygelServer.HTTPSeekClass */
    parent_class: GObject.ObjectClass
    add_response_headers: (self: HTTPSeek) => void
    static name: string
}
export class HTTPSeekPrivate {
    static name: string
}
export abstract class PlaylistItemClass {
    /* Fields of RygelServer-2.4.RygelServer.PlaylistItemClass */
    parent_class: MediaItemClass
    static name: string
}
export class PlaylistItemPrivate {
    static name: string
}
export abstract class ContentDirectoryClass {
    /* Fields of RygelServer-2.4.RygelServer.ContentDirectoryClass */
    parent_class: GUPnP.ServiceClass
    static name: string
}
export class ContentDirectoryPrivate {
    static name: string
}
export abstract class HTTPServerClass {
    /* Fields of RygelServer-2.4.RygelServer.HTTPServerClass */
    parent_class: TranscodeManagerClass
    static name: string
}
export class HTTPServerPrivate {
    static name: string
}
export abstract class SerializerClass {
    /* Fields of RygelServer-2.4.RygelServer.SerializerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SerializerPrivate {
    static name: string
}
export abstract class SearchableContainerIface {
    /* Fields of RygelServer-2.4.RygelServer.SearchableContainerIface */
    parent_iface: GObject.TypeInterface
    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    search_finish: (self: SearchableContainer, _res_: Gio.AsyncResult) => [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    get_search_classes: (self: SearchableContainer) => Gee.ArrayList
    set_search_classes: (self: SearchableContainer, value: Gee.ArrayList) => void
    static name: string
}
export abstract class TrackableContainerIface {
    /* Fields of RygelServer-2.4.RygelServer.TrackableContainerIface */
    parent_iface: GObject.TypeInterface
    add_child: (self: TrackableContainer, object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_child_finish: (self: TrackableContainer, _res_: Gio.AsyncResult) => void
    remove_child: (self: TrackableContainer, object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_child_finish: (self: TrackableContainer, _res_: Gio.AsyncResult) => void
    get_service_reset_token: (self: TrackableContainer) => string
    set_service_reset_token: (self: TrackableContainer, token: string) => void
    get_system_update_id: (self: TrackableContainer) => number
    static name: string
}
export abstract class TrackableItemIface {
    /* Fields of RygelServer-2.4.RygelServer.TrackableItemIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class VisualItemIface {
    /* Fields of RygelServer-2.4.RygelServer.VisualItemIface */
    parent_iface: GObject.TypeInterface
    get_width: (self: VisualItem) => number
    set_width: (self: VisualItem, value: number) => void
    get_height: (self: VisualItem) => number
    set_height: (self: VisualItem, value: number) => void
    get_color_depth: (self: VisualItem) => number
    set_color_depth: (self: VisualItem, value: number) => void
    get_thumbnails: (self: VisualItem) => Gee.ArrayList
    set_thumbnails: (self: VisualItem, value: Gee.ArrayList) => void
    static name: string
}
export abstract class WritableContainerIface {
    /* Fields of RygelServer-2.4.RygelServer.WritableContainerIface */
    parent_iface: GObject.TypeInterface
    add_item: (self: WritableContainer, item: MediaItem, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_item_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    add_container: (self: WritableContainer, container: MediaContainer, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_container_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    add_reference: (self: WritableContainer, object: MediaObject, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_reference_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => string
    remove_item: (self: WritableContainer, id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_item_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    remove_container: (self: WritableContainer, id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_container_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    get_create_classes: (self: WritableContainer) => Gee.ArrayList
    set_create_classes: (self: WritableContainer, value: Gee.ArrayList) => void
    static name: string
}
export abstract class DataSourceIface {
    /* Fields of RygelServer-2.4.RygelServer.DataSourceIface */
    parent_iface: GObject.TypeInterface
    start: (self: DataSource, offsets?: HTTPSeek | null) => void
    freeze: (self: DataSource) => void
    thaw: (self: DataSource) => void
    stop: (self: DataSource) => void
    static name: string
}
export abstract class UpdatableObjectIface {
    /* Fields of RygelServer-2.4.RygelServer.UpdatableObjectIface */
    parent_iface: GObject.TypeInterface
    commit: (self: UpdatableObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    commit_finish: (self: UpdatableObject, _res_: Gio.AsyncResult) => void
    static name: string
}