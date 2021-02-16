/**
 * GtkVnc-2.0
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="GVnc-1.0.d.ts" />

declare namespace GtkVnc {

export enum DisplayCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
export enum DisplayDepthColor {
    DEFAULT,
    FULL,
    MEDIUM,
    LOW,
    ULTRA_LOW,
}
export enum DisplayKeyEvent {
    PRESS,
    RELEASE,
    CLICK,
}
export interface CairoFramebuffer_ConstructProps extends GVnc.BaseFramebuffer_ConstructProps {
    surface?: object
}
export class CairoFramebuffer {
    /* Properties of GVnc.BaseFramebuffer */
    colorMap: GVnc.ColorMap
    /* Fields of GtkVnc.CairoFramebuffer */
    parent: GVnc.BaseFramebuffer
    priv: CairoFramebufferPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkVnc.CairoFramebuffer */
    getSurface(): cairo.Surface
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
    /* Methods of GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: any, x: number, y: number, width: number, height: number): void
    getBuffer(): any
    getHeight(): number
    getLocalFormat(): GVnc.PixelFormat
    getRemoteFormat(): GVnc.PixelFormat
    getRowstride(): number
    getWidth(): number
    perfectFormatMatch(): boolean
    rgb24Blt(src: any, rowstride: number, x: number, y: number, width: number, height: number): void
    setColorMap(map: GVnc.ColorMap): void
    setPixelAt(src: any, x: number, y: number): void
    /* Virtual methods of GtkVnc.CairoFramebuffer */
    vfuncBlt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfuncCopyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfuncFill(src: any, x: number, y: number, width: number, height: number): void
    vfuncGetBuffer(): number
    vfuncGetHeight(): number
    vfuncGetLocalFormat(): GVnc.PixelFormat
    vfuncGetRemoteFormat(): GVnc.PixelFormat
    vfuncGetRowstride(): number
    vfuncGetWidth(): number
    vfuncPerfectFormatMatch(): boolean
    vfuncRgb24Blt(src: any, rowstride: number, x: number, y: number, width: number, height: number): void
    vfuncSetColorMap(map: GVnc.ColorMap): void
    vfuncSetPixelAt(src: any, x: number, y: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-map", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CairoFramebuffer_ConstructProps)
    _init (config?: CairoFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer
    static new(buffer: any, width: number, height: number, rowstride: number, localFormat: GVnc.PixelFormat, remoteFormat: GVnc.PixelFormat): CairoFramebuffer
    static $gtype: GObject.Type
}
export interface Display_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    allowResize?: boolean
    depth?: DisplayDepthColor
    forceSize?: boolean
    grabKeyboard?: boolean
    grabKeys?: GrabSequence
    grabPointer?: boolean
    localPointer?: boolean
    lossyEncoding?: boolean
    readOnly?: boolean
    scaling?: boolean
    sharedFlag?: boolean
    smoothing?: boolean
}
export class Display {
    /* Properties of GtkVnc.Display */
    allowResize: boolean
    readonly connection: GVnc.Connection
    depth: DisplayDepthColor
    forceSize: boolean
    grabKeyboard: boolean
    grabKeys: GrabSequence
    grabPointer: boolean
    readonly height: number
    localPointer: boolean
    lossyEncoding: boolean
    readonly name: string
    readOnly: boolean
    scaling: boolean
    sharedFlag: boolean
    smoothing: boolean
    readonly width: number
    /* Properties of Gtk.DrawingArea */
    contentHeight: number
    contentWidth: number
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
    /* Fields of GtkVnc.Display */
    priv: DisplayPrivate
    /* Fields of Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkVnc.Display */
    clientCutText(text: string): void
    close(): void
    forceGrab(enable: boolean): void
    getAllowResize(): boolean
    getConnection(): GVnc.Connection
    getDepth(): DisplayDepthColor
    getForceSize(): boolean
    getGrabKeys(): GrabSequence
    getHeight(): number
    getKeyboardGrab(): boolean
    getLossyEncoding(): boolean
    getName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getPointerGrab(): boolean
    getPointerLocal(): boolean
    getReadOnly(): boolean
    getScaling(): boolean
    getSharedFlag(): boolean
    getSmoothing(): boolean
    getWidth(): number
    isOpen(): boolean
    isPointerAbsolute(): boolean
    openAddr(addr: Gio.SocketAddress, hostname?: string | null): boolean
    openFd(fd: number): boolean
    openFdWithHostname(fd: number, hostname?: string | null): boolean
    openHost(host: string, port: string): boolean
    requestUpdate(): boolean
    sendKeys(keyvals: number[]): void
    sendKeysEx(keyvals: number[], kind: DisplayKeyEvent): void
    sendPointer(x: number, y: number, buttonMask: number): void
    setAllowResize(enable: boolean): void
    setCredential(type: number, data: string): boolean
    setDepth(depth: DisplayDepthColor): void
    setForceSize(enable: boolean): void
    setGrabKeys(seq: GrabSequence): void
    setKeyboardGrab(enable: boolean): void
    setLossyEncoding(enable: boolean): void
    setPointerGrab(enable: boolean): void
    setPointerLocal(enable: boolean): void
    setReadOnly(enable: boolean): void
    setScaling(enable: boolean): boolean
    setSharedFlag(shared: boolean): void
    setSmoothing(enable: boolean): void
    /* Methods of Gtk.DrawingArea */
    getContentHeight(): number
    getContentWidth(): number
    setContentHeight(height: number): void
    setContentWidth(width: number): void
    setDrawFunc(drawFunc: Gtk.DrawingAreaDrawFunc | null): void
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
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
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
    /* Virtual methods of GtkVnc.Display */
    vfuncVncAuthCredential(credList: GObject.ValueArray): void
    vfuncVncConnected(): void
    vfuncVncDisconnected(): void
    vfuncVncInitialized(): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.DrawingArea */
    vfuncResize(width: number, height: number): void
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
    /* Signals of GtkVnc.Display */
    connect(sigName: "vnc-auth-credential", callback: (($obj: Display, object: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-credential", callback: (($obj: Display, object: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray): void
    on(sigName: "vnc-auth-credential", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-credential", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-credential", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-auth-failure", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-auth-failure", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-auth-failure", object: string): void
    on(sigName: "vnc-auth-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-auth-unsupported", callback: (($obj: Display, object: number) => void)): number
    connect_after(sigName: "vnc-auth-unsupported", callback: (($obj: Display, object: number) => void)): number
    emit(sigName: "vnc-auth-unsupported", object: number): void
    on(sigName: "vnc-auth-unsupported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-unsupported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-unsupported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-bell", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-bell", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-bell"): void
    on(sigName: "vnc-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-connected", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-connected", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-connected"): void
    on(sigName: "vnc-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-desktop-rename", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-desktop-rename", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-desktop-rename", object: string): void
    on(sigName: "vnc-desktop-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-desktop-resize", callback: (($obj: Display, object: number, p0: number) => void)): number
    connect_after(sigName: "vnc-desktop-resize", callback: (($obj: Display, object: number, p0: number) => void)): number
    emit(sigName: "vnc-desktop-resize", object: number, p0: number): void
    on(sigName: "vnc-desktop-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-disconnected", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-disconnected", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-disconnected"): void
    on(sigName: "vnc-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-error", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-error", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-error", object: string): void
    on(sigName: "vnc-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-initialized", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-initialized", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-initialized"): void
    on(sigName: "vnc-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-keyboard-grab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-keyboard-grab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-keyboard-grab"): void
    on(sigName: "vnc-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-keyboard-ungrab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-keyboard-ungrab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-keyboard-ungrab"): void
    on(sigName: "vnc-keyboard-ungrab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-keyboard-ungrab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-keyboard-ungrab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-pointer-grab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-pointer-grab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-pointer-grab"): void
    on(sigName: "vnc-pointer-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-pointer-ungrab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-pointer-ungrab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-pointer-ungrab"): void
    on(sigName: "vnc-pointer-ungrab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-ungrab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-ungrab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-power-control-failed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-power-control-failed", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-power-control-failed"): void
    on(sigName: "vnc-power-control-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-power-control-initialized", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-power-control-initialized", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-power-control-initialized"): void
    on(sigName: "vnc-power-control-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-server-cut-text", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-server-cut-text", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-server-cut-text", object: string): void
    on(sigName: "vnc-server-cut-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-server-cut-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-server-cut-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.DrawingArea */
    connect(sigName: "resize", callback: (($obj: Display, width: number, height: number) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Display, width: number, height: number) => void)): number
    emit(sigName: "resize", width: number, height: number): void
    on(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Display) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Display) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Display, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Display, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Display) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Display) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Display) => void)): number
    connect_after(sigName: "map", callback: (($obj: Display) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Display, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Display, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Display, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Display, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Display, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Display, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Display) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Display) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Display) => void)): number
    connect_after(sigName: "show", callback: (($obj: Display) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Display, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Display, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Display) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Display) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Display) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Display) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-resize", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-resize", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force-size", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-size", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::grab-keys", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keys", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::grab-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::grab-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::grab-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::grab-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::grab-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::grab-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::grab-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lossy-encoding", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lossy-encoding", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-flag", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-flag", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-flag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-flag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-flag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smoothing", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smoothing", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smoothing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smoothing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smoothing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Display
    static getOptionEntries(): GLib.OptionEntry[]
    static getOptionGroup(): GLib.OptionGroup
    static $gtype: GObject.Type
}
export abstract class CairoFramebufferClass {
    /* Fields of GtkVnc.CairoFramebufferClass */
    parentClass: GVnc.BaseFramebufferClass
    vncReserved: object[]
    static name: string
}
export class CairoFramebufferPrivate {
    static name: string
}
export abstract class DisplayClass {
    /* Fields of GtkVnc.DisplayClass */
    parentClass: Gtk.DrawingAreaClass
    vncConnected: (display: Display) => void
    vncInitialized: (display: Display) => void
    vncDisconnected: (display: Display) => void
    vncAuthCredential: (display: Display, credList: GObject.ValueArray) => void
    static name: string
}
export class DisplayPrivate {
    static name: string
}
export class GrabSequence {
    /* Fields of GtkVnc.GrabSequence */
    nkeysyms: number
    keysyms: number
    /* Methods of GtkVnc.GrabSequence */
    asString(): string
    copy(): GrabSequence
    free(): void
    getNth(n: number): number
    static name: string
    static new(keysyms: number[]): GrabSequence
    constructor(keysyms: number[])
    /* Static methods and pseudo-constructors */
    static new(keysyms: number[]): GrabSequence
    static newFromString(str: string): GrabSequence
}
}