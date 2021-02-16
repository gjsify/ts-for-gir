/**
 * Gtef-2
 */

/// <reference types="node" />
/// <reference path="GtkSource-3.0.d.ts" />
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

declare namespace Gtef {

export enum CompressionType {
    NONE,
    GZIP,
}
export enum FileLoaderError {
    TOO_BIG,
    ENCODING_AUTO_DETECTION_FAILED,
}
export enum FileSaverError {
    INVALID_CHARS,
    EXTERNALLY_MODIFIED,
}
export enum NewlineType {
    LF,
    CR,
    CR_LF,
}
export enum SelectionType {
    NO_SELECTION,
    ON_SAME_LINE,
    MULTIPLE_LINES,
}
export enum FileSaverFlags {
    NONE,
    IGNORE_INVALID_CHARS,
    IGNORE_MODIFICATION_TIME,
    CREATE_BACKUP,
}
export enum GutterRendererFoldsState {
    NONE,
    START_FOLDED,
    START_OPENED,
    CONTINUE,
    END,
}
export function actionMapAddActionEntriesCheckDups(actionMap: Gio.ActionMap, entries: Gio.ActionEntry[], userData?: object | null): void
export function encodingGetAll(): Encoding[]
export function encodingGetDefaultCandidates(): Encoding[]
export function fileLoaderErrorQuark(): GLib.Quark
export function fileSaverErrorQuark(): GLib.Quark
export function iterGetLineIndentation(iter: Gtk.TextIter): string
export function menuItemGetLongDescription(menuItem: Gtk.MenuItem): string | null
export function menuItemSetIconName(item: Gtk.MenuItem, iconName: string): void
export function menuItemSetLongDescription(menuItem: Gtk.MenuItem, longDescription?: string | null): void
export function metadataManagerInit(metadataPath: string): void
export function metadataManagerShutdown(): void
export function utilsRecentChooserMenuGetItemUri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
export interface ActionInfoCentralStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ActionInfoCentralStore {
    /* Fields of Gtef.ActionInfoCentralStore */
    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.ActionInfoCentralStore */
    lookup(actionName: string): ActionInfo
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ActionInfoCentralStore_ConstructProps)
    _init (config?: ActionInfoCentralStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getInstance(): ActionInfoCentralStore
    static $gtype: GObject.Type
}
export interface ActionInfoStore_ConstructProps extends GObject.Object_ConstructProps {
    application?: Gtk.Application
}
export class ActionInfoStore {
    /* Fields of Gtef.ActionInfoStore */
    parent: GObject.Object
    priv: ActionInfoStorePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.ActionInfoStore */
    add(info: ActionInfo): void
    addEntries(entries: ActionInfoEntry[], translationDomain?: string | null): void
    checkAllUsed(): void
    createMenuItem(actionName: string): Gtk.Widget
    getApplication(): Gtk.Application | null
    lookup(actionName: string): ActionInfo
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ActionInfoStore_ConstructProps)
    _init (config?: ActionInfoStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application?: Gtk.Application | null): ActionInfoStore
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    application?: Gtk.Application
}
export class Application {
    /* Fields of Gtef.Application */
    parent: GObject.Object
    priv: ApplicationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.Application */
    getAppActionInfoStore(): ActionInfoStore
    getApplication(): Gtk.Application
    openSimple(file: Gio.File): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Application
    static getFromGtkApplication(gtkApp: Gtk.Application): Application
    static $gtype: GObject.Type
}
export interface ApplicationWindow_ConstructProps extends GObject.Object_ConstructProps {
    applicationWindow?: Gtk.ApplicationWindow
    statusbar?: Gtk.Statusbar
}
export class ApplicationWindow {
    /* Properties of Gtef.ApplicationWindow */
    statusbar: Gtk.Statusbar
    /* Fields of Gtef.ApplicationWindow */
    parent: GObject.Object
    priv: ApplicationWindowPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.ApplicationWindow */
    connectMenuToStatusbar(gtefMenuShell: MenuShell): void
    connectRecentChooserMenuToStatusbar(menu: Gtk.RecentChooserMenu): void
    createOpenRecentMenuItem(): Gtk.Widget
    getApplicationWindow(): Gtk.ApplicationWindow
    getStatusbar(): Gtk.Statusbar | null
    setStatusbar(statusbar?: Gtk.Statusbar | null): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Buffer_ConstructProps extends GtkSource.Buffer_ConstructProps {
    gtefStyleSchemeId?: string
}
export class Buffer {
    /* Properties of Gtef.Buffer */
    gtefStyleSchemeId: string
    readonly gtefTitle: string
    /* Properties of GtkSource.Buffer */
    highlightMatchingBrackets: boolean
    highlightSyntax: boolean
    implicitTrailingNewline: boolean
    language: GtkSource.Language
    styleScheme: GtkSource.StyleScheme
    /* Properties of Gtk.TextBuffer */
    readonly canRedo: boolean
    readonly canUndo: boolean
    readonly cursorPosition: number
    enableUndo: boolean
    readonly hasSelection: boolean
    text: string
    /* Fields of Gtef.Buffer */
    parentInstance: GtkSource.Buffer
    /* Fields of Gtk.TextBuffer */
    priv: Gtk.TextBufferPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.Buffer */
    getFile(): File
    getSelectionType(): SelectionType
    getStyleSchemeId(): string
    getTitle(): string
    isUntouched(): boolean
    setStyleSchemeId(styleSchemeId: string): void
    /* Methods of GtkSource.Buffer */
    backwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    changeCase(caseType: GtkSource.ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    createSourceMark(name: string | null, category: string, where: Gtk.TextIter): GtkSource.Mark
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getContextClassesAtIter(iter: Gtk.TextIter): string[]
    getHighlightMatchingBrackets(): boolean
    getHighlightSyntax(): boolean
    getImplicitTrailingNewline(): boolean
    getLanguage(): GtkSource.Language | null
    getSourceMarksAtIter(iter: Gtk.TextIter, category?: string | null): GtkSource.Mark[]
    getSourceMarksAtLine(line: number, category?: string | null): GtkSource.Mark[]
    getStyleScheme(): GtkSource.StyleScheme | null
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterForwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterHasContextClass(iter: Gtk.TextIter, contextClass: string): boolean
    joinLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    setHighlightMatchingBrackets(highlight: boolean): void
    setHighlightSyntax(highlight: boolean): void
    setImplicitTrailingNewline(implicitTrailingNewline: boolean): void
    setLanguage(language?: GtkSource.Language | null): void
    setStyleScheme(scheme?: GtkSource.StyleScheme | null): void
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: GtkSource.SortFlags, column: number): void
    /* Methods of Gtk.TextBuffer */
    addMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    addSelectionClipboard(clipboard: Gdk.Clipboard): void
    applyTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    applyTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    backspace(iter: Gtk.TextIter, interactive: boolean, defaultEditable: boolean): boolean
    beginIrreversibleAction(): void
    beginUserAction(): void
    copyClipboard(clipboard: Gdk.Clipboard): void
    createChildAnchor(iter: Gtk.TextIter): Gtk.TextChildAnchor
    createMark(markName: string | null, where: Gtk.TextIter, leftGravity: boolean): Gtk.TextMark
    cutClipboard(clipboard: Gdk.Clipboard, defaultEditable: boolean): void
    delete(start: Gtk.TextIter, end: Gtk.TextIter): void
    deleteInteractive(startIter: Gtk.TextIter, endIter: Gtk.TextIter, defaultEditable: boolean): boolean
    deleteMark(mark: Gtk.TextMark): void
    deleteMarkByName(name: string): void
    deleteSelection(interactive: boolean, defaultEditable: boolean): boolean
    endIrreversibleAction(): void
    endUserAction(): void
    getBounds(): [ /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getCanRedo(): boolean
    getCanUndo(): boolean
    getCharCount(): number
    getEnableUndo(): boolean
    getEndIter(): /* iter */ Gtk.TextIter
    getHasSelection(): boolean
    getInsert(): Gtk.TextMark
    getIterAtChildAnchor(anchor: Gtk.TextChildAnchor): /* iter */ Gtk.TextIter
    getIterAtLine(lineNumber: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtLineIndex(lineNumber: number, byteIndex: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtLineOffset(lineNumber: number, charOffset: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtMark(mark: Gtk.TextMark): /* iter */ Gtk.TextIter
    getIterAtOffset(charOffset: number): /* iter */ Gtk.TextIter
    getLineCount(): number
    getMark(name: string): Gtk.TextMark | null
    getMaxUndoLevels(): number
    getModified(): boolean
    getSelectionBound(): Gtk.TextMark
    getSelectionBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getSelectionContent(): Gdk.ContentProvider
    getSlice(start: Gtk.TextIter, end: Gtk.TextIter, includeHiddenChars: boolean): string
    getStartIter(): /* iter */ Gtk.TextIter
    getTagTable(): Gtk.TextTagTable
    getText(start: Gtk.TextIter, end: Gtk.TextIter, includeHiddenChars: boolean): string
    insert(iter: Gtk.TextIter, text: string, len: number): void
    insertAtCursor(text: string, len: number): void
    insertChildAnchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    insertInteractive(iter: Gtk.TextIter, text: string, len: number, defaultEditable: boolean): boolean
    insertInteractiveAtCursor(text: string, len: number, defaultEditable: boolean): boolean
    insertMarkup(iter: Gtk.TextIter, markup: string, len: number): void
    insertPaintable(iter: Gtk.TextIter, paintable: Gdk.Paintable): void
    insertRange(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    insertRangeInteractive(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter, defaultEditable: boolean): boolean
    moveMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    moveMarkByName(name: string, where: Gtk.TextIter): void
    pasteClipboard(clipboard: Gdk.Clipboard, overrideLocation: Gtk.TextIter | null, defaultEditable: boolean): void
    placeCursor(where: Gtk.TextIter): void
    redo(): void
    removeAllTags(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSelectionClipboard(clipboard: Gdk.Clipboard): void
    removeTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    removeTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    selectRange(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    setEnableUndo(enableUndo: boolean): void
    setMaxUndoLevels(maxUndoLevels: number): void
    setModified(setting: boolean): void
    setText(text: string, len: number): void
    undo(): void
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
    /* Virtual methods of Gtef.Buffer */
    vfuncGtefCursorMoved(): void
    /* Virtual methods of GtkSource.Buffer */
    vfuncBracketMatched(iter: Gtk.TextIter, state: GtkSource.BracketMatchType): void
    /* Virtual methods of Gtk.TextBuffer */
    vfuncApplyTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncBeginUserAction(): void
    vfuncChanged(): void
    vfuncDeleteRange(start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncEndUserAction(): void
    vfuncInsertChildAnchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    vfuncInsertPaintable(iter: Gtk.TextIter, paintable: Gdk.Paintable): void
    vfuncInsertText(pos: Gtk.TextIter, newText: string, newTextLength: number): void
    vfuncMarkDeleted(mark: Gtk.TextMark): void
    vfuncMarkSet(location: Gtk.TextIter, mark: Gtk.TextMark): void
    vfuncModifiedChanged(): void
    vfuncPasteDone(clipboard: Gdk.Clipboard): void
    vfuncRedo(): void
    vfuncRemoveTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncUndo(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtef.Buffer */
    connect(sigName: "gtef-cursor-moved", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "gtef-cursor-moved", callback: (($obj: Buffer) => void)): number
    emit(sigName: "gtef-cursor-moved"): void
    on(sigName: "gtef-cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gtef-cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gtef-cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: (($obj: Buffer, iter: Gtk.TextIter | null, state: GtkSource.BracketMatchType) => void)): number
    connect_after(sigName: "bracket-matched", callback: (($obj: Buffer, iter: Gtk.TextIter | null, state: GtkSource.BracketMatchType) => void)): number
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: GtkSource.BracketMatchType): void
    on(sigName: "bracket-matched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bracket-matched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bracket-matched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Buffer) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "highlight-updated", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "highlight-updated", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "highlight-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "highlight-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "highlight-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-mark-updated", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "source-mark-updated", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark): void
    on(sigName: "source-mark-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-mark-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-mark-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.TextBuffer */
    connect(sigName: "apply-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "apply-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "apply-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "apply-tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "apply-tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "apply-tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "begin-user-action", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "begin-user-action", callback: (($obj: Buffer) => void)): number
    emit(sigName: "begin-user-action"): void
    on(sigName: "begin-user-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "begin-user-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "begin-user-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Buffer) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-range", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "delete-range", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "delete-range", start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "delete-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "end-user-action", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "end-user-action", callback: (($obj: Buffer) => void)): number
    emit(sigName: "end-user-action"): void
    on(sigName: "end-user-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "end-user-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "end-user-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-child-anchor", callback: (($obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    connect_after(sigName: "insert-child-anchor", callback: (($obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    emit(sigName: "insert-child-anchor", location: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    on(sigName: "insert-child-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-child-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-child-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-paintable", callback: (($obj: Buffer, location: Gtk.TextIter, paintable: Gdk.Paintable) => void)): number
    connect_after(sigName: "insert-paintable", callback: (($obj: Buffer, location: Gtk.TextIter, paintable: Gdk.Paintable) => void)): number
    emit(sigName: "insert-paintable", location: Gtk.TextIter, paintable: Gdk.Paintable): void
    on(sigName: "insert-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-text", callback: (($obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): number
    connect_after(sigName: "insert-text", callback: (($obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): number
    emit(sigName: "insert-text", location: Gtk.TextIter, text: string, len: number): void
    on(sigName: "insert-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mark-deleted", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "mark-deleted", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "mark-deleted", mark: Gtk.TextMark): void
    on(sigName: "mark-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mark-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mark-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mark-set", callback: (($obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "mark-set", callback: (($obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    emit(sigName: "mark-set", location: Gtk.TextIter, mark: Gtk.TextMark): void
    on(sigName: "mark-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mark-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mark-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "modified-changed", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "modified-changed", callback: (($obj: Buffer) => void)): number
    emit(sigName: "modified-changed"): void
    on(sigName: "modified-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "modified-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "modified-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paste-done", callback: (($obj: Buffer, clipboard: Gdk.Clipboard) => void)): number
    connect_after(sigName: "paste-done", callback: (($obj: Buffer, clipboard: Gdk.Clipboard) => void)): number
    emit(sigName: "paste-done", clipboard: Gdk.Clipboard): void
    on(sigName: "paste-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paste-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paste-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "redo", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "redo", callback: (($obj: Buffer) => void)): number
    emit(sigName: "redo"): void
    on(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "remove-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "remove-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "remove-tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove-tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove-tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "undo", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "undo", callback: (($obj: Buffer) => void)): number
    emit(sigName: "undo"): void
    on(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtef-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtef-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtef-style-scheme-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtef-style-scheme-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtef-style-scheme-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtef-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtef-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtef-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtef-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtef-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-matching-brackets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-matching-brackets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-matching-brackets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::implicit-trailing-newline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::implicit-trailing-newline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::implicit-trailing-newline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    static new(table?: Gtk.TextTagTable | null): Buffer
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    location?: Gio.File
}
export class File {
    /* Properties of Gtef.File */
    readonly compressionType: CompressionType
    readonly encoding: Encoding
    location: Gio.File
    readonly newlineType: NewlineType
    readonly readOnly: boolean
    readonly shortName: string
    /* Fields of Gtef.File */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.File */
    checkFileOnDisk(): void
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFileMetadata(): FileMetadata
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    getShortName(): string
    isDeleted(): boolean
    isExternallyModified(): boolean
    isLocal(): boolean
    isReadonly(): boolean
    setLocation(location?: Gio.File | null): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: File_ConstructProps)
    _init (config?: File_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): File
    static $gtype: GObject.Type
}
export interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Buffer
    chunkSize?: number
    file?: File
    location?: Gio.File
    maxSize?: number
}
export class FileLoader {
    /* Properties of Gtef.FileLoader */
    chunkSize: number
    maxSize: number
    /* Fields of Gtef.FileLoader */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.FileLoader */
    getBuffer(): Buffer | null
    getChunkSize(): number
    getEncoding(): Encoding | null
    getFile(): File | null
    getLocation(): Gio.File | null
    getMaxSize(): number
    getNewlineType(): NewlineType
    loadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): boolean
    setChunkSize(chunkSize: number): void
    setMaxSize(maxSize: number): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileLoader_ConstructProps)
    _init (config?: FileLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, file: File): FileLoader
    static $gtype: GObject.Type
}
export interface FileMetadata_ConstructProps extends GObject.Object_ConstructProps {
    file?: File
}
export class FileMetadata {
    /* Fields of Gtef.FileMetadata */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.FileMetadata */
    get(key: string): string | null
    getFile(): File
    load(cancellable?: Gio.Cancellable | null): boolean
    loadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): boolean
    save(cancellable?: Gio.Cancellable | null): boolean
    saveAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    set(key: string, value?: string | null): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileMetadata, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileMetadata_ConstructProps)
    _init (config?: FileMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: File): FileMetadata
    static $gtype: GObject.Type
}
export interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: GtkSource.Buffer
    compressionType?: GtkSource.CompressionType
    encoding?: Encoding
    file?: File
    flags?: FileSaverFlags
    location?: Gio.File
    newlineType?: GtkSource.NewlineType
}
export class FileSaver {
    /* Properties of Gtef.FileSaver */
    compressionType: GtkSource.CompressionType
    encoding: Encoding
    flags: FileSaverFlags
    newlineType: GtkSource.NewlineType
    /* Fields of Gtef.FileSaver */
    object: GObject.Object
    priv: FileSaverPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.FileSaver */
    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getFlags(): FileSaverFlags
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    saveAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    setCompressionType(compressionType: CompressionType): void
    setEncoding(encoding?: Encoding | null): void
    setFlags(flags: FileSaverFlags): void
    setNewlineType(newlineType: NewlineType): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileSaver_ConstructProps)
    _init (config?: FileSaver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, file: File): FileSaver
    static newWithTarget(buffer: Buffer, file: File, targetLocation: Gio.File): FileSaver
    static $gtype: GObject.Type
}
export interface FoldRegion_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Gtk.TextBuffer
    folded?: boolean
}
export class FoldRegion {
    /* Properties of Gtef.FoldRegion */
    folded: boolean
    /* Fields of Gtef.FoldRegion */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.FoldRegion */
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getBuffer(): Gtk.TextBuffer | null
    getFolded(): boolean
    setBounds(start: Gtk.TextIter, end: Gtk.TextIter): void
    setFolded(folded: boolean): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folded", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FoldRegion_ConstructProps)
    _init (config?: FoldRegion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion
    static $gtype: GObject.Type
}
export interface GutterRendererFolds_ConstructProps extends GtkSource.GutterRenderer_ConstructProps {
}
export class GutterRendererFolds {
    /* Properties of GtkSource.GutterRenderer */
    alignmentMode: GtkSource.GutterRendererAlignmentMode
    readonly lines: GtkSource.GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
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
    /* Fields of Gtef.GutterRendererFolds */
    parentInstance: GtkSource.GutterRenderer
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.GutterRendererFolds */
    setState(state: GutterRendererFoldsState): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    getAlignmentMode(): GtkSource.GutterRendererAlignmentMode
    getBuffer(): GtkSource.Buffer | null
    getView(): GtkSource.View
    getXalign(): number
    getXpad(): number
    getYalign(): number
    getYpad(): number
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    setAlignmentMode(mode: GtkSource.GutterRendererAlignmentMode): void
    setXalign(xalign: number): void
    setXpad(xpad: number): void
    setYalign(yalign: number): void
    setYpad(ypad: number): void
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
    /* Virtual methods of GtkSource.GutterRenderer */
    vfuncActivate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    vfuncBegin(lines: GtkSource.GutterLines): void
    vfuncChangeBuffer(oldBuffer?: GtkSource.Buffer | null): void
    vfuncChangeView(oldView?: GtkSource.View | null): void
    vfuncEnd(): void
    vfuncQueryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    vfuncQueryData(lines: GtkSource.GutterLines, line: number): void
    vfuncSnapshotLine(snapshot: Gtk.Snapshot, lines: GtkSource.GutterLines, line: number): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
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
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: (($obj: GutterRendererFolds, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRendererFolds, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-activatable", callback: (($obj: GutterRendererFolds, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRendererFolds, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    on(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-data", callback: (($obj: GutterRendererFolds, object: GObject.Object, p0: number) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRendererFolds, object: GObject.Object, p0: number) => void)): number
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    on(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: GutterRendererFolds, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: GutterRendererFolds, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "hide", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: GutterRendererFolds, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: GutterRendererFolds, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "map", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: GutterRendererFolds, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: GutterRendererFolds, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: GutterRendererFolds, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: GutterRendererFolds, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: GutterRendererFolds, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRendererFolds, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "realize", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "show", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: GutterRendererFolds, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: GutterRendererFolds, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: GutterRendererFolds) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: GutterRendererFolds) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lines", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GutterRendererFolds_ConstructProps)
    _init (config?: GutterRendererFolds_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GutterRendererFolds
    static $gtype: GObject.Type
}
export interface InfoBar_ConstructProps extends Gtk.InfoBar_ConstructProps {
    orientation?: Gtk.Orientation
}
export class InfoBar {
    /* Properties of Gtk.InfoBar */
    messageType: Gtk.MessageType
    revealed: boolean
    showCloseButton: boolean
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtef.InfoBar */
    parentInstance: Gtk.InfoBar
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.InfoBar */
    addCloseButton(): void
    addContentWidget(content: Gtk.Widget): void
    addIcon(): void
    addPrimaryMessage(primaryMsg: string): void
    addSecondaryMessage(secondaryMsg: string): void
    /* Methods of Gtk.InfoBar */
    addActionWidget(child: Gtk.Widget, responseId: number): void
    addButton(buttonText: string, responseId: number): Gtk.Button
    addChild(widget: Gtk.Widget): void
    getMessageType(): Gtk.MessageType
    getRevealed(): boolean
    getShowCloseButton(): boolean
    removeActionWidget(widget: Gtk.Widget): void
    removeChild(widget: Gtk.Widget): void
    response(responseId: number): void
    setDefaultResponse(responseId: number): void
    setMessageType(messageType: Gtk.MessageType): void
    setResponseSensitive(responseId: number, setting: boolean): void
    setRevealed(revealed: boolean): void
    setShowCloseButton(setting: boolean): void
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
    /* Methods of Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Gtef.InfoBar */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
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
    /* Signals of Gtk.InfoBar */
    connect(sigName: "close", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "close", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "close"): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "response", callback: (($obj: InfoBar, responseId: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: InfoBar, responseId: number) => void)): number
    emit(sigName: "response", responseId: number): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: InfoBar, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: InfoBar, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "hide", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: InfoBar, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: InfoBar, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "map", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: InfoBar, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: InfoBar, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: InfoBar, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: InfoBar, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: InfoBar, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: InfoBar, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "realize", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "show", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: InfoBar, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: InfoBar, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: InfoBar) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: InfoBar) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revealed", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revealed", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revealed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revealed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revealed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-close-button", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-close-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-close-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-close-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::orientation", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfoBar_ConstructProps)
    _init (config?: InfoBar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InfoBar
    static newSimple(msgType: Gtk.MessageType, primaryMsg: string, secondaryMsg?: string | null): InfoBar
    static createLabel(): Gtk.Label
    static $gtype: GObject.Type
}
export interface MenuShell_ConstructProps extends GObject.Object_ConstructProps {
    menuShell?: Gtk.MenuShell
}
export class MenuShell {
    /* Fields of Gtef.MenuShell */
    parent: GObject.Object
    priv: MenuShellPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.MenuShell */
    getMenuShell(): Gtk.MenuShell
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
    /* Virtual methods of Gtef.MenuShell */
    vfuncMenuItemDeselected(menuItem: Gtk.MenuItem): void
    vfuncMenuItemSelected(menuItem: Gtk.MenuItem): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtef.MenuShell */
    connect(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menuItem: Gtk.MenuItem) => void)): number
    connect_after(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menuItem: Gtk.MenuItem) => void)): number
    emit(sigName: "menu-item-deselected", menuItem: Gtk.MenuItem): void
    on(sigName: "menu-item-deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "menu-item-deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "menu-item-deselected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "menu-item-selected", callback: (($obj: MenuShell, menuItem: Gtk.MenuItem) => void)): number
    connect_after(sigName: "menu-item-selected", callback: (($obj: MenuShell, menuItem: Gtk.MenuItem) => void)): number
    emit(sigName: "menu-item-selected", menuItem: Gtk.MenuItem): void
    on(sigName: "menu-item-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "menu-item-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "menu-item-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MenuShell_ConstructProps)
    _init (config?: MenuShell_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getFromGtkMenuShell(gtkMenuShell: Gtk.MenuShell): MenuShell
    static $gtype: GObject.Type
}
export interface Tab_ConstructProps extends Gtk.Grid_ConstructProps {
    orientation?: Gtk.Orientation
}
export class Tab {
    /* Properties of Gtk.Grid */
    baselineRow: number
    columnHomogeneous: boolean
    columnSpacing: number
    rowHomogeneous: boolean
    rowSpacing: number
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtef.Tab */
    parentInstance: Gtk.Grid
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.Tab */
    addInfoBar(infoBar: Gtk.InfoBar): void
    /* Methods of Gtk.Grid */
    attach(child: Gtk.Widget, column: number, row: number, width: number, height: number): void
    attachNextTo(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    getBaselineRow(): number
    getChildAt(column: number, row: number): Gtk.Widget | null
    getColumnHomogeneous(): boolean
    getColumnSpacing(): number
    getRowBaselinePosition(row: number): Gtk.BaselinePosition
    getRowHomogeneous(): boolean
    getRowSpacing(): number
    insertColumn(position: number): void
    insertNextTo(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insertRow(position: number): void
    queryChild(child: Gtk.Widget): [ /* column */ number | null, /* row */ number | null, /* width */ number | null, /* height */ number | null ]
    remove(child: Gtk.Widget): void
    removeColumn(position: number): void
    removeRow(position: number): void
    setBaselineRow(row: number): void
    setColumnHomogeneous(homogeneous: boolean): void
    setColumnSpacing(spacing: number): void
    setRowBaselinePosition(row: number, pos: Gtk.BaselinePosition): void
    setRowHomogeneous(homogeneous: boolean): void
    setRowSpacing(spacing: number): void
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
    /* Methods of Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Gtef.Tab */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
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
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Tab) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Tab, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Tab, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Tab) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Tab, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Tab, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "map", callback: (($obj: Tab) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Tab, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Tab, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Tab, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Tab, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Tab, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Tab, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Tab) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "show", callback: (($obj: Tab) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Tab, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Tab, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Tab) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Tab) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tab_ConstructProps)
    _init (config?: Tab_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mainWidget: Gtk.Widget): Tab
    static new(): Tab
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends GtkSource.View_ConstructProps {
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class View {
    /* Properties of GtkSource.View */
    autoIndent: boolean
    backgroundPattern: GtkSource.BackgroundPatternType
    readonly completion: GtkSource.Completion
    enableSnippets: boolean
    highlightCurrentLine: boolean
    indentOnTab: boolean
    indentWidth: number
    insertSpacesInsteadOfTabs: boolean
    rightMarginPosition: number
    showLineMarks: boolean
    showLineNumbers: boolean
    showRightMargin: boolean
    smartBackspace: boolean
    smartHomeEnd: GtkSource.SmartHomeEndType
    readonly spaceDrawer: GtkSource.SpaceDrawer
    tabWidth: number
    /* Properties of Gtk.TextView */
    acceptsTab: boolean
    bottomMargin: number
    buffer: Gtk.TextBuffer
    cursorVisible: boolean
    editable: boolean
    extraMenu: Gio.MenuModel
    imModule: string
    indent: number
    inputHints: Gtk.InputHints
    inputPurpose: Gtk.InputPurpose
    justification: Gtk.Justification
    leftMargin: number
    monospace: boolean
    overwrite: boolean
    pixelsAboveLines: number
    pixelsBelowLines: number
    pixelsInsideWrap: number
    rightMargin: number
    tabs: Pango.TabArray
    topMargin: number
    wrapMode: Gtk.WrapMode
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
    /* Fields of Gtef.View */
    parentInstance: GtkSource.View
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtef.View */
    copyClipboard(): void
    cutClipboard(): void
    deleteSelection(): void
    gotoLine(line: number): boolean
    gotoLineOffset(line: number, lineOffset: number): boolean
    pasteClipboard(): void
    scrollToCursor(): void
    selectAll(): void
    selectLines(startLine: number, endLine: number): void
    /* Methods of GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): GtkSource.BackgroundPatternType
    getCompletion(): GtkSource.Completion
    getEnableSnippets(): boolean
    getGutter(windowType: Gtk.TextWindowType): GtkSource.Gutter
    getHighlightCurrentLine(): boolean
    getIndentOnTab(): boolean
    getIndentWidth(): number
    getInsertSpacesInsteadOfTabs(): boolean
    getMarkAttributes(category: string, priority: number): GtkSource.MarkAttributes
    getRightMarginPosition(): number
    getShowLineMarks(): boolean
    getShowLineNumbers(): boolean
    getShowRightMargin(): boolean
    getSmartBackspace(): boolean
    getSmartHomeEnd(): GtkSource.SmartHomeEndType
    getSpaceDrawer(): GtkSource.SpaceDrawer
    getTabWidth(): number
    getVisualColumn(iter: Gtk.TextIter): number
    indentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    pushSnippet(snippet: GtkSource.Snippet, location?: Gtk.TextIter | null): void
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: GtkSource.BackgroundPatternType): void
    setEnableSnippets(enableSnippets: boolean): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
    setInsertSpacesInsteadOfTabs(enable: boolean): void
    setMarkAttributes(category: string, attributes: GtkSource.MarkAttributes, priority: number): void
    setRightMarginPosition(pos: number): void
    setShowLineMarks(show: boolean): void
    setShowLineNumbers(show: boolean): void
    setShowRightMargin(show: boolean): void
    setSmartBackspace(smartBackspace: boolean): void
    setSmartHomeEnd(smartHomeEnd: GtkSource.SmartHomeEndType): void
    setTabWidth(width: number): void
    unindentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Methods of Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addOverlay(child: Gtk.Widget, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, bufferX: number, bufferY: number): [ /* windowX */ number | null, /* windowY */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getEditable(): boolean
    getExtraMenu(): Gio.MenuModel
    getGutter(win: Gtk.TextWindowType): Gtk.Widget | null
    getIndent(): number
    getInputHints(): Gtk.InputHints
    getInputPurpose(): Gtk.InputPurpose
    getIterAtLocation(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtPosition(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    getIterLocation(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    getJustification(): Gtk.Justification
    getLeftMargin(): number
    getLineAtY(y: number): [ /* targetIter */ Gtk.TextIter, /* lineTop */ number ]
    getLineYrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVisibleRect(): /* visibleRect */ Gdk.Rectangle
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.Event): boolean
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveOverlay(child: Gtk.Widget, xpos: number, ypos: number): void
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    remove(child: Gtk.Widget): void
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void
    setAcceptsTab(acceptsTab: boolean): void
    setBottomMargin(bottomMargin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
    setExtraMenu(model?: Gio.MenuModel | null): void
    setGutter(win: Gtk.TextWindowType, widget?: Gtk.Widget | null): void
    setIndent(indent: number): void
    setInputHints(hints: Gtk.InputHints): void
    setInputPurpose(purpose: Gtk.InputPurpose): void
    setJustification(justification: Gtk.Justification): void
    setLeftMargin(leftMargin: number): void
    setMonospace(monospace: boolean): void
    setOverwrite(overwrite: boolean): void
    setPixelsAboveLines(pixelsAboveLines: number): void
    setPixelsBelowLines(pixelsBelowLines: number): void
    setPixelsInsideWrap(pixelsInsideWrap: number): void
    setRightMargin(rightMargin: number): void
    setTabs(tabs: Pango.TabArray): void
    setTopMargin(topMargin: number): void
    setWrapMode(wrapMode: Gtk.WrapMode): void
    startsDisplayLine(iter: Gtk.TextIter): boolean
    windowToBufferCoords(win: Gtk.TextWindowType, windowX: number, windowY: number): [ /* bufferX */ number | null, /* bufferY */ number | null ]
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
    /* Virtual methods of GtkSource.View */
    vfuncLineMarkActivated(iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    vfuncMoveLines(down: boolean): void
    vfuncMoveWords(step: number): void
    vfuncPushSnippet(snippet: GtkSource.Snippet, location?: Gtk.TextIter | null): void
    vfuncShowCompletion(): void
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
    /* Virtual methods of Gtk.TextView */
    vfuncBackspace(): void
    vfuncCopyClipboard(): void
    vfuncCutClipboard(): void
    vfuncDeleteFromCursor(type: Gtk.DeleteType, count: number): void
    vfuncExtendSelection(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfuncInsertAtCursor(str: string): void
    vfuncInsertEmoji(): void
    vfuncMoveCursor(step: Gtk.MovementStep, count: number, extendSelection: boolean): void
    vfuncPasteClipboard(): void
    vfuncSetAnchor(): void
    vfuncSnapshotLayer(layer: Gtk.TextViewLayer, snapshot: Gtk.Snapshot): void
    vfuncToggleOverwrite(): void
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
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: (($obj: View, caseType: GtkSource.ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: (($obj: View, caseType: GtkSource.ChangeCaseType) => void)): number
    emit(sigName: "change-case", caseType: GtkSource.ChangeCaseType): void
    on(sigName: "change-case", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-case", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-case", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "change-number", callback: (($obj: View, count: number) => void)): number
    connect_after(sigName: "change-number", callback: (($obj: View, count: number) => void)): number
    emit(sigName: "change-number", count: number): void
    on(sigName: "change-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "join-lines", callback: (($obj: View) => void)): number
    connect_after(sigName: "join-lines", callback: (($obj: View) => void)): number
    emit(sigName: "join-lines"): void
    on(sigName: "join-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "join-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "join-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-mark-activated", callback: (($obj: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    connect_after(sigName: "line-mark-activated", callback: (($obj: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    on(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-lines", callback: (($obj: View, down: boolean) => void)): number
    connect_after(sigName: "move-lines", callback: (($obj: View, down: boolean) => void)): number
    emit(sigName: "move-lines", down: boolean): void
    on(sigName: "move-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-to-matching-bracket", callback: (($obj: View, extendSelection: boolean) => void)): number
    connect_after(sigName: "move-to-matching-bracket", callback: (($obj: View, extendSelection: boolean) => void)): number
    emit(sigName: "move-to-matching-bracket", extendSelection: boolean): void
    on(sigName: "move-to-matching-bracket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-to-matching-bracket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-to-matching-bracket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-words", callback: (($obj: View, count: number) => void)): number
    connect_after(sigName: "move-words", callback: (($obj: View, count: number) => void)): number
    emit(sigName: "move-words", count: number): void
    on(sigName: "move-words", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-words", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-words", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "push-snippet", callback: (($obj: View, snippet: GtkSource.Snippet, location: Gtk.TextIter) => void)): number
    connect_after(sigName: "push-snippet", callback: (($obj: View, snippet: GtkSource.Snippet, location: Gtk.TextIter) => void)): number
    emit(sigName: "push-snippet", snippet: GtkSource.Snippet, location: Gtk.TextIter): void
    on(sigName: "push-snippet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "push-snippet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "push-snippet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-completion", callback: (($obj: View) => void)): number
    connect_after(sigName: "show-completion", callback: (($obj: View) => void)): number
    emit(sigName: "show-completion"): void
    on(sigName: "show-completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "smart-home-end", callback: (($obj: View, iter: Gtk.TextIter, count: number) => void)): number
    connect_after(sigName: "smart-home-end", callback: (($obj: View, iter: Gtk.TextIter, count: number) => void)): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    on(sigName: "smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: (($obj: View) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: View) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "copy-clipboard", callback: (($obj: View) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: View) => void)): number
    emit(sigName: "copy-clipboard"): void
    on(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cut-clipboard", callback: (($obj: View) => void)): number
    connect_after(sigName: "cut-clipboard", callback: (($obj: View) => void)): number
    emit(sigName: "cut-clipboard"): void
    on(sigName: "cut-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cut-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cut-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-from-cursor", callback: (($obj: View, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: (($obj: View, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    on(sigName: "delete-from-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-from-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-from-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "extend-selection", callback: (($obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: (($obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "extend-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "extend-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "extend-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-at-cursor", callback: (($obj: View, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: (($obj: View, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    on(sigName: "insert-at-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-at-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-at-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-emoji", callback: (($obj: View) => void)): number
    connect_after(sigName: "insert-emoji", callback: (($obj: View) => void)): number
    emit(sigName: "insert-emoji"): void
    on(sigName: "insert-emoji", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-emoji", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-emoji", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-cursor", callback: (($obj: View, step: Gtk.MovementStep, count: number, extendSelection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: View, step: Gtk.MovementStep, count: number, extendSelection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extendSelection: boolean): void
    on(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-viewport", callback: (($obj: View, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: (($obj: View, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    on(sigName: "move-viewport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-viewport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-viewport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paste-clipboard", callback: (($obj: View) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: View) => void)): number
    emit(sigName: "paste-clipboard"): void
    on(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "preedit-changed", callback: (($obj: View, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: (($obj: View, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    on(sigName: "preedit-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "select-all", callback: (($obj: View, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: View, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    on(sigName: "select-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "select-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "select-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-anchor", callback: (($obj: View) => void)): number
    connect_after(sigName: "set-anchor", callback: (($obj: View) => void)): number
    emit(sigName: "set-anchor"): void
    on(sigName: "set-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "toggle-cursor-visible", callback: (($obj: View) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: (($obj: View) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    on(sigName: "toggle-cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "toggle-cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "toggle-cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "toggle-overwrite", callback: (($obj: View) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: (($obj: View) => void)): number
    emit(sigName: "toggle-overwrite"): void
    on(sigName: "toggle-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "toggle-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "toggle-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: View) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: View) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: View, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: View, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: View) => void)): number
    connect_after(sigName: "hide", callback: (($obj: View) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: View, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: View, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: View) => void)): number
    connect_after(sigName: "map", callback: (($obj: View) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: View, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: View, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: View, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: View, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: View, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: View, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: View) => void)): number
    connect_after(sigName: "realize", callback: (($obj: View) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: View) => void)): number
    connect_after(sigName: "show", callback: (($obj: View) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: View, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: View, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: View) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: View) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: View) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: View) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-snippets", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-snippets", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extra-menu", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): View
    static newWithBuffer(buffer: GtkSource.Buffer): View
    static newWithBuffer(buffer: Gtk.TextBuffer): View
    static $gtype: GObject.Type
}
export class ActionInfo {
    /* Methods of Gtef.ActionInfo */
    copy(): ActionInfo
    getAccels(): string[]
    getActionName(): string | null
    getIconName(): string | null
    getLabel(): string | null
    getTooltip(): string | null
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
    /* Fields of Gtef.ActionInfoCentralStoreClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ActionInfoCentralStorePrivate {
    static name: string
}
export class ActionInfoEntry {
    /* Fields of Gtef.ActionInfoEntry */
    actionName: string
    iconName: string
    label: string
    accel: string
    tooltip: string
    static name: string
}
export abstract class ActionInfoStoreClass {
    /* Fields of Gtef.ActionInfoStoreClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ActionInfoStorePrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Gtef.ApplicationClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class ApplicationWindowClass {
    /* Fields of Gtef.ApplicationWindowClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ApplicationWindowPrivate {
    static name: string
}
export abstract class BufferClass {
    /* Fields of Gtef.BufferClass */
    parentClass: GtkSource.BufferClass
    gtefCursorMoved: (buffer: Buffer) => void
    padding: object[]
    static name: string
}
export class Encoding {
    /* Methods of Gtef.Encoding */
    copy(): Encoding
    equals(enc2?: Encoding | null): boolean
    free(): void
    getCharset(): string
    getName(): string
    isUtf8(): boolean
    toString(): string
    static name: string
    static new(charset: string): Encoding
    constructor(charset: string)
    /* Static methods and pseudo-constructors */
    static new(charset: string): Encoding
    static newFromLocale(): Encoding
    static newUtf8(): Encoding
    static getAll(): Encoding[]
    static getDefaultCandidates(): Encoding[]
}
export abstract class FileClass {
    /* Fields of Gtef.FileClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export abstract class FileLoaderClass {
    /* Fields of Gtef.FileLoaderClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export abstract class FileMetadataClass {
    /* Fields of Gtef.FileMetadataClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export abstract class FileSaverClass {
    /* Fields of Gtef.FileSaverClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class FileSaverPrivate {
    static name: string
}
export abstract class FoldRegionClass {
    /* Fields of Gtef.FoldRegionClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export abstract class GutterRendererFoldsClass {
    /* Fields of Gtef.GutterRendererFoldsClass */
    parentClass: GtkSource.GutterRendererClass
    padding: object[]
    static name: string
}
export abstract class InfoBarClass {
    /* Fields of Gtef.InfoBarClass */
    parentClass: Gtk.InfoBarClass
    padding: object[]
    static name: string
}
export abstract class MenuShellClass {
    /* Fields of Gtef.MenuShellClass */
    parentClass: GObject.ObjectClass
    menuItemSelected: (gtefMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    menuItemDeselected: (gtefMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    padding: object[]
    static name: string
}
export class MenuShellPrivate {
    static name: string
}
export abstract class TabClass {
    /* Fields of Gtef.TabClass */
    parentClass: Gtk.GridClass
    padding: object[]
    static name: string
}
export abstract class ViewClass {
    /* Fields of Gtef.ViewClass */
    parentClass: GtkSource.ViewClass
    padding: object[]
    static name: string
}
}