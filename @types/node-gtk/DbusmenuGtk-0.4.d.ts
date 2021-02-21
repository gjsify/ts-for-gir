/**
 * DbusmenuGtk-0.4
 */

import "node"
import type { Gtk } from './Gtk-2.0';
import type { Gdk } from './Gdk-2.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';
import type { Dbusmenu } from './Dbusmenu-0.4';

export declare namespace DbusmenuGtk {

export const GTK_MENUITEM_H__: number
export function gtkParseGetCachedItem(widget: Gtk.Widget): Dbusmenu.Menuitem
export function gtkParseMenuStructure(widget: Gtk.Widget): Dbusmenu.Menuitem
export function menuitemPropertyGetImage(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf
export function menuitemPropertyGetShortcut(menuitem: Dbusmenu.Menuitem): { key: number, modifier: Gdk.ModifierType }
export function menuitemPropertySetImage(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean
export function menuitemPropertySetShortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean
export function menuitemPropertySetShortcutMenuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean
export function menuitemPropertySetShortcutString(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean
export interface Client_ConstructProps extends Dbusmenu.Client_ConstructProps {
}
export class Client {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Client */
    groupEvents: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DbusmenuGtk-0.4.DbusmenuGtk.Client */
    getAccelGroup(): Gtk.AccelGroup
    menuitemGet(item: Dbusmenu.Menuitem): Gtk.MenuItem
    menuitemGetSubmenu(item: Dbusmenu.Menuitem): Gtk.Menu
    newitemBase(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void
    setAccelGroup(agroup: Gtk.AccelGroup): void
    /* Methods of Dbusmenu-0.4.Dbusmenu.Client */
    addTypeHandler(type: string, newfunc: Dbusmenu.ClientTypeHandler): boolean
    addTypeHandlerFull(type: string, newfunc: Dbusmenu.ClientTypeHandler): boolean
    getIconPaths(): string[]
    getRoot(): Dbusmenu.Menuitem
    getStatus(): Dbusmenu.Status
    getTextDirection(): Dbusmenu.TextDirection
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
    static new(dbusName: string, dbusObject: string): Client
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends Gtk.Menu_ConstructProps {
    dbusName?: string
    dbusObject?: string
}
export class Menu {
    /* Properties of Gtk-2.0.Gtk.Menu */
    accelGroup: Gtk.AccelGroup
    accelPath: string
    active: number
    attachWidget: Gtk.Widget
    monitor: number
    reserveToggleSize: boolean
    tearoffState: boolean
    tearoffTitle: string
    /* Properties of Gtk-2.0.Gtk.MenuShell */
    takeFocus: boolean
    /* Properties of Gtk-2.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-2.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    extensionEvents: Gdk.ExtensionMode
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    isFocus: boolean
    name: string
    noShowAll: boolean
    parent: Gtk.Container
    receivesDefault: boolean
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-2.0.Gtk.Object */
    userData: object
    /* Fields of DbusmenuGtk-0.4.DbusmenuGtk.Menu */
    priv: MenuPrivate
    /* Fields of Gtk-2.0.Gtk.Menu */
    menuShell: Gtk.MenuShell
    parentMenuItem: Gtk.Widget
    oldActiveMenuItem: Gtk.Widget
    positionFunc: Gtk.MenuPositionFunc
    positionFuncData: object
    toggleSize: number
    toplevel: Gtk.Widget
    tearoffWindow: Gtk.Widget
    tearoffHbox: Gtk.Widget
    tearoffScrollbar: Gtk.Widget
    tearoffAdjustment: Gtk.Adjustment
    viewWindow: Gdk.Window
    binWindow: Gdk.Window
    scrollOffset: number
    savedScrollOffset: number
    scrollStep: number
    timeoutId: number
    navigationRegion: Gdk.Region
    navigationTimeout: number
    needsDestructionRefCount: number
    tornOff: number
    tearoffActive: number
    scrollFast: number
    upperArrowVisible: number
    lowerArrowVisible: number
    upperArrowPrelight: number
    lowerArrowPrelight: number
    /* Fields of Gtk-2.0.Gtk.MenuShell */
    container: Gtk.Container
    children: object[]
    activeMenuItem: Gtk.Widget
    parentMenuShell: Gtk.Widget
    button: number
    activateTime: number
    haveGrab: number
    haveXgrab: number
    ignoreLeave: number
    menuFlag: number
    ignoreEnter: number
    keyboardMode: number
    /* Fields of Gtk-2.0.Gtk.Container */
    widget: Gtk.Widget
    focusChild: Gtk.Widget
    /* Fields of Gtk-2.0.Gtk.Widget */
    object: Gtk.Object
    privateFlags: number
    state: number
    savedState: number
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    /* Fields of Gtk-2.0.Gtk.Object */
    parentInstance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DbusmenuGtk-0.4.DbusmenuGtk.Menu */
    getClient(): Client
    /* Methods of Gtk-2.0.Gtk.Menu */
    attach(child: Gtk.Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number): void
    detach(): void
    getAccelGroup(): Gtk.AccelGroup
    getAccelPath(): string
    getActive(): Gtk.Widget
    getAttachWidget(): Gtk.Widget
    getMonitor(): number
    getReserveToggleSize(): boolean
    getTearoffState(): boolean
    getTitle(): string
    popdown(): void
    reorderChild(child: Gtk.Widget, position: number): void
    reposition(): void
    setAccelGroup(accelGroup?: Gtk.AccelGroup | null): void
    setAccelPath(accelPath?: string | null): void
    setActive(index: number): void
    setMonitor(monitorNum: number): void
    setReserveToggleSize(reserveToggleSize: boolean): void
    setScreen(screen?: Gdk.Screen | null): void
    setTearoffState(tornOff: boolean): void
    setTitle(title: string): void
    /* Methods of Gtk-2.0.Gtk.MenuShell */
    activateItem(menuItem: Gtk.Widget, forceDeactivate: boolean): void
    append(child: Gtk.Widget): void
    cancel(): void
    deactivate(): void
    deselect(): void
    getTakeFocus(): boolean
    insert(child: Gtk.Widget, position: number): void
    prepend(child: Gtk.Widget): void
    selectFirst(searchSensitive: boolean): void
    selectItem(menuItem: Gtk.Widget): void
    setTakeFocus(takeFocus: boolean): void
    /* Methods of Gtk-2.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): { returnType: boolean, focusableWidgets: Gtk.Widget[] }
    getFocusChild(): Gtk.Widget
    getFocusHadjustment(): Gtk.Adjustment
    getFocusVadjustment(): Gtk.Adjustment
    getResizeMode(): Gtk.ResizeMode
    propagateExpose(child: Gtk.Widget, event: Gdk.EventExpose): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-2.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    createPangoContext(): Pango.Context
    createPangoLayout(text: string): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): { widgetPointer: Gtk.Widget }
    draw(area: Gdk.Rectangle): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getAllocation(): { allocation: Gtk.Allocation }
    getAncestor(widgetType: GObject.Type): Gtk.Widget
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(requisition: Gtk.Requisition): void
    getChildVisible(): boolean
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getColormap(): Gdk.Colormap
    getCompositeName(): string
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getExtensionEvents(): Gdk.ExtensionMode
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getMapped(): boolean
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget
    getParentWindow(): Gdk.Window
    getPointer(): { x: number | null, y: number | null }
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequisition(): { requisition: Gtk.Requisition }
    getRootWindow(): Gdk.Window
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): { width: number | null, height: number | null }
    getState(): Gtk.StateType
    getStyle(): Gtk.Style
    getTooltipMarkup(): string
    getTooltipText(): string
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window
    grabDefault(): void
    grabFocus(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hide(): void
    hideAll(): void
    hideOnDelete(): boolean
    inputShapeCombineMask(shapeMask: Gdk.Bitmap | null, offsetX: number, offsetY: number): void
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary: Gdk.Color, secondary: Gdk.Color): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    path(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    queueClear(): void
    queueClearArea(x: number, y: number, width: number, height: number): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetShapes(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setColormap(colormap: Gdk.Colormap): void
    setCompositeName(name: string): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setExtensionEvents(mode: Gdk.ExtensionMode): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setMapped(mapped: boolean): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setScrollAdjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStyle(style?: Gtk.Style | null): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text: string): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setUposition(x: number, y: number): void
    setUsize(width: number, height: number): void
    setVisible(visible: boolean): void
    setWindow(window: Gdk.Window): void
    shapeCombineMask(shapeMask: Gdk.Bitmap | null, offsetX: number, offsetY: number): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeRequest(requisition: Gtk.Requisition): void
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): { returnType: boolean, destX: number, destY: number }
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unref(): void
    /* Methods of Gtk-2.0.Gtk.Object */
    getData(key: string): object | null
    getDataById(dataId: GLib.Quark): object | null
    getUserData(): object | null
    removeData(key: string): void
    removeDataById(dataId: GLib.Quark): void
    removeNoNotify(key: string): void
    removeNoNotifyById(keyId: GLib.Quark): void
    setData(key: string, data?: object | null): void
    setDataById(dataId: GLib.Quark, data?: object | null): void
    setDataByIdFull(dataId: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    setDataFull(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    setUserData(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk-2.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Signals of Gtk-2.0.Gtk.Menu */
    connect(sigName: "move-scroll", callback: (($obj: Menu, object: Gtk.ScrollType) => void)): number
    on(sigName: "move-scroll", callback: (object: Gtk.ScrollType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-scroll", callback: (object: Gtk.ScrollType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-scroll", callback: (object: Gtk.ScrollType) => void): NodeJS.EventEmitter
    emit(sigName: "move-scroll", object: Gtk.ScrollType): void
    /* Signals of Gtk-2.0.Gtk.MenuShell */
    connect(sigName: "activate-current", callback: (($obj: Menu, object: boolean) => void)): number
    on(sigName: "activate-current", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-current", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-current", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "activate-current", object: boolean): void
    connect(sigName: "cancel", callback: (($obj: Menu) => void)): number
    on(sigName: "cancel", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancel"): void
    connect(sigName: "cycle-focus", callback: (($obj: Menu, object: Gtk.DirectionType) => void)): number
    on(sigName: "cycle-focus", callback: (object: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cycle-focus", callback: (object: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cycle-focus", callback: (object: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "cycle-focus", object: Gtk.DirectionType): void
    connect(sigName: "deactivate", callback: (($obj: Menu) => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    connect(sigName: "insert", callback: (($obj: Menu, child: Gtk.Widget, position: number) => void)): number
    on(sigName: "insert", callback: (child: Gtk.Widget, position: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert", callback: (child: Gtk.Widget, position: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert", callback: (child: Gtk.Widget, position: number) => void): NodeJS.EventEmitter
    emit(sigName: "insert", child: Gtk.Widget, position: number): void
    connect(sigName: "move-current", callback: (($obj: Menu, object: Gtk.MenuDirectionType) => void)): number
    on(sigName: "move-current", callback: (object: Gtk.MenuDirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-current", callback: (object: Gtk.MenuDirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-current", callback: (object: Gtk.MenuDirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-current", object: Gtk.MenuDirectionType): void
    connect(sigName: "move-selected", callback: (($obj: Menu, distance: number) => boolean)): number
    on(sigName: "move-selected", callback: (distance: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-selected", callback: (distance: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-selected", callback: (distance: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-selected", distance: number): void
    connect(sigName: "selection-done", callback: (($obj: Menu) => void)): number
    on(sigName: "selection-done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-done", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-done"): void
    /* Signals of Gtk-2.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Menu) => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-2.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Menu) => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Menu, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Menu, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Menu, signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "client-event", callback: (($obj: Menu, event: Gdk.EventClient) => boolean)): number
    on(sigName: "client-event", callback: (event: Gdk.EventClient) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-event", callback: (event: Gdk.EventClient) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-event", callback: (event: Gdk.EventClient) => void): NodeJS.EventEmitter
    emit(sigName: "client-event", event: Gdk.EventClient): void
    connect(sigName: "composited-changed", callback: (($obj: Menu) => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Menu, event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Menu, event: Gdk.Event) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.Event): void
    connect(sigName: "delete-event", callback: (($obj: Menu, event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy-event", callback: (($obj: Menu, event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Menu, previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Menu, dragContext: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (dragContext: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (dragContext: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (dragContext: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", dragContext: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Menu, dragContext: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (dragContext: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (dragContext: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (dragContext: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", dragContext: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Menu, dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Menu, dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Menu, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (dragContext: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (dragContext: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (dragContext: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", dragContext: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Menu, dragContext: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (dragContext: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (dragContext: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (dragContext: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", dragContext: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Menu, dragContext: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (dragContext: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (dragContext: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (dragContext: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", dragContext: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Menu, dragContext: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (dragContext: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (dragContext: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (dragContext: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", dragContext: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Menu, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (dragContext: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (dragContext: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (dragContext: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", dragContext: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "enter-notify-event", callback: (($obj: Menu, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Menu, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Menu, event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "expose-event", callback: (($obj: Menu, event: Gdk.EventExpose) => boolean)): number
    on(sigName: "expose-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "expose-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "expose-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    connect(sigName: "focus", callback: (($obj: Menu, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Menu, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Menu, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Menu, event: Gdk.Event) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    connect(sigName: "grab-focus", callback: (($obj: Menu) => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Menu, wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Menu) => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Menu, previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Menu, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Menu, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Menu, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Menu, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Menu) => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Menu, event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Menu, arg1: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Menu, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Menu, direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "no-expose-event", callback: (($obj: Menu, event: Gdk.EventNoExpose) => boolean)): number
    on(sigName: "no-expose-event", callback: (event: Gdk.EventNoExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-expose-event", callback: (event: Gdk.EventNoExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-expose-event", callback: (event: Gdk.EventNoExpose) => void): NodeJS.EventEmitter
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    connect(sigName: "parent-set", callback: (($obj: Menu, oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Menu) => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Menu, event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Menu, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Menu, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Menu, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Menu) => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Menu, previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Menu, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Menu, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Menu, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Menu, event: Gdk.Event) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    connect(sigName: "selection-received", callback: (($obj: Menu, data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Menu, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Menu) => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Menu, helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Menu, allocation: Gdk.Rectangle) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gdk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    connect(sigName: "size-request", callback: (($obj: Menu, requisition: Gtk.Requisition) => void)): number
    on(sigName: "size-request", callback: (requisition: Gtk.Requisition) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-request", callback: (requisition: Gtk.Requisition) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-request", callback: (requisition: Gtk.Requisition) => void): NodeJS.EventEmitter
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    connect(sigName: "state-changed", callback: (($obj: Menu, state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "style-set", callback: (($obj: Menu, previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "unmap", callback: (($obj: Menu) => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Menu, event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Menu) => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Menu, event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Menu, event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of Gtk-2.0.Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: Menu) => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accel-group", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-group", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accel-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accel-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accel-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accel-path", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-path", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attach-widget", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attach-widget", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attach-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attach-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attach-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reserve-toggle-size", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserve-toggle-size", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tearoff-state", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-state", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tearoff-title", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::take-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::take-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::take-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::take-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension-events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-data", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusName: string, dbusObject: string): Menu
    static new(): Menu
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of DbusmenuGtk-0.4.DbusmenuGtk.ClientClass */
    parentClass: Dbusmenu.ClientClass
    rootChanged: (newroot: Dbusmenu.Menuitem) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class MenuClass {
    /* Fields of DbusmenuGtk-0.4.DbusmenuGtk.MenuClass */
    parentClass: Gtk.MenuClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    static name: string
}
export class MenuPrivate {
    static name: string
}
}