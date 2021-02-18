/**
 * Vte-2.91
 */

import "node"
import type { Pango } from './Pango-1.0';
import type { cairo } from './cairo-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

export declare namespace Vte {

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
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
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
    feed(data: any[] | null): void
    feedChild(text: any[] | null): void
    feedChildBinary(data: any[] | null): void
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
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
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
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
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
    vfuncConstructChild(builder: Gtk.Builder, name: string): GObject.Object
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncGetName(): string
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetName(name: string): void
    vfuncGetBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation(baseline: number): void
    vfuncAdjustBaselineRequest(minimumBaseline: number, naturalBaseline: number): void
    vfuncAdjustSizeAllocation(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number, allocatedPos: number, allocatedSize: number): void
    vfuncAdjustSizeRequest(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number): void
    vfuncButtonPressEvent(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel(signalId: number): boolean
    vfuncChildNotify(childProperty: GObject.ParamSpec): void
    vfuncCompositedChanged(): void
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncConfigureEvent(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent(event: Gdk.EventAny): boolean
    vfuncDestroy(): void
    vfuncDestroyEvent(event: Gdk.EventAny): boolean
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin(context: Gdk.DragContext): void
    vfuncDragDataDelete(context: Gdk.DragContext): void
    vfuncDragDataGet(context: Gdk.DragContext, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDataReceived(context: Gdk.DragContext, x: number, y: number, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDrop(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDragEnd(context: Gdk.DragContext): void
    vfuncDragFailed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave(context: Gdk.DragContext, time: number): void
    vfuncDragMotion(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDraw(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncEvent(event: Gdk.Event): boolean
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(event: Gdk.EventFocus): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncGetPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus(): void
    vfuncGrabNotify(wasGrabbed: boolean): void
    vfuncHide(): void
    vfuncHierarchyChanged(previousToplevel: Gtk.Widget): void
    vfuncKeyPressEvent(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(event: Gdk.EventKey): boolean
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncMap(): void
    vfuncMapEvent(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMotionNotifyEvent(event: Gdk.EventMotion): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncParentSet(previousParent: Gtk.Widget): void
    vfuncPopupMenu(): boolean
    vfuncPropertyNotifyEvent(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion(region: cairo.Region): void
    vfuncRealize(): void
    vfuncScreenChanged(previousScreen: Gdk.Screen): void
    vfuncScrollEvent(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionGet(selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncSelectionNotifyEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived(selectionData: Gtk.SelectionData, time: number): void
    vfuncSelectionRequestEvent(event: Gdk.EventSelection): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncShowHelp(helpType: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate(allocation: Gtk.Allocation): void
    vfuncStateChanged(previousState: Gtk.StateType): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncStyleSet(previousStyle: Gtk.Style): void
    vfuncStyleUpdated(): void
    vfuncTouchEvent(event: Gdk.EventTouch): boolean
    vfuncUnmap(): void
    vfuncUnmapEvent(event: Gdk.EventAny): boolean
    vfuncUnrealize(): void
    vfuncVisibilityNotifyEvent(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent(event: Gdk.EventWindowState): boolean
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
    connect(sigName: "accel-closures-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: Terminal, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Terminal, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: Terminal, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Terminal, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-activate-accel", callback: (($obj: Terminal, signalId: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Terminal, signalId: number) => boolean)): number
    emit(sigName: "can-activate-accel", signalId: number): void
    on(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: Terminal, childProperty: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Terminal, childProperty: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "composited-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "configure-event", callback: (($obj: Terminal, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Terminal, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "damage-event", callback: (($obj: Terminal, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Terminal, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-event", callback: (($obj: Terminal, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Terminal, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Terminal) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy-event", callback: (($obj: Terminal, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Terminal, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Terminal, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Terminal, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-begin", callback: (($obj: Terminal, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Terminal, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-delete", callback: (($obj: Terminal, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Terminal, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-get", callback: (($obj: Terminal, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Terminal, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-received", callback: (($obj: Terminal, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Terminal, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-drop", callback: (($obj: Terminal, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Terminal, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-end", callback: (($obj: Terminal, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Terminal, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-failed", callback: (($obj: Terminal, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Terminal, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-leave", callback: (($obj: Terminal, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Terminal, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-motion", callback: (($obj: Terminal, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Terminal, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "draw", callback: (($obj: Terminal, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Terminal, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: Terminal, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Terminal, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Terminal, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Terminal, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event-after", callback: (($obj: Terminal, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Terminal, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: Terminal, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Terminal, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: Terminal, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Terminal, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: Terminal, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Terminal, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-focus", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Terminal) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-notify", callback: (($obj: Terminal, wasGrabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Terminal, wasGrabbed: boolean) => void)): number
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    on(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Terminal) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hierarchy-changed", callback: (($obj: Terminal, previousToplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Terminal, previousToplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: Terminal, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Terminal, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: Terminal, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Terminal, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: Terminal, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Terminal, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "map", callback: (($obj: Terminal) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map-event", callback: (($obj: Terminal, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Terminal, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Terminal, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Terminal, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: Terminal, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Terminal, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: Terminal, oldParent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Terminal, oldParent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup-menu", callback: (($obj: Terminal) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Terminal) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-notify-event", callback: (($obj: Terminal, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Terminal, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-in-event", callback: (($obj: Terminal, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Terminal, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-out-event", callback: (($obj: Terminal, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Terminal, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "screen-changed", callback: (($obj: Terminal, previousScreen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Terminal, previousScreen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: Terminal, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Terminal, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-clear-event", callback: (($obj: Terminal, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Terminal, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-get", callback: (($obj: Terminal, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Terminal, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-notify-event", callback: (($obj: Terminal, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Terminal, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-received", callback: (($obj: Terminal, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Terminal, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-request-event", callback: (($obj: Terminal, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Terminal, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "show", callback: (($obj: Terminal) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-help", callback: (($obj: Terminal, helpType: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Terminal, helpType: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-allocate", callback: (($obj: Terminal, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Terminal, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: Terminal, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Terminal, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Terminal, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Terminal, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-set", callback: (($obj: Terminal, previousStyle?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Terminal, previousStyle?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    on(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-updated", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: Terminal) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: Terminal, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Terminal, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Terminal) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap-event", callback: (($obj: Terminal, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Terminal, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Terminal) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-notify-event", callback: (($obj: Terminal, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Terminal, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-state-event", callback: (($obj: Terminal, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Terminal, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::app-paintable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-left", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::no-show-all", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::style", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::window", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
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