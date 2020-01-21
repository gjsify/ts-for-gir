/**
 * WebKit2-4.0
 */

/// <reference path="Soup.d.ts" />
/// <reference path="Gio.d.ts" />
/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />
/// <reference path="JavaScriptCore.d.ts" />
/// <reference path="Gtk.d.ts" />
/// <reference path="xlib.d.ts" />
/// <reference path="Gdk.d.ts" />
/// <reference path="cairo.d.ts" />
/// <reference path="Pango.d.ts" />
/// <reference path="GdkPixbuf.d.ts" />
/// <reference path="GModule.d.ts" />
/// <reference path="Atk.d.ts" />

declare namespace WebKit2 {

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
    INSERT_EMOJI,
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
export enum UserContentFilterError {
    INVALID_SOURCE,
    NOT_FOUND,
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
    DEVICE_ID_HASH_SALT,
    HSTS_CACHE,
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
export function downloadErrorQuark(): GLib.Quark
export function faviconDatabaseErrorQuark(): GLib.Quark
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function javascriptErrorQuark(): GLib.Quark
export function networkErrorQuark(): GLib.Quark
export function pluginErrorQuark(): GLib.Quark
export function policyErrorQuark(): GLib.Quark
export function printErrorQuark(): GLib.Quark
export function snapshotErrorQuark(): GLib.Quark
export function uriForDisplay(uri: string): string | null
export function userContentFilterErrorQuark(): GLib.Quark
export function userMediaPermissionIsForAudioDevice(request: UserMediaPermissionRequest): boolean
export function userMediaPermissionIsForVideoDevice(request: UserMediaPermissionRequest): boolean
export interface URISchemeRequestCallback {
    (request: URISchemeRequest): void
}
export class PermissionRequest {
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2.PermissionRequest */
    vfuncAllow?(): void
    vfuncDeny?(): void
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
    canSaveCredentials(): boolean
    cancel(): void
    getHost(): string
    getPort(): number
    getProposedCredential(): Credential
    getRealm(): string
    getScheme(): AuthenticationScheme
    isForProxy(): boolean
    isRetry(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.AuthenticationRequest */
    connect(sigName: "cancelled", callback: ((obj: AuthenticationRequest) => void)): number
    connect_after(sigName: "cancelled", callback: ((obj: AuthenticationRequest) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AuthenticationRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: AuthenticationRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthenticationRequest_ConstructProps)
    _init (config?: AuthenticationRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    getApplicationInfo(): ApplicationInfo
    getId(): string
    setApplicationInfo(info: ApplicationInfo): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.AutomationSession */
    connect(sigName: "create-web-view", callback: ((obj: AutomationSession) => WebView)): number
    connect_after(sigName: "create-web-view", callback: ((obj: AutomationSession) => WebView)): number
    emit(sigName: "create-web-view"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AutomationSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: AutomationSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AutomationSession_ConstructProps)
    _init (config?: AutomationSession_ConstructProps): void
    static $gtype: GObject.Type
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
    getBackItem(): BackForwardListItem | null
    getBackList(): BackForwardListItem[]
    getBackListWithLimit(limit: number): BackForwardListItem[]
    getCurrentItem(): BackForwardListItem | null
    getForwardItem(): BackForwardListItem | null
    getForwardList(): BackForwardListItem[]
    getForwardListWithLimit(limit: number): BackForwardListItem[]
    getLength(): number
    getNthItem(index: number): BackForwardListItem | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.BackForwardList */
    connect(sigName: "changed", callback: ((obj: BackForwardList, item_added?: BackForwardListItem | null, items_removed?: object | null) => void)): number
    connect_after(sigName: "changed", callback: ((obj: BackForwardList, item_added?: BackForwardListItem | null, items_removed?: object | null) => void)): number
    emit(sigName: "changed", item_added?: BackForwardListItem | null, items_removed?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BackForwardList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: BackForwardList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackForwardList_ConstructProps)
    _init (config?: BackForwardList_ConstructProps): void
    static $gtype: GObject.Type
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
    getOriginalUri(): string
    getTitle(): string
    getUri(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BackForwardListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: BackForwardListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackForwardListItem_ConstructProps)
    _init (config?: BackForwardListItem_ConstructProps): void
    static $gtype: GObject.Type
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
    getElementRectangle(): /* rect */ Gdk.Rectangle
    getRgba(): /* rgba */ Gdk.RGBA
    setRgba(rgba: Gdk.RGBA): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.ColorChooserRequest */
    connect(sigName: "finished", callback: ((obj: ColorChooserRequest) => void)): number
    connect_after(sigName: "finished", callback: ((obj: ColorChooserRequest) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rgba", callback: ((obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorChooserRequest_ConstructProps)
    _init (config?: ColorChooserRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    getItemAtPosition(position: number): ContextMenuItem
    getItems(): ContextMenuItem[]
    getNItems(): number
    getUserData(): GLib.Variant
    insert(item: ContextMenuItem, position: number): void
    last(): ContextMenuItem
    moveItem(item: ContextMenuItem, position: number): void
    prepend(item: ContextMenuItem): void
    remove(item: ContextMenuItem): void
    removeAll(): void
    setUserData(user_data: GLib.Variant): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ContextMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ContextMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContextMenu_ConstructProps)
    _init (config?: ContextMenu_ConstructProps): void
    static new(): ContextMenu
    static newWithItems(items: ContextMenuItem[]): ContextMenu
    static $gtype: GObject.Type
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
    getAction(): Gtk.Action
    getGaction(): Gio.Action
    getStockAction(): ContextMenuAction
    getSubmenu(): ContextMenu
    isSeparator(): boolean
    setSubmenu(submenu?: ContextMenu | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ContextMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ContextMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContextMenuItem_ConstructProps)
    _init (config?: ContextMenuItem_ConstructProps): void
    static new(action: Gtk.Action): ContextMenuItem
    static newFromGaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem
    static newFromStockAction(action: ContextMenuAction): ContextMenuItem
    static newFromStockActionWithLabel(action: ContextMenuAction, label: string): ContextMenuItem
    static newSeparator(): ContextMenuItem
    static newWithSubmenu(label: string, submenu: ContextMenu): ContextMenuItem
    static $gtype: GObject.Type
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
    addCookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addCookieFinish(result: Gio.AsyncResult): boolean
    deleteAllCookies(): void
    deleteCookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCookieFinish(result: Gio.AsyncResult): boolean
    deleteCookiesForDomain(domain: string): void
    getAcceptPolicy(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAcceptPolicyFinish(result: Gio.AsyncResult): CookieAcceptPolicy
    getCookies(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCookiesFinish(result: Gio.AsyncResult): Soup.Cookie[]
    getDomainsWithCookies(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDomainsWithCookiesFinish(result: Gio.AsyncResult): string[]
    setAcceptPolicy(policy: CookieAcceptPolicy): void
    setPersistentStorage(filename: string, storage: CookiePersistentStorage): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.CookieManager */
    connect(sigName: "changed", callback: ((obj: CookieManager) => void)): number
    connect_after(sigName: "changed", callback: ((obj: CookieManager) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CookieManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: CookieManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieManager_ConstructProps)
    _init (config?: CookieManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceInfoPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class DeviceInfoPermissionRequest {
    /* Fields of WebKit2.DeviceInfoPermissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DeviceInfoPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DeviceInfoPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceInfoPermissionRequest_ConstructProps)
    _init (config?: DeviceInfoPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    getAllowOverwrite(): boolean
    getDestination(): string
    getElapsedTime(): number
    getEstimatedProgress(): number
    getReceivedDataLength(): number
    getRequest(): URIRequest
    getResponse(): URIResponse
    getWebView(): WebView
    setAllowOverwrite(allowed: boolean): void
    setDestination(uri: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of WebKit2.Download */
    vfuncDecideDestination?(suggested_filename: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.Download */
    connect(sigName: "created-destination", callback: ((obj: Download, destination: string) => void)): number
    connect_after(sigName: "created-destination", callback: ((obj: Download, destination: string) => void)): number
    emit(sigName: "created-destination", destination: string): void
    connect(sigName: "decide-destination", callback: ((obj: Download, suggested_filename: string) => boolean)): number
    connect_after(sigName: "decide-destination", callback: ((obj: Download, suggested_filename: string) => boolean)): number
    emit(sigName: "decide-destination", suggested_filename: string): void
    connect(sigName: "failed", callback: ((obj: Download, error: GLib.Error) => void)): number
    connect_after(sigName: "failed", callback: ((obj: Download, error: GLib.Error) => void)): number
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "finished", callback: ((obj: Download) => void)): number
    connect_after(sigName: "finished", callback: ((obj: Download) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "received-data", callback: ((obj: Download, data_length: number) => void)): number
    connect_after(sigName: "received-data", callback: ((obj: Download, data_length: number) => void)): number
    emit(sigName: "received-data", data_length: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-overwrite", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-overwrite", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destination", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destination", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::estimated-progress", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-progress", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: ((obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Download_ConstructProps)
    _init (config?: Download_ConstructProps): void
    static $gtype: GObject.Type
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
    getTypingAttributes(): number
    isCopyAvailable(): boolean
    isCutAvailable(): boolean
    isPasteAvailable(): boolean
    isRedoAvailable(): boolean
    isUndoAvailable(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::typing-attributes", callback: ((obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typing-attributes", callback: ((obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EditorState_ConstructProps)
    _init (config?: EditorState_ConstructProps): void
    static $gtype: GObject.Type
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
    getFavicon(page_uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFaviconFinish(result: Gio.AsyncResult): cairo.Surface
    getFaviconUri(page_uri: string): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.FaviconDatabase */
    connect(sigName: "favicon-changed", callback: ((obj: FaviconDatabase, page_uri: string, favicon_uri: string) => void)): number
    connect_after(sigName: "favicon-changed", callback: ((obj: FaviconDatabase, page_uri: string, favicon_uri: string) => void)): number
    emit(sigName: "favicon-changed", page_uri: string, favicon_uri: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FaviconDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FaviconDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FaviconDatabase_ConstructProps)
    _init (config?: FaviconDatabase_ConstructProps): void
    static $gtype: GObject.Type
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
    getMimeTypes(): string[]
    getMimeTypesFilter(): Gtk.FileFilter
    getSelectMultiple(): boolean
    getSelectedFiles(): string[]
    selectFiles(files: string[]): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-types", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::select-multiple", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-multiple", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-files", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-files", callback: ((obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileChooserRequest_ConstructProps)
    _init (config?: FileChooserRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    countMatches(search_text: string, find_options: number, max_match_count: number): void
    getMaxMatchCount(): number
    getOptions(): number
    getSearchText(): string
    getWebView(): WebView
    search(search_text: string, find_options: number, max_match_count: number): void
    searchFinish(): void
    searchNext(): void
    searchPrevious(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.FindController */
    connect(sigName: "counted-matches", callback: ((obj: FindController, match_count: number) => void)): number
    connect_after(sigName: "counted-matches", callback: ((obj: FindController, match_count: number) => void)): number
    emit(sigName: "counted-matches", match_count: number): void
    connect(sigName: "failed-to-find-text", callback: ((obj: FindController) => void)): number
    connect_after(sigName: "failed-to-find-text", callback: ((obj: FindController) => void)): number
    emit(sigName: "failed-to-find-text"): void
    connect(sigName: "found-text", callback: ((obj: FindController, match_count: number) => void)): number
    connect_after(sigName: "found-text", callback: ((obj: FindController, match_count: number) => void)): number
    emit(sigName: "found-text", match_count: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-match-count", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-match-count", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::options", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FindController_ConstructProps)
    _init (config?: FindController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FormSubmissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class FormSubmissionRequest {
    /* Fields of WebKit2.FormSubmissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.FormSubmissionRequest */
    getTextFields(): GLib.HashTable | null
    listTextFields(): [ /* returnType */ boolean, /* field_names */ string[] | null, /* field_values */ string[] | null ]
    submit(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FormSubmissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FormSubmissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormSubmissionRequest_ConstructProps)
    _init (config?: FormSubmissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GeolocationManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeolocationManager {
    /* Properties of WebKit2.GeolocationManager */
    readonly enable_high_accuracy:boolean
    /* Fields of WebKit2.GeolocationManager */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.GeolocationManager */
    failed(error_message: string): void
    getEnableHighAccuracy(): boolean
    updatePosition(position: GeolocationPosition): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.GeolocationManager */
    connect(sigName: "start", callback: ((obj: GeolocationManager) => boolean)): number
    connect_after(sigName: "start", callback: ((obj: GeolocationManager) => boolean)): number
    emit(sigName: "start"): void
    connect(sigName: "stop", callback: ((obj: GeolocationManager) => void)): number
    connect_after(sigName: "stop", callback: ((obj: GeolocationManager) => void)): number
    emit(sigName: "stop"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-high-accuracy", callback: ((obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-high-accuracy", callback: ((obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GeolocationManager_ConstructProps)
    _init (config?: GeolocationManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GeolocationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeolocationPermissionRequest {
    /* Fields of WebKit2.GeolocationPermissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GeolocationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: GeolocationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GeolocationPermissionRequest_ConstructProps)
    _init (config?: GeolocationPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    contextIsEditable(): boolean
    contextIsImage(): boolean
    contextIsLink(): boolean
    contextIsMedia(): boolean
    contextIsScrollbar(): boolean
    contextIsSelection(): boolean
    getContext(): number
    getImageUri(): string
    getLinkLabel(): string
    getLinkTitle(): string
    getLinkUri(): string
    getMediaUri(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HitTestResult_ConstructProps)
    _init (config?: HitTestResult_ConstructProps): void
    static $gtype: GObject.Type
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
    getDescription(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InstallMissingMediaPluginsPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: InstallMissingMediaPluginsPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps)
    _init (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    getFrameName(): string
    getModifiers(): number
    getMouseButton(): number
    getNavigationAction(): NavigationAction
    getNavigationType(): NavigationType
    getRequest(): URIRequest
    /* Methods of WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::frame-name", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-name", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifiers", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifiers", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mouse-button", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::navigation-action", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-action", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::navigation-type", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-type", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: ((obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NavigationPolicyDecision_ConstructProps)
    _init (config?: NavigationPolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
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
    getBody(): string
    getId(): number
    getTag(): string | null
    getTitle(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.Notification */
    connect(sigName: "clicked", callback: ((obj: Notification) => void)): number
    connect_after(sigName: "clicked", callback: ((obj: Notification) => void)): number
    emit(sigName: "clicked"): void
    connect(sigName: "closed", callback: ((obj: Notification) => void)): number
    connect_after(sigName: "closed", callback: ((obj: Notification) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::body", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tag", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NotificationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class NotificationPermissionRequest {
    /* Fields of WebKit2.NotificationPermissionRequest */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NotificationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NotificationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NotificationPermissionRequest_ConstructProps)
    _init (config?: NotificationPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    activateItem(index: number): void
    close(): void
    getItem(index: number): OptionMenuItem
    getNItems(): number
    selectItem(index: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.OptionMenu */
    connect(sigName: "close", callback: ((obj: OptionMenu) => void)): number
    connect_after(sigName: "close", callback: ((obj: OptionMenu) => void)): number
    emit(sigName: "close"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: OptionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: OptionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OptionMenu_ConstructProps)
    _init (config?: OptionMenu_ConstructProps): void
    static $gtype: GObject.Type
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
    getDescription(): string
    getMimeInfoList(): MimeInfo[]
    getName(): string
    getPath(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static $gtype: GObject.Type
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PolicyDecision_ConstructProps)
    _init (config?: PolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
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
    getTitle(): string
    getWidget(): Gtk.Widget
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of WebKit2.PrintCustomWidget */
    vfuncApply?(widget: Gtk.Widget): void
    vfuncUpdate?(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.PrintCustomWidget */
    connect(sigName: "apply", callback: ((obj: PrintCustomWidget) => void)): number
    connect_after(sigName: "apply", callback: ((obj: PrintCustomWidget) => void)): number
    emit(sigName: "apply"): void
    connect(sigName: "update", callback: ((obj: PrintCustomWidget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void)): number
    connect_after(sigName: "update", callback: ((obj: PrintCustomWidget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void)): number
    emit(sigName: "update", page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PrintCustomWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PrintCustomWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintCustomWidget_ConstructProps)
    _init (config?: PrintCustomWidget_ConstructProps): void
    static new(widget: Gtk.Widget, title: string): PrintCustomWidget
    static $gtype: GObject.Type
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
    getPageSetup(): Gtk.PageSetup
    getPrintSettings(): Gtk.PrintSettings
    print(): void
    runDialog(parent?: Gtk.Window | null): PrintOperationResponse
    setPageSetup(page_setup: Gtk.PageSetup): void
    setPrintSettings(print_settings: Gtk.PrintSettings): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.PrintOperation */
    connect(sigName: "create-custom-widget", callback: ((obj: PrintOperation) => PrintCustomWidget)): number
    connect_after(sigName: "create-custom-widget", callback: ((obj: PrintOperation) => PrintCustomWidget)): number
    emit(sigName: "create-custom-widget"): void
    connect(sigName: "failed", callback: ((obj: PrintOperation, error: GLib.Error) => void)): number
    connect_after(sigName: "failed", callback: ((obj: PrintOperation, error: GLib.Error) => void)): number
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "finished", callback: ((obj: PrintOperation) => void)): number
    connect_after(sigName: "finished", callback: ((obj: PrintOperation) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::page-setup", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-setup", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-settings", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-settings", callback: ((obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintOperation_ConstructProps)
    _init (config?: PrintOperation_ConstructProps): void
    static new(web_view: WebView): PrintOperation
    static $gtype: GObject.Type
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
    getRequest(): URIRequest
    getResponse(): URIResponse
    isMimeTypeSupported(): boolean
    /* Methods of WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::request", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: ((obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResponsePolicyDecision_ConstructProps)
    _init (config?: ResponsePolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
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
    registerUriSchemeAsCorsEnabled(scheme: string): void
    registerUriSchemeAsDisplayIsolated(scheme: string): void
    registerUriSchemeAsEmptyDocument(scheme: string): void
    registerUriSchemeAsLocal(scheme: string): void
    registerUriSchemeAsNoAccess(scheme: string): void
    registerUriSchemeAsSecure(scheme: string): void
    uriSchemeIsCorsEnabled(scheme: string): boolean
    uriSchemeIsDisplayIsolated(scheme: string): boolean
    uriSchemeIsEmptyDocument(scheme: string): boolean
    uriSchemeIsLocal(scheme: string): boolean
    uriSchemeIsNoAccess(scheme: string): boolean
    uriSchemeIsSecure(scheme: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SecurityManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SecurityManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecurityManager_ConstructProps)
    _init (config?: SecurityManager_ConstructProps): void
    static $gtype: GObject.Type
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
    enable_back_forward_navigation_gestures?:boolean
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
    enable_javascript_markup?:boolean
    enable_media?:boolean
    enable_media_capabilities?:boolean
    enable_media_stream?:boolean
    enable_mediasource?:boolean
    enable_mock_capture_devices?:boolean
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
    enable_back_forward_navigation_gestures:boolean
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
    enable_javascript_markup:boolean
    enable_media:boolean
    enable_media_capabilities:boolean
    enable_media_stream:boolean
    enable_mediasource:boolean
    enable_mock_capture_devices:boolean
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
    getAllowFileAccessFromFileUrls(): boolean
    getAllowModalDialogs(): boolean
    getAllowUniversalAccessFromFileUrls(): boolean
    getAutoLoadImages(): boolean
    getCursiveFontFamily(): string
    getDefaultCharset(): string
    getDefaultFontFamily(): string
    getDefaultFontSize(): number
    getDefaultMonospaceFontSize(): number
    getDrawCompositingIndicators(): boolean
    getEnableAccelerated_2dCanvas(): boolean
    getEnableBackForwardNavigationGestures(): boolean
    getEnableCaretBrowsing(): boolean
    getEnableDeveloperExtras(): boolean
    getEnableDnsPrefetching(): boolean
    getEnableEncryptedMedia(): boolean
    getEnableFrameFlattening(): boolean
    getEnableFullscreen(): boolean
    getEnableHtml5Database(): boolean
    getEnableHtml5LocalStorage(): boolean
    getEnableHyperlinkAuditing(): boolean
    getEnableJava(): boolean
    getEnableJavascript(): boolean
    getEnableJavascriptMarkup(): boolean
    getEnableMedia(): boolean
    getEnableMediaCapabilities(): boolean
    getEnableMediaStream(): boolean
    getEnableMediasource(): boolean
    getEnableMockCaptureDevices(): boolean
    getEnableOfflineWebApplicationCache(): boolean
    getEnablePageCache(): boolean
    getEnablePlugins(): boolean
    getEnablePrivateBrowsing(): boolean
    getEnableResizableTextAreas(): boolean
    getEnableSiteSpecificQuirks(): boolean
    getEnableSmoothScrolling(): boolean
    getEnableSpatialNavigation(): boolean
    getEnableTabsToLinks(): boolean
    getEnableWebaudio(): boolean
    getEnableWebgl(): boolean
    getEnableWriteConsoleMessagesToStdout(): boolean
    getEnableXssAuditor(): boolean
    getFantasyFontFamily(): string
    getHardwareAccelerationPolicy(): HardwareAccelerationPolicy
    getJavascriptCanAccessClipboard(): boolean
    getJavascriptCanOpenWindowsAutomatically(): boolean
    getLoadIconsIgnoringImageLoadSetting(): boolean
    getMediaPlaybackAllowsInline(): boolean
    getMediaPlaybackRequiresUserGesture(): boolean
    getMinimumFontSize(): number
    getMonospaceFontFamily(): string
    getPictographFontFamily(): string
    getPrintBackgrounds(): boolean
    getSansSerifFontFamily(): string
    getSerifFontFamily(): string
    getUserAgent(): string
    getZoomTextOnly(): boolean
    setAllowFileAccessFromFileUrls(allowed: boolean): void
    setAllowModalDialogs(allowed: boolean): void
    setAllowUniversalAccessFromFileUrls(allowed: boolean): void
    setAutoLoadImages(enabled: boolean): void
    setCursiveFontFamily(cursive_font_family: string): void
    setDefaultCharset(default_charset: string): void
    setDefaultFontFamily(default_font_family: string): void
    setDefaultFontSize(font_size: number): void
    setDefaultMonospaceFontSize(font_size: number): void
    setDrawCompositingIndicators(enabled: boolean): void
    setEnableAccelerated_2dCanvas(enabled: boolean): void
    setEnableBackForwardNavigationGestures(enabled: boolean): void
    setEnableCaretBrowsing(enabled: boolean): void
    setEnableDeveloperExtras(enabled: boolean): void
    setEnableDnsPrefetching(enabled: boolean): void
    setEnableEncryptedMedia(enabled: boolean): void
    setEnableFrameFlattening(enabled: boolean): void
    setEnableFullscreen(enabled: boolean): void
    setEnableHtml5Database(enabled: boolean): void
    setEnableHtml5LocalStorage(enabled: boolean): void
    setEnableHyperlinkAuditing(enabled: boolean): void
    setEnableJava(enabled: boolean): void
    setEnableJavascript(enabled: boolean): void
    setEnableJavascriptMarkup(enabled: boolean): void
    setEnableMedia(enabled: boolean): void
    setEnableMediaCapabilities(enabled: boolean): void
    setEnableMediaStream(enabled: boolean): void
    setEnableMediasource(enabled: boolean): void
    setEnableMockCaptureDevices(enabled: boolean): void
    setEnableOfflineWebApplicationCache(enabled: boolean): void
    setEnablePageCache(enabled: boolean): void
    setEnablePlugins(enabled: boolean): void
    setEnablePrivateBrowsing(enabled: boolean): void
    setEnableResizableTextAreas(enabled: boolean): void
    setEnableSiteSpecificQuirks(enabled: boolean): void
    setEnableSmoothScrolling(enabled: boolean): void
    setEnableSpatialNavigation(enabled: boolean): void
    setEnableTabsToLinks(enabled: boolean): void
    setEnableWebaudio(enabled: boolean): void
    setEnableWebgl(enabled: boolean): void
    setEnableWriteConsoleMessagesToStdout(enabled: boolean): void
    setEnableXssAuditor(enabled: boolean): void
    setFantasyFontFamily(fantasy_font_family: string): void
    setHardwareAccelerationPolicy(policy: HardwareAccelerationPolicy): void
    setJavascriptCanAccessClipboard(enabled: boolean): void
    setJavascriptCanOpenWindowsAutomatically(enabled: boolean): void
    setLoadIconsIgnoringImageLoadSetting(enabled: boolean): void
    setMediaPlaybackAllowsInline(enabled: boolean): void
    setMediaPlaybackRequiresUserGesture(enabled: boolean): void
    setMinimumFontSize(font_size: number): void
    setMonospaceFontFamily(monospace_font_family: string): void
    setPictographFontFamily(pictograph_font_family: string): void
    setPrintBackgrounds(print_backgrounds: boolean): void
    setSansSerifFontFamily(sans_serif_font_family: string): void
    setSerifFontFamily(serif_font_family: string): void
    setUserAgent(user_agent?: string | null): void
    setUserAgentWithApplicationDetails(application_name?: string | null, application_version?: string | null): void
    setZoomTextOnly(zoom_text_only: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-file-access-from-file-urls", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-file-access-from-file-urls", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-modal-dialogs", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-modal-dialogs", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-universal-access-from-file-urls", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-universal-access-from-file-urls", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-load-images", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-load-images", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursive-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursive-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-charset", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-charset", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-monospace-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-monospace-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draw-compositing-indicators", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-compositing-indicators", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-accelerated-2d-canvas", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-accelerated-2d-canvas", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-back-forward-navigation-gestures", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-back-forward-navigation-gestures", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-caret-browsing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-caret-browsing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-developer-extras", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-developer-extras", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-dns-prefetching", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-dns-prefetching", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-encrypted-media", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-encrypted-media", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-frame-flattening", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-frame-flattening", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-fullscreen", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fullscreen", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-html5-database", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-database", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-html5-local-storage", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-local-storage", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-hyperlink-auditing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-hyperlink-auditing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-java", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-java", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-javascript", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-javascript-markup", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript-markup", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-media", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-media-capabilities", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-capabilities", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-media-stream", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-stream", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-mediasource", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mediasource", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-mock-capture-devices", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mock-capture-devices", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-offline-web-application-cache", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-offline-web-application-cache", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-page-cache", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-page-cache", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-plugins", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-plugins", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-private-browsing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-private-browsing", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-resizable-text-areas", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-resizable-text-areas", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-site-specific-quirks", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-site-specific-quirks", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-smooth-scrolling", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smooth-scrolling", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-spatial-navigation", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-spatial-navigation", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-tabs-to-links", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tabs-to-links", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-webaudio", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webaudio", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-webgl", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webgl", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-write-console-messages-to-stdout", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-xss-auditor", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-xss-auditor", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fantasy-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fantasy-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hardware-acceleration-policy", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-acceleration-policy", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::javascript-can-access-clipboard", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-access-clipboard", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::javascript-can-open-windows-automatically", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-open-windows-automatically", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-icons-ignoring-image-load-setting", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-icons-ignoring-image-load-setting", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-playback-allows-inline", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-allows-inline", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-playback-requires-user-gesture", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-requires-user-gesture", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-font-size", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monospace-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pictograph-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pictograph-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-backgrounds", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-backgrounds", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sans-serif-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sans-serif-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serif-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serif-font-family", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-text-only", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-text-only", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    static new(): Settings
    static fontSizeToPixels(points: number): number
    static fontSizeToPoints(pixels: number): number
    static $gtype: GObject.Type
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
    getHttpHeaders(): Soup.MessageHeaders
    getHttpMethod(): string
    getUri(): string
    setUri(uri: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: ((obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URIRequest_ConstructProps)
    _init (config?: URIRequest_ConstructProps): void
    static new(uri: string): URIRequest
    static $gtype: GObject.Type
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
    getContentLength(): number
    getHttpHeaders(): Soup.MessageHeaders
    getMimeType(): string
    getStatusCode(): number
    getSuggestedFilename(): string
    getUri(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-length", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-headers", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-headers", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-code", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suggested-filename", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suggested-filename", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URIResponse_ConstructProps)
    _init (config?: URIResponse_ConstructProps): void
    static $gtype: GObject.Type
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
    finishError(error: GLib.Error): void
    getPath(): string
    getScheme(): string
    getUri(): string
    getWebView(): WebView
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: URISchemeRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: URISchemeRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URISchemeRequest_ConstructProps)
    _init (config?: URISchemeRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UserContentFilterStore_ConstructProps extends GObject.Object_ConstructProps {
    path?:string
}
export class UserContentFilterStore {
    /* Properties of WebKit2.UserContentFilterStore */
    /* Fields of WebKit2.UserContentFilterStore */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.UserContentFilterStore */
    fetchIdentifiers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchIdentifiersFinish(result: Gio.AsyncResult): string[]
    getPath(): string
    load(identifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): UserContentFilter
    remove(identifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    save(identifier: string, source: Gjs.byteArray.ByteArray, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): UserContentFilter
    saveFromFile(identifier: string, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFromFileFinish(result: Gio.AsyncResult): UserContentFilter
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UserContentFilterStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UserContentFilterStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserContentFilterStore_ConstructProps)
    _init (config?: UserContentFilterStore_ConstructProps): void
    static new(storage_path: string): UserContentFilterStore
    static $gtype: GObject.Type
}
export interface UserContentManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserContentManager {
    /* Fields of WebKit2.UserContentManager */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of WebKit2.UserContentManager */
    addFilter(filter: UserContentFilter): void
    addScript(script: UserScript): void
    addStyleSheet(stylesheet: UserStyleSheet): void
    registerScriptMessageHandler(name: string): boolean
    registerScriptMessageHandlerInWorld(name: string, world_name: string): boolean
    removeAllFilters(): void
    removeAllScripts(): void
    removeAllStyleSheets(): void
    removeFilter(filter: UserContentFilter): void
    removeFilterById(filter_id: string): void
    unregisterScriptMessageHandler(name: string): void
    unregisterScriptMessageHandlerInWorld(name: string, world_name: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.UserContentManager */
    connect(sigName: "script-message-received", callback: ((obj: UserContentManager, js_result: JavascriptResult) => void)): number
    connect_after(sigName: "script-message-received", callback: ((obj: UserContentManager, js_result: JavascriptResult) => void)): number
    emit(sigName: "script-message-received", js_result: JavascriptResult): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UserContentManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UserContentManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserContentManager_ConstructProps)
    _init (config?: UserContentManager_ConstructProps): void
    static new(): UserContentManager
    static $gtype: GObject.Type
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-for-audio-device", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-audio-device", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-video-device", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-video-device", callback: ((obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserMediaPermissionRequest_ConstructProps)
    _init (config?: UserMediaPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
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
    addPathToSandbox(path: string, read_only: boolean): void
    allowTlsCertificateForHost(certificate: Gio.TlsCertificate, host: string): void
    clearCache(): void
    downloadUri(uri: string): Download
    getCacheModel(): CacheModel
    getCookieManager(): CookieManager
    getFaviconDatabase(): FaviconDatabase
    getFaviconDatabaseDirectory(): string
    getGeolocationManager(): GeolocationManager
    getPlugins(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPluginsFinish(result: Gio.AsyncResult): Plugin[]
    getProcessModel(): ProcessModel
    getSandboxEnabled(): boolean
    getSecurityManager(): SecurityManager
    getSpellCheckingEnabled(): boolean
    getSpellCheckingLanguages(): string[]
    getTlsErrorsPolicy(): TLSErrorsPolicy
    getWebProcessCountLimit(): number
    getWebsiteDataManager(): WebsiteDataManager
    initializeNotificationPermissions(allowed_origins: SecurityOrigin[], disallowed_origins: SecurityOrigin[]): void
    isAutomationAllowed(): boolean
    isEphemeral(): boolean
    prefetchDns(hostname: string): void
    registerUriScheme(scheme: string, callback: URISchemeRequestCallback): void
    setAdditionalPluginsDirectory(directory: string): void
    setAutomationAllowed(allowed: boolean): void
    setCacheModel(cache_model: CacheModel): void
    setDiskCacheDirectory(directory: string): void
    setFaviconDatabaseDirectory(path?: string | null): void
    setNetworkProxySettings(proxy_mode: NetworkProxyMode, proxy_settings?: NetworkProxySettings | null): void
    setPreferredLanguages(languages?: string[] | null): void
    setProcessModel(process_model: ProcessModel): void
    setSandboxEnabled(enabled: boolean): void
    setSpellCheckingEnabled(enabled: boolean): void
    setSpellCheckingLanguages(languages: string[]): void
    setTlsErrorsPolicy(policy: TLSErrorsPolicy): void
    setWebExtensionsDirectory(directory: string): void
    setWebExtensionsInitializationUserData(user_data: GLib.Variant): void
    setWebProcessCountLimit(limit: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of WebKit2.WebContext */
    vfuncAutomationStarted?(session: AutomationSession): void
    vfuncDownloadStarted?(download: Download): void
    vfuncInitializeNotificationPermissions?(): void
    vfuncInitializeWebExtensions?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebContext */
    connect(sigName: "automation-started", callback: ((obj: WebContext, session: AutomationSession) => void)): number
    connect_after(sigName: "automation-started", callback: ((obj: WebContext, session: AutomationSession) => void)): number
    emit(sigName: "automation-started", session: AutomationSession): void
    connect(sigName: "download-started", callback: ((obj: WebContext, download: Download) => void)): number
    connect_after(sigName: "download-started", callback: ((obj: WebContext, download: Download) => void)): number
    emit(sigName: "download-started", download: Download): void
    connect(sigName: "initialize-notification-permissions", callback: ((obj: WebContext) => void)): number
    connect_after(sigName: "initialize-notification-permissions", callback: ((obj: WebContext) => void)): number
    emit(sigName: "initialize-notification-permissions"): void
    connect(sigName: "initialize-web-extensions", callback: ((obj: WebContext) => void)): number
    connect_after(sigName: "initialize-web-extensions", callback: ((obj: WebContext) => void)): number
    emit(sigName: "initialize-web-extensions"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebContext_ConstructProps)
    _init (config?: WebContext_ConstructProps): void
    static new(): WebContext
    static newEphemeral(): WebContext
    static newWithWebsiteDataManager(manager: WebsiteDataManager): WebContext
    static getDefault(): WebContext
    static $gtype: GObject.Type
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
    getAttachedHeight(): number
    getCanAttach(): boolean
    getInspectedUri(): string
    getWebView(): WebViewBase
    isAttached(): boolean
    show(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebInspector */
    connect(sigName: "attach", callback: ((obj: WebInspector) => boolean)): number
    connect_after(sigName: "attach", callback: ((obj: WebInspector) => boolean)): number
    emit(sigName: "attach"): void
    connect(sigName: "bring-to-front", callback: ((obj: WebInspector) => boolean)): number
    connect_after(sigName: "bring-to-front", callback: ((obj: WebInspector) => boolean)): number
    emit(sigName: "bring-to-front"): void
    connect(sigName: "closed", callback: ((obj: WebInspector) => void)): number
    connect_after(sigName: "closed", callback: ((obj: WebInspector) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "detach", callback: ((obj: WebInspector) => boolean)): number
    connect_after(sigName: "detach", callback: ((obj: WebInspector) => boolean)): number
    emit(sigName: "detach"): void
    connect(sigName: "open-window", callback: ((obj: WebInspector) => boolean)): number
    connect_after(sigName: "open-window", callback: ((obj: WebInspector) => boolean)): number
    emit(sigName: "open-window"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attached-height", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-height", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-attach", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-attach", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inspected-uri", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inspected-uri", callback: ((obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebInspector_ConstructProps)
    _init (config?: WebInspector_ConstructProps): void
    static $gtype: GObject.Type
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
    getData(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): any
    getResponse(): URIResponse
    getUri(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebResource */
    connect(sigName: "failed", callback: ((obj: WebResource, error: GLib.Error) => void)): number
    connect_after(sigName: "failed", callback: ((obj: WebResource, error: GLib.Error) => void)): number
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "failed-with-tls-errors", callback: ((obj: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void)): number
    connect_after(sigName: "failed-with-tls-errors", callback: ((obj: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void)): number
    emit(sigName: "failed-with-tls-errors", certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "finished", callback: ((obj: WebResource) => void)): number
    connect_after(sigName: "finished", callback: ((obj: WebResource) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "received-data", callback: ((obj: WebResource, data_length: number) => void)): number
    connect_after(sigName: "received-data", callback: ((obj: WebResource, data_length: number) => void)): number
    emit(sigName: "received-data", data_length: number): void
    connect(sigName: "sent-request", callback: ((obj: WebResource, request: URIRequest, redirected_response: URIResponse) => void)): number
    connect_after(sigName: "sent-request", callback: ((obj: WebResource, request: URIRequest, redirected_response: URIResponse) => void)): number
    emit(sigName: "sent-request", request: URIRequest, redirected_response: URIResponse): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::response", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebResource_ConstructProps)
    _init (config?: WebResource_ConstructProps): void
    static $gtype: GObject.Type
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
    focus_on_click:boolean
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
    canExecuteEditingCommand(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean
    canGoBack(): boolean
    canGoForward(): boolean
    canShowMimeType(mime_type: string): boolean
    downloadUri(uri: string): Download
    executeEditingCommand(command: string): void
    executeEditingCommandWithArgument(command: string, argument: string): void
    getBackForwardList(): BackForwardList
    getBackgroundColor(): /* rgba */ Gdk.RGBA
    getContext(): WebContext
    getCustomCharset(): string
    getEditorState(): EditorState
    getEstimatedLoadProgress(): number
    getFavicon(): cairo.Surface
    getFindController(): FindController
    getInspector(): WebInspector
    getMainResource(): WebResource
    getPageId(): number
    getSessionState(): WebViewSessionState
    getSettings(): Settings
    getSnapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapshotFinish(result: Gio.AsyncResult): cairo.Surface
    getTitle(): string
    getTlsInfo(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getUri(): string
    getUserContentManager(): UserContentManager
    getWebsiteDataManager(): WebsiteDataManager
    getWindowProperties(): WindowProperties
    getZoomLevel(): number
    goBack(): void
    goForward(): void
    goToBackForwardListItem(list_item: BackForwardListItem): void
    isControlledByAutomation(): boolean
    isEditable(): boolean
    isEphemeral(): boolean
    isLoading(): boolean
    isPlayingAudio(): boolean
    loadAlternateHtml(content: string, content_uri: string, base_uri?: string | null): void
    loadBytes(bytes: Gjs.byteArray.ByteArray, mime_type?: string | null, encoding?: string | null, base_uri?: string | null): void
    loadHtml(content: string, base_uri?: string | null): void
    loadPlainText(plain_text: string): void
    loadRequest(request: URIRequest): void
    loadUri(uri: string): void
    reload(): void
    reloadBypassCache(): void
    restoreSessionState(state: WebViewSessionState): void
    runJavascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFinish(result: Gio.AsyncResult): JavascriptResult
    runJavascriptFromGresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFromGresourceFinish(result: Gio.AsyncResult): JavascriptResult
    runJavascriptInWorld(script: string, world_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptInWorldFinish(result: Gio.AsyncResult): JavascriptResult
    save(save_mode: SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): Gio.InputStream
    saveToFile(file: Gio.File, save_mode: SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveToFileFinish(result: Gio.AsyncResult): boolean
    setBackgroundColor(rgba: Gdk.RGBA): void
    setCustomCharset(charset?: string | null): void
    setEditable(editable: boolean): void
    setSettings(settings: Settings): void
    setZoomLevel(zoom_level: number): void
    stopLoading(): void
    tryClose(): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasDefault(): boolean
    hasFocus(): boolean
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(group_cycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focus_on_click: boolean): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(no_show_all: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of WebKit2.WebView */
    vfuncAuthenticate?(request: AuthenticationRequest): boolean
    vfuncClose?(): void
    vfuncContextMenu?(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean
    vfuncContextMenuDismissed?(): void
    vfuncDecidePolicy?(decision: PolicyDecision, type: PolicyDecisionType): boolean
    vfuncEnterFullscreen?(): boolean
    vfuncInsecureContentDetected?(event: InsecureContentEvent): void
    vfuncLeaveFullscreen?(): boolean
    vfuncLoadChanged?(load_event: LoadEvent): void
    vfuncLoadFailed?(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean
    vfuncLoadFailedWithTlsErrors?(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfuncMouseTargetChanged?(hit_test_result: HitTestResult, modifiers: number): void
    vfuncPermissionRequest?(permission_request: PermissionRequest): boolean
    vfuncPrint?(print_operation: PrintOperation): boolean
    vfuncReadyToShow?(): void
    vfuncResourceLoadStarted?(resource: WebResource, request: URIRequest): void
    vfuncRunAsModal?(): void
    vfuncRunColorChooser?(request: ColorChooserRequest): boolean
    vfuncRunFileChooser?(request: FileChooserRequest): boolean
    vfuncScriptDialog?(dialog: ScriptDialog): boolean
    vfuncShowNotification?(notification: Notification): boolean
    vfuncShowOptionMenu?(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean
    vfuncSubmitForm?(request: FormSubmissionRequest): void
    vfuncWebProcessCrashed?(): boolean
    vfuncWebProcessTerminated?(reason: WebProcessTerminationReason): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2.WebView */
    connect(sigName: "authenticate", callback: ((obj: WebView, request: AuthenticationRequest) => boolean)): number
    connect_after(sigName: "authenticate", callback: ((obj: WebView, request: AuthenticationRequest) => boolean)): number
    emit(sigName: "authenticate", request: AuthenticationRequest): void
    connect(sigName: "close", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "close", callback: ((obj: WebView) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "context-menu", callback: ((obj: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult) => boolean)): number
    connect_after(sigName: "context-menu", callback: ((obj: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult) => boolean)): number
    emit(sigName: "context-menu", context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): void
    connect(sigName: "context-menu-dismissed", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "context-menu-dismissed", callback: ((obj: WebView) => void)): number
    emit(sigName: "context-menu-dismissed"): void
    connect(sigName: "create", callback: ((obj: WebView, navigation_action: NavigationAction) => Gtk.Widget)): number
    connect_after(sigName: "create", callback: ((obj: WebView, navigation_action: NavigationAction) => Gtk.Widget)): number
    emit(sigName: "create", navigation_action: NavigationAction): void
    connect(sigName: "decide-policy", callback: ((obj: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean)): number
    connect_after(sigName: "decide-policy", callback: ((obj: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean)): number
    emit(sigName: "decide-policy", decision: PolicyDecision, decision_type: PolicyDecisionType): void
    connect(sigName: "enter-fullscreen", callback: ((obj: WebView) => boolean)): number
    connect_after(sigName: "enter-fullscreen", callback: ((obj: WebView) => boolean)): number
    emit(sigName: "enter-fullscreen"): void
    connect(sigName: "insecure-content-detected", callback: ((obj: WebView, event: InsecureContentEvent) => void)): number
    connect_after(sigName: "insecure-content-detected", callback: ((obj: WebView, event: InsecureContentEvent) => void)): number
    emit(sigName: "insecure-content-detected", event: InsecureContentEvent): void
    connect(sigName: "leave-fullscreen", callback: ((obj: WebView) => boolean)): number
    connect_after(sigName: "leave-fullscreen", callback: ((obj: WebView) => boolean)): number
    emit(sigName: "leave-fullscreen"): void
    connect(sigName: "load-changed", callback: ((obj: WebView, load_event: LoadEvent) => void)): number
    connect_after(sigName: "load-changed", callback: ((obj: WebView, load_event: LoadEvent) => void)): number
    emit(sigName: "load-changed", load_event: LoadEvent): void
    connect(sigName: "load-failed", callback: ((obj: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    connect_after(sigName: "load-failed", callback: ((obj: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    emit(sigName: "load-failed", load_event: LoadEvent, failing_uri: string, error: GLib.Error): void
    connect(sigName: "load-failed-with-tls-errors", callback: ((obj: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: ((obj: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "load-failed-with-tls-errors", failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "mouse-target-changed", callback: ((obj: WebView, hit_test_result: HitTestResult, modifiers: number) => void)): number
    connect_after(sigName: "mouse-target-changed", callback: ((obj: WebView, hit_test_result: HitTestResult, modifiers: number) => void)): number
    emit(sigName: "mouse-target-changed", hit_test_result: HitTestResult, modifiers: number): void
    connect(sigName: "permission-request", callback: ((obj: WebView, request: PermissionRequest) => boolean)): number
    connect_after(sigName: "permission-request", callback: ((obj: WebView, request: PermissionRequest) => boolean)): number
    emit(sigName: "permission-request", request: PermissionRequest): void
    connect(sigName: "print", callback: ((obj: WebView, print_operation: PrintOperation) => boolean)): number
    connect_after(sigName: "print", callback: ((obj: WebView, print_operation: PrintOperation) => boolean)): number
    emit(sigName: "print", print_operation: PrintOperation): void
    connect(sigName: "ready-to-show", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "ready-to-show", callback: ((obj: WebView) => void)): number
    emit(sigName: "ready-to-show"): void
    connect(sigName: "resource-load-started", callback: ((obj: WebView, resource: WebResource, request: URIRequest) => void)): number
    connect_after(sigName: "resource-load-started", callback: ((obj: WebView, resource: WebResource, request: URIRequest) => void)): number
    emit(sigName: "resource-load-started", resource: WebResource, request: URIRequest): void
    connect(sigName: "run-as-modal", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "run-as-modal", callback: ((obj: WebView) => void)): number
    emit(sigName: "run-as-modal"): void
    connect(sigName: "run-color-chooser", callback: ((obj: WebView, request: ColorChooserRequest) => boolean)): number
    connect_after(sigName: "run-color-chooser", callback: ((obj: WebView, request: ColorChooserRequest) => boolean)): number
    emit(sigName: "run-color-chooser", request: ColorChooserRequest): void
    connect(sigName: "run-file-chooser", callback: ((obj: WebView, request: FileChooserRequest) => boolean)): number
    connect_after(sigName: "run-file-chooser", callback: ((obj: WebView, request: FileChooserRequest) => boolean)): number
    emit(sigName: "run-file-chooser", request: FileChooserRequest): void
    connect(sigName: "script-dialog", callback: ((obj: WebView, dialog: ScriptDialog) => boolean)): number
    connect_after(sigName: "script-dialog", callback: ((obj: WebView, dialog: ScriptDialog) => boolean)): number
    emit(sigName: "script-dialog", dialog: ScriptDialog): void
    connect(sigName: "show-notification", callback: ((obj: WebView, notification: Notification) => boolean)): number
    connect_after(sigName: "show-notification", callback: ((obj: WebView, notification: Notification) => boolean)): number
    emit(sigName: "show-notification", notification: Notification): void
    connect(sigName: "show-option-menu", callback: ((obj: WebView, menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "show-option-menu", callback: ((obj: WebView, menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    emit(sigName: "show-option-menu", menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): void
    connect(sigName: "submit-form", callback: ((obj: WebView, request: FormSubmissionRequest) => void)): number
    connect_after(sigName: "submit-form", callback: ((obj: WebView, request: FormSubmissionRequest) => void)): number
    emit(sigName: "submit-form", request: FormSubmissionRequest): void
    connect(sigName: "web-process-crashed", callback: ((obj: WebView) => boolean)): number
    connect_after(sigName: "web-process-crashed", callback: ((obj: WebView) => boolean)): number
    emit(sigName: "web-process-crashed"): void
    connect(sigName: "web-process-terminated", callback: ((obj: WebView, reason: WebProcessTerminationReason) => void)): number
    connect_after(sigName: "web-process-terminated", callback: ((obj: WebView, reason: WebProcessTerminationReason) => void)): number
    emit(sigName: "web-process-terminated", reason: WebProcessTerminationReason): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: WebView, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: WebView, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: WebView) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((obj: WebView, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: WebView, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((obj: WebView, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: WebView, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: WebView) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((obj: WebView, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: WebView, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((obj: WebView, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: WebView, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((obj: WebView, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: WebView, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: ((obj: WebView, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: WebView, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: WebView) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((obj: WebView, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: WebView, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((obj: WebView, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: WebView, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: WebView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((obj: WebView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: WebView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((obj: WebView, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: WebView, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((obj: WebView, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: WebView, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((obj: WebView, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: WebView, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((obj: WebView, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: WebView, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((obj: WebView, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: WebView, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((obj: WebView, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: WebView, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: WebView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((obj: WebView, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: WebView, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((obj: WebView, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: WebView, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: WebView, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((obj: WebView, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: WebView, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((obj: WebView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: WebView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((obj: WebView, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: WebView, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((obj: WebView, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: WebView, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((obj: WebView, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: WebView, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: WebView) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((obj: WebView, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: WebView, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "hide", callback: ((obj: WebView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((obj: WebView, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: WebView, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((obj: WebView, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: WebView, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((obj: WebView, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: WebView, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((obj: WebView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: WebView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((obj: WebView, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: WebView, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "map", callback: ((obj: WebView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((obj: WebView, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: WebView, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((obj: WebView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: WebView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((obj: WebView, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: WebView, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((obj: WebView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: WebView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((obj: WebView, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: WebView, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: ((obj: WebView) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: WebView) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((obj: WebView, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: WebView, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((obj: WebView, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: WebView, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((obj: WebView, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: WebView, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: ((obj: WebView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: WebView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "realize", callback: ((obj: WebView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: ((obj: WebView, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: WebView, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((obj: WebView, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: WebView, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((obj: WebView, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: WebView, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((obj: WebView, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: WebView, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: WebView, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "show", callback: ((obj: WebView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((obj: WebView, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: WebView, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((obj: WebView, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: WebView, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((obj: WebView, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: WebView, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((obj: WebView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: WebView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((obj: WebView, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: WebView, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: WebView) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((obj: WebView, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: WebView, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: WebView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((obj: WebView, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: WebView, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: ((obj: WebView) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: WebView) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((obj: WebView, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: WebView, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((obj: WebView, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: WebView, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::editable", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::estimated-load-progress", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::favicon", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loading", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-playing-audio", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-level", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebView_ConstructProps)
    _init (config?: WebView_ConstructProps): void
    static new(): WebView
    static newWithContext(context: WebContext): WebView
    static newWithRelatedView(web_view: WebView): WebView
    static newWithSettings(settings: Settings): WebView
    static newWithUserContentManager(user_content_manager: UserContentManager): WebView
    static $gtype: GObject.Type
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
    focus_on_click:boolean
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
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasDefault(): boolean
    hasFocus(): boolean
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(group_cycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focus_on_click: boolean): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(no_show_all: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: WebViewBase, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((obj: WebViewBase, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: WebViewBase, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((obj: WebViewBase, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: WebViewBase, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((obj: WebViewBase, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: WebViewBase, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: ((obj: WebViewBase, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: WebViewBase, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((obj: WebViewBase, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: WebViewBase, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((obj: WebViewBase, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: WebViewBase, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((obj: WebViewBase, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: WebViewBase, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((obj: WebViewBase, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: WebViewBase, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: WebViewBase, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((obj: WebViewBase, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: WebViewBase, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((obj: WebViewBase, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: WebViewBase, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: WebViewBase, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((obj: WebViewBase, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: WebViewBase, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: WebViewBase, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((obj: WebViewBase, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: WebViewBase, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((obj: WebViewBase, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: WebViewBase, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((obj: WebViewBase, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: WebViewBase, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((obj: WebViewBase, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: WebViewBase, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((obj: WebViewBase, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: WebViewBase, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "hide", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((obj: WebViewBase, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: WebViewBase, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((obj: WebViewBase, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: WebViewBase, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((obj: WebViewBase, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: WebViewBase, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "map", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((obj: WebViewBase, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: WebViewBase, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((obj: WebViewBase, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: WebViewBase, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: WebViewBase, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((obj: WebViewBase, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: WebViewBase, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: ((obj: WebViewBase) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: WebViewBase) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((obj: WebViewBase, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: WebViewBase, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((obj: WebViewBase, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: WebViewBase, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: ((obj: WebViewBase, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: WebViewBase, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "realize", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: ((obj: WebViewBase, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: WebViewBase, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((obj: WebViewBase, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: WebViewBase, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((obj: WebViewBase, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: WebViewBase, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((obj: WebViewBase, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: WebViewBase, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: WebViewBase, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "show", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((obj: WebViewBase, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: WebViewBase, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((obj: WebViewBase, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: WebViewBase, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((obj: WebViewBase, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: WebViewBase, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((obj: WebViewBase, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: WebViewBase, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((obj: WebViewBase, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: WebViewBase, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((obj: WebViewBase, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: WebViewBase, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((obj: WebViewBase, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: WebViewBase, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: ((obj: WebViewBase) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: WebViewBase) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: WebViewBase, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((obj: WebViewBase, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: WebViewBase, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::border-width", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebViewBase_ConstructProps)
    _init (config?: WebViewBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsiteDataManager_ConstructProps extends GObject.Object_ConstructProps {
    base_cache_directory?:string
    base_data_directory?:string
    disk_cache_directory?:string
    hsts_cache_directory?:string
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
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clearFinish(result: Gio.AsyncResult): boolean
    fetch(types: WebsiteDataTypes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchFinish(result: Gio.AsyncResult): WebsiteData[]
    getBaseCacheDirectory(): string | null
    getBaseDataDirectory(): string | null
    getCookieManager(): CookieManager
    getDiskCacheDirectory(): string | null
    getHstsCacheDirectory(): string | null
    getIndexeddbDirectory(): string | null
    getLocalStorageDirectory(): string | null
    getOfflineApplicationCacheDirectory(): string | null
    getWebsqlDirectory(): string | null
    isEphemeral(): boolean
    remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsiteDataManager_ConstructProps)
    _init (config?: WebsiteDataManager_ConstructProps): void
    static newEphemeral(): WebsiteDataManager
    static $gtype: GObject.Type
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
    getFullscreen(): boolean
    getGeometry(): /* geometry */ Gdk.Rectangle
    getLocationbarVisible(): boolean
    getMenubarVisible(): boolean
    getResizable(): boolean
    getScrollbarsVisible(): boolean
    getStatusbarVisible(): boolean
    getToolbarVisible(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WindowProperties_ConstructProps)
    _init (config?: WindowProperties_ConstructProps): void
    static $gtype: GObject.Type
}
export class ApplicationInfo {
    /* Methods of WebKit2.ApplicationInfo */
    getName(): string
    getVersion(): [ /* major */ number, /* minor */ number | null, /* micro */ number | null ]
    ref(): ApplicationInfo
    setName(name: string): void
    setVersion(major: number, minor: number, micro: number): void
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
    getPassword(): string
    getPersistence(): CredentialPersistence
    getUsername(): string
    hasPassword(): boolean
    static name: string
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    constructor(username: string, password: string, persistence: CredentialPersistence)
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
}
export class DeviceInfoPermissionRequestPrivate {
    static name: string
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
export class GeolocationManagerPrivate {
    static name: string
}
export class GeolocationPermissionRequestPrivate {
    static name: string
}
export class GeolocationPosition {
    /* Methods of WebKit2.GeolocationPosition */
    copy(): GeolocationPosition
    free(): void
    setAltitude(altitude: number): void
    setAltitudeAccuracy(altitude_accuracy: number): void
    setHeading(heading: number): void
    setSpeed(speed: number): void
    setTimestamp(timestamp: number): void
    static name: string
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
    constructor(latitude: number, longitude: number, accuracy: number)
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
}
export class HitTestResultPrivate {
    static name: string
}
export class InstallMissingMediaPluginsPermissionRequestPrivate {
    static name: string
}
export class JavascriptResult {
    /* Methods of WebKit2.JavascriptResult */
    getJsValue(): JavaScriptCore.Value
    ref(): JavascriptResult
    unref(): void
    static name: string
}
export class MimeInfo {
    /* Methods of WebKit2.MimeInfo */
    getDescription(): string
    getExtensions(): string[]
    getMimeType(): string
    ref(): MimeInfo
    unref(): void
    static name: string
}
export class NavigationAction {
    /* Methods of WebKit2.NavigationAction */
    copy(): NavigationAction
    free(): void
    getModifiers(): number
    getMouseButton(): number
    getNavigationType(): NavigationType
    getRequest(): URIRequest
    isRedirect(): boolean
    isUserGesture(): boolean
    static name: string
}
export class NavigationPolicyDecisionPrivate {
    static name: string
}
export class NetworkProxySettings {
    /* Methods of WebKit2.NetworkProxySettings */
    addProxyForScheme(scheme: string, proxy_uri: string): void
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
    getLabel(): string
    getTooltip(): string
    isEnabled(): boolean
    isGroupChild(): boolean
    isGroupLabel(): boolean
    isSelected(): boolean
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
    close(): void
    confirmSetConfirmed(confirmed: boolean): void
    getDialogType(): ScriptDialogType
    getMessage(): string
    promptGetDefaultText(): string
    promptSetText(text: string): void
    ref(): ScriptDialog
    unref(): void
    static name: string
}
export class SecurityManagerPrivate {
    static name: string
}
export class SecurityOrigin {
    /* Methods of WebKit2.SecurityOrigin */
    getHost(): string | null
    getPort(): number
    getProtocol(): string | null
    isOpaque(): boolean
    ref(): SecurityOrigin
    unref(): void
    static name: string
    static new(protocol: string, host: string, port: number): SecurityOrigin
    constructor(protocol: string, host: string, port: number)
    static new(protocol: string, host: string, port: number): SecurityOrigin
    static newForUri(uri: string): SecurityOrigin
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
export class UserContentFilter {
    /* Methods of WebKit2.UserContentFilter */
    getIdentifier(): string
    ref(): UserContentFilter
    unref(): void
    static name: string
}
export class UserContentFilterStorePrivate {
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
    static newForWorld(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, world_name: string, whitelist?: string[] | null, blacklist?: string[] | null): UserScript
}
export class UserStyleSheet {
    /* Methods of WebKit2.UserStyleSheet */
    ref(): UserStyleSheet
    unref(): void
    static name: string
    static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, whitelist?: string[] | null, blacklist?: string[] | null): UserStyleSheet
    constructor(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, whitelist?: string[] | null, blacklist?: string[] | null)
    static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, whitelist?: string[] | null, blacklist?: string[] | null): UserStyleSheet
    static newForWorld(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, world_name: string, whitelist?: string[] | null, blacklist?: string[] | null): UserStyleSheet
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
    getName(): string
    getSize(types: WebsiteDataTypes): number
    getTypes(): WebsiteDataTypes
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
}