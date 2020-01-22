/**
 * GtkSource-3.0
 */

/// <reference path="Gtk.d.ts" />
/// <reference path="xlib.d.ts" />
/// <reference path="Gdk.d.ts" />
/// <reference path="cairo.d.ts" />
/// <reference path="Pango.d.ts" />
/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />
/// <reference path="Gio.d.ts" />
/// <reference path="GdkPixbuf.d.ts" />
/// <reference path="GModule.d.ts" />
/// <reference path="Atk.d.ts" />

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
    vfuncChanged?(): void
    vfuncEqual?(other: CompletionProposal): boolean
    vfuncGetGicon?(): Gio.Icon | null
    vfuncGetIcon?(): GdkPixbuf.Pixbuf | null
    vfuncGetIconName?(): string | null
    vfuncGetInfo?(): string | null
    vfuncGetLabel?(): string
    vfuncGetMarkup?(): string
    vfuncGetText?(): string
    vfuncHash?(): number
    /* Signals of GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: ((obj: CompletionProposal) => void)): number
    connect_after(sigName: "changed", callback: ((obj: CompletionProposal) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: ((event: CompletionProposal) => void)): EventEmitter
    once(sigName: "changed", callback: ((event: CompletionProposal) => void)): EventEmitter
    off(sigName: "changed", callback: ((event: CompletionProposal) => void)): EventEmitter
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
    vfuncActivateProposal?(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    vfuncGetActivation?(): CompletionActivation
    vfuncGetGicon?(): Gio.Icon | null
    vfuncGetIcon?(): GdkPixbuf.Pixbuf | null
    vfuncGetIconName?(): string | null
    vfuncGetInfoWidget?(proposal: CompletionProposal): Gtk.Widget | null
    vfuncGetInteractiveDelay?(): number
    vfuncGetName?(): string
    vfuncGetPriority?(): number
    vfuncGetStartIter?(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    vfuncMatch?(context: CompletionContext): boolean
    vfuncPopulate?(context: CompletionContext): void
    vfuncUpdateInfo?(proposal: CompletionProposal, info: CompletionInfo): void
    static name: string
}
export class StyleSchemeChooser {
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Methods of GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooser */
    vfuncGetStyleScheme?(): StyleScheme
    vfuncSetStyleScheme?(scheme: StyleScheme): void
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
    vfuncBeginNotUndoableAction?(): void
    vfuncCanRedo?(): boolean
    vfuncCanRedoChanged?(): void
    vfuncCanUndo?(): boolean
    vfuncCanUndoChanged?(): void
    vfuncEndNotUndoableAction?(): void
    vfuncRedo?(): void
    vfuncUndo?(): void
    /* Signals of GtkSource.UndoManager */
    connect(sigName: "can-redo-changed", callback: ((obj: UndoManager) => void)): number
    connect_after(sigName: "can-redo-changed", callback: ((obj: UndoManager) => void)): number
    emit(sigName: "can-redo-changed"): void
    on(sigName: "can-redo-changed", callback: ((event: UndoManager) => void)): EventEmitter
    once(sigName: "can-redo-changed", callback: ((event: UndoManager) => void)): EventEmitter
    off(sigName: "can-redo-changed", callback: ((event: UndoManager) => void)): EventEmitter
    connect(sigName: "can-undo-changed", callback: ((obj: UndoManager) => void)): number
    connect_after(sigName: "can-undo-changed", callback: ((obj: UndoManager) => void)): number
    emit(sigName: "can-undo-changed"): void
    on(sigName: "can-undo-changed", callback: ((event: UndoManager) => void)): EventEmitter
    once(sigName: "can-undo-changed", callback: ((event: UndoManager) => void)): EventEmitter
    off(sigName: "can-undo-changed", callback: ((event: UndoManager) => void)): EventEmitter
    static name: string
}

