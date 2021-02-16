/**
 * GtkSource-3.0
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

declare namespace GtkSource {

export enum BackgroundPatternType {
    NONE,
    GRID,
}
export enum BracketMatchType {
    NONE,
    OUT_OF_RANGE,
    NOT_FOUND,
    FOUND,
}
export enum ChangeCaseType {
    LOWER,
    UPPER,
    TOGGLE,
    TITLE,
}
export enum CompletionError {
    ALREADY_BOUND,
    NOT_BOUND,
}
export enum CompressionType {
    NONE,
    GZIP,
}
export enum FileLoaderError {
    TOO_BIG,
    ENCODING_AUTO_DETECTION_FAILED,
    CONVERSION_FALLBACK,
}
export enum FileSaverError {
    INVALID_CHARS,
    EXTERNALLY_MODIFIED,
}
export enum GutterRendererAlignmentMode {
    CELL,
    FIRST,
    LAST,
}
export enum NewlineType {
    LF,
    CR,
    CR_LF,
}
export enum SmartHomeEndType {
    DISABLED,
    BEFORE,
    AFTER,
    ALWAYS,
}
export enum ViewGutterPosition {
    LINES,
    MARKS,
}
export enum CompletionActivation {
    NONE,
    INTERACTIVE,
    USER_REQUESTED,
}
export enum DrawSpacesFlags {
    SPACE,
    TAB,
    NEWLINE,
    NBSP,
    LEADING,
    TEXT,
    TRAILING,
    ALL,
}
export enum FileSaverFlags {
    NONE,
    IGNORE_INVALID_CHARS,
    IGNORE_MODIFICATION_TIME,
    CREATE_BACKUP,
}
export enum GutterRendererState {
    NORMAL,
    CURSOR,
    PRELIT,
    SELECTED,
}
export enum SortFlags {
    NONE,
    CASE_SENSITIVE,
    REVERSE_ORDER,
    REMOVE_DUPLICATES,
}
export enum SpaceLocationFlags {
    NONE,
    LEADING,
    INSIDE_TEXT,
    TRAILING,
    ALL,
}
export enum SpaceTypeFlags {
    NONE,
    SPACE,
    TAB,
    NEWLINE,
    NBSP,
    ALL,
}
export function completionErrorQuark(): GLib.Quark
export function encodingGetAll(): Encoding[]
export function encodingGetCurrent(): Encoding
export function encodingGetDefaultCandidates(): Encoding[]
export function encodingGetFromCharset(charset: string): Encoding | null
export function encodingGetUtf8(): Encoding
export function fileLoaderErrorQuark(): GLib.Quark
export function fileSaverErrorQuark(): GLib.Quark
export function utilsEscapeSearchText(text: string): string
export function utilsUnescapeSearchText(text: string): string
export class CompletionProposal {
    /* Methods of GtkSource.CompletionProposal */
    changed(): void
    equal(other: CompletionProposal): boolean
    getGicon(): Gio.Icon | null
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconName(): string | null
    getInfo(): string | null
    getLabel(): string
    getMarkup(): string
    getText(): string
    hash(): number
    /* Virtual methods of GtkSource.CompletionProposal */
    vfuncChanged(): void
    vfuncEqual(other: CompletionProposal): boolean
    vfuncGetGicon(): Gio.Icon | null
    vfuncGetIcon(): GdkPixbuf.Pixbuf | null
    vfuncGetIconName(): string | null
    vfuncGetInfo(): string | null
    vfuncGetLabel(): string
    vfuncGetMarkup(): string
    vfuncGetText(): string
    vfuncHash(): number
    /* Signals of GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: (($obj: CompletionProposal) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CompletionProposal) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class CompletionProvider {
    /* Methods of GtkSource.CompletionProvider */
    activateProposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    getActivation(): CompletionActivation
    getGicon(): Gio.Icon | null
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconName(): string | null
    getInfoWidget(proposal: CompletionProposal): Gtk.Widget | null
    getInteractiveDelay(): number
    getName(): string
    getPriority(): number
    getStartIter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    match(context: CompletionContext): boolean
    populate(context: CompletionContext): void
    updateInfo(proposal: CompletionProposal, info: CompletionInfo): void
    /* Virtual methods of GtkSource.CompletionProvider */
    vfuncActivateProposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    vfuncGetActivation(): CompletionActivation
    vfuncGetGicon(): Gio.Icon | null
    vfuncGetIcon(): GdkPixbuf.Pixbuf | null
    vfuncGetIconName(): string | null
    vfuncGetInfoWidget(proposal: CompletionProposal): Gtk.Widget | null
    vfuncGetInteractiveDelay(): number
    vfuncGetName(): string
    vfuncGetPriority(): number
    vfuncGetStartIter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    vfuncMatch(context: CompletionContext): boolean
    vfuncPopulate(context: CompletionContext): void
    vfuncUpdateInfo(proposal: CompletionProposal, info: CompletionInfo): void
    static name: string
}
export class StyleSchemeChooser {
    /* Properties of GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Methods of GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooser */
    vfuncGetStyleScheme(): StyleScheme
    vfuncSetStyleScheme(scheme: StyleScheme): void
    static name: string
}
export class UndoManager {
    /* Methods of GtkSource.UndoManager */
    beginNotUndoableAction(): void
    canRedo(): boolean
    canRedoChanged(): void
    canUndo(): boolean
    canUndoChanged(): void
    endNotUndoableAction(): void
    redo(): void
    undo(): void
    /* Virtual methods of GtkSource.UndoManager */
    vfuncBeginNotUndoableAction(): void
    vfuncCanRedo(): boolean
    vfuncCanRedoChanged(): void
    vfuncCanUndo(): boolean
    vfuncCanUndoChanged(): void
    vfuncEndNotUndoableAction(): void
    vfuncRedo(): void
    vfuncUndo(): void
    /* Signals of GtkSource.UndoManager */
    connect(sigName: "can-redo-changed", callback: (($obj: UndoManager) => void)): number
    connect_after(sigName: "can-redo-changed", callback: (($obj: UndoManager) => void)): number
    emit(sigName: "can-redo-changed"): void
    on(sigName: "can-redo-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-redo-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-redo-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-undo-changed", callback: (($obj: UndoManager) => void)): number
    connect_after(sigName: "can-undo-changed", callback: (($obj: UndoManager) => void)): number
    emit(sigName: "can-undo-changed"): void
    on(sigName: "can-undo-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-undo-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-undo-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface Buffer_ConstructProps extends Gtk.TextBuffer_ConstructProps {
    highlightMatchingBrackets?: boolean
    highlightSyntax?: boolean
    implicitTrailingNewline?: boolean
    language?: Language
    maxUndoLevels?: number
    styleScheme?: StyleScheme
    undoManager?: UndoManager
}
export class Buffer {
    /* Properties of GtkSource.Buffer */
    readonly canRedo: boolean
    readonly canUndo: boolean
    highlightMatchingBrackets: boolean
    highlightSyntax: boolean
    implicitTrailingNewline: boolean
    language: Language
    maxUndoLevels: number
    styleScheme: StyleScheme
    undoManager: UndoManager
    /* Properties of Gtk.TextBuffer */
    readonly cursorPosition: number
    enableUndo: boolean
    readonly hasSelection: boolean
    text: string
    /* Fields of GtkSource.Buffer */
    parentInstance: Gtk.TextBuffer
    priv: BufferPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Buffer */
    backwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    beginNotUndoableAction(): void
    changeCase(caseType: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    createSourceMark(name: string | null, category: string, where: Gtk.TextIter): Mark
    endNotUndoableAction(): void
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getContextClassesAtIter(iter: Gtk.TextIter): string[]
    getHighlightMatchingBrackets(): boolean
    getHighlightSyntax(): boolean
    getImplicitTrailingNewline(): boolean
    getLanguage(): Language | null
    getMaxUndoLevels(): number
    getSourceMarksAtIter(iter: Gtk.TextIter, category?: string | null): Mark[]
    getSourceMarksAtLine(line: number, category?: string | null): Mark[]
    getStyleScheme(): StyleScheme | null
    getUndoManager(): UndoManager | null
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterForwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterHasContextClass(iter: Gtk.TextIter, contextClass: string): boolean
    joinLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    redo(): void
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    setHighlightMatchingBrackets(highlight: boolean): void
    setHighlightSyntax(highlight: boolean): void
    setImplicitTrailingNewline(implicitTrailingNewline: boolean): void
    setLanguage(language?: Language | null): void
    setMaxUndoLevels(maxUndoLevels: number): void
    setStyleScheme(scheme?: StyleScheme | null): void
    setUndoManager(manager?: UndoManager | null): void
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    undo(): void
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
    removeAllTags(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSelectionClipboard(clipboard: Gdk.Clipboard): void
    removeTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    removeTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    selectRange(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    setEnableUndo(enableUndo: boolean): void
    setModified(setting: boolean): void
    setText(text: string, len: number): void
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
    /* Virtual methods of GtkSource.Buffer */
    vfuncBracketMatched(iter: Gtk.TextIter, state: BracketMatchType): void
    vfuncRedo(): void
    vfuncUndo(): void
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
    /* Signals of GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: (($obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    connect_after(sigName: "bracket-matched", callback: (($obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType): void
    on(sigName: "bracket-matched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bracket-matched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bracket-matched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "highlight-updated", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "highlight-updated", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "highlight-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "highlight-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "highlight-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "redo", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "redo", callback: (($obj: Buffer) => void)): number
    emit(sigName: "redo"): void
    on(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-mark-updated", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "source-mark-updated", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark): void
    on(sigName: "source-mark-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-mark-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-mark-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "undo", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "undo", callback: (($obj: Buffer) => void)): number
    emit(sigName: "undo"): void
    on(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-undo-levels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-undo-levels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-undo-levels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::undo-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::undo-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::undo-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(table?: Gtk.TextTagTable | null): Buffer
    static newWithLanguage(language: Language): Buffer
    static $gtype: GObject.Type
}
export interface Completion_ConstructProps extends GObject.Object_ConstructProps {
    accelerators?: number
    autoCompleteDelay?: number
    proposalPageSize?: number
    providerPageSize?: number
    rememberInfoVisibility?: boolean
    selectOnShow?: boolean
    showHeaders?: boolean
    showIcons?: boolean
    view?: View
}
export class Completion {
    /* Properties of GtkSource.Completion */
    accelerators: number
    autoCompleteDelay: number
    proposalPageSize: number
    providerPageSize: number
    rememberInfoVisibility: boolean
    selectOnShow: boolean
    showHeaders: boolean
    showIcons: boolean
    /* Fields of GtkSource.Completion */
    parentInstance: GObject.Object
    priv: CompletionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Completion */
    addProvider(provider: CompletionProvider): boolean
    blockInteractive(): void
    createContext(position?: Gtk.TextIter | null): CompletionContext
    getInfoWindow(): CompletionInfo
    getProviders(): CompletionProvider[]
    getView(): View | null
    hide(): void
    moveWindow(iter: Gtk.TextIter): void
    removeProvider(provider: CompletionProvider): boolean
    show(providers: CompletionProvider[] | null, context: CompletionContext): boolean
    unblockInteractive(): void
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
    /* Virtual methods of GtkSource.Completion */
    vfuncActivateProposal(): void
    vfuncHide(): void
    vfuncMoveCursor(step: Gtk.ScrollStep, num: number): void
    vfuncMovePage(step: Gtk.ScrollStep, num: number): void
    vfuncPopulateContext(context: CompletionContext): void
    vfuncProposalActivated(provider: CompletionProvider, proposal: CompletionProposal): boolean
    vfuncShow(): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Completion */
    connect(sigName: "activate-proposal", callback: (($obj: Completion) => void)): number
    connect_after(sigName: "activate-proposal", callback: (($obj: Completion) => void)): number
    emit(sigName: "activate-proposal"): void
    on(sigName: "activate-proposal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-proposal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-proposal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Completion) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Completion) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-cursor", callback: (($obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    emit(sigName: "move-cursor", step: Gtk.ScrollStep, num: number): void
    on(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-page", callback: (($obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    connect_after(sigName: "move-page", callback: (($obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    emit(sigName: "move-page", step: Gtk.ScrollStep, num: number): void
    on(sigName: "move-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "populate-context", callback: (($obj: Completion, context: CompletionContext) => void)): number
    connect_after(sigName: "populate-context", callback: (($obj: Completion, context: CompletionContext) => void)): number
    emit(sigName: "populate-context", context: CompletionContext): void
    on(sigName: "populate-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "populate-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "populate-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Completion) => void)): number
    connect_after(sigName: "show", callback: (($obj: Completion) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accelerators", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accelerators", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accelerators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accelerators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accelerators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-complete-delay", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-complete-delay", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-complete-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-complete-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-complete-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proposal-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposal-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proposal-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proposal-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proposal-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remember-info-visibility", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-info-visibility", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remember-info-visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remember-info-visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remember-info-visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::select-on-show", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-on-show", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::select-on-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::select-on-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::select-on-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-headers", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-headers", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-icons", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-icons", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Completion_ConstructProps)
    _init (config?: Completion_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CompletionContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    activation?: CompletionActivation
    completion?: Completion
    iter?: Gtk.TextIter
}
export class CompletionContext {
    /* Properties of GtkSource.CompletionContext */
    activation: CompletionActivation
    iter: Gtk.TextIter
    /* Fields of GtkSource.CompletionContext */
    parent: GObject.InitiallyUnowned
    priv: CompletionContextPrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionContext */
    addProposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void
    getActivation(): CompletionActivation
    getIter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
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
    /* Virtual methods of GtkSource.CompletionContext */
    vfuncCancelled(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionContext */
    connect(sigName: "cancelled", callback: (($obj: CompletionContext) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: CompletionContext) => void)): number
    emit(sigName: "cancelled"): void
    on(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::activation", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iter", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iter", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionContext_ConstructProps)
    _init (config?: CompletionContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CompletionInfo_ConstructProps extends Gtk.Window_ConstructProps {
}
export class CompletionInfo {
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
    /* Fields of GtkSource.CompletionInfo */
    priv: CompletionInfoPrivate
    /* Fields of Gtk.Window */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionInfo */
    getWidget(): Gtk.Widget
    moveToIter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void
    setWidget(widget?: Gtk.Widget | null): void
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
    /* Virtual methods of GtkSource.CompletionInfo */
    vfuncBeforeShow(): void
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
    /* Signals of GtkSource.CompletionInfo */
    connect(sigName: "before-show", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "before-show", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "before-show"): void
    on(sigName: "before-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-focus", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close-request", callback: (($obj: CompletionInfo) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: CompletionInfo) => boolean)): number
    emit(sigName: "close-request"): void
    on(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enable-debugging", callback: (($obj: CompletionInfo, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: CompletionInfo, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: CompletionInfo, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: CompletionInfo, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "hide", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: CompletionInfo, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: CompletionInfo, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "map", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: CompletionInfo, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: CompletionInfo, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: CompletionInfo, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: CompletionInfo, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CompletionInfo, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CompletionInfo, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "realize", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "show", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: CompletionInfo, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: CompletionInfo, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: CompletionInfo) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: CompletionInfo) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-widget", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-widget", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreened", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-on-close", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CompletionInfo_ConstructProps)
    _init (config?: CompletionInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompletionInfo
    static $gtype: GObject.Type
}
export interface CompletionItem_ConstructProps extends GObject.Object_ConstructProps {
    gicon?: Gio.Icon
    icon?: GdkPixbuf.Pixbuf
    iconName?: string
    info?: string
    label?: string
    markup?: string
    text?: string
}
export class CompletionItem {
    /* Properties of GtkSource.CompletionItem */
    gicon: Gio.Icon
    icon: GdkPixbuf.Pixbuf
    iconName: string
    info: string
    label: string
    markup: string
    text: string
    /* Fields of GtkSource.CompletionItem */
    parent: GObject.Object
    priv: CompletionItemPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionItem */
    setGicon(gicon?: Gio.Icon | null): void
    setIcon(icon?: GdkPixbuf.Pixbuf | null): void
    setIconName(iconName?: string | null): void
    setInfo(info?: string | null): void
    setLabel(label?: string | null): void
    setMarkup(markup?: string | null): void
    setText(text?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gicon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::info", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::markup", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CompletionItem_ConstructProps)
    _init (config?: CompletionItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label: string, text: string, icon?: GdkPixbuf.Pixbuf | null, info?: string | null): CompletionItem
    static newFromStock(label: string | null, text: string, stock: string, info?: string | null): CompletionItem
    static newWithMarkup(markup: string, text: string, icon?: GdkPixbuf.Pixbuf | null, info?: string | null): CompletionItem
    static new2(): CompletionItem
    static $gtype: GObject.Type
}
export interface CompletionWords_ConstructProps extends GObject.Object_ConstructProps {
    activation?: CompletionActivation
    icon?: GdkPixbuf.Pixbuf
    interactiveDelay?: number
    minimumWordSize?: number
    name?: string
    priority?: number
    proposalsBatchSize?: number
    scanBatchSize?: number
}
export class CompletionWords {
    /* Properties of GtkSource.CompletionWords */
    activation: CompletionActivation
    icon: GdkPixbuf.Pixbuf
    interactiveDelay: number
    minimumWordSize: number
    name: string
    priority: number
    proposalsBatchSize: number
    scanBatchSize: number
    /* Fields of GtkSource.CompletionWords */
    parent: GObject.Object
    priv: CompletionWordsPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionWords */
    register(buffer: Gtk.TextBuffer): void
    unregister(buffer: Gtk.TextBuffer): void
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
    /* Methods of GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    getPriority(context: CompletionContext): number
    getTitle(): string
    isTrigger(iter: Gtk.TextIter, ch: number): boolean
    keyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    listAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populateAsync(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populateFinish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GtkSource.CompletionWords */
    vfuncActivate(context: CompletionContext, proposal: CompletionProposal): void
    vfuncDisplay(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    vfuncGetPriority(context: CompletionContext): number
    vfuncGetTitle(): string
    vfuncIsTrigger(iter: Gtk.TextIter, ch: number): boolean
    vfuncKeyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    vfuncListAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    vfuncPopulateAsync(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncPopulateFinish(result: Gio.AsyncResult): Gio.ListModel
    vfuncRefilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::activation", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interactive-delay", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive-delay", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interactive-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interactive-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interactive-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimum-word-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-word-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proposals-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposals-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proposals-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proposals-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proposals-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionWords_ConstructProps)
    _init (config?: CompletionWords_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null, icon?: GdkPixbuf.Pixbuf | null): CompletionWords
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    location?: Gio.File
}
export class File {
    /* Properties of GtkSource.File */
    readonly compressionType: CompressionType
    readonly encoding: Encoding
    location: Gio.File
    readonly newlineType: NewlineType
    readonly readOnly: boolean
    /* Fields of GtkSource.File */
    parent: GObject.Object
    priv: FilePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.File */
    checkFileOnDisk(): void
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getLocation(): Gio.File
    getNewlineType(): NewlineType
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
    file?: File
    inputStream?: Gio.InputStream
    location?: Gio.File
}
export class FileLoader {
    /* Fields of GtkSource.FileLoader */
    parent: GObject.Object
    priv: FileLoaderPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.FileLoader */
    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getInputStream(): Gio.InputStream | null
    getLocation(): Gio.File | null
    getNewlineType(): NewlineType
    loadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): boolean
    setCandidateEncodings(candidateEncodings: Encoding[]): void
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
    static newFromStream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
    static $gtype: GObject.Type
}
export interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Buffer
    compressionType?: CompressionType
    encoding?: Encoding
    file?: File
    flags?: FileSaverFlags
    location?: Gio.File
    newlineType?: NewlineType
}
export class FileSaver {
    /* Properties of GtkSource.FileSaver */
    compressionType: CompressionType
    encoding: Encoding
    flags: FileSaverFlags
    newlineType: NewlineType
    /* Fields of GtkSource.FileSaver */
    object: GObject.Object
    priv: FileSaverPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.FileSaver */
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
export interface Gutter_ConstructProps extends GObject.Object_ConstructProps {
    view?: View
    windowType?: Gtk.TextWindowType
    xpad?: number
    ypad?: number
}
export class Gutter {
    /* Properties of GtkSource.Gutter */
    xpad: number
    ypad: number
    /* Fields of GtkSource.Gutter */
    parent: GObject.Object
    priv: GutterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Gutter */
    getPadding(xpad: number, ypad: number): void
    getRendererAtPos(x: number, y: number): GutterRenderer | null
    getView(): View
    getWindow(): Gdk.Window
    getWindowType(): Gtk.TextWindowType
    insert(renderer: GutterRenderer, position: number): boolean
    queueDraw(): void
    remove(renderer: GutterRenderer): void
    reorder(renderer: GutterRenderer, position: number): void
    setPadding(xpad: number, ypad: number): void
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
    connect(sigName: "notify", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Gutter_ConstructProps)
    _init (config?: Gutter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterRenderer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    alignmentMode?: GutterRendererAlignmentMode
    backgroundRgba?: Gdk.RGBA
    backgroundSet?: boolean
    size?: number
    visible?: boolean
    xalign?: number
    xpad?: number
    yalign?: number
    ypad?: number
}
export class GutterRenderer {
    /* Properties of GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    size: number
    readonly view: Gtk.TextView
    visible: boolean
    readonly windowType: Gtk.TextWindowType
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Fields of GtkSource.GutterRenderer */
    parent: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    end(): void
    getAlignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBackground(): [ /* returnType */ boolean, /* color */ Gdk.RGBA | null ]
    getPadding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    getSize(): number
    getView(): Gtk.TextView
    getVisible(): boolean
    getWindowType(): Gtk.TextWindowType
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    queryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    queryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    queueDraw(): void
    setAlignment(xalign: number, yalign: number): void
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setBackground(color?: Gdk.RGBA | null): void
    setPadding(xpad: number, ypad: number): void
    setSize(size: number): void
    setVisible(visible: boolean): void
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
    vfuncActivate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfuncBegin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncChangeBuffer(oldBuffer?: Gtk.TextBuffer | null): void
    vfuncChangeView(oldView?: Gtk.TextView | null): void
    vfuncDraw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncEnd(): void
    vfuncQueryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfuncQueryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncQueryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDraw(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-activatable", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-data", callback: (($obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    on(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-draw", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "queue-draw", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "queue-draw"): void
    on(sigName: "queue-draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-rgba", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-type", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GutterRenderer_ConstructProps)
    _init (config?: GutterRenderer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterRendererPixbuf_ConstructProps extends GutterRenderer_ConstructProps {
    gicon?: Gio.Icon
    iconName?: string
    pixbuf?: GdkPixbuf.Pixbuf
    stockId?: string
}
export class GutterRendererPixbuf {
    /* Properties of GtkSource.GutterRendererPixbuf */
    gicon: Gio.Icon
    iconName: string
    pixbuf: GdkPixbuf.Pixbuf
    stockId: string
    /* Properties of GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    readonly lines: GutterLines
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
    /* Fields of GtkSource.GutterRenderer */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.GutterRendererPixbuf */
    getGicon(): Gio.Icon
    getIconName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    setGicon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setPixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId?: string | null): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBuffer(): Buffer | null
    getView(): View
    getXalign(): number
    getXpad(): number
    getYalign(): number
    getYpad(): number
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
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
    vfuncBegin(lines: GutterLines): void
    vfuncChangeBuffer(oldBuffer?: Buffer | null): void
    vfuncChangeView(oldView?: View | null): void
    vfuncEnd(): void
    vfuncQueryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    vfuncQueryData(lines: GutterLines, line: number): void
    vfuncSnapshotLine(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void
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
    connect(sigName: "activate", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-activatable", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    on(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-data", callback: (($obj: GutterRendererPixbuf, object: GObject.Object, p0: number) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRendererPixbuf, object: GObject.Object, p0: number) => void)): number
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    on(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: GutterRendererPixbuf, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: GutterRendererPixbuf, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "hide", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "map", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: GutterRendererPixbuf, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: GutterRendererPixbuf, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: GutterRendererPixbuf, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRendererPixbuf, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "realize", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "show", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: GutterRendererPixbuf, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: GutterRendererPixbuf, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gicon", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stock-id", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lines", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GutterRendererPixbuf_ConstructProps)
    _init (config?: GutterRendererPixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GutterRendererPixbuf
    static $gtype: GObject.Type
}
export interface GutterRendererText_ConstructProps extends GutterRenderer_ConstructProps {
    markup?: string
    text?: string
}
export class GutterRendererText {
    /* Properties of GtkSource.GutterRendererText */
    markup: string
    text: string
    /* Properties of GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    readonly lines: GutterLines
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
    /* Fields of GtkSource.GutterRenderer */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.GutterRendererText */
    measure(text: string): [ /* width */ number | null, /* height */ number | null ]
    measureMarkup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    setMarkup(markup: string, length: number): void
    setText(text: string, length: number): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBuffer(): Buffer | null
    getView(): View
    getXalign(): number
    getXpad(): number
    getYalign(): number
    getYpad(): number
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
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
    vfuncBegin(lines: GutterLines): void
    vfuncChangeBuffer(oldBuffer?: Buffer | null): void
    vfuncChangeView(oldView?: View | null): void
    vfuncEnd(): void
    vfuncQueryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    vfuncQueryData(lines: GutterLines, line: number): void
    vfuncSnapshotLine(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void
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
    connect(sigName: "activate", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-activatable", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    on(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-data", callback: (($obj: GutterRendererText, object: GObject.Object, p0: number) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRendererText, object: GObject.Object, p0: number) => void)): number
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    on(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: GutterRendererText, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: GutterRendererText, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "hide", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "map", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: GutterRendererText, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: GutterRendererText, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: GutterRendererText, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRendererText, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "realize", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "show", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: GutterRendererText, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: GutterRendererText, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lines", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GutterRendererText_ConstructProps)
    _init (config?: GutterRendererText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GutterRendererText
    static $gtype: GObject.Type
}
export interface Language_ConstructProps extends GObject.Object_ConstructProps {
}
export class Language {
    /* Properties of GtkSource.Language */
    readonly hidden: boolean
    readonly id: string
    readonly name: string
    readonly section: string
    /* Fields of GtkSource.Language */
    parentInstance: GObject.Object
    priv: LanguagePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Language */
    getGlobs(): string[] | null
    getHidden(): boolean
    getId(): string
    getMetadata(name: string): string | null
    getMimeTypes(): string[] | null
    getName(): string
    getSection(): string
    getStyleFallback(styleId: string): string | null
    getStyleIds(): string[] | null
    getStyleName(styleId: string): string | null
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
    connect(sigName: "notify", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hidden", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::section", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::section", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::section", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::section", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::section", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Language_ConstructProps)
    _init (config?: Language_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LanguageManager_ConstructProps extends GObject.Object_ConstructProps {
    searchPath?: string[]
}
export class LanguageManager {
    /* Properties of GtkSource.LanguageManager */
    readonly languageIds: string[]
    searchPath: string[]
    /* Fields of GtkSource.LanguageManager */
    parentInstance: GObject.Object
    priv: LanguageManagerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.LanguageManager */
    getLanguage(id: string): Language | null
    getLanguageIds(): string[] | null
    getSearchPath(): string[]
    guessLanguage(filename?: string | null, contentType?: string | null): Language | null
    setSearchPath(dirs?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language-ids", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-ids", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-path", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LanguageManager_ConstructProps)
    _init (config?: LanguageManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LanguageManager
    static getDefault(): LanguageManager
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends View_ConstructProps {
    fontDesc?: Pango.FontDescription
    view?: View
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class Map {
    /* Properties of GtkSource.Map */
    fontDesc: Pango.FontDescription
    view: View
    /* Properties of GtkSource.View */
    autoIndent: boolean
    backgroundPattern: BackgroundPatternType
    readonly completion: Completion
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
    smartHomeEnd: SmartHomeEndType
    readonly spaceDrawer: SpaceDrawer
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
    /* Fields of GtkSource.Map */
    parentInstance: View
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Map */
    getView(): View | null
    setView(view: View): void
    /* Methods of GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getEnableSnippets(): boolean
    getGutter(windowType: Gtk.TextWindowType): Gutter
    getHighlightCurrentLine(): boolean
    getIndentOnTab(): boolean
    getIndentWidth(): number
    getInsertSpacesInsteadOfTabs(): boolean
    getMarkAttributes(category: string, priority: number): MarkAttributes
    getRightMarginPosition(): number
    getShowLineMarks(): boolean
    getShowLineNumbers(): boolean
    getShowRightMargin(): boolean
    getSmartBackspace(): boolean
    getSmartHomeEnd(): SmartHomeEndType
    getSpaceDrawer(): SpaceDrawer
    getTabWidth(): number
    getVisualColumn(iter: Gtk.TextIter): number
    indentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    pushSnippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    setEnableSnippets(enableSnippets: boolean): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
    setInsertSpacesInsteadOfTabs(enable: boolean): void
    setMarkAttributes(category: string, attributes: MarkAttributes, priority: number): void
    setRightMarginPosition(pos: number): void
    setShowLineMarks(show: boolean): void
    setShowLineNumbers(show: boolean): void
    setShowRightMargin(show: boolean): void
    setSmartBackspace(smartBackspace: boolean): void
    setSmartHomeEnd(smartHomeEnd: SmartHomeEndType): void
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
    vfuncPushSnippet(snippet: Snippet, location?: Gtk.TextIter | null): void
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
    connect(sigName: "change-case", callback: (($obj: Map, caseType: ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: (($obj: Map, caseType: ChangeCaseType) => void)): number
    emit(sigName: "change-case", caseType: ChangeCaseType): void
    on(sigName: "change-case", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-case", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-case", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "change-number", callback: (($obj: Map, count: number) => void)): number
    connect_after(sigName: "change-number", callback: (($obj: Map, count: number) => void)): number
    emit(sigName: "change-number", count: number): void
    on(sigName: "change-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "join-lines", callback: (($obj: Map) => void)): number
    connect_after(sigName: "join-lines", callback: (($obj: Map) => void)): number
    emit(sigName: "join-lines"): void
    on(sigName: "join-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "join-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "join-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-mark-activated", callback: (($obj: Map, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    connect_after(sigName: "line-mark-activated", callback: (($obj: Map, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    on(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-lines", callback: (($obj: Map, down: boolean) => void)): number
    connect_after(sigName: "move-lines", callback: (($obj: Map, down: boolean) => void)): number
    emit(sigName: "move-lines", down: boolean): void
    on(sigName: "move-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-to-matching-bracket", callback: (($obj: Map, extendSelection: boolean) => void)): number
    connect_after(sigName: "move-to-matching-bracket", callback: (($obj: Map, extendSelection: boolean) => void)): number
    emit(sigName: "move-to-matching-bracket", extendSelection: boolean): void
    on(sigName: "move-to-matching-bracket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-to-matching-bracket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-to-matching-bracket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-words", callback: (($obj: Map, count: number) => void)): number
    connect_after(sigName: "move-words", callback: (($obj: Map, count: number) => void)): number
    emit(sigName: "move-words", count: number): void
    on(sigName: "move-words", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-words", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-words", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "push-snippet", callback: (($obj: Map, snippet: Snippet, location: Gtk.TextIter) => void)): number
    connect_after(sigName: "push-snippet", callback: (($obj: Map, snippet: Snippet, location: Gtk.TextIter) => void)): number
    emit(sigName: "push-snippet", snippet: Snippet, location: Gtk.TextIter): void
    on(sigName: "push-snippet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "push-snippet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "push-snippet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-completion", callback: (($obj: Map) => void)): number
    connect_after(sigName: "show-completion", callback: (($obj: Map) => void)): number
    emit(sigName: "show-completion"): void
    on(sigName: "show-completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "smart-home-end", callback: (($obj: Map, iter: Gtk.TextIter, count: number) => void)): number
    connect_after(sigName: "smart-home-end", callback: (($obj: Map, iter: Gtk.TextIter, count: number) => void)): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    on(sigName: "smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: (($obj: Map) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: Map) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "copy-clipboard", callback: (($obj: Map) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: Map) => void)): number
    emit(sigName: "copy-clipboard"): void
    on(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cut-clipboard", callback: (($obj: Map) => void)): number
    connect_after(sigName: "cut-clipboard", callback: (($obj: Map) => void)): number
    emit(sigName: "cut-clipboard"): void
    on(sigName: "cut-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cut-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cut-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-from-cursor", callback: (($obj: Map, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: (($obj: Map, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    on(sigName: "delete-from-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-from-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-from-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "extend-selection", callback: (($obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: (($obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "extend-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "extend-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "extend-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-at-cursor", callback: (($obj: Map, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: (($obj: Map, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    on(sigName: "insert-at-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-at-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-at-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-emoji", callback: (($obj: Map) => void)): number
    connect_after(sigName: "insert-emoji", callback: (($obj: Map) => void)): number
    emit(sigName: "insert-emoji"): void
    on(sigName: "insert-emoji", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-emoji", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-emoji", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-cursor", callback: (($obj: Map, step: Gtk.MovementStep, count: number, extendSelection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: Map, step: Gtk.MovementStep, count: number, extendSelection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extendSelection: boolean): void
    on(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-viewport", callback: (($obj: Map, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: (($obj: Map, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    on(sigName: "move-viewport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-viewport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-viewport", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paste-clipboard", callback: (($obj: Map) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: Map) => void)): number
    emit(sigName: "paste-clipboard"): void
    on(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "preedit-changed", callback: (($obj: Map, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: (($obj: Map, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    on(sigName: "preedit-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "select-all", callback: (($obj: Map, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: Map, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    on(sigName: "select-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "select-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "select-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-anchor", callback: (($obj: Map) => void)): number
    connect_after(sigName: "set-anchor", callback: (($obj: Map) => void)): number
    emit(sigName: "set-anchor"): void
    on(sigName: "set-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "toggle-cursor-visible", callback: (($obj: Map) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: (($obj: Map) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    on(sigName: "toggle-cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "toggle-cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "toggle-cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "toggle-overwrite", callback: (($obj: Map) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: (($obj: Map) => void)): number
    emit(sigName: "toggle-overwrite"): void
    on(sigName: "toggle-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "toggle-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "toggle-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Map) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Map) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Map, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Map, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Map) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Map) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Map, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Map, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Map) => void)): number
    connect_after(sigName: "map", callback: (($obj: Map) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Map, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Map, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Map, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Map, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Map, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Map, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Map) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Map) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Map) => void)): number
    connect_after(sigName: "show", callback: (($obj: Map) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Map, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Map, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Map) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Map) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Map) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Map) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-pattern", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completion", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-snippets", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-snippets", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-current-line", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-on-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin-position", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-marks", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-numbers", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-backspace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-home-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::space-drawer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accepts-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bottom-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extra-menu", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-module", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-hints", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-purpose", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monospace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overwrite", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::top-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Map
    static newWithBuffer(buffer: Buffer): Map
    static newWithBuffer(buffer: Gtk.TextBuffer): Map
    static $gtype: GObject.Type
}
export interface Mark_ConstructProps extends Gtk.TextMark_ConstructProps {
    category?: string
}
export class Mark {
    /* Fields of GtkSource.Mark */
    parentInstance: Gtk.TextMark
    priv: MarkPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Mark */
    getCategory(): string
    next(category?: string | null): Mark | null
    prev(category: string): Mark | null
    /* Methods of Gtk.TextMark */
    getBuffer(): Gtk.TextBuffer
    getDeleted(): boolean
    getLeftGravity(): boolean
    getName(): string | null
    getVisible(): boolean
    setVisible(setting: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Mark_ConstructProps)
    _init (config?: Mark_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, category: string): Mark
    static new(name: string | null, leftGravity: boolean): Mark
    static $gtype: GObject.Type
}
export interface MarkAttributes_ConstructProps extends GObject.Object_ConstructProps {
    background?: Gdk.RGBA
    gicon?: Gio.Icon
    iconName?: string
    pixbuf?: GdkPixbuf.Pixbuf
    stockId?: string
}
export class MarkAttributes {
    /* Properties of GtkSource.MarkAttributes */
    background: Gdk.RGBA
    gicon: Gio.Icon
    iconName: string
    pixbuf: GdkPixbuf.Pixbuf
    stockId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.MarkAttributes */
    getBackground(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    getGicon(): Gio.Icon
    getIconName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    getTooltipMarkup(mark: Mark): string
    getTooltipText(mark: Mark): string
    renderIcon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf
    setBackground(background: Gdk.RGBA): void
    setGicon(gicon: Gio.Icon): void
    setIconName(iconName: string): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setStockId(stockId: string): void
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
    /* Signals of GtkSource.MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    connect_after(sigName: "query-tooltip-markup", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    emit(sigName: "query-tooltip-markup", mark: Mark): void
    on(sigName: "query-tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip-text", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    connect_after(sigName: "query-tooltip-text", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    emit(sigName: "query-tooltip-text", mark: Mark): void
    on(sigName: "query-tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gicon", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stock-id", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MarkAttributes_ConstructProps)
    _init (config?: MarkAttributes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MarkAttributes
    static $gtype: GObject.Type
}
export interface PrintCompositor_ConstructProps extends GObject.Object_ConstructProps {
    bodyFontName?: string
    buffer?: Buffer
    footerFontName?: string
    headerFontName?: string
    highlightSyntax?: boolean
    lineNumbersFontName?: string
    printFooter?: boolean
    printHeader?: boolean
    printLineNumbers?: number
    tabWidth?: number
    wrapMode?: Gtk.WrapMode
}
export class PrintCompositor {
    /* Properties of GtkSource.PrintCompositor */
    bodyFontName: string
    footerFontName: string
    headerFontName: string
    highlightSyntax: boolean
    lineNumbersFontName: string
    readonly nPages: number
    printFooter: boolean
    printHeader: boolean
    printLineNumbers: number
    tabWidth: number
    wrapMode: Gtk.WrapMode
    /* Fields of GtkSource.PrintCompositor */
    parentInstance: GObject.Object
    priv: PrintCompositorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.PrintCompositor */
    drawPage(context: Gtk.PrintContext, pageNr: number): void
    getBodyFontName(): string
    getBottomMargin(unit: Gtk.Unit): number
    getBuffer(): Buffer
    getFooterFontName(): string
    getHeaderFontName(): string
    getHighlightSyntax(): boolean
    getLeftMargin(unit: Gtk.Unit): number
    getLineNumbersFontName(): string
    getNPages(): number
    getPaginationProgress(): number
    getPrintFooter(): boolean
    getPrintHeader(): boolean
    getPrintLineNumbers(): number
    getRightMargin(unit: Gtk.Unit): number
    getTabWidth(): number
    getTopMargin(unit: Gtk.Unit): number
    getWrapMode(): Gtk.WrapMode
    paginate(context: Gtk.PrintContext): boolean
    setBodyFontName(fontName: string): void
    setBottomMargin(margin: number, unit: Gtk.Unit): void
    setFooterFontName(fontName?: string | null): void
    setFooterFormat(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    setHeaderFontName(fontName?: string | null): void
    setHeaderFormat(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    setHighlightSyntax(highlight: boolean): void
    setLeftMargin(margin: number, unit: Gtk.Unit): void
    setLineNumbersFontName(fontName?: string | null): void
    setPrintFooter(print: boolean): void
    setPrintHeader(print: boolean): void
    setPrintLineNumbers(interval: number): void
    setRightMargin(margin: number, unit: Gtk.Unit): void
    setTabWidth(width: number): void
    setTopMargin(margin: number, unit: Gtk.Unit): void
    setWrapMode(wrapMode: Gtk.WrapMode): void
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
    connect(sigName: "notify", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::body-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::body-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::body-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::footer-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::footer-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::footer-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::footer-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::footer-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::header-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::header-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::header-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::header-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-syntax", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-numbers-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-numbers-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-numbers-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-numbers-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-numbers-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-pages", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-footer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-footer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-footer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-footer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-footer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-header", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-header", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-line-numbers", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-line-numbers", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-width", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintCompositor_ConstructProps)
    _init (config?: PrintCompositor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer): PrintCompositor
    static newFromView(view: View): PrintCompositor
    static $gtype: GObject.Type
}
export interface Region_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Gtk.TextBuffer
}
export class Region {
    /* Fields of GtkSource.Region */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Region */
    addRegion(regionToAdd?: Region | null): void
    addSubregion(start: Gtk.TextIter, end: Gtk.TextIter): void
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    getBuffer(): Gtk.TextBuffer | null
    getStartRegionIter(): /* iter */ RegionIter
    intersectRegion(region2?: Region | null): Region | null
    intersectSubregion(start: Gtk.TextIter, end: Gtk.TextIter): Region | null
    isEmpty(): boolean
    subtractRegion(regionToSubtract?: Region | null): void
    subtractSubregion(start: Gtk.TextIter, end: Gtk.TextIter): void
    toString(): string | null
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
    connect(sigName: "notify", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Region_ConstructProps)
    _init (config?: Region_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Gtk.TextBuffer): Region
    static $gtype: GObject.Type
}
export interface SearchContext_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Buffer
    highlight?: boolean
    matchStyle?: Style
    settings?: SearchSettings
}
export class SearchContext {
    /* Properties of GtkSource.SearchContext */
    highlight: boolean
    matchStyle: Style
    readonly occurrencesCount: number
    readonly regexError: object
    settings: SearchSettings
    /* Fields of GtkSource.SearchContext */
    parent: GObject.Object
    priv: SearchContextPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.SearchContext */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null ]
    backward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    backwardAsync(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    backwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null ]
    backwardFinish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null ]
    forward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    forwardAsync(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null ]
    forwardFinish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    getBuffer(): Buffer
    getHighlight(): boolean
    getMatchStyle(): Style
    getOccurrencePosition(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter): number
    getOccurrencesCount(): number
    getRegexError(): GLib.Error | null
    getSettings(): SearchSettings
    replace(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter, replace: string, replaceLength: number): boolean
    replace2(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter, replace: string, replaceLength: number): boolean
    replaceAll(replace: string, replaceLength: number): number
    setHighlight(highlight: boolean): void
    setMatchStyle(matchStyle?: Style | null): void
    setSettings(settings?: SearchSettings | null): void
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
    connect(sigName: "notify", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::match-style", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-style", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::match-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::match-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::match-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::occurrences-count", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::occurrences-count", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::occurrences-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::occurrences-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::occurrences-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::regex-error", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-error", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::regex-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::regex-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::regex-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchContext_ConstructProps)
    _init (config?: SearchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, settings?: SearchSettings | null): SearchContext
    static $gtype: GObject.Type
}
export interface SearchSettings_ConstructProps extends GObject.Object_ConstructProps {
    atWordBoundaries?: boolean
    caseSensitive?: boolean
    regexEnabled?: boolean
    searchText?: string
    wrapAround?: boolean
}
export class SearchSettings {
    /* Properties of GtkSource.SearchSettings */
    atWordBoundaries: boolean
    caseSensitive: boolean
    regexEnabled: boolean
    searchText: string
    wrapAround: boolean
    /* Fields of GtkSource.SearchSettings */
    parent: GObject.Object
    priv: SearchSettingsPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.SearchSettings */
    getAtWordBoundaries(): boolean
    getCaseSensitive(): boolean
    getRegexEnabled(): boolean
    getSearchText(): string | null
    getWrapAround(): boolean
    setAtWordBoundaries(atWordBoundaries: boolean): void
    setCaseSensitive(caseSensitive: boolean): void
    setRegexEnabled(regexEnabled: boolean): void
    setSearchText(searchText?: string | null): void
    setWrapAround(wrapAround: boolean): void
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
    connect(sigName: "notify", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::at-word-boundaries", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::at-word-boundaries", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::at-word-boundaries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::at-word-boundaries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::at-word-boundaries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::case-sensitive", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::case-sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::case-sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::case-sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::regex-enabled", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-enabled", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::regex-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::regex-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::regex-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-text", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-around", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-around", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-around", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-around", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-around", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchSettings_ConstructProps)
    _init (config?: SearchSettings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SearchSettings
    static $gtype: GObject.Type
}
export interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    enableMatrix?: boolean
    matrix?: GLib.Variant
}
export class SpaceDrawer {
    /* Properties of GtkSource.SpaceDrawer */
    enableMatrix: boolean
    matrix: GLib.Variant
    /* Fields of GtkSource.SpaceDrawer */
    parent: GObject.Object
    priv: SpaceDrawerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.SpaceDrawer */
    bindMatrixSetting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    getEnableMatrix(): boolean
    getMatrix(): GLib.Variant
    getTypesForLocations(locations: SpaceLocationFlags): SpaceTypeFlags
    setEnableMatrix(enableMatrix: boolean): void
    setMatrix(matrix?: GLib.Variant | null): void
    setTypesForLocations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void
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
    connect(sigName: "notify", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SpaceDrawer_ConstructProps)
    _init (config?: SpaceDrawer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SpaceDrawer
    static $gtype: GObject.Type
}
export interface Style_ConstructProps extends GObject.Object_ConstructProps {
    background?: string
    backgroundSet?: boolean
    bold?: boolean
    boldSet?: boolean
    foreground?: string
    foregroundSet?: boolean
    italic?: boolean
    italicSet?: boolean
    lineBackground?: string
    lineBackgroundSet?: boolean
    pangoUnderline?: Pango.Underline
    scale?: string
    scaleSet?: boolean
    strikethrough?: boolean
    strikethroughSet?: boolean
    underline?: boolean
    underlineColor?: string
    underlineColorSet?: boolean
    underlineSet?: boolean
}
export class Style {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.Style */
    apply(tag: Gtk.TextTag): void
    copy(): Style
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
    connect(sigName: "notify", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Style_ConstructProps)
    _init (config?: Style_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StyleScheme_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
}
export class StyleScheme {
    /* Properties of GtkSource.StyleScheme */
    readonly description: string
    readonly filename: string
    readonly name: string
    /* Fields of GtkSource.StyleScheme */
    base: GObject.Object
    priv: StyleSchemePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.StyleScheme */
    getAuthors(): string[] | null
    getDescription(): string | null
    getFilename(): string | null
    getId(): string
    getName(): string
    getStyle(styleId: string): Style | null
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
    connect(sigName: "notify", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleScheme_ConstructProps)
    _init (config?: StyleScheme_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StyleSchemeChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
    actionName?: string
    actionTarget?: GLib.Variant
    relatedAction?: Gtk.Action
    useActionAppearance?: boolean
    styleScheme?: StyleScheme
}
export class StyleSchemeChooserButton {
    /* Properties of Gtk.Button */
    child: Gtk.Widget
    hasFrame: boolean
    iconName: string
    label: string
    useUnderline: boolean
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
    /* Properties of Gtk.Actionable */
    actionName: string
    actionTarget: GLib.Variant
    /* Properties of Gtk.Activatable */
    relatedAction: Gtk.Action
    useActionAppearance: boolean
    /* Properties of GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk.Button */
    getChild(): Gtk.Widget | null
    getHasFrame(): boolean
    getIconName(): string | null
    getLabel(): string | null
    getUseUnderline(): boolean
    setChild(child?: Gtk.Widget | null): void
    setHasFrame(hasFrame: boolean): void
    setIconName(iconName: string): void
    setLabel(label: string): void
    setUseUnderline(useUnderline: boolean): void
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
    /* Methods of Gtk.Actionable */
    getActionName(): string | null
    getActionTargetValue(): GLib.Variant | null
    setActionName(actionName?: string | null): void
    setActionTargetValue(targetValue?: GLib.Variant | null): void
    setDetailedActionName(detailedActionName: string): void
    /* Methods of Gtk.Activatable */
    doSetRelatedAction(action: Gtk.Action): void
    getRelatedAction(): Gtk.Action
    getUseActionAppearance(): boolean
    setRelatedAction(action: Gtk.Action): void
    setUseActionAppearance(useAppearance: boolean): void
    syncActionProperties(action?: Gtk.Action | null): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Methods of GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooserButton */
    vfuncGetActionName(): string | null
    vfuncGetActionTargetValue(): GLib.Variant | null
    vfuncSetActionName(actionName?: string | null): void
    vfuncSetActionTargetValue(targetValue?: GLib.Variant | null): void
    vfuncSyncActionProperties(action?: Gtk.Action | null): void
    vfuncUpdate(action: Gtk.Action, propertyName: string): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    vfuncGetStyleScheme(): StyleScheme
    vfuncSetStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Button */
    vfuncActivate(): void
    vfuncClicked(): void
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
    /* Signals of Gtk.Button */
    connect(sigName: "activate", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "activate", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "clicked", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "clicked"): void
    on(sigName: "clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserButton, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserButton, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "hide", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "map", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserButton, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserButton, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserButton, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserButton, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "realize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "show", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-frame", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-underline", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::related-action", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-action-appearance", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemeChooserButton_ConstructProps)
    _init (config?: StyleSchemeChooserButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeChooserButton
    static $gtype: GObject.Type
}
export interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Bin_ConstructProps {
    styleScheme?: StyleScheme
}
export class StyleSchemeChooserWidget {
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
    /* Properties of GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk.Bin */
    getChild(): Gtk.Widget | null
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
    /* Methods of GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooserWidget */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    vfuncGetStyleScheme(): StyleScheme
    vfuncSetStyleScheme(scheme: StyleScheme): void
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
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserWidget, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserWidget, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserWidget, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserWidget, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserWidget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserWidget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemeChooserWidget_ConstructProps)
    _init (config?: StyleSchemeChooserWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeChooserWidget
    static $gtype: GObject.Type
}
export interface StyleSchemeManager_ConstructProps extends GObject.Object_ConstructProps {
    searchPath?: string[]
}
export class StyleSchemeManager {
    /* Properties of GtkSource.StyleSchemeManager */
    readonly schemeIds: string[]
    searchPath: string[]
    /* Fields of GtkSource.StyleSchemeManager */
    parent: GObject.Object
    priv: StyleSchemeManagerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.StyleSchemeManager */
    appendSearchPath(path: string): void
    forceRescan(): void
    getScheme(schemeId: string): StyleScheme
    getSchemeIds(): string[] | null
    getSearchPath(): string[]
    prependSearchPath(path: string): void
    setSearchPath(path?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-ids", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-ids", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-path", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemeManager_ConstructProps)
    _init (config?: StyleSchemeManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeManager
    static getDefault(): StyleSchemeManager
    static $gtype: GObject.Type
}
export interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    drawSpaces?: boolean
    drawSpacesSet?: boolean
}
export class Tag {
    /* Properties of GtkSource.Tag */
    drawSpaces: boolean
    drawSpacesSet: boolean
    /* Properties of Gtk.TextTag */
    accumulativeMargin: boolean
    allowBreaks: boolean
    allowBreaksSet: boolean
    background: string
    backgroundFullHeight: boolean
    backgroundFullHeightSet: boolean
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    direction: Gtk.TextDirection
    editable: boolean
    editableSet: boolean
    fallback: boolean
    fallbackSet: boolean
    family: string
    familySet: boolean
    font: string
    fontDesc: Pango.FontDescription
    fontFeatures: string
    fontFeaturesSet: boolean
    foreground: string
    foregroundRgba: Gdk.RGBA
    foregroundSet: boolean
    indent: number
    indentSet: boolean
    insertHyphens: boolean
    insertHyphensSet: boolean
    invisible: boolean
    invisibleSet: boolean
    justification: Gtk.Justification
    justificationSet: boolean
    language: string
    languageSet: boolean
    leftMargin: number
    leftMarginSet: boolean
    letterSpacing: number
    letterSpacingSet: boolean
    overline: Pango.Overline
    overlineRgba: Gdk.RGBA
    overlineRgbaSet: boolean
    overlineSet: boolean
    paragraphBackground: string
    paragraphBackgroundRgba: Gdk.RGBA
    paragraphBackgroundSet: boolean
    pixelsAboveLines: number
    pixelsAboveLinesSet: boolean
    pixelsBelowLines: number
    pixelsBelowLinesSet: boolean
    pixelsInsideWrap: number
    pixelsInsideWrapSet: boolean
    rightMargin: number
    rightMarginSet: boolean
    rise: number
    riseSet: boolean
    scale: number
    scaleSet: boolean
    showSpaces: Pango.ShowFlags
    showSpacesSet: boolean
    size: number
    sizePoints: number
    sizeSet: boolean
    stretch: Pango.Stretch
    stretchSet: boolean
    strikethrough: boolean
    strikethroughRgba: Gdk.RGBA
    strikethroughRgbaSet: boolean
    strikethroughSet: boolean
    style: Pango.Style
    styleSet: boolean
    tabs: Pango.TabArray
    tabsSet: boolean
    underline: Pango.Underline
    underlineRgba: Gdk.RGBA
    underlineRgbaSet: boolean
    underlineSet: boolean
    variant: Pango.Variant
    variantSet: boolean
    weight: number
    weightSet: boolean
    wrapMode: Gtk.WrapMode
    wrapModeSet: boolean
    /* Fields of GtkSource.Tag */
    parentInstance: Gtk.TextTag
    /* Fields of Gtk.TextTag */
    priv: Gtk.TextTagPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk.TextTag */
    changed(sizeChanged: boolean): void
    getPriority(): number
    setPriority(priority: number): void
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
    connect(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::draw-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::draw-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::draw-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::draw-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accumulative-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accumulative-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accumulative-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accumulative-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accumulative-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-breaks", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-breaks", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-breaks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-breaks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-breaks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-breaks-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-breaks-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-breaks-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-breaks-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-breaks-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-full-height", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-full-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-full-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-full-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-full-height-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-full-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-full-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-full-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fallback", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fallback-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fallback-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fallback-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-features", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-features-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-features-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-features-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-features-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreground", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreground-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreground-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-hyphens", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-hyphens", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-hyphens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-hyphens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-hyphens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-hyphens-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-hyphens-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-hyphens-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-hyphens-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-hyphens-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::invisible", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invisible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::invisible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::invisible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::invisible-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invisible-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::invisible-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::invisible-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::letter-spacing", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::letter-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::letter-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::letter-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::letter-spacing-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::letter-spacing-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::letter-spacing-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::letter-spacing-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rise", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rise-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size-points", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stretch", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stretch-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::variant", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::variant-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::weight", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::weight-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tag_ConstructProps)
    _init (config?: Tag_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Tag
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends Gtk.TextView_ConstructProps {
    autoIndent?: boolean
    backgroundPattern?: BackgroundPatternType
    drawSpaces?: DrawSpacesFlags
    highlightCurrentLine?: boolean
    indentOnTab?: boolean
    indentWidth?: number
    insertSpacesInsteadOfTabs?: boolean
    rightMarginPosition?: number
    showLineMarks?: boolean
    showLineNumbers?: boolean
    showRightMargin?: boolean
    smartBackspace?: boolean
    smartHomeEnd?: SmartHomeEndType
    tabWidth?: number
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class View {
    /* Properties of GtkSource.View */
    autoIndent: boolean
    backgroundPattern: BackgroundPatternType
    readonly completion: Completion
    drawSpaces: DrawSpacesFlags
    highlightCurrentLine: boolean
    indentOnTab: boolean
    indentWidth: number
    insertSpacesInsteadOfTabs: boolean
    rightMarginPosition: number
    showLineMarks: boolean
    showLineNumbers: boolean
    showRightMargin: boolean
    smartBackspace: boolean
    smartHomeEnd: SmartHomeEndType
    readonly spaceDrawer: SpaceDrawer
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
    /* Fields of GtkSource.View */
    priv: ViewPrivate
    /* Fields of Gtk.TextView */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getDrawSpaces(): DrawSpacesFlags
    getGutter(windowType: Gtk.TextWindowType): Gutter
    getHighlightCurrentLine(): boolean
    getIndentOnTab(): boolean
    getIndentWidth(): number
    getInsertSpacesInsteadOfTabs(): boolean
    getMarkAttributes(category: string, priority: number): MarkAttributes
    getRightMarginPosition(): number
    getShowLineMarks(): boolean
    getShowLineNumbers(): boolean
    getShowRightMargin(): boolean
    getSmartBackspace(): boolean
    getSmartHomeEnd(): SmartHomeEndType
    getSpaceDrawer(): SpaceDrawer
    getTabWidth(): number
    getVisualColumn(iter: Gtk.TextIter): number
    indentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    setDrawSpaces(flags: DrawSpacesFlags): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
    setInsertSpacesInsteadOfTabs(enable: boolean): void
    setMarkAttributes(category: string, attributes: MarkAttributes, priority: number): void
    setRightMarginPosition(pos: number): void
    setShowLineMarks(show: boolean): void
    setShowLineNumbers(show: boolean): void
    setShowRightMargin(show: boolean): void
    setSmartBackspace(smartBackspace: boolean): void
    setSmartHomeEnd(smartHomeEnd: SmartHomeEndType): void
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
    vfuncLineMarkActivated(iter: Gtk.TextIter, event: Gdk.Event): void
    vfuncMoveLines(copy: boolean, step: number): void
    vfuncMoveWords(step: number): void
    vfuncRedo(): void
    vfuncShowCompletion(): void
    vfuncUndo(): void
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
    connect(sigName: "change-case", callback: (($obj: View, caseType: ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: (($obj: View, caseType: ChangeCaseType) => void)): number
    emit(sigName: "change-case", caseType: ChangeCaseType): void
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
    connect(sigName: "line-mark-activated", callback: (($obj: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    connect_after(sigName: "line-mark-activated", callback: (($obj: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, event: Gdk.Event): void
    on(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-lines", callback: (($obj: View, copy: boolean, count: number) => void)): number
    connect_after(sigName: "move-lines", callback: (($obj: View, copy: boolean, count: number) => void)): number
    emit(sigName: "move-lines", copy: boolean, count: number): void
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
    connect(sigName: "redo", callback: (($obj: View) => void)): number
    connect_after(sigName: "redo", callback: (($obj: View) => void)): number
    emit(sigName: "redo"): void
    on(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "undo", callback: (($obj: View) => void)): number
    connect_after(sigName: "undo", callback: (($obj: View) => void)): number
    emit(sigName: "undo"): void
    on(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::draw-spaces", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newWithBuffer(buffer: Buffer): View
    static newWithBuffer(buffer: Gtk.TextBuffer): View
    static $gtype: GObject.Type
}
export abstract class BufferClass {
    /* Fields of GtkSource.BufferClass */
    parentClass: Gtk.TextBufferClass
    undo: (buffer: Buffer) => void
    redo: (buffer: Buffer) => void
    bracketMatched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
    static name: string
}
export class BufferPrivate {
    static name: string
}
export abstract class CompletionClass {
    /* Fields of GtkSource.CompletionClass */
    parentClass: GObject.ObjectClass
    proposalActivated: (completion: Completion, provider: CompletionProvider, proposal: CompletionProposal) => boolean
    show: (completion: Completion) => void
    hide: (completion: Completion) => void
    populateContext: (completion: Completion, context: CompletionContext) => void
    moveCursor: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    movePage: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    activateProposal: (completion: Completion) => void
    static name: string
}
export abstract class CompletionContextClass {
    /* Fields of GtkSource.CompletionContextClass */
    parentClass: GObject.InitiallyUnownedClass
    cancelled: (context: CompletionContext) => void
    static name: string
}
export class CompletionContextPrivate {
    static name: string
}
export abstract class CompletionInfoClass {
    /* Fields of GtkSource.CompletionInfoClass */
    parentClass: Gtk.WindowClass
    beforeShow: (info: CompletionInfo) => void
    static name: string
}
export class CompletionInfoPrivate {
    static name: string
}
export abstract class CompletionItemClass {
    /* Fields of GtkSource.CompletionItemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CompletionItemPrivate {
    static name: string
}
export class CompletionPrivate {
    static name: string
}
export abstract class CompletionProposalIface {
    /* Fields of GtkSource.CompletionProposalIface */
    parent: GObject.TypeInterface
    getLabel: (proposal: CompletionProposal) => string
    getMarkup: (proposal: CompletionProposal) => string
    getText: (proposal: CompletionProposal) => string
    getIcon: (proposal: CompletionProposal) => GdkPixbuf.Pixbuf | null
    getIconName: (proposal: CompletionProposal) => string | null
    getGicon: (proposal: CompletionProposal) => Gio.Icon | null
    getInfo: (proposal: CompletionProposal) => string | null
    hash: (proposal: CompletionProposal) => number
    equal: (proposal: CompletionProposal, other: CompletionProposal) => boolean
    changed: (proposal: CompletionProposal) => void
    static name: string
}
export abstract class CompletionProviderIface {
    /* Fields of GtkSource.CompletionProviderIface */
    gIface: GObject.TypeInterface
    getName: (provider: CompletionProvider) => string
    getIcon: (provider: CompletionProvider) => GdkPixbuf.Pixbuf | null
    getIconName: (provider: CompletionProvider) => string | null
    getGicon: (provider: CompletionProvider) => Gio.Icon | null
    populate: (provider: CompletionProvider, context: CompletionContext) => void
    match: (provider: CompletionProvider, context: CompletionContext) => boolean
    getActivation: (provider: CompletionProvider) => CompletionActivation
    getInfoWidget: (provider: CompletionProvider, proposal: CompletionProposal) => Gtk.Widget | null
    updateInfo: (provider: CompletionProvider, proposal: CompletionProposal, info: CompletionInfo) => void
    getStartIter: (provider: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    activateProposal: (provider: CompletionProvider, proposal: CompletionProposal, iter: Gtk.TextIter) => boolean
    getInteractiveDelay: (provider: CompletionProvider) => number
    getPriority: (provider: CompletionProvider) => number
    static name: string
}
export abstract class CompletionWordsClass {
    /* Fields of GtkSource.CompletionWordsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CompletionWordsPrivate {
    static name: string
}
export class Encoding {
    /* Methods of GtkSource.Encoding */
    copy(): Encoding
    free(): void
    getCharset(): string
    getName(): string
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static getAll(): Encoding[]
    static getCurrent(): Encoding
    static getDefaultCandidates(): Encoding[]
    static getFromCharset(charset: string): Encoding | null
    static getUtf8(): Encoding
}
export abstract class FileClass {
    /* Fields of GtkSource.FileClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export abstract class FileLoaderClass {
    /* Fields of GtkSource.FileLoaderClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class FileLoaderPrivate {
    static name: string
}
export class FilePrivate {
    static name: string
}
export abstract class FileSaverClass {
    /* Fields of GtkSource.FileSaverClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class FileSaverPrivate {
    static name: string
}
export abstract class GutterClass {
    /* Fields of GtkSource.GutterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GutterPrivate {
    static name: string
}
export abstract class GutterRendererClass {
    /* Fields of GtkSource.GutterRendererClass */
    parentClass: GObject.InitiallyUnownedClass
    begin: (renderer: GutterRenderer, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter) => void
    draw: (renderer: GutterRenderer, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
    end: (renderer: GutterRenderer) => void
    changeView: (renderer: GutterRenderer, oldView?: Gtk.TextView | null) => void
    changeBuffer: (renderer: GutterRenderer, oldBuffer?: Gtk.TextBuffer | null) => void
    queryActivatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean
    activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void
    queueDraw: (renderer: GutterRenderer) => void
    queryTooltip: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean
    queryData: (renderer: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
    static name: string
}
export abstract class GutterRendererPixbufClass {
    static name: string
}
export class GutterRendererPixbufPrivate {
    static name: string
}
export class GutterRendererPrivate {
    static name: string
}
export abstract class GutterRendererTextClass {
    static name: string
}
export class GutterRendererTextPrivate {
    static name: string
}
export abstract class LanguageClass {
    /* Fields of GtkSource.LanguageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class LanguageManagerClass {
    /* Fields of GtkSource.LanguageManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LanguageManagerPrivate {
    static name: string
}
export class LanguagePrivate {
    static name: string
}
export abstract class MapClass {
    /* Fields of GtkSource.MapClass */
    parentClass: ViewClass
    padding: object[]
    static name: string
}
export abstract class MarkAttributesClass {
    static name: string
}
export class MarkAttributesPrivate {
    static name: string
}
export abstract class MarkClass {
    /* Fields of GtkSource.MarkClass */
    parentClass: Gtk.TextMarkClass
    static name: string
}
export class MarkPrivate {
    static name: string
}
export abstract class PrintCompositorClass {
    /* Fields of GtkSource.PrintCompositorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PrintCompositorPrivate {
    static name: string
}
export abstract class RegionClass {
    /* Fields of GtkSource.RegionClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class RegionIter {
    /* Methods of GtkSource.RegionIter */
    getSubregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    isEnd(): boolean
    next(): boolean
    static name: string
}
export abstract class SearchContextClass {
    /* Fields of GtkSource.SearchContextClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class SearchContextPrivate {
    static name: string
}
export abstract class SearchSettingsClass {
    /* Fields of GtkSource.SearchSettingsClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class SearchSettingsPrivate {
    static name: string
}
export abstract class SpaceDrawerClass {
    /* Fields of GtkSource.SpaceDrawerClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class SpaceDrawerPrivate {
    static name: string
}
export abstract class StyleClass {
    static name: string
}
export abstract class StyleSchemeChooserButtonClass {
    /* Fields of GtkSource.StyleSchemeChooserButtonClass */
    parent: Gtk.ButtonClass
    static name: string
}
export abstract class StyleSchemeChooserInterface {
    /* Fields of GtkSource.StyleSchemeChooserInterface */
    baseInterface: GObject.TypeInterface
    getStyleScheme: (chooser: StyleSchemeChooser) => StyleScheme
    setStyleScheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
    padding: object[]
    static name: string
}
export abstract class StyleSchemeChooserWidgetClass {
    /* Fields of GtkSource.StyleSchemeChooserWidgetClass */
    parent: Gtk.BinClass
    static name: string
}
export abstract class StyleSchemeClass {
    /* Fields of GtkSource.StyleSchemeClass */
    baseClass: GObject.ObjectClass
    static name: string
}
export abstract class StyleSchemeManagerClass {
    /* Fields of GtkSource.StyleSchemeManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class StyleSchemeManagerPrivate {
    static name: string
}
export class StyleSchemePrivate {
    static name: string
}
export abstract class TagClass {
    /* Fields of GtkSource.TagClass */
    parentClass: Gtk.TextTagClass
    padding: object[]
    static name: string
}
export abstract class UndoManagerIface {
    /* Fields of GtkSource.UndoManagerIface */
    parent: GObject.TypeInterface
    canUndo: (manager: UndoManager) => boolean
    canRedo: (manager: UndoManager) => boolean
    undo: (manager: UndoManager) => void
    redo: (manager: UndoManager) => void
    beginNotUndoableAction: (manager: UndoManager) => void
    endNotUndoableAction: (manager: UndoManager) => void
    canUndoChanged: (manager: UndoManager) => void
    canRedoChanged: (manager: UndoManager) => void
    static name: string
}
export abstract class ViewClass {
    /* Fields of GtkSource.ViewClass */
    parentClass: Gtk.TextViewClass
    undo: (view: View) => void
    redo: (view: View) => void
    lineMarkActivated: (view: View, iter: Gtk.TextIter, event: Gdk.Event) => void
    showCompletion: (view: View) => void
    moveLines: (view: View, copy: boolean, step: number) => void
    moveWords: (view: View, step: number) => void
    static name: string
}
export class ViewPrivate {
    static name: string
}
}