/**
 * AppIndicator3-0.1
 */

import "node"
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

export declare namespace AppIndicator3 {

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
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string
export const INDICATOR_SIGNAL_NEW_ICON: string
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string
export const INDICATOR_SIGNAL_NEW_LABEL: string
export const INDICATOR_SIGNAL_NEW_STATUS: string
export const INDICATOR_SIGNAL_SCROLL_EVENT: string
export interface Indicator_ConstructProps extends GObject.Object_ConstructProps {
    attentionIconDesc?: string
    attentionIconName?: string
    category?: string
    iconDesc?: string
    iconName?: string
    iconThemePath?: string
    id?: string
    label?: string
    labelGuide?: string
    orderingIndex?: number
    status?: string
    title?: string
}
export class Indicator {
    /* Properties of AppIndicator3-0.1.AppIndicator3.Indicator */
    attentionIconDesc: string
    attentionIconName: string
    readonly connected: boolean
    iconDesc: string
    iconName: string
    iconThemePath: string
    label: string
    labelGuide: string
    orderingIndex: number
    status: string
    title: string
    /* Fields of AppIndicator3-0.1.AppIndicator3.Indicator */
    parent: GObject.Object
    priv: IndicatorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppIndicator3-0.1.AppIndicator3.Indicator */
    buildMenuFromDesktop(desktopFile: string, desktopProfile: string): void
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
    setAttentionIcon(iconName: string): void
    setAttentionIconFull(iconName: string, iconDesc: string): void
    setIcon(iconName: string): void
    setIconFull(iconName: string, iconDesc: string): void
    setIconThemePath(iconThemePath: string): void
    setLabel(label: string, guide: string): void
    setMenu(menu?: Gtk.Menu | null): void
    setOrderingIndex(orderingIndex: number): void
    setSecondaryActivateTarget(menuitem?: Gtk.Widget | null): void
    setStatus(status: IndicatorStatus): void
    setTitle(title?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of AppIndicator3-0.1.AppIndicator3.Indicator */
    connect(sigName: "connection-changed", callback: (($obj: Indicator, arg1: boolean) => void)): number
    on(sigName: "connection-changed", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-changed", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-changed", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "connection-changed", arg1: boolean): void
    connect(sigName: "new-attention-icon", callback: (($obj: Indicator) => void)): number
    on(sigName: "new-attention-icon", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-attention-icon", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-attention-icon", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-attention-icon"): void
    connect(sigName: "new-icon", callback: (($obj: Indicator) => void)): number
    on(sigName: "new-icon", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-icon", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-icon", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-icon"): void
    connect(sigName: "new-icon-theme-path", callback: (($obj: Indicator, object: string) => void)): number
    on(sigName: "new-icon-theme-path", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-icon-theme-path", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-icon-theme-path", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-icon-theme-path", object: string): void
    connect(sigName: "new-label", callback: (($obj: Indicator, object: string, p0: string) => void)): number
    on(sigName: "new-label", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-label", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-label", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-label", object: string, p0: string): void
    connect(sigName: "new-status", callback: (($obj: Indicator, arg1: string) => void)): number
    on(sigName: "new-status", callback: (arg1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-status", callback: (arg1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-status", callback: (arg1: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-status", arg1: string): void
    connect(sigName: "scroll-event", callback: (($obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    on(sigName: "scroll-event", callback: (arg1: number, arg2: Gdk.ScrollDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (arg1: number, arg2: Gdk.ScrollDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (arg1: number, arg2: Gdk.ScrollDirection) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", arg1: number, arg2: Gdk.ScrollDirection): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
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
    static $gtype: GObject.Type
}
export abstract class IndicatorClass {
    /* Fields of AppIndicator3-0.1.AppIndicator3.IndicatorClass */
    parentClass: GObject.ObjectClass
    newIcon: (indicator: Indicator) => void
    newAttentionIcon: (indicator: Indicator) => void
    newStatus: (indicator: Indicator, status: string) => void
    newIconThemePath: (indicator: Indicator, iconThemePath: string) => void
    newLabel: (indicator: Indicator, label: string, guide: string) => void
    connectionChanged: (indicator: Indicator, connected: boolean) => void
    scrollEvent: (indicator: Indicator, delta: number, direction: Gdk.ScrollDirection) => void
    appIndicatorReservedAts: () => void
    unfallback: (indicator: Indicator, statusIcon: Gtk.StatusIcon) => void
    appIndicatorReserved1: () => void
    appIndicatorReserved2: () => void
    appIndicatorReserved3: () => void
    appIndicatorReserved4: () => void
    appIndicatorReserved5: () => void
    appIndicatorReserved6: () => void
    static name: string
}
export class IndicatorPrivate {
    static name: string
}
}