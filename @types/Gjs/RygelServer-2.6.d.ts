/**
 * RygelServer-2.6
 */

import type * as Gjs from './Gjs';
import type * as RygelCore from './RygelCore-2.6';
import type * as GLib from './GLib-2.0';
import type * as Gee from './Gee-0.8';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GUPnP from './GUPnP-1.2';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as GSSDP from './GSSDP-1.2';
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
export enum HTTPSeekRequestError {
    INVALID_RANGE,
    BAD_REQUEST,
    OUT_OF_RANGE,
}
export enum DataSourceError {
    GENERAL,
    SEEK_FAILED,
    PLAYSPEED_FAILED,
}
export enum HTTPRequestError {
    UNACCEPTABLE,
    BAD_REQUEST,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
}
export enum PlaySpeedError {
    INVALID_SPEED_FORMAT,
    SPEED_NOT_PRESENT,
}
export interface SearchableContainer_ConstructProps extends MediaContainer_ConstructProps {
    search_classes?: Gee.ArrayList
}
export class SearchableContainer {
    /* Properties of RygelServer-2.6.RygelServer.SearchableContainer */
    search_classes: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    simple_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    simple_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    get_search_classes(): Gee.ArrayList
    set_search_classes(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.SearchableContainer */
    vfunc_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    vfunc_get_search_classes(): Gee.ArrayList
    vfunc_set_search_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: SearchableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container-updated", callback: (($obj: SearchableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: SearchableContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub-tree-updates-finished", callback: (($obj: SearchableContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub-tree-updates-finished", sub_tree_root: MediaObject): void
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
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.TrackableContainer */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.TrackableContainer */
    vfunc_add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_child_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_child_finish(_res_: Gio.AsyncResult): void
    vfunc_get_service_reset_token(): string
    vfunc_set_service_reset_token(token: string): void
    vfunc_get_system_update_id(): number
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.TrackableContainer */
    connect(sigName: "child-added", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    emit(sigName: "child-added", object: MediaObject): void
    connect(sigName: "child-removed", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    emit(sigName: "child-removed", object: MediaObject): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: TrackableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container-updated", callback: (($obj: TrackableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: TrackableContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub-tree-updates-finished", callback: (($obj: TrackableContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub-tree-updates-finished", sub_tree_root: MediaObject): void
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
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.TrackableItem */
    changed(): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
export interface VisualItem_ConstructProps extends MediaFileItem_ConstructProps {
    width?: number
    height?: number
    color_depth?: number
    thumbnails?: Gee.ArrayList
}
export class VisualItem {
    /* Properties of RygelServer-2.6.RygelServer.VisualItem */
    width: number
    height: number
    color_depth: number
    thumbnails: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.VisualItem */
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.VisualItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Properties of RygelServer-2.6.RygelServer.WritableContainer */
    create_classes: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.WritableContainer */
    can_create(upnp_class: string): boolean
    add_item(item: MediaFileItem, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
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
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.WritableContainer */
    vfunc_add_item(item: MediaFileItem, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
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
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: WritableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container-updated", callback: (($obj: WritableContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: WritableContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub-tree-updates-finished", callback: (($obj: WritableContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub-tree-updates-finished", sub_tree_root: MediaObject): void
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
    /* Methods of RygelServer-2.6.RygelServer.DataSource */
    preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null
    start(): void
    freeze(): void
    thaw(): void
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
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.DataSource */
    vfunc_preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null
    vfunc_start(): void
    vfunc_freeze(): void
    vfunc_thaw(): void
    vfunc_stop(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.DataSource */
    connect(sigName: "data-available", callback: (($obj: DataSource, data: Uint8Array[]) => void)): number
    connect_after(sigName: "data-available", callback: (($obj: DataSource, data: Uint8Array[]) => void)): number
    emit(sigName: "data-available", data: Uint8Array[]): void
    connect(sigName: "done", callback: (($obj: DataSource) => void)): number
    connect_after(sigName: "done", callback: (($obj: DataSource) => void)): number
    emit(sigName: "done"): void
    connect(sigName: "error", callback: (($obj: DataSource, _error_: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: DataSource, _error_: GLib.Error) => void)): number
    emit(sigName: "error", _error_: GLib.Error): void
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
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.UpdatableObject */
    commit(_callback_?: Gio.AsyncReadyCallback | null): void
    commit_finish(_res_: Gio.AsyncResult): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.UpdatableObject */
    vfunc_commit(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_commit_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
export interface AudioItem_ConstructProps extends MediaFileItem_ConstructProps {
    duration?: number
    bitrate?: number
    sample_freq?: number
    bits_per_sample?: number
    channels?: number
    album?: string
}
export class AudioItem {
    /* Properties of RygelServer-2.6.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sample_freq: number
    bits_per_sample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.AudioItem */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
export interface ImageItem_ConstructProps extends MediaFileItem_ConstructProps {
    width?: number
    height?: number
    color_depth?: number
    thumbnails?: Gee.ArrayList
}
export class ImageItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Properties of RygelServer-2.6.RygelServer.VisualItem */
    width: number
    height: number
    color_depth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of RygelServer-2.6.RygelServer.VisualItem */
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.ImageItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
export class LogicalExpression {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpression */
    ref_count: number
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.6.RygelServer.SearchExpression */
    satisfied_by(media_object: MediaObject): boolean
    to_string(): string
    /* Virtual methods of RygelServer-2.6.RygelServer.SearchExpression */
    vfunc_satisfied_by(media_object: MediaObject): boolean
    vfunc_to_string(): string
    static name: string
    static new(): LogicalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LogicalExpression
}
export interface MediaArtStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaArtStore {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaArtStore */
    lookup_media_art(item: MusicItem): Thumbnail | null
    add(item: MusicItem, file: Gio.File, data: Uint8Array[], mime: string): void
    search_media_art_for_file(item: MusicItem, file: Gio.File): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: Gee.List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    readonly read_only_view: Gee.Collection
    /* Fields of Gee-0.8.Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaObjects */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObjects */
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
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of RygelServer-2.6.RygelServer.MusicItem */
    track_number: number
    album_art: Thumbnail
    /* Properties of RygelServer-2.6.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sample_freq: number
    bits_per_sample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MusicItem */
    lookup_album_art(): void
    get_track_number(): number
    set_track_number(value: number): void
    get_album_art(): Thumbnail
    set_album_art(value: Thumbnail): void
    /* Methods of RygelServer-2.6.RygelServer.AudioItem */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.ImageItem */
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
export class RelationalExpression {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpression */
    ref_count: number
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.6.RygelServer.RelationalExpression */
    compare_string(str?: string | null): boolean
    compare_int(integer: number): boolean
    compare_uint(integer: number): boolean
    /* Methods of RygelServer-2.6.RygelServer.SearchExpression */
    satisfied_by(media_object: MediaObject): boolean
    to_string(): string
    /* Virtual methods of RygelServer-2.6.RygelServer.SearchExpression */
    vfunc_satisfied_by(media_object: MediaObject): boolean
    vfunc_to_string(): string
    static name: string
    static new(): RelationalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RelationalExpression
}
export interface SimpleContainer_ConstructProps extends MediaContainer_ConstructProps {
    search_classes?: Gee.ArrayList
}
export class SimpleContainer {
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Properties of RygelServer-2.6.RygelServer.SearchableContainer */
    search_classes: Gee.ArrayList
    /* Fields of RygelServer-2.6.RygelServer.SimpleContainer */
    children: MediaObjects
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.SimpleContainer */
    add_child_item(child: MediaItem): void
    get_all_children(): MediaObjects
    add_child_container(child: MediaContainer): void
    remove_child(child: MediaObject): void
    clear(): void
    is_child_id_unique(child_id: string): boolean
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of RygelServer-2.6.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    simple_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    simple_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    get_search_classes(): Gee.ArrayList
    set_search_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.SimpleContainer */
    vfunc_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    vfunc_get_search_classes(): Gee.ArrayList
    vfunc_set_search_classes(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: SimpleContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container-updated", callback: (($obj: SimpleContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: SimpleContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub-tree-updates-finished", callback: (($obj: SimpleContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub-tree-updates-finished", sub_tree_root: MediaObject): void
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
export class Subtitle {
    /* Fields of RygelServer-2.6.RygelServer.Subtitle */
    ref_count: number
    uri: string
    mime_type: string
    caption_type: string
    file_extension: string
    size: number
    /* Methods of RygelServer-2.6.RygelServer.Subtitle */
    get_resource(protocol: string, index: number): MediaResource
    /* Virtual methods of RygelServer-2.6.RygelServer.Subtitle */
    vfunc_get_resource(protocol: string, index: number): MediaResource
    static name: string
    static new(mime_type: string, caption_type: string, file_extension: string): Subtitle
    constructor(mime_type: string, caption_type: string, file_extension: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string, caption_type: string, file_extension: string): Subtitle
}
export class Thumbnail {
    /* Fields of RygelServer-2.6.RygelServer.Thumbnail */
    dlna_profile: string
    /* Fields of RygelCore-2.6.RygelCore.IconInfo */
    ref_count: number
    mime_type: string
    uri: string
    file_extension: string
    size: number
    width: number
    height: number
    depth: number
    /* Methods of RygelServer-2.6.RygelServer.Thumbnail */
    get_resource(protocol: string, index: number): MediaResource
    /* Virtual methods of RygelServer-2.6.RygelServer.Thumbnail */
    vfunc_get_resource(protocol: string, index: number): MediaResource
    static name: string
    static new(mime_type: string, dlna_profile: string, file_extension: string): Thumbnail
    constructor(mime_type: string, dlna_profile: string, file_extension: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string, dlna_profile: string, file_extension: string): Thumbnail
    static new(mime_type: string, file_extension: string): Thumbnail
}
export interface VideoItem_ConstructProps extends AudioItem_ConstructProps {
    author?: string
    subtitles?: Gee.ArrayList
    width?: number
    height?: number
    color_depth?: number
    thumbnails?: Gee.ArrayList
}
export class VideoItem {
    /* Properties of RygelServer-2.6.RygelServer.VideoItem */
    author: string
    subtitles: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sample_freq: number
    bits_per_sample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Properties of RygelServer-2.6.RygelServer.VisualItem */
    width: number
    height: number
    color_depth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.VideoItem */
    add_subtitle_resources(http_server: HTTPServer): void
    get_author(): string
    set_author(value: string): void
    get_subtitles(): Gee.ArrayList
    set_subtitles(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.AudioItem */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of RygelServer-2.6.RygelServer.VisualItem */
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.VideoItem */
    vfunc_add_subtitle_resources(http_server: HTTPServer): void
    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitles", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitles", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    child_count: number
    empty_child_count: number
    readonly all_child_count: number
    create_mode_enabled: boolean
    sort_criteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    update_id: number
    storage_used: number
    total_deleted_child_count: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaContainer */
    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: MediaContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    connect_after(sigName: "container-updated", callback: (($obj: MediaContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean) => void)): number
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: MediaContainer, sub_tree_root: MediaObject) => void)): number
    connect_after(sigName: "sub-tree-updates-finished", callback: (($obj: MediaContainer, sub_tree_root: MediaObject) => void)): number
    emit(sigName: "sub-tree-updates-finished", sub_tree_root: MediaObject): void
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
    /* Static methods and pseudo-constructors */
    static equal_func(a: MediaContainer, b: MediaContainer): boolean
    static $gtype: GObject.Type
}
export interface MediaItem_ConstructProps extends MediaObject_ConstructProps {
    description?: string
}
export class MediaItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
export interface MediaFileItem_ConstructProps extends MediaItem_ConstructProps {
    mime_type?: string
    dlna_profile?: string
    size?: number
    place_holder?: boolean
}
export class MediaFileItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-holder", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaFileItem_ConstructProps)
    _init (config?: MediaFileItem_ConstructProps): void
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
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static apply_replacements(replacement_pairs: GLib.HashTable, source_string?: string | null): string | null
    static $gtype: GObject.Type
}
export interface MediaResource_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
    import_uri?: string
    extension?: string
    size?: number
    cleartext_size?: number
    duration?: number
    bitrate?: number
    bits_per_sample?: number
    color_depth?: number
    width?: number
    height?: number
    audio_channels?: number
    sample_freq?: number
    protocol?: string
    mime_type?: string
    dlna_profile?: string
    network?: string
    dlna_conversion?: GUPnPAV.DLNAConversion
    dlna_flags?: GUPnPAV.DLNAFlags
    dlna_operation?: GUPnPAV.DLNAOperation
}
export class MediaResource {
    /* Properties of RygelServer-2.6.RygelServer.MediaResource */
    uri: string
    import_uri: string
    extension: string
    size: number
    cleartext_size: number
    duration: number
    bitrate: number
    bits_per_sample: number
    color_depth: number
    width: number
    height: number
    audio_channels: number
    sample_freq: number
    protocol: string
    mime_type: string
    dlna_profile: string
    network: string
    dlna_conversion: GUPnPAV.DLNAConversion
    dlna_flags: GUPnPAV.DLNAFlags
    dlna_operation: GUPnPAV.DLNAOperation
    /* Fields of RygelServer-2.6.RygelServer.MediaResource */
    play_speeds: string[]
    play_speeds_length1: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaResource */
    dup(): MediaResource
    get_name(): string
    serialize(didl_resource: GUPnPAV.DIDLLiteResource, replacements?: GLib.HashTable | null): GUPnPAV.DIDLLiteResource
    set_protocol_info(pi: GUPnPAV.ProtocolInfo): void
    get_protocol_info(replacements?: GLib.HashTable | null): GUPnPAV.ProtocolInfo
    supports_arbitrary_byte_seek(): boolean
    supports_arbitrary_time_seek(): boolean
    supports_limited_byte_seek(): boolean
    supports_limited_time_seek(): boolean
    supports_limited_cleartext_byte_seek(): boolean
    supports_full_cleartext_byte_seek(): boolean
    is_link_protection_enabled(): boolean
    is_dlna_content(): boolean
    get_default_transfer_mode(): string
    supports_transfer_mode(transfer_mode: string): boolean
    is_streamable(): boolean
    is_cleartext_range_support_enabled(): boolean
    supports_playspeed(): boolean
    is_dlna_protocol_flag_set(flags: number): boolean
    is_dlna_operation_mode_set(flags: number): boolean
    to_string(): string
    get_uri(): string
    set_uri(value: string): void
    get_import_uri(): string
    set_import_uri(value: string): void
    get_extension(): string
    set_extension(value: string): void
    get_size(): number
    set_size(value: number): void
    get_cleartext_size(): number
    set_cleartext_size(value: number): void
    get_duration(): number
    set_duration(value: number): void
    get_bitrate(): number
    set_bitrate(value: number): void
    get_bits_per_sample(): number
    set_bits_per_sample(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_audio_channels(): number
    set_audio_channels(value: number): void
    get_sample_freq(): number
    set_sample_freq(value: number): void
    get_protocol(): string
    set_protocol(value: string): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_network(): string
    set_network(value: string): void
    get_dlna_conversion(): GUPnPAV.DLNAConversion
    set_dlna_conversion(value: GUPnPAV.DLNAConversion): void
    get_dlna_flags(): GUPnPAV.DLNAFlags
    set_dlna_flags(value: GUPnPAV.DLNAFlags): void
    get_dlna_operation(): GUPnPAV.DLNAOperation
    set_dlna_operation(value: GUPnPAV.DLNAOperation): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::import-uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::import-uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cleartext-size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cleartext-size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitrate", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits-per-sample", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-channels", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-channels", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-freq", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-conversion", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-conversion", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-flags", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-flags", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-operation", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-operation", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaResource_ConstructProps)
    _init (config?: MediaResource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): MediaResource
    static from_resource(name: string, that: MediaResource): MediaResource
    static from_didl_lite_resource(name: string, didl_resource: GUPnPAV.DIDLLiteResource): MediaResource
    static $gtype: GObject.Type
}
export interface MediaServerPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    root_container?: MediaContainer
    upload_profiles?: RygelCore.DLNAProfile[]
    supported_profiles?: RygelCore.DLNAProfile[]
}
export class MediaServerPlugin {
    /* Properties of RygelServer-2.6.RygelServer.MediaServerPlugin */
    readonly search_caps: string
    upload_profiles: RygelCore.DLNAProfile[]
    supported_profiles: RygelCore.DLNAProfile[]
    /* Properties of RygelCore-2.6.RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resource_infos: Gee.ArrayList
    icon_infos: Gee.ArrayList
    default_icons: Gee.ArrayList
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactory */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaServerPlugin */
    get_root_container(): MediaContainer
    get_search_caps(): string
    get_upload_profiles(): RygelCore.DLNAProfile[]
    set_upload_profiles(value: RygelCore.DLNAProfile[]): void
    get_supported_profiles(): RygelCore.DLNAProfile[]
    set_supported_profiles(value: RygelCore.DLNAProfile[]): void
    /* Methods of RygelCore-2.6.RygelCore.Plugin */
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
    /* Methods of GUPnP-1.2.GUPnP.ResourceFactory */
    register_resource_proxy_type(upnp_type: string, type: GObject.Type): void
    register_resource_type(upnp_type: string, type: GObject.Type): void
    unregister_resource_proxy_type(upnp_type: string): boolean
    unregister_resource_type(upnp_type: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaServerPlugin */
    vfunc_get_search_caps(): string
    /* Virtual methods of RygelCore-2.6.RygelCore.Plugin */
    vfunc_apply_hacks(device: RygelCore.RootDevice, description_path: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
export class SearchExpression {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpression */
    ref_count: number
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.6.RygelServer.SearchExpression */
    satisfied_by(media_object: MediaObject): boolean
    to_string(): string
    /* Virtual methods of RygelServer-2.6.RygelServer.SearchExpression */
    vfunc_satisfied_by(media_object: MediaObject): boolean
    vfunc_to_string(): string
    static name: string
}
export interface MediaServer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    root_container?: MediaContainer
}
export class MediaServer {
    /* Properties of RygelCore-2.6.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.MediaDevice */
    add_interface(iface: string): void
    remove_interface(iface: string): void
    get_interfaces(): string[]
    get_plugin(): RygelCore.Plugin
    set_plugin(value: RygelCore.Plugin): void
    get_title(): string
    get_capabilities(): RygelCore.PluginCapabilities
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaEngine */
    get_dlna_profiles(): RygelCore.DLNAProfile[]
    get_resources_for_item(item: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null
    create_data_source_for_resource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    create_data_source_for_uri(uri: string): DataSource | null
    get_internal_protocol_schemes(): string[]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaEngine */
    vfunc_get_dlna_profiles(): RygelCore.DLNAProfile[]
    vfunc_get_resources_for_item(item: MediaObject, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null
    vfunc_create_data_source_for_resource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    vfunc_create_data_source_for_uri(uri: string): DataSource | null
    vfunc_get_internal_protocol_schemes(): string[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of RygelServer-2.6.RygelServer.MediaEngine */
    connect(sigName: "resource-changed", callback: (($obj: MediaEngine, media_object_uri: string) => void)): number
    connect_after(sigName: "resource-changed", callback: (($obj: MediaEngine, media_object_uri: string) => void)): number
    emit(sigName: "resource-changed", media_object_uri: string): void
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
export interface HTTPSeekRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class HTTPSeekRequest {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPSeekRequest_ConstructProps)
    _init (config?: HTTPSeekRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaylistItem_ConstructProps extends MediaFileItem_ConstructProps {
}
export class PlaylistItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mime_type: string
    dlna_profile: string
    size: number
    place_holder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parent_ptr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    get_primary_resource(): MediaResource
    get_extension(): string
    ext_from_mime_type(mime_type: string): string
    add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    get_description(): string
    set_description(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaFileItem */
    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string
    vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void
    /* Virtual methods of RygelServer-2.6.RygelServer.MediaObject */
    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Fields of RygelServer-2.6.RygelServer.ContentDirectory */
    feature_list: string
    http_server: HTTPServer
    root_container: MediaContainer
    cancellable: Gio.Cancellable
    system_update_id: number
    /* Fields of GUPnP-1.2.GUPnP.Service */
    parent_instance: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freeze_notify(): void
    notify_value(variable: string, value: any): void
    signals_autoconnect(user_data?: object | null): void
    thaw_notify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    get_context(): GUPnP.Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection_async(callback: GUPnP.ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
    introspect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspect_finish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GUPnP-1.2.GUPnP.Service */
    vfunc_action_invoked(action: GUPnP.ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
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
export interface HTTPByteSeekRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
    start_byte?: number
    end_byte?: number
    range_length?: number
    total_size?: number
}
export class HTTPByteSeekRequest {
    /* Properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest */
    start_byte: number
    end_byte: number
    range_length: number
    total_size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPByteSeekRequest */
    get_start_byte(): number
    set_start_byte(value: number): void
    get_end_byte(): number
    set_end_byte(value: number): void
    get_range_length(): number
    get_total_size(): number
    set_total_size(value: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPByteSeekRequest_ConstructProps)
    _init (config?: HTTPByteSeekRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: Soup.Message, handler: HTTPGetHandler): HTTPByteSeekRequest
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(msg: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface HTTPByteSeekResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    start_byte?: number
    end_byte?: number
    range_length?: number
    total_size?: number
}
export class HTTPByteSeekResponse {
    /* Properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse */
    start_byte: number
    end_byte: number
    range_length: number
    total_size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPByteSeekResponse */
    get_start_byte(): number
    set_start_byte(value: number): void
    get_end_byte(): number
    set_end_byte(value: number): void
    get_range_length(): number
    get_total_size(): number
    set_total_size(value: number): void
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    add_response_headers(request: HTTPRequest): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPByteSeekResponse_ConstructProps)
    _init (config?: HTTPByteSeekResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start_byte: number, end_byte: number, total_size: number): HTTPByteSeekResponse
    static from_request(request: HTTPByteSeekRequest): HTTPByteSeekResponse
    static $gtype: GObject.Type
}
export interface HTTPGetHandler_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
}
export class HTTPGetHandler {
    /* Properties of RygelServer-2.6.RygelServer.HTTPGetHandler */
    cancellable: Gio.Cancellable
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPGetHandler */
    add_response_headers(request: HTTPGet): void
    get_default_transfer_mode(): string
    supports_transfer_mode(mode: string): boolean
    get_resource_size(): number
    get_resource_duration(): number
    supports_byte_seek(): boolean
    supports_time_seek(): boolean
    supports_playspeed(): boolean
    render_body(request: HTTPGet): HTTPResponse
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPGetHandler */
    vfunc_add_response_headers(request: HTTPGet): void
    vfunc_get_default_transfer_mode(): string
    vfunc_supports_transfer_mode(mode: string): boolean
    vfunc_get_resource_size(): number
    vfunc_get_resource_duration(): number
    vfunc_supports_byte_seek(): boolean
    vfunc_supports_time_seek(): boolean
    vfunc_supports_playspeed(): boolean
    vfunc_render_body(request: HTTPGet): HTTPResponse
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPGetHandler_ConstructProps)
    _init (config?: HTTPGetHandler_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HTTPGet_ConstructProps extends HTTPRequest_ConstructProps {
}
export class HTTPGet {
    /* Fields of RygelServer-2.6.RygelServer.HTTPGet */
    seek: HTTPSeekRequest
    speed_request: PlaySpeedRequest
    handler: HTTPGetHandler
    /* Fields of RygelServer-2.6.RygelServer.HTTPRequest */
    http_server: HTTPServer
    server: Soup.Server
    msg: Soup.Message
    uri: HTTPItemURI
    object: MediaObject
    hack: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPRequest */
    handle(_callback_?: Gio.AsyncReadyCallback | null): void
    handle_finish(_res_: Gio.AsyncResult): void
    find_item(_callback_?: Gio.AsyncReadyCallback | null): void
    find_item_finish(_res_: Gio.AsyncResult): void
    handle_error(_error_: GLib.Error): void
    end(status: number, reason?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPRequest */
    vfunc_handle(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_handle_finish(_res_: Gio.AsyncResult): void
    vfunc_find_item(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_item_finish(_res_: Gio.AsyncResult): void
    vfunc_run(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPGet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPGet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPGet_ConstructProps)
    _init (config?: HTTPGet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(http_server: HTTPServer, server: Soup.Server, msg: Soup.Message): HTTPGet
    static $gtype: GObject.Type
}
export interface HTTPItemURI_ConstructProps extends GObject.Object_ConstructProps {
    item_id?: string
    thumbnail_index?: number
    subtitle_index?: number
    resource_name?: string
    http_server?: HTTPServer
    extension?: string
}
export class HTTPItemURI {
    /* Properties of RygelServer-2.6.RygelServer.HTTPItemURI */
    item_id: string
    thumbnail_index: number
    subtitle_index: number
    resource_name: string
    http_server: HTTPServer
    extension: string
    /* Fields of RygelServer-2.6.RygelServer.HTTPItemURI */
    rygel_http_item_uri_mime_to_ext: Gee.HashMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPItemURI */
    to_string(): string
    get_item_id(): string
    set_item_id(value: string): void
    get_thumbnail_index(): number
    set_thumbnail_index(value: number): void
    get_subtitle_index(): number
    set_subtitle_index(value: number): void
    get_resource_name(): string | null
    set_resource_name(value?: string | null): void
    get_http_server(): HTTPServer
    set_http_server(value: HTTPServer): void
    get_extension(): string
    set_extension(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::item-id", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-id", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thumbnail-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-name", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-name", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-server", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-server", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPItemURI_ConstructProps)
    _init (config?: HTTPItemURI_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: MediaObject, http_server: HTTPServer, thumbnail_index: number, subtitle_index: number, resource_name?: string | null): HTTPItemURI
    static from_string(uri: string, http_server: HTTPServer): HTTPItemURI
    static $gtype: GObject.Type
}
export interface HTTPRequest_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
}
export class HTTPRequest {
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of RygelServer-2.6.RygelServer.HTTPRequest */
    http_server: HTTPServer
    server: Soup.Server
    msg: Soup.Message
    uri: HTTPItemURI
    object: MediaObject
    hack: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPRequest */
    handle(_callback_?: Gio.AsyncReadyCallback | null): void
    handle_finish(_res_: Gio.AsyncResult): void
    find_item(_callback_?: Gio.AsyncReadyCallback | null): void
    find_item_finish(_res_: Gio.AsyncResult): void
    handle_error(_error_: GLib.Error): void
    end(status: number, reason?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(_callback_?: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPRequest */
    vfunc_handle(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_handle_finish(_res_: Gio.AsyncResult): void
    vfunc_find_item(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_item_finish(_res_: Gio.AsyncResult): void
    vfunc_run(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: HTTPRequest) => void)): number
    connect_after(sigName: "completed", callback: (($obj: HTTPRequest) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPRequest_ConstructProps)
    _init (config?: HTTPRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HTTPResponse_ConstructProps extends GObject.Object_ConstructProps {
    server?: Soup.Server
    cancellable?: Gio.Cancellable
}
export class HTTPResponse {
    /* Properties of RygelServer-2.6.RygelServer.HTTPResponse */
    server: Soup.Server
    readonly priority: number
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of RygelServer-2.6.RygelServer.HTTPResponse */
    msg: Soup.Message
    seek: HTTPSeekRequest
    speed: PlaySpeedRequest
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponse */
    preroll(): Gee.List | null
    end(aborted: boolean, status: number): void
    get_server(): Soup.Server
    get_priority(): number
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(_callback_?: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponse */
    vfunc_end(aborted: boolean, status: number): void
    vfunc_run(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: HTTPResponse) => void)): number
    connect_after(sigName: "completed", callback: (($obj: HTTPResponse) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "notify::server", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPResponse_ConstructProps)
    _init (config?: HTTPResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(request: HTTPGet, request_handler: HTTPGetHandler, src: DataSource): HTTPResponse
    static $gtype: GObject.Type
}
export interface HTTPResponseElement_ConstructProps extends GObject.Object_ConstructProps {
}
export class HTTPResponseElement {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    add_response_headers(request: HTTPRequest): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPResponseElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPResponseElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPResponseElement_ConstructProps)
    _init (config?: HTTPResponseElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HTTPServer_ConstructProps extends GObject.Object_ConstructProps {
    path_root?: string
    server_name?: string
    cancellable?: Gio.Cancellable
}
export class HTTPServer {
    /* Properties of RygelServer-2.6.RygelServer.HTTPServer */
    path_root: string
    server_name: string
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of RygelServer-2.6.RygelServer.HTTPServer */
    root_container: MediaContainer
    context: GUPnP.Context
    replacements: GLib.HashTable
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPServer */
    set_resource_delivery_options(res: MediaResource): void
    need_proxy(uri: string): boolean
    get_protocol(): string
    get_protocol_info(): Gee.ArrayList
    get_replacements(): GLib.HashTable
    is_local(): boolean
    get_path_root(): string
    get_server_name(): string
    set_server_name(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(_callback_?: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPServer */
    vfunc_get_protocol(): string
    vfunc_get_protocol_info(): Gee.ArrayList
    vfunc_run(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: HTTPServer) => void)): number
    connect_after(sigName: "completed", callback: (($obj: HTTPServer) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-name", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-name", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
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
export interface HTTPTimeSeekRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
}
export class HTTPTimeSeekRequest {
    /* Fields of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest */
    start_time: number
    end_time: number
    range_duration: number
    total_duration: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest */
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPTimeSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPTimeSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPTimeSeekRequest_ConstructProps)
    _init (config?: HTTPTimeSeekRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface HTTPTimeSeekResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    start_time?: number
    end_time?: number
    range_duration?: number
    total_duration?: number
    start_byte?: number
    end_byte?: number
    response_length?: number
    total_size?: number
}
export class HTTPTimeSeekResponse {
    /* Properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse */
    start_time: number
    end_time: number
    range_duration: number
    total_duration: number
    start_byte: number
    end_byte: number
    response_length: number
    total_size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse */
    get_start_time(): number
    get_end_time(): number
    get_range_duration(): number
    get_total_duration(): number
    get_start_byte(): number
    get_end_byte(): number
    get_response_length(): number
    get_total_size(): number
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    add_response_headers(request: HTTPRequest): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::range-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response-length", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-length", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-size", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTTPTimeSeekResponse_ConstructProps)
    _init (config?: HTTPTimeSeekResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start_time: number, end_time: number, total_duration: number, start_byte: number, end_byte: number, total_size: number): HTTPTimeSeekResponse
    static time_only(start_time: number, end_time: number, total_duration: number): HTTPTimeSeekResponse
    static with_length(start_time: number, end_time: number, total_duration: number, start_byte: number, end_byte: number, total_size: number, response_length: number): HTTPTimeSeekResponse
    static from_request(time_seek_request: HTTPTimeSeekRequest, total_duration: number): HTTPTimeSeekResponse
    static $gtype: GObject.Type
}
export interface Serializer_ConstructProps extends GObject.Object_ConstructProps {
    serializer_type?: SerializerType
}
export class Serializer {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.Serializer */
    add_item(): GUPnPAV.DIDLLiteItem | null
    add_container(): GUPnPAV.DIDLLiteContainer | null
    filter(filter_string: string): void
    get_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
export class PlaySpeed {
    /* Fields of RygelServer-2.6.RygelServer.PlaySpeed */
    ref_count: number
    numerator: number
    denominator: number
    /* Methods of RygelServer-2.6.RygelServer.PlaySpeed */
    equals(that: PlaySpeed): boolean
    is_positive(): boolean
    is_normal_rate(): boolean
    to_string(): string
    to_float(): number
    to_double(): number
    static name: string
    static new(numerator: number, denominator: number): PlaySpeed
    constructor(numerator: number, denominator: number)
    /* Static methods and pseudo-constructors */
    static new(numerator: number, denominator: number): PlaySpeed
    static from_string(speed: string): PlaySpeed
}
export interface PlaySpeedRequest_ConstructProps extends GObject.Object_ConstructProps {
    speed?: PlaySpeed
}
export class PlaySpeedRequest {
    /* Properties of RygelServer-2.6.RygelServer.PlaySpeedRequest */
    speed: PlaySpeed
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.PlaySpeedRequest */
    equals(that: PlaySpeedRequest): boolean
    get_speed(): PlaySpeed
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::speed", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaySpeedRequest_ConstructProps)
    _init (config?: PlaySpeedRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(numerator: number, denominator: number): PlaySpeedRequest
    static from_string(speed: string): PlaySpeedRequest
    static supported(request: HTTPGet): boolean
    static $gtype: GObject.Type
}
export interface PlaySpeedResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
}
export class PlaySpeedResponse {
    /* Fields of RygelServer-2.6.RygelServer.PlaySpeedResponse */
    framerate: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.PlaySpeedResponse */
    equals(that: PlaySpeedRequest): boolean
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    add_response_headers(request: HTTPRequest): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaySpeedResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaySpeedResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaySpeedResponse_ConstructProps)
    _init (config?: PlaySpeedResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(numerator: number, denominator: number, framerate: number): PlaySpeedResponse
    static from_speed(speed: PlaySpeed, framerate: number): PlaySpeedResponse
    static from_string(speed: string, framerate: number): PlaySpeedResponse
    static $gtype: GObject.Type
}
export interface DTCPCleartextRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
    start_byte?: number
    end_byte?: number
    range_length?: number
    total_size?: number
}
export class DTCPCleartextRequest {
    /* Properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest */
    start_byte: number
    end_byte: number
    range_length: number
    total_size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DTCPCleartextRequest */
    get_start_byte(): number
    get_end_byte(): number
    get_range_length(): number
    get_total_size(): number
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::range-length", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-size", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DTCPCleartextRequest_ConstructProps)
    _init (config?: DTCPCleartextRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(message: Soup.Message, handler: HTTPGetHandler): DTCPCleartextRequest
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface DTCPCleartextResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    start_byte?: number
    end_byte?: number
    range_length?: number
    total_size?: number
    encrypted_length?: number
}
export class DTCPCleartextResponse {
    /* Properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse */
    start_byte: number
    end_byte: number
    range_length: number
    total_size: number
    encrypted_length: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DTCPCleartextResponse */
    get_start_byte(): number
    get_end_byte(): number
    get_range_length(): number
    get_total_size(): number
    get_encrypted_length(): number
    set_encrypted_length(value: number): void
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    add_response_headers(request: HTTPRequest): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::range-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-size", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encrypted-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DTCPCleartextResponse_ConstructProps)
    _init (config?: DTCPCleartextResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start_byte: number, end_byte: number, total_size: number, encrypted_length: number): DTCPCleartextResponse
    static from_request(request: DTCPCleartextRequest, encrypted_length: number): DTCPCleartextResponse
    static $gtype: GObject.Type
}
export interface DLNAAvailableSeekRangeRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
}
export class DLNAAvailableSeekRangeRequest {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DLNAAvailableSeekRangeRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNAAvailableSeekRangeRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DLNAAvailableSeekRangeRequest_ConstructProps)
    _init (config?: DLNAAvailableSeekRangeRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface DLNAAvailableSeekRangeResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    mode?: number
    start_time?: number
    end_time?: number
    start_byte?: number
    end_byte?: number
    range_length?: number
}
export class DLNAAvailableSeekRangeResponse {
    /* Properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse */
    mode: number
    start_time: number
    end_time: number
    start_byte: number
    end_byte: number
    range_length: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse */
    get_mode(): number
    get_start_time(): number
    get_end_time(): number
    get_start_byte(): number
    get_end_byte(): number
    get_range_length(): number
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    add_response_headers(request: HTTPRequest): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::range-length", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DLNAAvailableSeekRangeResponse_ConstructProps)
    _init (config?: DLNAAvailableSeekRangeResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: number, start_time: number, end_time: number, start_byte: number, end_byte: number): DLNAAvailableSeekRangeResponse
    static time_only(mode: number, start_time: number, end_time: number): DLNAAvailableSeekRangeResponse
    static $gtype: GObject.Type
}
export abstract class AudioItemClass {
    static name: string
}
export class AudioItemPrivate {
    static name: string
}
export abstract class ImageItemClass {
    static name: string
}
export class ImageItemPrivate {
    static name: string
}
export abstract class LogicalExpressionClass {
    static name: string
}
export class LogicalExpressionPrivate {
    static name: string
}
export abstract class MediaArtStoreClass {
    static name: string
}
export class MediaArtStorePrivate {
    static name: string
}
export abstract class MediaObjectsClass {
    static name: string
}
export class MediaObjectsPrivate {
    static name: string
}
export abstract class MusicItemClass {
    static name: string
}
export class MusicItemPrivate {
    static name: string
}
export abstract class PhotoItemClass {
    static name: string
}
export class PhotoItemPrivate {
    static name: string
}
export abstract class RelationalExpressionClass {
    static name: string
}
export class RelationalExpressionPrivate {
    static name: string
}
export abstract class SimpleContainerClass {
    static name: string
}
export class SimpleContainerPrivate {
    static name: string
}
export abstract class SubtitleClass {
    /* Fields of RygelServer-2.6.RygelServer.SubtitleClass */
    get_resource: (self: Subtitle, protocol: string, index: number) => MediaResource
    static name: string
}
export class SubtitlePrivate {
    static name: string
}
export abstract class ThumbnailClass {
    /* Fields of RygelServer-2.6.RygelServer.ThumbnailClass */
    get_resource: (self: Thumbnail, protocol: string, index: number) => MediaResource
    static name: string
}
export class ThumbnailPrivate {
    static name: string
}
export abstract class VideoItemClass {
    /* Fields of RygelServer-2.6.RygelServer.VideoItemClass */
    add_subtitle_resources: (self: VideoItem, http_server: HTTPServer) => void
    static name: string
}
export class VideoItemPrivate {
    static name: string
}
export abstract class MediaContainerClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaContainerClass */
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
    static name: string
}
export class MediaItemPrivate {
    static name: string
}
export abstract class MediaFileItemClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItemClass */
    get_primary_resource: (self: MediaFileItem) => MediaResource
    get_extension: (self: MediaFileItem) => string
    add_engine_resources: (self: MediaFileItem, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_engine_resources_finish: (self: MediaFileItem, _res_: Gio.AsyncResult) => void
    add_additional_resources: (self: MediaFileItem, server: HTTPServer) => void
    static name: string
}
export class MediaFileItemPrivate {
    static name: string
}
export abstract class MediaObjectClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaObjectClass */
    add_uri: (self: MediaObject, uri: string) => void
    serialize: (self: MediaObject, serializer: Serializer, http_server: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    create_stream_source_for_resource: (self: MediaObject, request: HTTPRequest, resource: MediaResource) => DataSource | null
    apply_didl_lite: (self: MediaObject, didl_object: GUPnPAV.DIDLLiteObject) => void
    compare_by_property: (self: MediaObject, media_object: MediaObject, property: string) => number
    static name: string
}
export class MediaObjectPrivate {
    static name: string
}
export abstract class MediaResourceClass {
    static name: string
}
export class MediaResourcePrivate {
    static name: string
}
export abstract class MediaServerPluginClass {
    static name: string
}
export class MediaServerPluginPrivate {
    static name: string
}
export abstract class SearchExpressionClass {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpressionClass */
    satisfied_by: (self: SearchExpression, media_object: MediaObject) => boolean
    to_string: (self: SearchExpression) => string
    static name: string
}
export class SearchExpressionPrivate {
    static name: string
}
export abstract class MediaServerClass {
    static name: string
}
export class MediaServerPrivate {
    static name: string
}
export abstract class MediaEngineClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaEngineClass */
    get_dlna_profiles: (self: MediaEngine) => RygelCore.DLNAProfile[]
    get_resources_for_item: (self: MediaEngine, item: MediaObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    get_resources_for_item_finish: (self: MediaEngine, _res_: Gio.AsyncResult) => Gee.List | null
    create_data_source_for_resource: (self: MediaEngine, item: MediaObject, resource: MediaResource, replacements: GLib.HashTable) => DataSource | null
    create_data_source_for_uri: (self: MediaEngine, uri: string) => DataSource | null
    get_internal_protocol_schemes: (self: MediaEngine) => string[]
    static name: string
}
export class MediaEnginePrivate {
    static name: string
}
export abstract class HTTPSeekRequestClass {
    static name: string
}
export class HTTPSeekRequestPrivate {
    static name: string
}
export abstract class PlaylistItemClass {
    static name: string
}
export class PlaylistItemPrivate {
    static name: string
}
export abstract class ContentDirectoryClass {
    static name: string
}
export class ContentDirectoryPrivate {
    static name: string
}
export abstract class HTTPByteSeekRequestClass {
    static name: string
}
export class HTTPByteSeekRequestPrivate {
    static name: string
}
export abstract class HTTPByteSeekResponseClass {
    static name: string
}
export class HTTPByteSeekResponsePrivate {
    static name: string
}
export abstract class HTTPGetHandlerClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPGetHandlerClass */
    add_response_headers: (self: HTTPGetHandler, request: HTTPGet) => void
    get_default_transfer_mode: (self: HTTPGetHandler) => string
    supports_transfer_mode: (self: HTTPGetHandler, mode: string) => boolean
    get_resource_size: (self: HTTPGetHandler) => number
    get_resource_duration: (self: HTTPGetHandler) => number
    supports_byte_seek: (self: HTTPGetHandler) => boolean
    supports_time_seek: (self: HTTPGetHandler) => boolean
    supports_playspeed: (self: HTTPGetHandler) => boolean
    render_body: (self: HTTPGetHandler, request: HTTPGet) => HTTPResponse
    static name: string
}
export class HTTPGetHandlerPrivate {
    static name: string
}
export abstract class HTTPGetClass {
    static name: string
}
export class HTTPGetPrivate {
    static name: string
}
export abstract class HTTPItemURIClass {
    static name: string
}
export class HTTPItemURIPrivate {
    static name: string
}
export abstract class HTTPRequestClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPRequestClass */
    handle: (self: HTTPRequest, _callback_?: Gio.AsyncReadyCallback | null) => void
    handle_finish: (self: HTTPRequest, _res_: Gio.AsyncResult) => void
    find_item: (self: HTTPRequest, _callback_?: Gio.AsyncReadyCallback | null) => void
    find_item_finish: (self: HTTPRequest, _res_: Gio.AsyncResult) => void
    static name: string
}
export class HTTPRequestPrivate {
    static name: string
}
export abstract class HTTPResponseClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPResponseClass */
    end: (self: HTTPResponse, aborted: boolean, status: number) => void
    static name: string
}
export class HTTPResponsePrivate {
    static name: string
}
export abstract class HTTPResponseElementClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPResponseElementClass */
    add_response_headers: (self: HTTPResponseElement, request: HTTPRequest) => void
    to_string: (self: HTTPResponseElement) => string
    static name: string
}
export class HTTPResponseElementPrivate {
    static name: string
}
export abstract class HTTPServerClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPServerClass */
    get_protocol: (self: HTTPServer) => string
    get_protocol_info: (self: HTTPServer) => Gee.ArrayList
    static name: string
}
export class HTTPServerPrivate {
    static name: string
}
export abstract class HTTPTimeSeekRequestClass {
    static name: string
}
export class HTTPTimeSeekRequestPrivate {
    static name: string
}
export abstract class HTTPTimeSeekResponseClass {
    static name: string
}
export class HTTPTimeSeekResponsePrivate {
    static name: string
}
export abstract class SerializerClass {
    static name: string
}
export class SerializerPrivate {
    static name: string
}
export abstract class PlaySpeedClass {
    static name: string
}
export class PlaySpeedPrivate {
    static name: string
}
export abstract class PlaySpeedRequestClass {
    static name: string
}
export class PlaySpeedRequestPrivate {
    static name: string
}
export abstract class PlaySpeedResponseClass {
    static name: string
}
export class PlaySpeedResponsePrivate {
    static name: string
}
export abstract class DTCPCleartextRequestClass {
    static name: string
}
export class DTCPCleartextRequestPrivate {
    static name: string
}
export abstract class DTCPCleartextResponseClass {
    static name: string
}
export class DTCPCleartextResponsePrivate {
    static name: string
}
export abstract class DLNAAvailableSeekRangeRequestClass {
    static name: string
}
export class DLNAAvailableSeekRangeRequestPrivate {
    static name: string
}
export abstract class DLNAAvailableSeekRangeResponseClass {
    static name: string
}
export class DLNAAvailableSeekRangeResponsePrivate {
    static name: string
}
export abstract class SearchableContainerIface {
    /* Fields of RygelServer-2.6.RygelServer.SearchableContainerIface */
    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    search_finish: (self: SearchableContainer, _res_: Gio.AsyncResult) => [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    get_search_classes: (self: SearchableContainer) => Gee.ArrayList
    set_search_classes: (self: SearchableContainer, value: Gee.ArrayList) => void
    static name: string
}
export abstract class TrackableContainerIface {
    /* Fields of RygelServer-2.6.RygelServer.TrackableContainerIface */
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
    static name: string
}
export abstract class VisualItemIface {
    /* Fields of RygelServer-2.6.RygelServer.VisualItemIface */
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
    /* Fields of RygelServer-2.6.RygelServer.WritableContainerIface */
    add_item: (self: WritableContainer, item: MediaFileItem, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
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
    /* Fields of RygelServer-2.6.RygelServer.DataSourceIface */
    preroll: (self: DataSource, seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null) => Gee.List | null
    start: (self: DataSource) => void
    freeze: (self: DataSource) => void
    thaw: (self: DataSource) => void
    stop: (self: DataSource) => void
    static name: string
}
export abstract class UpdatableObjectIface {
    /* Fields of RygelServer-2.6.RygelServer.UpdatableObjectIface */
    commit: (self: UpdatableObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    commit_finish: (self: UpdatableObject, _res_: Gio.AsyncResult) => void
    static name: string
}