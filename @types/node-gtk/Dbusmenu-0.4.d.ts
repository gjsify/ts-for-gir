/**
 * Dbusmenu-0.4
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Dbusmenu {

enum Status {
    NORMAL,
    NOTICE,
}
enum TextDirection {
    NONE,
    LTR,
    RTL,
}
export const CLIENT_PROP_DBUS_NAME: string
export const CLIENT_PROP_DBUS_OBJECT: string
export const CLIENT_PROP_GROUP_EVENTS: string
export const CLIENT_PROP_STATUS: string
export const CLIENT_PROP_TEXT_DIRECTION: string
export const CLIENT_SIGNAL_EVENT_RESULT: string
export const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string
export const CLIENT_SIGNAL_ITEM_ACTIVATE: string
export const CLIENT_SIGNAL_LAYOUT_UPDATED: string
export const CLIENT_SIGNAL_NEW_MENUITEM: string
export const CLIENT_SIGNAL_ROOT_CHANGED: string
export const CLIENT_TYPES_DEFAULT: string
export const CLIENT_TYPES_IMAGE: string
export const CLIENT_TYPES_SEPARATOR: string
export const MENUITEM_CHILD_DISPLAY_SUBMENU: string
export const MENUITEM_DISPOSITION_ALERT: string
export const MENUITEM_DISPOSITION_INFORMATIVE: string
export const MENUITEM_DISPOSITION_NORMAL: string
export const MENUITEM_DISPOSITION_WARNING: string
export const MENUITEM_EVENT_ACTIVATED: string
export const MENUITEM_EVENT_CLOSED: string
export const MENUITEM_EVENT_OPENED: string
export const MENUITEM_ICON_NAME_BLANK: string
export const MENUITEM_PROP_ACCESSIBLE_DESC: string
export const MENUITEM_PROP_CHILD_DISPLAY: string
export const MENUITEM_PROP_DISPOSITION: string
export const MENUITEM_PROP_ENABLED: string
export const MENUITEM_PROP_ICON_DATA: string
export const MENUITEM_PROP_ICON_NAME: string
export const MENUITEM_PROP_LABEL: string
export const MENUITEM_PROP_SHORTCUT: string
export const MENUITEM_PROP_TOGGLE_STATE: string
export const MENUITEM_PROP_TOGGLE_TYPE: string
export const MENUITEM_PROP_TYPE: string
export const MENUITEM_PROP_VISIBLE: string
export const MENUITEM_SHORTCUT_ALT: string
export const MENUITEM_SHORTCUT_CONTROL: string
export const MENUITEM_SHORTCUT_SHIFT: string
export const MENUITEM_SHORTCUT_SUPER: string
export const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string
export const MENUITEM_SIGNAL_CHILD_ADDED: string
export const MENUITEM_SIGNAL_CHILD_MOVED: string
export const MENUITEM_SIGNAL_CHILD_REMOVED: string
export const MENUITEM_SIGNAL_EVENT: string
export const MENUITEM_SIGNAL_ITEM_ACTIVATED: string
export const MENUITEM_SIGNAL_PROPERTY_CHANGED: string
export const MENUITEM_SIGNAL_REALIZED: string
export const MENUITEM_SIGNAL_SHOW_TO_USER: string
export const MENUITEM_TOGGLE_CHECK: string
export const MENUITEM_TOGGLE_RADIO: string
export const MENUITEM_TOGGLE_STATE_CHECKED: number
export const MENUITEM_TOGGLE_STATE_UNCHECKED: number
export const MENUITEM_TOGGLE_STATE_UNKNOWN: number
export const SERVER_PROP_DBUS_OBJECT: string
export const SERVER_PROP_ROOT_NODE: string
export const SERVER_PROP_STATUS: string
export const SERVER_PROP_TEXT_DIRECTION: string
export const SERVER_PROP_VERSION: string
export const SERVER_SIGNAL_ID_PROP_UPDATE: string
export const SERVER_SIGNAL_ID_UPDATE: string
export const SERVER_SIGNAL_ITEM_ACTIVATION: string
export const SERVER_SIGNAL_LAYOUT_UPDATED: string
interface ClientTypeHandler {
    (newitem: Menuitem, parent: Menuitem, client: Client): boolean
}
interface menuitem_about_to_show_cb {
    (mi: Menuitem): void
}
interface menuitem_buildvariant_slot_t {
    (mi: Menuitem, properties?: string | null): GLib.Variant
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    dbusName?: string
    dbusObject?: string
    groupEvents?: boolean
}
class Client {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Client */
    groupEvents: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Client */
    addTypeHandler(type: string, newfunc: ClientTypeHandler): boolean
    addTypeHandlerFull(type: string, newfunc: ClientTypeHandler): boolean
    getIconPaths(): string[]
    getRoot(): Menuitem
    getStatus(): Status
    getTextDirection(): TextDirection
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Dbusmenu-0.4.Dbusmenu.Client */
    connect(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    on(sigName: "event-result", callback: (object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-result", callback: (object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-result", callback: (object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null): void
    connect(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    on(sigName: "icon-theme-dirs-changed", callback: (arg1?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-theme-dirs-changed", callback: (arg1?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-theme-dirs-changed", callback: (arg1?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "icon-theme-dirs-changed", arg1?: object | null): void
    connect(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    on(sigName: "item-activate", callback: (arg1: GObject.Object, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-activate", callback: (arg1: GObject.Object, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-activate", callback: (arg1: GObject.Object, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number): void
    connect(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    on(sigName: "layout-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "layout-updated"): void
    connect(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    on(sigName: "new-menuitem", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-menuitem", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-menuitem", callback: (arg1: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "new-menuitem", arg1: GObject.Object): void
    connect(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    on(sigName: "root-changed", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "root-changed", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "root-changed", callback: (arg1: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "root-changed", arg1: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, object: string): Client
    static $gtype: GObject.Type
}
export interface Menuitem_ConstructProps extends GObject.Object_ConstructProps {
    id?: number
}
class Menuitem {
    /* Fields of Dbusmenu-0.4.Dbusmenu.Menuitem */
    parent: GObject.Object
    priv: MenuitemPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    childAddPosition(child: Menuitem, position: number): boolean
    childAppend(child: Menuitem): boolean
    childDelete(child: Menuitem): boolean
    childFind(id: number): Menuitem
    childPrepend(child: Menuitem): boolean
    childReorder(child: Menuitem, position: number): boolean
    findId(id: number): Menuitem
    foreach(func?: object | null, data?: object | null): void
    getChildren(): Menuitem[]
    getId(): number
    getParent(): Menuitem
    getPosition(parent: Menuitem): number
    getPositionRealized(parent: Menuitem): number
    getRoot(): boolean
    handleEvent(name: string, variant: GLib.Variant, timestamp: number): void
    propertiesCopy(): GLib.HashTable
    propertiesList(): string[]
    propertyExist(property: string): boolean
    propertyGet(property: string): string
    propertyGetBool(property: string): boolean
    propertyGetByteArray(property: string): any[]
    propertyGetInt(property: string): number
    propertyGetVariant(property: string): GLib.Variant
    propertyRemove(property: string): void
    propertySet(property: string, value: string): boolean
    propertySetBool(property: string, value: boolean): boolean
    propertySetByteArray(property: string, value: number, nelements: number): boolean
    propertySetInt(property: string, value: number): boolean
    propertySetVariant(property: string, value: GLib.Variant): boolean
    sendAboutToShow(cb?: object | null, cbData?: object | null): void
    setParent(parent: Menuitem): boolean
    setRoot(root: boolean): void
    showToUser(timestamp: number): void
    takeChildren(): Menuitem[]
    unparent(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Dbusmenu-0.4.Dbusmenu.Menuitem */
    connect(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    on(sigName: "about-to-show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "about-to-show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "about-to-show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "about-to-show"): void
    connect(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    on(sigName: "child-added", callback: (arg1: GObject.Object, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (arg1: GObject.Object, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (arg1: GObject.Object, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    connect(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    on(sigName: "child-moved", callback: (arg1: GObject.Object, arg2: number, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (arg1: GObject.Object, arg2: number, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (arg1: GObject.Object, arg2: number, arg3: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    connect(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (arg1: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", arg1: GObject.Object): void
    connect(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    on(sigName: "event", callback: (arg1: string, arg2: GLib.Variant, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (arg1: string, arg2: GLib.Variant, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (arg1: string, arg2: GLib.Variant, arg3: number) => void): NodeJS.EventEmitter
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    connect(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    on(sigName: "item-activated", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-activated", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-activated", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "item-activated", arg1: number): void
    connect(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    on(sigName: "property-changed", callback: (arg1: string, arg2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-changed", callback: (arg1: string, arg2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-changed", callback: (arg1: string, arg2: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    connect(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    on(sigName: "realized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realized", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realized"): void
    connect(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    on(sigName: "show-to-user", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-to-user", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-to-user", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "show-to-user", arg1: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Menuitem_ConstructProps)
    _init (config?: Menuitem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menuitem
    static newWithId(id: number): Menuitem
    static $gtype: GObject.Type
}
export interface MenuitemProxy_ConstructProps extends Menuitem_ConstructProps {
    menuItem?: Menuitem
}
class MenuitemProxy {
    /* Fields of Dbusmenu-0.4.Dbusmenu.Menuitem */
    parent: GObject.Object
    priv: MenuitemPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.MenuitemProxy */
    getWrapped(): Menuitem
    /* Methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    childAddPosition(child: Menuitem, position: number): boolean
    childAppend(child: Menuitem): boolean
    childDelete(child: Menuitem): boolean
    childFind(id: number): Menuitem
    childPrepend(child: Menuitem): boolean
    childReorder(child: Menuitem, position: number): boolean
    findId(id: number): Menuitem
    foreach(func?: object | null, data?: object | null): void
    getChildren(): Menuitem[]
    getId(): number
    getParent(): Menuitem
    getPosition(parent: Menuitem): number
    getPositionRealized(parent: Menuitem): number
    getRoot(): boolean
    handleEvent(name: string, variant: GLib.Variant, timestamp: number): void
    propertiesCopy(): GLib.HashTable
    propertiesList(): string[]
    propertyExist(property: string): boolean
    propertyGet(property: string): string
    propertyGetBool(property: string): boolean
    propertyGetByteArray(property: string): any[]
    propertyGetInt(property: string): number
    propertyGetVariant(property: string): GLib.Variant
    propertyRemove(property: string): void
    propertySet(property: string, value: string): boolean
    propertySetBool(property: string, value: boolean): boolean
    propertySetByteArray(property: string, value: number, nelements: number): boolean
    propertySetInt(property: string, value: number): boolean
    propertySetVariant(property: string, value: GLib.Variant): boolean
    sendAboutToShow(cb?: object | null, cbData?: object | null): void
    setParent(parent: Menuitem): boolean
    setRoot(root: boolean): void
    showToUser(timestamp: number): void
    takeChildren(): Menuitem[]
    unparent(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Dbusmenu-0.4.Dbusmenu.Menuitem */
    connect(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    on(sigName: "about-to-show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "about-to-show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "about-to-show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "about-to-show"): void
    connect(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    on(sigName: "child-added", callback: (arg1: GObject.Object, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (arg1: GObject.Object, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (arg1: GObject.Object, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    connect(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    on(sigName: "child-moved", callback: (arg1: GObject.Object, arg2: number, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (arg1: GObject.Object, arg2: number, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (arg1: GObject.Object, arg2: number, arg3: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    connect(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (arg1: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (arg1: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", arg1: GObject.Object): void
    connect(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    on(sigName: "event", callback: (arg1: string, arg2: GLib.Variant, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (arg1: string, arg2: GLib.Variant, arg3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (arg1: string, arg2: GLib.Variant, arg3: number) => void): NodeJS.EventEmitter
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    connect(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    on(sigName: "item-activated", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-activated", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-activated", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "item-activated", arg1: number): void
    connect(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    on(sigName: "property-changed", callback: (arg1: string, arg2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-changed", callback: (arg1: string, arg2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-changed", callback: (arg1: string, arg2: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    connect(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    on(sigName: "realized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realized", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realized"): void
    connect(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    on(sigName: "show-to-user", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-to-user", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-to-user", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "show-to-user", arg1: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MenuitemProxy_ConstructProps)
    _init (config?: MenuitemProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mi: Menuitem): MenuitemProxy
    static new(): MenuitemProxy
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    dbusObject?: string
    rootNode?: Menuitem
}
class Server {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Server */
    rootNode: Menuitem
    readonly version: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Server */
    getIconPaths(): string[]
    getStatus(): Status
    getTextDirection(): TextDirection
    setIconPaths(iconPaths: string[]): void
    setRoot(root: Menuitem): void
    setStatus(status: Status): void
    setTextDirection(dir: TextDirection): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Dbusmenu-0.4.Dbusmenu.Server */
    connect(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    on(sigName: "item-activation-requested", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-activation-requested", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-activation-requested", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "item-activation-requested", arg1: number, arg2: number): void
    connect(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    on(sigName: "item-property-updated", callback: (object: number, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-property-updated", callback: (object: number, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-property-updated", callback: (object: number, p0: string, p1: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "item-property-updated", object: number, p0: string, p1: GLib.Variant): void
    connect(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    on(sigName: "item-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-updated", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "item-updated", object: number): void
    connect(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    on(sigName: "layout-updated", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout-updated", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout-updated", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout-updated", arg1: number, arg2: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: string): Server
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.ClientClass */
    parentClass: GObject.ObjectClass
    layoutUpdated: () => void
    rootChanged: (newroot: Menuitem) => void
    newMenuitem: (newitem: Menuitem) => void
    itemActivate: (item: Menuitem, timestamp: number) => void
    eventResult: (item: Menuitem, event: string, data: GLib.Variant, timestamp: number, error: GLib.Error) => void
    iconThemeDirs: (item: Menuitem, themeDirs: object, error: GLib.Error) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class MenuitemClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.MenuitemClass */
    parentClass: GObject.ObjectClass
    propertyChanged: (property: string, value: GLib.Variant) => void
    itemActivated: (timestamp: number) => void
    childAdded: (child: Menuitem, position: number) => void
    childRemoved: (child: Menuitem) => void
    childMoved: (child: Menuitem, newpos: number, oldpos: number) => void
    realized: () => void
    handleEvent: (mi: Menuitem, name: string, variant: GLib.Variant, timestamp: number) => void
    showToUser: (mi: Menuitem, timestamp: number, cbData?: object | null) => void
    aboutToShow: () => boolean
    event: (name: string, value: GLib.Variant, timestamp: number) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    static name: string
}
class MenuitemPrivate {
    static name: string
}
abstract class MenuitemProxyClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.MenuitemProxyClass */
    parentClass: MenuitemClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    static name: string
}
class MenuitemProxyPrivate {
    static name: string
}
abstract class ServerClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.ServerClass */
    parentClass: GObject.ObjectClass
    idPropUpdate: (id: number, property: string, value: string) => void
    idUpdate: (id: number) => void
    layoutUpdated: (revision: number) => void
    itemActivation: (id: number, timestamp: number) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    static name: string
}
class ServerPrivate {
    static name: string
}
}
export default Dbusmenu