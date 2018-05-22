/**
 * WebKit2-4.0
 */

import * as Gjs from './Gjs'
import * as Soup from './Soup'
import * as Gio from './Gio'
import * as GObject from './GObject'
import * as GLib from './GLib'
import * as JavaScriptCore from './JavaScriptCore'
import * as Gtk from './Gtk'
import * as xlib from './xlib'
import * as Gdk from './Gdk'
import * as cairo from './cairo'
import * as Pango from './Pango'
import * as GdkPixbuf from './GdkPixbuf'
import * as GModule from './GModule'
import * as Atk from './Atk'
export enum AuthenticationScheme {
    DEFAULT,
    HTTP_BASIC,
    HTTP_DIGEST,
    HTML_FORM,
    NTLM,
    NEGOTIATE,
    CLIENT_CERTIFICATE_REQUESTED,
    SERVER_TRUST_EVALUATION_REQUESTED,
    UNKNOWN,
}
export enum CacheModel {
    DOCUMENT_VIEWER,
    WEB_BROWSER,
    DOCUMENT_BROWSER,
}
export enum ContextMenuAction {
    NO_ACTION,
    OPEN_LINK,
    OPEN_LINK_IN_NEW_WINDOW,
    DOWNLOAD_LINK_TO_DISK,
    COPY_LINK_TO_CLIPBOARD,
    OPEN_IMAGE_IN_NEW_WINDOW,
    DOWNLOAD_IMAGE_TO_DISK,
    COPY_IMAGE_TO_CLIPBOARD,
    COPY_IMAGE_URL_TO_CLIPBOARD,
    OPEN_FRAME_IN_NEW_WINDOW,
    GO_BACK,
    GO_FORWARD,
    STOP,
    RELOAD,
    COPY,
    CUT,
    PASTE,
    DELETE,
    SELECT_ALL,
    INPUT_METHODS,
    UNICODE,
    SPELLING_GUESS,
    NO_GUESSES_FOUND,
    IGNORE_SPELLING,
    LEARN_SPELLING,
    IGNORE_GRAMMAR,
    FONT_MENU,
    BOLD,
    ITALIC,
    UNDERLINE,
    OUTLINE,
    INSPECT_ELEMENT,
    OPEN_VIDEO_IN_NEW_WINDOW,
    OPEN_AUDIO_IN_NEW_WINDOW,
    COPY_VIDEO_LINK_TO_CLIPBOARD,
    COPY_AUDIO_LINK_TO_CLIPBOARD,
    TOGGLE_MEDIA_CONTROLS,
    TOGGLE_MEDIA_LOOP,
    ENTER_VIDEO_FULLSCREEN,
    MEDIA_PLAY,
    MEDIA_PAUSE,
    MEDIA_MUTE,
    DOWNLOAD_VIDEO_TO_DISK,
    DOWNLOAD_AUDIO_TO_DISK,
    CUSTOM,
}
export enum CookieAcceptPolicy {
    ALWAYS,
    NEVER,
    NO_THIRD_PARTY,
}
export enum CookiePersistentStorage {
    TEXT,
    SQLITE,
}
export enum CredentialPersistence {
    NONE,
    FOR_SESSION,
    PERMANENT,
}
export enum DownloadError {
    NETWORK,
    CANCELLED_BY_USER,
    DESTINATION,
}
export enum FaviconDatabaseError {
    NOT_INITIALIZED,
    FAVICON_NOT_FOUND,
    FAVICON_UNKNOWN,
}
export enum HardwareAccelerationPolicy {
    ON_DEMAND,
    ALWAYS,
    NEVER,
}
export enum InsecureContentEvent {
    RUN,
    DISPLAYED,
}
export enum JavascriptError {
    FAILED,
}
export enum LoadEvent {
    STARTED,
    REDIRECTED,
    COMMITTED,
    FINISHED,
}
export enum NavigationType {
    LINK_CLICKED,
    FORM_SUBMITTED,
    BACK_FORWARD,
    RELOAD,
    FORM_RESUBMITTED,
    OTHER,
}
export enum NetworkError {
    FAILED,
    TRANSPORT,
    UNKNOWN_PROTOCOL,
    CANCELLED,
    FILE_DOES_NOT_EXIST,
}
export enum NetworkProxyMode {
    DEFAULT,
    NO_PROXY,
    CUSTOM,
}
export enum PluginError {
    FAILED,
    CANNOT_FIND_PLUGIN,
    CANNOT_LOAD_PLUGIN,
    JAVA_UNAVAILABLE,
    CONNECTION_CANCELLED,
    WILL_HANDLE_LOAD,
}
export enum PolicyDecisionType {
    NAVIGATION_ACTION,
    NEW_WINDOW_ACTION,
    RESPONSE,
}
export enum PolicyError {
    FAILED,
    CANNOT_SHOW_MIME_TYPE,
    CANNOT_SHOW_URI,
    FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE,
    CANNOT_USE_RESTRICTED_PORT,
}
export enum PrintError {
    GENERAL,
    PRINTER_NOT_FOUND,
    INVALID_PAGE_RANGE,
}
export enum PrintOperationResponse {
    PRINT,
    CANCEL,
}
export enum ProcessModel {
    SHARED_SECONDARY_PROCESS,
    MULTIPLE_SECONDARY_PROCESSES,
}
export enum SaveMode {
    MHTML,
}
export enum ScriptDialogType {
    ALERT,
    CONFIRM,
    PROMPT,
    BEFORE_UNLOAD_CONFIRM,
}
export enum SnapshotError {
    CREATE,
}
export enum SnapshotRegion {
    VISIBLE,
    FULL_DOCUMENT,
}
export enum TLSErrorsPolicy {
    IGNORE,
    FAIL,
}
export enum UserContentInjectedFrames {
    ALL_FRAMES,
    TOP_FRAME,
}
export enum UserScriptInjectionTime {
    START,
    END,
}
export enum UserStyleLevel {
    USER,
    AUTHOR,
}
export enum WebProcessTerminationReason {
    CRASHED,
    EXCEEDED_MEMORY_LIMIT,
}
export enum EditorTypingAttributes {
    NONE,
    BOLD,
    ITALIC,
    UNDERLINE,
    STRIKETHROUGH,
}
export enum FindOptions {
    NONE,
    CASE_INSENSITIVE,
    AT_WORD_STARTS,
    TREAT_MEDIAL_CAPITAL_AS_WORD_START,
    BACKWARDS,
    WRAP_AROUND,
}
export enum HitTestResultContext {
    DOCUMENT,
    LINK,
    IMAGE,
    MEDIA,
    EDITABLE,
    SCROLLBAR,
    SELECTION,
}
export enum SnapshotOptions {
    NONE,
    INCLUDE_SELECTION_HIGHLIGHTING,
    TRANSPARENT_BACKGROUND,
}
export enum WebsiteDataTypes {
    MEMORY_CACHE,
    DISK_CACHE,
    OFFLINE_APPLICATION_CACHE,
    SESSION_STORAGE,
    LOCAL_STORAGE,
    WEBSQL_DATABASES,
    INDEXEDDB_DATABASES,
    PLUGIN_DATA,
    COOKIES,
    ALL,
}
export const EDITING_COMMAND_COPY:string
export const EDITING_COMMAND_CREATE_LINK:string
export const EDITING_COMMAND_CUT:string
export const EDITING_COMMAND_INSERT_IMAGE:string
export const EDITING_COMMAND_PASTE:string
export const EDITING_COMMAND_REDO:string
export const EDITING_COMMAND_SELECT_ALL:string
export const EDITING_COMMAND_UNDO:string
export const MAJOR_VERSION:number
export const MICRO_VERSION:number
export const MINOR_VERSION:number
export function download_error_quark(): GLib.Quark
export function favicon_database_error_quark(): GLib.Quark
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
export function javascript_error_quark(): GLib.Quark
export function network_error_quark(): GLib.Quark
export function plugin_error_quark(): GLib.Quark
export function policy_error_quark(): GLib.Quark
export function print_error_quark(): GLib.Quark
export function snapshot_error_quark(): GLib.Quark
export function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean
export function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean
export interface URISchemeRequestCallback {
    (request: URISchemeRequest): void
}
export class PermissionRequest {
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2.PermissionRequest */
    vfunc_allow?(): void
    vfunc_deny?(): void
    static name: string
}
export interface AuthenticationRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthenticationRequest {
    /* Fields of WebKit2.AuthenticationRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.AuthenticationRequest */
    authenticate(credential?: Credential | null): void
    can_save_credentials(): boolean
    cancel(): void
    get_host(): string
    get_port(): number
    get_proposed_credential(): Credential
    get_realm(): string
    get_scheme(): AuthenticationScheme
    is_for_proxy(): boolean
    is_retry(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.AuthenticationRequest */
    connect(sigName: "cancelled", callback: ((obj: AuthenticationRequest) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AuthenticationRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: AuthenticationRequest_ConstructProps)
}
export interface AutomationSession_ConstructProps extends GObject.Object_ConstructProps {
    id?:string
}
export class AutomationSession {
    /* Properties of WebKit2.AutomationSession */
    /* Fields of WebKit2.AutomationSession */
    parent:GObject.Object
    priv:AutomationSessionPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.AutomationSession */
    get_application_info(): ApplicationInfo
    get_id(): string
    set_application_info(info: ApplicationInfo): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.AutomationSession */
    connect(sigName: "create-web-view", callback: ((obj: AutomationSession) => WebView)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AutomationSession, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: AutomationSession_ConstructProps)
}
export interface BackForwardList_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackForwardList {
    /* Fields of WebKit2.BackForwardList */
    parent:GObject.Object
    priv:BackForwardListPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.BackForwardList */
    get_back_item(): BackForwardListItem | null
    get_back_list(): BackForwardListItem[]
    get_back_list_with_limit(limit: number): BackForwardListItem[]
    get_current_item(): BackForwardListItem | null
    get_forward_item(): BackForwardListItem | null
    get_forward_list(): BackForwardListItem[]
    get_forward_list_with_limit(limit: number): BackForwardListItem[]
    get_length(): number
    get_nth_item(index: number): BackForwardListItem | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.BackForwardList */
    connect(sigName: "changed", callback: ((obj: BackForwardList, item_added: BackForwardListItem | null, items_removed: object) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BackForwardList, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: BackForwardList_ConstructProps)
}
export interface BackForwardListItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class BackForwardListItem {
    /* Fields of WebKit2.BackForwardListItem */
    parent:GObject.InitiallyUnowned
    priv:BackForwardListItemPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of WebKit2.BackForwardListItem */
    get_original_uri(): string
    get_title(): string
    get_uri(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BackForwardListItem, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: BackForwardListItem_ConstructProps)
}
export interface ColorChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
    rgba?:Gdk.RGBA
}
export class ColorChooserRequest {
    /* Properties of WebKit2.ColorChooserRequest */
    rgba:Gdk.RGBA
    /* Fields of WebKit2.ColorChooserRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.ColorChooserRequest */
    cancel(): void
    finish(): void
    get_element_rectangle(): /* rect */ Gdk.Rectangle
    get_rgba(): /* rgba */ Gdk.RGBA
    set_rgba(rgba: Gdk.RGBA): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.ColorChooserRequest */
    connect(sigName: "finished", callback: ((obj: ColorChooserRequest) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::rgba", callback: ((obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: ColorChooserRequest_ConstructProps)
}
export interface ContextMenu_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContextMenu {
    /* Fields of WebKit2.ContextMenu */
    parent:GObject.Object
    priv:ContextMenuPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.ContextMenu */
    append(item: ContextMenuItem): void
    first(): ContextMenuItem
    get_item_at_position(position: number): ContextMenuItem
    get_items(): ContextMenuItem[]
    get_n_items(): number
    get_user_data(): GLib.Variant
    insert(item: ContextMenuItem, position: number): void
    last(): ContextMenuItem
    move_item(item: ContextMenuItem, position: number): void
    prepend(item: ContextMenuItem): void
    remove(item: ContextMenuItem): void
    remove_all(): void
    set_user_data(user_data: GLib.Variant): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ContextMenu, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: ContextMenu_ConstructProps)
    static new(): ContextMenu
    static new_with_items(items: ContextMenuItem[]): ContextMenu
}
export interface ContextMenuItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class ContextMenuItem {
    /* Fields of WebKit2.ContextMenuItem */
    parent:GObject.InitiallyUnowned
    priv:ContextMenuItemPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of WebKit2.ContextMenuItem */
    get_action(): Gtk.Action
    get_gaction(): Gio.Action
    get_stock_action(): ContextMenuAction
    get_submenu(): ContextMenu
    is_separator(): boolean
    set_submenu(submenu?: ContextMenu | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ContextMenuItem, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: ContextMenuItem_ConstructProps)
    static new(action: Gtk.Action): ContextMenuItem
    static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem
    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem
    static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem
    static new_separator(): ContextMenuItem
    static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem
}
export interface CookieManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class CookieManager {
    /* Fields of WebKit2.CookieManager */
    parent:GObject.Object
    priv:CookieManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.CookieManager */
    add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    add_cookie_finish(result: Gio.AsyncResult): boolean
    delete_all_cookies(): void
    delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    delete_cookie_finish(result: Gio.AsyncResult): boolean
    delete_cookies_for_domain(domain: string): void
    get_accept_policy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy
    get_cookies(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[]
    get_domains_with_cookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_domains_with_cookies_finish(result: Gio.AsyncResult): string[]
    set_accept_policy(policy: CookieAcceptPolicy): void
    set_persistent_storage(filename: string, storage: CookiePersistentStorage): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.CookieManager */
    connect(sigName: "changed", callback: ((obj: CookieManager) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CookieManager, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: CookieManager_ConstructProps)
}
export interface Download_ConstructProps extends GObject.Object_ConstructProps {
    allow_overwrite?:boolean
}
export class Download {
    /* Properties of WebKit2.Download */
    allow_overwrite:boolean
    readonly destination:string
    readonly estimated_progress:number
    readonly response:URIResponse
    /* Fields of WebKit2.Download */
    parent:GObject.Object
    priv:DownloadPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.Download */
    cancel(): void
    get_allow_overwrite(): boolean
    get_destination(): string
    get_elapsed_time(): number
    get_estimated_progress(): number
    get_received_data_length(): number
    get_request(): URIRequest
    get_response(): URIResponse
    get_web_view(): WebView
    set_allow_overwrite(allowed: boolean): void
    set_destination(uri: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of WebKit2.Download */
    vfunc_decide_destination?(suggested_filename: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.Download */
    connect(sigName: "created-destination", callback: ((obj: Download, destination: string) => void)): void
    connect(sigName: "decide-destination", callback: ((obj: Download, suggested_filename: string) => boolean)): void
    connect(sigName: "failed", callback: ((obj: Download, error: GLib.Error) => void)): void
    connect(sigName: "finished", callback: ((obj: Download) => void)): void
    connect(sigName: "received-data", callback: ((obj: Download, data_length: number) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::allow-overwrite", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::destination", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::estimated-progress", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::response", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Download_ConstructProps)
}
export interface EditorState_ConstructProps extends GObject.Object_ConstructProps {
}
export class EditorState {
    /* Properties of WebKit2.EditorState */
    readonly typing_attributes:number
    /* Fields of WebKit2.EditorState */
    parent:GObject.Object
    priv:EditorStatePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.EditorState */
    get_typing_attributes(): number
    is_copy_available(): boolean
    is_cut_available(): boolean
    is_paste_available(): boolean
    is_redo_available(): boolean
    is_undo_available(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EditorState, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::typing-attributes", callback: ((obj: EditorState, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: EditorState_ConstructProps)
}
export interface FaviconDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
export class FaviconDatabase {
    /* Fields of WebKit2.FaviconDatabase */
    parent:GObject.Object
    priv:FaviconDatabasePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.FaviconDatabase */
    clear(): void
    get_favicon(page_uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_favicon_finish(result: Gio.AsyncResult): cairo.Surface
    get_favicon_uri(page_uri: string): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.FaviconDatabase */
    connect(sigName: "favicon-changed", callback: ((obj: FaviconDatabase, page_uri: string, favicon_uri: string) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FaviconDatabase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: FaviconDatabase_ConstructProps)
}
export interface FileChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileChooserRequest {
    /* Properties of WebKit2.FileChooserRequest */
    readonly filter:Gtk.FileFilter
    readonly mime_types:string[]
    readonly select_multiple:boolean
    readonly selected_files:string[]
    /* Fields of WebKit2.FileChooserRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.FileChooserRequest */
    cancel(): void
    get_mime_types(): string[]
    get_mime_types_filter(): Gtk.FileFilter
    get_select_multiple(): boolean
    get_selected_files(): string[]
    select_files(files: string[]): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::filter", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::mime-types", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::select-multiple", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::selected-files", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: FileChooserRequest_ConstructProps)
}
export interface FindController_ConstructProps extends GObject.Object_ConstructProps {
    web_view?:WebView
}
export class FindController {
    /* Properties of WebKit2.FindController */
    readonly max_match_count:number
    readonly options:FindOptions
    readonly text:string
    /* Fields of WebKit2.FindController */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.FindController */
    count_matches(search_text: string, find_options: number, max_match_count: number): void
    get_max_match_count(): number
    get_options(): number
    get_search_text(): string
    get_web_view(): WebView
    search(search_text: string, find_options: number, max_match_count: number): void
    search_finish(): void
    search_next(): void
    search_previous(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.FindController */
    connect(sigName: "counted-matches", callback: ((obj: FindController, match_count: number) => void)): void
    connect(sigName: "failed-to-find-text", callback: ((obj: FindController) => void)): void
    connect(sigName: "found-text", callback: ((obj: FindController, match_count: number) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::max-match-count", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::options", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::text", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: FindController_ConstructProps)
}
export interface FormSubmissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class FormSubmissionRequest {
    /* Fields of WebKit2.FormSubmissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.FormSubmissionRequest */
    get_text_fields(): GLib.HashTable
    list_text_fields(): [ /* returnType */ boolean, /* field_names */ string[] | null, /* field_values */ string[] | null ]
    submit(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FormSubmissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: FormSubmissionRequest_ConstructProps)
}
export interface GeolocationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeolocationPermissionRequest {
    /* Fields of WebKit2.GeolocationPermissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GeolocationPermissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: GeolocationPermissionRequest_ConstructProps)
}
export interface HitTestResult_ConstructProps extends GObject.Object_ConstructProps {
    context?:number
    image_uri?:string
    link_label?:string
    link_title?:string
    link_uri?:string
    media_uri?:string
}
export class HitTestResult {
    /* Properties of WebKit2.HitTestResult */
    /* Fields of WebKit2.HitTestResult */
    parent:GObject.Object
    priv:HitTestResultPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.HitTestResult */
    context_is_editable(): boolean
    context_is_image(): boolean
    context_is_link(): boolean
    context_is_media(): boolean
    context_is_scrollbar(): boolean
    context_is_selection(): boolean
    get_context(): number
    get_image_uri(): string
    get_link_label(): string
    get_link_title(): string
    get_link_uri(): string
    get_media_uri(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HitTestResult, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: HitTestResult_ConstructProps)
}
export interface InstallMissingMediaPluginsPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class InstallMissingMediaPluginsPermissionRequest {
    /* Fields of WebKit2.InstallMissingMediaPluginsPermissionRequest */
    parent:GObject.Object
    priv:InstallMissingMediaPluginsPermissionRequestPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.InstallMissingMediaPluginsPermissionRequest */
    get_description(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InstallMissingMediaPluginsPermissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps)
}
export interface NavigationPolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}
export class NavigationPolicyDecision {
    /* Properties of WebKit2.NavigationPolicyDecision */
    readonly frame_name:string
    readonly modifiers:number
    readonly mouse_button:number
    readonly navigation_action:NavigationAction
    readonly navigation_type:NavigationType
    readonly request:URIRequest
    /* Fields of WebKit2.NavigationPolicyDecision */
    parent:PolicyDecision
    /* Fields of WebKit2.PolicyDecision */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.NavigationPolicyDecision */
    get_frame_name(): string
    get_modifiers(): number
    get_mouse_button(): number
    get_navigation_action(): NavigationAction
    get_navigation_type(): NavigationType
    get_request(): URIRequest
    /* Methods of WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::frame-name", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::modifiers", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::mouse-button", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::navigation-action", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::navigation-type", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::request", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: NavigationPolicyDecision_ConstructProps)
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notification {
    /* Properties of WebKit2.Notification */
    readonly body:string
    readonly id:number
    readonly tag:string
    readonly title:string
    /* Fields of WebKit2.Notification */
    parent:GObject.Object
    priv:NotificationPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.Notification */
    clicked(): void
    close(): void
    get_body(): string
    get_id(): number
    get_tag(): string
    get_title(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.Notification */
    connect(sigName: "clicked", callback: ((obj: Notification) => void)): void
    connect(sigName: "closed", callback: ((obj: Notification) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::body", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::id", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::tag", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::title", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Notification_ConstructProps)
}
export interface NotificationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class NotificationPermissionRequest {
    /* Fields of WebKit2.NotificationPermissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NotificationPermissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: NotificationPermissionRequest_ConstructProps)
}
export interface OptionMenu_ConstructProps extends GObject.Object_ConstructProps {
}
export class OptionMenu {
    /* Fields of WebKit2.OptionMenu */
    parent:GObject.Object
    priv:OptionMenuPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.OptionMenu */
    activate_item(index: number): void
    close(): void
    get_item(index: number): OptionMenuItem
    get_n_items(): number
    select_item(index: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.OptionMenu */
    connect(sigName: "close", callback: ((obj: OptionMenu) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: OptionMenu, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: OptionMenu_ConstructProps)
}
export interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plugin {
    /* Fields of WebKit2.Plugin */
    parent:GObject.Object
    priv:PluginPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.Plugin */
    get_description(): string
    get_mime_info_list(): MimeInfo[]
    get_name(): string
    get_path(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Plugin, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
}
export interface PolicyDecision_ConstructProps extends GObject.Object_ConstructProps {
}
export class PolicyDecision {
    /* Fields of WebKit2.PolicyDecision */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: PolicyDecision_ConstructProps)
}
export interface PrintCustomWidget_ConstructProps extends GObject.Object_ConstructProps {
    title?:string
    widget?:Gtk.Widget
}
export class PrintCustomWidget {
    /* Properties of WebKit2.PrintCustomWidget */
    /* Fields of WebKit2.PrintCustomWidget */
    parent:GObject.Object
    priv:PrintCustomWidgetPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.PrintCustomWidget */
    get_title(): string
    get_widget(): Gtk.Widget
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of WebKit2.PrintCustomWidget */
    vfunc_apply?(widget: Gtk.Widget): void
    vfunc_update?(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.PrintCustomWidget */
    connect(sigName: "apply", callback: ((obj: PrintCustomWidget) => void)): void
    connect(sigName: "update", callback: ((obj: PrintCustomWidget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PrintCustomWidget, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: PrintCustomWidget_ConstructProps)
    static new(widget: Gtk.Widget, title: string): PrintCustomWidget
}
export interface PrintOperation_ConstructProps extends GObject.Object_ConstructProps {
    page_setup?:Gtk.PageSetup
    print_settings?:Gtk.PrintSettings
    web_view?:WebView
}
export class PrintOperation {
    /* Properties of WebKit2.PrintOperation */
    page_setup:Gtk.PageSetup
    print_settings:Gtk.PrintSettings
    /* Fields of WebKit2.PrintOperation */
    parent:GObject.Object
    priv:PrintOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.PrintOperation */
    get_page_setup(): Gtk.PageSetup
    get_print_settings(): Gtk.PrintSettings
    print(): void
    run_dialog(parent?: Gtk.Window | null): PrintOperationResponse
    set_page_setup(page_setup: Gtk.PageSetup): void
    set_print_settings(print_settings: Gtk.PrintSettings): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.PrintOperation */
    connect(sigName: "create-custom-widget", callback: ((obj: PrintOperation) => PrintCustomWidget)): void
    connect(sigName: "failed", callback: ((obj: PrintOperation, error: GLib.Error) => void)): void
    connect(sigName: "finished", callback: ((obj: PrintOperation) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::page-setup", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::print-settings", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: PrintOperation_ConstructProps)
    static new(web_view: WebView): PrintOperation
}
export interface ResponsePolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}
export class ResponsePolicyDecision {
    /* Properties of WebKit2.ResponsePolicyDecision */
    readonly request:URIRequest
    readonly response:URIResponse
    /* Fields of WebKit2.ResponsePolicyDecision */
    parent:PolicyDecision
    /* Fields of WebKit2.PolicyDecision */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.ResponsePolicyDecision */
    get_request(): URIRequest
    get_response(): URIResponse
    is_mime_type_supported(): boolean
    /* Methods of WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::request", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::response", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: ResponsePolicyDecision_ConstructProps)
}
export interface SecurityManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class SecurityManager {
    /* Fields of WebKit2.SecurityManager */
    parent:GObject.Object
    priv:SecurityManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.SecurityManager */
    register_uri_scheme_as_cors_enabled(scheme: string): void
    register_uri_scheme_as_display_isolated(scheme: string): void
    register_uri_scheme_as_empty_document(scheme: string): void
    register_uri_scheme_as_local(scheme: string): void
    register_uri_scheme_as_no_access(scheme: string): void
    register_uri_scheme_as_secure(scheme: string): void
    uri_scheme_is_cors_enabled(scheme: string): boolean
    uri_scheme_is_display_isolated(scheme: string): boolean
    uri_scheme_is_empty_document(scheme: string): boolean
    uri_scheme_is_local(scheme: string): boolean
    uri_scheme_is_no_access(scheme: string): boolean
    uri_scheme_is_secure(scheme: string): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SecurityManager, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: SecurityManager_ConstructProps)
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    allow_file_access_from_file_urls?:boolean
    allow_modal_dialogs?:boolean
    allow_universal_access_from_file_urls?:boolean
    auto_load_images?:boolean
    cursive_font_family?:string
    default_charset?:string
    default_font_family?:string
    default_font_size?:number
    default_monospace_font_size?:number
    draw_compositing_indicators?:boolean
    enable_accelerated_2d_canvas?:boolean
    enable_caret_browsing?:boolean
    enable_developer_extras?:boolean
    enable_dns_prefetching?:boolean
    enable_encrypted_media?:boolean
    enable_frame_flattening?:boolean
    enable_fullscreen?:boolean
    enable_html5_database?:boolean
    enable_html5_local_storage?:boolean
    enable_hyperlink_auditing?:boolean
    enable_java?:boolean
    enable_javascript?:boolean
    enable_media_stream?:boolean
    enable_mediasource?:boolean
    enable_offline_web_application_cache?:boolean
    enable_page_cache?:boolean
    enable_plugins?:boolean
    enable_private_browsing?:boolean
    enable_resizable_text_areas?:boolean
    enable_site_specific_quirks?:boolean
    enable_smooth_scrolling?:boolean
    enable_spatial_navigation?:boolean
    enable_tabs_to_links?:boolean
    enable_webaudio?:boolean
    enable_webgl?:boolean
    enable_write_console_messages_to_stdout?:boolean
    enable_xss_auditor?:boolean
    fantasy_font_family?:string
    hardware_acceleration_policy?:HardwareAccelerationPolicy
    javascript_can_access_clipboard?:boolean
    javascript_can_open_windows_automatically?:boolean
    load_icons_ignoring_image_load_setting?:boolean
    media_playback_allows_inline?:boolean
    media_playback_requires_user_gesture?:boolean
    minimum_font_size?:number
    monospace_font_family?:string
    pictograph_font_family?:string
    print_backgrounds?:boolean
    sans_serif_font_family?:string
    serif_font_family?:string
    user_agent?:string
    zoom_text_only?:boolean
}
export class Settings {
    /* Properties of WebKit2.Settings */
    allow_file_access_from_file_urls:boolean
    allow_modal_dialogs:boolean
    allow_universal_access_from_file_urls:boolean
    auto_load_images:boolean
    cursive_font_family:string
    default_charset:string
    default_font_family:string
    default_font_size:number
    default_monospace_font_size:number
    draw_compositing_indicators:boolean
    enable_accelerated_2d_canvas:boolean
    enable_caret_browsing:boolean
    enable_developer_extras:boolean
    enable_dns_prefetching:boolean
    enable_encrypted_media:boolean
    enable_frame_flattening:boolean
    enable_fullscreen:boolean
    enable_html5_database:boolean
    enable_html5_local_storage:boolean
    enable_hyperlink_auditing:boolean
    enable_java:boolean
    enable_javascript:boolean
    enable_media_stream:boolean
    enable_mediasource:boolean
    enable_offline_web_application_cache:boolean
    enable_page_cache:boolean
    enable_plugins:boolean
    enable_private_browsing:boolean
    enable_resizable_text_areas:boolean
    enable_site_specific_quirks:boolean
    enable_smooth_scrolling:boolean
    enable_spatial_navigation:boolean
    enable_tabs_to_links:boolean
    enable_webaudio:boolean
    enable_webgl:boolean
    enable_write_console_messages_to_stdout:boolean
    enable_xss_auditor:boolean
    fantasy_font_family:string
    hardware_acceleration_policy:HardwareAccelerationPolicy
    javascript_can_access_clipboard:boolean
    javascript_can_open_windows_automatically:boolean
    load_icons_ignoring_image_load_setting:boolean
    media_playback_allows_inline:boolean
    media_playback_requires_user_gesture:boolean
    minimum_font_size:number
    monospace_font_family:string
    pictograph_font_family:string
    print_backgrounds:boolean
    sans_serif_font_family:string
    serif_font_family:string
    user_agent:string
    zoom_text_only:boolean
    /* Fields of WebKit2.Settings */
    parent_instance:GObject.Object
    priv:SettingsPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.Settings */
    get_allow_file_access_from_file_urls(): boolean
    get_allow_modal_dialogs(): boolean
    get_allow_universal_access_from_file_urls(): boolean
    get_auto_load_images(): boolean
    get_cursive_font_family(): string
    get_default_charset(): string
    get_default_font_family(): string
    get_default_font_size(): number
    get_default_monospace_font_size(): number
    get_draw_compositing_indicators(): boolean
    get_enable_accelerated_2d_canvas(): boolean
    get_enable_caret_browsing(): boolean
    get_enable_developer_extras(): boolean
    get_enable_dns_prefetching(): boolean
    get_enable_encrypted_media(): boolean
    get_enable_frame_flattening(): boolean
    get_enable_fullscreen(): boolean
    get_enable_html5_database(): boolean
    get_enable_html5_local_storage(): boolean
    get_enable_hyperlink_auditing(): boolean
    get_enable_java(): boolean
    get_enable_javascript(): boolean
    get_enable_media_stream(): boolean
    get_enable_mediasource(): boolean
    get_enable_offline_web_application_cache(): boolean
    get_enable_page_cache(): boolean
    get_enable_plugins(): boolean
    get_enable_private_browsing(): boolean
    get_enable_resizable_text_areas(): boolean
    get_enable_site_specific_quirks(): boolean
    get_enable_smooth_scrolling(): boolean
    get_enable_spatial_navigation(): boolean
    get_enable_tabs_to_links(): boolean
    get_enable_webaudio(): boolean
    get_enable_webgl(): boolean
    get_enable_write_console_messages_to_stdout(): boolean
    get_enable_xss_auditor(): boolean
    get_fantasy_font_family(): string
    get_hardware_acceleration_policy(): HardwareAccelerationPolicy
    get_javascript_can_access_clipboard(): boolean
    get_javascript_can_open_windows_automatically(): boolean
    get_load_icons_ignoring_image_load_setting(): boolean
    get_media_playback_allows_inline(): boolean
    get_media_playback_requires_user_gesture(): boolean
    get_minimum_font_size(): number
    get_monospace_font_family(): string
    get_pictograph_font_family(): string
    get_print_backgrounds(): boolean
    get_sans_serif_font_family(): string
    get_serif_font_family(): string
    get_user_agent(): string
    get_zoom_text_only(): boolean
    set_allow_file_access_from_file_urls(allowed: boolean): void
    set_allow_modal_dialogs(allowed: boolean): void
    set_allow_universal_access_from_file_urls(allowed: boolean): void
    set_auto_load_images(enabled: boolean): void
    set_cursive_font_family(cursive_font_family: string): void
    set_default_charset(default_charset: string): void
    set_default_font_family(default_font_family: string): void
    set_default_font_size(font_size: number): void
    set_default_monospace_font_size(font_size: number): void
    set_draw_compositing_indicators(enabled: boolean): void
    set_enable_accelerated_2d_canvas(enabled: boolean): void
    set_enable_caret_browsing(enabled: boolean): void
    set_enable_developer_extras(enabled: boolean): void
    set_enable_dns_prefetching(enabled: boolean): void
    set_enable_encrypted_media(enabled: boolean): void
    set_enable_frame_flattening(enabled: boolean): void
    set_enable_fullscreen(enabled: boolean): void
    set_enable_html5_database(enabled: boolean): void
    set_enable_html5_local_storage(enabled: boolean): void
    set_enable_hyperlink_auditing(enabled: boolean): void
    set_enable_java(enabled: boolean): void
    set_enable_javascript(enabled: boolean): void
    set_enable_media_stream(enabled: boolean): void
    set_enable_mediasource(enabled: boolean): void
    set_enable_offline_web_application_cache(enabled: boolean): void
    set_enable_page_cache(enabled: boolean): void
    set_enable_plugins(enabled: boolean): void
    set_enable_private_browsing(enabled: boolean): void
    set_enable_resizable_text_areas(enabled: boolean): void
    set_enable_site_specific_quirks(enabled: boolean): void
    set_enable_smooth_scrolling(enabled: boolean): void
    set_enable_spatial_navigation(enabled: boolean): void
    set_enable_tabs_to_links(enabled: boolean): void
    set_enable_webaudio(enabled: boolean): void
    set_enable_webgl(enabled: boolean): void
    set_enable_write_console_messages_to_stdout(enabled: boolean): void
    set_enable_xss_auditor(enabled: boolean): void
    set_fantasy_font_family(fantasy_font_family: string): void
    set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void
    set_javascript_can_access_clipboard(enabled: boolean): void
    set_javascript_can_open_windows_automatically(enabled: boolean): void
    set_load_icons_ignoring_image_load_setting(enabled: boolean): void
    set_media_playback_allows_inline(enabled: boolean): void
    set_media_playback_requires_user_gesture(enabled: boolean): void
    set_minimum_font_size(font_size: number): void
    set_monospace_font_family(monospace_font_family: string): void
    set_pictograph_font_family(pictograph_font_family: string): void
    set_print_backgrounds(print_backgrounds: boolean): void
    set_sans_serif_font_family(sans_serif_font_family: string): void
    set_serif_font_family(serif_font_family: string): void
    set_user_agent(user_agent?: string | null): void
    set_user_agent_with_application_details(application_name?: string | null, application_version?: string | null): void
    set_zoom_text_only(zoom_text_only: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::allow-file-access-from-file-urls", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::allow-modal-dialogs", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::allow-universal-access-from-file-urls", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::auto-load-images", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::cursive-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::default-charset", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::default-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::default-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::default-monospace-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::draw-compositing-indicators", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-accelerated-2d-canvas", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-caret-browsing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-developer-extras", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-dns-prefetching", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-encrypted-media", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-frame-flattening", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-fullscreen", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-html5-database", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-html5-local-storage", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-hyperlink-auditing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-java", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-javascript", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-media-stream", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-mediasource", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-offline-web-application-cache", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-page-cache", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-plugins", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-private-browsing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-resizable-text-areas", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-site-specific-quirks", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-smooth-scrolling", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-spatial-navigation", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-tabs-to-links", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-webaudio", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-webgl", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::enable-xss-auditor", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::fantasy-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::hardware-acceleration-policy", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::javascript-can-access-clipboard", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::javascript-can-open-windows-automatically", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::load-icons-ignoring-image-load-setting", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::media-playback-allows-inline", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::media-playback-requires-user-gesture", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::minimum-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::monospace-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::pictograph-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::print-backgrounds", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::sans-serif-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::serif-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::user-agent", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::zoom-text-only", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    static new(): Settings
    static font_size_to_pixels(points: number): number
    static font_size_to_points(pixels: number): number
}
export interface URIRequest_ConstructProps extends GObject.Object_ConstructProps {
    uri?:string
}
export class URIRequest {
    /* Properties of WebKit2.URIRequest */
    uri:string
    /* Fields of WebKit2.URIRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.URIRequest */
    get_http_headers(): Soup.MessageHeaders
    get_http_method(): string
    get_uri(): string
    set_uri(uri: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: URIRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::uri", callback: ((obj: URIRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: URIRequest_ConstructProps)
    static new(uri: string): URIRequest
}
export interface URIResponse_ConstructProps extends GObject.Object_ConstructProps {
}
export class URIResponse {
    /* Properties of WebKit2.URIResponse */
    readonly content_length:number
    readonly http_headers:Soup.MessageHeaders
    readonly mime_type:string
    readonly status_code:number
    readonly suggested_filename:string
    readonly uri:string
    /* Fields of WebKit2.URIResponse */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.URIResponse */
    get_content_length(): number
    get_http_headers(): Soup.MessageHeaders
    get_mime_type(): string
    get_status_code(): number
    get_suggested_filename(): string
    get_uri(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::content-length", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::http-headers", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::mime-type", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::status-code", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::suggested-filename", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::uri", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: URIResponse_ConstructProps)
}
export interface URISchemeRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class URISchemeRequest {
    /* Fields of WebKit2.URISchemeRequest */
    parent:GObject.Object
    priv:URISchemeRequestPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.URISchemeRequest */
    finish(stream: Gio.InputStream, stream_length: number, mime_type?: string | null): void
    finish_error(error: GLib.Error): void
    get_path(): string
    get_scheme(): string
    get_uri(): string
    get_web_view(): WebView
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: URISchemeRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: URISchemeRequest_ConstructProps)
}
export interface UserContentManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserContentManager {
    /* Fields of WebKit2.UserContentManager */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.UserContentManager */
    add_script(script: UserScript): void
    add_style_sheet(stylesheet: UserStyleSheet): void
    register_script_message_handler(name: string): boolean
    remove_all_scripts(): void
    remove_all_style_sheets(): void
    unregister_script_message_handler(name: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.UserContentManager */
    connect(sigName: "script-message-received", callback: ((obj: UserContentManager, js_result: JavascriptResult) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UserContentManager, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: UserContentManager_ConstructProps)
    static new(): UserContentManager
}
export interface UserMediaPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserMediaPermissionRequest {
    /* Properties of WebKit2.UserMediaPermissionRequest */
    readonly is_for_audio_device:boolean
    readonly is_for_video_device:boolean
    /* Fields of WebKit2.UserMediaPermissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::is-for-audio-device", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::is-for-video-device", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: UserMediaPermissionRequest_ConstructProps)
}
export interface WebContext_ConstructProps extends GObject.Object_ConstructProps {
    local_storage_directory?:string
    website_data_manager?:WebsiteDataManager
}
export class WebContext {
    /* Properties of WebKit2.WebContext */
    /* Fields of WebKit2.WebContext */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.WebContext */
    allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void
    clear_cache(): void
    download_uri(uri: string): Download
    get_cache_model(): CacheModel
    get_cookie_manager(): CookieManager
    get_favicon_database(): FaviconDatabase
    get_favicon_database_directory(): string
    get_plugins(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_plugins_finish(result: Gio.AsyncResult): Plugin[]
    get_process_model(): ProcessModel
    get_security_manager(): SecurityManager
    get_spell_checking_enabled(): boolean
    get_spell_checking_languages(): string[]
    get_tls_errors_policy(): TLSErrorsPolicy
    get_web_process_count_limit(): number
    get_website_data_manager(): WebsiteDataManager
    initialize_notification_permissions(allowed_origins: SecurityOrigin[], disallowed_origins: SecurityOrigin[]): void
    is_automation_allowed(): boolean
    is_ephemeral(): boolean
    prefetch_dns(hostname: string): void
    register_uri_scheme(scheme: string, callback: URISchemeRequestCallback): void
    set_additional_plugins_directory(directory: string): void
    set_automation_allowed(allowed: boolean): void
    set_cache_model(cache_model: CacheModel): void
    set_disk_cache_directory(directory: string): void
    set_favicon_database_directory(path?: string | null): void
    set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings?: NetworkProxySettings | null): void
    set_preferred_languages(languages?: string[] | null): void
    set_process_model(process_model: ProcessModel): void
    set_spell_checking_enabled(enabled: boolean): void
    set_spell_checking_languages(languages: string[]): void
    set_tls_errors_policy(policy: TLSErrorsPolicy): void
    set_web_extensions_directory(directory: string): void
    set_web_extensions_initialization_user_data(user_data: GLib.Variant): void
    set_web_process_count_limit(limit: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of WebKit2.WebContext */
    vfunc_automation_started?(session: AutomationSession): void
    vfunc_download_started?(download: Download): void
    vfunc_initialize_notification_permissions?(): void
    vfunc_initialize_web_extensions?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebContext */
    connect(sigName: "automation-started", callback: ((obj: WebContext, session: AutomationSession) => void)): void
    connect(sigName: "download-started", callback: ((obj: WebContext, download: Download) => void)): void
    connect(sigName: "initialize-notification-permissions", callback: ((obj: WebContext) => void)): void
    connect(sigName: "initialize-web-extensions", callback: ((obj: WebContext) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebContext, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WebContext_ConstructProps)
    static new(): WebContext
    static new_ephemeral(): WebContext
    static new_with_website_data_manager(manager: WebsiteDataManager): WebContext
    static get_default(): WebContext
}
export interface WebInspector_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebInspector {
    /* Properties of WebKit2.WebInspector */
    readonly attached_height:number
    readonly can_attach:boolean
    readonly inspected_uri:string
    /* Fields of WebKit2.WebInspector */
    parent:GObject.Object
    priv:WebInspectorPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.WebInspector */
    attach(): void
    close(): void
    detach(): void
    get_attached_height(): number
    get_can_attach(): boolean
    get_inspected_uri(): string
    get_web_view(): WebViewBase
    is_attached(): boolean
    show(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebInspector */
    connect(sigName: "attach", callback: ((obj: WebInspector) => boolean)): void
    connect(sigName: "bring-to-front", callback: ((obj: WebInspector) => boolean)): void
    connect(sigName: "closed", callback: ((obj: WebInspector) => void)): void
    connect(sigName: "detach", callback: ((obj: WebInspector) => boolean)): void
    connect(sigName: "open-window", callback: ((obj: WebInspector) => boolean)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::attached-height", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::can-attach", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::inspected-uri", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WebInspector_ConstructProps)
}
export interface WebResource_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebResource {
    /* Properties of WebKit2.WebResource */
    readonly response:URIResponse
    readonly uri:string
    /* Fields of WebKit2.WebResource */
    parent:GObject.Object
    priv:WebResourcePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.WebResource */
    get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_data_finish(result: Gio.AsyncResult): Gjs.byteArray.ByteArray
    get_response(): URIResponse
    get_uri(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebResource */
    connect(sigName: "failed", callback: ((obj: WebResource, error: GLib.Error) => void)): void
    connect(sigName: "failed-with-tls-errors", callback: ((obj: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void)): void
    connect(sigName: "finished", callback: ((obj: WebResource) => void)): void
    connect(sigName: "received-data", callback: ((obj: WebResource, data_length: number) => void)): void
    connect(sigName: "sent-request", callback: ((obj: WebResource, request: URIRequest, redirected_response: URIResponse) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::response", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::uri", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WebResource_ConstructProps)
}
export interface WebView_ConstructProps extends WebViewBase_ConstructProps {
    editable?:boolean
    is_controlled_by_automation?:boolean
    is_ephemeral?:boolean
    related_view?:WebView
    settings?:Settings
    user_content_manager?:UserContentManager
    web_context?:WebContext
    zoom_level?:number
}
export class WebView {
    /* Properties of WebKit2.WebView */
    editable:boolean
    readonly estimated_load_progress:number
    readonly favicon:object
    readonly is_loading:boolean
    readonly is_playing_audio:boolean
    settings:Settings
    readonly title:string
    readonly uri:string
    zoom_level:number
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Fields of WebKit2.WebView */
    /* Fields of WebKit2.WebViewBase */
    parentInstance:Gtk.Container
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of WebKit2.WebView */
    can_execute_editing_command(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean
    can_go_back(): boolean
    can_go_forward(): boolean
    can_show_mime_type(mime_type: string): boolean
    download_uri(uri: string): Download
    execute_editing_command(command: string): void
    execute_editing_command_with_argument(command: string, argument: string): void
    get_back_forward_list(): BackForwardList
    get_background_color(): /* rgba */ Gdk.RGBA
    get_context(): WebContext
    get_custom_charset(): string
    get_editor_state(): EditorState
    get_estimated_load_progress(): number
    get_favicon(): cairo.Surface
    get_find_controller(): FindController
    get_inspector(): WebInspector
    get_javascript_global_context(): JavaScriptCore.GlobalContext
    get_main_resource(): WebResource
    get_page_id(): number
    get_session_state(): WebViewSessionState
    get_settings(): Settings
    get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface
    get_title(): string
    get_tls_info(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    get_uri(): string
    get_user_content_manager(): UserContentManager
    get_website_data_manager(): WebsiteDataManager
    get_window_properties(): WindowProperties
    get_zoom_level(): number
    go_back(): void
    go_forward(): void
    go_to_back_forward_list_item(list_item: BackForwardListItem): void
    is_controlled_by_automation(): boolean
    is_editable(): boolean
    is_ephemeral(): boolean
    load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void
    load_bytes(bytes: Gjs.byteArray.ByteArray, mime_type?: string | null, encoding?: string | null, base_uri?: string | null): void
    load_html(content: string, base_uri?: string | null): void
    load_plain_text(plain_text: string): void
    load_request(request: URIRequest): void
    load_uri(uri: string): void
    reload(): void
    reload_bypass_cache(): void
    restore_session_state(state: WebViewSessionState): void
    run_javascript(script: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    run_javascript_finish(result: Gio.AsyncResult): JavascriptResult
    run_javascript_from_gresource(resource: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult
    save(save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): Gio.InputStream
    save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    save_to_file_finish(result: Gio.AsyncResult): boolean
    set_background_color(rgba: Gdk.RGBA): void
    set_custom_charset(charset?: string | null): void
    set_editable(editable: boolean): void
    set_settings(settings: Settings): void
    set_zoom_level(zoom_level: number): void
    stop_loading(): void
    try_close(): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    get_border_width(): number
    get_children(): Gtk.Widget[]
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle, intersection?: Gdk.Rectangle | null): boolean
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: object): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: object): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of WebKit2.WebView */
    vfunc_authenticate?(request: AuthenticationRequest): boolean
    vfunc_close?(): void
    vfunc_context_menu?(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean
    vfunc_context_menu_dismissed?(): void
    vfunc_decide_policy?(decision: PolicyDecision, type: PolicyDecisionType): boolean
    vfunc_enter_fullscreen?(): boolean
    vfunc_insecure_content_detected?(event: InsecureContentEvent): void
    vfunc_leave_fullscreen?(): boolean
    vfunc_load_changed?(load_event: LoadEvent): void
    vfunc_load_failed?(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean
    vfunc_load_failed_with_tls_errors?(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_mouse_target_changed?(hit_test_result: HitTestResult, modifiers: number): void
    vfunc_permission_request?(permission_request: PermissionRequest): boolean
    vfunc_print?(print_operation: PrintOperation): boolean
    vfunc_ready_to_show?(): void
    vfunc_resource_load_started?(resource: WebResource, request: URIRequest): void
    vfunc_run_as_modal?(): void
    vfunc_run_color_chooser?(request: ColorChooserRequest): boolean
    vfunc_run_file_chooser?(request: FileChooserRequest): boolean
    vfunc_script_dialog?(dialog: ScriptDialog): boolean
    vfunc_show_notification?(notification: Notification): boolean
    vfunc_show_option_menu?(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean
    vfunc_submit_form?(request: FormSubmissionRequest): void
    vfunc_web_process_crashed?(): boolean
    vfunc_web_process_terminated?(reason: WebProcessTerminationReason): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebView */
    connect(sigName: "authenticate", callback: ((obj: WebView, request: AuthenticationRequest) => boolean)): void
    connect(sigName: "close", callback: ((obj: WebView) => void)): void
    connect(sigName: "context-menu", callback: ((obj: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult) => boolean)): void
    connect(sigName: "context-menu-dismissed", callback: ((obj: WebView) => void)): void
    connect(sigName: "create", callback: ((obj: WebView, navigation_action: NavigationAction) => Gtk.Widget)): void
    connect(sigName: "decide-policy", callback: ((obj: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean)): void
    connect(sigName: "enter-fullscreen", callback: ((obj: WebView) => boolean)): void
    connect(sigName: "insecure-content-detected", callback: ((obj: WebView, event: InsecureContentEvent) => void)): void
    connect(sigName: "leave-fullscreen", callback: ((obj: WebView) => boolean)): void
    connect(sigName: "load-changed", callback: ((obj: WebView, load_event: LoadEvent) => void)): void
    connect(sigName: "load-failed", callback: ((obj: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): void
    connect(sigName: "load-failed-with-tls-errors", callback: ((obj: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): void
    connect(sigName: "mouse-target-changed", callback: ((obj: WebView, hit_test_result: HitTestResult, modifiers: number) => void)): void
    connect(sigName: "permission-request", callback: ((obj: WebView, request: PermissionRequest) => boolean)): void
    connect(sigName: "print", callback: ((obj: WebView, print_operation: PrintOperation) => boolean)): void
    connect(sigName: "ready-to-show", callback: ((obj: WebView) => void)): void
    connect(sigName: "resource-load-started", callback: ((obj: WebView, resource: WebResource, request: URIRequest) => void)): void
    connect(sigName: "run-as-modal", callback: ((obj: WebView) => void)): void
    connect(sigName: "run-color-chooser", callback: ((obj: WebView, request: ColorChooserRequest) => boolean)): void
    connect(sigName: "run-file-chooser", callback: ((obj: WebView, request: FileChooserRequest) => boolean)): void
    connect(sigName: "script-dialog", callback: ((obj: WebView, dialog: ScriptDialog) => boolean)): void
    connect(sigName: "show-notification", callback: ((obj: WebView, notification: Notification) => boolean)): void
    connect(sigName: "show-option-menu", callback: ((obj: WebView, menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): void
    connect(sigName: "submit-form", callback: ((obj: WebView, request: FormSubmissionRequest) => void)): void
    connect(sigName: "web-process-crashed", callback: ((obj: WebView) => boolean)): void
    connect(sigName: "web-process-terminated", callback: ((obj: WebView, reason: WebProcessTerminationReason) => void)): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: WebView, object: Gtk.Widget) => void)): void
    connect(sigName: "check-resize", callback: ((obj: WebView) => void)): void
    connect(sigName: "remove", callback: ((obj: WebView, object: Gtk.Widget) => void)): void
    connect(sigName: "set-focus-child", callback: ((obj: WebView, object: Gtk.Widget) => void)): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: WebView) => void)): void
    connect(sigName: "button-press-event", callback: ((obj: WebView, event: Gdk.EventButton) => boolean)): void
    connect(sigName: "button-release-event", callback: ((obj: WebView, event: Gdk.EventButton) => boolean)): void
    connect(sigName: "can-activate-accel", callback: ((obj: WebView, signal_id: number) => boolean)): void
    connect(sigName: "child-notify", callback: ((obj: WebView, child_property: GObject.ParamSpec) => void)): void
    connect(sigName: "composited-changed", callback: ((obj: WebView) => void)): void
    connect(sigName: "configure-event", callback: ((obj: WebView, event: Gdk.EventConfigure) => boolean)): void
    connect(sigName: "damage-event", callback: ((obj: WebView, event: Gdk.EventExpose) => boolean)): void
    connect(sigName: "delete-event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): void
    connect(sigName: "destroy", callback: ((obj: WebView) => void)): void
    connect(sigName: "destroy-event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): void
    connect(sigName: "direction-changed", callback: ((obj: WebView, previous_direction: Gtk.TextDirection) => void)): void
    connect(sigName: "drag-begin", callback: ((obj: WebView, context: Gdk.DragContext) => void)): void
    connect(sigName: "drag-data-delete", callback: ((obj: WebView, context: Gdk.DragContext) => void)): void
    connect(sigName: "drag-data-get", callback: ((obj: WebView, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): void
    connect(sigName: "drag-data-received", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): void
    connect(sigName: "drag-drop", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): void
    connect(sigName: "drag-end", callback: ((obj: WebView, context: Gdk.DragContext) => void)): void
    connect(sigName: "drag-failed", callback: ((obj: WebView, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): void
    connect(sigName: "drag-leave", callback: ((obj: WebView, context: Gdk.DragContext, time: number) => void)): void
    connect(sigName: "drag-motion", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): void
    connect(sigName: "draw", callback: ((obj: WebView, cr: cairo.Context) => boolean)): void
    connect(sigName: "enter-notify-event", callback: ((obj: WebView, event: Gdk.EventCrossing) => boolean)): void
    connect(sigName: "event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): void
    connect(sigName: "event-after", callback: ((obj: WebView, event: Gdk.Event) => void)): void
    connect(sigName: "focus", callback: ((obj: WebView, direction: Gtk.DirectionType) => boolean)): void
    connect(sigName: "focus-in-event", callback: ((obj: WebView, event: Gdk.EventFocus) => boolean)): void
    connect(sigName: "focus-out-event", callback: ((obj: WebView, event: Gdk.EventFocus) => boolean)): void
    connect(sigName: "grab-broken-event", callback: ((obj: WebView, event: Gdk.EventGrabBroken) => boolean)): void
    connect(sigName: "grab-focus", callback: ((obj: WebView) => void)): void
    connect(sigName: "grab-notify", callback: ((obj: WebView, was_grabbed: boolean) => void)): void
    connect(sigName: "hide", callback: ((obj: WebView) => void)): void
    connect(sigName: "hierarchy-changed", callback: ((obj: WebView, previous_toplevel?: Gtk.Widget | null) => void)): void
    connect(sigName: "key-press-event", callback: ((obj: WebView, event: Gdk.EventKey) => boolean)): void
    connect(sigName: "key-release-event", callback: ((obj: WebView, event: Gdk.EventKey) => boolean)): void
    connect(sigName: "keynav-failed", callback: ((obj: WebView, direction: Gtk.DirectionType) => boolean)): void
    connect(sigName: "leave-notify-event", callback: ((obj: WebView, event: Gdk.EventCrossing) => boolean)): void
    connect(sigName: "map", callback: ((obj: WebView) => void)): void
    connect(sigName: "map-event", callback: ((obj: WebView, event: Gdk.EventAny) => boolean)): void
    connect(sigName: "mnemonic-activate", callback: ((obj: WebView, arg1: boolean) => boolean)): void
    connect(sigName: "motion-notify-event", callback: ((obj: WebView, event: Gdk.EventMotion) => boolean)): void
    connect(sigName: "move-focus", callback: ((obj: WebView, direction: Gtk.DirectionType) => void)): void
    connect(sigName: "parent-set", callback: ((obj: WebView, old_parent?: Gtk.Widget | null) => void)): void
    connect(sigName: "popup-menu", callback: ((obj: WebView) => boolean)): void
    connect(sigName: "property-notify-event", callback: ((obj: WebView, event: Gdk.EventProperty) => boolean)): void
    connect(sigName: "proximity-in-event", callback: ((obj: WebView, event: Gdk.EventProximity) => boolean)): void
    connect(sigName: "proximity-out-event", callback: ((obj: WebView, event: Gdk.EventProximity) => boolean)): void
    connect(sigName: "query-tooltip", callback: ((obj: WebView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): void
    connect(sigName: "realize", callback: ((obj: WebView) => void)): void
    connect(sigName: "screen-changed", callback: ((obj: WebView, previous_screen?: Gdk.Screen | null) => void)): void
    connect(sigName: "scroll-event", callback: ((obj: WebView, event: Gdk.EventScroll) => boolean)): void
    connect(sigName: "selection-clear-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): void
    connect(sigName: "selection-get", callback: ((obj: WebView, data: Gtk.SelectionData, info: number, time: number) => void)): void
    connect(sigName: "selection-notify-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): void
    connect(sigName: "selection-received", callback: ((obj: WebView, data: Gtk.SelectionData, time: number) => void)): void
    connect(sigName: "selection-request-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): void
    connect(sigName: "show", callback: ((obj: WebView) => void)): void
    connect(sigName: "show-help", callback: ((obj: WebView, help_type: Gtk.WidgetHelpType) => boolean)): void
    connect(sigName: "size-allocate", callback: ((obj: WebView, allocation: Gtk.Allocation) => void)): void
    connect(sigName: "state-changed", callback: ((obj: WebView, state: Gtk.StateType) => void)): void
    connect(sigName: "state-flags-changed", callback: ((obj: WebView, flags: Gtk.StateFlags) => void)): void
    connect(sigName: "style-set", callback: ((obj: WebView, previous_style?: Gtk.Style | null) => void)): void
    connect(sigName: "style-updated", callback: ((obj: WebView) => void)): void
    connect(sigName: "touch-event", callback: ((obj: WebView, object: Gdk.Event) => boolean)): void
    connect(sigName: "unmap", callback: ((obj: WebView) => void)): void
    connect(sigName: "unmap-event", callback: ((obj: WebView, event: Gdk.EventAny) => boolean)): void
    connect(sigName: "unrealize", callback: ((obj: WebView) => void)): void
    connect(sigName: "visibility-notify-event", callback: ((obj: WebView, event: Gdk.EventVisibility) => boolean)): void
    connect(sigName: "window-state-event", callback: ((obj: WebView, event: Gdk.EventWindowState) => boolean)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::editable", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::estimated-load-progress", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::favicon", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::is-loading", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::is-playing-audio", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::settings", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::title", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::uri", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::zoom-level", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::border-width", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::child", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::resize-mode", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::app-paintable", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::can-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::can-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::composite-child", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::double-buffered", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::events", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::expand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::halign", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::has-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::has-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::has-tooltip", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::height-request", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::hexpand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::hexpand-set", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::is-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-bottom", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-end", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-left", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-right", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-start", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-top", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::name", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::no-show-all", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::opacity", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::parent", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::receives-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::scale-factor", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::sensitive", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::style", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::tooltip-markup", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::tooltip-text", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::valign", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::vexpand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::vexpand-set", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::visible", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::width-request", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::window", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WebView_ConstructProps)
    static new(): WebView
    static new_with_context(context: WebContext): WebView
    static new_with_related_view(web_view: WebView): WebView
    static new_with_settings(settings: Settings): WebView
    static new_with_user_content_manager(user_content_manager: UserContentManager): WebView
}
export interface WebViewBase_ConstructProps extends Gtk.Container_ConstructProps {
}
export class WebViewBase {
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Fields of WebKit2.WebViewBase */
    parentInstance:Gtk.Container
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    get_border_width(): number
    get_children(): Gtk.Widget[]
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle, intersection?: Gdk.Rectangle | null): boolean
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: object): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: object): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): void
    connect(sigName: "check-resize", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "remove", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): void
    connect(sigName: "set-focus-child", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "button-press-event", callback: ((obj: WebViewBase, event: Gdk.EventButton) => boolean)): void
    connect(sigName: "button-release-event", callback: ((obj: WebViewBase, event: Gdk.EventButton) => boolean)): void
    connect(sigName: "can-activate-accel", callback: ((obj: WebViewBase, signal_id: number) => boolean)): void
    connect(sigName: "child-notify", callback: ((obj: WebViewBase, child_property: GObject.ParamSpec) => void)): void
    connect(sigName: "composited-changed", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "configure-event", callback: ((obj: WebViewBase, event: Gdk.EventConfigure) => boolean)): void
    connect(sigName: "damage-event", callback: ((obj: WebViewBase, event: Gdk.EventExpose) => boolean)): void
    connect(sigName: "delete-event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): void
    connect(sigName: "destroy", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "destroy-event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): void
    connect(sigName: "direction-changed", callback: ((obj: WebViewBase, previous_direction: Gtk.TextDirection) => void)): void
    connect(sigName: "drag-begin", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): void
    connect(sigName: "drag-data-delete", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): void
    connect(sigName: "drag-data-get", callback: ((obj: WebViewBase, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): void
    connect(sigName: "drag-data-received", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): void
    connect(sigName: "drag-drop", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): void
    connect(sigName: "drag-end", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): void
    connect(sigName: "drag-failed", callback: ((obj: WebViewBase, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): void
    connect(sigName: "drag-leave", callback: ((obj: WebViewBase, context: Gdk.DragContext, time: number) => void)): void
    connect(sigName: "drag-motion", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): void
    connect(sigName: "draw", callback: ((obj: WebViewBase, cr: cairo.Context) => boolean)): void
    connect(sigName: "enter-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventCrossing) => boolean)): void
    connect(sigName: "event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): void
    connect(sigName: "event-after", callback: ((obj: WebViewBase, event: Gdk.Event) => void)): void
    connect(sigName: "focus", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): void
    connect(sigName: "focus-in-event", callback: ((obj: WebViewBase, event: Gdk.EventFocus) => boolean)): void
    connect(sigName: "focus-out-event", callback: ((obj: WebViewBase, event: Gdk.EventFocus) => boolean)): void
    connect(sigName: "grab-broken-event", callback: ((obj: WebViewBase, event: Gdk.EventGrabBroken) => boolean)): void
    connect(sigName: "grab-focus", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "grab-notify", callback: ((obj: WebViewBase, was_grabbed: boolean) => void)): void
    connect(sigName: "hide", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "hierarchy-changed", callback: ((obj: WebViewBase, previous_toplevel?: Gtk.Widget | null) => void)): void
    connect(sigName: "key-press-event", callback: ((obj: WebViewBase, event: Gdk.EventKey) => boolean)): void
    connect(sigName: "key-release-event", callback: ((obj: WebViewBase, event: Gdk.EventKey) => boolean)): void
    connect(sigName: "keynav-failed", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): void
    connect(sigName: "leave-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventCrossing) => boolean)): void
    connect(sigName: "map", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "map-event", callback: ((obj: WebViewBase, event: Gdk.EventAny) => boolean)): void
    connect(sigName: "mnemonic-activate", callback: ((obj: WebViewBase, arg1: boolean) => boolean)): void
    connect(sigName: "motion-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventMotion) => boolean)): void
    connect(sigName: "move-focus", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => void)): void
    connect(sigName: "parent-set", callback: ((obj: WebViewBase, old_parent?: Gtk.Widget | null) => void)): void
    connect(sigName: "popup-menu", callback: ((obj: WebViewBase) => boolean)): void
    connect(sigName: "property-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventProperty) => boolean)): void
    connect(sigName: "proximity-in-event", callback: ((obj: WebViewBase, event: Gdk.EventProximity) => boolean)): void
    connect(sigName: "proximity-out-event", callback: ((obj: WebViewBase, event: Gdk.EventProximity) => boolean)): void
    connect(sigName: "query-tooltip", callback: ((obj: WebViewBase, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): void
    connect(sigName: "realize", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "screen-changed", callback: ((obj: WebViewBase, previous_screen?: Gdk.Screen | null) => void)): void
    connect(sigName: "scroll-event", callback: ((obj: WebViewBase, event: Gdk.EventScroll) => boolean)): void
    connect(sigName: "selection-clear-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): void
    connect(sigName: "selection-get", callback: ((obj: WebViewBase, data: Gtk.SelectionData, info: number, time: number) => void)): void
    connect(sigName: "selection-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): void
    connect(sigName: "selection-received", callback: ((obj: WebViewBase, data: Gtk.SelectionData, time: number) => void)): void
    connect(sigName: "selection-request-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): void
    connect(sigName: "show", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "show-help", callback: ((obj: WebViewBase, help_type: Gtk.WidgetHelpType) => boolean)): void
    connect(sigName: "size-allocate", callback: ((obj: WebViewBase, allocation: Gtk.Allocation) => void)): void
    connect(sigName: "state-changed", callback: ((obj: WebViewBase, state: Gtk.StateType) => void)): void
    connect(sigName: "state-flags-changed", callback: ((obj: WebViewBase, flags: Gtk.StateFlags) => void)): void
    connect(sigName: "style-set", callback: ((obj: WebViewBase, previous_style?: Gtk.Style | null) => void)): void
    connect(sigName: "style-updated", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "touch-event", callback: ((obj: WebViewBase, object: Gdk.Event) => boolean)): void
    connect(sigName: "unmap", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "unmap-event", callback: ((obj: WebViewBase, event: Gdk.EventAny) => boolean)): void
    connect(sigName: "unrealize", callback: ((obj: WebViewBase) => void)): void
    connect(sigName: "visibility-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventVisibility) => boolean)): void
    connect(sigName: "window-state-event", callback: ((obj: WebViewBase, event: Gdk.EventWindowState) => boolean)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::border-width", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::child", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::resize-mode", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::app-paintable", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::can-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::can-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::composite-child", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::double-buffered", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::events", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::expand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::halign", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::has-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::has-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::has-tooltip", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::height-request", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::hexpand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::hexpand-set", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::is-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-bottom", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-end", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-left", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-right", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-start", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::margin-top", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::name", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::no-show-all", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::opacity", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::parent", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::receives-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::scale-factor", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::sensitive", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::style", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::tooltip-markup", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::tooltip-text", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::valign", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::vexpand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::vexpand-set", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::visible", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::width-request", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::window", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WebViewBase_ConstructProps)
}
export interface WebsiteDataManager_ConstructProps extends GObject.Object_ConstructProps {
    base_cache_directory?:string
    base_data_directory?:string
    disk_cache_directory?:string
    indexeddb_directory?:string
    is_ephemeral?:boolean
    local_storage_directory?:string
    offline_application_cache_directory?:string
    websql_directory?:string
}
export class WebsiteDataManager {
    /* Properties of WebKit2.WebsiteDataManager */
    /* Fields of WebKit2.WebsiteDataManager */
    parent:GObject.Object
    priv:WebsiteDataManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.WebsiteDataManager */
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    clear_finish(result: Gio.AsyncResult): boolean
    fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_finish(result: Gio.AsyncResult): WebsiteData[]
    get_base_cache_directory(): string
    get_base_data_directory(): string
    get_cookie_manager(): CookieManager
    get_disk_cache_directory(): string
    get_indexeddb_directory(): string
    get_local_storage_directory(): string
    get_offline_application_cache_directory(): string
    get_websql_directory(): string
    is_ephemeral(): boolean
    remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WebsiteDataManager_ConstructProps)
    static new_ephemeral(): WebsiteDataManager
}
export interface WindowProperties_ConstructProps extends GObject.Object_ConstructProps {
    fullscreen?:boolean
    geometry?:Gdk.Rectangle
    locationbar_visible?:boolean
    menubar_visible?:boolean
    resizable?:boolean
    scrollbars_visible?:boolean
    statusbar_visible?:boolean
    toolbar_visible?:boolean
}
export class WindowProperties {
    /* Properties of WebKit2.WindowProperties */
    /* Fields of WebKit2.WindowProperties */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.WindowProperties */
    get_fullscreen(): boolean
    get_geometry(): /* geometry */ Gdk.Rectangle
    get_locationbar_visible(): boolean
    get_menubar_visible(): boolean
    get_resizable(): boolean
    get_scrollbars_visible(): boolean
    get_statusbar_visible(): boolean
    get_toolbar_visible(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WindowProperties, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: WindowProperties_ConstructProps)
}
export class ApplicationInfo {
    /* Methods of WebKit2.ApplicationInfo */
    get_name(): string
    get_version(): [ /* major */ number, /* minor */ number | null, /* micro */ number | null ]
    ref(): ApplicationInfo
    set_name(name: string): void
    set_version(major: number, minor: number, micro: number): void
    unref(): void
    static name: string
    static new(): ApplicationInfo
    constructor()
    static new(): ApplicationInfo
}
export class AuthenticationRequestPrivate {
    static name: string
}
export class AutomationSessionPrivate {
    static name: string
}
export class BackForwardListItemPrivate {
    static name: string
}
export class BackForwardListPrivate {
    static name: string
}
export class ColorChooserRequestPrivate {
    static name: string
}
export class ContextMenuItemPrivate {
    static name: string
}
export class ContextMenuPrivate {
    static name: string
}
export class CookieManagerPrivate {
    static name: string
}
export class Credential {
    /* Methods of WebKit2.Credential */
    copy(): Credential
    free(): void
    get_password(): string
    get_persistence(): CredentialPersistence
    get_username(): string
    has_password(): boolean
    static name: string
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    constructor(username: string, password: string, persistence: CredentialPersistence)
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
}
export class DownloadPrivate {
    static name: string
}
export class EditorStatePrivate {
    static name: string
}
export class FaviconDatabasePrivate {
    static name: string
}
export class FileChooserRequestPrivate {
    static name: string
}
export class FindControllerPrivate {
    static name: string
}
export class FormSubmissionRequestPrivate {
    static name: string
}
export class GeolocationPermissionRequestPrivate {
    static name: string
}
export class HitTestResultPrivate {
    static name: string
}
export class InstallMissingMediaPluginsPermissionRequestPrivate {
    static name: string
}
export class JavascriptResult {
    /* Methods of WebKit2.JavascriptResult */
    get_global_context(): JavaScriptCore.GlobalContext
    get_value(): JavaScriptCore.Value
    ref(): JavascriptResult
    unref(): void
    static name: string
}
export class MimeInfo {
    /* Methods of WebKit2.MimeInfo */
    get_description(): string
    get_extensions(): string[]
    get_mime_type(): string
    ref(): MimeInfo
    unref(): void
    static name: string
}
export class NavigationAction {
    /* Methods of WebKit2.NavigationAction */
    copy(): NavigationAction
    free(): void
    get_modifiers(): number
    get_mouse_button(): number
    get_navigation_type(): NavigationType
    get_request(): URIRequest
    is_redirect(): boolean
    is_user_gesture(): boolean
    static name: string
}
export class NavigationPolicyDecisionPrivate {
    static name: string
}
export class NetworkProxySettings {
    /* Methods of WebKit2.NetworkProxySettings */
    add_proxy_for_scheme(scheme: string, proxy_uri: string): void
    copy(): NetworkProxySettings
    free(): void
    static name: string
    static new(default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings
    constructor(default_proxy_uri?: string | null, ignore_hosts?: string[] | null)
    static new(default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings
}
export class NotificationPermissionRequestPrivate {
    static name: string
}
export class NotificationPrivate {
    static name: string
}
export class OptionMenuItem {
    /* Methods of WebKit2.OptionMenuItem */
    copy(): OptionMenuItem
    free(): void
    get_label(): string
    get_tooltip(): string
    is_enabled(): boolean
    is_group_child(): boolean
    is_group_label(): boolean
    is_selected(): boolean
    static name: string
}
export class OptionMenuPrivate {
    static name: string
}
export class PluginPrivate {
    static name: string
}
export class PolicyDecisionPrivate {
    static name: string
}
export class PrintCustomWidgetPrivate {
    static name: string
}
export class PrintOperationPrivate {
    static name: string
}
export class ResponsePolicyDecisionPrivate {
    static name: string
}
export class ScriptDialog {
    /* Methods of WebKit2.ScriptDialog */
    confirm_set_confirmed(confirmed: boolean): void
    get_dialog_type(): ScriptDialogType
    get_message(): string
    prompt_get_default_text(): string
    prompt_set_text(text: string): void
    static name: string
}
export class SecurityManagerPrivate {
    static name: string
}
export class SecurityOrigin {
    /* Methods of WebKit2.SecurityOrigin */
    get_host(): string
    get_port(): number
    get_protocol(): string
    is_opaque(): boolean
    ref(): SecurityOrigin
    to_string(): string
    unref(): void
    static name: string
    static new(protocol: string, host: string, port: number): SecurityOrigin
    constructor(protocol: string, host: string, port: number)
    static new(protocol: string, host: string, port: number): SecurityOrigin
    static new_for_uri(uri: string): SecurityOrigin
}
export class SettingsPrivate {
    static name: string
}
export class URIRequestPrivate {
    static name: string
}
export class URIResponsePrivate {
    static name: string
}
export class URISchemeRequestPrivate {
    static name: string
}
export class UserContentManagerPrivate {
    static name: string
}
export class UserMediaPermissionRequestPrivate {
    static name: string
}
export class UserScript {
    /* Methods of WebKit2.UserScript */
    ref(): UserScript
    unref(): void
    static name: string
    static new(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, whitelist?: string[] | null, blacklist?: string[] | null): UserScript
    constructor(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, whitelist?: string[] | null, blacklist?: string[] | null)
    static new(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, whitelist?: string[] | null, blacklist?: string[] | null): UserScript
}
export class UserStyleSheet {
    /* Methods of WebKit2.UserStyleSheet */
    ref(): UserStyleSheet
    unref(): void
    static name: string
    static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, whitelist?: string[] | null, blacklist?: string[] | null): UserStyleSheet
    constructor(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, whitelist?: string[] | null, blacklist?: string[] | null)
    static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, whitelist?: string[] | null, blacklist?: string[] | null): UserStyleSheet
}
export class WebContextPrivate {
    static name: string
}
export class WebInspectorPrivate {
    static name: string
}
export class WebResourcePrivate {
    static name: string
}
export class WebViewBasePrivate {
    static name: string
}
export class WebViewPrivate {
    static name: string
}
export class WebViewSessionState {
    /* Methods of WebKit2.WebViewSessionState */
    ref(): WebViewSessionState
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    static name: string
    static new(data: Gjs.byteArray.ByteArray): WebViewSessionState
    constructor(data: Gjs.byteArray.ByteArray)
    static new(data: Gjs.byteArray.ByteArray): WebViewSessionState
}
export class WebsiteData {
    /* Methods of WebKit2.WebsiteData */
    get_name(): string
    get_size(types: WebsiteDataTypes): number
    get_types(): WebsiteDataTypes
    ref(): WebsiteData
    unref(): void
    static name: string
}
export class WebsiteDataManagerPrivate {
    static name: string
}
export class WindowPropertiesPrivate {
    static name: string
}