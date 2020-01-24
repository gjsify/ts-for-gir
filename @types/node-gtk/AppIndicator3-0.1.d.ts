/**
 * AppIndicator3-0.1
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace AppIndicator3 {

export enum IndicatorCategory {
    APPLICATION_STATUS,
    COMMUNICATIONS,
    SYSTEM_SERVICES,
    HARDWARE,
    OTHER,
}
export enum IndicatorStatus {
    PASSIVE,
    ACTIVE,
    ATTENTION,
}
export const INDICATOR_SIGNAL_CONNECTION_CHANGED:string
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON:string
export const INDICATOR_SIGNAL_NEW_ICON:string
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH:string
export const INDICATOR_SIGNAL_NEW_LABEL:string
export const INDICATOR_SIGNAL_NEW_STATUS:string
export const INDICATOR_SIGNAL_SCROLL_EVENT:string
export interface Indicator_ConstructProps extends GObject.Object_ConstructProps {
    attention_icon_desc?:string
    attention_icon_name?:string
    category?:string
    icon_desc?:string
    icon_name?:string
    icon_theme_path?:string
    id?:string
    label?:string
    label_guide?:string
    ordering_index?:number
    status?:string
    title?:string
}
export class Indicator {
    /* Properties of AppIndicator3.Indicator */
    attention_icon_desc:string
    attention_icon_name:string
    readonly connected:boolean
    icon_desc:string
    icon_name:string
    icon_theme_path:string
    label:string
    label_guide:string
    ordering_index:number
    status:string
    title:string
    /* Fields of AppIndicator3.Indicator */
    parent:GObject.Object
    priv:IndicatorPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of AppIndicator3.Indicator */
    buildMenuFromDesktop(desktop_file: string, desktop_profile: string): void
    getAttentionIcon(): string
    getAttentionIconDesc(): string
    getCategory(): IndicatorCategory
    getIcon(): string
    getIconDesc(): string
    getIconThemePath(): string
    getId(): string
    getLabel(): string
    getLabelGuide(): string
    getMenu(): Gtk.Menu
    getOrderingIndex(): number
    getSecondaryActivateTarget(): Gtk.Widget
    getStatus(): IndicatorStatus
    getTitle(): string
    setAttentionIcon(icon_name: string): void
    setAttentionIconFull(icon_name: string, icon_desc: string): void
    setIcon(icon_name: string): void
    setIconFull(icon_name: string, icon_desc: string): void
    setIconThemePath(icon_theme_path: string): void
    setLabel(label: string, guide: string): void
    setMenu(menu?: Gtk.Menu | null): void
    setOrderingIndex(ordering_index: number): void
    setSecondaryActivateTarget(menuitem?: Gtk.Widget | null): void
    setStatus(status: IndicatorStatus): void
    setTitle(title?: string | null): void
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
    /* Virtual methods of AppIndicator3.Indicator */
    vfuncConnectionChanged?(connected: boolean): void
    vfuncNewAttentionIcon?(): void
    vfuncNewIcon?(): void
    vfuncNewIconThemePath?(icon_theme_path: string): void
    vfuncNewLabel?(label: string, guide: string): void
    vfuncNewStatus?(status: string): void
    vfuncScrollEvent?(delta: number, direction: Gdk.ScrollDirection): void
    vfuncUnfallback?(status_icon: Gtk.StatusIcon): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AppIndicator3.Indicator */
    connect(sigName: "connection-changed", callback: ((obj: Indicator, arg1: boolean) => void)): number
    connect_after(sigName: "connection-changed", callback: ((obj: Indicator, arg1: boolean) => void)): number
    emit(sigName: "connection-changed", arg1: boolean): void
    on(sigName: "connection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-attention-icon", callback: ((obj: Indicator) => void)): number
    connect_after(sigName: "new-attention-icon", callback: ((obj: Indicator) => void)): number
    emit(sigName: "new-attention-icon"): void
    on(sigName: "new-attention-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-attention-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-attention-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-icon", callback: ((obj: Indicator) => void)): number
    connect_after(sigName: "new-icon", callback: ((obj: Indicator) => void)): number
    emit(sigName: "new-icon"): void
    on(sigName: "new-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-icon-theme-path", callback: ((obj: Indicator, object: string) => void)): number
    connect_after(sigName: "new-icon-theme-path", callback: ((obj: Indicator, object: string) => void)): number
    emit(sigName: "new-icon-theme-path", object: string): void
    on(sigName: "new-icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-label", callback: ((obj: Indicator, object: string, p0: string) => void)): number
    connect_after(sigName: "new-label", callback: ((obj: Indicator, object: string, p0: string) => void)): number
    emit(sigName: "new-label", object: string, p0: string): void
    on(sigName: "new-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-status", callback: ((obj: Indicator, arg1: string) => void)): number
    connect_after(sigName: "new-status", callback: ((obj: Indicator, arg1: string) => void)): number
    emit(sigName: "new-status", arg1: string): void
    on(sigName: "new-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: ((obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    connect_after(sigName: "scroll-event", callback: ((obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    emit(sigName: "scroll-event", arg1: number, arg2: Gdk.ScrollDirection): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-icon-desc", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-desc", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-icon-name", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-name", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-desc", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-desc", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-theme-path", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-theme-path", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label-guide", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-guide", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ordering-index", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ordering-index", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Indicator_ConstructProps)
    _init (config?: Indicator_ConstructProps): void
    static new(id: string, icon_name: string, category: IndicatorCategory): Indicator
    static newWithPath(id: string, icon_name: string, category: IndicatorCategory, icon_theme_path: string): Indicator
    static $gtype: GObject.Type
}
export class IndicatorPrivate {
    static name: string
}
}