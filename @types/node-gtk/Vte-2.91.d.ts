/**
 * Vte-2.91
 */

/// <reference types="node" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace Vte {

export enum CursorBlinkMode {
    SYSTEM,
    ON,
    OFF,
}
export enum CursorShape {
    BLOCK,
    IBEAM,
    UNDERLINE,
}
export enum EraseBinding {
    AUTO,
    ASCII_BACKSPACE,
    ASCII_DELETE,
    DELETE_SEQUENCE,
    TTY,
}
export enum Format {
    TEXT,
    HTML,
}
export enum PtyError {
    PTY_HELPER_FAILED,
    PTY98_FAILED,
}
export enum RegexError {
    INCOMPATIBLE,
    NOT_SUPPORTED,
}
export enum TextBlinkMode {
    NEVER,
    FOCUSED,
    UNFOCUSED,
    ALWAYS,
}
export enum WriteFlags {
    DEFAULT,
}
export enum FeatureFlags {
    FLAG_BIDI,
    FLAG_ICU,
    FLAG_SYSTEMD,
    FLAG_SIXEL,
    FLAGS_MASK,
}
export enum PtyFlags {
    NO_LASTLOG,
    NO_UTMP,
    NO_WTMP,
    NO_HELPER,
    NO_FALLBACK,
    NO_SESSION,
    NO_CTTY,
    DEFAULT,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const REGEX_FLAGS_DEFAULT: number
export const SPAWN_NO_PARENT_ENVV: number
export const SPAWN_NO_SYSTEMD_SCOPE: number
export const SPAWN_REQUIRE_SYSTEMD_SCOPE: number
export const TEST_FLAGS_ALL: number
export const TEST_FLAGS_NONE: number
export function getEncodingSupported(encoding: string): boolean
export function getEncodings(includeAliases: boolean): string[]
export function getFeatureFlags(): FeatureFlags
export function getFeatures(): string
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function getUserShell(): string
export function ptyErrorQuark(): GLib.Quark
export function regexErrorQuark(): GLib.Quark
export interface SelectionFunc {
    (terminal: Terminal, column: number, row: number): boolean
}
export interface TerminalSpawnAsyncCallback {
    (terminal: Terminal, pid: GLib.Pid, error: GLib.Error): void
}
export interface Pty_ConstructProps extends GObject.Object_ConstructProps {
    fd?: number
    flags?: PtyFlags
}
export class Pty {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Vte.Pty */
    childSetup(): void
    close(): void
    getFd(): number
    getSize(): [ /* returnType */ boolean, /* rows */ number | null, /* columns */ number | null ]
    setSize(rows: number, columns: number): boolean
    setUtf8(utf8: boolean): boolean
    spawnAsync(workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    spawnFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* childPid */ GLib.Pid | null ]
    spawnWithFdsAsync(workingDirectory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, mapFds: number[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
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
    /* Virtual methods of Vte.Pty */
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
    connect(sigName: "notify", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Pty_ConstructProps)
    _init (config?: Pty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForeignSync(fd: number, cancellable?: Gio.Cancellable | null): Pty
    static newSync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Terminal_ConstructProps extends Gtk.Widget_ConstructProps {
    allowBold?: boolean
    allowHyperlink?: boolean
    audibleBell?: boolean
    backspaceBinding?: EraseBinding
    boldIsBright?: boolean
    cellHeightScale?: number
    cellWidthScale?: number
    cjkAmbiguousWidth?: number
    cursorBlinkMode?: CursorBlinkMode
    cursorShape?: CursorShape
    deleteBinding?: EraseBinding
    enableBidi?: boolean
    enableFallbackScrolling?: boolean
    enableShaping?: boolean
    enableSixel?: boolean
    encoding?: string
    fontDesc?: Pango.FontDescription
    fontScale?: number
    inputEnabled?: boolean
    pointerAutohide?: boolean
    pty?: Pty
    rewrapOnResize?: boolean
    scrollOnKeystroke?: boolean
    scrollOnOutput?: boolean
    scrollbackLines?: number
    textBlinkMode?: TextBlinkMode
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class Terminal {
    /* Properties of Vte.Terminal */
    allowBold: boolean
    allowHyperlink: boolean
    audibleBell: boolean
    backspaceBinding: EraseBinding
    boldIsBright: boolean
    cellHeightScale: number
    cellWidthScale: number
    cjkAmbiguousWidth: number
    readonly currentDirectoryUri: string
    readonly currentFileUri: string
    cursorBlinkMode: CursorBlinkMode
    cursorShape: CursorShape
    deleteBinding: EraseBinding
    enableBidi: boolean
    enableFallbackScrolling: boolean
    enableShaping: boolean
    enableSixel: boolean
    encoding: string
    fontDesc: Pango.FontDescription
    fontScale: number
    readonly hyperlinkHoverUri: string
    readonly iconTitle: string
    inputEnabled: boolean
    pointerAutohide: boolean
    pty: Pty
    rewrapOnResize: boolean
    scrollOnKeystroke: boolean
    scrollOnOutput: boolean
    scrollbackLines: number
    textBlinkMode: TextBlinkMode
    readonly windowTitle: string
    readonly wordCharExceptions: string
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
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Vte.Terminal */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Vte.Terminal */
    copyClipboard(): void
    copyClipboardFormat(format: Format): void
    copyPrimary(): void
    eventCheckGregexSimple(event: Gdk.Event, regexes: GLib.Regex[], matchFlags: GLib.RegexMatchFlags): [ /* returnType */ boolean, /* matches */ string[] ]
    eventCheckRegexSimple(event: Gdk.Event, regexes: Regex[], matchFlags: number): string[] | null
    feed(data: any | null): void
    feedChild(text: any | null): void
    feedChildBinary(data: any | null): void
    getAllowBold(): boolean
    getAllowHyperlink(): boolean
    getAudibleBell(): boolean
    getBoldIsBright(): boolean
    getCellHeightScale(): number
    getCellWidthScale(): number
    getCharHeight(): number
    getCharWidth(): number
    getCjkAmbiguousWidth(): number
    getColorBackgroundForDraw(): /* color */ Gdk.RGBA
    getColumnCount(): number
    getCurrentDirectoryUri(): string | null
    getCurrentFileUri(): string | null
    getCursorBlinkMode(): CursorBlinkMode
    getCursorPosition(): [ /* column */ number | null, /* row */ number | null ]
    getCursorShape(): CursorShape
    getEnableBidi(): boolean
    getEnableFallbackScrolling(): boolean
    getEnableShaping(): boolean
    getEnableSixel(): boolean
    getEncoding(): string | null
    getFont(): Pango.FontDescription
    getFontScale(): number
    getGeometryHints(minRows: number, minColumns: number): /* hints */ Gdk.Geometry
    getHasSelection(): boolean
    getIconTitle(): string | null
    getInputEnabled(): boolean
    getMouseAutohide(): boolean
    getPty(): Pty
    getRewrapOnResize(): boolean
    getRowCount(): number
    getScrollOnKeystroke(): boolean
    getScrollOnOutput(): boolean
    getScrollbackLines(): number
    getText(isSelected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    getTextBlinkMode(): TextBlinkMode
    getTextIncludeTrailingSpaces(isSelected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    getTextRange(startRow: number, startCol: number, endRow: number, endCol: number, isSelected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    getWindowTitle(): string | null
    getWordCharExceptions(): string | null
    hyperlinkCheckEvent(event: Gdk.Event): string | null
    matchAddGregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number
    matchAddRegex(regex: Regex, flags: number): number
    matchCheck(column: number, row: number): [ /* returnType */ string | null, /* tag */ number | null ]
    matchCheckEvent(event: Gdk.Event): [ /* returnType */ string | null, /* tag */ number | null ]
    matchRemove(tag: number): void
    matchRemoveAll(): void
    matchSetCursor(tag: number, cursor?: Gdk.Cursor | null): void
    matchSetCursorName(tag: number, cursorName: string): void
    matchSetCursorType(tag: number, cursorType: Gdk.CursorType): void
    pasteClipboard(): void
    pastePrimary(): void
    ptyNewSync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty
    reset(clearTabstops: boolean, clearHistory: boolean): void
    searchFindNext(): boolean
    searchFindPrevious(): boolean
    searchGetGregex(): GLib.Regex
    searchGetRegex(): Regex
    searchGetWrapAround(): boolean
    searchSetGregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void
    searchSetRegex(regex: Regex | null, flags: number): void
    searchSetWrapAround(wrapAround: boolean): void
    selectAll(): void
    setAllowBold(allowBold: boolean): void
    setAllowHyperlink(allowHyperlink: boolean): void
    setAudibleBell(isAudible: boolean): void
    setBackspaceBinding(binding: EraseBinding): void
    setBoldIsBright(boldIsBright: boolean): void
    setCellHeightScale(scale: number): void
    setCellWidthScale(scale: number): void
    setCjkAmbiguousWidth(width: number): void
    setClearBackground(setting: boolean): void
    setColorBackground(background: Gdk.RGBA): void
    setColorBold(bold?: Gdk.RGBA | null): void
    setColorCursor(cursorBackground?: Gdk.RGBA | null): void
    setColorCursorForeground(cursorForeground?: Gdk.RGBA | null): void
    setColorForeground(foreground: Gdk.RGBA): void
    setColorHighlight(highlightBackground?: Gdk.RGBA | null): void
    setColorHighlightForeground(highlightForeground?: Gdk.RGBA | null): void
    setColors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null): void
    setCursorBlinkMode(mode: CursorBlinkMode): void
    setCursorShape(shape: CursorShape): void
    setDefaultColors(): void
    setDeleteBinding(binding: EraseBinding): void
    setEnableBidi(enableBidi: boolean): void
    setEnableFallbackScrolling(enable: boolean): void
    setEnableShaping(enableShaping: boolean): void
    setEnableSixel(enabled: boolean): void
    setEncoding(codeset?: string | null): boolean
    setFont(fontDesc?: Pango.FontDescription | null): void
    setFontScale(scale: number): void
    setGeometryHintsForWindow(window: Gtk.Window): void
    setInputEnabled(enabled: boolean): void
    setMouseAutohide(setting: boolean): void
    setPty(pty?: Pty | null): void
    setRewrapOnResize(rewrap: boolean): void
    setScrollOnKeystroke(scroll: boolean): void
    setScrollOnOutput(scroll: boolean): void
    setScrollbackLines(lines: number): void
    setSize(columns: number, rows: number): void
    setTextBlinkMode(textBlinkMode: TextBlinkMode): void
    setWordCharExceptions(exceptions: string): void
    spawnAsync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    spawnSync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, childSetup?: GLib.SpawnChildSetupFunc | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* childPid */ GLib.Pid | null ]
    spawnWithFdsAsync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, mapFds: number[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    unselectAll(): void
    watchChild(childPid: GLib.Pid): void
    writeContentsSync(stream: Gio.OutputStream, flags: WriteFlags, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHadjustment(): Gtk.Adjustment
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVadjustment(): Gtk.Adjustment
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of Vte.Terminal */
    vfuncBell(): void
    vfuncCharSizeChanged(charWidth: number, charHeight: number): void
    vfuncChildExited(status: number): void
    vfuncCommit(text: string, size: number): void
    vfuncContentsChanged(): void
    vfuncCopyClipboard(): void
    vfuncCursorMoved(): void
    vfuncDecreaseFontSize(): void
    vfuncDeiconifyWindow(): void
    vfuncEncodingChanged(): void
    vfuncEof(): void
    vfuncIconTitleChanged(): void
    vfuncIconifyWindow(): void
    vfuncIncreaseFontSize(): void
    vfuncLowerWindow(): void
    vfuncMaximizeWindow(): void
    vfuncMoveWindow(x: number, y: number): void
    vfuncPasteClipboard(): void
    vfuncRaiseWindow(): void
    vfuncRefreshWindow(): void
    vfuncResizeWindow(width: number, height: number): void
    vfuncRestoreWindow(): void
    vfuncSelectionChanged(): void
    vfuncTextDeleted(): void
    vfuncTextInserted(): void
    vfuncTextModified(): void
    vfuncTextScrolled(delta: number): void
    vfuncWindowTitleChanged(): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    vfuncGetBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
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
    /* Signals of Vte.Terminal */
    connect(sigName: "bell", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "bell", callback: (($obj: Terminal) => void)): number
    emit(sigName: "bell"): void
    on(sigName: "bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-size-changed", callback: (($obj: Terminal, width: number, height: number) => void)): number
    connect_after(sigName: "char-size-changed", callback: (($obj: Terminal, width: number, height: number) => void)): number
    emit(sigName: "char-size-changed", width: number, height: number): void
    on(sigName: "char-size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-exited", callback: (($obj: Terminal, status: number) => void)): number
    connect_after(sigName: "child-exited", callback: (($obj: Terminal, status: number) => void)): number
    emit(sigName: "child-exited", status: number): void
    on(sigName: "child-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "commit", callback: (($obj: Terminal, text: string, size: number) => void)): number
    connect_after(sigName: "commit", callback: (($obj: Terminal, text: string, size: number) => void)): number
    emit(sigName: "commit", text: string, size: number): void
    on(sigName: "commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "contents-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "contents-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "contents-changed"): void
    on(sigName: "contents-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "contents-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "contents-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "copy-clipboard", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: Terminal) => void)): number
    emit(sigName: "copy-clipboard"): void
    on(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "current-directory-uri-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "current-directory-uri-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "current-directory-uri-changed"): void
    on(sigName: "current-directory-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "current-directory-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "current-directory-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "current-file-uri-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "current-file-uri-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "current-file-uri-changed"): void
    on(sigName: "current-file-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "current-file-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "current-file-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Terminal) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "decrease-font-size", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "decrease-font-size", callback: (($obj: Terminal) => void)): number
    emit(sigName: "decrease-font-size"): void
    on(sigName: "decrease-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "decrease-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "decrease-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deiconify-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "deiconify-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "deiconify-window"): void
    on(sigName: "deiconify-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deiconify-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deiconify-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "encoding-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "encoding-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "encoding-changed"): void
    on(sigName: "encoding-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "encoding-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "encoding-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "eof", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "eof", callback: (($obj: Terminal) => void)): number
    emit(sigName: "eof"): void
    on(sigName: "eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hyperlink-hover-uri-changed", callback: (($obj: Terminal, uri: string, bbox: Gdk.Rectangle) => void)): number
    connect_after(sigName: "hyperlink-hover-uri-changed", callback: (($obj: Terminal, uri: string, bbox: Gdk.Rectangle) => void)): number
    emit(sigName: "hyperlink-hover-uri-changed", uri: string, bbox: Gdk.Rectangle): void
    on(sigName: "hyperlink-hover-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hyperlink-hover-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hyperlink-hover-uri-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-title-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "icon-title-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "icon-title-changed"): void
    on(sigName: "icon-title-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-title-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-title-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "iconify-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "iconify-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "iconify-window"): void
    on(sigName: "iconify-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "iconify-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "iconify-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "increase-font-size", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "increase-font-size", callback: (($obj: Terminal) => void)): number
    emit(sigName: "increase-font-size"): void
    on(sigName: "increase-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "increase-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "increase-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "lower-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "lower-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "lower-window"): void
    on(sigName: "lower-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "lower-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "lower-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "maximize-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "maximize-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "maximize-window"): void
    on(sigName: "maximize-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximize-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximize-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-window", callback: (($obj: Terminal, x: number, y: number) => void)): number
    connect_after(sigName: "move-window", callback: (($obj: Terminal, x: number, y: number) => void)): number
    emit(sigName: "move-window", x: number, y: number): void
    on(sigName: "move-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paste-clipboard", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: Terminal) => void)): number
    emit(sigName: "paste-clipboard"): void
    on(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "raise-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "raise-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "raise-window"): void
    on(sigName: "raise-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "raise-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "raise-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "refresh-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "refresh-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "refresh-window"): void
    on(sigName: "refresh-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "refresh-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "refresh-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resize-window", callback: (($obj: Terminal, width: number, height: number) => void)): number
    connect_after(sigName: "resize-window", callback: (($obj: Terminal, width: number, height: number) => void)): number
    emit(sigName: "resize-window", width: number, height: number): void
    on(sigName: "resize-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restore-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "restore-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "restore-window"): void
    on(sigName: "restore-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restore-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restore-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "selection-changed"): void
    on(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-deleted", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "text-deleted", callback: (($obj: Terminal) => void)): number
    emit(sigName: "text-deleted"): void
    on(sigName: "text-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-inserted", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "text-inserted", callback: (($obj: Terminal) => void)): number
    emit(sigName: "text-inserted"): void
    on(sigName: "text-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-modified", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "text-modified", callback: (($obj: Terminal) => void)): number
    emit(sigName: "text-modified"): void
    on(sigName: "text-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-scrolled", callback: (($obj: Terminal, delta: number) => void)): number
    connect_after(sigName: "text-scrolled", callback: (($obj: Terminal, delta: number) => void)): number
    emit(sigName: "text-scrolled", delta: number): void
    on(sigName: "text-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-title-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "window-title-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "window-title-changed"): void
    on(sigName: "window-title-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-title-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-title-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Terminal) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Terminal, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Terminal, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Terminal) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "map", callback: (($obj: Terminal) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Terminal, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Terminal, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Terminal, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Terminal, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Terminal) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "show", callback: (($obj: Terminal) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Terminal, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Terminal, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Terminal) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Terminal) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-bold", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-bold", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-bold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-bold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-bold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-hyperlink", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-hyperlink", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-hyperlink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-hyperlink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-hyperlink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audible-bell", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audible-bell", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audible-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audible-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audible-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backspace-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backspace-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backspace-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backspace-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backspace-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bold-is-bright", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bold-is-bright", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bold-is-bright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bold-is-bright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bold-is-bright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-height-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-height-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-height-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-height-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-height-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-width-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-width-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-width-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-width-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-width-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cjk-ambiguous-width", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cjk-ambiguous-width", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cjk-ambiguous-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cjk-ambiguous-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cjk-ambiguous-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-directory-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-directory-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-directory-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-directory-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-directory-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-file-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-file-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-shape", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-shape", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-shape", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-shape", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-shape", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delete-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delete-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delete-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delete-binding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-bidi", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-bidi", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-bidi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-bidi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-bidi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-fallback-scrolling", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fallback-scrolling", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-fallback-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-fallback-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-fallback-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-shaping", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-shaping", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-shaping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-shaping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-shaping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-sixel", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-sixel", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-sixel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-sixel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-sixel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hyperlink-hover-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hyperlink-hover-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hyperlink-hover-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hyperlink-hover-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hyperlink-hover-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-enabled", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-enabled", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-autohide", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-autohide", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-autohide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-autohide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-autohide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pty", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pty", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rewrap-on-resize", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rewrap-on-resize", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rewrap-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rewrap-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rewrap-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-on-keystroke", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-keystroke", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-on-keystroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-on-keystroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-on-keystroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-on-output", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-output", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-on-output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-on-output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-on-output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scrollback-lines", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollback-lines", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scrollback-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scrollback-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scrollback-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-blink-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::word-char-exceptions", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::word-char-exceptions", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::word-char-exceptions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::word-char-exceptions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::word-char-exceptions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Terminal_ConstructProps)
    _init (config?: Terminal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Terminal
    static $gtype: GObject.Type
}
export class CharAttributes {
    static name: string
}
export abstract class PtyClass {
    static name: string
}
export class Regex {
    /* Methods of Vte.Regex */
    jit(flags: number): boolean
    ref(): Regex
    substitute(subject: string, replacement: string, flags: number): string
    unref(): Regex
    static name: string
    /* Static methods and pseudo-constructors */
    static newForMatch(pattern: string, patternLength: number, flags: number): Regex
    static newForSearch(pattern: string, patternLength: number, flags: number): Regex
}
export abstract class TerminalClass {
    /* Fields of Vte.TerminalClass */
    parentClass: Gtk.WidgetClass
    eof: (terminal: Terminal) => void
    childExited: (terminal: Terminal, status: number) => void
    encodingChanged: (terminal: Terminal) => void
    charSizeChanged: (terminal: Terminal, charWidth: number, charHeight: number) => void
    windowTitleChanged: (terminal: Terminal) => void
    iconTitleChanged: (terminal: Terminal) => void
    selectionChanged: (terminal: Terminal) => void
    contentsChanged: (terminal: Terminal) => void
    cursorMoved: (terminal: Terminal) => void
    commit: (terminal: Terminal, text: string, size: number) => void
    deiconifyWindow: (terminal: Terminal) => void
    iconifyWindow: (terminal: Terminal) => void
    raiseWindow: (terminal: Terminal) => void
    lowerWindow: (terminal: Terminal) => void
    refreshWindow: (terminal: Terminal) => void
    restoreWindow: (terminal: Terminal) => void
    maximizeWindow: (terminal: Terminal) => void
    resizeWindow: (terminal: Terminal, width: number, height: number) => void
    moveWindow: (terminal: Terminal, x: number, y: number) => void
    increaseFontSize: (terminal: Terminal) => void
    decreaseFontSize: (terminal: Terminal) => void
    textModified: (terminal: Terminal) => void
    textInserted: (terminal: Terminal) => void
    textDeleted: (terminal: Terminal) => void
    textScrolled: (terminal: Terminal, delta: number) => void
    copyClipboard: (terminal: Terminal) => void
    pasteClipboard: (terminal: Terminal) => void
    bell: (terminal: Terminal) => void
    padding: object[]
    priv: TerminalClassPrivate
    static name: string
}
export class TerminalClassPrivate {
    static name: string
}
}