export interface Buffer_ConstructProps extends Gtk.TextBuffer_ConstructProps {
    highlight_matching_brackets?:boolean
    highlight_syntax?:boolean
    implicit_trailing_newline?:boolean
    language?:Language
    max_undo_levels?:number
    style_scheme?:StyleScheme
    undo_manager?:UndoManager
}
export class Buffer {
    /* Properties of GtkSource.Buffer */
    readonly can_redo:boolean
    readonly can_undo:boolean
    highlight_matching_brackets:boolean
    highlight_syntax:boolean
    implicit_trailing_newline:boolean
    language:Language
    max_undo_levels:number
    style_scheme:StyleScheme
    undo_manager:UndoManager
    /* Properties of Gtk.TextBuffer */
    readonly copy_target_list:Gtk.TargetList
    readonly cursor_position:number
    readonly has_selection:boolean
    readonly paste_target_list:Gtk.TargetList
    text:string
    /* Fields of GtkSource.Buffer */
    parent_instance:Gtk.TextBuffer
    priv:BufferPrivate
    /* Fields of Gtk.TextBuffer */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Buffer */
    backwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): boolean
    beginNotUndoableAction(): void
    canRedo(): boolean
    canUndo(): boolean
    changeCase(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    createSourceMark(name: string | null, category: string, where: Gtk.TextIter): Mark
    endNotUndoableAction(): void
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): boolean
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
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, context_class: string): boolean
    iterForwardToContextClassToggle(iter: Gtk.TextIter, context_class: string): boolean
    iterHasContextClass(iter: Gtk.TextIter, context_class: string): boolean
    joinLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    redo(): void
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    setHighlightMatchingBrackets(highlight: boolean): void
    setHighlightSyntax(highlight: boolean): void
    setImplicitTrailingNewline(implicit_trailing_newline: boolean): void
    setLanguage(language?: Language | null): void
    setMaxUndoLevels(max_undo_levels: number): void
    setStyleScheme(scheme?: StyleScheme | null): void
    setUndoManager(manager?: UndoManager | null): void
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    undo(): void
    /* Methods of Gtk.TextBuffer */
    addMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    addSelectionClipboard(clipboard: Gtk.Clipboard): void
    applyTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    applyTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    backspace(iter: Gtk.TextIter, interactive: boolean, default_editable: boolean): boolean
    beginUserAction(): void
    copyClipboard(clipboard: Gtk.Clipboard): void
    createChildAnchor(iter: Gtk.TextIter): Gtk.TextChildAnchor
    createMark(mark_name: string | null, where: Gtk.TextIter, left_gravity: boolean): Gtk.TextMark
    cutClipboard(clipboard: Gtk.Clipboard, default_editable: boolean): void
    delete(start: Gtk.TextIter, end: Gtk.TextIter): void
    deleteInteractive(start_iter: Gtk.TextIter, end_iter: Gtk.TextIter, default_editable: boolean): boolean
    deleteMark(mark: Gtk.TextMark): void
    deleteMarkByName(name: string): void
    deleteSelection(interactive: boolean, default_editable: boolean): boolean
    deserialize(content_buffer: Gtk.TextBuffer, format: Gdk.Atom, iter: Gtk.TextIter, data: any): boolean
    deserializeGetCanCreateTags(format: Gdk.Atom): boolean
    deserializeSetCanCreateTags(format: Gdk.Atom, can_create_tags: boolean): void
    endUserAction(): void
    getBounds(): [ /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getCharCount(): number
    getCopyTargetList(): Gtk.TargetList
    getDeserializeFormats(): Gdk.Atom[]
    getEndIter(): /* iter */ Gtk.TextIter
    getHasSelection(): boolean
    getInsert(): Gtk.TextMark
    getIterAtChildAnchor(anchor: Gtk.TextChildAnchor): /* iter */ Gtk.TextIter
    getIterAtLine(line_number: number): /* iter */ Gtk.TextIter
    getIterAtLineIndex(line_number: number, byte_index: number): /* iter */ Gtk.TextIter
    getIterAtLineOffset(line_number: number, char_offset: number): /* iter */ Gtk.TextIter
    getIterAtMark(mark: Gtk.TextMark): /* iter */ Gtk.TextIter
    getIterAtOffset(char_offset: number): /* iter */ Gtk.TextIter
    getLineCount(): number
    getMark(name: string): Gtk.TextMark | null
    getModified(): boolean
    getPasteTargetList(): Gtk.TargetList
    getSelectionBound(): Gtk.TextMark
    getSelectionBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getSerializeFormats(): Gdk.Atom[]
    getSlice(start: Gtk.TextIter, end: Gtk.TextIter, include_hidden_chars: boolean): string
    getStartIter(): /* iter */ Gtk.TextIter
    getTagTable(): Gtk.TextTagTable
    getText(start: Gtk.TextIter, end: Gtk.TextIter, include_hidden_chars: boolean): string
    insert(iter: Gtk.TextIter, text: string, len: number): void
    insertAtCursor(text: string, len: number): void
    insertChildAnchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    insertInteractive(iter: Gtk.TextIter, text: string, len: number, default_editable: boolean): boolean
    insertInteractiveAtCursor(text: string, len: number, default_editable: boolean): boolean
    insertMarkup(iter: Gtk.TextIter, markup: string, len: number): void
    insertPixbuf(iter: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    insertRange(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    insertRangeInteractive(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter, default_editable: boolean): boolean
    moveMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    moveMarkByName(name: string, where: Gtk.TextIter): void
    pasteClipboard(clipboard: Gtk.Clipboard, override_location: Gtk.TextIter | null, default_editable: boolean): void
    placeCursor(where: Gtk.TextIter): void
    registerDeserializeFormat(mime_type: string, function_: Gtk.TextBufferDeserializeFunc): Gdk.Atom
    registerDeserializeTagset(tagset_name?: string | null): Gdk.Atom
    registerSerializeFormat(mime_type: string, function_: Gtk.TextBufferSerializeFunc): Gdk.Atom
    registerSerializeTagset(tagset_name?: string | null): Gdk.Atom
    removeAllTags(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSelectionClipboard(clipboard: Gtk.Clipboard): void
    removeTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    removeTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    selectRange(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    serialize(content_buffer: Gtk.TextBuffer, format: Gdk.Atom, start: Gtk.TextIter, end: Gtk.TextIter): any
    setModified(setting: boolean): void
    setText(text: string, len: number): void
    unregisterDeserializeFormat(format: Gdk.Atom): void
    unregisterSerializeFormat(format: Gdk.Atom): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.Buffer */
    vfuncBracketMatched?(iter: Gtk.TextIter, state: BracketMatchType): void
    vfuncRedo?(): void
    vfuncUndo?(): void
    /* Virtual methods of Gtk.TextBuffer */
    vfuncApplyTag?(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncBeginUserAction?(): void
    vfuncChanged?(): void
    vfuncDeleteRange?(start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncEndUserAction?(): void
    vfuncInsertChildAnchor?(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    vfuncInsertPixbuf?(iter: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    vfuncInsertText?(pos: Gtk.TextIter, new_text: string, new_text_length: number): void
    vfuncMarkDeleted?(mark: Gtk.TextMark): void
    vfuncMarkSet?(location: Gtk.TextIter, mark: Gtk.TextMark): void
    vfuncModifiedChanged?(): void
    vfuncPasteDone?(clipboard: Gtk.Clipboard): void
    vfuncRemoveTag?(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: ((obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    connect_after(sigName: "bracket-matched", callback: ((obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType): void
    on(sigName: "bracket-matched", callback: ((event: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): EventEmitter
    once(sigName: "bracket-matched", callback: ((event: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): EventEmitter
    off(sigName: "bracket-matched", callback: ((event: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): EventEmitter
    connect(sigName: "highlight-updated", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "highlight-updated", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "highlight-updated", callback: ((event: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    once(sigName: "highlight-updated", callback: ((event: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    off(sigName: "highlight-updated", callback: ((event: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    connect(sigName: "redo", callback: ((obj: Buffer) => void)): number
    connect_after(sigName: "redo", callback: ((obj: Buffer) => void)): number
    emit(sigName: "redo"): void
    on(sigName: "redo", callback: ((event: Buffer) => void)): EventEmitter
    once(sigName: "redo", callback: ((event: Buffer) => void)): EventEmitter
    off(sigName: "redo", callback: ((event: Buffer) => void)): EventEmitter
    connect(sigName: "source-mark-updated", callback: ((obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "source-mark-updated", callback: ((obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark): void
    on(sigName: "source-mark-updated", callback: ((event: Buffer, mark: Gtk.TextMark) => void)): EventEmitter
    once(sigName: "source-mark-updated", callback: ((event: Buffer, mark: Gtk.TextMark) => void)): EventEmitter
    off(sigName: "source-mark-updated", callback: ((event: Buffer, mark: Gtk.TextMark) => void)): EventEmitter
    connect(sigName: "undo", callback: ((obj: Buffer) => void)): number
    connect_after(sigName: "undo", callback: ((obj: Buffer) => void)): number
    emit(sigName: "undo"): void
    on(sigName: "undo", callback: ((event: Buffer) => void)): EventEmitter
    once(sigName: "undo", callback: ((event: Buffer) => void)): EventEmitter
    off(sigName: "undo", callback: ((event: Buffer) => void)): EventEmitter
    /* Signals of Gtk.TextBuffer */
    connect(sigName: "apply-tag", callback: ((obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "apply-tag", callback: ((obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "apply-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "apply-tag", callback: ((event: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    once(sigName: "apply-tag", callback: ((event: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    off(sigName: "apply-tag", callback: ((event: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    connect(sigName: "begin-user-action", callback: ((obj: Buffer) => void)): number
    connect_after(sigName: "begin-user-action", callback: ((obj: Buffer) => void)): number
    emit(sigName: "begin-user-action"): void
    on(sigName: "begin-user-action", callback: ((event: Buffer) => void)): EventEmitter
    once(sigName: "begin-user-action", callback: ((event: Buffer) => void)): EventEmitter
    off(sigName: "begin-user-action", callback: ((event: Buffer) => void)): EventEmitter
    connect(sigName: "changed", callback: ((obj: Buffer) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Buffer) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: ((event: Buffer) => void)): EventEmitter
    once(sigName: "changed", callback: ((event: Buffer) => void)): EventEmitter
    off(sigName: "changed", callback: ((event: Buffer) => void)): EventEmitter
    connect(sigName: "delete-range", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "delete-range", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "delete-range", start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "delete-range", callback: ((event: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    once(sigName: "delete-range", callback: ((event: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    off(sigName: "delete-range", callback: ((event: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    connect(sigName: "end-user-action", callback: ((obj: Buffer) => void)): number
    connect_after(sigName: "end-user-action", callback: ((obj: Buffer) => void)): number
    emit(sigName: "end-user-action"): void
    on(sigName: "end-user-action", callback: ((event: Buffer) => void)): EventEmitter
    once(sigName: "end-user-action", callback: ((event: Buffer) => void)): EventEmitter
    off(sigName: "end-user-action", callback: ((event: Buffer) => void)): EventEmitter
    connect(sigName: "insert-child-anchor", callback: ((obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    connect_after(sigName: "insert-child-anchor", callback: ((obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    emit(sigName: "insert-child-anchor", location: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    on(sigName: "insert-child-anchor", callback: ((event: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): EventEmitter
    once(sigName: "insert-child-anchor", callback: ((event: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): EventEmitter
    off(sigName: "insert-child-anchor", callback: ((event: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): EventEmitter
    connect(sigName: "insert-pixbuf", callback: ((obj: Buffer, location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    connect_after(sigName: "insert-pixbuf", callback: ((obj: Buffer, location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    emit(sigName: "insert-pixbuf", location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    on(sigName: "insert-pixbuf", callback: ((event: Buffer, location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void)): EventEmitter
    once(sigName: "insert-pixbuf", callback: ((event: Buffer, location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void)): EventEmitter
    off(sigName: "insert-pixbuf", callback: ((event: Buffer, location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void)): EventEmitter
    connect(sigName: "insert-text", callback: ((obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): number
    connect_after(sigName: "insert-text", callback: ((obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): number
    emit(sigName: "insert-text", location: Gtk.TextIter, text: string, len: number): void
    on(sigName: "insert-text", callback: ((event: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): EventEmitter
    once(sigName: "insert-text", callback: ((event: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): EventEmitter
    off(sigName: "insert-text", callback: ((event: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): EventEmitter
    connect(sigName: "mark-deleted", callback: ((obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "mark-deleted", callback: ((obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "mark-deleted", mark: Gtk.TextMark): void
    on(sigName: "mark-deleted", callback: ((event: Buffer, mark: Gtk.TextMark) => void)): EventEmitter
    once(sigName: "mark-deleted", callback: ((event: Buffer, mark: Gtk.TextMark) => void)): EventEmitter
    off(sigName: "mark-deleted", callback: ((event: Buffer, mark: Gtk.TextMark) => void)): EventEmitter
    connect(sigName: "mark-set", callback: ((obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "mark-set", callback: ((obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    emit(sigName: "mark-set", location: Gtk.TextIter, mark: Gtk.TextMark): void
    on(sigName: "mark-set", callback: ((event: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): EventEmitter
    once(sigName: "mark-set", callback: ((event: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): EventEmitter
    off(sigName: "mark-set", callback: ((event: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): EventEmitter
    connect(sigName: "modified-changed", callback: ((obj: Buffer) => void)): number
    connect_after(sigName: "modified-changed", callback: ((obj: Buffer) => void)): number
    emit(sigName: "modified-changed"): void
    on(sigName: "modified-changed", callback: ((event: Buffer) => void)): EventEmitter
    once(sigName: "modified-changed", callback: ((event: Buffer) => void)): EventEmitter
    off(sigName: "modified-changed", callback: ((event: Buffer) => void)): EventEmitter
    connect(sigName: "paste-done", callback: ((obj: Buffer, clipboard: Gtk.Clipboard) => void)): number
    connect_after(sigName: "paste-done", callback: ((obj: Buffer, clipboard: Gtk.Clipboard) => void)): number
    emit(sigName: "paste-done", clipboard: Gtk.Clipboard): void
    on(sigName: "paste-done", callback: ((event: Buffer, clipboard: Gtk.Clipboard) => void)): EventEmitter
    once(sigName: "paste-done", callback: ((event: Buffer, clipboard: Gtk.Clipboard) => void)): EventEmitter
    off(sigName: "paste-done", callback: ((event: Buffer, clipboard: Gtk.Clipboard) => void)): EventEmitter
    connect(sigName: "remove-tag", callback: ((obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "remove-tag", callback: ((obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "remove-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "remove-tag", callback: ((event: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    once(sigName: "remove-tag", callback: ((event: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    off(sigName: "remove-tag", callback: ((event: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Buffer, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Buffer, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Buffer, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-redo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-redo", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-redo", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-redo", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-undo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-undo", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-undo", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-undo", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::highlight-matching-brackets", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-matching-brackets", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::highlight-matching-brackets", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::highlight-matching-brackets", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::highlight-syntax", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-syntax", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::highlight-syntax", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::highlight-syntax", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::implicit-trailing-newline", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::implicit-trailing-newline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::implicit-trailing-newline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::implicit-trailing-newline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::language", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::language", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::language", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::max-undo-levels", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-undo-levels", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::max-undo-levels", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::max-undo-levels", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::undo-manager", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::undo-manager", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::undo-manager", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::undo-manager", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::copy-target-list", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-target-list", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copy-target-list", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::copy-target-list", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::copy-target-list", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::cursor-position", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::cursor-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::cursor-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-selection", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-selection", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-selection", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-selection", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::paste-target-list", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paste-target-list", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paste-target-list", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::paste-target-list", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::paste-target-list", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::text", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    static new(table?: Gtk.TextTagTable | null): Buffer
    static newWithLanguage(language: Language): Buffer
    static $gtype: GObject.Type
}
export interface Completion_ConstructProps extends GObject.Object_ConstructProps {
    accelerators?:number
    auto_complete_delay?:number
    proposal_page_size?:number
    provider_page_size?:number
    remember_info_visibility?:boolean
    select_on_show?:boolean
    show_headers?:boolean
    show_icons?:boolean
    view?:View
}
export class Completion {
    /* Properties of GtkSource.Completion */
    accelerators:number
    auto_complete_delay:number
    proposal_page_size:number
    provider_page_size:number
    remember_info_visibility:boolean
    select_on_show:boolean
    show_headers:boolean
    show_icons:boolean
    /* Fields of GtkSource.Completion */
    parent_instance:GObject.Object
    priv:CompletionPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
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
    getName(): string
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Virtual methods of GtkSource.Completion */
    vfuncActivateProposal?(): void
    vfuncHide?(): void
    vfuncMoveCursor?(step: Gtk.ScrollStep, num: number): void
    vfuncMovePage?(step: Gtk.ScrollStep, num: number): void
    vfuncPopulateContext?(context: CompletionContext): void
    vfuncProposalActivated?(provider: CompletionProvider, proposal: CompletionProposal): boolean
    vfuncShow?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Completion */
    connect(sigName: "activate-proposal", callback: ((obj: Completion) => void)): number
    connect_after(sigName: "activate-proposal", callback: ((obj: Completion) => void)): number
    emit(sigName: "activate-proposal"): void
    on(sigName: "activate-proposal", callback: ((event: Completion) => void)): EventEmitter
    once(sigName: "activate-proposal", callback: ((event: Completion) => void)): EventEmitter
    off(sigName: "activate-proposal", callback: ((event: Completion) => void)): EventEmitter
    connect(sigName: "hide", callback: ((obj: Completion) => void)): number
    connect_after(sigName: "hide", callback: ((obj: Completion) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: ((event: Completion) => void)): EventEmitter
    once(sigName: "hide", callback: ((event: Completion) => void)): EventEmitter
    off(sigName: "hide", callback: ((event: Completion) => void)): EventEmitter
    connect(sigName: "move-cursor", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    connect_after(sigName: "move-cursor", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    emit(sigName: "move-cursor", step: Gtk.ScrollStep, num: number): void
    on(sigName: "move-cursor", callback: ((event: Completion, step: Gtk.ScrollStep, num: number) => void)): EventEmitter
    once(sigName: "move-cursor", callback: ((event: Completion, step: Gtk.ScrollStep, num: number) => void)): EventEmitter
    off(sigName: "move-cursor", callback: ((event: Completion, step: Gtk.ScrollStep, num: number) => void)): EventEmitter
    connect(sigName: "move-page", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    connect_after(sigName: "move-page", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void)): number
    emit(sigName: "move-page", step: Gtk.ScrollStep, num: number): void
    on(sigName: "move-page", callback: ((event: Completion, step: Gtk.ScrollStep, num: number) => void)): EventEmitter
    once(sigName: "move-page", callback: ((event: Completion, step: Gtk.ScrollStep, num: number) => void)): EventEmitter
    off(sigName: "move-page", callback: ((event: Completion, step: Gtk.ScrollStep, num: number) => void)): EventEmitter
    connect(sigName: "populate-context", callback: ((obj: Completion, context: CompletionContext) => void)): number
    connect_after(sigName: "populate-context", callback: ((obj: Completion, context: CompletionContext) => void)): number
    emit(sigName: "populate-context", context: CompletionContext): void
    on(sigName: "populate-context", callback: ((event: Completion, context: CompletionContext) => void)): EventEmitter
    once(sigName: "populate-context", callback: ((event: Completion, context: CompletionContext) => void)): EventEmitter
    off(sigName: "populate-context", callback: ((event: Completion, context: CompletionContext) => void)): EventEmitter
    connect(sigName: "show", callback: ((obj: Completion) => void)): number
    connect_after(sigName: "show", callback: ((obj: Completion) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: ((event: Completion) => void)): EventEmitter
    once(sigName: "show", callback: ((event: Completion) => void)): EventEmitter
    off(sigName: "show", callback: ((event: Completion) => void)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Completion, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Completion, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Completion, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::accelerators", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accelerators", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accelerators", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::accelerators", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::accelerators", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::auto-complete-delay", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-complete-delay", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-complete-delay", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::auto-complete-delay", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::auto-complete-delay", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::proposal-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposal-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proposal-page-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::proposal-page-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::proposal-page-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::provider-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-page-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::provider-page-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::provider-page-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::remember-info-visibility", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-info-visibility", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remember-info-visibility", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::remember-info-visibility", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::remember-info-visibility", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::select-on-show", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-on-show", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::select-on-show", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::select-on-show", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::select-on-show", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-headers", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-headers", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-headers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-headers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-headers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-icons", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-icons", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-icons", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-icons", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-icons", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Completion_ConstructProps)
    _init (config?: Completion_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CompletionContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    activation?:CompletionActivation
    completion?:Completion
    iter?:Gtk.TextIter
}
export class CompletionContext {
    /* Properties of GtkSource.CompletionContext */
    activation:CompletionActivation
    iter:Gtk.TextIter
    /* Fields of GtkSource.CompletionContext */
    parent:GObject.InitiallyUnowned
    priv:CompletionContextPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.CompletionContext */
    addProposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void
    getActivation(): CompletionActivation
    getIter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.CompletionContext */
    vfuncCancelled?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionContext */
    connect(sigName: "cancelled", callback: ((obj: CompletionContext) => void)): number
    connect_after(sigName: "cancelled", callback: ((obj: CompletionContext) => void)): number
    emit(sigName: "cancelled"): void
    on(sigName: "cancelled", callback: ((event: CompletionContext) => void)): EventEmitter
    once(sigName: "cancelled", callback: ((event: CompletionContext) => void)): EventEmitter
    off(sigName: "cancelled", callback: ((event: CompletionContext) => void)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: CompletionContext, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: CompletionContext, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: CompletionContext, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::activation", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activation", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::activation", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::activation", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::iter", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iter", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iter", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::iter", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::iter", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: CompletionContext_ConstructProps)
    _init (config?: CompletionContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CompletionInfo_ConstructProps extends Gtk.Window_ConstructProps {
}
export class CompletionInfo {
    /* Properties of Gtk.Window */
    accept_focus:boolean
    application:Gtk.Application
    attached_to:Gtk.Widget
    decorated:boolean
    default_height:number
    default_width:number
    deletable:boolean
    destroy_with_parent:boolean
    focus_on_map:boolean
    focus_visible:boolean
    gravity:Gdk.Gravity
    has_resize_grip:boolean
    readonly has_toplevel_focus:boolean
    hide_titlebar_when_maximized:boolean
    icon:GdkPixbuf.Pixbuf
    icon_name:string
    readonly is_active:boolean
    readonly is_maximized:boolean
    mnemonics_visible:boolean
    modal:boolean
    resizable:boolean
    readonly resize_grip_visible:boolean
    role:string
    screen:Gdk.Screen
    skip_pager_hint:boolean
    skip_taskbar_hint:boolean
    startup_id:string
    title:string
    transient_for:Gtk.Window
    type_hint:Gdk.WindowTypeHint
    urgency_hint:boolean
    window_position:Gtk.WindowPosition
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    focus_on_click:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Fields of GtkSource.CompletionInfo */
    priv:CompletionInfoPrivate
    /* Fields of Gtk.Window */
    bin:Gtk.Bin
    /* Fields of Gtk.Bin */
    container:Gtk.Container
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.CompletionInfo */
    getWidget(): Gtk.Widget
    moveToIter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void
    setWidget(widget?: Gtk.Widget | null): void
    /* Methods of Gtk.Window */
    activateDefault(): boolean
    activateFocus(): boolean
    activateKey(event: Gdk.EventKey): boolean
    addAccelGroup(accel_group: Gtk.AccelGroup): void
    addMnemonic(keyval: number, target: Gtk.Widget): void
    beginMoveDrag(button: number, root_x: number, root_y: number, timestamp: number): void
    beginResizeDrag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    close(): void
    deiconify(): void
    fullscreen(): void
    fullscreenOnMonitor(screen: Gdk.Screen, monitor: number): void
    getAcceptFocus(): boolean
    getApplication(): Gtk.Application | null
    getAttachedTo(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusOnMap(): boolean
    getFocusVisible(): boolean
    getGravity(): Gdk.Gravity
    getGroup(): Gtk.WindowGroup
    getHasResizeGrip(): boolean
    getHideTitlebarWhenMaximized(): boolean
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconList(): GdkPixbuf.Pixbuf[]
    getIconName(): string | null
    getMnemonicModifier(): Gdk.ModifierType
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getOpacity(): number
    getPosition(): [ /* root_x */ number | null, /* root_y */ number | null ]
    getResizable(): boolean
    getResizeGripArea(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    getRole(): string | null
    getScreen(): Gdk.Screen
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getSkipPagerHint(): boolean
    getSkipTaskbarHint(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    getTypeHint(): Gdk.WindowTypeHint
    getUrgencyHint(): boolean
    getWindowType(): Gtk.WindowType
    hasGroup(): boolean
    hasToplevelFocus(): boolean
    iconify(): void
    isActive(): boolean
    isMaximized(): boolean
    maximize(): void
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean
    move(x: number, y: number): void
    parseGeometry(geometry: string): boolean
    present(): void
    presentWithTime(timestamp: number): void
    propagateKeyEvent(event: Gdk.EventKey): boolean
    removeAccelGroup(accel_group: Gtk.AccelGroup): void
    removeMnemonic(keyval: number, target: Gtk.Widget): void
    reshowWithInitialSize(): void
    resize(width: number, height: number): void
    resizeGripIsVisible(): boolean
    resizeToGeometry(width: number, height: number): void
    setAcceptFocus(setting: boolean): void
    setApplication(application?: Gtk.Application | null): void
    setAttachedTo(attach_widget?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefault(default_widget?: Gtk.Widget | null): void
    setDefaultGeometry(width: number, height: number): void
    setDefaultSize(width: number, height: number): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusOnMap(setting: boolean): void
    setFocusVisible(setting: boolean): void
    setGeometryHints(geometry_widget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void
    setGravity(gravity: Gdk.Gravity): void
    setHasResizeGrip(value: boolean): void
    setHasUserRefCount(setting: boolean): void
    setHideTitlebarWhenMaximized(setting: boolean): void
    setIcon(icon?: GdkPixbuf.Pixbuf | null): void
    setIconFromFile(filename: string): boolean
    setIconList(list: GdkPixbuf.Pixbuf[]): void
    setIconName(name?: string | null): void
    setKeepAbove(setting: boolean): void
    setKeepBelow(setting: boolean): void
    setMnemonicModifier(modifier: Gdk.ModifierType): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setOpacity(opacity: number): void
    setPosition(position: Gtk.WindowPosition): void
    setResizable(resizable: boolean): void
    setRole(role: string): void
    setScreen(screen: Gdk.Screen): void
    setSkipPagerHint(setting: boolean): void
    setSkipTaskbarHint(setting: boolean): void
    setStartupId(startup_id: string): void
    setTitle(title: string): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    setTypeHint(hint: Gdk.WindowTypeHint): void
    setUrgencyHint(setting: boolean): void
    setWmclass(wmclass_name: string, wmclass_class: string): void
    stick(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    /* Methods of Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
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
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
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
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
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
    hasDefault(): boolean
    hasFocus(): boolean
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
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
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
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focus_on_click: boolean): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
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
    setNoShowAll(no_show_all: boolean): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
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
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
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
    /* Virtual methods of GtkSource.CompletionInfo */
    vfuncBeforeShow?(): void
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault?(): void
    vfuncActivateFocus?(): void
    vfuncEnableDebugging?(toggle: boolean): boolean
    vfuncKeysChanged?(): void
    vfuncSetFocus?(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionInfo */
    connect(sigName: "before-show", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "before-show", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "before-show"): void
    on(sigName: "before-show", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "before-show", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "before-show", callback: ((event: CompletionInfo) => void)): EventEmitter
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "activate-default", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "activate-default", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "activate-default", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "activate-focus", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "activate-focus", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "activate-focus", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "activate-focus", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "enable-debugging", callback: ((obj: CompletionInfo, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: ((obj: CompletionInfo, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: ((event: CompletionInfo, toggle: boolean) => boolean)): EventEmitter
    once(sigName: "enable-debugging", callback: ((event: CompletionInfo, toggle: boolean) => boolean)): EventEmitter
    off(sigName: "enable-debugging", callback: ((event: CompletionInfo, toggle: boolean) => boolean)): EventEmitter
    connect(sigName: "keys-changed", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "keys-changed", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "keys-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "keys-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "set-focus", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus", object: Gtk.Widget): void
    on(sigName: "set-focus", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "set-focus", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "set-focus", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "add", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "add", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "check-resize", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "check-resize", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "check-resize", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "remove", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "remove", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "remove", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "set-focus-child", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "set-focus-child", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "set-focus-child", callback: ((event: CompletionInfo, object: Gtk.Widget) => void)): EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "accel-closures-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "accel-closures-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "button-press-event", callback: ((obj: CompletionInfo, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: CompletionInfo, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: ((event: CompletionInfo, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-press-event", callback: ((event: CompletionInfo, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-press-event", callback: ((event: CompletionInfo, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "button-release-event", callback: ((obj: CompletionInfo, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: CompletionInfo, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: ((event: CompletionInfo, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-release-event", callback: ((event: CompletionInfo, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-release-event", callback: ((event: CompletionInfo, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "can-activate-accel", callback: ((obj: CompletionInfo, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: CompletionInfo, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    on(sigName: "can-activate-accel", callback: ((event: CompletionInfo, signal_id: number) => boolean)): EventEmitter
    once(sigName: "can-activate-accel", callback: ((event: CompletionInfo, signal_id: number) => boolean)): EventEmitter
    off(sigName: "can-activate-accel", callback: ((event: CompletionInfo, signal_id: number) => boolean)): EventEmitter
    connect(sigName: "child-notify", callback: ((obj: CompletionInfo, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: CompletionInfo, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: ((event: CompletionInfo, child_property: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "child-notify", callback: ((event: CompletionInfo, child_property: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "child-notify", callback: ((event: CompletionInfo, child_property: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "composited-changed", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "composited-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "composited-changed", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "configure-event", callback: ((obj: CompletionInfo, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: CompletionInfo, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: ((event: CompletionInfo, event: Gdk.EventConfigure) => boolean)): EventEmitter
    once(sigName: "configure-event", callback: ((event: CompletionInfo, event: Gdk.EventConfigure) => boolean)): EventEmitter
    off(sigName: "configure-event", callback: ((event: CompletionInfo, event: Gdk.EventConfigure) => boolean)): EventEmitter
    connect(sigName: "damage-event", callback: ((obj: CompletionInfo, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: CompletionInfo, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: ((event: CompletionInfo, event: Gdk.EventExpose) => boolean)): EventEmitter
    once(sigName: "damage-event", callback: ((event: CompletionInfo, event: Gdk.EventExpose) => boolean)): EventEmitter
    off(sigName: "damage-event", callback: ((event: CompletionInfo, event: Gdk.EventExpose) => boolean)): EventEmitter
    connect(sigName: "delete-event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "delete-event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "delete-event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "destroy", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "destroy", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "destroy", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "destroy-event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "destroy-event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "destroy-event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "direction-changed", callback: ((obj: CompletionInfo, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: CompletionInfo, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: ((event: CompletionInfo, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    once(sigName: "direction-changed", callback: ((event: CompletionInfo, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    off(sigName: "direction-changed", callback: ((event: CompletionInfo, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    connect(sigName: "drag-begin", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-begin", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-begin", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-delete", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-data-delete", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-data-delete", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-get", callback: ((obj: CompletionInfo, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: CompletionInfo, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: ((event: CompletionInfo, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-get", callback: ((event: CompletionInfo, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-get", callback: ((event: CompletionInfo, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-data-received", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-received", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-received", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-drop", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-drop", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-drop", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "drag-end", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-end", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-end", callback: ((event: CompletionInfo, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-failed", callback: ((obj: CompletionInfo, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: CompletionInfo, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: ((event: CompletionInfo, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    once(sigName: "drag-failed", callback: ((event: CompletionInfo, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    off(sigName: "drag-failed", callback: ((event: CompletionInfo, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    connect(sigName: "drag-leave", callback: ((obj: CompletionInfo, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: CompletionInfo, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: ((event: CompletionInfo, context: Gdk.DragContext, time: number) => void)): EventEmitter
    once(sigName: "drag-leave", callback: ((event: CompletionInfo, context: Gdk.DragContext, time: number) => void)): EventEmitter
    off(sigName: "drag-leave", callback: ((event: CompletionInfo, context: Gdk.DragContext, time: number) => void)): EventEmitter
    connect(sigName: "drag-motion", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-motion", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-motion", callback: ((event: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "draw", callback: ((obj: CompletionInfo, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: CompletionInfo, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: ((event: CompletionInfo, cr: cairo.Context) => boolean)): EventEmitter
    once(sigName: "draw", callback: ((event: CompletionInfo, cr: cairo.Context) => boolean)): EventEmitter
    off(sigName: "draw", callback: ((event: CompletionInfo, cr: cairo.Context) => boolean)): EventEmitter
    connect(sigName: "enter-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "enter-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "enter-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "event", callback: ((event: CompletionInfo, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "event-after", callback: ((obj: CompletionInfo, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: CompletionInfo, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: ((event: CompletionInfo, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "event-after", callback: ((event: CompletionInfo, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "event-after", callback: ((event: CompletionInfo, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "focus", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "focus", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "focus", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "focus-in-event", callback: ((obj: CompletionInfo, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: CompletionInfo, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: ((event: CompletionInfo, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-in-event", callback: ((event: CompletionInfo, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-in-event", callback: ((event: CompletionInfo, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "focus-out-event", callback: ((obj: CompletionInfo, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: CompletionInfo, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: ((event: CompletionInfo, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-out-event", callback: ((event: CompletionInfo, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-out-event", callback: ((event: CompletionInfo, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "grab-broken-event", callback: ((obj: CompletionInfo, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: CompletionInfo, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: ((event: CompletionInfo, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    once(sigName: "grab-broken-event", callback: ((event: CompletionInfo, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    off(sigName: "grab-broken-event", callback: ((event: CompletionInfo, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    connect(sigName: "grab-focus", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "grab-focus", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "grab-focus", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "grab-notify", callback: ((obj: CompletionInfo, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: CompletionInfo, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    on(sigName: "grab-notify", callback: ((event: CompletionInfo, was_grabbed: boolean) => void)): EventEmitter
    once(sigName: "grab-notify", callback: ((event: CompletionInfo, was_grabbed: boolean) => void)): EventEmitter
    off(sigName: "grab-notify", callback: ((event: CompletionInfo, was_grabbed: boolean) => void)): EventEmitter
    connect(sigName: "hide", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "hide", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "hide", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "hide", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "hierarchy-changed", callback: ((obj: CompletionInfo, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: CompletionInfo, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: ((event: CompletionInfo, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "hierarchy-changed", callback: ((event: CompletionInfo, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "hierarchy-changed", callback: ((event: CompletionInfo, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "key-press-event", callback: ((obj: CompletionInfo, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: CompletionInfo, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: ((event: CompletionInfo, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-press-event", callback: ((event: CompletionInfo, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-press-event", callback: ((event: CompletionInfo, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "key-release-event", callback: ((obj: CompletionInfo, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: CompletionInfo, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: ((event: CompletionInfo, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-release-event", callback: ((event: CompletionInfo, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-release-event", callback: ((event: CompletionInfo, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "keynav-failed", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "keynav-failed", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "keynav-failed", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "leave-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "leave-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "leave-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "map", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "map", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "map", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "map", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "map-event", callback: ((obj: CompletionInfo, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: CompletionInfo, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: ((event: CompletionInfo, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "map-event", callback: ((event: CompletionInfo, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "map-event", callback: ((event: CompletionInfo, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "mnemonic-activate", callback: ((obj: CompletionInfo, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: CompletionInfo, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    on(sigName: "mnemonic-activate", callback: ((event: CompletionInfo, group_cycling: boolean) => boolean)): EventEmitter
    once(sigName: "mnemonic-activate", callback: ((event: CompletionInfo, group_cycling: boolean) => boolean)): EventEmitter
    off(sigName: "mnemonic-activate", callback: ((event: CompletionInfo, group_cycling: boolean) => boolean)): EventEmitter
    connect(sigName: "motion-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventMotion) => boolean)): EventEmitter
    once(sigName: "motion-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventMotion) => boolean)): EventEmitter
    off(sigName: "motion-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventMotion) => boolean)): EventEmitter
    connect(sigName: "move-focus", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => void)): EventEmitter
    once(sigName: "move-focus", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => void)): EventEmitter
    off(sigName: "move-focus", callback: ((event: CompletionInfo, direction: Gtk.DirectionType) => void)): EventEmitter
    connect(sigName: "parent-set", callback: ((obj: CompletionInfo, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: CompletionInfo, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: ((event: CompletionInfo, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "parent-set", callback: ((event: CompletionInfo, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "parent-set", callback: ((event: CompletionInfo, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "popup-menu", callback: ((obj: CompletionInfo) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: CompletionInfo) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: ((event: CompletionInfo) => boolean)): EventEmitter
    once(sigName: "popup-menu", callback: ((event: CompletionInfo) => boolean)): EventEmitter
    off(sigName: "popup-menu", callback: ((event: CompletionInfo) => boolean)): EventEmitter
    connect(sigName: "property-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventProperty) => boolean)): EventEmitter
    once(sigName: "property-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventProperty) => boolean)): EventEmitter
    off(sigName: "property-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventProperty) => boolean)): EventEmitter
    connect(sigName: "proximity-in-event", callback: ((obj: CompletionInfo, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: CompletionInfo, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: ((event: CompletionInfo, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-in-event", callback: ((event: CompletionInfo, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-in-event", callback: ((event: CompletionInfo, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "proximity-out-event", callback: ((obj: CompletionInfo, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: CompletionInfo, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: ((event: CompletionInfo, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-out-event", callback: ((event: CompletionInfo, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-out-event", callback: ((event: CompletionInfo, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: CompletionInfo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: CompletionInfo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: CompletionInfo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: CompletionInfo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: CompletionInfo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "realize", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "realize", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "realize", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "realize", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "screen-changed", callback: ((obj: CompletionInfo, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: CompletionInfo, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: ((event: CompletionInfo, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    once(sigName: "screen-changed", callback: ((event: CompletionInfo, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    off(sigName: "screen-changed", callback: ((event: CompletionInfo, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    connect(sigName: "scroll-event", callback: ((obj: CompletionInfo, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: CompletionInfo, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: ((event: CompletionInfo, event: Gdk.EventScroll) => boolean)): EventEmitter
    once(sigName: "scroll-event", callback: ((event: CompletionInfo, event: Gdk.EventScroll) => boolean)): EventEmitter
    off(sigName: "scroll-event", callback: ((event: CompletionInfo, event: Gdk.EventScroll) => boolean)): EventEmitter
    connect(sigName: "selection-clear-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-clear-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-clear-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-get", callback: ((obj: CompletionInfo, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: CompletionInfo, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: ((event: CompletionInfo, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "selection-get", callback: ((event: CompletionInfo, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "selection-get", callback: ((event: CompletionInfo, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "selection-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-received", callback: ((obj: CompletionInfo, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: CompletionInfo, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: ((event: CompletionInfo, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    once(sigName: "selection-received", callback: ((event: CompletionInfo, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    off(sigName: "selection-received", callback: ((event: CompletionInfo, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    connect(sigName: "selection-request-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-request-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-request-event", callback: ((event: CompletionInfo, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "show", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "show", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "show", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "show", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "show-help", callback: ((obj: CompletionInfo, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: CompletionInfo, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: ((event: CompletionInfo, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    once(sigName: "show-help", callback: ((event: CompletionInfo, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    off(sigName: "show-help", callback: ((event: CompletionInfo, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    connect(sigName: "size-allocate", callback: ((obj: CompletionInfo, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: CompletionInfo, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: ((event: CompletionInfo, allocation: Gtk.Allocation) => void)): EventEmitter
    once(sigName: "size-allocate", callback: ((event: CompletionInfo, allocation: Gtk.Allocation) => void)): EventEmitter
    off(sigName: "size-allocate", callback: ((event: CompletionInfo, allocation: Gtk.Allocation) => void)): EventEmitter
    connect(sigName: "state-changed", callback: ((obj: CompletionInfo, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: CompletionInfo, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: ((event: CompletionInfo, state: Gtk.StateType) => void)): EventEmitter
    once(sigName: "state-changed", callback: ((event: CompletionInfo, state: Gtk.StateType) => void)): EventEmitter
    off(sigName: "state-changed", callback: ((event: CompletionInfo, state: Gtk.StateType) => void)): EventEmitter
    connect(sigName: "state-flags-changed", callback: ((obj: CompletionInfo, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: CompletionInfo, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: ((event: CompletionInfo, flags: Gtk.StateFlags) => void)): EventEmitter
    once(sigName: "state-flags-changed", callback: ((event: CompletionInfo, flags: Gtk.StateFlags) => void)): EventEmitter
    off(sigName: "state-flags-changed", callback: ((event: CompletionInfo, flags: Gtk.StateFlags) => void)): EventEmitter
    connect(sigName: "style-set", callback: ((obj: CompletionInfo, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: CompletionInfo, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    on(sigName: "style-set", callback: ((event: CompletionInfo, previous_style?: Gtk.Style | null) => void)): EventEmitter
    once(sigName: "style-set", callback: ((event: CompletionInfo, previous_style?: Gtk.Style | null) => void)): EventEmitter
    off(sigName: "style-set", callback: ((event: CompletionInfo, previous_style?: Gtk.Style | null) => void)): EventEmitter
    connect(sigName: "style-updated", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "style-updated", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "style-updated", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "touch-event", callback: ((obj: CompletionInfo, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: CompletionInfo, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: ((event: CompletionInfo, object: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "touch-event", callback: ((event: CompletionInfo, object: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "touch-event", callback: ((event: CompletionInfo, object: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "unmap", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "unmap", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "unmap", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "unmap-event", callback: ((obj: CompletionInfo, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: CompletionInfo, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: ((event: CompletionInfo, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "unmap-event", callback: ((event: CompletionInfo, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "unmap-event", callback: ((event: CompletionInfo, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "unrealize", callback: ((obj: CompletionInfo) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: CompletionInfo) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: ((event: CompletionInfo) => void)): EventEmitter
    once(sigName: "unrealize", callback: ((event: CompletionInfo) => void)): EventEmitter
    off(sigName: "unrealize", callback: ((event: CompletionInfo) => void)): EventEmitter
    connect(sigName: "visibility-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventVisibility) => boolean)): EventEmitter
    once(sigName: "visibility-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventVisibility) => boolean)): EventEmitter
    off(sigName: "visibility-notify-event", callback: ((event: CompletionInfo, event: Gdk.EventVisibility) => boolean)): EventEmitter
    connect(sigName: "window-state-event", callback: ((obj: CompletionInfo, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: CompletionInfo, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: ((event: CompletionInfo, event: Gdk.EventWindowState) => boolean)): EventEmitter
    once(sigName: "window-state-event", callback: ((event: CompletionInfo, event: Gdk.EventWindowState) => boolean)): EventEmitter
    off(sigName: "window-state-event", callback: ((event: CompletionInfo, event: Gdk.EventWindowState) => boolean)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: CompletionInfo, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: CompletionInfo, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: CompletionInfo, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::accept-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::accept-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::accept-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::application", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::application", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::application", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::attached-to", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attached-to", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::attached-to", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::attached-to", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::decorated", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::decorated", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::decorated", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::default-height", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::default-height", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::default-height", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::default-width", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::default-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::default-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::deletable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::deletable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::deletable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-on-map", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-map", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-on-map", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-on-map", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::gravity", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gravity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::gravity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::gravity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-resize-grip", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-resize-grip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-resize-grip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-resize-grip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-toplevel-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-toplevel-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-toplevel-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-toplevel-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hide-titlebar-when-maximized", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hide-titlebar-when-maximized", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon-name", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-active", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-active", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-active", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-maximized", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-maximized", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-maximized", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-maximized", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::modal", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::modal", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::modal", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resizable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resizable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resizable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resize-grip-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-grip-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resize-grip-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resize-grip-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::role", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::role", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::role", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::screen", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screen", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::screen", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::screen", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::skip-pager-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-pager-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::skip-pager-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::skip-pager-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::skip-taskbar-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-taskbar-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::skip-taskbar-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::skip-taskbar-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::startup-id", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::startup-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::startup-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::title", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::title", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::title", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::transient-for", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::transient-for", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::transient-for", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::type-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::type-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::type-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::urgency-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgency-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::urgency-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::urgency-hint", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window-position", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::border-width", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::child", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::composite-child", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::events", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::expand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::halign", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::height-request", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-end", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-left", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-right", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-start", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-top", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::opacity", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::parent", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::receives-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::sensitive", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::valign", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::width-request", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: CompletionInfo_ConstructProps)
    _init (config?: CompletionInfo_ConstructProps): void
    static new(): CompletionInfo
    static $gtype: GObject.Type
}
export interface CompletionItem_ConstructProps extends GObject.Object_ConstructProps {
    gicon?:Gio.Icon
    icon?:GdkPixbuf.Pixbuf
    icon_name?:string
    info?:string
    label?:string
    markup?:string
    text?:string
}
export class CompletionItem {
    /* Properties of GtkSource.CompletionItem */
    gicon:Gio.Icon
    icon:GdkPixbuf.Pixbuf
    icon_name:string
    info:string
    label:string
    markup:string
    text:string
    /* Fields of GtkSource.CompletionItem */
    parent:GObject.Object
    priv:CompletionItemPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.CompletionItem */
    setGicon(gicon?: Gio.Icon | null): void
    setIcon(icon?: GdkPixbuf.Pixbuf | null): void
    setIconName(icon_name?: string | null): void
    setInfo(info?: string | null): void
    setLabel(label?: string | null): void
    setMarkup(markup?: string | null): void
    setText(text?: string | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: CompletionItem, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: CompletionItem, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: CompletionItem, pspec: GObject.ParamSpec) => void)): EventEmitter
    /* Signals of GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: ((obj: CompletionItem) => void)): number
    connect_after(sigName: "changed", callback: ((obj: CompletionItem) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: ((event: CompletionItem) => void)): EventEmitter
    once(sigName: "changed", callback: ((event: CompletionItem) => void)): EventEmitter
    off(sigName: "changed", callback: ((event: CompletionItem) => void)): EventEmitter
    connect(sigName: "notify::gicon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon-name", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::info", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::info", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::info", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::info", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::label", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::label", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::label", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::markup", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::text", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: CompletionItem_ConstructProps)
    _init (config?: CompletionItem_ConstructProps): void
    static new(label: string, text: string, icon?: GdkPixbuf.Pixbuf | null, info?: string | null): CompletionItem
    static newFromStock(label: string | null, text: string, stock: string, info?: string | null): CompletionItem
    static newWithMarkup(markup: string, text: string, icon?: GdkPixbuf.Pixbuf | null, info?: string | null): CompletionItem
    static new2(): CompletionItem
    static $gtype: GObject.Type
}
export interface CompletionWords_ConstructProps extends GObject.Object_ConstructProps {
    activation?:CompletionActivation
    icon?:GdkPixbuf.Pixbuf
    interactive_delay?:number
    minimum_word_size?:number
    name?:string
    priority?:number
    proposals_batch_size?:number
    scan_batch_size?:number
}
export class CompletionWords {
    /* Properties of GtkSource.CompletionWords */
    activation:CompletionActivation
    icon:GdkPixbuf.Pixbuf
    interactive_delay:number
    minimum_word_size:number
    name:string
    priority:number
    proposals_batch_size:number
    scan_batch_size:number
    /* Fields of GtkSource.CompletionWords */
    parent:GObject.Object
    priv:CompletionWordsPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.CompletionWords */
    register(buffer: Gtk.TextBuffer): void
    unregister(buffer: Gtk.TextBuffer): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: CompletionWords, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: CompletionWords, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: CompletionWords, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::activation", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activation", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::activation", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::activation", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::interactive-delay", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive-delay", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interactive-delay", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::interactive-delay", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::interactive-delay", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::minimum-word-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-word-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-word-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::minimum-word-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::minimum-word-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::priority", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::priority", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::priority", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::proposals-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposals-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proposals-batch-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::proposals-batch-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::proposals-batch-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scan-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-batch-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scan-batch-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scan-batch-size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: CompletionWords_ConstructProps)
    _init (config?: CompletionWords_ConstructProps): void
    static new(name?: string | null, icon?: GdkPixbuf.Pixbuf | null): CompletionWords
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    location?:Gio.File
}
export class File {
    /* Properties of GtkSource.File */
    readonly compression_type:CompressionType
    readonly encoding:Encoding
    location:Gio.File
    readonly newline_type:NewlineType
    readonly read_only:boolean
    /* Fields of GtkSource.File */
    parent:GObject.Object
    priv:FilePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: File, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: File, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: File, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::compression-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::compression-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::compression-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::encoding", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::encoding", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::encoding", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::location", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::location", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::location", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::newline-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::newline-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::newline-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::read-only", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((obj: File, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::read-only", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::read-only", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: File_ConstructProps)
    _init (config?: File_ConstructProps): void
    static new(): File
    static $gtype: GObject.Type
}
export interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    file?:File
    input_stream?:Gio.InputStream
    location?:Gio.File
}
export class FileLoader {
    /* Properties of GtkSource.FileLoader */
    /* Fields of GtkSource.FileLoader */
    parent:GObject.Object
    priv:FileLoaderPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.FileLoader */
    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getInputStream(): Gio.InputStream | null
    getLocation(): Gio.File | null
    getNewlineType(): NewlineType
    loadAsync(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): boolean
    setCandidateEncodings(candidate_encodings: Encoding[]): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: FileLoader, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: FileLoader, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: FileLoader, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: FileLoader_ConstructProps)
    _init (config?: FileLoader_ConstructProps): void
    static new(buffer: Buffer, file: File): FileLoader
    static newFromStream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
    static $gtype: GObject.Type
}
export interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    compression_type?:CompressionType
    encoding?:Encoding
    file?:File
    flags?:FileSaverFlags
    location?:Gio.File
    newline_type?:NewlineType
}
export class FileSaver {
    /* Properties of GtkSource.FileSaver */
    compression_type:CompressionType
    encoding:Encoding
    flags:FileSaverFlags
    newline_type:NewlineType
    /* Fields of GtkSource.FileSaver */
    object:GObject.Object
    priv:FileSaverPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.FileSaver */
    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getFlags(): FileSaverFlags
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    saveAsync(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    setCompressionType(compression_type: CompressionType): void
    setEncoding(encoding?: Encoding | null): void
    setFlags(flags: FileSaverFlags): void
    setNewlineType(newline_type: NewlineType): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: FileSaver, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: FileSaver, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: FileSaver, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::compression-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::compression-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::compression-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::encoding", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::encoding", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::encoding", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::flags", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::flags", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::flags", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::newline-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::newline-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::newline-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: FileSaver_ConstructProps)
    _init (config?: FileSaver_ConstructProps): void
    static new(buffer: Buffer, file: File): FileSaver
    static newWithTarget(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
    static $gtype: GObject.Type
}
export interface Gutter_ConstructProps extends GObject.Object_ConstructProps {
    view?:View
    window_type?:Gtk.TextWindowType
    xpad?:number
    ypad?:number
}
export class Gutter {
    /* Properties of GtkSource.Gutter */
    xpad:number
    ypad:number
    /* Fields of GtkSource.Gutter */
    parent:GObject.Object
    priv:GutterPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Gutter, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Gutter, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Gutter, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xpad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::ypad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Gutter_ConstructProps)
    _init (config?: Gutter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterRenderer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    alignment_mode?:GutterRendererAlignmentMode
    background_rgba?:Gdk.RGBA
    background_set?:boolean
    size?:number
    visible?:boolean
    xalign?:number
    xpad?:number
    yalign?:number
    ypad?:number
}
export class GutterRenderer {
    /* Properties of GtkSource.GutterRenderer */
    alignment_mode:GutterRendererAlignmentMode
    background_rgba:Gdk.RGBA
    background_set:boolean
    size:number
    readonly view:Gtk.TextView
    visible:boolean
    readonly window_type:Gtk.TextWindowType
    xalign:number
    xpad:number
    yalign:number
    ypad:number
    /* Fields of GtkSource.GutterRenderer */
    parent:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfuncActivate?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfuncBegin?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncChangeBuffer?(old_buffer?: Gtk.TextBuffer | null): void
    vfuncChangeView?(old_view?: Gtk.TextView | null): void
    vfuncDraw?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncEnd?(): void
    vfuncQueryActivatable?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfuncQueryData?(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncQueryTooltip?(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDraw?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    connect_after(sigName: "activate", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "activate", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "activate", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "activate", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "query-activatable", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "query-activatable", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "query-activatable", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "query-activatable", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "query-activatable", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "query-data", callback: ((obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    connect_after(sigName: "query-data", callback: ((obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    on(sigName: "query-data", callback: ((event: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    once(sigName: "query-data", callback: ((event: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    off(sigName: "query-data", callback: ((event: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "queue-draw", callback: ((obj: GutterRenderer) => void)): number
    connect_after(sigName: "queue-draw", callback: ((obj: GutterRenderer) => void)): number
    emit(sigName: "queue-draw"): void
    on(sigName: "queue-draw", callback: ((event: GutterRenderer) => void)): EventEmitter
    once(sigName: "queue-draw", callback: ((event: GutterRenderer) => void)): EventEmitter
    off(sigName: "queue-draw", callback: ((event: GutterRenderer) => void)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: GutterRenderer, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: GutterRenderer, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: GutterRenderer, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::alignment-mode", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-rgba", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-set", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::size", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::view", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window-type", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xalign", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xpad", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::yalign", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::ypad", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: GutterRenderer_ConstructProps)
    _init (config?: GutterRenderer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterRendererPixbuf_ConstructProps extends GutterRenderer_ConstructProps {
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export class GutterRendererPixbuf {
    /* Properties of GtkSource.GutterRendererPixbuf */
    gicon:Gio.Icon
    icon_name:string
    pixbuf:GdkPixbuf.Pixbuf
    stock_id:string
    /* Properties of GtkSource.GutterRenderer */
    alignment_mode:GutterRendererAlignmentMode
    background_rgba:Gdk.RGBA
    background_set:boolean
    size:number
    readonly view:Gtk.TextView
    visible:boolean
    readonly window_type:Gtk.TextWindowType
    xalign:number
    xpad:number
    yalign:number
    ypad:number
    /* Fields of GtkSource.GutterRendererPixbuf */
    /* Fields of GtkSource.GutterRenderer */
    parent:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.GutterRendererPixbuf */
    getGicon(): Gio.Icon
    getIconName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    setGicon(icon?: Gio.Icon | null): void
    setIconName(icon_name?: string | null): void
    setPixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    setStockId(stock_id?: string | null): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfuncActivate?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfuncBegin?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncChangeBuffer?(old_buffer?: Gtk.TextBuffer | null): void
    vfuncChangeView?(old_view?: Gtk.TextView | null): void
    vfuncDraw?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncEnd?(): void
    vfuncQueryActivatable?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfuncQueryData?(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncQueryTooltip?(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDraw?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    connect_after(sigName: "activate", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "activate", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "activate", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "activate", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "query-activatable", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "query-activatable", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "query-activatable", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "query-activatable", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "query-activatable", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "query-data", callback: ((obj: GutterRendererPixbuf, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    connect_after(sigName: "query-data", callback: ((obj: GutterRendererPixbuf, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    on(sigName: "query-data", callback: ((event: GutterRendererPixbuf, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    once(sigName: "query-data", callback: ((event: GutterRendererPixbuf, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    off(sigName: "query-data", callback: ((event: GutterRendererPixbuf, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "queue-draw", callback: ((obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "queue-draw", callback: ((obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "queue-draw"): void
    on(sigName: "queue-draw", callback: ((event: GutterRendererPixbuf) => void)): EventEmitter
    once(sigName: "queue-draw", callback: ((event: GutterRendererPixbuf) => void)): EventEmitter
    off(sigName: "queue-draw", callback: ((event: GutterRendererPixbuf) => void)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::gicon", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon-name", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixbuf", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixbuf", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixbuf", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::stock-id", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stock-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::stock-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::stock-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::alignment-mode", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-rgba", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-set", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::size", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::view", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window-type", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xalign", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xpad", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::yalign", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::ypad", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: GutterRendererPixbuf_ConstructProps)
    _init (config?: GutterRendererPixbuf_ConstructProps): void
    static new(): GutterRendererPixbuf
    static $gtype: GObject.Type
}
export interface GutterRendererText_ConstructProps extends GutterRenderer_ConstructProps {
    markup?:string
    text?:string
}
export class GutterRendererText {
    /* Properties of GtkSource.GutterRendererText */
    markup:string
    text:string
    /* Properties of GtkSource.GutterRenderer */
    alignment_mode:GutterRendererAlignmentMode
    background_rgba:Gdk.RGBA
    background_set:boolean
    size:number
    readonly view:Gtk.TextView
    visible:boolean
    readonly window_type:Gtk.TextWindowType
    xalign:number
    xpad:number
    yalign:number
    ypad:number
    /* Fields of GtkSource.GutterRendererText */
    /* Fields of GtkSource.GutterRenderer */
    parent:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.GutterRendererText */
    measure(text: string): [ /* width */ number | null, /* height */ number | null ]
    measureMarkup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    setMarkup(markup: string, length: number): void
    setText(text: string, length: number): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfuncActivate?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfuncBegin?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfuncChangeBuffer?(old_buffer?: Gtk.TextBuffer | null): void
    vfuncChangeView?(old_view?: Gtk.TextView | null): void
    vfuncDraw?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncEnd?(): void
    vfuncQueryActivatable?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfuncQueryData?(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfuncQueryTooltip?(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDraw?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    connect_after(sigName: "activate", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "activate", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "activate", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "activate", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "query-activatable", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "query-activatable", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    on(sigName: "query-activatable", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "query-activatable", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "query-activatable", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "query-data", callback: ((obj: GutterRendererText, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    connect_after(sigName: "query-data", callback: ((obj: GutterRendererText, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    on(sigName: "query-data", callback: ((event: GutterRendererText, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    once(sigName: "query-data", callback: ((event: GutterRendererText, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    off(sigName: "query-data", callback: ((event: GutterRendererText, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "queue-draw", callback: ((obj: GutterRendererText) => void)): number
    connect_after(sigName: "queue-draw", callback: ((obj: GutterRendererText) => void)): number
    emit(sigName: "queue-draw"): void
    on(sigName: "queue-draw", callback: ((event: GutterRendererText) => void)): EventEmitter
    once(sigName: "queue-draw", callback: ((event: GutterRendererText) => void)): EventEmitter
    off(sigName: "queue-draw", callback: ((event: GutterRendererText) => void)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: GutterRendererText, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: GutterRendererText, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: GutterRendererText, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::markup", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::text", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::alignment-mode", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::alignment-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-rgba", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-set", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::size", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::view", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window-type", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window-type", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xalign", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xpad", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xpad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::yalign", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::ypad", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::ypad", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: GutterRendererText_ConstructProps)
    _init (config?: GutterRendererText_ConstructProps): void
    static new(): GutterRendererText
    static $gtype: GObject.Type
}
export interface Language_ConstructProps extends GObject.Object_ConstructProps {
}
export class Language {
    /* Properties of GtkSource.Language */
    readonly hidden:boolean
    readonly id:string
    readonly name:string
    readonly section:string
    /* Fields of GtkSource.Language */
    parent_instance:GObject.Object
    priv:LanguagePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Language */
    getGlobs(): string[] | null
    getHidden(): boolean
    getId(): string
    getMetadata(name: string): string | null
    getMimeTypes(): string[] | null
    getName(): string
    getSection(): string
    getStyleFallback(style_id: string): string | null
    getStyleIds(): string[] | null
    getStyleName(style_id: string): string | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Language, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Language, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Language, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hidden", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hidden", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hidden", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hidden", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::id", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::section", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::section", callback: ((obj: Language, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::section", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::section", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::section", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Language_ConstructProps)
    _init (config?: Language_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LanguageManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?:string[]
}
export class LanguageManager {
    /* Properties of GtkSource.LanguageManager */
    readonly language_ids:string[]
    search_path:string[]
    /* Fields of GtkSource.LanguageManager */
    parent_instance:GObject.Object
    priv:LanguageManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.LanguageManager */
    getLanguage(id: string): Language | null
    getLanguageIds(): string[] | null
    getSearchPath(): string[]
    guessLanguage(filename?: string | null, content_type?: string | null): Language | null
    setSearchPath(dirs?: string[] | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: LanguageManager, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: LanguageManager, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: LanguageManager, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::language-ids", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-ids", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-ids", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::language-ids", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::language-ids", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::search-path", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::search-path", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::search-path", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: LanguageManager_ConstructProps)
    _init (config?: LanguageManager_ConstructProps): void
    static new(): LanguageManager
    static getDefault(): LanguageManager
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends View_ConstructProps {
    font_desc?:Pango.FontDescription
    view?:View
}
export class Map {
    /* Properties of GtkSource.Map */
    font_desc:Pango.FontDescription
    view:View
    /* Properties of GtkSource.View */
    auto_indent:boolean
    background_pattern:BackgroundPatternType
    readonly completion:Completion
    draw_spaces:DrawSpacesFlags
    highlight_current_line:boolean
    indent_on_tab:boolean
    indent_width:number
    insert_spaces_instead_of_tabs:boolean
    right_margin_position:number
    show_line_marks:boolean
    show_line_numbers:boolean
    show_right_margin:boolean
    smart_backspace:boolean
    smart_home_end:SmartHomeEndType
    readonly space_drawer:SpaceDrawer
    tab_width:number
    /* Properties of Gtk.TextView */
    accepts_tab:boolean
    bottom_margin:number
    buffer:Gtk.TextBuffer
    cursor_visible:boolean
    editable:boolean
    im_module:string
    indent:number
    input_hints:Gtk.InputHints
    input_purpose:Gtk.InputPurpose
    justification:Gtk.Justification
    left_margin:number
    monospace:boolean
    overwrite:boolean
    pixels_above_lines:number
    pixels_below_lines:number
    pixels_inside_wrap:number
    populate_all:boolean
    right_margin:number
    tabs:Pango.TabArray
    top_margin:number
    wrap_mode:Gtk.WrapMode
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    focus_on_click:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Properties of Gtk.Scrollable */
    hadjustment:Gtk.Adjustment
    hscroll_policy:Gtk.ScrollablePolicy
    vadjustment:Gtk.Adjustment
    vscroll_policy:Gtk.ScrollablePolicy
    /* Fields of GtkSource.Map */
    parent_instance:View
    /* Fields of GtkSource.View */
    priv:ViewPrivate
    /* Fields of Gtk.TextView */
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.Map */
    getView(): View | null
    setView(view: View): void
    /* Methods of GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getDrawSpaces(): DrawSpacesFlags
    getGutter(window_type: Gtk.TextWindowType): Gutter
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
    setBackgroundPattern(background_pattern: BackgroundPatternType): void
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
    setSmartBackspace(smart_backspace: boolean): void
    setSmartHomeEnd(smart_home_end: SmartHomeEndType): void
    setTabWidth(width: number): void
    unindentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Methods of Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addChildInWindow(child: Gtk.Widget, which_window: Gtk.TextWindowType, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBorderWindowSize(type: Gtk.TextWindowType): number
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getDefaultAttributes(): Gtk.TextAttributes
    getEditable(): boolean
    getHadjustment(): Gtk.Adjustment
    getIndent(): number
    getInputHints(): Gtk.InputHints
    getInputPurpose(): Gtk.InputPurpose
    getIterAtLocation(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtPosition(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    getIterLocation(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    getJustification(): Gtk.Justification
    getLeftMargin(): number
    getLineAtY(y: number): [ /* target_iter */ Gtk.TextIter, /* line_top */ number ]
    getLineYrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVadjustment(): Gtk.Adjustment
    getVisibleRect(): /* visible_rect */ Gdk.Rectangle
    getWindowType(window: Gdk.Window): Gtk.TextWindowType
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.EventKey): boolean
    moveChild(child: Gtk.Widget, xpos: number, ypos: number): void
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    setAcceptsTab(accepts_tab: boolean): void
    setBorderWindowSize(type: Gtk.TextWindowType, size: number): void
    setBottomMargin(bottom_margin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
    setIndent(indent: number): void
    setInputHints(hints: Gtk.InputHints): void
    setInputPurpose(purpose: Gtk.InputPurpose): void
    setJustification(justification: Gtk.Justification): void
    setLeftMargin(left_margin: number): void
    setMonospace(monospace: boolean): void
    setOverwrite(overwrite: boolean): void
    setPixelsAboveLines(pixels_above_lines: number): void
    setPixelsBelowLines(pixels_below_lines: number): void
    setPixelsInsideWrap(pixels_inside_wrap: number): void
    setRightMargin(right_margin: number): void
    setTabs(tabs: Pango.TabArray): void
    setTopMargin(top_margin: number): void
    setWrapMode(wrap_mode: Gtk.WrapMode): void
    startsDisplayLine(iter: Gtk.TextIter): boolean
    windowToBufferCoords(win: Gtk.TextWindowType, window_x: number, window_y: number): [ /* buffer_x */ number | null, /* buffer_y */ number | null ]
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
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
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
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
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
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
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
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
    hasDefault(): boolean
    hasFocus(): boolean
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
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(group_cycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
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
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focus_on_click: boolean): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
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
    setNoShowAll(no_show_all: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
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
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
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
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of GtkSource.View */
    vfuncLineMarkActivated?(iter: Gtk.TextIter, event: Gdk.Event): void
    vfuncMoveLines?(copy: boolean, step: number): void
    vfuncMoveWords?(step: number): void
    vfuncRedo?(): void
    vfuncShowCompletion?(): void
    vfuncUndo?(): void
    /* Virtual methods of Gtk.TextView */
    vfuncBackspace?(): void
    vfuncCopyClipboard?(): void
    vfuncCutClipboard?(): void
    vfuncDeleteFromCursor?(type: Gtk.DeleteType, count: number): void
    vfuncDrawLayer?(layer: Gtk.TextViewLayer, cr: cairo.Context): void
    vfuncExtendSelection?(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfuncInsertAtCursor?(str: string): void
    vfuncInsertEmoji?(): void
    vfuncMoveCursor?(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfuncPasteClipboard?(): void
    vfuncPopulatePopup?(popup: Gtk.Widget): void
    vfuncSetAnchor?(): void
    vfuncToggleOverwrite?(): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: ((obj: Map, case_type: ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: ((obj: Map, case_type: ChangeCaseType) => void)): number
    emit(sigName: "change-case", case_type: ChangeCaseType): void
    on(sigName: "change-case", callback: ((event: Map, case_type: ChangeCaseType) => void)): EventEmitter
    once(sigName: "change-case", callback: ((event: Map, case_type: ChangeCaseType) => void)): EventEmitter
    off(sigName: "change-case", callback: ((event: Map, case_type: ChangeCaseType) => void)): EventEmitter
    connect(sigName: "change-number", callback: ((obj: Map, count: number) => void)): number
    connect_after(sigName: "change-number", callback: ((obj: Map, count: number) => void)): number
    emit(sigName: "change-number", count: number): void
    on(sigName: "change-number", callback: ((event: Map, count: number) => void)): EventEmitter
    once(sigName: "change-number", callback: ((event: Map, count: number) => void)): EventEmitter
    off(sigName: "change-number", callback: ((event: Map, count: number) => void)): EventEmitter
    connect(sigName: "join-lines", callback: ((obj: Map) => void)): number
    connect_after(sigName: "join-lines", callback: ((obj: Map) => void)): number
    emit(sigName: "join-lines"): void
    on(sigName: "join-lines", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "join-lines", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "join-lines", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "line-mark-activated", callback: ((obj: Map, iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    connect_after(sigName: "line-mark-activated", callback: ((obj: Map, iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, event: Gdk.Event): void
    on(sigName: "line-mark-activated", callback: ((event: Map, iter: Gtk.TextIter, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "line-mark-activated", callback: ((event: Map, iter: Gtk.TextIter, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "line-mark-activated", callback: ((event: Map, iter: Gtk.TextIter, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "move-lines", callback: ((obj: Map, copy: boolean, count: number) => void)): number
    connect_after(sigName: "move-lines", callback: ((obj: Map, copy: boolean, count: number) => void)): number
    emit(sigName: "move-lines", copy: boolean, count: number): void
    on(sigName: "move-lines", callback: ((event: Map, copy: boolean, count: number) => void)): EventEmitter
    once(sigName: "move-lines", callback: ((event: Map, copy: boolean, count: number) => void)): EventEmitter
    off(sigName: "move-lines", callback: ((event: Map, copy: boolean, count: number) => void)): EventEmitter
    connect(sigName: "move-to-matching-bracket", callback: ((obj: Map, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-to-matching-bracket", callback: ((obj: Map, extend_selection: boolean) => void)): number
    emit(sigName: "move-to-matching-bracket", extend_selection: boolean): void
    on(sigName: "move-to-matching-bracket", callback: ((event: Map, extend_selection: boolean) => void)): EventEmitter
    once(sigName: "move-to-matching-bracket", callback: ((event: Map, extend_selection: boolean) => void)): EventEmitter
    off(sigName: "move-to-matching-bracket", callback: ((event: Map, extend_selection: boolean) => void)): EventEmitter
    connect(sigName: "move-words", callback: ((obj: Map, count: number) => void)): number
    connect_after(sigName: "move-words", callback: ((obj: Map, count: number) => void)): number
    emit(sigName: "move-words", count: number): void
    on(sigName: "move-words", callback: ((event: Map, count: number) => void)): EventEmitter
    once(sigName: "move-words", callback: ((event: Map, count: number) => void)): EventEmitter
    off(sigName: "move-words", callback: ((event: Map, count: number) => void)): EventEmitter
    connect(sigName: "redo", callback: ((obj: Map) => void)): number
    connect_after(sigName: "redo", callback: ((obj: Map) => void)): number
    emit(sigName: "redo"): void
    on(sigName: "redo", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "redo", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "redo", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "show-completion", callback: ((obj: Map) => void)): number
    connect_after(sigName: "show-completion", callback: ((obj: Map) => void)): number
    emit(sigName: "show-completion"): void
    on(sigName: "show-completion", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "show-completion", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "show-completion", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "smart-home-end", callback: ((obj: Map, iter: Gtk.TextIter, count: number) => void)): number
    connect_after(sigName: "smart-home-end", callback: ((obj: Map, iter: Gtk.TextIter, count: number) => void)): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    on(sigName: "smart-home-end", callback: ((event: Map, iter: Gtk.TextIter, count: number) => void)): EventEmitter
    once(sigName: "smart-home-end", callback: ((event: Map, iter: Gtk.TextIter, count: number) => void)): EventEmitter
    off(sigName: "smart-home-end", callback: ((event: Map, iter: Gtk.TextIter, count: number) => void)): EventEmitter
    connect(sigName: "undo", callback: ((obj: Map) => void)): number
    connect_after(sigName: "undo", callback: ((obj: Map) => void)): number
    emit(sigName: "undo"): void
    on(sigName: "undo", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "undo", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "undo", callback: ((event: Map) => void)): EventEmitter
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: ((obj: Map) => void)): number
    connect_after(sigName: "backspace", callback: ((obj: Map) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "backspace", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "backspace", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "copy-clipboard", callback: ((obj: Map) => void)): number
    connect_after(sigName: "copy-clipboard", callback: ((obj: Map) => void)): number
    emit(sigName: "copy-clipboard"): void
    on(sigName: "copy-clipboard", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "copy-clipboard", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "copy-clipboard", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "cut-clipboard", callback: ((obj: Map) => void)): number
    connect_after(sigName: "cut-clipboard", callback: ((obj: Map) => void)): number
    emit(sigName: "cut-clipboard"): void
    on(sigName: "cut-clipboard", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "cut-clipboard", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "cut-clipboard", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "delete-from-cursor", callback: ((obj: Map, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: ((obj: Map, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    on(sigName: "delete-from-cursor", callback: ((event: Map, type: Gtk.DeleteType, count: number) => void)): EventEmitter
    once(sigName: "delete-from-cursor", callback: ((event: Map, type: Gtk.DeleteType, count: number) => void)): EventEmitter
    off(sigName: "delete-from-cursor", callback: ((event: Map, type: Gtk.DeleteType, count: number) => void)): EventEmitter
    connect(sigName: "extend-selection", callback: ((obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: ((obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "extend-selection", callback: ((event: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): EventEmitter
    once(sigName: "extend-selection", callback: ((event: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): EventEmitter
    off(sigName: "extend-selection", callback: ((event: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): EventEmitter
    connect(sigName: "insert-at-cursor", callback: ((obj: Map, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: ((obj: Map, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    on(sigName: "insert-at-cursor", callback: ((event: Map, string: string) => void)): EventEmitter
    once(sigName: "insert-at-cursor", callback: ((event: Map, string: string) => void)): EventEmitter
    off(sigName: "insert-at-cursor", callback: ((event: Map, string: string) => void)): EventEmitter
    connect(sigName: "insert-emoji", callback: ((obj: Map) => void)): number
    connect_after(sigName: "insert-emoji", callback: ((obj: Map) => void)): number
    emit(sigName: "insert-emoji"): void
    on(sigName: "insert-emoji", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "insert-emoji", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "insert-emoji", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "move-cursor", callback: ((obj: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: ((obj: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    on(sigName: "move-cursor", callback: ((event: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): EventEmitter
    once(sigName: "move-cursor", callback: ((event: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): EventEmitter
    off(sigName: "move-cursor", callback: ((event: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): EventEmitter
    connect(sigName: "move-viewport", callback: ((obj: Map, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: ((obj: Map, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    on(sigName: "move-viewport", callback: ((event: Map, step: Gtk.ScrollStep, count: number) => void)): EventEmitter
    once(sigName: "move-viewport", callback: ((event: Map, step: Gtk.ScrollStep, count: number) => void)): EventEmitter
    off(sigName: "move-viewport", callback: ((event: Map, step: Gtk.ScrollStep, count: number) => void)): EventEmitter
    connect(sigName: "paste-clipboard", callback: ((obj: Map) => void)): number
    connect_after(sigName: "paste-clipboard", callback: ((obj: Map) => void)): number
    emit(sigName: "paste-clipboard"): void
    on(sigName: "paste-clipboard", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "paste-clipboard", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "paste-clipboard", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "populate-popup", callback: ((obj: Map, popup: Gtk.Widget) => void)): number
    connect_after(sigName: "populate-popup", callback: ((obj: Map, popup: Gtk.Widget) => void)): number
    emit(sigName: "populate-popup", popup: Gtk.Widget): void
    on(sigName: "populate-popup", callback: ((event: Map, popup: Gtk.Widget) => void)): EventEmitter
    once(sigName: "populate-popup", callback: ((event: Map, popup: Gtk.Widget) => void)): EventEmitter
    off(sigName: "populate-popup", callback: ((event: Map, popup: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "preedit-changed", callback: ((obj: Map, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: ((obj: Map, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    on(sigName: "preedit-changed", callback: ((event: Map, preedit: string) => void)): EventEmitter
    once(sigName: "preedit-changed", callback: ((event: Map, preedit: string) => void)): EventEmitter
    off(sigName: "preedit-changed", callback: ((event: Map, preedit: string) => void)): EventEmitter
    connect(sigName: "select-all", callback: ((obj: Map, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: ((obj: Map, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    on(sigName: "select-all", callback: ((event: Map, select: boolean) => void)): EventEmitter
    once(sigName: "select-all", callback: ((event: Map, select: boolean) => void)): EventEmitter
    off(sigName: "select-all", callback: ((event: Map, select: boolean) => void)): EventEmitter
    connect(sigName: "set-anchor", callback: ((obj: Map) => void)): number
    connect_after(sigName: "set-anchor", callback: ((obj: Map) => void)): number
    emit(sigName: "set-anchor"): void
    on(sigName: "set-anchor", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "set-anchor", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "set-anchor", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "toggle-cursor-visible", callback: ((obj: Map) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: ((obj: Map) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    on(sigName: "toggle-cursor-visible", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "toggle-cursor-visible", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "toggle-cursor-visible", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "toggle-overwrite", callback: ((obj: Map) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: ((obj: Map) => void)): number
    emit(sigName: "toggle-overwrite"): void
    on(sigName: "toggle-overwrite", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "toggle-overwrite", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "toggle-overwrite", callback: ((event: Map) => void)): EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: Map, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: Map, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "add", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "add", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "check-resize", callback: ((obj: Map) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: Map) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "check-resize", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "check-resize", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "remove", callback: ((obj: Map, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: Map, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "remove", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "remove", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "set-focus-child", callback: ((obj: Map, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: Map, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "set-focus-child", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "set-focus-child", callback: ((event: Map, object: Gtk.Widget) => void)): EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: Map) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: Map) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "accel-closures-changed", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "accel-closures-changed", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "button-press-event", callback: ((obj: Map, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: Map, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: ((event: Map, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-press-event", callback: ((event: Map, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-press-event", callback: ((event: Map, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "button-release-event", callback: ((obj: Map, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: Map, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: ((event: Map, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-release-event", callback: ((event: Map, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-release-event", callback: ((event: Map, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "can-activate-accel", callback: ((obj: Map, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: Map, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    on(sigName: "can-activate-accel", callback: ((event: Map, signal_id: number) => boolean)): EventEmitter
    once(sigName: "can-activate-accel", callback: ((event: Map, signal_id: number) => boolean)): EventEmitter
    off(sigName: "can-activate-accel", callback: ((event: Map, signal_id: number) => boolean)): EventEmitter
    connect(sigName: "child-notify", callback: ((obj: Map, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: Map, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: ((event: Map, child_property: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "child-notify", callback: ((event: Map, child_property: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "child-notify", callback: ((event: Map, child_property: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "composited-changed", callback: ((obj: Map) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: Map) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "composited-changed", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "composited-changed", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "configure-event", callback: ((obj: Map, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: Map, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: ((event: Map, event: Gdk.EventConfigure) => boolean)): EventEmitter
    once(sigName: "configure-event", callback: ((event: Map, event: Gdk.EventConfigure) => boolean)): EventEmitter
    off(sigName: "configure-event", callback: ((event: Map, event: Gdk.EventConfigure) => boolean)): EventEmitter
    connect(sigName: "damage-event", callback: ((obj: Map, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: Map, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: ((event: Map, event: Gdk.EventExpose) => boolean)): EventEmitter
    once(sigName: "damage-event", callback: ((event: Map, event: Gdk.EventExpose) => boolean)): EventEmitter
    off(sigName: "damage-event", callback: ((event: Map, event: Gdk.EventExpose) => boolean)): EventEmitter
    connect(sigName: "delete-event", callback: ((obj: Map, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: Map, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "delete-event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "delete-event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "destroy", callback: ((obj: Map) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: Map) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "destroy", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "destroy", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "destroy-event", callback: ((obj: Map, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: Map, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "destroy-event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "destroy-event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "direction-changed", callback: ((obj: Map, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: Map, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: ((event: Map, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    once(sigName: "direction-changed", callback: ((event: Map, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    off(sigName: "direction-changed", callback: ((event: Map, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    connect(sigName: "drag-begin", callback: ((obj: Map, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: Map, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-begin", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-begin", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-delete", callback: ((obj: Map, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: Map, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-data-delete", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-data-delete", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-get", callback: ((obj: Map, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: Map, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: ((event: Map, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-get", callback: ((event: Map, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-get", callback: ((event: Map, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-data-received", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-received", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-received", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-drop", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-drop", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-drop", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "drag-end", callback: ((obj: Map, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: Map, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-end", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-end", callback: ((event: Map, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-failed", callback: ((obj: Map, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: Map, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: ((event: Map, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    once(sigName: "drag-failed", callback: ((event: Map, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    off(sigName: "drag-failed", callback: ((event: Map, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    connect(sigName: "drag-leave", callback: ((obj: Map, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: Map, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: ((event: Map, context: Gdk.DragContext, time: number) => void)): EventEmitter
    once(sigName: "drag-leave", callback: ((event: Map, context: Gdk.DragContext, time: number) => void)): EventEmitter
    off(sigName: "drag-leave", callback: ((event: Map, context: Gdk.DragContext, time: number) => void)): EventEmitter
    connect(sigName: "drag-motion", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-motion", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-motion", callback: ((event: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "draw", callback: ((obj: Map, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: Map, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: ((event: Map, cr: cairo.Context) => boolean)): EventEmitter
    once(sigName: "draw", callback: ((event: Map, cr: cairo.Context) => boolean)): EventEmitter
    off(sigName: "draw", callback: ((event: Map, cr: cairo.Context) => boolean)): EventEmitter
    connect(sigName: "enter-notify-event", callback: ((obj: Map, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: Map, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: ((event: Map, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "enter-notify-event", callback: ((event: Map, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "enter-notify-event", callback: ((event: Map, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "event", callback: ((obj: Map, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: Map, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "event", callback: ((event: Map, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "event-after", callback: ((obj: Map, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: Map, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: ((event: Map, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "event-after", callback: ((event: Map, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "event-after", callback: ((event: Map, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "focus", callback: ((obj: Map, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: Map, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: ((event: Map, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "focus", callback: ((event: Map, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "focus", callback: ((event: Map, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "focus-in-event", callback: ((obj: Map, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: Map, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: ((event: Map, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-in-event", callback: ((event: Map, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-in-event", callback: ((event: Map, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "focus-out-event", callback: ((obj: Map, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: Map, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: ((event: Map, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-out-event", callback: ((event: Map, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-out-event", callback: ((event: Map, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "grab-broken-event", callback: ((obj: Map, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: Map, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: ((event: Map, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    once(sigName: "grab-broken-event", callback: ((event: Map, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    off(sigName: "grab-broken-event", callback: ((event: Map, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    connect(sigName: "grab-focus", callback: ((obj: Map) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: Map) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "grab-focus", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "grab-focus", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "grab-notify", callback: ((obj: Map, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: Map, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    on(sigName: "grab-notify", callback: ((event: Map, was_grabbed: boolean) => void)): EventEmitter
    once(sigName: "grab-notify", callback: ((event: Map, was_grabbed: boolean) => void)): EventEmitter
    off(sigName: "grab-notify", callback: ((event: Map, was_grabbed: boolean) => void)): EventEmitter
    connect(sigName: "hide", callback: ((obj: Map) => void)): number
    connect_after(sigName: "hide", callback: ((obj: Map) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "hide", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "hide", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "hierarchy-changed", callback: ((obj: Map, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: Map, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: ((event: Map, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "hierarchy-changed", callback: ((event: Map, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "hierarchy-changed", callback: ((event: Map, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "key-press-event", callback: ((obj: Map, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: Map, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: ((event: Map, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-press-event", callback: ((event: Map, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-press-event", callback: ((event: Map, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "key-release-event", callback: ((obj: Map, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: Map, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: ((event: Map, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-release-event", callback: ((event: Map, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-release-event", callback: ((event: Map, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "keynav-failed", callback: ((obj: Map, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: Map, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: ((event: Map, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "keynav-failed", callback: ((event: Map, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "keynav-failed", callback: ((event: Map, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "leave-notify-event", callback: ((obj: Map, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: Map, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: ((event: Map, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "leave-notify-event", callback: ((event: Map, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "leave-notify-event", callback: ((event: Map, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "map", callback: ((obj: Map) => void)): number
    connect_after(sigName: "map", callback: ((obj: Map) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "map", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "map", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "map-event", callback: ((obj: Map, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: Map, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: ((event: Map, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "map-event", callback: ((event: Map, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "map-event", callback: ((event: Map, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "mnemonic-activate", callback: ((obj: Map, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: Map, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    on(sigName: "mnemonic-activate", callback: ((event: Map, group_cycling: boolean) => boolean)): EventEmitter
    once(sigName: "mnemonic-activate", callback: ((event: Map, group_cycling: boolean) => boolean)): EventEmitter
    off(sigName: "mnemonic-activate", callback: ((event: Map, group_cycling: boolean) => boolean)): EventEmitter
    connect(sigName: "motion-notify-event", callback: ((obj: Map, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: Map, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: ((event: Map, event: Gdk.EventMotion) => boolean)): EventEmitter
    once(sigName: "motion-notify-event", callback: ((event: Map, event: Gdk.EventMotion) => boolean)): EventEmitter
    off(sigName: "motion-notify-event", callback: ((event: Map, event: Gdk.EventMotion) => boolean)): EventEmitter
    connect(sigName: "move-focus", callback: ((obj: Map, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: Map, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: ((event: Map, direction: Gtk.DirectionType) => void)): EventEmitter
    once(sigName: "move-focus", callback: ((event: Map, direction: Gtk.DirectionType) => void)): EventEmitter
    off(sigName: "move-focus", callback: ((event: Map, direction: Gtk.DirectionType) => void)): EventEmitter
    connect(sigName: "parent-set", callback: ((obj: Map, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: Map, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: ((event: Map, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "parent-set", callback: ((event: Map, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "parent-set", callback: ((event: Map, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "popup-menu", callback: ((obj: Map) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: Map) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: ((event: Map) => boolean)): EventEmitter
    once(sigName: "popup-menu", callback: ((event: Map) => boolean)): EventEmitter
    off(sigName: "popup-menu", callback: ((event: Map) => boolean)): EventEmitter
    connect(sigName: "property-notify-event", callback: ((obj: Map, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: Map, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: ((event: Map, event: Gdk.EventProperty) => boolean)): EventEmitter
    once(sigName: "property-notify-event", callback: ((event: Map, event: Gdk.EventProperty) => boolean)): EventEmitter
    off(sigName: "property-notify-event", callback: ((event: Map, event: Gdk.EventProperty) => boolean)): EventEmitter
    connect(sigName: "proximity-in-event", callback: ((obj: Map, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: Map, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: ((event: Map, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-in-event", callback: ((event: Map, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-in-event", callback: ((event: Map, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "proximity-out-event", callback: ((obj: Map, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: Map, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: ((event: Map, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-out-event", callback: ((event: Map, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-out-event", callback: ((event: Map, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "realize", callback: ((obj: Map) => void)): number
    connect_after(sigName: "realize", callback: ((obj: Map) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "realize", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "realize", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "screen-changed", callback: ((obj: Map, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: Map, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: ((event: Map, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    once(sigName: "screen-changed", callback: ((event: Map, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    off(sigName: "screen-changed", callback: ((event: Map, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    connect(sigName: "scroll-event", callback: ((obj: Map, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: Map, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: ((event: Map, event: Gdk.EventScroll) => boolean)): EventEmitter
    once(sigName: "scroll-event", callback: ((event: Map, event: Gdk.EventScroll) => boolean)): EventEmitter
    off(sigName: "scroll-event", callback: ((event: Map, event: Gdk.EventScroll) => boolean)): EventEmitter
    connect(sigName: "selection-clear-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-clear-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-clear-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-get", callback: ((obj: Map, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: Map, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: ((event: Map, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "selection-get", callback: ((event: Map, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "selection-get", callback: ((event: Map, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "selection-notify-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-notify-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-notify-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-received", callback: ((obj: Map, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: Map, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: ((event: Map, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    once(sigName: "selection-received", callback: ((event: Map, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    off(sigName: "selection-received", callback: ((event: Map, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    connect(sigName: "selection-request-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-request-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-request-event", callback: ((event: Map, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "show", callback: ((obj: Map) => void)): number
    connect_after(sigName: "show", callback: ((obj: Map) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "show", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "show", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "show-help", callback: ((obj: Map, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: Map, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: ((event: Map, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    once(sigName: "show-help", callback: ((event: Map, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    off(sigName: "show-help", callback: ((event: Map, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    connect(sigName: "size-allocate", callback: ((obj: Map, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: Map, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: ((event: Map, allocation: Gtk.Allocation) => void)): EventEmitter
    once(sigName: "size-allocate", callback: ((event: Map, allocation: Gtk.Allocation) => void)): EventEmitter
    off(sigName: "size-allocate", callback: ((event: Map, allocation: Gtk.Allocation) => void)): EventEmitter
    connect(sigName: "state-changed", callback: ((obj: Map, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: Map, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: ((event: Map, state: Gtk.StateType) => void)): EventEmitter
    once(sigName: "state-changed", callback: ((event: Map, state: Gtk.StateType) => void)): EventEmitter
    off(sigName: "state-changed", callback: ((event: Map, state: Gtk.StateType) => void)): EventEmitter
    connect(sigName: "state-flags-changed", callback: ((obj: Map, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: Map, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: ((event: Map, flags: Gtk.StateFlags) => void)): EventEmitter
    once(sigName: "state-flags-changed", callback: ((event: Map, flags: Gtk.StateFlags) => void)): EventEmitter
    off(sigName: "state-flags-changed", callback: ((event: Map, flags: Gtk.StateFlags) => void)): EventEmitter
    connect(sigName: "style-set", callback: ((obj: Map, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: Map, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    on(sigName: "style-set", callback: ((event: Map, previous_style?: Gtk.Style | null) => void)): EventEmitter
    once(sigName: "style-set", callback: ((event: Map, previous_style?: Gtk.Style | null) => void)): EventEmitter
    off(sigName: "style-set", callback: ((event: Map, previous_style?: Gtk.Style | null) => void)): EventEmitter
    connect(sigName: "style-updated", callback: ((obj: Map) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: Map) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "style-updated", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "style-updated", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "touch-event", callback: ((obj: Map, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: Map, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: ((event: Map, object: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "touch-event", callback: ((event: Map, object: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "touch-event", callback: ((event: Map, object: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "unmap", callback: ((obj: Map) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: Map) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "unmap", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "unmap", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "unmap-event", callback: ((obj: Map, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: Map, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: ((event: Map, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "unmap-event", callback: ((event: Map, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "unmap-event", callback: ((event: Map, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "unrealize", callback: ((obj: Map) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: Map) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: ((event: Map) => void)): EventEmitter
    once(sigName: "unrealize", callback: ((event: Map) => void)): EventEmitter
    off(sigName: "unrealize", callback: ((event: Map) => void)): EventEmitter
    connect(sigName: "visibility-notify-event", callback: ((obj: Map, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: Map, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: ((event: Map, event: Gdk.EventVisibility) => boolean)): EventEmitter
    once(sigName: "visibility-notify-event", callback: ((event: Map, event: Gdk.EventVisibility) => boolean)): EventEmitter
    off(sigName: "visibility-notify-event", callback: ((event: Map, event: Gdk.EventVisibility) => boolean)): EventEmitter
    connect(sigName: "window-state-event", callback: ((obj: Map, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: Map, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: ((event: Map, event: Gdk.EventWindowState) => boolean)): EventEmitter
    once(sigName: "window-state-event", callback: ((event: Map, event: Gdk.EventWindowState) => boolean)): EventEmitter
    off(sigName: "window-state-event", callback: ((event: Map, event: Gdk.EventWindowState) => boolean)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Map, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Map, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Map, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::font-desc", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::font-desc", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::font-desc", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::view", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::view", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::auto-indent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::auto-indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::auto-indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-pattern", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-pattern", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-pattern", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-pattern", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::completion", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completion", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::completion", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::completion", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::draw-spaces", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::highlight-current-line", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-current-line", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::highlight-current-line", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::highlight-current-line", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent-on-tab", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-on-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent-on-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent-on-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::right-margin-position", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::right-margin-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::right-margin-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-line-marks", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-marks", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-line-marks", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-line-marks", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-line-numbers", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-right-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::smart-backspace", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-backspace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::smart-backspace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::smart-backspace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::smart-home-end", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-home-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::smart-home-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::smart-home-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::space-drawer", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::space-drawer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::space-drawer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::space-drawer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tab-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::accepts-tab", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepts-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::accepts-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::accepts-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::bottom-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bottom-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::bottom-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::bottom-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::buffer", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::buffer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::buffer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::cursor-visible", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::cursor-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::cursor-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::editable", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::im-module", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-module", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::im-module", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::im-module", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::input-hints", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::input-hints", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::input-hints", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::input-purpose", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::input-purpose", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::input-purpose", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::justification", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::left-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::monospace", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::monospace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::monospace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::overwrite", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::overwrite", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::overwrite", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::populate-all", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::populate-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::populate-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::populate-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::right-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tabs", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::top-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::top-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::top-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::border-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::child", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::composite-child", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::events", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::expand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::halign", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::height-request", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-end", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-left", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-right", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-start", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-top", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::opacity", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::parent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::receives-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::sensitive", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::valign", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::width-request", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hadjustment", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vadjustment", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: ((obj: Map, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    static new(): Map
    static $gtype: GObject.Type
}
export interface Mark_ConstructProps extends Gtk.TextMark_ConstructProps {
    category?:string
}
export class Mark {
    /* Properties of GtkSource.Mark */
    /* Properties of Gtk.TextMark */
    /* Fields of GtkSource.Mark */
    parent_instance:Gtk.TextMark
    priv:MarkPrivate
    /* Fields of Gtk.TextMark */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Mark, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Mark, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Mark, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Mark, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Mark, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Mark_ConstructProps)
    _init (config?: Mark_ConstructProps): void
    static new(name: string, category: string): Mark
    static $gtype: GObject.Type
}
export interface MarkAttributes_ConstructProps extends GObject.Object_ConstructProps {
    background?:Gdk.RGBA
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export class MarkAttributes {
    /* Properties of GtkSource.MarkAttributes */
    background:Gdk.RGBA
    gicon:Gio.Icon
    icon_name:string
    pixbuf:GdkPixbuf.Pixbuf
    stock_id:string
    /* Fields of GtkSource.MarkAttributes */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    setIconName(icon_name: string): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setStockId(stock_id: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: ((obj: MarkAttributes, mark: Mark) => string)): number
    connect_after(sigName: "query-tooltip-markup", callback: ((obj: MarkAttributes, mark: Mark) => string)): number
    emit(sigName: "query-tooltip-markup", mark: Mark): void
    on(sigName: "query-tooltip-markup", callback: ((event: MarkAttributes, mark: Mark) => string)): EventEmitter
    once(sigName: "query-tooltip-markup", callback: ((event: MarkAttributes, mark: Mark) => string)): EventEmitter
    off(sigName: "query-tooltip-markup", callback: ((event: MarkAttributes, mark: Mark) => string)): EventEmitter
    connect(sigName: "query-tooltip-text", callback: ((obj: MarkAttributes, mark: Mark) => string)): number
    connect_after(sigName: "query-tooltip-text", callback: ((obj: MarkAttributes, mark: Mark) => string)): number
    emit(sigName: "query-tooltip-text", mark: Mark): void
    on(sigName: "query-tooltip-text", callback: ((event: MarkAttributes, mark: Mark) => string)): EventEmitter
    once(sigName: "query-tooltip-text", callback: ((event: MarkAttributes, mark: Mark) => string)): EventEmitter
    off(sigName: "query-tooltip-text", callback: ((event: MarkAttributes, mark: Mark) => string)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: MarkAttributes, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: MarkAttributes, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: MarkAttributes, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::gicon", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::gicon", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::icon-name", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::icon-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixbuf", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixbuf", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixbuf", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::stock-id", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stock-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::stock-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::stock-id", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: MarkAttributes_ConstructProps)
    _init (config?: MarkAttributes_ConstructProps): void
    static new(): MarkAttributes
    static $gtype: GObject.Type
}
export interface PrintCompositor_ConstructProps extends GObject.Object_ConstructProps {
    body_font_name?:string
    buffer?:Buffer
    footer_font_name?:string
    header_font_name?:string
    highlight_syntax?:boolean
    line_numbers_font_name?:string
    print_footer?:boolean
    print_header?:boolean
    print_line_numbers?:number
    tab_width?:number
    wrap_mode?:Gtk.WrapMode
}
export class PrintCompositor {
    /* Properties of GtkSource.PrintCompositor */
    body_font_name:string
    footer_font_name:string
    header_font_name:string
    highlight_syntax:boolean
    line_numbers_font_name:string
    readonly n_pages:number
    print_footer:boolean
    print_header:boolean
    print_line_numbers:number
    tab_width:number
    wrap_mode:Gtk.WrapMode
    /* Fields of GtkSource.PrintCompositor */
    parent_instance:GObject.Object
    priv:PrintCompositorPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.PrintCompositor */
    drawPage(context: Gtk.PrintContext, page_nr: number): void
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
    setBodyFontName(font_name: string): void
    setBottomMargin(margin: number, unit: Gtk.Unit): void
    setFooterFontName(font_name?: string | null): void
    setFooterFormat(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    setHeaderFontName(font_name?: string | null): void
    setHeaderFormat(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    setHighlightSyntax(highlight: boolean): void
    setLeftMargin(margin: number, unit: Gtk.Unit): void
    setLineNumbersFontName(font_name?: string | null): void
    setPrintFooter(print: boolean): void
    setPrintHeader(print: boolean): void
    setPrintLineNumbers(interval: number): void
    setRightMargin(margin: number, unit: Gtk.Unit): void
    setTabWidth(width: number): void
    setTopMargin(margin: number, unit: Gtk.Unit): void
    setWrapMode(wrap_mode: Gtk.WrapMode): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: PrintCompositor, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: PrintCompositor, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: PrintCompositor, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::body-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::body-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::body-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::footer-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::footer-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::footer-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::footer-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::footer-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::header-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::header-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::header-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::header-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::highlight-syntax", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-syntax", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::highlight-syntax", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::highlight-syntax", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::line-numbers-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-numbers-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-numbers-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::line-numbers-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::line-numbers-font-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::n-pages", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-pages", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::n-pages", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::n-pages", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::print-footer", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-footer", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-footer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::print-footer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::print-footer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::print-header", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-header", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-header", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::print-header", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::print-header", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::print-line-numbers", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-line-numbers", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::print-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::print-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tab-width", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: PrintCompositor_ConstructProps)
    _init (config?: PrintCompositor_ConstructProps): void
    static new(buffer: Buffer): PrintCompositor
    static newFromView(view: View): PrintCompositor
    static $gtype: GObject.Type
}
export interface Region_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Gtk.TextBuffer
}
export class Region {
    /* Properties of GtkSource.Region */
    /* Fields of GtkSource.Region */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Region */
    addRegion(region_to_add?: Region | null): void
    addSubregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    getBuffer(): Gtk.TextBuffer | null
    getStartRegionIter(): /* iter */ RegionIter
    intersectRegion(region2?: Region | null): Region | null
    intersectSubregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null
    isEmpty(): boolean
    subtractRegion(region_to_subtract?: Region | null): void
    subtractSubregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Region, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Region, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Region, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Region, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Region, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Region_ConstructProps)
    _init (config?: Region_ConstructProps): void
    static new(buffer: Gtk.TextBuffer): Region
    static $gtype: GObject.Type
}
export interface SearchContext_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    highlight?:boolean
    match_style?:Style
    settings?:SearchSettings
}
export class SearchContext {
    /* Properties of GtkSource.SearchContext */
    highlight:boolean
    match_style:Style
    readonly occurrences_count:number
    readonly regex_error:object
    settings:SearchSettings
    /* Fields of GtkSource.SearchContext */
    parent:GObject.Object
    priv:SearchContextPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.SearchContext */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    backward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    backwardAsync(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    backwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    backwardFinish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forwardAsync(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forwardFinish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    getBuffer(): Buffer
    getHighlight(): boolean
    getMatchStyle(): Style
    getOccurrencePosition(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number
    getOccurrencesCount(): number
    getRegexError(): GLib.Error | null
    getSettings(): SearchSettings
    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    replace2(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    replaceAll(replace: string, replace_length: number): number
    setHighlight(highlight: boolean): void
    setMatchStyle(match_style?: Style | null): void
    setSettings(settings?: SearchSettings | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: SearchContext, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: SearchContext, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: SearchContext, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::highlight", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::highlight", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::highlight", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::match-style", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-style", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::match-style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::match-style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::match-style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::occurrences-count", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::occurrences-count", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::occurrences-count", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::occurrences-count", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::occurrences-count", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::regex-error", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-error", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::regex-error", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::regex-error", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::regex-error", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::settings", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::settings", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::settings", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: SearchContext_ConstructProps)
    _init (config?: SearchContext_ConstructProps): void
    static new(buffer: Buffer, settings?: SearchSettings | null): SearchContext
    static $gtype: GObject.Type
}
export interface SearchSettings_ConstructProps extends GObject.Object_ConstructProps {
    at_word_boundaries?:boolean
    case_sensitive?:boolean
    regex_enabled?:boolean
    search_text?:string
    wrap_around?:boolean
}
export class SearchSettings {
    /* Properties of GtkSource.SearchSettings */
    at_word_boundaries:boolean
    case_sensitive:boolean
    regex_enabled:boolean
    search_text:string
    wrap_around:boolean
    /* Fields of GtkSource.SearchSettings */
    parent:GObject.Object
    priv:SearchSettingsPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.SearchSettings */
    getAtWordBoundaries(): boolean
    getCaseSensitive(): boolean
    getRegexEnabled(): boolean
    getSearchText(): string | null
    getWrapAround(): boolean
    setAtWordBoundaries(at_word_boundaries: boolean): void
    setCaseSensitive(case_sensitive: boolean): void
    setRegexEnabled(regex_enabled: boolean): void
    setSearchText(search_text?: string | null): void
    setWrapAround(wrap_around: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: SearchSettings, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: SearchSettings, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: SearchSettings, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::at-word-boundaries", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::at-word-boundaries", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::at-word-boundaries", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::at-word-boundaries", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::at-word-boundaries", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::case-sensitive", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::case-sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::case-sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::case-sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::regex-enabled", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-enabled", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::regex-enabled", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::regex-enabled", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::regex-enabled", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::search-text", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::search-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::search-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::wrap-around", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-around", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-around", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::wrap-around", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::wrap-around", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: SearchSettings_ConstructProps)
    _init (config?: SearchSettings_ConstructProps): void
    static new(): SearchSettings
    static $gtype: GObject.Type
}
export interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    enable_matrix?:boolean
    matrix?:GLib.Variant
}
export class SpaceDrawer {
    /* Properties of GtkSource.SpaceDrawer */
    enable_matrix:boolean
    matrix:GLib.Variant
    /* Fields of GtkSource.SpaceDrawer */
    parent:GObject.Object
    priv:SpaceDrawerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.SpaceDrawer */
    bindMatrixSetting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    getEnableMatrix(): boolean
    getMatrix(): GLib.Variant
    getTypesForLocations(locations: SpaceLocationFlags): SpaceTypeFlags
    setEnableMatrix(enable_matrix: boolean): void
    setMatrix(matrix?: GLib.Variant | null): void
    setTypesForLocations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: SpaceDrawer, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: SpaceDrawer, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: SpaceDrawer, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::enable-matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-matrix", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::enable-matrix", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::enable-matrix", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::matrix", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::matrix", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::matrix", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: SpaceDrawer_ConstructProps)
    _init (config?: SpaceDrawer_ConstructProps): void
    static new(): SpaceDrawer
    static $gtype: GObject.Type
}
export interface Style_ConstructProps extends GObject.Object_ConstructProps {
    background?:string
    background_set?:boolean
    bold?:boolean
    bold_set?:boolean
    foreground?:string
    foreground_set?:boolean
    italic?:boolean
    italic_set?:boolean
    line_background?:string
    line_background_set?:boolean
    pango_underline?:Pango.Underline
    scale?:string
    scale_set?:boolean
    strikethrough?:boolean
    strikethrough_set?:boolean
    underline?:boolean
    underline_color?:string
    underline_color_set?:boolean
    underline_set?:boolean
}
export class Style {
    /* Properties of GtkSource.Style */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Style */
    apply(tag: Gtk.TextTag): void
    copy(): Style
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Style, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Style, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Style, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Style_ConstructProps)
    _init (config?: Style_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StyleScheme_ConstructProps extends GObject.Object_ConstructProps {
    id?:string
}
export class StyleScheme {
    /* Properties of GtkSource.StyleScheme */
    readonly description:string
    readonly filename:string
    readonly name:string
    /* Fields of GtkSource.StyleScheme */
    base:GObject.Object
    priv:StyleSchemePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.StyleScheme */
    getAuthors(): string[] | null
    getDescription(): string | null
    getFilename(): string | null
    getId(): string
    getName(): string
    getStyle(style_id: string): Style | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: StyleScheme, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: StyleScheme, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: StyleScheme, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::description", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::description", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::description", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::filename", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::filename", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::filename", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: StyleScheme_ConstructProps)
    _init (config?: StyleScheme_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StyleSchemeChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
}
export class StyleSchemeChooserButton {
    /* Properties of Gtk.Button */
    always_show_image:boolean
    image:Gtk.Widget
    image_position:Gtk.PositionType
    label:string
    relief:Gtk.ReliefStyle
    use_stock:boolean
    use_underline:boolean
    xalign:number
    yalign:number
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    focus_on_click:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Properties of Gtk.Actionable */
    action_name:string
    action_target:GLib.Variant
    /* Properties of Gtk.Activatable */
    related_action:Gtk.Action
    use_action_appearance:boolean
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Fields of GtkSource.StyleSchemeChooserButton */
    /* Fields of Gtk.Button */
    /* Fields of Gtk.Bin */
    container:Gtk.Container
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gtk.Button */
    clicked(): void
    enter(): void
    getAlignment(): [ /* xalign */ number, /* yalign */ number ]
    getAlwaysShowImage(): boolean
    getEventWindow(): Gdk.Window
    getFocusOnClick(): boolean
    getImage(): Gtk.Widget | null
    getImagePosition(): Gtk.PositionType
    getLabel(): string
    getRelief(): Gtk.ReliefStyle
    getUseStock(): boolean
    getUseUnderline(): boolean
    leave(): void
    pressed(): void
    released(): void
    setAlignment(xalign: number, yalign: number): void
    setAlwaysShowImage(always_show: boolean): void
    setFocusOnClick(focus_on_click: boolean): void
    setImage(image?: Gtk.Widget | null): void
    setImagePosition(position: Gtk.PositionType): void
    setLabel(label: string): void
    setRelief(relief: Gtk.ReliefStyle): void
    setUseStock(use_stock: boolean): void
    setUseUnderline(use_underline: boolean): void
    /* Methods of Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
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
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
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
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
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
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
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
    hasDefault(): boolean
    hasFocus(): boolean
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
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(group_cycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
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
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
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
    setNoShowAll(no_show_all: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
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
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Actionable */
    getActionName(): string | null
    getActionTargetValue(): GLib.Variant
    setActionName(action_name?: string | null): void
    setActionTargetValue(target_value?: GLib.Variant | null): void
    setDetailedActionName(detailed_action_name: string): void
    /* Methods of Gtk.Activatable */
    doSetRelatedAction(action: Gtk.Action): void
    getRelatedAction(): Gtk.Action
    getUseActionAppearance(): boolean
    setRelatedAction(action: Gtk.Action): void
    setUseActionAppearance(use_appearance: boolean): void
    syncActionProperties(action?: Gtk.Action | null): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Button */
    vfuncActivate?(): void
    vfuncClicked?(): void
    vfuncEnter?(): void
    vfuncLeave?(): void
    vfuncPressed?(): void
    vfuncReleased?(): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Button */
    connect(sigName: "activate", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "activate", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "activate", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "activate", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "clicked", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "clicked", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "clicked"): void
    on(sigName: "clicked", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "clicked", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "clicked", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "enter", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "enter", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "enter"): void
    on(sigName: "enter", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "enter", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "enter", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "leave", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "leave", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "leave"): void
    on(sigName: "leave", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "leave", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "leave", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "pressed", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "pressed", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "pressed"): void
    on(sigName: "pressed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "pressed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "pressed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "released", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "released", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "released"): void
    on(sigName: "released", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "released", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "released", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "add", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "add", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "check-resize", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "check-resize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "check-resize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "remove", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "remove", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "remove", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "set-focus-child", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "set-focus-child", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "set-focus-child", callback: ((event: StyleSchemeChooserButton, object: Gtk.Widget) => void)): EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "accel-closures-changed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "accel-closures-changed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "button-press-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-press-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-press-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "button-release-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-release-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-release-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "can-activate-accel", callback: ((obj: StyleSchemeChooserButton, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: StyleSchemeChooserButton, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    on(sigName: "can-activate-accel", callback: ((event: StyleSchemeChooserButton, signal_id: number) => boolean)): EventEmitter
    once(sigName: "can-activate-accel", callback: ((event: StyleSchemeChooserButton, signal_id: number) => boolean)): EventEmitter
    off(sigName: "can-activate-accel", callback: ((event: StyleSchemeChooserButton, signal_id: number) => boolean)): EventEmitter
    connect(sigName: "child-notify", callback: ((obj: StyleSchemeChooserButton, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: StyleSchemeChooserButton, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: ((event: StyleSchemeChooserButton, child_property: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "child-notify", callback: ((event: StyleSchemeChooserButton, child_property: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "child-notify", callback: ((event: StyleSchemeChooserButton, child_property: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "composited-changed", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "composited-changed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "composited-changed", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "configure-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventConfigure) => boolean)): EventEmitter
    once(sigName: "configure-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventConfigure) => boolean)): EventEmitter
    off(sigName: "configure-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventConfigure) => boolean)): EventEmitter
    connect(sigName: "damage-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventExpose) => boolean)): EventEmitter
    once(sigName: "damage-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventExpose) => boolean)): EventEmitter
    off(sigName: "damage-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventExpose) => boolean)): EventEmitter
    connect(sigName: "delete-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "delete-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "delete-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "destroy", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "destroy", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "destroy", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "destroy-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "destroy-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "destroy-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "direction-changed", callback: ((obj: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: ((event: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    once(sigName: "direction-changed", callback: ((event: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    off(sigName: "direction-changed", callback: ((event: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    connect(sigName: "drag-begin", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-begin", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-begin", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-delete", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-data-delete", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-data-delete", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-get", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-get", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-get", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-data-received", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-received", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-received", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-drop", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-drop", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-drop", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "drag-end", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-end", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-end", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-failed", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    once(sigName: "drag-failed", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    off(sigName: "drag-failed", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    connect(sigName: "drag-leave", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, time: number) => void)): EventEmitter
    once(sigName: "drag-leave", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, time: number) => void)): EventEmitter
    off(sigName: "drag-leave", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, time: number) => void)): EventEmitter
    connect(sigName: "drag-motion", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-motion", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-motion", callback: ((event: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "draw", callback: ((obj: StyleSchemeChooserButton, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: StyleSchemeChooserButton, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: ((event: StyleSchemeChooserButton, cr: cairo.Context) => boolean)): EventEmitter
    once(sigName: "draw", callback: ((event: StyleSchemeChooserButton, cr: cairo.Context) => boolean)): EventEmitter
    off(sigName: "draw", callback: ((event: StyleSchemeChooserButton, cr: cairo.Context) => boolean)): EventEmitter
    connect(sigName: "enter-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "enter-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "enter-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "event", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "event-after", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "event-after", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "event-after", callback: ((event: StyleSchemeChooserButton, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "focus", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "focus", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "focus", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "focus-in-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-in-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-in-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "focus-out-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-out-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-out-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "grab-broken-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    once(sigName: "grab-broken-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    off(sigName: "grab-broken-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    connect(sigName: "grab-focus", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "grab-focus", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "grab-focus", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "grab-notify", callback: ((obj: StyleSchemeChooserButton, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: StyleSchemeChooserButton, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    on(sigName: "grab-notify", callback: ((event: StyleSchemeChooserButton, was_grabbed: boolean) => void)): EventEmitter
    once(sigName: "grab-notify", callback: ((event: StyleSchemeChooserButton, was_grabbed: boolean) => void)): EventEmitter
    off(sigName: "grab-notify", callback: ((event: StyleSchemeChooserButton, was_grabbed: boolean) => void)): EventEmitter
    connect(sigName: "hide", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "hide", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "hide", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "hide", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "hierarchy-changed", callback: ((obj: StyleSchemeChooserButton, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: StyleSchemeChooserButton, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: ((event: StyleSchemeChooserButton, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "hierarchy-changed", callback: ((event: StyleSchemeChooserButton, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "hierarchy-changed", callback: ((event: StyleSchemeChooserButton, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "key-press-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-press-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-press-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "key-release-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-release-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-release-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "keynav-failed", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "keynav-failed", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "keynav-failed", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "leave-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "leave-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "leave-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "map", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "map", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "map", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "map", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "map-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "map-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "map-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "mnemonic-activate", callback: ((obj: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    on(sigName: "mnemonic-activate", callback: ((event: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): EventEmitter
    once(sigName: "mnemonic-activate", callback: ((event: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): EventEmitter
    off(sigName: "mnemonic-activate", callback: ((event: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): EventEmitter
    connect(sigName: "motion-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventMotion) => boolean)): EventEmitter
    once(sigName: "motion-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventMotion) => boolean)): EventEmitter
    off(sigName: "motion-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventMotion) => boolean)): EventEmitter
    connect(sigName: "move-focus", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): EventEmitter
    once(sigName: "move-focus", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): EventEmitter
    off(sigName: "move-focus", callback: ((event: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): EventEmitter
    connect(sigName: "parent-set", callback: ((obj: StyleSchemeChooserButton, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: StyleSchemeChooserButton, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: ((event: StyleSchemeChooserButton, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "parent-set", callback: ((event: StyleSchemeChooserButton, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "parent-set", callback: ((event: StyleSchemeChooserButton, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "popup-menu", callback: ((obj: StyleSchemeChooserButton) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: StyleSchemeChooserButton) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: ((event: StyleSchemeChooserButton) => boolean)): EventEmitter
    once(sigName: "popup-menu", callback: ((event: StyleSchemeChooserButton) => boolean)): EventEmitter
    off(sigName: "popup-menu", callback: ((event: StyleSchemeChooserButton) => boolean)): EventEmitter
    connect(sigName: "property-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProperty) => boolean)): EventEmitter
    once(sigName: "property-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProperty) => boolean)): EventEmitter
    off(sigName: "property-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProperty) => boolean)): EventEmitter
    connect(sigName: "proximity-in-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-in-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-in-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "proximity-out-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-out-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-out-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "realize", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "realize", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "realize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "realize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "screen-changed", callback: ((obj: StyleSchemeChooserButton, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: StyleSchemeChooserButton, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: ((event: StyleSchemeChooserButton, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    once(sigName: "screen-changed", callback: ((event: StyleSchemeChooserButton, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    off(sigName: "screen-changed", callback: ((event: StyleSchemeChooserButton, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    connect(sigName: "scroll-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventScroll) => boolean)): EventEmitter
    once(sigName: "scroll-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventScroll) => boolean)): EventEmitter
    off(sigName: "scroll-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventScroll) => boolean)): EventEmitter
    connect(sigName: "selection-clear-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-clear-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-clear-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-get", callback: ((obj: StyleSchemeChooserButton, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: StyleSchemeChooserButton, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: ((event: StyleSchemeChooserButton, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "selection-get", callback: ((event: StyleSchemeChooserButton, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "selection-get", callback: ((event: StyleSchemeChooserButton, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "selection-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-received", callback: ((obj: StyleSchemeChooserButton, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: StyleSchemeChooserButton, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: ((event: StyleSchemeChooserButton, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    once(sigName: "selection-received", callback: ((event: StyleSchemeChooserButton, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    off(sigName: "selection-received", callback: ((event: StyleSchemeChooserButton, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    connect(sigName: "selection-request-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-request-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-request-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "show", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "show", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "show", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "show", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "show-help", callback: ((obj: StyleSchemeChooserButton, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: StyleSchemeChooserButton, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: ((event: StyleSchemeChooserButton, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    once(sigName: "show-help", callback: ((event: StyleSchemeChooserButton, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    off(sigName: "show-help", callback: ((event: StyleSchemeChooserButton, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    connect(sigName: "size-allocate", callback: ((obj: StyleSchemeChooserButton, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: StyleSchemeChooserButton, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: ((event: StyleSchemeChooserButton, allocation: Gtk.Allocation) => void)): EventEmitter
    once(sigName: "size-allocate", callback: ((event: StyleSchemeChooserButton, allocation: Gtk.Allocation) => void)): EventEmitter
    off(sigName: "size-allocate", callback: ((event: StyleSchemeChooserButton, allocation: Gtk.Allocation) => void)): EventEmitter
    connect(sigName: "state-changed", callback: ((obj: StyleSchemeChooserButton, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: StyleSchemeChooserButton, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: ((event: StyleSchemeChooserButton, state: Gtk.StateType) => void)): EventEmitter
    once(sigName: "state-changed", callback: ((event: StyleSchemeChooserButton, state: Gtk.StateType) => void)): EventEmitter
    off(sigName: "state-changed", callback: ((event: StyleSchemeChooserButton, state: Gtk.StateType) => void)): EventEmitter
    connect(sigName: "state-flags-changed", callback: ((obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: ((event: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): EventEmitter
    once(sigName: "state-flags-changed", callback: ((event: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): EventEmitter
    off(sigName: "state-flags-changed", callback: ((event: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): EventEmitter
    connect(sigName: "style-set", callback: ((obj: StyleSchemeChooserButton, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: StyleSchemeChooserButton, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    on(sigName: "style-set", callback: ((event: StyleSchemeChooserButton, previous_style?: Gtk.Style | null) => void)): EventEmitter
    once(sigName: "style-set", callback: ((event: StyleSchemeChooserButton, previous_style?: Gtk.Style | null) => void)): EventEmitter
    off(sigName: "style-set", callback: ((event: StyleSchemeChooserButton, previous_style?: Gtk.Style | null) => void)): EventEmitter
    connect(sigName: "style-updated", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "style-updated", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "style-updated", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "touch-event", callback: ((obj: StyleSchemeChooserButton, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: StyleSchemeChooserButton, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: ((event: StyleSchemeChooserButton, object: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "touch-event", callback: ((event: StyleSchemeChooserButton, object: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "touch-event", callback: ((event: StyleSchemeChooserButton, object: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "unmap", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "unmap", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "unmap", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "unmap-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "unmap-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "unmap-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "unrealize", callback: ((obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    once(sigName: "unrealize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    off(sigName: "unrealize", callback: ((event: StyleSchemeChooserButton) => void)): EventEmitter
    connect(sigName: "visibility-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventVisibility) => boolean)): EventEmitter
    once(sigName: "visibility-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventVisibility) => boolean)): EventEmitter
    off(sigName: "visibility-notify-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventVisibility) => boolean)): EventEmitter
    connect(sigName: "window-state-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventWindowState) => boolean)): EventEmitter
    once(sigName: "window-state-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventWindowState) => boolean)): EventEmitter
    off(sigName: "window-state-event", callback: ((event: StyleSchemeChooserButton, event: Gdk.EventWindowState) => boolean)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::always-show-image", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-show-image", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::always-show-image", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::always-show-image", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::image", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::image", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::image", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::image-position", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::image-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::image-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::label", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::label", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::label", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::relief", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relief", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::relief", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::relief", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::use-stock", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-stock", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::use-stock", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::use-stock", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::use-underline", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-underline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::use-underline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::use-underline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::xalign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::xalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::yalign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::yalign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::border-width", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::child", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::composite-child", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::events", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::expand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::halign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::height-request", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-end", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-left", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-right", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-start", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-top", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::opacity", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::parent", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::receives-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::sensitive", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::valign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::width-request", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::action-name", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::action-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::action-name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::action-target", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-target", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::action-target", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::action-target", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::related-action", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::related-action", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::related-action", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::related-action", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::use-action-appearance", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-action-appearance", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::use-action-appearance", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::use-action-appearance", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: StyleSchemeChooserButton_ConstructProps)
    _init (config?: StyleSchemeChooserButton_ConstructProps): void
    static new(): StyleSchemeChooserButton
    static $gtype: GObject.Type
}
export interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Bin_ConstructProps {
}
export class StyleSchemeChooserWidget {
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    focus_on_click:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Fields of GtkSource.StyleSchemeChooserWidget */
    /* Fields of Gtk.Bin */
    container:Gtk.Container
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance:GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
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
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
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
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
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
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
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
    hasDefault(): boolean
    hasFocus(): boolean
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
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(group_cycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
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
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focus_on_click: boolean): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
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
    setNoShowAll(no_show_all: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
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
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
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
    /* Methods of GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "add", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "add", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "check-resize", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "check-resize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "check-resize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "remove", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "remove", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "remove", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "set-focus-child", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "set-focus-child", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "set-focus-child", callback: ((event: StyleSchemeChooserWidget, object: Gtk.Widget) => void)): EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "accel-closures-changed", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "accel-closures-changed", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "button-press-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-press-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-press-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "button-release-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-release-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-release-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "can-activate-accel", callback: ((obj: StyleSchemeChooserWidget, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: StyleSchemeChooserWidget, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    on(sigName: "can-activate-accel", callback: ((event: StyleSchemeChooserWidget, signal_id: number) => boolean)): EventEmitter
    once(sigName: "can-activate-accel", callback: ((event: StyleSchemeChooserWidget, signal_id: number) => boolean)): EventEmitter
    off(sigName: "can-activate-accel", callback: ((event: StyleSchemeChooserWidget, signal_id: number) => boolean)): EventEmitter
    connect(sigName: "child-notify", callback: ((obj: StyleSchemeChooserWidget, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: StyleSchemeChooserWidget, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: ((event: StyleSchemeChooserWidget, child_property: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "child-notify", callback: ((event: StyleSchemeChooserWidget, child_property: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "child-notify", callback: ((event: StyleSchemeChooserWidget, child_property: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "composited-changed", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "composited-changed", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "composited-changed", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "configure-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventConfigure) => boolean)): EventEmitter
    once(sigName: "configure-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventConfigure) => boolean)): EventEmitter
    off(sigName: "configure-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventConfigure) => boolean)): EventEmitter
    connect(sigName: "damage-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventExpose) => boolean)): EventEmitter
    once(sigName: "damage-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventExpose) => boolean)): EventEmitter
    off(sigName: "damage-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventExpose) => boolean)): EventEmitter
    connect(sigName: "delete-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "delete-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "delete-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "destroy", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "destroy", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "destroy", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "destroy-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "destroy-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "destroy-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "direction-changed", callback: ((obj: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: ((event: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    once(sigName: "direction-changed", callback: ((event: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    off(sigName: "direction-changed", callback: ((event: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    connect(sigName: "drag-begin", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-begin", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-begin", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-delete", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-data-delete", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-data-delete", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-get", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-get", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-get", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-data-received", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-received", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-received", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-drop", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-drop", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-drop", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "drag-end", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-end", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-end", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-failed", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    once(sigName: "drag-failed", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    off(sigName: "drag-failed", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    connect(sigName: "drag-leave", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, time: number) => void)): EventEmitter
    once(sigName: "drag-leave", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, time: number) => void)): EventEmitter
    off(sigName: "drag-leave", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, time: number) => void)): EventEmitter
    connect(sigName: "drag-motion", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-motion", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-motion", callback: ((event: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "draw", callback: ((obj: StyleSchemeChooserWidget, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: StyleSchemeChooserWidget, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: ((event: StyleSchemeChooserWidget, cr: cairo.Context) => boolean)): EventEmitter
    once(sigName: "draw", callback: ((event: StyleSchemeChooserWidget, cr: cairo.Context) => boolean)): EventEmitter
    off(sigName: "draw", callback: ((event: StyleSchemeChooserWidget, cr: cairo.Context) => boolean)): EventEmitter
    connect(sigName: "enter-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "enter-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "enter-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "event-after", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "event-after", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "event-after", callback: ((event: StyleSchemeChooserWidget, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "focus", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "focus", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "focus", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "focus-in-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-in-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-in-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "focus-out-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-out-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-out-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "grab-broken-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    once(sigName: "grab-broken-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    off(sigName: "grab-broken-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    connect(sigName: "grab-focus", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "grab-focus", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "grab-focus", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "grab-notify", callback: ((obj: StyleSchemeChooserWidget, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: StyleSchemeChooserWidget, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    on(sigName: "grab-notify", callback: ((event: StyleSchemeChooserWidget, was_grabbed: boolean) => void)): EventEmitter
    once(sigName: "grab-notify", callback: ((event: StyleSchemeChooserWidget, was_grabbed: boolean) => void)): EventEmitter
    off(sigName: "grab-notify", callback: ((event: StyleSchemeChooserWidget, was_grabbed: boolean) => void)): EventEmitter
    connect(sigName: "hide", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "hide", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "hide", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "hide", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "hierarchy-changed", callback: ((obj: StyleSchemeChooserWidget, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: StyleSchemeChooserWidget, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: ((event: StyleSchemeChooserWidget, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "hierarchy-changed", callback: ((event: StyleSchemeChooserWidget, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "hierarchy-changed", callback: ((event: StyleSchemeChooserWidget, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "key-press-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-press-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-press-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "key-release-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-release-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-release-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "keynav-failed", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "keynav-failed", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "keynav-failed", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "leave-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "leave-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "leave-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "map", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "map", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "map", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "map", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "map-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "map-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "map-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "mnemonic-activate", callback: ((obj: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    on(sigName: "mnemonic-activate", callback: ((event: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): EventEmitter
    once(sigName: "mnemonic-activate", callback: ((event: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): EventEmitter
    off(sigName: "mnemonic-activate", callback: ((event: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): EventEmitter
    connect(sigName: "motion-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventMotion) => boolean)): EventEmitter
    once(sigName: "motion-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventMotion) => boolean)): EventEmitter
    off(sigName: "motion-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventMotion) => boolean)): EventEmitter
    connect(sigName: "move-focus", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): EventEmitter
    once(sigName: "move-focus", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): EventEmitter
    off(sigName: "move-focus", callback: ((event: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): EventEmitter
    connect(sigName: "parent-set", callback: ((obj: StyleSchemeChooserWidget, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: StyleSchemeChooserWidget, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: ((event: StyleSchemeChooserWidget, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "parent-set", callback: ((event: StyleSchemeChooserWidget, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "parent-set", callback: ((event: StyleSchemeChooserWidget, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "popup-menu", callback: ((obj: StyleSchemeChooserWidget) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: StyleSchemeChooserWidget) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: ((event: StyleSchemeChooserWidget) => boolean)): EventEmitter
    once(sigName: "popup-menu", callback: ((event: StyleSchemeChooserWidget) => boolean)): EventEmitter
    off(sigName: "popup-menu", callback: ((event: StyleSchemeChooserWidget) => boolean)): EventEmitter
    connect(sigName: "property-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProperty) => boolean)): EventEmitter
    once(sigName: "property-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProperty) => boolean)): EventEmitter
    off(sigName: "property-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProperty) => boolean)): EventEmitter
    connect(sigName: "proximity-in-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-in-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-in-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "proximity-out-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-out-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-out-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "realize", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "realize", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "realize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "realize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "screen-changed", callback: ((obj: StyleSchemeChooserWidget, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: StyleSchemeChooserWidget, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: ((event: StyleSchemeChooserWidget, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    once(sigName: "screen-changed", callback: ((event: StyleSchemeChooserWidget, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    off(sigName: "screen-changed", callback: ((event: StyleSchemeChooserWidget, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    connect(sigName: "scroll-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventScroll) => boolean)): EventEmitter
    once(sigName: "scroll-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventScroll) => boolean)): EventEmitter
    off(sigName: "scroll-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventScroll) => boolean)): EventEmitter
    connect(sigName: "selection-clear-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-clear-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-clear-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-get", callback: ((obj: StyleSchemeChooserWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: StyleSchemeChooserWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: ((event: StyleSchemeChooserWidget, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "selection-get", callback: ((event: StyleSchemeChooserWidget, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "selection-get", callback: ((event: StyleSchemeChooserWidget, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "selection-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-received", callback: ((obj: StyleSchemeChooserWidget, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: StyleSchemeChooserWidget, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: ((event: StyleSchemeChooserWidget, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    once(sigName: "selection-received", callback: ((event: StyleSchemeChooserWidget, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    off(sigName: "selection-received", callback: ((event: StyleSchemeChooserWidget, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    connect(sigName: "selection-request-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-request-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-request-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "show", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "show", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "show", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "show", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "show-help", callback: ((obj: StyleSchemeChooserWidget, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: StyleSchemeChooserWidget, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: ((event: StyleSchemeChooserWidget, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    once(sigName: "show-help", callback: ((event: StyleSchemeChooserWidget, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    off(sigName: "show-help", callback: ((event: StyleSchemeChooserWidget, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    connect(sigName: "size-allocate", callback: ((obj: StyleSchemeChooserWidget, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: StyleSchemeChooserWidget, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: ((event: StyleSchemeChooserWidget, allocation: Gtk.Allocation) => void)): EventEmitter
    once(sigName: "size-allocate", callback: ((event: StyleSchemeChooserWidget, allocation: Gtk.Allocation) => void)): EventEmitter
    off(sigName: "size-allocate", callback: ((event: StyleSchemeChooserWidget, allocation: Gtk.Allocation) => void)): EventEmitter
    connect(sigName: "state-changed", callback: ((obj: StyleSchemeChooserWidget, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: StyleSchemeChooserWidget, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: ((event: StyleSchemeChooserWidget, state: Gtk.StateType) => void)): EventEmitter
    once(sigName: "state-changed", callback: ((event: StyleSchemeChooserWidget, state: Gtk.StateType) => void)): EventEmitter
    off(sigName: "state-changed", callback: ((event: StyleSchemeChooserWidget, state: Gtk.StateType) => void)): EventEmitter
    connect(sigName: "state-flags-changed", callback: ((obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: ((event: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): EventEmitter
    once(sigName: "state-flags-changed", callback: ((event: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): EventEmitter
    off(sigName: "state-flags-changed", callback: ((event: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): EventEmitter
    connect(sigName: "style-set", callback: ((obj: StyleSchemeChooserWidget, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: StyleSchemeChooserWidget, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    on(sigName: "style-set", callback: ((event: StyleSchemeChooserWidget, previous_style?: Gtk.Style | null) => void)): EventEmitter
    once(sigName: "style-set", callback: ((event: StyleSchemeChooserWidget, previous_style?: Gtk.Style | null) => void)): EventEmitter
    off(sigName: "style-set", callback: ((event: StyleSchemeChooserWidget, previous_style?: Gtk.Style | null) => void)): EventEmitter
    connect(sigName: "style-updated", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "style-updated", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "style-updated", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "touch-event", callback: ((obj: StyleSchemeChooserWidget, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: StyleSchemeChooserWidget, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: ((event: StyleSchemeChooserWidget, object: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "touch-event", callback: ((event: StyleSchemeChooserWidget, object: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "touch-event", callback: ((event: StyleSchemeChooserWidget, object: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "unmap", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "unmap", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "unmap", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "unmap-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "unmap-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "unmap-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "unrealize", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    once(sigName: "unrealize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    off(sigName: "unrealize", callback: ((event: StyleSchemeChooserWidget) => void)): EventEmitter
    connect(sigName: "visibility-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventVisibility) => boolean)): EventEmitter
    once(sigName: "visibility-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventVisibility) => boolean)): EventEmitter
    off(sigName: "visibility-notify-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventVisibility) => boolean)): EventEmitter
    connect(sigName: "window-state-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventWindowState) => boolean)): EventEmitter
    once(sigName: "window-state-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventWindowState) => boolean)): EventEmitter
    off(sigName: "window-state-event", callback: ((event: StyleSchemeChooserWidget, event: Gdk.EventWindowState) => boolean)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::border-width", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::child", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::composite-child", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::events", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::expand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::halign", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::height-request", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-end", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-left", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-right", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-start", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-top", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::opacity", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::parent", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::receives-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::sensitive", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::valign", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::width-request", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style-scheme", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: StyleSchemeChooserWidget_ConstructProps)
    _init (config?: StyleSchemeChooserWidget_ConstructProps): void
    static new(): StyleSchemeChooserWidget
    static $gtype: GObject.Type
}
export interface StyleSchemeManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?:string[]
}
export class StyleSchemeManager {
    /* Properties of GtkSource.StyleSchemeManager */
    readonly scheme_ids:string[]
    search_path:string[]
    /* Fields of GtkSource.StyleSchemeManager */
    parent:GObject.Object
    priv:StyleSchemeManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.StyleSchemeManager */
    appendSearchPath(path: string): void
    forceRescan(): void
    getScheme(scheme_id: string): StyleScheme
    getSchemeIds(): string[] | null
    getSearchPath(): string[]
    prependSearchPath(path: string): void
    setSearchPath(path?: string[] | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scheme-ids", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-ids", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-ids", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scheme-ids", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scheme-ids", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::search-path", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::search-path", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::search-path", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: StyleSchemeManager_ConstructProps)
    _init (config?: StyleSchemeManager_ConstructProps): void
    static new(): StyleSchemeManager
    static getDefault(): StyleSchemeManager
    static $gtype: GObject.Type
}
export interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    draw_spaces?:boolean
    draw_spaces_set?:boolean
}
export class Tag {
    /* Properties of GtkSource.Tag */
    draw_spaces:boolean
    draw_spaces_set:boolean
    /* Properties of Gtk.TextTag */
    accumulative_margin:boolean
    background:string
    background_full_height:boolean
    background_full_height_set:boolean
    background_gdk:Gdk.Color
    background_rgba:Gdk.RGBA
    background_set:boolean
    direction:Gtk.TextDirection
    editable:boolean
    editable_set:boolean
    fallback:boolean
    fallback_set:boolean
    family:string
    family_set:boolean
    font:string
    font_desc:Pango.FontDescription
    font_features:string
    font_features_set:boolean
    foreground:string
    foreground_gdk:Gdk.Color
    foreground_rgba:Gdk.RGBA
    foreground_set:boolean
    indent:number
    indent_set:boolean
    invisible:boolean
    invisible_set:boolean
    justification:Gtk.Justification
    justification_set:boolean
    language:string
    language_set:boolean
    left_margin:number
    left_margin_set:boolean
    letter_spacing:number
    letter_spacing_set:boolean
    paragraph_background:string
    paragraph_background_gdk:Gdk.Color
    paragraph_background_rgba:Gdk.RGBA
    paragraph_background_set:boolean
    pixels_above_lines:number
    pixels_above_lines_set:boolean
    pixels_below_lines:number
    pixels_below_lines_set:boolean
    pixels_inside_wrap:number
    pixels_inside_wrap_set:boolean
    right_margin:number
    right_margin_set:boolean
    rise:number
    rise_set:boolean
    scale:number
    scale_set:boolean
    size:number
    size_points:number
    size_set:boolean
    stretch:Pango.Stretch
    stretch_set:boolean
    strikethrough:boolean
    strikethrough_rgba:Gdk.RGBA
    strikethrough_rgba_set:boolean
    strikethrough_set:boolean
    style:Pango.Style
    style_set:boolean
    tabs:Pango.TabArray
    tabs_set:boolean
    underline:Pango.Underline
    underline_rgba:Gdk.RGBA
    underline_rgba_set:boolean
    underline_set:boolean
    variant:Pango.Variant
    variant_set:boolean
    weight:number
    weight_set:boolean
    wrap_mode:Gtk.WrapMode
    wrap_mode_set:boolean
    /* Fields of GtkSource.Tag */
    parent_instance:Gtk.TextTag
    /* Fields of Gtk.TextTag */
    priv:Gtk.TextTagPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gtk.TextTag */
    changed(size_changed: boolean): void
    event(event_object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): boolean
    getPriority(): number
    setPriority(priority: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gtk.TextTag */
    vfuncEvent?(event_object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TextTag */
    connect(sigName: "event", callback: ((obj: Tag, object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: Tag, object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean)): number
    emit(sigName: "event", object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): void
    on(sigName: "event", callback: ((event: Tag, object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean)): EventEmitter
    once(sigName: "event", callback: ((event: Tag, object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean)): EventEmitter
    off(sigName: "event", callback: ((event: Tag, object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Tag, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Tag, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Tag, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::draw-spaces", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::draw-spaces-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::draw-spaces-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::draw-spaces-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::accumulative-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accumulative-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accumulative-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::accumulative-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::accumulative-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-full-height", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-full-height", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-full-height", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-full-height", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-full-height-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-full-height-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-full-height-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-full-height-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::direction", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::direction", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::direction", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::editable", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::editable-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::editable-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::editable-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::fallback", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::fallback", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::fallback", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::fallback-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::fallback-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::fallback-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::family", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::family", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::family", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::family-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::family-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::family-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::font", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::font", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::font", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::font-desc", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::font-desc", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::font-desc", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::font-features", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-features", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::font-features", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::font-features", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::font-features-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-features-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::font-features-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::font-features-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::foreground", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::foreground", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::foreground", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::foreground-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::foreground-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::foreground-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::foreground-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::foreground-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::foreground-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::foreground-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::foreground-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::foreground-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::invisible", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invisible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::invisible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::invisible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::invisible-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invisible-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::invisible-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::invisible-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::justification", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::justification-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::justification-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::justification-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::language", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::language", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::language", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::language-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::language-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::language-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::left-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::left-margin-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::left-margin-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::left-margin-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::letter-spacing", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::letter-spacing", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::letter-spacing", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::letter-spacing", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::letter-spacing-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::letter-spacing-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::letter-spacing-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::letter-spacing-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::paragraph-background", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::paragraph-background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::paragraph-background", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::paragraph-background-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::paragraph-background-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::paragraph-background-gdk", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::paragraph-background-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::paragraph-background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::paragraph-background-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::paragraph-background-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::paragraph-background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::paragraph-background-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-above-lines-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-above-lines-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-above-lines-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-below-lines-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-below-lines-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-below-lines-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-inside-wrap-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-inside-wrap-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-inside-wrap-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::right-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::right-margin-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::right-margin-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::right-margin-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::rise", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rise", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::rise", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::rise", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::rise-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rise-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::rise-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::rise-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::size", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::size", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::size-points", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-points", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::size-points", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::size-points", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::size-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::size-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::size-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::stretch", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stretch", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::stretch", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::stretch", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::stretch-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stretch-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::stretch-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::stretch-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::strikethrough", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::strikethrough", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::strikethrough", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::strikethrough-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::strikethrough-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::strikethrough-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::strikethrough-rgba-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-rgba-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::strikethrough-rgba-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::strikethrough-rgba-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::strikethrough-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::strikethrough-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::strikethrough-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tabs", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tabs-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tabs-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tabs-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::underline", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::underline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::underline", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::underline-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::underline-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::underline-rgba", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::underline-rgba-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-rgba-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::underline-rgba-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::underline-rgba-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::underline-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::underline-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::underline-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::variant", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variant", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::variant", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::variant", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::variant-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variant-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::variant-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::variant-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::weight", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::weight", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::weight", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::weight", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::weight-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::weight-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::weight-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::weight-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::wrap-mode-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::wrap-mode-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::wrap-mode-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Tag_ConstructProps)
    _init (config?: Tag_ConstructProps): void
    static new(name?: string | null): Tag
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends Gtk.TextView_ConstructProps {
    auto_indent?:boolean
    background_pattern?:BackgroundPatternType
    draw_spaces?:DrawSpacesFlags
    highlight_current_line?:boolean
    indent_on_tab?:boolean
    indent_width?:number
    insert_spaces_instead_of_tabs?:boolean
    right_margin_position?:number
    show_line_marks?:boolean
    show_line_numbers?:boolean
    show_right_margin?:boolean
    smart_backspace?:boolean
    smart_home_end?:SmartHomeEndType
    tab_width?:number
}
export class View {
    /* Properties of GtkSource.View */
    auto_indent:boolean
    background_pattern:BackgroundPatternType
    readonly completion:Completion
    draw_spaces:DrawSpacesFlags
    highlight_current_line:boolean
    indent_on_tab:boolean
    indent_width:number
    insert_spaces_instead_of_tabs:boolean
    right_margin_position:number
    show_line_marks:boolean
    show_line_numbers:boolean
    show_right_margin:boolean
    smart_backspace:boolean
    smart_home_end:SmartHomeEndType
    readonly space_drawer:SpaceDrawer
    tab_width:number
    /* Properties of Gtk.TextView */
    accepts_tab:boolean
    bottom_margin:number
    buffer:Gtk.TextBuffer
    cursor_visible:boolean
    editable:boolean
    im_module:string
    indent:number
    input_hints:Gtk.InputHints
    input_purpose:Gtk.InputPurpose
    justification:Gtk.Justification
    left_margin:number
    monospace:boolean
    overwrite:boolean
    pixels_above_lines:number
    pixels_below_lines:number
    pixels_inside_wrap:number
    populate_all:boolean
    right_margin:number
    tabs:Pango.TabArray
    top_margin:number
    wrap_mode:Gtk.WrapMode
    /* Properties of Gtk.Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
    focus_on_click:boolean
    halign:Gtk.Align
    has_default:boolean
    has_focus:boolean
    has_tooltip:boolean
    height_request:number
    hexpand:boolean
    hexpand_set:boolean
    is_focus:boolean
    margin:number
    margin_bottom:number
    margin_end:number
    margin_left:number
    margin_right:number
    margin_start:number
    margin_top:number
    name:string
    no_show_all:boolean
    opacity:number
    parent:Gtk.Container
    receives_default:boolean
    readonly scale_factor:number
    sensitive:boolean
    style:Gtk.Style
    tooltip_markup:string
    tooltip_text:string
    valign:Gtk.Align
    vexpand:boolean
    vexpand_set:boolean
    visible:boolean
    width_request:number
    readonly window:Gdk.Window
    /* Properties of Gtk.Scrollable */
    hadjustment:Gtk.Adjustment
    hscroll_policy:Gtk.ScrollablePolicy
    vadjustment:Gtk.Adjustment
    vscroll_policy:Gtk.ScrollablePolicy
    /* Fields of GtkSource.View */
    priv:ViewPrivate
    /* Fields of Gtk.TextView */
    parent_instance:Gtk.Container
    /* Fields of Gtk.Container */
    widget:Gtk.Widget
    /* Fields of Gtk.Widget */
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:GObject.TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getDrawSpaces(): DrawSpacesFlags
    getGutter(window_type: Gtk.TextWindowType): Gutter
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
    setBackgroundPattern(background_pattern: BackgroundPatternType): void
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
    setSmartBackspace(smart_backspace: boolean): void
    setSmartHomeEnd(smart_home_end: SmartHomeEndType): void
    setTabWidth(width: number): void
    unindentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Methods of Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addChildInWindow(child: Gtk.Widget, which_window: Gtk.TextWindowType, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBorderWindowSize(type: Gtk.TextWindowType): number
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getDefaultAttributes(): Gtk.TextAttributes
    getEditable(): boolean
    getHadjustment(): Gtk.Adjustment
    getIndent(): number
    getInputHints(): Gtk.InputHints
    getInputPurpose(): Gtk.InputPurpose
    getIterAtLocation(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtPosition(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    getIterLocation(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    getJustification(): Gtk.Justification
    getLeftMargin(): number
    getLineAtY(y: number): [ /* target_iter */ Gtk.TextIter, /* line_top */ number ]
    getLineYrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVadjustment(): Gtk.Adjustment
    getVisibleRect(): /* visible_rect */ Gdk.Rectangle
    getWindowType(window: Gdk.Window): Gtk.TextWindowType
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.EventKey): boolean
    moveChild(child: Gtk.Widget, xpos: number, ypos: number): void
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    setAcceptsTab(accepts_tab: boolean): void
    setBorderWindowSize(type: Gtk.TextWindowType, size: number): void
    setBottomMargin(bottom_margin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
    setIndent(indent: number): void
    setInputHints(hints: Gtk.InputHints): void
    setInputPurpose(purpose: Gtk.InputPurpose): void
    setJustification(justification: Gtk.Justification): void
    setLeftMargin(left_margin: number): void
    setMonospace(monospace: boolean): void
    setOverwrite(overwrite: boolean): void
    setPixelsAboveLines(pixels_above_lines: number): void
    setPixelsBelowLines(pixels_below_lines: number): void
    setPixelsInsideWrap(pixels_inside_wrap: number): void
    setRightMargin(right_margin: number): void
    setTabs(tabs: Pango.TabArray): void
    setTopMargin(top_margin: number): void
    setWrapMode(wrap_mode: Gtk.WrapMode): void
    startsDisplayLine(iter: Gtk.TextIter): boolean
    windowToBufferCoords(win: Gtk.TextWindowType, window_x: number, window_y: number): [ /* buffer_x */ number | null, /* buffer_y */ number | null ]
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, property_name: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(border_width: number): void
    setFocusChain(focusable_widgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needs_redraws: boolean): void
    setResizeMode(resize_mode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signal_id: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(child_property: string): void
    classPath(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    dragDestSetTargetList(target_list?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(track_motion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(icon_name: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stock_id: string): void
    dragSourceSetTargetList(target_list?: Gtk.TargetList | null): void
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
    getAncestor(widget_type: GObject.Type): Gtk.Widget | null
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
    getPreferredHeight(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    getPreferredSize(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
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
    getTemplateChild(widget_type: GObject.Type, name: string): GObject.Object
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
    hasDefault(): boolean
    hasFocus(): boolean
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
    isFocus(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(group_cycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(font_desc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    overrideFont(font_desc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
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
    removeAccelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(app_paintable: boolean): void
    setCanDefault(can_default: boolean): void
    setCanFocus(can_focus: boolean): void
    setChildVisible(is_visible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(double_buffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focus_on_click: boolean): void
    setFontMap(font_map?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(has_tooltip: boolean): void
    setHasWindow(has_window: boolean): void
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
    setNoShowAll(no_show_all: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parent_window: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receives_default: boolean): void
    setRedrawOnAllocate(redraw_on_allocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(support_multidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(custom_window?: Gtk.Window | null): void
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
    styleGetProperty(property_name: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
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
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of GtkSource.View */
    vfuncLineMarkActivated?(iter: Gtk.TextIter, event: Gdk.Event): void
    vfuncMoveLines?(copy: boolean, step: number): void
    vfuncMoveWords?(step: number): void
    vfuncRedo?(): void
    vfuncShowCompletion?(): void
    vfuncUndo?(): void
    /* Virtual methods of Gtk.TextView */
    vfuncBackspace?(): void
    vfuncCopyClipboard?(): void
    vfuncCutClipboard?(): void
    vfuncDeleteFromCursor?(type: Gtk.DeleteType, count: number): void
    vfuncDrawLayer?(layer: Gtk.TextViewLayer, cr: cairo.Context): void
    vfuncExtendSelection?(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfuncInsertAtCursor?(str: string): void
    vfuncInsertEmoji?(): void
    vfuncMoveCursor?(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfuncPasteClipboard?(): void
    vfuncPopulatePopup?(popup: Gtk.Widget): void
    vfuncSetAnchor?(): void
    vfuncToggleOverwrite?(): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd?(widget: Gtk.Widget): void
    vfuncCheckResize?(): void
    vfuncChildType?(): GObject.Type
    vfuncCompositeName?(child: Gtk.Widget): string
    vfuncForall?(include_internals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild?(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove?(widget: Gtk.Widget): void
    vfuncSetChildProperty?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation?(baseline: number): void
    vfuncAdjustBaselineRequest?(minimum_baseline: number, natural_baseline: number): void
    vfuncAdjustSizeAllocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfuncAdjustSizeRequest?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfuncButtonPressEvent?(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent?(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel?(signal_id: number): boolean
    vfuncChildNotify?(child_property: GObject.ParamSpec): void
    vfuncCompositedChanged?(): void
    vfuncComputeExpand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfuncConfigureEvent?(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent?(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent?(event: Gdk.EventAny): boolean
    vfuncDestroy?(): void
    vfuncDestroyEvent?(event: Gdk.EventAny): boolean
    vfuncDirectionChanged?(previous_direction: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin?(context: Gdk.DragContext): void
    vfuncDragDataDelete?(context: Gdk.DragContext): void
    vfuncDragDataGet?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDataReceived?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncDragDrop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDragEnd?(context: Gdk.DragContext): void
    vfuncDragFailed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave?(context: Gdk.DragContext, time_: number): void
    vfuncDragMotion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfuncDraw?(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncEvent?(event: Gdk.Event): boolean
    vfuncFocus?(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent?(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent?(event: Gdk.EventFocus): boolean
    vfuncGetAccessible?(): Atk.Object
    vfuncGetPreferredHeight?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfuncGetPreferredHeightForWidth?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfuncGetPreferredWidth?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetPreferredWidthForHeight?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfuncGetRequestMode?(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent?(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus?(): void
    vfuncGrabNotify?(was_grabbed: boolean): void
    vfuncHide?(): void
    vfuncHierarchyChanged?(previous_toplevel: Gtk.Widget): void
    vfuncKeyPressEvent?(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent?(event: Gdk.EventKey): boolean
    vfuncKeynavFailed?(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent?(event: Gdk.EventCrossing): boolean
    vfuncMap?(): void
    vfuncMapEvent?(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate?(group_cycling: boolean): boolean
    vfuncMotionNotifyEvent?(event: Gdk.EventMotion): boolean
    vfuncMoveFocus?(direction: Gtk.DirectionType): void
    vfuncParentSet?(previous_parent: Gtk.Widget): void
    vfuncPopupMenu?(): boolean
    vfuncPropertyNotifyEvent?(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent?(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent?(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion?(region: cairo.Region): void
    vfuncRealize?(): void
    vfuncScreenChanged?(previous_screen: Gdk.Screen): void
    vfuncScrollEvent?(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionGet?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfuncSelectionNotifyEvent?(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived?(selection_data: Gtk.SelectionData, time_: number): void
    vfuncSelectionRequestEvent?(event: Gdk.EventSelection): boolean
    vfuncShow?(): void
    vfuncShowAll?(): void
    vfuncShowHelp?(help_type: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate?(allocation: Gtk.Allocation): void
    vfuncStateChanged?(previous_state: Gtk.StateType): void
    vfuncStateFlagsChanged?(previous_state_flags: Gtk.StateFlags): void
    vfuncStyleSet?(previous_style: Gtk.Style): void
    vfuncStyleUpdated?(): void
    vfuncTouchEvent?(event: Gdk.EventTouch): boolean
    vfuncUnmap?(): void
    vfuncUnmapEvent?(event: Gdk.EventAny): boolean
    vfuncUnrealize?(): void
    vfuncVisibilityNotifyEvent?(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: ((obj: View, case_type: ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: ((obj: View, case_type: ChangeCaseType) => void)): number
    emit(sigName: "change-case", case_type: ChangeCaseType): void
    on(sigName: "change-case", callback: ((event: View, case_type: ChangeCaseType) => void)): EventEmitter
    once(sigName: "change-case", callback: ((event: View, case_type: ChangeCaseType) => void)): EventEmitter
    off(sigName: "change-case", callback: ((event: View, case_type: ChangeCaseType) => void)): EventEmitter
    connect(sigName: "change-number", callback: ((obj: View, count: number) => void)): number
    connect_after(sigName: "change-number", callback: ((obj: View, count: number) => void)): number
    emit(sigName: "change-number", count: number): void
    on(sigName: "change-number", callback: ((event: View, count: number) => void)): EventEmitter
    once(sigName: "change-number", callback: ((event: View, count: number) => void)): EventEmitter
    off(sigName: "change-number", callback: ((event: View, count: number) => void)): EventEmitter
    connect(sigName: "join-lines", callback: ((obj: View) => void)): number
    connect_after(sigName: "join-lines", callback: ((obj: View) => void)): number
    emit(sigName: "join-lines"): void
    on(sigName: "join-lines", callback: ((event: View) => void)): EventEmitter
    once(sigName: "join-lines", callback: ((event: View) => void)): EventEmitter
    off(sigName: "join-lines", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "line-mark-activated", callback: ((obj: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    connect_after(sigName: "line-mark-activated", callback: ((obj: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, event: Gdk.Event): void
    on(sigName: "line-mark-activated", callback: ((event: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "line-mark-activated", callback: ((event: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "line-mark-activated", callback: ((event: View, iter: Gtk.TextIter, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "move-lines", callback: ((obj: View, copy: boolean, count: number) => void)): number
    connect_after(sigName: "move-lines", callback: ((obj: View, copy: boolean, count: number) => void)): number
    emit(sigName: "move-lines", copy: boolean, count: number): void
    on(sigName: "move-lines", callback: ((event: View, copy: boolean, count: number) => void)): EventEmitter
    once(sigName: "move-lines", callback: ((event: View, copy: boolean, count: number) => void)): EventEmitter
    off(sigName: "move-lines", callback: ((event: View, copy: boolean, count: number) => void)): EventEmitter
    connect(sigName: "move-to-matching-bracket", callback: ((obj: View, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-to-matching-bracket", callback: ((obj: View, extend_selection: boolean) => void)): number
    emit(sigName: "move-to-matching-bracket", extend_selection: boolean): void
    on(sigName: "move-to-matching-bracket", callback: ((event: View, extend_selection: boolean) => void)): EventEmitter
    once(sigName: "move-to-matching-bracket", callback: ((event: View, extend_selection: boolean) => void)): EventEmitter
    off(sigName: "move-to-matching-bracket", callback: ((event: View, extend_selection: boolean) => void)): EventEmitter
    connect(sigName: "move-words", callback: ((obj: View, count: number) => void)): number
    connect_after(sigName: "move-words", callback: ((obj: View, count: number) => void)): number
    emit(sigName: "move-words", count: number): void
    on(sigName: "move-words", callback: ((event: View, count: number) => void)): EventEmitter
    once(sigName: "move-words", callback: ((event: View, count: number) => void)): EventEmitter
    off(sigName: "move-words", callback: ((event: View, count: number) => void)): EventEmitter
    connect(sigName: "redo", callback: ((obj: View) => void)): number
    connect_after(sigName: "redo", callback: ((obj: View) => void)): number
    emit(sigName: "redo"): void
    on(sigName: "redo", callback: ((event: View) => void)): EventEmitter
    once(sigName: "redo", callback: ((event: View) => void)): EventEmitter
    off(sigName: "redo", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "show-completion", callback: ((obj: View) => void)): number
    connect_after(sigName: "show-completion", callback: ((obj: View) => void)): number
    emit(sigName: "show-completion"): void
    on(sigName: "show-completion", callback: ((event: View) => void)): EventEmitter
    once(sigName: "show-completion", callback: ((event: View) => void)): EventEmitter
    off(sigName: "show-completion", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "smart-home-end", callback: ((obj: View, iter: Gtk.TextIter, count: number) => void)): number
    connect_after(sigName: "smart-home-end", callback: ((obj: View, iter: Gtk.TextIter, count: number) => void)): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    on(sigName: "smart-home-end", callback: ((event: View, iter: Gtk.TextIter, count: number) => void)): EventEmitter
    once(sigName: "smart-home-end", callback: ((event: View, iter: Gtk.TextIter, count: number) => void)): EventEmitter
    off(sigName: "smart-home-end", callback: ((event: View, iter: Gtk.TextIter, count: number) => void)): EventEmitter
    connect(sigName: "undo", callback: ((obj: View) => void)): number
    connect_after(sigName: "undo", callback: ((obj: View) => void)): number
    emit(sigName: "undo"): void
    on(sigName: "undo", callback: ((event: View) => void)): EventEmitter
    once(sigName: "undo", callback: ((event: View) => void)): EventEmitter
    off(sigName: "undo", callback: ((event: View) => void)): EventEmitter
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: ((obj: View) => void)): number
    connect_after(sigName: "backspace", callback: ((obj: View) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: ((event: View) => void)): EventEmitter
    once(sigName: "backspace", callback: ((event: View) => void)): EventEmitter
    off(sigName: "backspace", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "copy-clipboard", callback: ((obj: View) => void)): number
    connect_after(sigName: "copy-clipboard", callback: ((obj: View) => void)): number
    emit(sigName: "copy-clipboard"): void
    on(sigName: "copy-clipboard", callback: ((event: View) => void)): EventEmitter
    once(sigName: "copy-clipboard", callback: ((event: View) => void)): EventEmitter
    off(sigName: "copy-clipboard", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "cut-clipboard", callback: ((obj: View) => void)): number
    connect_after(sigName: "cut-clipboard", callback: ((obj: View) => void)): number
    emit(sigName: "cut-clipboard"): void
    on(sigName: "cut-clipboard", callback: ((event: View) => void)): EventEmitter
    once(sigName: "cut-clipboard", callback: ((event: View) => void)): EventEmitter
    off(sigName: "cut-clipboard", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "delete-from-cursor", callback: ((obj: View, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: ((obj: View, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    on(sigName: "delete-from-cursor", callback: ((event: View, type: Gtk.DeleteType, count: number) => void)): EventEmitter
    once(sigName: "delete-from-cursor", callback: ((event: View, type: Gtk.DeleteType, count: number) => void)): EventEmitter
    off(sigName: "delete-from-cursor", callback: ((event: View, type: Gtk.DeleteType, count: number) => void)): EventEmitter
    connect(sigName: "extend-selection", callback: ((obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: ((obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    on(sigName: "extend-selection", callback: ((event: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): EventEmitter
    once(sigName: "extend-selection", callback: ((event: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): EventEmitter
    off(sigName: "extend-selection", callback: ((event: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): EventEmitter
    connect(sigName: "insert-at-cursor", callback: ((obj: View, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: ((obj: View, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    on(sigName: "insert-at-cursor", callback: ((event: View, string: string) => void)): EventEmitter
    once(sigName: "insert-at-cursor", callback: ((event: View, string: string) => void)): EventEmitter
    off(sigName: "insert-at-cursor", callback: ((event: View, string: string) => void)): EventEmitter
    connect(sigName: "insert-emoji", callback: ((obj: View) => void)): number
    connect_after(sigName: "insert-emoji", callback: ((obj: View) => void)): number
    emit(sigName: "insert-emoji"): void
    on(sigName: "insert-emoji", callback: ((event: View) => void)): EventEmitter
    once(sigName: "insert-emoji", callback: ((event: View) => void)): EventEmitter
    off(sigName: "insert-emoji", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "move-cursor", callback: ((obj: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: ((obj: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    on(sigName: "move-cursor", callback: ((event: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): EventEmitter
    once(sigName: "move-cursor", callback: ((event: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): EventEmitter
    off(sigName: "move-cursor", callback: ((event: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): EventEmitter
    connect(sigName: "move-viewport", callback: ((obj: View, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: ((obj: View, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    on(sigName: "move-viewport", callback: ((event: View, step: Gtk.ScrollStep, count: number) => void)): EventEmitter
    once(sigName: "move-viewport", callback: ((event: View, step: Gtk.ScrollStep, count: number) => void)): EventEmitter
    off(sigName: "move-viewport", callback: ((event: View, step: Gtk.ScrollStep, count: number) => void)): EventEmitter
    connect(sigName: "paste-clipboard", callback: ((obj: View) => void)): number
    connect_after(sigName: "paste-clipboard", callback: ((obj: View) => void)): number
    emit(sigName: "paste-clipboard"): void
    on(sigName: "paste-clipboard", callback: ((event: View) => void)): EventEmitter
    once(sigName: "paste-clipboard", callback: ((event: View) => void)): EventEmitter
    off(sigName: "paste-clipboard", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "populate-popup", callback: ((obj: View, popup: Gtk.Widget) => void)): number
    connect_after(sigName: "populate-popup", callback: ((obj: View, popup: Gtk.Widget) => void)): number
    emit(sigName: "populate-popup", popup: Gtk.Widget): void
    on(sigName: "populate-popup", callback: ((event: View, popup: Gtk.Widget) => void)): EventEmitter
    once(sigName: "populate-popup", callback: ((event: View, popup: Gtk.Widget) => void)): EventEmitter
    off(sigName: "populate-popup", callback: ((event: View, popup: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "preedit-changed", callback: ((obj: View, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: ((obj: View, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    on(sigName: "preedit-changed", callback: ((event: View, preedit: string) => void)): EventEmitter
    once(sigName: "preedit-changed", callback: ((event: View, preedit: string) => void)): EventEmitter
    off(sigName: "preedit-changed", callback: ((event: View, preedit: string) => void)): EventEmitter
    connect(sigName: "select-all", callback: ((obj: View, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: ((obj: View, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    on(sigName: "select-all", callback: ((event: View, select: boolean) => void)): EventEmitter
    once(sigName: "select-all", callback: ((event: View, select: boolean) => void)): EventEmitter
    off(sigName: "select-all", callback: ((event: View, select: boolean) => void)): EventEmitter
    connect(sigName: "set-anchor", callback: ((obj: View) => void)): number
    connect_after(sigName: "set-anchor", callback: ((obj: View) => void)): number
    emit(sigName: "set-anchor"): void
    on(sigName: "set-anchor", callback: ((event: View) => void)): EventEmitter
    once(sigName: "set-anchor", callback: ((event: View) => void)): EventEmitter
    off(sigName: "set-anchor", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "toggle-cursor-visible", callback: ((obj: View) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: ((obj: View) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    on(sigName: "toggle-cursor-visible", callback: ((event: View) => void)): EventEmitter
    once(sigName: "toggle-cursor-visible", callback: ((event: View) => void)): EventEmitter
    off(sigName: "toggle-cursor-visible", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "toggle-overwrite", callback: ((obj: View) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: ((obj: View) => void)): number
    emit(sigName: "toggle-overwrite"): void
    on(sigName: "toggle-overwrite", callback: ((event: View) => void)): EventEmitter
    once(sigName: "toggle-overwrite", callback: ((event: View) => void)): EventEmitter
    off(sigName: "toggle-overwrite", callback: ((event: View) => void)): EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: View, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: ((obj: View, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "add", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "add", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "check-resize", callback: ((obj: View) => void)): number
    connect_after(sigName: "check-resize", callback: ((obj: View) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: ((event: View) => void)): EventEmitter
    once(sigName: "check-resize", callback: ((event: View) => void)): EventEmitter
    off(sigName: "check-resize", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "remove", callback: ((obj: View, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: ((obj: View, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "remove", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "remove", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    connect(sigName: "set-focus-child", callback: ((obj: View, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: ((obj: View, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    once(sigName: "set-focus-child", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    off(sigName: "set-focus-child", callback: ((event: View, object: Gtk.Widget) => void)): EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: View) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: ((obj: View) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: ((event: View) => void)): EventEmitter
    once(sigName: "accel-closures-changed", callback: ((event: View) => void)): EventEmitter
    off(sigName: "accel-closures-changed", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "button-press-event", callback: ((obj: View, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: ((obj: View, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: ((event: View, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-press-event", callback: ((event: View, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-press-event", callback: ((event: View, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "button-release-event", callback: ((obj: View, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: ((obj: View, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: ((event: View, event: Gdk.EventButton) => boolean)): EventEmitter
    once(sigName: "button-release-event", callback: ((event: View, event: Gdk.EventButton) => boolean)): EventEmitter
    off(sigName: "button-release-event", callback: ((event: View, event: Gdk.EventButton) => boolean)): EventEmitter
    connect(sigName: "can-activate-accel", callback: ((obj: View, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: ((obj: View, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    on(sigName: "can-activate-accel", callback: ((event: View, signal_id: number) => boolean)): EventEmitter
    once(sigName: "can-activate-accel", callback: ((event: View, signal_id: number) => boolean)): EventEmitter
    off(sigName: "can-activate-accel", callback: ((event: View, signal_id: number) => boolean)): EventEmitter
    connect(sigName: "child-notify", callback: ((obj: View, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: ((obj: View, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: ((event: View, child_property: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "child-notify", callback: ((event: View, child_property: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "child-notify", callback: ((event: View, child_property: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "composited-changed", callback: ((obj: View) => void)): number
    connect_after(sigName: "composited-changed", callback: ((obj: View) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: ((event: View) => void)): EventEmitter
    once(sigName: "composited-changed", callback: ((event: View) => void)): EventEmitter
    off(sigName: "composited-changed", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "configure-event", callback: ((obj: View, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: ((obj: View, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: ((event: View, event: Gdk.EventConfigure) => boolean)): EventEmitter
    once(sigName: "configure-event", callback: ((event: View, event: Gdk.EventConfigure) => boolean)): EventEmitter
    off(sigName: "configure-event", callback: ((event: View, event: Gdk.EventConfigure) => boolean)): EventEmitter
    connect(sigName: "damage-event", callback: ((obj: View, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: ((obj: View, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: ((event: View, event: Gdk.EventExpose) => boolean)): EventEmitter
    once(sigName: "damage-event", callback: ((event: View, event: Gdk.EventExpose) => boolean)): EventEmitter
    off(sigName: "damage-event", callback: ((event: View, event: Gdk.EventExpose) => boolean)): EventEmitter
    connect(sigName: "delete-event", callback: ((obj: View, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: ((obj: View, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "delete-event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "delete-event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "destroy", callback: ((obj: View) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: View) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: ((event: View) => void)): EventEmitter
    once(sigName: "destroy", callback: ((event: View) => void)): EventEmitter
    off(sigName: "destroy", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "destroy-event", callback: ((obj: View, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: ((obj: View, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "destroy-event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "destroy-event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "direction-changed", callback: ((obj: View, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: ((obj: View, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: ((event: View, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    once(sigName: "direction-changed", callback: ((event: View, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    off(sigName: "direction-changed", callback: ((event: View, previous_direction: Gtk.TextDirection) => void)): EventEmitter
    connect(sigName: "drag-begin", callback: ((obj: View, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: ((obj: View, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-begin", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-begin", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-delete", callback: ((obj: View, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: ((obj: View, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-data-delete", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-data-delete", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-data-get", callback: ((obj: View, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: ((obj: View, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: ((event: View, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-get", callback: ((event: View, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-get", callback: ((event: View, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-data-received", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "drag-data-received", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "drag-data-received", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "drag-drop", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-drop", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-drop", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "drag-end", callback: ((obj: View, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: ((obj: View, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    once(sigName: "drag-end", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    off(sigName: "drag-end", callback: ((event: View, context: Gdk.DragContext) => void)): EventEmitter
    connect(sigName: "drag-failed", callback: ((obj: View, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: ((obj: View, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: ((event: View, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    once(sigName: "drag-failed", callback: ((event: View, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    off(sigName: "drag-failed", callback: ((event: View, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): EventEmitter
    connect(sigName: "drag-leave", callback: ((obj: View, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: ((obj: View, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: ((event: View, context: Gdk.DragContext, time: number) => void)): EventEmitter
    once(sigName: "drag-leave", callback: ((event: View, context: Gdk.DragContext, time: number) => void)): EventEmitter
    off(sigName: "drag-leave", callback: ((event: View, context: Gdk.DragContext, time: number) => void)): EventEmitter
    connect(sigName: "drag-motion", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    once(sigName: "drag-motion", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    off(sigName: "drag-motion", callback: ((event: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): EventEmitter
    connect(sigName: "draw", callback: ((obj: View, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: ((obj: View, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: ((event: View, cr: cairo.Context) => boolean)): EventEmitter
    once(sigName: "draw", callback: ((event: View, cr: cairo.Context) => boolean)): EventEmitter
    off(sigName: "draw", callback: ((event: View, cr: cairo.Context) => boolean)): EventEmitter
    connect(sigName: "enter-notify-event", callback: ((obj: View, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: ((obj: View, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: ((event: View, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "enter-notify-event", callback: ((event: View, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "enter-notify-event", callback: ((event: View, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "event", callback: ((obj: View, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: ((obj: View, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "event", callback: ((event: View, event: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "event-after", callback: ((obj: View, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: ((obj: View, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: ((event: View, event: Gdk.Event) => void)): EventEmitter
    once(sigName: "event-after", callback: ((event: View, event: Gdk.Event) => void)): EventEmitter
    off(sigName: "event-after", callback: ((event: View, event: Gdk.Event) => void)): EventEmitter
    connect(sigName: "focus", callback: ((obj: View, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: ((obj: View, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: ((event: View, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "focus", callback: ((event: View, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "focus", callback: ((event: View, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "focus-in-event", callback: ((obj: View, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: ((obj: View, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: ((event: View, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-in-event", callback: ((event: View, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-in-event", callback: ((event: View, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "focus-out-event", callback: ((obj: View, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: ((obj: View, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: ((event: View, event: Gdk.EventFocus) => boolean)): EventEmitter
    once(sigName: "focus-out-event", callback: ((event: View, event: Gdk.EventFocus) => boolean)): EventEmitter
    off(sigName: "focus-out-event", callback: ((event: View, event: Gdk.EventFocus) => boolean)): EventEmitter
    connect(sigName: "grab-broken-event", callback: ((obj: View, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: ((obj: View, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: ((event: View, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    once(sigName: "grab-broken-event", callback: ((event: View, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    off(sigName: "grab-broken-event", callback: ((event: View, event: Gdk.EventGrabBroken) => boolean)): EventEmitter
    connect(sigName: "grab-focus", callback: ((obj: View) => void)): number
    connect_after(sigName: "grab-focus", callback: ((obj: View) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: ((event: View) => void)): EventEmitter
    once(sigName: "grab-focus", callback: ((event: View) => void)): EventEmitter
    off(sigName: "grab-focus", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "grab-notify", callback: ((obj: View, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: ((obj: View, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    on(sigName: "grab-notify", callback: ((event: View, was_grabbed: boolean) => void)): EventEmitter
    once(sigName: "grab-notify", callback: ((event: View, was_grabbed: boolean) => void)): EventEmitter
    off(sigName: "grab-notify", callback: ((event: View, was_grabbed: boolean) => void)): EventEmitter
    connect(sigName: "hide", callback: ((obj: View) => void)): number
    connect_after(sigName: "hide", callback: ((obj: View) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: ((event: View) => void)): EventEmitter
    once(sigName: "hide", callback: ((event: View) => void)): EventEmitter
    off(sigName: "hide", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "hierarchy-changed", callback: ((obj: View, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: ((obj: View, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: ((event: View, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "hierarchy-changed", callback: ((event: View, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "hierarchy-changed", callback: ((event: View, previous_toplevel?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "key-press-event", callback: ((obj: View, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: ((obj: View, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: ((event: View, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-press-event", callback: ((event: View, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-press-event", callback: ((event: View, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "key-release-event", callback: ((obj: View, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: ((obj: View, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: ((event: View, event: Gdk.EventKey) => boolean)): EventEmitter
    once(sigName: "key-release-event", callback: ((event: View, event: Gdk.EventKey) => boolean)): EventEmitter
    off(sigName: "key-release-event", callback: ((event: View, event: Gdk.EventKey) => boolean)): EventEmitter
    connect(sigName: "keynav-failed", callback: ((obj: View, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: ((obj: View, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: ((event: View, direction: Gtk.DirectionType) => boolean)): EventEmitter
    once(sigName: "keynav-failed", callback: ((event: View, direction: Gtk.DirectionType) => boolean)): EventEmitter
    off(sigName: "keynav-failed", callback: ((event: View, direction: Gtk.DirectionType) => boolean)): EventEmitter
    connect(sigName: "leave-notify-event", callback: ((obj: View, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: ((obj: View, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: ((event: View, event: Gdk.EventCrossing) => boolean)): EventEmitter
    once(sigName: "leave-notify-event", callback: ((event: View, event: Gdk.EventCrossing) => boolean)): EventEmitter
    off(sigName: "leave-notify-event", callback: ((event: View, event: Gdk.EventCrossing) => boolean)): EventEmitter
    connect(sigName: "map", callback: ((obj: View) => void)): number
    connect_after(sigName: "map", callback: ((obj: View) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: ((event: View) => void)): EventEmitter
    once(sigName: "map", callback: ((event: View) => void)): EventEmitter
    off(sigName: "map", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "map-event", callback: ((obj: View, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: ((obj: View, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: ((event: View, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "map-event", callback: ((event: View, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "map-event", callback: ((event: View, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "mnemonic-activate", callback: ((obj: View, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: ((obj: View, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    on(sigName: "mnemonic-activate", callback: ((event: View, group_cycling: boolean) => boolean)): EventEmitter
    once(sigName: "mnemonic-activate", callback: ((event: View, group_cycling: boolean) => boolean)): EventEmitter
    off(sigName: "mnemonic-activate", callback: ((event: View, group_cycling: boolean) => boolean)): EventEmitter
    connect(sigName: "motion-notify-event", callback: ((obj: View, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: ((obj: View, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: ((event: View, event: Gdk.EventMotion) => boolean)): EventEmitter
    once(sigName: "motion-notify-event", callback: ((event: View, event: Gdk.EventMotion) => boolean)): EventEmitter
    off(sigName: "motion-notify-event", callback: ((event: View, event: Gdk.EventMotion) => boolean)): EventEmitter
    connect(sigName: "move-focus", callback: ((obj: View, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: ((obj: View, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: ((event: View, direction: Gtk.DirectionType) => void)): EventEmitter
    once(sigName: "move-focus", callback: ((event: View, direction: Gtk.DirectionType) => void)): EventEmitter
    off(sigName: "move-focus", callback: ((event: View, direction: Gtk.DirectionType) => void)): EventEmitter
    connect(sigName: "parent-set", callback: ((obj: View, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: ((obj: View, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: ((event: View, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    once(sigName: "parent-set", callback: ((event: View, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    off(sigName: "parent-set", callback: ((event: View, old_parent?: Gtk.Widget | null) => void)): EventEmitter
    connect(sigName: "popup-menu", callback: ((obj: View) => boolean)): number
    connect_after(sigName: "popup-menu", callback: ((obj: View) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: ((event: View) => boolean)): EventEmitter
    once(sigName: "popup-menu", callback: ((event: View) => boolean)): EventEmitter
    off(sigName: "popup-menu", callback: ((event: View) => boolean)): EventEmitter
    connect(sigName: "property-notify-event", callback: ((obj: View, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: ((obj: View, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: ((event: View, event: Gdk.EventProperty) => boolean)): EventEmitter
    once(sigName: "property-notify-event", callback: ((event: View, event: Gdk.EventProperty) => boolean)): EventEmitter
    off(sigName: "property-notify-event", callback: ((event: View, event: Gdk.EventProperty) => boolean)): EventEmitter
    connect(sigName: "proximity-in-event", callback: ((obj: View, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: ((obj: View, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: ((event: View, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-in-event", callback: ((event: View, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-in-event", callback: ((event: View, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "proximity-out-event", callback: ((obj: View, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: ((obj: View, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: ((event: View, event: Gdk.EventProximity) => boolean)): EventEmitter
    once(sigName: "proximity-out-event", callback: ((event: View, event: Gdk.EventProximity) => boolean)): EventEmitter
    off(sigName: "proximity-out-event", callback: ((event: View, event: Gdk.EventProximity) => boolean)): EventEmitter
    connect(sigName: "query-tooltip", callback: ((obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: ((obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: ((event: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    once(sigName: "query-tooltip", callback: ((event: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    off(sigName: "query-tooltip", callback: ((event: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): EventEmitter
    connect(sigName: "realize", callback: ((obj: View) => void)): number
    connect_after(sigName: "realize", callback: ((obj: View) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: ((event: View) => void)): EventEmitter
    once(sigName: "realize", callback: ((event: View) => void)): EventEmitter
    off(sigName: "realize", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "screen-changed", callback: ((obj: View, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: ((obj: View, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: ((event: View, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    once(sigName: "screen-changed", callback: ((event: View, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    off(sigName: "screen-changed", callback: ((event: View, previous_screen?: Gdk.Screen | null) => void)): EventEmitter
    connect(sigName: "scroll-event", callback: ((obj: View, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: ((obj: View, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: ((event: View, event: Gdk.EventScroll) => boolean)): EventEmitter
    once(sigName: "scroll-event", callback: ((event: View, event: Gdk.EventScroll) => boolean)): EventEmitter
    off(sigName: "scroll-event", callback: ((event: View, event: Gdk.EventScroll) => boolean)): EventEmitter
    connect(sigName: "selection-clear-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-clear-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-clear-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-get", callback: ((obj: View, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: ((obj: View, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: ((event: View, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    once(sigName: "selection-get", callback: ((event: View, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    off(sigName: "selection-get", callback: ((event: View, data: Gtk.SelectionData, info: number, time: number) => void)): EventEmitter
    connect(sigName: "selection-notify-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-notify-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-notify-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "selection-received", callback: ((obj: View, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: ((obj: View, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: ((event: View, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    once(sigName: "selection-received", callback: ((event: View, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    off(sigName: "selection-received", callback: ((event: View, data: Gtk.SelectionData, time: number) => void)): EventEmitter
    connect(sigName: "selection-request-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    once(sigName: "selection-request-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    off(sigName: "selection-request-event", callback: ((event: View, event: Gdk.EventSelection) => boolean)): EventEmitter
    connect(sigName: "show", callback: ((obj: View) => void)): number
    connect_after(sigName: "show", callback: ((obj: View) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: ((event: View) => void)): EventEmitter
    once(sigName: "show", callback: ((event: View) => void)): EventEmitter
    off(sigName: "show", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "show-help", callback: ((obj: View, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: ((obj: View, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: ((event: View, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    once(sigName: "show-help", callback: ((event: View, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    off(sigName: "show-help", callback: ((event: View, help_type: Gtk.WidgetHelpType) => boolean)): EventEmitter
    connect(sigName: "size-allocate", callback: ((obj: View, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: ((obj: View, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: ((event: View, allocation: Gtk.Allocation) => void)): EventEmitter
    once(sigName: "size-allocate", callback: ((event: View, allocation: Gtk.Allocation) => void)): EventEmitter
    off(sigName: "size-allocate", callback: ((event: View, allocation: Gtk.Allocation) => void)): EventEmitter
    connect(sigName: "state-changed", callback: ((obj: View, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: ((obj: View, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: ((event: View, state: Gtk.StateType) => void)): EventEmitter
    once(sigName: "state-changed", callback: ((event: View, state: Gtk.StateType) => void)): EventEmitter
    off(sigName: "state-changed", callback: ((event: View, state: Gtk.StateType) => void)): EventEmitter
    connect(sigName: "state-flags-changed", callback: ((obj: View, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: ((obj: View, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: ((event: View, flags: Gtk.StateFlags) => void)): EventEmitter
    once(sigName: "state-flags-changed", callback: ((event: View, flags: Gtk.StateFlags) => void)): EventEmitter
    off(sigName: "state-flags-changed", callback: ((event: View, flags: Gtk.StateFlags) => void)): EventEmitter
    connect(sigName: "style-set", callback: ((obj: View, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: ((obj: View, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    on(sigName: "style-set", callback: ((event: View, previous_style?: Gtk.Style | null) => void)): EventEmitter
    once(sigName: "style-set", callback: ((event: View, previous_style?: Gtk.Style | null) => void)): EventEmitter
    off(sigName: "style-set", callback: ((event: View, previous_style?: Gtk.Style | null) => void)): EventEmitter
    connect(sigName: "style-updated", callback: ((obj: View) => void)): number
    connect_after(sigName: "style-updated", callback: ((obj: View) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: ((event: View) => void)): EventEmitter
    once(sigName: "style-updated", callback: ((event: View) => void)): EventEmitter
    off(sigName: "style-updated", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "touch-event", callback: ((obj: View, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: ((obj: View, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: ((event: View, object: Gdk.Event) => boolean)): EventEmitter
    once(sigName: "touch-event", callback: ((event: View, object: Gdk.Event) => boolean)): EventEmitter
    off(sigName: "touch-event", callback: ((event: View, object: Gdk.Event) => boolean)): EventEmitter
    connect(sigName: "unmap", callback: ((obj: View) => void)): number
    connect_after(sigName: "unmap", callback: ((obj: View) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: ((event: View) => void)): EventEmitter
    once(sigName: "unmap", callback: ((event: View) => void)): EventEmitter
    off(sigName: "unmap", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "unmap-event", callback: ((obj: View, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: ((obj: View, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: ((event: View, event: Gdk.EventAny) => boolean)): EventEmitter
    once(sigName: "unmap-event", callback: ((event: View, event: Gdk.EventAny) => boolean)): EventEmitter
    off(sigName: "unmap-event", callback: ((event: View, event: Gdk.EventAny) => boolean)): EventEmitter
    connect(sigName: "unrealize", callback: ((obj: View) => void)): number
    connect_after(sigName: "unrealize", callback: ((obj: View) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: ((event: View) => void)): EventEmitter
    once(sigName: "unrealize", callback: ((event: View) => void)): EventEmitter
    off(sigName: "unrealize", callback: ((event: View) => void)): EventEmitter
    connect(sigName: "visibility-notify-event", callback: ((obj: View, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: ((obj: View, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: ((event: View, event: Gdk.EventVisibility) => boolean)): EventEmitter
    once(sigName: "visibility-notify-event", callback: ((event: View, event: Gdk.EventVisibility) => boolean)): EventEmitter
    off(sigName: "visibility-notify-event", callback: ((event: View, event: Gdk.EventVisibility) => boolean)): EventEmitter
    connect(sigName: "window-state-event", callback: ((obj: View, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: ((obj: View, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: ((event: View, event: Gdk.EventWindowState) => boolean)): EventEmitter
    once(sigName: "window-state-event", callback: ((event: View, event: Gdk.EventWindowState) => boolean)): EventEmitter
    off(sigName: "window-state-event", callback: ((event: View, event: Gdk.EventWindowState) => boolean)): EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: View, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: View, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: View, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::auto-indent", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::auto-indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::auto-indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::background-pattern", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-pattern", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::background-pattern", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::background-pattern", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::completion", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completion", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::completion", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::completion", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::draw-spaces", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::draw-spaces", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::highlight-current-line", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-current-line", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::highlight-current-line", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::highlight-current-line", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent-on-tab", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-on-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent-on-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent-on-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::right-margin-position", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::right-margin-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::right-margin-position", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-line-marks", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-marks", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-line-marks", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-line-marks", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-line-numbers", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-line-numbers", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::show-right-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::show-right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::show-right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::smart-backspace", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-backspace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::smart-backspace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::smart-backspace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::smart-home-end", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-home-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::smart-home-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::smart-home-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::space-drawer", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::space-drawer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::space-drawer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::space-drawer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tab-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tab-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::accepts-tab", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepts-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::accepts-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::accepts-tab", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::bottom-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bottom-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::bottom-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::bottom-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::buffer", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::buffer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::buffer", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::cursor-visible", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::cursor-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::cursor-visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::editable", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::editable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::im-module", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-module", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::im-module", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::im-module", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::indent", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::indent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::input-hints", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::input-hints", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::input-hints", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::input-purpose", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::input-purpose", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::input-purpose", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::justification", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::justification", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::left-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::left-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::monospace", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::monospace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::monospace", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::overwrite", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::overwrite", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::overwrite", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::populate-all", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::populate-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::populate-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::populate-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::right-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::right-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tabs", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tabs", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::top-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::top-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::top-margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::wrap-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::border-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::border-width", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::child", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::resize-mode", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::app-paintable", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::can-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::can-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::composite-child", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::composite-child", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::double-buffered", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::events", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::events", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::expand", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::expand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::focus-on-click", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::halign", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::halign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::has-tooltip", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::height-request", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::height-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::is-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::is-focus", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-bottom", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-end", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-end", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-left", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-left", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-right", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-right", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-start", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-start", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::margin-top", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::margin-top", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::name", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::name", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::no-show-all", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::opacity", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::opacity", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::parent", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::parent", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::receives-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::receives-default", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::scale-factor", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::sensitive", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::sensitive", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::style", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::style", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-markup", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::tooltip-text", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::valign", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::valign", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vexpand-set", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::visible", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::visible", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::width-request", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::width-request", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::window", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::window", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hadjustment", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::hscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::hscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vadjustment", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vadjustment", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: ((obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify::vscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify::vscroll-policy", callback: ((event: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    static new(): View
    static newWithBuffer(buffer: Buffer): View
    static $gtype: GObject.Type
}
export class BufferPrivate {
    static name: string
}
export class CompletionContextPrivate {
    static name: string
}
export class CompletionInfoPrivate {
    static name: string
}
export class CompletionItemPrivate {
    static name: string
}
export class CompletionPrivate {
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
    static name: string
    static getAll(): Encoding[]
    static getCurrent(): Encoding
    static getDefaultCandidates(): Encoding[]
    static getFromCharset(charset: string): Encoding | null
    static getUtf8(): Encoding
}
export class FileLoaderPrivate {
    static name: string
}
export class FilePrivate {
    static name: string
}
export class FileSaverPrivate {
    static name: string
}
export class GutterPrivate {
    static name: string
}
export class GutterRendererPixbufPrivate {
    static name: string
}
export class GutterRendererPrivate {
    static name: string
}
export class GutterRendererTextPrivate {
    static name: string
}
export class LanguageManagerPrivate {
    static name: string
}
export class LanguagePrivate {
    static name: string
}
export class MarkAttributesPrivate {
    static name: string
}
export class MarkPrivate {
    static name: string
}
export class PrintCompositorPrivate {
    static name: string
}
export class RegionIter {
    /* Fields of GtkSource.RegionIter */
    /* Methods of GtkSource.RegionIter */
    getSubregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    isEnd(): boolean
    next(): boolean
    static name: string
}
export class SearchContextPrivate {
    static name: string
}
export class SearchSettingsPrivate {
    static name: string
}
export class SpaceDrawerPrivate {
    static name: string
}
export class StyleSchemeManagerPrivate {
    static name: string
}
export class StyleSchemePrivate {
    static name: string
}
export class ViewPrivate {
    static name: string
}
}