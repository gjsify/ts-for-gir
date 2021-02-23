/**
 * Amtk-5
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

export declare namespace Amtk {

export enum FactoryFlags {
    FLAGS_NONE,
    IGNORE_GACTION,
    IGNORE_ICON,
    IGNORE_LABEL,
    IGNORE_TOOLTIP,
    IGNORE_ACCELS,
    IGNORE_ACCELS_FOR_DOC,
    IGNORE_ACCELS_FOR_APP,
}
export function actionMapAddActionEntriesCheckDups(actionMap: Gio.ActionMap, entries: Gio.ActionEntry[], userData?: object | null): void
export function finalize(): void
export function gmenuAppendItem(menu: Gio.Menu, item: Gio.MenuItem): void
export function gmenuAppendSection(menu: Gio.Menu, label: string | null, section: Gio.Menu): void
export function init(): void
export function menuItemGetLongDescription(menuItem: Gtk.MenuItem): string | null
export function menuItemSetIconName(item: Gtk.MenuItem, iconName: string): void
export function menuItemSetLongDescription(menuItem: Gtk.MenuItem, longDescription?: string | null): void
export function shortcutsGroupNew(title: string): Gtk.Container
export function shortcutsSectionNew(title: string): Gtk.Container
export function shortcutsWindowNew(parent: Gtk.Window): Gtk.ShortcutsWindow
export function utilsBindGActionToGtkAction(gActionMap: Gio.ActionMap, detailedGActionNameWithoutPrefix: string, gtkActionGroup: Gtk.ActionGroup, gtkActionName: string): void
export function utilsCreateGtkAction(gActionMap: Gio.ActionMap, detailedGActionNameWithPrefix: string, gtkActionGroup: Gtk.ActionGroup, gtkActionName: string): void
export function utilsRecentChooserMenuGetItemUri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
export function utilsRemoveMnemonic(str: string): string
export interface ActionInfoCentralStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ActionInfoCentralStore {
    /* Fields of Amtk-5.Amtk.ActionInfoCentralStore */
    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.ActionInfoCentralStore */
    lookup(actionName: string): ActionInfo
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ActionInfoCentralStore_ConstructProps)
    _init (config?: ActionInfoCentralStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getSingleton(): ActionInfoCentralStore
    static $gtype: GObject.Type
}
export interface ActionInfoStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ActionInfoStore {
    /* Fields of Amtk-5.Amtk.ActionInfoStore */
    parent: GObject.Object
    priv: ActionInfoStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.ActionInfoStore */
    add(info: ActionInfo): void
    addEntries(entries: ActionInfoEntry[], translationDomain?: string | null): void
    checkAllUsed(): void
    lookup(actionName: string): ActionInfo
    setAllAccelsToApp(application: Gtk.Application): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ActionInfoStore_ConstructProps)
    _init (config?: ActionInfoStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ActionInfoStore
    static $gtype: GObject.Type
}
export interface ApplicationWindow_ConstructProps extends GObject.Object_ConstructProps {
    applicationWindow?: Gtk.ApplicationWindow
    statusbar?: Gtk.Statusbar
}
export class ApplicationWindow {
    /* Properties of Amtk-5.Amtk.ApplicationWindow */
    statusbar: Gtk.Statusbar
    /* Fields of Amtk-5.Amtk.ApplicationWindow */
    parent: GObject.Object
    priv: ApplicationWindowPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.ApplicationWindow */
    connectMenuToStatusbar(menuShell: Gtk.MenuShell): void
    connectRecentChooserMenuToStatusbar(menu: Gtk.RecentChooserMenu): void
    createOpenRecentMenu(): Gtk.Widget
    createOpenRecentMenuItem(): Gtk.Widget
    getApplicationWindow(): Gtk.ApplicationWindow
    getStatusbar(): Gtk.Statusbar | null
    setStatusbar(statusbar?: Gtk.Statusbar | null): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ApplicationWindow_ConstructProps)
    _init (config?: ApplicationWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getFromGtkApplicationWindow(gtkWindow: Gtk.ApplicationWindow): ApplicationWindow
    static $gtype: GObject.Type
}
export interface Factory_ConstructProps extends GObject.Object_ConstructProps {
    application?: Gtk.Application
    defaultFlags?: FactoryFlags
}
export class Factory {
    /* Properties of Amtk-5.Amtk.Factory */
    defaultFlags: FactoryFlags
    /* Fields of Amtk-5.Amtk.Factory */
    parent: GObject.Object
    priv: FactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.Factory */
    createCheckMenuItem(actionName: string): Gtk.Widget
    createCheckMenuItemFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    createGmenuItem(actionName: string): Gio.MenuItem
    createGmenuItemFull(actionName: string, flags: FactoryFlags): Gio.MenuItem
    createMenuItem(actionName: string): Gtk.Widget
    createMenuItemFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    createMenuToolButton(actionName: string): Gtk.MenuToolButton
    createMenuToolButtonFull(actionName: string, flags: FactoryFlags): Gtk.MenuToolButton
    createShortcut(actionName: string): Gtk.Widget
    createShortcutFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    createSimpleMenu(entries: ActionInfoEntry[]): Gtk.Widget
    createSimpleMenuFull(entries: ActionInfoEntry[], flags: FactoryFlags): Gtk.Widget
    createToolButton(actionName: string): Gtk.ToolItem
    createToolButtonFull(actionName: string, flags: FactoryFlags): Gtk.ToolItem
    getApplication(): Gtk.Application | null
    getDefaultFlags(): FactoryFlags
    setDefaultFlags(defaultFlags: FactoryFlags): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application?: Gtk.Application | null): Factory
    static newWithDefaultApplication(): Factory
    static $gtype: GObject.Type
}
export interface MenuShell_ConstructProps extends GObject.Object_ConstructProps {
    menuShell?: Gtk.MenuShell
}
export class MenuShell {
    /* Fields of Amtk-5.Amtk.MenuShell */
    parent: GObject.Object
    priv: MenuShellPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.MenuShell */
    getMenuShell(): Gtk.MenuShell
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
    /* Signals of Amtk-5.Amtk.MenuShell */
    connect(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menuItem: Gtk.MenuItem) => void)): number
    on(sigName: "menu-item-deselected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "menu-item-deselected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "menu-item-deselected", callback: (menuItem: Gtk.MenuItem) => void): NodeJS.EventEmitter
    emit(sigName: "menu-item-deselected", menuItem: Gtk.MenuItem): void
    connect(sigName: "menu-item-selected", callback: (($obj: MenuShell, menuItem: Gtk.MenuItem) => void)): number
    on(sigName: "menu-item-selected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "menu-item-selected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "menu-item-selected", callback: (menuItem: Gtk.MenuItem) => void): NodeJS.EventEmitter
    emit(sigName: "menu-item-selected", menuItem: Gtk.MenuItem): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MenuShell_ConstructProps)
    _init (config?: MenuShell_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getFromGtkMenuShell(gtkMenuShell: Gtk.MenuShell): MenuShell
    static $gtype: GObject.Type
}
export class ActionInfo {
    /* Methods of Amtk-5.Amtk.ActionInfo */
    copy(): ActionInfo
    getAccels(): string[]
    getActionName(): string | null
    getIconName(): string | null
    getLabel(): string | null
    getTooltip(): string | null
    hasBeenUsed(): boolean
    markAsUsed(): void
    ref(): ActionInfo
    setAccels(accels: string[]): void
    setActionName(actionName: string): void
    setIconName(iconName?: string | null): void
    setLabel(label?: string | null): void
    setTooltip(tooltip?: string | null): void
    unref(): void
    static name: string
    static new(): ActionInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ActionInfo
    static newFromEntry(infoEntry: ActionInfoEntry, translationDomain?: string | null): ActionInfo
}
export abstract class ActionInfoCentralStoreClass {
    /* Fields of Amtk-5.Amtk.ActionInfoCentralStoreClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ActionInfoCentralStorePrivate {
    static name: string
}
export class ActionInfoEntry {
    /* Fields of Amtk-5.Amtk.ActionInfoEntry */
    actionName: string
    iconName: string
    label: string
    accel: string
    tooltip: string
    static name: string
}
export abstract class ActionInfoStoreClass {
    /* Fields of Amtk-5.Amtk.ActionInfoStoreClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ActionInfoStorePrivate {
    static name: string
}
export abstract class ApplicationWindowClass {
    /* Fields of Amtk-5.Amtk.ApplicationWindowClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ApplicationWindowPrivate {
    static name: string
}
export abstract class FactoryClass {
    /* Fields of Amtk-5.Amtk.FactoryClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class FactoryPrivate {
    static name: string
}
export abstract class MenuShellClass {
    /* Fields of Amtk-5.Amtk.MenuShellClass */
    parentClass: GObject.ObjectClass
    menuItemSelected: any
    menuItemDeselected: any
    padding: object[]
    static name: string
}
export class MenuShellPrivate {
    static name: string
}
}