/**
 * Unity-7.0
 */

import type * as Gjs from './Gjs';
import type * as GLib from './GLib-2.0';
import type * as Dbusmenu from './Dbusmenu-0.4';
import type * as GObject from './GObject-2.0';
import type * as Dee from './Dee-1.0';
import type * as Gio from './Gio-2.0';

export enum CategoryType {
    NONE,
    APPLICATION,
    BOOK,
    MUSIC,
    MOVIE,
    GAMES,
    ELECTRONICS,
    COMPUTERS,
    OFFICE,
    HOME,
    GARDEN,
    PETS,
    TOYS,
    CHILDREN,
    BABY,
    CLOTHES,
    SHOES,
    WATCHES,
    SPORTS,
    OUTDOORS,
    GROCERY,
    HEALTH,
    BEAUTY,
    DIY,
    TOOLS,
    CAR,
    N_CATEGORIES,
}
export enum IconSizeHint {
    DEFAULT,
    SMALL,
    LARGE,
}
export enum CategoryRenderer {
    DEFAULT,
    GRID,
    CAROUSEL,
    LIST,
    DYNAMIC,
    SPECIAL,
    VERTICAL_TILE,
    HORIZONTAL_TILE,
}
export enum CategoryContentType {
    DEFAULT,
    APPLICATIONS,
    MUSIC,
    VIDEO,
    PLACES,
    SOCIAL,
    WEATHER,
}
export enum FilterRenderer {
    CHECK_OPTIONS,
    RADIO_OPTIONS,
    MULTIRANGE,
    RATINGS,
    CHECK_OPTIONS_COMPACT,
}
export enum LayoutHint {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
export enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
    PERFORM_SEARCH,
}
export enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
export enum ResultType {
    DEFAULT,
    PERSONAL,
    SEMI_PERSONAL,
}
export enum SerializationType {
    BINARY,
    JSON,
}
export enum PlaybackState {
    PLAYING,
    PAUSED,
}
export enum OptionsFilterSortType {
    MANUAL,
    DISPLAY_NAME,
    ID,
}
export enum PreferencesManagerRemoteContent {
    ALL,
    NONE,
}
export enum MusicPreviewTrackState {
    STOPPED,
    PLAYING,
    PAUSED,
}
export enum PaymentPreviewType {
    APPLICATION,
    MUSIC,
    ERROR,
}
export enum SchemaFieldType {
    OPTIONAL,
    REQUIRED,
}
export enum AggregatorScopeSortFlags {
    ASCENDING,
    DESCENDING,
    CASE_INSENSITIVE,
}
export enum AggregatorScopeMergeMode {
    CATEGORY_ID,
    OWNER_SCOPE,
}
export const SCOPE_API_VERSION: number
export function category_renderer_from_string(renderer_name: string): CategoryRenderer
export function category_renderer_to_string(val: CategoryRenderer): string
export function category_content_type_from_string(content_type: string): CategoryContentType
export function category_content_type_to_string(val: CategoryContentType): string
export function filter_renderer_to_string(renderer: FilterRenderer): string
export function filter_renderer_from_string(renderer_name: string): FilterRenderer
export function scope_module_get_version(): number
export function scope_module_load_scopes(): AbstractScope[]
export function object_unref(object?: object | null): void
export interface ScopeSearchBaseCallback {
    (instance: ScopeSearchBase): void
}
export interface AbstractPreviewCallback {
    (previewer: ResultPreviewer, preview: AbstractPreview | null): void
}
export interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppInfoManager {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AppInfoManager */
    lookup(id: string): Gio.AppInfo | null
    get_categories(id: string): string[] | null
    get_keywords(id: string): string[] | null
    get_path(id: string): string | null
    lookup_async(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void
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
    /* Signals of Unity.AppInfoManager */
    connect(sigName: "changed", callback: (($obj: AppInfoManager, id: string, new_appinfo?: Gio.AppInfo | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AppInfoManager, id: string, new_appinfo?: Gio.AppInfo | null) => void)): number
    emit(sigName: "changed", id: string, new_appinfo?: Gio.AppInfo | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppInfoManager_ConstructProps)
    _init (config?: AppInfoManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_instance(): AppInfoManager
    static get_default(): AppInfoManager
    static $gtype: GObject.Type
}
export interface AnnotatedIcon_ConstructProps extends GObject.Object_ConstructProps {
    icon?: Gio.Icon
    ribbon?: string
    category?: CategoryType
    size_hint?: IconSizeHint
}
export class AnnotatedIcon {
    /* Properties of Unity.AnnotatedIcon */
    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    size_hint: IconSizeHint
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AnnotatedIcon */
    set_colorize_rgba(r: number, g: number, b: number, a: number): void
    to_string(): string
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    get_ribbon(): string
    set_ribbon(value: string): void
    get_category(): CategoryType
    set_category(value: CategoryType): void
    get_size_hint(): IconSizeHint
    set_size_hint(value: IconSizeHint): void
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
    connect(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotatedIcon_ConstructProps)
    _init (config?: AnnotatedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_icon: Gio.Icon): AnnotatedIcon
    static $gtype: GObject.Type
}
export interface Inspector_ConstructProps extends GObject.Object_ConstructProps {
}
export class Inspector {
    /* Properties of Unity.Inspector */
    readonly unity_running: boolean
    readonly unity_bus_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Inspector */
    get_unity_running(): boolean
    get_unity_bus_name(): string | null
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
    connect(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Inspector_ConstructProps)
    _init (config?: Inspector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Inspector
    static $gtype: GObject.Type
}
export interface LauncherEntry_ConstructProps extends GObject.Object_ConstructProps {
    app_uri?: string
    count?: number
    count_visible?: boolean
    progress?: number
    progress_visible?: boolean
    urgent?: boolean
    quicklist?: Dbusmenu.Menuitem
}
export class LauncherEntry {
    /* Properties of Unity.LauncherEntry */
    app_uri: string
    count: number
    count_visible: boolean
    progress: number
    progress_visible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.LauncherEntry */
    get_app_uri(): string
    set_app_uri(value: string): void
    get_count(): number
    set_count(value: number): void
    get_count_visible(): boolean
    set_count_visible(value: boolean): void
    get_progress(): number
    set_progress(value: number): void
    get_progress_visible(): boolean
    set_progress_visible(value: boolean): void
    get_urgent(): boolean
    set_urgent(value: boolean): void
    get_quicklist(): Dbusmenu.Menuitem | null
    set_quicklist(value?: Dbusmenu.Menuitem | null): void
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.LauncherEntry */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LauncherEntry_ConstructProps)
    _init (config?: LauncherEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_for_app_uri(app_uri: string): LauncherEntry
    static get_for_desktop_id(desktop_id: string): LauncherEntry
    static get_for_desktop_file(desktop_file: string): LauncherEntry
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface LauncherFavorites_ConstructProps extends GObject.Object_ConstructProps {
}
export class LauncherFavorites {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.LauncherFavorites */
    has_app_info(appinfo: Gio.AppInfo): boolean
    has_app_id(app_id: string): boolean
    lookup(app_id: string): Gio.AppInfo | null
    enumerate_ids(): string[]
    enumerate_app_infos(): Gio.AppInfo[]
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
    /* Signals of Unity.LauncherFavorites */
    connect(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    connect_after(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LauncherFavorites_ConstructProps)
    _init (config?: LauncherFavorites_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): LauncherFavorites
    static $gtype: GObject.Type
}
export interface MetadataProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class MetadataProvider {
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetadataProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetadataProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetadataProvider_ConstructProps)
    _init (config?: MetadataProvider_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProgressSourceProvider_ConstructProps extends MetadataProvider_ConstructProps {
    dbus_name?: string
    dbus_path?: string
}
export class ProgressSourceProvider {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ProgressSourceProvider */
    get_dbus_name(): string
    get_dbus_path(): string
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
    connect(sigName: "notify", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProgressSourceProvider_ConstructProps)
    _init (config?: ProgressSourceProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_name: string, dbus_path: string): ProgressSourceProvider
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    name?: string
    icon_hint?: Gio.Icon
    default_renderer?: CategoryRenderer
    content_type?: CategoryContentType
    renderer_hint?: string
}
export class Category {
    /* Properties of Unity.Category */
    content_type: CategoryContentType
    renderer_hint: string
    readonly renderer: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Category */
    add_metadata_provider(provider: MetadataProvider): void
    get_id(): string
    get_name(): string
    get_icon_hint(): Gio.Icon | null
    get_default_renderer(): CategoryRenderer
    get_content_type(): CategoryContentType
    set_content_type(value: CategoryContentType): void
    get_renderer_hint(): string
    set_renderer_hint(value: string): void
    get_renderer(): string
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
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    display_name?: string
    icon_hint?: Gio.Icon
    renderer?: FilterRenderer
    visible?: boolean
    collapsed?: boolean
    filtering?: boolean
}
export class Filter {
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: Filter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Filter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    display_name?: string
    icon_hint?: Gio.Icon
    active?: boolean
}
export class FilterOption {
    /* Properties of Unity.FilterOption */
    active: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.FilterOption */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon
    get_active(): boolean
    set_active(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOption_ConstructProps)
    _init (config?: FilterOption_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, active: boolean): FilterOption
    static $gtype: GObject.Type
}
export interface OptionsFilter_ConstructProps extends Filter_ConstructProps {
    sort_type?: OptionsFilterSortType
    show_all_button?: boolean
}
export class OptionsFilter {
    /* Properties of Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    show_all_button: boolean
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
    get_sort_type(): OptionsFilterSortType
    set_sort_type(value: OptionsFilterSortType): void
    get_show_all_button(): boolean
    set_show_all_button(value: boolean): void
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-all-button", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OptionsFilter_ConstructProps)
    _init (config?: OptionsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OptionsFilter
    static $gtype: GObject.Type
}
export interface RadioOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
export class RadioOptionFilter {
    /* Properties of Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    show_all_button: boolean
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.RadioOptionFilter */
    get_active_option(): FilterOption | null
    /* Methods of Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
    get_sort_type(): OptionsFilterSortType
    set_sort_type(value: OptionsFilterSortType): void
    get_show_all_button(): boolean
    set_show_all_button(value: boolean): void
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-all-button", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RadioOptionFilter_ConstructProps)
    _init (config?: RadioOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter
    static new(): RadioOptionFilter
    static $gtype: GObject.Type
}
export interface CheckOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
export class CheckOptionFilter {
    /* Properties of Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    show_all_button: boolean
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
    get_sort_type(): OptionsFilterSortType
    set_sort_type(value: OptionsFilterSortType): void
    get_show_all_button(): boolean
    set_show_all_button(value: boolean): void
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CheckOptionFilter_ConstructProps)
    _init (config?: CheckOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter
    static new(): CheckOptionFilter
    static $gtype: GObject.Type
}
export interface CheckOptionFilterCompact_ConstructProps extends OptionsFilter_ConstructProps {
}
export class CheckOptionFilterCompact {
    /* Properties of Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    show_all_button: boolean
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
    get_sort_type(): OptionsFilterSortType
    set_sort_type(value: OptionsFilterSortType): void
    get_show_all_button(): boolean
    set_show_all_button(value: boolean): void
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CheckOptionFilterCompact_ConstructProps)
    _init (config?: CheckOptionFilterCompact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact
    static new(): CheckOptionFilterCompact
    static $gtype: GObject.Type
}
export interface RatingsFilter_ConstructProps extends Filter_ConstructProps {
    rating?: number
}
export class RatingsFilter {
    /* Properties of Unity.RatingsFilter */
    rating: number
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.RatingsFilter */
    get_rating(): number
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RatingsFilter_ConstructProps)
    _init (config?: RatingsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    static $gtype: GObject.Type
}
export interface MultiRangeFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
export class MultiRangeFilter {
    /* Properties of Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    show_all_button: boolean
    /* Properties of Unity.Filter */
    display_name: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.MultiRangeFilter */
    get_first_active(): FilterOption | null
    get_last_active(): FilterOption | null
    /* Methods of Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
    get_sort_type(): OptionsFilterSortType
    set_sort_type(value: OptionsFilterSortType): void
    get_show_all_button(): boolean
    set_show_all_button(value: boolean): void
    /* Methods of Unity.Filter */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-all-button", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collapsed", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultiRangeFilter_ConstructProps)
    _init (config?: MultiRangeFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter
    static new(): MultiRangeFilter
    static $gtype: GObject.Type
}
export interface PreferencesManager_ConstructProps extends GObject.Object_ConstructProps {
    remote_content_search?: PreferencesManagerRemoteContent
    always_search?: string[]
    home_lens_priority?: string[]
    home_lens_default_view?: string[]
    disabled_scopes?: string[]
}
export class PreferencesManager {
    /* Properties of Unity.PreferencesManager */
    remote_content_search: PreferencesManagerRemoteContent
    always_search: string[]
    home_lens_priority: string[]
    home_lens_default_view: string[]
    disabled_scopes: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.PreferencesManager */
    get_remote_content_search(): PreferencesManagerRemoteContent
    set_remote_content_search(value: PreferencesManagerRemoteContent): void
    get_always_search(): string[]
    set_always_search(value: string[]): void
    get_home_lens_priority(): string[]
    set_home_lens_priority(value: string[]): void
    get_home_lens_default_view(): string[]
    set_home_lens_default_view(value: string[]): void
    get_disabled_scopes(): string[]
    set_disabled_scopes(value: string[]): void
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
    connect(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::always-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-lens-priority", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-priority", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-lens-default-view", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-view", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disabled-scopes", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disabled-scopes", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreferencesManager_ConstructProps)
    _init (config?: PreferencesManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): PreferencesManager
    static $gtype: GObject.Type
}
export interface DeprecatedScopeSearch_ConstructProps extends ScopeSearchBase_ConstructProps {
    channel_id?: string
    hints?: GLib.HashTable
    results_model?: Dee.SerializableModel
    owner?: DeprecatedScopeBase
}
export class DeprecatedScopeSearch {
    /* Properties of Unity.DeprecatedScopeSearch */
    readonly search_string: string
    readonly search_type: SearchType
    /* Fields of Unity.ScopeSearchBase */
    search_context: SearchContext | null
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.DeprecatedScopeSearch */
    set_reply_hint(key: string, variant: GLib.Variant): void
    get_filter(filter_id: string): Filter | null
    equals(other: DeprecatedScopeSearch): boolean
    get_channel_id(): string
    get_search_string(): string
    get_search_type(): SearchType
    get_hints(): GLib.HashTable
    get_results_model(): Dee.SerializableModel
    get_owner(): DeprecatedScopeBase
    /* Methods of Unity.ScopeSearchBase */
    run(): void
    run_async(async_callback: ScopeSearchBaseCallback): void
    set_search_context(ctx: SearchContext): void
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
    /* Virtual methods of Unity.ScopeSearchBase */
    vfunc_run(): void
    vfunc_run_async(async_callback: ScopeSearchBaseCallback): void
    vfunc_set_search_context(ctx: SearchContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScopeSearch */
    connect(sigName: "finished", callback: (($obj: DeprecatedScopeSearch) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DeprecatedScopeSearch) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-string", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-type", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-type", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeprecatedScopeSearch_ConstructProps)
    _init (config?: DeprecatedScopeSearch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AggregatedScopeSearch_ConstructProps extends DeprecatedScopeSearch_ConstructProps {
}
export class AggregatedScopeSearch {
    /* Properties of Unity.DeprecatedScopeSearch */
    readonly search_string: string
    readonly search_type: SearchType
    /* Fields of Unity.ScopeSearchBase */
    search_context: SearchContext | null
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AggregatedScopeSearch */
    search_scope(scope_id: string, search_string: string, search_type: SearchType, hints?: GLib.HashTable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_scope_finish(_res_: Gio.AsyncResult): GLib.HashTable
    push_results(scope_id: string, results_model: Dee.SerializableModel, category_ids: string[], _callback_?: Gio.AsyncReadyCallback | null): void
    push_results_finish(_res_: Gio.AsyncResult): void
    push_filter_settings(filters: FilterSet): void
    /* Methods of Unity.DeprecatedScopeSearch */
    set_reply_hint(key: string, variant: GLib.Variant): void
    get_filter(filter_id: string): Filter | null
    equals(other: DeprecatedScopeSearch): boolean
    get_channel_id(): string
    get_search_string(): string
    get_search_type(): SearchType
    get_hints(): GLib.HashTable
    get_results_model(): Dee.SerializableModel
    get_owner(): DeprecatedScopeBase
    /* Methods of Unity.ScopeSearchBase */
    run(): void
    run_async(async_callback: ScopeSearchBaseCallback): void
    set_search_context(ctx: SearchContext): void
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
    /* Virtual methods of Unity.ScopeSearchBase */
    vfunc_run(): void
    vfunc_run_async(async_callback: ScopeSearchBaseCallback): void
    vfunc_set_search_context(ctx: SearchContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.AggregatedScopeSearch */
    connect(sigName: "transaction-complete", callback: (($obj: AggregatedScopeSearch, origin_scope_id: string) => void)): number
    connect_after(sigName: "transaction-complete", callback: (($obj: AggregatedScopeSearch, origin_scope_id: string) => void)): number
    emit(sigName: "transaction-complete", origin_scope_id: string): void
    connect(sigName: "category-order-changed", callback: (($obj: AggregatedScopeSearch, category_indices: number[]) => void)): number
    connect_after(sigName: "category-order-changed", callback: (($obj: AggregatedScopeSearch, category_indices: number[]) => void)): number
    emit(sigName: "category-order-changed", category_indices: number[]): void
    /* Signals of Unity.DeprecatedScopeSearch */
    connect(sigName: "finished", callback: (($obj: AggregatedScopeSearch) => void)): number
    connect_after(sigName: "finished", callback: (($obj: AggregatedScopeSearch) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-string", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-type", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-type", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AggregatedScopeSearch_ConstructProps)
    _init (config?: AggregatedScopeSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(owner: AggregatorScope, channel_id: string, hints: GLib.HashTable, results_model: Dee.SerializableModel): AggregatedScopeSearch
    static $gtype: GObject.Type
}
export interface Preview_ConstructProps extends AbstractPreview_ConstructProps {
    title?: string
    subtitle?: string
    description_markup?: string
    image_source_uri?: string
    image?: Gio.Icon
}
export class Preview {
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Preview_ConstructProps)
    _init (config?: Preview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface PreviewAction_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    display_name?: string
    extra_text?: string
    icon_hint?: Gio.Icon
    layout_hint?: LayoutHint
}
export class PreviewAction {
    /* Properties of Unity.PreviewAction */
    extra_text: string
    readonly hints: GLib.HashTable
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.PreviewAction */
    get_id(): string
    get_display_name(): string
    get_extra_text(): string
    set_extra_text(value: string): void
    get_icon_hint(): Gio.Icon | null
    get_layout_hint(): LayoutHint
    get_hints(): GLib.HashTable | null
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.PreviewAction */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.PreviewAction */
    connect(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    connect_after(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    emit(sigName: "activated", uri: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewAction_ConstructProps)
    _init (config?: PreviewAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint?: Gio.Icon | null): PreviewAction
    static with_layout_hint(id: string, display_name: string, icon_hint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static with_uri(uri: string, display_name: string, icon_hint?: Gio.Icon | null): PreviewAction
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface InfoHint_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    id?: string
    display_name?: string
    icon_hint?: Gio.Icon
    data?: GLib.Variant
}
export class InfoHint {
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.InfoHint */
    get_id(): string
    get_display_name(): string
    get_icon_hint(): Gio.Icon | null
    get_data(): GLib.Variant
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
    connect(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfoHint_ConstructProps)
    _init (config?: InfoHint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, data: string): InfoHint
    static with_variant(id: string, display_name: string, icon_hint: Gio.Icon | null, data: GLib.Variant): InfoHint
    static $gtype: GObject.Type
}
export interface GenericPreview_ConstructProps extends Preview_ConstructProps {
}
export class GenericPreview {
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GenericPreview_ConstructProps)
    _init (config?: GenericPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    static $gtype: GObject.Type
}
export interface ApplicationPreview_ConstructProps extends Preview_ConstructProps {
    app_icon?: Gio.Icon
    license?: string
    copyright?: string
    last_update?: string
}
export class ApplicationPreview {
    /* Properties of Unity.ApplicationPreview */
    app_icon: Gio.Icon
    license: string
    copyright: string
    last_update: string
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ApplicationPreview */
    set_rating(rating: number, num_ratings: number): void
    get_app_icon(): Gio.Icon
    set_app_icon(value: Gio.Icon): void
    get_license(): string
    set_license(value: string): void
    get_copyright(): string
    set_copyright(value: string): void
    get_last_update(): string
    set_last_update(value: string): void
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationPreview_ConstructProps)
    _init (config?: ApplicationPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    static $gtype: GObject.Type
}
export interface MusicPreview_ConstructProps extends Preview_ConstructProps {
}
export class MusicPreview {
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.MusicPreview */
    add_track(track: TrackMetadata): void
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicPreview_ConstructProps)
    _init (config?: MusicPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    static $gtype: GObject.Type
}
export interface PaymentPreview_ConstructProps extends Preview_ConstructProps {
    header?: string
    email?: string
    payment_method?: string
    purchase_prize?: string
    purchase_type?: string
    preview_type?: PaymentPreviewType
}
export class PaymentPreview {
    /* Properties of Unity.PaymentPreview */
    header: string
    email: string
    payment_method: string
    purchase_prize: string
    purchase_type: string
    preview_type: PaymentPreviewType
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.PaymentPreview */
    get_header(): string
    set_header(value: string): void
    get_email(): string
    set_email(value: string): void
    get_payment_method(): string
    set_payment_method(value: string): void
    get_purchase_prize(): string
    set_purchase_prize(value: string): void
    get_purchase_type(): string
    set_purchase_type(value: string): void
    get_preview_type(): PaymentPreviewType
    set_preview_type(value: PaymentPreviewType): void
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::header", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::payment-method", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payment-method", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::purchase-prize", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::purchase-prize", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::purchase-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::purchase-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PaymentPreview_ConstructProps)
    _init (config?: PaymentPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static for_type(title: string, subtitle: string, image: Gio.Icon | null, type: PaymentPreviewType): PaymentPreview
    static for_application(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static for_music(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static for_error(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static $gtype: GObject.Type
}
export interface MoviePreview_ConstructProps extends Preview_ConstructProps {
    year?: string
}
export class MoviePreview {
    /* Properties of Unity.MoviePreview */
    year: string
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.MoviePreview */
    set_rating(rating: number, num_ratings: number): void
    get_year(): string
    set_year(value: string): void
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MoviePreview_ConstructProps)
    _init (config?: MoviePreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    static $gtype: GObject.Type
}
export interface SocialPreview_ConstructProps extends Preview_ConstructProps {
    avatar?: Gio.Icon
    content?: string
    sender?: string
}
export class SocialPreview {
    /* Properties of Unity.SocialPreview */
    avatar: Gio.Icon
    content: string
    sender: string
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.SocialPreview */
    add_comment(comment: SocialPreviewComment): void
    get_avatar(): Gio.Icon
    set_avatar(value: Gio.Icon): void
    get_content(): string
    set_content(value: string): void
    get_sender(): string
    set_sender(value: string): void
    /* Methods of Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    get_description_markup(): string
    set_description_markup(value: string): void
    get_image_source_uri(): string
    set_image_source_uri(value: string): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocialPreview_ConstructProps)
    _init (config?: SocialPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    static $gtype: GObject.Type
}
export interface SocialPreviewComment_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    id?: string
    name?: string
    text?: string
    time?: string
}
export class SocialPreviewComment {
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.SocialPreviewComment */
    get_id(): string
    get_name(): string
    get_text(): string
    get_time(): string
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
    connect(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocialPreviewComment_ConstructProps)
    _init (config?: SocialPreviewComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    static $gtype: GObject.Type
}
export interface ActivationResponse_ConstructProps extends GObject.Object_ConstructProps {
    handled?: HandledType
    goto_uri?: string
}
export class ActivationResponse {
    /* Properties of Unity.ActivationResponse */
    goto_uri: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ActivationResponse */
    get_handled(): HandledType
    get_goto_uri(): string
    set_goto_uri(value: string): void
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
    connect(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActivationResponse_ConstructProps)
    _init (config?: ActivationResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(handled: HandledType, goto_uri: string): ActivationResponse
    static with_search(search_string: string, filter_set?: FilterSet | null, search_metadata?: SearchMetadata | null): ActivationResponse
    static with_preview(preview: Preview): ActivationResponse
    static $gtype: GObject.Type
}
export interface AggregatorActivation_ConstructProps extends GObject.Object_ConstructProps {
    channel_id?: string
    scope_id?: string
    action_type?: number
    scope_result?: ScopeResult
    hints?: GLib.HashTable
}
export class AggregatorActivation {
    /* Properties of Unity.AggregatorActivation */
    channel_id: string
    scope_id: string
    action_type: number
    scope_result: ScopeResult
    hints: GLib.HashTable
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AggregatorActivation */
    get_channel_id(): string
    set_channel_id(value: string): void
    get_scope_id(): string
    set_scope_id(value: string): void
    get_action_type(): number
    set_action_type(value: number): void
    get_scope_result(): ScopeResult | null
    set_scope_result(value?: ScopeResult | null): void
    get_hints(): GLib.HashTable
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
    connect(sigName: "notify", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::channel-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-type", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-type", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-result", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-result", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hints", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AggregatorActivation_ConstructProps)
    _init (config?: AggregatorActivation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(channel_id: string, scope_id: string, action_type: number, result?: ScopeResult | null): AggregatorActivation
    static $gtype: GObject.Type
}
export interface FilterSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class FilterSet {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.FilterSet */
    add(filter: Filter): void
    get_filter_by_id(filter_id: string): Filter | null
    get_filters(): Filter[]
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
    /* Virtual methods of Unity.FilterSet */
    vfunc_add(filter: Filter): void
    vfunc_get_filter_by_id(filter_id: string): Filter | null
    vfunc_get_filters(): Filter[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterSet_ConstructProps)
    _init (config?: FilterSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterSet
    static $gtype: GObject.Type
}
export interface CategorySet_ConstructProps extends GObject.Object_ConstructProps {
}
export class CategorySet {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.CategorySet */
    add(category: Category): void
    get_categories(): Category[]
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
    /* Virtual methods of Unity.CategorySet */
    vfunc_add(category: Category): void
    vfunc_get_categories(): Category[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CategorySet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CategorySet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CategorySet_ConstructProps)
    _init (config?: CategorySet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CategorySet
    static $gtype: GObject.Type
}
export interface Schema_ConstructProps extends GObject.Object_ConstructProps {
}
export class Schema {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Schema */
    add_field(name: string, schema: string, type: SchemaFieldType): void
    get_fields(): SchemaFieldInfo[]
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
    /* Virtual methods of Unity.Schema */
    vfunc_add_field(name: string, schema: string, type: SchemaFieldType): void
    vfunc_get_fields(): SchemaFieldInfo[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Schema_ConstructProps)
    _init (config?: Schema_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Schema
    static $gtype: GObject.Type
}
export interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cancellable {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Cancellable */
    cancel(): void
    is_cancelled(): boolean
    get_gcancellable(): Gio.Cancellable | null
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
    /* Virtual methods of Unity.Cancellable */
    vfunc_cancel(): void
    vfunc_is_cancelled(): boolean
    vfunc_get_gcancellable(): Gio.Cancellable | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cancellable_ConstructProps)
    _init (config?: Cancellable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(): Cancellable
    static $gtype: GObject.Type
}
export interface ScopeSearchBase_ConstructProps extends GObject.Object_ConstructProps {
}
export class ScopeSearchBase {
    /* Fields of Unity.ScopeSearchBase */
    search_context: SearchContext | null
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ScopeSearchBase */
    run(): void
    run_async(async_callback: ScopeSearchBaseCallback): void
    set_search_context(ctx: SearchContext): void
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
    /* Virtual methods of Unity.ScopeSearchBase */
    vfunc_run(): void
    vfunc_run_async(async_callback: ScopeSearchBaseCallback): void
    vfunc_set_search_context(ctx: SearchContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScopeSearchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScopeSearchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScopeSearchBase_ConstructProps)
    _init (config?: ScopeSearchBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResultSet {
    /* Fields of Unity.ResultSet */
    ttl: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ResultSet */
    add_result(result: ScopeResult): void
    add_result_from_variant(variant: GLib.Variant): void
    flush(): void
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
    /* Virtual methods of Unity.ResultSet */
    vfunc_add_result(result: ScopeResult): void
    vfunc_add_result_from_variant(variant: GLib.Variant): void
    vfunc_flush(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface AbstractPreview_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractPreview {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AbstractPreview */
    serialize_as(serialization_type: SerializationType): Uint8Array[]
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
    /* Virtual methods of Unity.AbstractPreview */
    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractPreview_ConstructProps)
    _init (config?: AbstractPreview_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResultPreviewer_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResultPreviewer {
    /* Fields of Unity.ResultPreviewer */
    result: ScopeResult
    metadata: SearchMetadata
    cancellable: Cancellable
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ResultPreviewer */
    run(): AbstractPreview | null
    run_async(async_callback: AbstractPreviewCallback): void
    set_scope_result(scope_result: ScopeResult): void
    set_search_metadata(search_metadata: SearchMetadata): void
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
    /* Virtual methods of Unity.ResultPreviewer */
    vfunc_run(): AbstractPreview | null
    vfunc_run_async(async_callback: AbstractPreviewCallback): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResultPreviewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResultPreviewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResultPreviewer_ConstructProps)
    _init (config?: ResultPreviewer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SearchMetadata_ConstructProps extends GObject.Object_ConstructProps {
}
export class SearchMetadata {
    /* Properties of Unity.SearchMetadata */
    readonly locale: string
    readonly form_factor: string
    readonly location: GeoCoordinate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.SearchMetadata */
    get_locale(): string | null
    get_form_factor(): string | null
    get_location(): GeoCoordinate | null
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
    connect(sigName: "notify", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SearchMetadata_ConstructProps)
    _init (config?: SearchMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SearchMetadata
    static create(metadata?: GLib.HashTable | null): SearchMetadata
    static create_from_variant(metadata: GLib.Variant): SearchMetadata
    static $gtype: GObject.Type
}
export interface GeoCoordinate_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeoCoordinate {
    /* Fields of Unity.GeoCoordinate */
    latitude: number
    longitude: number
    altitude: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.GeoCoordinate */
    has_valid_altitude(): boolean
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
    connect(sigName: "notify", callback: (($obj: GeoCoordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GeoCoordinate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GeoCoordinate_ConstructProps)
    _init (config?: GeoCoordinate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude_: number, longitude_: number): GeoCoordinate
    static with_altitude(latitude_: number, longitude_: number, altitude_: number): GeoCoordinate
    static $gtype: GObject.Type
}
export interface AbstractScope_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractScope {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AbstractScope */
    create_search_for_query(search_context: SearchContext): ScopeSearchBase
    create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    get_categories(): CategorySet
    get_filters(): FilterSet
    get_schema(): Schema
    get_search_hint(): string
    get_group_name(): string
    get_unique_name(): string
    activate(result: ScopeResult, metadata: SearchMetadata, action_id?: string | null): ActivationResponse | null
    normalize_search_query(search_query: string): string
    results_invalidated(search_type: SearchType): void
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
    /* Virtual methods of Unity.AbstractScope */
    vfunc_create_search_for_query(search_context: SearchContext): ScopeSearchBase
    vfunc_create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    vfunc_get_categories(): CategorySet
    vfunc_get_filters(): FilterSet
    vfunc_get_schema(): Schema
    vfunc_get_search_hint(): string
    vfunc_get_group_name(): string
    vfunc_get_unique_name(): string
    vfunc_activate(result: ScopeResult, metadata: SearchMetadata, action_id?: string | null): ActivationResponse | null
    vfunc_normalize_search_query(search_query: string): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.AbstractScope */
    connect(sigName: "results-invalidated-internal", callback: (($obj: AbstractScope, search_type: SearchType) => void)): number
    connect_after(sigName: "results-invalidated-internal", callback: (($obj: AbstractScope, search_type: SearchType) => void)): number
    emit(sigName: "results-invalidated-internal", search_type: SearchType): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractScope_ConstructProps)
    _init (config?: AbstractScope_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ScopeDBusConnector_ConstructProps extends GObject.Object_ConstructProps {
    scope?: AbstractScope
}
export class ScopeDBusConnector {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ScopeDBusConnector */
    export(): void
    unexport(): void
    get_scope(): AbstractScope
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
    connect(sigName: "notify", callback: (($obj: ScopeDBusConnector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScopeDBusConnector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScopeDBusConnector_ConstructProps)
    _init (config?: ScopeDBusConnector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(scope: AbstractScope): ScopeDBusConnector
    static run(): void
    static quit(): void
    static $gtype: GObject.Type
}
export interface DeprecatedScopeBase_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    dbus_path?: string
    search_in_global?: boolean
    visible?: boolean
    is_master?: boolean
    search_hint?: string
    sources?: OptionsFilter
    categories?: CategorySet
    filters?: FilterSet
    schema?: Schema
}
export class DeprecatedScopeBase {
    /* Properties of Unity.DeprecatedScopeBase */
    search_in_global: boolean
    visible: boolean
    search_hint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    get_id(): string
    get_dbus_path(): string
    get_search_in_global(): boolean
    set_search_in_global(value: boolean): void
    get_visible(): boolean
    set_visible(value: boolean): void
    get_is_master(): boolean
    get_search_hint(): string
    set_search_hint(value: string): void
    get_sources(): OptionsFilter
    get_categories(): CategorySet
    set_categories(value: CategorySet): void
    get_filters(): FilterSet
    set_filters(value: FilterSet): void
    get_schema(): Schema
    set_schema(value: Schema): void
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
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: DeprecatedScopeBase, active_ids: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: DeprecatedScopeBase, active_ids: string[]) => void)): number
    emit(sigName: "active-sources-changed", active_ids: string[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-hint", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sources", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeprecatedScopeBase_ConstructProps)
    _init (config?: DeprecatedScopeBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeprecatedScope_ConstructProps extends DeprecatedScopeBase_ConstructProps {
}
export class DeprecatedScope {
    /* Properties of Unity.DeprecatedScopeBase */
    search_in_global: boolean
    visible: boolean
    search_hint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.DeprecatedScope */
    preview_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null): void
    preview_result_finish(_res_: Gio.AsyncResult): Preview | null
    activate_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null): void
    activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    queue_search_changed(search_type: SearchType): void
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    get_id(): string
    get_dbus_path(): string
    get_search_in_global(): boolean
    set_search_in_global(value: boolean): void
    get_visible(): boolean
    set_visible(value: boolean): void
    get_is_master(): boolean
    get_search_hint(): string
    set_search_hint(value: string): void
    get_sources(): OptionsFilter
    get_categories(): CategorySet
    set_categories(value: CategorySet): void
    get_filters(): FilterSet
    set_filters(value: FilterSet): void
    get_schema(): Schema
    set_schema(value: Schema): void
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
    /* Virtual methods of Unity.DeprecatedScope */
    vfunc_preview_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_preview_result_finish(_res_: Gio.AsyncResult): Preview | null
    vfunc_activate_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScope */
    connect(sigName: "activate-uri", callback: (($obj: DeprecatedScope, uri: string) => ActivationResponse | null)): number
    connect_after(sigName: "activate-uri", callback: (($obj: DeprecatedScope, uri: string) => ActivationResponse | null)): number
    emit(sigName: "activate-uri", uri: string): void
    connect(sigName: "preview-uri", callback: (($obj: DeprecatedScope, uri: string) => Preview | null)): number
    connect_after(sigName: "preview-uri", callback: (($obj: DeprecatedScope, uri: string) => Preview | null)): number
    emit(sigName: "preview-uri", uri: string): void
    connect(sigName: "generate-search-key", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch) => string)): number
    connect_after(sigName: "generate-search-key", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch) => string)): number
    emit(sigName: "generate-search-key", search: DeprecatedScopeSearch): void
    connect(sigName: "search-changed", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable) => void)): number
    connect_after(sigName: "search-changed", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable) => void)): number
    emit(sigName: "search-changed", search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable): void
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: DeprecatedScope, active_ids: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: DeprecatedScope, active_ids: string[]) => void)): number
    emit(sigName: "active-sources-changed", active_ids: string[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-hint", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sources", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeprecatedScope_ConstructProps)
    _init (config?: DeprecatedScope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_path_: string, id_: string): DeprecatedScope
    static $gtype: GObject.Type
}
export interface AggregatorScope_ConstructProps extends DeprecatedScopeBase_ConstructProps {
    merge_mode?: AggregatorScopeMergeMode
    proxy_filter_hints?: boolean
    automatic_flushing?: boolean
}
export class AggregatorScope {
    /* Properties of Unity.AggregatorScope */
    merge_mode: AggregatorScopeMergeMode
    proxy_filter_hints: boolean
    automatic_flushing: boolean
    /* Properties of Unity.DeprecatedScopeBase */
    search_in_global: boolean
    visible: boolean
    search_hint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.AggregatorScope */
    category_index_for_scope_id(scope_id: string): number
    add_sorter(category_index: number, field: string, flags: AggregatorScopeSortFlags): void
    add_constraint(category_index: number, field: string): void
    search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback | null): void
    activate_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    get_merge_mode(): AggregatorScopeMergeMode
    set_merge_mode(value: AggregatorScopeMergeMode): void
    get_proxy_filter_hints(): boolean
    set_proxy_filter_hints(value: boolean): void
    get_automatic_flushing(): boolean
    set_automatic_flushing(value: boolean): void
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    get_id(): string
    get_dbus_path(): string
    get_search_in_global(): boolean
    set_search_in_global(value: boolean): void
    get_visible(): boolean
    set_visible(value: boolean): void
    get_is_master(): boolean
    get_search_hint(): string
    set_search_hint(value: string): void
    get_sources(): OptionsFilter
    get_categories(): CategorySet
    set_categories(value: CategorySet): void
    get_filters(): FilterSet
    set_filters(value: FilterSet): void
    get_schema(): Schema
    set_schema(value: Schema): void
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
    /* Virtual methods of Unity.AggregatorScope */
    vfunc_category_index_for_scope_id(scope_id: string): number
    vfunc_search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): void
    vfunc_activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_activate_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: AggregatorScope, active_ids: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: AggregatorScope, active_ids: string[]) => void)): number
    emit(sigName: "active-sources-changed", active_ids: string[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::merge-mode", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-mode", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-filter-hints", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-filter-hints", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-flushing", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-flushing", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-in-global", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-hint", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sources", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AggregatorScope_ConstructProps)
    _init (config?: AggregatorScope_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MasterScope_ConstructProps extends AggregatorScope_ConstructProps {
    no_content_hint?: string
}
export class MasterScope {
    /* Properties of Unity.MasterScope */
    no_content_hint: string
    /* Properties of Unity.AggregatorScope */
    merge_mode: AggregatorScopeMergeMode
    proxy_filter_hints: boolean
    automatic_flushing: boolean
    /* Properties of Unity.DeprecatedScopeBase */
    search_in_global: boolean
    visible: boolean
    search_hint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.MasterScope */
    get_no_content_hint(): string
    set_no_content_hint(value: string): void
    /* Methods of Unity.AggregatorScope */
    category_index_for_scope_id(scope_id: string): number
    add_sorter(category_index: number, field: string, flags: AggregatorScopeSortFlags): void
    add_constraint(category_index: number, field: string): void
    search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback | null): void
    activate_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    get_merge_mode(): AggregatorScopeMergeMode
    set_merge_mode(value: AggregatorScopeMergeMode): void
    get_proxy_filter_hints(): boolean
    set_proxy_filter_hints(value: boolean): void
    get_automatic_flushing(): boolean
    set_automatic_flushing(value: boolean): void
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    get_id(): string
    get_dbus_path(): string
    get_search_in_global(): boolean
    set_search_in_global(value: boolean): void
    get_visible(): boolean
    set_visible(value: boolean): void
    get_is_master(): boolean
    get_search_hint(): string
    set_search_hint(value: string): void
    get_sources(): OptionsFilter
    get_categories(): CategorySet
    set_categories(value: CategorySet): void
    get_filters(): FilterSet
    set_filters(value: FilterSet): void
    get_schema(): Schema
    set_schema(value: Schema): void
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
    /* Virtual methods of Unity.AggregatorScope */
    vfunc_category_index_for_scope_id(scope_id: string): number
    vfunc_search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): void
    vfunc_activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_activate_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: MasterScope, active_ids: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: MasterScope, active_ids: string[]) => void)): number
    emit(sigName: "active-sources-changed", active_ids: string[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::no-content-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-content-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::merge-mode", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-mode", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-filter-hints", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-filter-hints", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-flushing", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-flushing", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-in-global", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sources", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MasterScope_ConstructProps)
    _init (config?: MasterScope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_path_: string, id_: string): MasterScope
    static $gtype: GObject.Type
}
export interface SimpleScope_ConstructProps extends AbstractScope_ConstructProps {
    filter_set?: FilterSet
    category_set?: CategorySet
    schema?: Schema
    search_hint?: string
    group_name?: string
    unique_name?: string
}
export class SimpleScope {
    /* Properties of Unity.SimpleScope */
    filter_set: FilterSet
    category_set: CategorySet
    schema: Schema
    search_hint: string
    group_name: string
    unique_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.SimpleScope */
    set_search_func(func: any): void
    set_search_async_func(func: any | null): void
    set_activate_func(func: any | null): void
    set_preview_func(func: any): void
    set_preview_async_func(func: any | null): void
    get_filter_set(): FilterSet
    set_filter_set(value: FilterSet): void
    get_category_set(): CategorySet
    set_category_set(value: CategorySet): void
    get_schema(): Schema
    set_schema(value: Schema): void
    get_search_hint(): string
    set_search_hint(value: string): void
    get_group_name(): string
    set_group_name(value: string): void
    get_unique_name(): string
    set_unique_name(value: string): void
    /* Methods of Unity.AbstractScope */
    create_search_for_query(search_context: SearchContext): ScopeSearchBase
    create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    get_categories(): CategorySet
    get_filters(): FilterSet
    activate(result: ScopeResult, metadata: SearchMetadata, action_id?: string | null): ActivationResponse | null
    normalize_search_query(search_query: string): string
    results_invalidated(search_type: SearchType): void
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
    /* Virtual methods of Unity.AbstractScope */
    vfunc_create_search_for_query(search_context: SearchContext): ScopeSearchBase
    vfunc_create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    vfunc_get_categories(): CategorySet
    vfunc_get_filters(): FilterSet
    vfunc_get_schema(): Schema
    vfunc_get_search_hint(): string
    vfunc_get_group_name(): string
    vfunc_get_unique_name(): string
    vfunc_activate(result: ScopeResult, metadata: SearchMetadata, action_id?: string | null): ActivationResponse | null
    vfunc_normalize_search_query(search_query: string): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.AbstractScope */
    connect(sigName: "results-invalidated-internal", callback: (($obj: SimpleScope, search_type: SearchType) => void)): number
    connect_after(sigName: "results-invalidated-internal", callback: (($obj: SimpleScope, search_type: SearchType) => void)): number
    emit(sigName: "results-invalidated-internal", search_type: SearchType): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::category-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-hint", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unique-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleScope_ConstructProps)
    _init (config?: SimpleScope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleScope
    static $gtype: GObject.Type
}
export interface ScopeLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class ScopeLoader {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.ScopeLoader */
    get_scopes(module_name: string, module_type?: string | null): AbstractScope[]
    export_scopes(scopes: AbstractScope[]): void
    load_group(group_name: string): void
    load_scope(scope_id: string): void
    load_module(module: string, module_type?: string | null): void
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
    /* Virtual methods of Unity.ScopeLoader */
    vfunc_get_scopes(module_name: string, module_type?: string | null): AbstractScope[]
    vfunc_export_scopes(scopes: AbstractScope[]): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScopeLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScopeLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScopeLoader_ConstructProps)
    _init (config?: ScopeLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScopeLoader
    static $gtype: GObject.Type
}
export interface TrackMetadata_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
    track_no?: number
    artist?: string
    title?: string
    album?: string
    length?: number
    art_location?: Gio.File
    art_icon?: Gio.Icon
}
export class TrackMetadata {
    /* Properties of Unity.TrackMetadata */
    uri: string
    track_no: number
    artist: string
    title: string
    album: string
    length: number
    art_location: Gio.File
    art_icon: Gio.Icon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.TrackMetadata */
    get_uri(): string
    set_uri(value: string): void
    get_track_no(): number
    set_track_no(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_title(): string
    set_title(value: string): void
    get_album(): string
    set_album(value: string): void
    get_length(): number
    set_length(value: number): void
    get_art_location(): Gio.File
    set_art_location(value: Gio.File): void
    get_art_icon(): Gio.Icon
    set_art_icon(value: Gio.Icon): void
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
    connect(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrackMetadata_ConstructProps)
    _init (config?: TrackMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TrackMetadata
    static full(uri: string, track_no: number, title: string, artist: string, album: string, length: number): TrackMetadata
    static $gtype: GObject.Type
}
export interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    name?: string
    icon?: Gio.Icon
    creation_date?: GLib.DateTime
    modification_date?: GLib.DateTime
    last_play_date?: GLib.DateTime
}
export class Playlist {
    /* Properties of Unity.Playlist */
    name: string
    icon: Gio.Icon
    creation_date: GLib.DateTime
    modification_date: GLib.DateTime
    last_play_date: GLib.DateTime
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.Playlist */
    get_id(): string
    get_name(): string
    set_name(value: string): void
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    get_creation_date(): GLib.DateTime
    set_creation_date(value: GLib.DateTime): void
    get_modification_date(): GLib.DateTime
    set_modification_date(value: GLib.DateTime): void
    get_last_play_date(): GLib.DateTime
    set_last_play_date(value: GLib.DateTime): void
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
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Playlist
    static $gtype: GObject.Type
}
export interface MusicPlayer_ConstructProps extends GObject.Object_ConstructProps {
    app_info?: Gio.AppInfo
    desktop_file_name?: string
    is_blacklisted?: boolean
    title?: string
    can_go_next?: boolean
    can_go_previous?: boolean
    can_play?: boolean
    can_pause?: boolean
    current_track?: TrackMetadata
    playback_state?: PlaybackState
    current_playlist?: Playlist
    track_menu?: Dbusmenu.Menuitem
    player_menu?: Dbusmenu.Menuitem
}
export class MusicPlayer {
    /* Properties of Unity.MusicPlayer */
    is_blacklisted: boolean
    title: string
    can_go_next: boolean
    can_go_previous: boolean
    can_play: boolean
    can_pause: boolean
    current_track: TrackMetadata
    playback_state: PlaybackState
    current_playlist: Playlist
    track_menu: Dbusmenu.Menuitem
    player_menu: Dbusmenu.Menuitem
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unity.MusicPlayer */
    export(): void
    unexport(): void
    add_playlist(p: Playlist): boolean
    remove_playlist(p: Playlist): boolean
    get_playlists(): Playlist[]
    edit_playlist_name(id: string, name: string): void
    get_app_info(): Gio.AppInfo
    get_desktop_file_name(): string
    get_is_blacklisted(): boolean
    set_is_blacklisted(value: boolean): void
    get_title(): string
    set_title(value: string): void
    get_can_go_next(): boolean
    set_can_go_next(value: boolean): void
    get_can_go_previous(): boolean
    set_can_go_previous(value: boolean): void
    get_can_play(): boolean
    set_can_play(value: boolean): void
    get_can_pause(): boolean
    set_can_pause(value: boolean): void
    get_current_track(): TrackMetadata
    set_current_track(value: TrackMetadata): void
    get_playback_state(): PlaybackState
    set_playback_state(value: PlaybackState): void
    get_current_playlist(): Playlist
    set_current_playlist(value: Playlist): void
    get_track_menu(): Dbusmenu.Menuitem | null
    set_track_menu(value?: Dbusmenu.Menuitem | null): void
    get_player_menu(): Dbusmenu.Menuitem | null
    set_player_menu(value?: Dbusmenu.Menuitem | null): void
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
    /* Signals of Unity.MusicPlayer */
    connect(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "raise"): void
    connect(sigName: "play-pause", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "play-pause", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "play-pause"): void
    connect(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "previous"): void
    connect(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "next"): void
    connect(sigName: "activate-playlist", callback: (($obj: MusicPlayer, playlist_id: any) => void)): number
    connect_after(sigName: "activate-playlist", callback: (($obj: MusicPlayer, playlist_id: any) => void)): number
    emit(sigName: "activate-playlist", playlist_id: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicPlayer_ConstructProps)
    _init (config?: MusicPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktop: string): MusicPlayer
    static $gtype: GObject.Type
}
export abstract class AppInfoManagerClass {
    static name: string
}
export class AppInfoManagerPrivate {
    static name: string
}
export abstract class AnnotatedIconClass {
    static name: string
}
export class AnnotatedIconPrivate {
    static name: string
}
export abstract class InspectorClass {
    static name: string
}
export class InspectorPrivate {
    static name: string
}
export abstract class LauncherEntryClass {
    static name: string
}
export class LauncherEntryPrivate {
    static name: string
}
export abstract class LauncherFavoritesClass {
    static name: string
}
export class LauncherFavoritesPrivate {
    static name: string
}
export abstract class MetadataProviderClass {
    /* Fields of Unity.MetadataProviderClass */
    update_hints: (self: MetadataProvider, hints: GLib.HashTable) => void
    static name: string
}
export class MetadataProviderPrivate {
    static name: string
}
export abstract class ProgressSourceProviderClass {
    static name: string
}
export class ProgressSourceProviderPrivate {
    static name: string
}
export abstract class CategoryClass {
    static name: string
}
export class CategoryPrivate {
    static name: string
}
export abstract class FilterClass {
    /* Fields of Unity.FilterClass */
    get_hints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
    static name: string
}
export class FilterPrivate {
    static name: string
}
export abstract class FilterOptionClass {
    static name: string
}
export class FilterOptionPrivate {
    static name: string
}
export abstract class OptionsFilterClass {
    static name: string
}
export class OptionsFilterPrivate {
    static name: string
}
export abstract class RadioOptionFilterClass {
    static name: string
}
export class RadioOptionFilterPrivate {
    static name: string
}
export abstract class CheckOptionFilterClass {
    static name: string
}
export class CheckOptionFilterPrivate {
    static name: string
}
export abstract class CheckOptionFilterCompactClass {
    static name: string
}
export class CheckOptionFilterCompactPrivate {
    static name: string
}
export abstract class RatingsFilterClass {
    static name: string
}
export class RatingsFilterPrivate {
    static name: string
}
export abstract class MultiRangeFilterClass {
    static name: string
}
export class MultiRangeFilterPrivate {
    static name: string
}
export abstract class PreferencesManagerClass {
    static name: string
}
export class PreferencesManagerPrivate {
    static name: string
}
export abstract class DeprecatedScopeSearchClass {
    static name: string
}
export class DeprecatedScopeSearchPrivate {
    static name: string
}
export abstract class AggregatedScopeSearchClass {
    static name: string
}
export class AggregatedScopeSearchPrivate {
    static name: string
}
export abstract class PreviewClass {
    /* Fields of Unity.PreviewClass */
    create_raw: (self: Preview) => GObject.Object
    static name: string
}
export class PreviewPrivate {
    static name: string
}
export abstract class PreviewActionClass {
    static name: string
}
export class PreviewActionPrivate {
    static name: string
}
export abstract class InfoHintClass {
    static name: string
}
export class InfoHintPrivate {
    static name: string
}
export abstract class GenericPreviewClass {
    static name: string
}
export class GenericPreviewPrivate {
    static name: string
}
export abstract class ApplicationPreviewClass {
    static name: string
}
export class ApplicationPreviewPrivate {
    static name: string
}
export abstract class MusicPreviewClass {
    static name: string
}
export class MusicPreviewPrivate {
    static name: string
}
export abstract class PaymentPreviewClass {
    static name: string
}
export class PaymentPreviewPrivate {
    static name: string
}
export abstract class MoviePreviewClass {
    static name: string
}
export class MoviePreviewPrivate {
    static name: string
}
export abstract class SocialPreviewClass {
    static name: string
}
export class SocialPreviewPrivate {
    static name: string
}
export abstract class SocialPreviewCommentClass {
    static name: string
}
export class SocialPreviewCommentPrivate {
    static name: string
}
export abstract class ActivationResponseClass {
    static name: string
}
export class ActivationResponsePrivate {
    static name: string
}
export abstract class AggregatorActivationClass {
    static name: string
}
export class AggregatorActivationPrivate {
    static name: string
}
export abstract class FilterSetClass {
    /* Fields of Unity.FilterSetClass */
    add: (self: FilterSet, filter: Filter) => void
    get_filter_by_id: (self: FilterSet, filter_id: string) => Filter | null
    get_filters: (self: FilterSet) => Filter[]
    static name: string
}
export class FilterSetPrivate {
    static name: string
}
export abstract class CategorySetClass {
    /* Fields of Unity.CategorySetClass */
    add: (self: CategorySet, category: Category) => void
    get_categories: (self: CategorySet) => Category[]
    static name: string
}
export class CategorySetPrivate {
    static name: string
}
export abstract class SchemaClass {
    /* Fields of Unity.SchemaClass */
    add_field: (self: Schema, name: string, schema: string, type: SchemaFieldType) => void
    get_fields: (self: Schema) => SchemaFieldInfo[]
    static name: string
}
export class SchemaPrivate {
    static name: string
}
export class SchemaFieldInfo {
    /* Fields of Unity.SchemaFieldInfo */
    name: string
    schema: string
    type: SchemaFieldType
    static name: string
}
export abstract class CancellableClass {
    /* Fields of Unity.CancellableClass */
    cancel: (self: Cancellable) => void
    is_cancelled: (self: Cancellable) => boolean
    get_gcancellable: (self: Cancellable) => Gio.Cancellable | null
    static name: string
}
export class CancellablePrivate {
    static name: string
}
export abstract class ScopeSearchBaseClass {
    /* Fields of Unity.ScopeSearchBaseClass */
    run: (self: ScopeSearchBase) => void
    run_async: (self: ScopeSearchBase, async_callback: ScopeSearchBaseCallback) => void
    set_search_context: (self: ScopeSearchBase, ctx: SearchContext) => void
    static name: string
}
export class ScopeSearchBasePrivate {
    static name: string
}
export abstract class ResultSetClass {
    /* Fields of Unity.ResultSetClass */
    add_result: (self: ResultSet, result: ScopeResult) => void
    add_result_from_variant: (self: ResultSet, variant: GLib.Variant) => void
    flush: (self: ResultSet) => void
    static name: string
}
export class ResultSetPrivate {
    static name: string
}
export abstract class AbstractPreviewClass {
    /* Fields of Unity.AbstractPreviewClass */
    serialize_as: (self: AbstractPreview, serialization_type: SerializationType) => Uint8Array[]
    static name: string
}
export class AbstractPreviewPrivate {
    static name: string
}
export abstract class ResultPreviewerClass {
    /* Fields of Unity.ResultPreviewerClass */
    run: (self: ResultPreviewer) => AbstractPreview | null
    run_async: (self: ResultPreviewer, async_callback: AbstractPreviewCallback) => void
    static name: string
}
export class ResultPreviewerPrivate {
    static name: string
}
export abstract class SearchMetadataClass {
    static name: string
}
export class SearchMetadataPrivate {
    static name: string
}
export abstract class GeoCoordinateClass {
    static name: string
}
export class GeoCoordinatePrivate {
    static name: string
}
export abstract class AbstractScopeClass {
    /* Fields of Unity.AbstractScopeClass */
    create_search_for_query: (self: AbstractScope, search_context: SearchContext) => ScopeSearchBase
    create_previewer: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata) => ResultPreviewer
    get_categories: (self: AbstractScope) => CategorySet
    get_filters: (self: AbstractScope) => FilterSet
    get_schema: (self: AbstractScope) => Schema
    get_search_hint: (self: AbstractScope) => string
    get_group_name: (self: AbstractScope) => string
    get_unique_name: (self: AbstractScope) => string
    activate: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata, action_id?: string | null) => ActivationResponse | null
    normalize_search_query: (self: AbstractScope, search_query: string) => string
    static name: string
}
export class AbstractScopePrivate {
    static name: string
}
export abstract class ScopeDBusConnectorClass {
    static name: string
}
export class ScopeDBusConnectorPrivate {
    static name: string
}
export abstract class DeprecatedScopeBaseClass {
    /* Fields of Unity.DeprecatedScopeBaseClass */
    create_impl: (self: DeprecatedScopeBase) => GObject.Object
    static name: string
}
export class DeprecatedScopeBasePrivate {
    static name: string
}
export abstract class DeprecatedScopeClass {
    /* Fields of Unity.DeprecatedScopeClass */
    preview_result: (self: DeprecatedScope, result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null) => void
    preview_result_finish: (self: DeprecatedScope, _res_: Gio.AsyncResult) => Preview | null
    activate_result: (self: DeprecatedScope, result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null) => void
    activate_result_finish: (self: DeprecatedScope, _res_: Gio.AsyncResult) => ActivationResponse | null
    static name: string
}
export class DeprecatedScopePrivate {
    static name: string
}
export abstract class AggregatorScopeClass {
    /* Fields of Unity.AggregatorScopeClass */
    category_index_for_scope_id: (self: AggregatorScope, scope_id: string) => number
    search: (self: AggregatorScope, scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback | null) => void
    search_finish: (self: AggregatorScope, _res_: Gio.AsyncResult) => void
    activate: (self: AggregatorScope, activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback | null) => void
    activate_finish: (self: AggregatorScope, _res_: Gio.AsyncResult) => ActivationResponse | null
    static name: string
}
export class AggregatorScopePrivate {
    static name: string
}
export abstract class MasterScopeClass {
    static name: string
}
export class MasterScopePrivate {
    static name: string
}
export abstract class SimpleScopeClass {
    static name: string
}
export class SimpleScopePrivate {
    static name: string
}
export abstract class ScopeLoaderClass {
    /* Fields of Unity.ScopeLoaderClass */
    get_scopes: (self: ScopeLoader, module_name: string, module_type?: string | null) => AbstractScope[]
    export_scopes: (self: ScopeLoader, scopes: AbstractScope[]) => void
    static name: string
}
export class ScopeLoaderPrivate {
    static name: string
}
export abstract class TrackMetadataClass {
    static name: string
}
export class TrackMetadataPrivate {
    static name: string
}
export abstract class PlaylistClass {
    static name: string
}
export class PlaylistPrivate {
    static name: string
}
export abstract class MusicPlayerClass {
    static name: string
}
export class MusicPlayerPrivate {
    static name: string
}
export class ScopeResult {
    /* Fields of Unity.ScopeResult */
    uri: string
    icon_hint: string
    category: number
    result_type: ResultType
    mimetype: string
    title: string
    comment: string
    dnd_uri: string
    metadata: GLib.HashTable | null
    static name: string
    /* Static methods and pseudo-constructors */
    static create(uri: string, icon_hint: string | null, category: number, result_type: ResultType, mimetype: string, title: string, comment: string, dnd_uri: string, metadata: GLib.HashTable): ScopeResult | null
    static create_from_variant(variant: GLib.Variant): ScopeResult | null
}
export class SearchContext {
    /* Fields of Unity.SearchContext */
    search_query: string
    search_type: SearchType
    filter_state: FilterSet
    search_metadata: SearchMetadata
    result_set: ResultSet
    cancellable: Cancellable
    /* Methods of Unity.SearchContext */
    set_search_metadata(metadata: SearchMetadata): void
    static name: string
    /* Static methods and pseudo-constructors */
    static create(search_query: string, search_type: SearchType, filter_state: FilterSet | null, metadata: GLib.HashTable | null, result_set: ResultSet, cancellable?: Cancellable | null): SearchContext | null
}
export class PlaylistDetails {
    /* Fields of Unity.PlaylistDetails */
    id: string
    name: string
    icon_name: string
    static name: string
}
export class ActivePlaylistContainer {
    /* Fields of Unity.ActivePlaylistContainer */
    valid: boolean
    details: PlaylistDetails
    static name: string
}