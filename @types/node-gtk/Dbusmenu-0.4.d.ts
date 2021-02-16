/**
 * Dbusmenu-0.4
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Dbusmenu {

export enum Status {
    NORMAL,
    NOTICE,
}
export enum TextDirection {
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
export interface ClientTypeHandler {
    (newitem: Menuitem, parent: Menuitem, client: Client): boolean
}
export interface menuitem_about_to_show_cb {
    (mi: Menuitem): void
}
export interface menuitem_buildvariant_slot_t {
    (mi: Menuitem, properties?: string | null): GLib.Variant
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    dbusName?: string
    dbusObject?: string
    groupEvents?: boolean
}
export class Client {
    /* Properties of Dbusmenu.Client */
    groupEvents: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu.Client */
    addTypeHandler(type: string, newfunc: ClientTypeHandler): boolean
    addTypeHandlerFull(type: string, newfunc: ClientTypeHandler): boolean
    getIconPaths(): string[]
    getRoot(): Menuitem
    getStatus(): Status
    getTextDirection(): TextDirection
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu.Client */
    connect(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    connect_after(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null): void
    on(sigName: "event-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    connect_after(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    emit(sigName: "icon-theme-dirs-changed", arg1?: object | null): void
    on(sigName: "icon-theme-dirs-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-theme-dirs-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-theme-dirs-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number): void
    on(sigName: "item-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    emit(sigName: "layout-updated"): void
    on(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "new-menuitem", arg1: GObject.Object): void
    on(sigName: "new-menuitem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-menuitem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-menuitem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "root-changed", arg1: GObject.Object): void
    on(sigName: "root-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "root-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "root-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class Menuitem {
    /* Fields of Dbusmenu.Menuitem */
    parent: GObject.Object
    priv: MenuitemPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu.Menuitem */
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
    propertyGetByteArray(property: string): any
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
    /* Methods of GObject.Object */
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
    /* Virtual methods of Dbusmenu.Menuitem */
    vfuncChildAdded(position: number): void
    vfuncChildMoved(newpos: number, oldpos: number): void
    vfuncChildRemoved(): void
    vfuncHandleEvent(name: string, variant: GLib.Variant, timestamp: number): void
    vfuncShowToUser(timestamp: number, cbData?: object | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu.Menuitem */
    connect(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    connect_after(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    emit(sigName: "about-to-show"): void
    on(sigName: "about-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "about-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "about-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    emit(sigName: "child-removed", arg1: GObject.Object): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    emit(sigName: "item-activated", arg1: number): void
    on(sigName: "item-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    connect_after(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    on(sigName: "property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    connect_after(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    emit(sigName: "realized"): void
    on(sigName: "realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    connect_after(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    emit(sigName: "show-to-user", arg1: number): void
    on(sigName: "show-to-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-to-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-to-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class MenuitemProxy {
    /* Fields of Dbusmenu.Menuitem */
    parent: GObject.Object
    priv: MenuitemPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu.MenuitemProxy */
    getWrapped(): Menuitem
    /* Methods of Dbusmenu.Menuitem */
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
    propertyGetByteArray(property: string): any
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
    /* Methods of GObject.Object */
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
    /* Virtual methods of Dbusmenu.Menuitem */
    vfuncChildAdded(position: number): void
    vfuncChildMoved(newpos: number, oldpos: number): void
    vfuncChildRemoved(): void
    vfuncHandleEvent(name: string, variant: GLib.Variant, timestamp: number): void
    vfuncShowToUser(timestamp: number, cbData?: object | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu.Menuitem */
    connect(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    connect_after(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    emit(sigName: "about-to-show"): void
    on(sigName: "about-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "about-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "about-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    emit(sigName: "child-removed", arg1: GObject.Object): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    emit(sigName: "item-activated", arg1: number): void
    on(sigName: "item-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    connect_after(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    on(sigName: "property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    connect_after(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    emit(sigName: "realized"): void
    on(sigName: "realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    connect_after(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    emit(sigName: "show-to-user", arg1: number): void
    on(sigName: "show-to-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-to-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-to-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class Server {
    /* Properties of Dbusmenu.Server */
    rootNode: Menuitem
    readonly version: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dbusmenu.Server */
    getIconPaths(): string[]
    getStatus(): Status
    getTextDirection(): TextDirection
    setIconPaths(iconPaths: string[]): void
    setRoot(root: Menuitem): void
    setStatus(status: Status): void
    setTextDirection(dir: TextDirection): void
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu.Server */
    connect(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    emit(sigName: "item-activation-requested", arg1: number, arg2: number): void
    on(sigName: "item-activation-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-activation-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-activation-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "item-property-updated", object: number, p0: string, p1: GLib.Variant): void
    on(sigName: "item-property-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-property-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-property-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    connect_after(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    emit(sigName: "item-updated", object: number): void
    on(sigName: "item-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    emit(sigName: "layout-updated", arg1: number, arg2: number): void
    on(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "layout-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export abstract class ClientClass {
    /* Fields of Dbusmenu.ClientClass */
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
export class ClientPrivate {
    static name: string
}
export abstract class MenuitemClass {
    /* Fields of Dbusmenu.MenuitemClass */
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
export class MenuitemPrivate {
    static name: string
}
export abstract class MenuitemProxyClass {
    /* Fields of Dbusmenu.MenuitemProxyClass */
    parentClass: MenuitemClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    static name: string
}
export class MenuitemProxyPrivate {
    static name: string
}
export abstract class ServerClass {
    /* Fields of Dbusmenu.ServerClass */
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
export class ServerPrivate {
    static name: string
}
}