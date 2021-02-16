/**
 * Gepub-0.5
 */

/// <reference types="node" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="WebKit2-4.0.d.ts" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="JavaScriptCore-4.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace Gepub {

export const META_AUTHOR: string
export const META_DESC: string
export const META_ID: string
export const META_LANG: string
export const META_TITLE: string
export interface Doc_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
    page?: number
    path?: string
}
export class Doc {
    /* Properties of Gepub.Doc */
    page: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gepub.Doc */
    getCover(): string
    getCurrent(): any
    getCurrentId(): string
    getCurrentMime(): string
    getCurrentPath(): string
    getCurrentWithEpubUris(): any
    getMetadata(mdata: string): string
    getNPages(): number
    getPage(): number
    getResource(path: string): any
    getResourceById(id: string): any
    getResourceMime(path: string): string
    getResourceMimeById(id: string): string
    getResourcePath(id: string): string
    goNext(): boolean
    goPrev(): boolean
    setPage(index: number): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gepub.Doc */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Doc_ConstructProps)
    _init (config?: Doc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): Doc
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Widget_ConstructProps extends WebKit2.WebView_ConstructProps {
    doc?: Doc
}
export class Widget {
    /* Properties of Gepub.Widget */
    doc: Doc
    /* Properties of WebKit2.WebView */
    editable: boolean
    readonly estimatedLoadProgress: number
    readonly favicon: object
    readonly isLoading: boolean
    isMuted: boolean
    readonly isPlayingAudio: boolean
    readonly pageId: number
    settings: WebKit2.Settings
    readonly title: string
    readonly uri: string
    zoomLevel: number
    /* Properties of Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
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
    /* Fields of WebKit2.WebViewBase */
    parentInstance: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gepub.Widget */
    getDoc(): Doc
    setDoc(doc?: Doc | null): void
    /* Methods of WebKit2.WebView */
    canExecuteEditingCommand(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean
    canGoBack(): boolean
    canGoForward(): boolean
    canShowMimeType(mimeType: string): boolean
    downloadUri(uri: string): WebKit2.Download
    executeEditingCommand(command: string): void
    executeEditingCommandWithArgument(command: string, argument: string): void
    getAutomationPresentationType(): WebKit2.AutomationBrowsingContextPresentation
    getBackForwardList(): WebKit2.BackForwardList
    getBackgroundColor(): /* rgba */ Gdk.RGBA
    getContext(): WebKit2.WebContext
    getCustomCharset(): string
    getEditorState(): WebKit2.EditorState
    getEstimatedLoadProgress(): number
    getFavicon(): cairo.Surface
    getFindController(): WebKit2.FindController
    getInputMethodContext(): WebKit2.InputMethodContext | null
    getInspector(): WebKit2.WebInspector
    getIsMuted(): boolean
    getMainResource(): WebKit2.WebResource
    getPageId(): number
    getSessionState(): WebKit2.WebViewSessionState
    getSettings(): WebKit2.Settings
    getSnapshot(region: WebKit2.SnapshotRegion, options: WebKit2.SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapshotFinish(result: Gio.AsyncResult): cairo.Surface
    getTitle(): string
    getTlsInfo(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getUri(): string
    getUserContentManager(): WebKit2.UserContentManager
    getWebsiteDataManager(): WebKit2.WebsiteDataManager
    getWebsitePolicies(): WebKit2.WebsitePolicies
    getWindowProperties(): WebKit2.WindowProperties
    getZoomLevel(): number
    goBack(): void
    goForward(): void
    goToBackForwardListItem(listItem: WebKit2.BackForwardListItem): void
    isControlledByAutomation(): boolean
    isEditable(): boolean
    isEphemeral(): boolean
    loadAlternateHtml(content: string, contentUri: string, baseUri?: string | null): void
    loadBytes(bytes: any, mimeType?: string | null, encoding?: string | null, baseUri?: string | null): void
    loadHtml(content: string, baseUri?: string | null): void
    loadPlainText(plainText: string): void
    loadRequest(request: WebKit2.URIRequest): void
    loadUri(uri: string): void
    reload(): void
    reloadBypassCache(): void
    restoreSessionState(state: WebKit2.WebViewSessionState): void
    runJavascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFinish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    runJavascriptFromGresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFromGresourceFinish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    runJavascriptInWorld(script: string, worldName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptInWorldFinish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    save(saveMode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): Gio.InputStream
    saveToFile(file: Gio.File, saveMode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveToFileFinish(result: Gio.AsyncResult): boolean
    sendMessageToPage(message: WebKit2.UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendMessageToPageFinish(result: Gio.AsyncResult): WebKit2.UserMessage
    setBackgroundColor(rgba: Gdk.RGBA): void
    setCustomCharset(charset?: string | null): void
    setEditable(editable: boolean): void
    setInputMethodContext(context?: WebKit2.InputMethodContext | null): void
    setIsMuted(muted: boolean): void
    setSettings(settings: WebKit2.Settings): void
    setZoomLevel(zoomLevel: number): void
    stopLoading(): void
    tryClose(): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
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
    /* Virtual methods of WebKit2.WebView */
    vfuncAuthenticate(request: WebKit2.AuthenticationRequest): boolean
    vfuncClose(): void
    vfuncContextMenu(contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult): boolean
    vfuncContextMenuDismissed(): void
    vfuncDecidePolicy(decision: WebKit2.PolicyDecision, type: WebKit2.PolicyDecisionType): boolean
    vfuncEnterFullscreen(): boolean
    vfuncInsecureContentDetected(event: WebKit2.InsecureContentEvent): void
    vfuncLeaveFullscreen(): boolean
    vfuncLoadChanged(loadEvent: WebKit2.LoadEvent): void
    vfuncLoadFailed(loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error): boolean
    vfuncLoadFailedWithTlsErrors(failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfuncMouseTargetChanged(hitTestResult: WebKit2.HitTestResult, modifiers: number): void
    vfuncPermissionRequest(permissionRequest: WebKit2.PermissionRequest): boolean
    vfuncPrint(printOperation: WebKit2.PrintOperation): boolean
    vfuncReadyToShow(): void
    vfuncResourceLoadStarted(resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    vfuncRunAsModal(): void
    vfuncRunColorChooser(request: WebKit2.ColorChooserRequest): boolean
    vfuncRunFileChooser(request: WebKit2.FileChooserRequest): boolean
    vfuncScriptDialog(dialog: WebKit2.ScriptDialog): boolean
    vfuncShowNotification(notification: WebKit2.Notification): boolean
    vfuncShowOptionMenu(rectangle: Gdk.Rectangle, menu: WebKit2.OptionMenu): boolean
    vfuncSubmitForm(request: WebKit2.FormSubmissionRequest): void
    vfuncUserMessageReceived(message: WebKit2.UserMessage): boolean
    vfuncWebProcessCrashed(): boolean
    vfuncWebProcessTerminated(reason: WebKit2.WebProcessTerminationReason): void
    /* Virtual methods of WebKit2.WebViewBase */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd(widget: Gtk.Widget): void
    vfuncCheckResize(): void
    vfuncChildType(): GObject.Type
    vfuncCompositeName(child: Gtk.Widget): string
    vfuncForall(includeInternals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove(widget: Gtk.Widget): void
    vfuncSetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
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
    /* Signals of WebKit2.WebView */
    connect(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    emit(sigName: "authenticate", request: WebKit2.AuthenticationRequest): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "close", callback: (($obj: Widget) => void)): number
    emit(sigName: "close"): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "context-menu", callback: (($obj: Widget, contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult) => boolean)): number
    connect_after(sigName: "context-menu", callback: (($obj: Widget, contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult) => boolean)): number
    emit(sigName: "context-menu", contextMenu: WebKit2.ContextMenu, event: Gdk.Event, hitTestResult: WebKit2.HitTestResult): void
    on(sigName: "context-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    emit(sigName: "context-menu-dismissed"): void
    on(sigName: "context-menu-dismissed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-menu-dismissed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-menu-dismissed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: (($obj: Widget, navigationAction: WebKit2.NavigationAction) => Gtk.Widget)): number
    connect_after(sigName: "create", callback: (($obj: Widget, navigationAction: WebKit2.NavigationAction) => Gtk.Widget)): number
    emit(sigName: "create", navigationAction: WebKit2.NavigationAction): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decisionType: WebKit2.PolicyDecisionType) => boolean)): number
    connect_after(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decisionType: WebKit2.PolicyDecisionType) => boolean)): number
    emit(sigName: "decide-policy", decision: WebKit2.PolicyDecision, decisionType: WebKit2.PolicyDecisionType): void
    on(sigName: "decide-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "decide-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "decide-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "enter-fullscreen"): void
    on(sigName: "enter-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    connect_after(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    emit(sigName: "insecure-content-detected", event: WebKit2.InsecureContentEvent): void
    on(sigName: "insecure-content-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insecure-content-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insecure-content-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "leave-fullscreen"): void
    on(sigName: "leave-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-changed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent) => void)): number
    connect_after(sigName: "load-changed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent) => void)): number
    emit(sigName: "load-changed", loadEvent: WebKit2.LoadEvent): void
    on(sigName: "load-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-failed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error) => boolean)): number
    connect_after(sigName: "load-failed", callback: (($obj: Widget, loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error) => boolean)): number
    emit(sigName: "load-failed", loadEvent: WebKit2.LoadEvent, failingUri: string, error: GLib.Error): void
    on(sigName: "load-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "load-failed-with-tls-errors", failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    on(sigName: "load-failed-with-tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-failed-with-tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-failed-with-tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mouse-target-changed", callback: (($obj: Widget, hitTestResult: WebKit2.HitTestResult, modifiers: number) => void)): number
    connect_after(sigName: "mouse-target-changed", callback: (($obj: Widget, hitTestResult: WebKit2.HitTestResult, modifiers: number) => void)): number
    emit(sigName: "mouse-target-changed", hitTestResult: WebKit2.HitTestResult, modifiers: number): void
    on(sigName: "mouse-target-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mouse-target-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mouse-target-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    connect_after(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    emit(sigName: "permission-request", request: WebKit2.PermissionRequest): void
    on(sigName: "permission-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "permission-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "permission-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "print", callback: (($obj: Widget, printOperation: WebKit2.PrintOperation) => boolean)): number
    connect_after(sigName: "print", callback: (($obj: Widget, printOperation: WebKit2.PrintOperation) => boolean)): number
    emit(sigName: "print", printOperation: WebKit2.PrintOperation): void
    on(sigName: "print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    emit(sigName: "ready-to-show"): void
    on(sigName: "ready-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ready-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ready-to-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    connect_after(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    emit(sigName: "resource-load-started", resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    on(sigName: "resource-load-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-load-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-load-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    emit(sigName: "run-as-modal"): void
    on(sigName: "run-as-modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-as-modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-as-modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    connect_after(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    emit(sigName: "run-color-chooser", request: WebKit2.ColorChooserRequest): void
    on(sigName: "run-color-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-color-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-color-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    connect_after(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    emit(sigName: "run-file-chooser", request: WebKit2.FileChooserRequest): void
    on(sigName: "run-file-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-file-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-file-chooser", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    connect_after(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    emit(sigName: "script-dialog", dialog: WebKit2.ScriptDialog): void
    on(sigName: "script-dialog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "script-dialog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "script-dialog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    connect_after(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    emit(sigName: "show-notification", notification: WebKit2.Notification): void
    on(sigName: "show-notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-option-menu", callback: (($obj: Widget, object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "show-option-menu", callback: (($obj: Widget, object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean)): number
    emit(sigName: "show-option-menu", object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle): void
    on(sigName: "show-option-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-option-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-option-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    connect_after(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    emit(sigName: "submit-form", request: WebKit2.FormSubmissionRequest): void
    on(sigName: "submit-form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "submit-form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "submit-form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    connect_after(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    emit(sigName: "user-message-received", message: WebKit2.UserMessage): void
    on(sigName: "user-message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "web-process-crashed"): void
    on(sigName: "web-process-crashed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "web-process-crashed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "web-process-crashed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    connect_after(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    emit(sigName: "web-process-terminated", reason: WebKit2.WebProcessTerminationReason): void
    on(sigName: "web-process-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "web-process-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "web-process-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Widget) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Widget) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Widget, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Widget, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Widget) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "map", callback: (($obj: Widget) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Widget, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Widget, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Widget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Widget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Widget) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "show", callback: (($obj: Widget) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Widget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Widget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Widget) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Widget) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::doc", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::favicon", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loading", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-playing-audio", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-id", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-level", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Widget_ConstructProps)
    _init (config?: Widget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Widget
    static $gtype: GObject.Type
}
export abstract class DocClass {
    static name: string
}
export abstract class WidgetClass {
    static name: string
}
}