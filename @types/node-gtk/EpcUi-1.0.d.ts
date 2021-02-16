/**
 * EpcUi-1.0
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="Epc-1.0.d.ts" />

declare namespace EpcUi {

export interface PasswordDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
    anonymous?: boolean
    anonymousAllowed?: boolean
    password?: string
    realm?: string
    username?: string
}
export class PasswordDialog {
    /* Properties of EpcUi.PasswordDialog */
    anonymous: boolean
    anonymousAllowed: boolean
    password: string
    realm: string
    username: string
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidget: Gtk.Widget
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    display: Gdk.Display
    focusVisible: boolean
    focusWidget: Gtk.Widget
    fullscreened: boolean
    hideOnClose: boolean
    iconName: string
    readonly isActive: boolean
    maximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    startupId: string
    title: string
    transientFor: Gtk.Window
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Fields of Gtk.Dialog */
    parentInstance: Gtk.Window
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EpcUi.PasswordDialog */
    attach(consumer: Epc.Consumer): void
    getAnonymousAllowed(): boolean
    getPassword(): string
    getRealm(): string
    getUsername(): string
    isAnonymous(): boolean
    setAnonymous(anonymous: boolean): void
    setAnonymousAllowed(allowed: boolean): void
    setPassword(password: string): void
    setRealm(realm: string): void
    setUsername(username: string): void
    /* Methods of Gtk.Dialog */
    addActionWidget(child: Gtk.Widget, responseId: number): void
    addButton(buttonText: string, responseId: number): Gtk.Widget
    getContentArea(): Gtk.Box
    getHeaderBar(): Gtk.HeaderBar
    getResponseForWidget(widget: Gtk.Widget): number
    getWidgetForResponse(responseId: number): Gtk.Widget | null
    response(responseId: number): void
    setDefaultResponse(responseId: number): void
    setResponseSensitive(responseId: number, setting: boolean): void
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: Gdk.Monitor): void
    getApplication(): Gtk.Application | null
    getChild(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusVisible(): boolean
    getGroup(): Gtk.WindowGroup
    getHideOnClose(): boolean
    getIconName(): string | null
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getResizable(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    hasGroup(): boolean
    isFullscreen(): boolean
    isMaximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    presentWithTime(timestamp: number): void
    setApplication(application?: Gtk.Application | null): void
    setChild(child?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefaultSize(width: number, height: number): void
    setDefaultWidget(defaultWidget?: Gtk.Widget | null): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setDisplay(display: Gdk.Display): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusVisible(setting: boolean): void
    setHideOnClose(setting: boolean): void
    setIconName(name?: string | null): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setResizable(resizable: boolean): void
    setStartupId(startupId: string): void
    setTitle(title?: string | null): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of EpcUi.PasswordDialog */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Dialog */
    vfuncClose(): void
    vfuncResponse(responseId: number): void
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault(): void
    vfuncActivateFocus(): void
    vfuncCloseRequest(): boolean
    vfuncEnableDebugging(toggle: boolean): boolean
    vfuncKeysChanged(): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "close"): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "response", callback: (($obj: PasswordDialog, responseId: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: PasswordDialog, responseId: number) => void)): number
    emit(sigName: "response", responseId: number): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-focus", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close-request", callback: (($obj: PasswordDialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: PasswordDialog) => boolean)): number
    emit(sigName: "close-request"): void
    on(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enable-debugging", callback: (($obj: PasswordDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: PasswordDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: PasswordDialog, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: PasswordDialog, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: PasswordDialog, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: PasswordDialog, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: PasswordDialog, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: PasswordDialog, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: PasswordDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: PasswordDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anonymous", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anonymous-allowed", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-allowed", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous-allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous-allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous-allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realm", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-widget", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-widget", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreened", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-on-close", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PasswordDialog_ConstructProps)
    _init (config?: PasswordDialog_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProgressWindow_ConstructProps extends Gtk.Window_ConstructProps {
    message?: string
    progress?: number
    title?: string
}
export class ProgressWindow {
    /* Properties of EpcUi.ProgressWindow */
    message: string
    progress: number
    title: string
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidget: Gtk.Widget
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    display: Gdk.Display
    focusVisible: boolean
    focusWidget: Gtk.Widget
    fullscreened: boolean
    hideOnClose: boolean
    iconName: string
    readonly isActive: boolean
    maximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    startupId: string
    transientFor: Gtk.Window
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Fields of Gtk.Window */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EpcUi.ProgressWindow */
    update(progress: number, message: string): void
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: Gdk.Monitor): void
    getApplication(): Gtk.Application | null
    getChild(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusVisible(): boolean
    getGroup(): Gtk.WindowGroup
    getHideOnClose(): boolean
    getIconName(): string | null
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getResizable(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    hasGroup(): boolean
    isFullscreen(): boolean
    isMaximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    presentWithTime(timestamp: number): void
    setApplication(application?: Gtk.Application | null): void
    setChild(child?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefaultSize(width: number, height: number): void
    setDefaultWidget(defaultWidget?: Gtk.Widget | null): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setDisplay(display: Gdk.Display): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusVisible(setting: boolean): void
    setHideOnClose(setting: boolean): void
    setIconName(name?: string | null): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setResizable(resizable: boolean): void
    setStartupId(startupId: string): void
    setTitle(title?: string | null): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Virtual methods of EpcUi.ProgressWindow */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault(): void
    vfuncActivateFocus(): void
    vfuncCloseRequest(): boolean
    vfuncEnableDebugging(toggle: boolean): boolean
    vfuncKeysChanged(): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-focus", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close-request", callback: (($obj: ProgressWindow) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: ProgressWindow) => boolean)): number
    emit(sigName: "close-request"): void
    on(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enable-debugging", callback: (($obj: ProgressWindow, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: ProgressWindow, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: ProgressWindow, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ProgressWindow, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "map", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: ProgressWindow, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ProgressWindow, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: ProgressWindow, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ProgressWindow, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "show", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: ProgressWindow, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ProgressWindow, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-widget", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-widget", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreened", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-on-close", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProgressWindow_ConstructProps)
    _init (config?: ProgressWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, parent: Gtk.Window, message: string): ProgressWindow
    static new(): ProgressWindow
    static install(parent: Gtk.Window): void
    static $gtype: GObject.Type
}
export abstract class PasswordDialogClass {
    static name: string
}
export class PasswordDialogPrivate {
    static name: string
}
export abstract class ProgressWindowClass {
    static name: string
}
export class ProgressWindowPrivate {
    static name: string
}
}