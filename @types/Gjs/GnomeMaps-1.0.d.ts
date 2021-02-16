/**
 * GnomeMaps-1.0
 */

import type * as Gjs from './Gjs';
import type * as Rest from './Rest-0.7';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GeocodeGlib from './GeocodeGlib-1.0';
import type * as Json from './Json-1.0';
import type * as Champlain from './Champlain-0.12';
import type * as Clutter from './Clutter-1.0';
import type * as cairo from './cairo-1.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Cogl from './Cogl-1.0';
import type * as Atk from './Atk-1.0';

export enum ContactStoreState {
    INITIAL,
    LOADING,
    LOADED,
}
export function osm_finalize(): void
export function osm_init(): void
export function osm_parse(content: string, length: number): OSMObject
export interface ContactGeocodeCallback {
    (contact: Contact): void
}
export interface ContactStoreLookupCallback {
    (contact: Contact): void
}
export interface Contact_ConstructProps extends GObject.Object_ConstructProps {
    icon?: Gio.Icon
    id?: string
    name?: string
}
export class Contact {
    /* Properties of GnomeMaps.Contact */
    readonly bounding_box: Champlain.BoundingBox
    icon: Gio.Icon
    id: string
    name: string
    /* Fields of GnomeMaps.Contact */
    parent_instance: GObject.Object
    priv: ContactPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.Contact */
    add_place(place: GeocodeGlib.Place): void
    geocode(callback: ContactGeocodeCallback): void
    get_places(): GeocodeGlib.Place[]
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
    connect(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bounding-box", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Contact_ConstructProps)
    _init (config?: Contact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Contact
    static $gtype: GObject.Type
}
export interface ContactStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContactStore {
    /* Properties of GnomeMaps.ContactStore */
    readonly state: ContactStoreState
    /* Fields of GnomeMaps.ContactStore */
    parent_instance: GObject.Object
    priv: ContactStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.ContactStore */
    get_contacts(): Contact[]
    load(): void
    lookup(id: string, callback: ContactStoreLookupCallback): void
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
    connect(sigName: "notify", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactStore_ConstructProps)
    _init (config?: ContactStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContactStore
    static $gtype: GObject.Type
}
export interface FileTileSource_ConstructProps extends Champlain.TileSource_ConstructProps {
    path?: string
}
export class FileTileSource {
    /* Properties of GnomeMaps.FileTileSource */
    readonly max_zoom: number
    readonly min_zoom: number
    path: string
    readonly world: Champlain.BoundingBox
    /* Properties of Champlain.TileSource */
    cache: Champlain.TileCache
    id: string
    license: string
    license_uri: string
    max_zoom_level: number
    min_zoom_level: number
    name: string
    projection: Champlain.MapProjection
    tile_size: number
    /* Properties of Champlain.MapSource */
    next_source: Champlain.MapSource
    renderer: Champlain.Renderer
    /* Fields of GnomeMaps.FileTileSource */
    parent_instance: Champlain.TileSource
    priv: FileTileSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.FileTileSource */
    prepare(): boolean
    /* Methods of Champlain.TileSource */
    get_cache(): Champlain.TileCache
    set_cache(cache: Champlain.TileCache): void
    set_id(id: string): void
    set_license(license: string): void
    set_license_uri(license_uri: string): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_name(name: string): void
    set_projection(projection: Champlain.MapProjection): void
    set_tile_size(tile_size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Champlain.Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): Champlain.MapSource
    get_projection(): Champlain.MapProjection
    get_renderer(): Champlain.Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: Champlain.MapSource): void
    set_renderer(renderer: Champlain.Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Champlain.Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): Champlain.MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::world", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::world", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileTileSource_ConstructProps)
    _init (config?: FileTileSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OSMChangeset_ConstructProps extends GObject.Object_ConstructProps {
    comment?: string
    created_by?: string
}
export class OSMChangeset {
    /* Properties of GnomeMaps.OSMChangeset */
    comment: string
    created_by: string
    /* Fields of GnomeMaps.OSMChangeset */
    parent_instance: GObject.Object
    priv: OSMChangesetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMChangeset */
    serialize(): string
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
    connect(sigName: "notify", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::comment", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-by", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-by", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OSMChangeset_ConstructProps)
    _init (config?: OSMChangeset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(comment?: string | null, created_by?: string | null): OSMChangeset
    static $gtype: GObject.Type
}
export interface OSMNode_ConstructProps extends OSMObject_ConstructProps {
    latitude?: number
    longitude?: number
}
export class OSMNode {
    /* Properties of GnomeMaps.OSMNode */
    latitude: number
    longitude: number
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMNode */
    parent_instance: OSMObject
    priv: OSMNodePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMObject */
    delete_tag(key: string): void
    get_tag(key: string): string
    serialize(): string
    set_tag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::latitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::changeset", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OSMNode_ConstructProps)
    _init (config?: OSMNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode
    static $gtype: GObject.Type
}
export interface OSMOAuthProxyCall_ConstructProps extends Rest.OAuthProxyCall_ConstructProps {
}
export class OSMOAuthProxyCall {
    /* Fields of GnomeMaps.OSMOAuthProxyCall */
    parent: Rest.OAuthProxyCall
    priv: OSMOAuthProxyCallPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Rest.OAuthProxyCall */
    parse_token_reponse(): void
    parse_token_response(): void
    /* Methods of Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Rest.Param): void
    get_function(): string
    get_method(): string
    get_params(): Rest.Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Rest.Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OSMOAuthProxyCall_ConstructProps)
    _init (config?: OSMOAuthProxyCall_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall
    static $gtype: GObject.Type
}
export interface OSMObject_ConstructProps extends GObject.Object_ConstructProps {
    changeset?: number
    id?: number
    version?: number
}
export class OSMObject {
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMObject */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMObject */
    delete_tag(key: string): void
    get_tag(key: string): string
    serialize(): string
    set_tag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::changeset", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OSMObject_ConstructProps)
    _init (config?: OSMObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OSMRelation_ConstructProps extends OSMObject_ConstructProps {
}
export class OSMRelation {
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMRelation */
    parent_instance: OSMObject
    priv: OSMRelationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMRelation */
    add_member(role: string, type: number, ref: number): void
    /* Methods of GnomeMaps.OSMObject */
    delete_tag(key: string): void
    get_tag(key: string): string
    serialize(): string
    set_tag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::changeset", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OSMRelation_ConstructProps)
    _init (config?: OSMRelation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number): OSMRelation
    static $gtype: GObject.Type
}
export interface OSMWay_ConstructProps extends OSMObject_ConstructProps {
}
export class OSMWay {
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMWay */
    parent_instance: OSMObject
    priv: OSMWayPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMWay */
    add_node_id(id: number): void
    /* Methods of GnomeMaps.OSMObject */
    delete_tag(key: string): void
    get_tag(key: string): string
    serialize(): string
    set_tag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::changeset", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OSMWay_ConstructProps)
    _init (config?: OSMWay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number): OSMWay
    static $gtype: GObject.Type
}
export abstract class ContactClass {
    /* Fields of GnomeMaps.ContactClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ContactPrivate {
    static name: string
}
export abstract class ContactStoreClass {
    /* Fields of GnomeMaps.ContactStoreClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ContactStorePrivate {
    static name: string
}
export abstract class FileTileSourceClass {
    /* Fields of GnomeMaps.FileTileSourceClass */
    parent_class: Champlain.TileSourceClass
    static name: string
}
export class FileTileSourcePrivate {
    static name: string
}
export abstract class OSMChangesetClass {
    /* Fields of GnomeMaps.OSMChangesetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class OSMChangesetPrivate {
    static name: string
}
export abstract class OSMNodeClass {
    /* Fields of GnomeMaps.OSMNodeClass */
    parent_class: OSMObjectClass
    static name: string
}
export class OSMNodePrivate {
    static name: string
}
export abstract class OSMOAuthProxyCallClass {
    /* Fields of GnomeMaps.OSMOAuthProxyCallClass */
    parent_class: Rest.OAuthProxyCallClass
    static name: string
}
export class OSMOAuthProxyCallPrivate {
    static name: string
}
export abstract class OSMObjectClass {
    /* Fields of GnomeMaps.OSMObjectClass */
    parent_class: GObject.ObjectClass
    get_xml_tag_name: () => string
    static name: string
}
export class OSMObjectPrivate {
    static name: string
}
export abstract class OSMRelationClass {
    /* Fields of GnomeMaps.OSMRelationClass */
    parent_class: OSMObjectClass
    static name: string
}
export class OSMRelationPrivate {
    static name: string
}
export abstract class OSMWayClass {
    /* Fields of GnomeMaps.OSMWayClass */
    parent_class: OSMObjectClass
    static name: string
}
export class OSMWayPrivate {
    static name: string
}
export class _ContactClass {
    /* Fields of GnomeMaps._ContactClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _ContactStoreClass {
    /* Fields of GnomeMaps._ContactStoreClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _OSMChangesetClass {
    /* Fields of GnomeMaps._OSMChangesetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _OSMNodeClass {
    /* Fields of GnomeMaps._OSMNodeClass */
    parent_class: OSMObjectClass
    static name: string
}
export class _OSMRelationClass {
    /* Fields of GnomeMaps._OSMRelationClass */
    parent_class: OSMObjectClass
    static name: string
}
export class _OSMWayClass {
    /* Fields of GnomeMaps._OSMWayClass */
    parent_class: OSMObjectClass
    static name: string
}