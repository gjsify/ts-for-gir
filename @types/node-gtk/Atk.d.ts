/**
 * Atk-1.0
 */

/// <reference types="node" />
/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />

declare namespace Atk {

export enum CoordType {
    SCREEN,
    WINDOW,
    PARENT,
}
export enum KeyEventType {
    PRESS,
    RELEASE,
    LAST_DEFINED,
}
export enum Layer {
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
}
export enum RelationType {
    NULL,
    CONTROLLED_BY,
    CONTROLLER_FOR,
    LABEL_FOR,
    LABELLED_BY,
    MEMBER_OF,
    NODE_CHILD_OF,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIBED_BY,
    DESCRIPTION_FOR,
    NODE_PARENT_OF,
    DETAILS,
    DETAILS_FOR,
    ERROR_MESSAGE,
    ERROR_FOR,
    LAST_DEFINED,
}
export enum Role {
    INVALID,
    ACCELERATOR_LABEL,
    ALERT,
    ANIMATION,
    ARROW,
    CALENDAR,
    CANVAS,
    CHECK_BOX,
    CHECK_MENU_ITEM,
    COLOR_CHOOSER,
    COLUMN_HEADER,
    COMBO_BOX,
    DATE_EDITOR,
    DESKTOP_ICON,
    DESKTOP_FRAME,
    DIAL,
    DIALOG,
    DIRECTORY_PANE,
    DRAWING_AREA,
    FILE_CHOOSER,
    FILLER,
    FONT_CHOOSER,
    FRAME,
    GLASS_PANE,
    HTML_CONTAINER,
    ICON,
    IMAGE,
    INTERNAL_FRAME,
    LABEL,
    LAYERED_PANE,
    LIST,
    LIST_ITEM,
    MENU,
    MENU_BAR,
    MENU_ITEM,
    OPTION_PANE,
    PAGE_TAB,
    PAGE_TAB_LIST,
    PANEL,
    PASSWORD_TEXT,
    POPUP_MENU,
    PROGRESS_BAR,
    PUSH_BUTTON,
    RADIO_BUTTON,
    RADIO_MENU_ITEM,
    ROOT_PANE,
    ROW_HEADER,
    SCROLL_BAR,
    SCROLL_PANE,
    SEPARATOR,
    SLIDER,
    SPLIT_PANE,
    SPIN_BUTTON,
    STATUSBAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAR_OFF_MENU_ITEM,
    TERMINAL,
    TEXT,
    TOGGLE_BUTTON,
    TOOL_BAR,
    TOOL_TIP,
    TREE,
    TREE_TABLE,
    UNKNOWN,
    VIEWPORT,
    WINDOW,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDIT_BAR,
    EMBEDDED,
    ENTRY,
    CHART,
    CAPTION,
    DOCUMENT_FRAME,
    HEADING,
    PAGE,
    SECTION,
    REDUNDANT_OBJECT,
    FORM,
    LINK,
    INPUT_METHOD_WINDOW,
    TABLE_ROW,
    TREE_ITEM,
    DOCUMENT_SPREADSHEET,
    DOCUMENT_PRESENTATION,
    DOCUMENT_TEXT,
    DOCUMENT_WEB,
    DOCUMENT_EMAIL,
    COMMENT,
    LIST_BOX,
    GROUPING,
    IMAGE_MAP,
    NOTIFICATION,
    INFO_BAR,
    LEVEL_BAR,
    TITLE_BAR,
    BLOCK_QUOTE,
    AUDIO,
    VIDEO,
    DEFINITION,
    ARTICLE,
    LANDMARK,
    LOG,
    MARQUEE,
    MATH,
    RATING,
    TIMER,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    FOOTNOTE,
    CONTENT_DELETION,
    CONTENT_INSERTION,
    LAST_DEFINED,
}
export enum ScrollType {
    TOP_LEFT,
    BOTTOM_RIGHT,
    TOP_EDGE,
    BOTTOM_EDGE,
    LEFT_EDGE,
    RIGHT_EDGE,
    ANYWHERE,
}
export enum StateType {
    INVALID,
    ACTIVE,
    ARMED,
    BUSY,
    CHECKED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HORIZONTAL,
    ICONIFIED,
    MODAL,
    MULTI_LINE,
    MULTISELECTABLE,
    OPAQUE,
    PRESSED,
    RESIZABLE,
    SELECTABLE,
    SELECTED,
    SENSITIVE,
    SHOWING,
    SINGLE_LINE,
    STALE,
    TRANSIENT,
    VERTICAL,
    VISIBLE,
    MANAGES_DESCENDANTS,
    INDETERMINATE,
    TRUNCATED,
    REQUIRED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    DEFAULT,
    ANIMATED,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    HAS_TOOLTIP,
    READ_ONLY,
    LAST_DEFINED,
}
export enum TextAttribute {
    INVALID,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    INDENT,
    INVISIBLE,
    EDITABLE,
    PIXELS_ABOVE_LINES,
    PIXELS_BELOW_LINES,
    PIXELS_INSIDE_WRAP,
    BG_FULL_HEIGHT,
    RISE,
    UNDERLINE,
    STRIKETHROUGH,
    SIZE,
    SCALE,
    WEIGHT,
    LANGUAGE,
    FAMILY_NAME,
    BG_COLOR,
    FG_COLOR,
    BG_STIPPLE,
    FG_STIPPLE,
    WRAP_MODE,
    DIRECTION,
    JUSTIFICATION,
    STRETCH,
    VARIANT,
    STYLE,
    LAST_DEFINED,
}
export enum TextBoundary {
    CHAR,
    WORD_START,
    WORD_END,
    SENTENCE_START,
    SENTENCE_END,
    LINE_START,
    LINE_END,
}
export enum TextClipType {
    NONE,
    MIN,
    MAX,
    BOTH,
}
export enum TextGranularity {
    CHAR,
    WORD,
    SENTENCE,
    LINE,
    PARAGRAPH,
}
export enum ValueType {
    VERY_WEAK,
    WEAK,
    ACCEPTABLE,
    STRONG,
    VERY_STRONG,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    VERY_BAD,
    BAD,
    GOOD,
    VERY_GOOD,
    BEST,
    LAST_DEFINED,
}
export enum HyperlinkStateFlags {
    INLINE,
}
export const BINARY_AGE:number
export const INTERFACE_AGE:number
export const MAJOR_VERSION:number
export const MICRO_VERSION:number
export const MINOR_VERSION:number
export const VERSION_MIN_REQUIRED:number
export function attributeSetFree(attrib_set: AttributeSet): void
export function focusTrackerNotify(object: Object): void
export function getBinaryAge(): number
export function getDefaultRegistry(): Registry
export function getFocusObject(): Object
export function getInterfaceAge(): number
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function getRoot(): Object
export function getToolkitName(): string
export function getToolkitVersion(): string
export function getVersion(): string
export function relationTypeForName(name: string): RelationType
export function relationTypeGetName(type: RelationType): string
export function relationTypeRegister(name: string): RelationType
export function removeFocusTracker(tracker_id: number): void
export function removeGlobalEventListener(listener_id: number): void
export function removeKeyEventListener(listener_id: number): void
export function roleForName(name: string): Role
export function roleGetLocalizedName(role: Role): string
export function roleGetName(role: Role): string
export function roleRegister(name: string): Role
export function stateTypeForName(name: string): StateType
export function stateTypeGetName(type: StateType): string
export function stateTypeRegister(name: string): StateType
export function textAttributeForName(name: string): TextAttribute
export function textAttributeGetName(attr: TextAttribute): string
export function textAttributeGetValue(attr: TextAttribute, index_: number): string | null
export function textAttributeRegister(name: string): TextAttribute
export function textFreeRanges(ranges: TextRange[]): void
export function valueTypeGetLocalizedName(value_type: ValueType): string
export function valueTypeGetName(value_type: ValueType): string
export interface EventListener {
    (obj: Object): void
}
export interface EventListenerInit {
    (): void
}
export interface FocusHandler {
    (object: Object, focus_in: boolean): void
}
export interface Function {
    (): boolean
}
export interface KeySnoopFunc {
    (event: KeyEventStruct): number
}
export interface PropertyChangeHandler {
    (obj: Object, vals: PropertyValues): void
}
export class Action {
    /* Methods of Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Virtual methods of Atk.Action */
    vfuncDoAction?(i: number): boolean
    vfuncGetDescription?(i: number): string | null
    vfuncGetKeybinding?(i: number): string | null
    vfuncGetLocalizedName?(i: number): string | null
    vfuncGetNActions?(): number
    vfuncGetName?(i: number): string | null
    vfuncSetDescription?(i: number, desc: string): boolean
    static name: string
}
export class Component {
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    getAlpha(): number
    getExtents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getLayer(): Layer
    getMdiZorder(): number
    getPosition(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coord_type: CoordType): Object | null
    removeFocusHandler(handler_id: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    setPosition(x: number, y: number, coord_type: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Component */
    vfuncBoundsChanged?(bounds: Rectangle): void
    vfuncContains?(x: number, y: number, coord_type: CoordType): boolean
    vfuncGetAlpha?(): number
    vfuncGetExtents?(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer?(): Layer
    vfuncGetMdiZorder?(): number
    vfuncGetPosition?(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize?(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus?(): boolean
    vfuncRefAccessibleAtPoint?(x: number, y: number, coord_type: CoordType): Object | null
    vfuncRemoveFocusHandler?(handler_id: number): void
    vfuncScrollTo?(type: ScrollType): boolean
    vfuncScrollToPoint?(coords: CoordType, x: number, y: number): boolean
    vfuncSetExtents?(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    vfuncSetPosition?(x: number, y: number, coord_type: CoordType): boolean
    vfuncSetSize?(width: number, height: number): boolean
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: Component, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: ((obj: Component, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Document {
    /* Methods of Atk.Document */
    getAttributeValue(attribute_name: string): string | null
    getAttributes(): AttributeSet
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attribute_name: string, attribute_value: string): boolean
    /* Virtual methods of Atk.Document */
    vfuncGetCurrentPageNumber?(): number
    vfuncGetDocument?(): object | null
    vfuncGetDocumentAttributeValue?(attribute_name: string): string | null
    vfuncGetDocumentAttributes?(): AttributeSet
    vfuncGetDocumentLocale?(): string
    vfuncGetDocumentType?(): string
    vfuncGetPageCount?(): number
    vfuncSetDocumentAttribute?(attribute_name: string, attribute_value: string): boolean
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: ((obj: Document) => void)): number
    connect_after(sigName: "load-complete", callback: ((obj: Document) => void)): number
    emit(sigName: "load-complete"): void
    on(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-stopped", callback: ((obj: Document) => void)): number
    connect_after(sigName: "load-stopped", callback: ((obj: Document) => void)): number
    emit(sigName: "load-stopped"): void
    on(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-changed", callback: ((obj: Document, page_number: number) => void)): number
    connect_after(sigName: "page-changed", callback: ((obj: Document, page_number: number) => void)): number
    emit(sigName: "page-changed", page_number: number): void
    on(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reload", callback: ((obj: Document) => void)): number
    connect_after(sigName: "reload", callback: ((obj: Document) => void)): number
    emit(sigName: "reload"): void
    on(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class EditableText {
    /* Methods of Atk.EditableText */
    copyText(start_pos: number, end_pos: number): void
    cutText(start_pos: number, end_pos: number): void
    deleteText(start_pos: number, end_pos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    setTextContents(string: string): void
    /* Virtual methods of Atk.EditableText */
    vfuncCopyText?(start_pos: number, end_pos: number): void
    vfuncCutText?(start_pos: number, end_pos: number): void
    vfuncDeleteText?(start_pos: number, end_pos: number): void
    vfuncInsertText?(string: string, length: number, position: number): void
    vfuncPasteText?(position: number): void
    vfuncSetRunAttributes?(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    vfuncSetTextContents?(string: string): void
    static name: string
}
export class HyperlinkImpl {
    /* Methods of Atk.HyperlinkImpl */
    getHyperlink(): Hyperlink
    /* Virtual methods of Atk.HyperlinkImpl */
    vfuncGetHyperlink?(): Hyperlink
    static name: string
}
export class Hypertext {
    /* Methods of Atk.Hypertext */
    getLink(link_index: number): Hyperlink
    getLinkIndex(char_index: number): number
    getNLinks(): number
    /* Virtual methods of Atk.Hypertext */
    vfuncGetLink?(link_index: number): Hyperlink
    vfuncGetLinkIndex?(char_index: number): number
    vfuncGetNLinks?(): number
    vfuncLinkSelected?(link_index: number): void
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: ((obj: Hypertext, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: ((obj: Hypertext, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    on(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Image {
    /* Methods of Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    setImageDescription(description: string): boolean
    /* Virtual methods of Atk.Image */
    vfuncGetImageDescription?(): string
    vfuncGetImageLocale?(): string | null
    vfuncGetImagePosition?(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetImageSize?(): [ /* width */ number | null, /* height */ number | null ]
    vfuncSetImageDescription?(description: string): boolean
    static name: string
}
export class ImplementorIface {
    static name: string
}
export class Selection {
    /* Methods of Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Virtual methods of Atk.Selection */
    vfuncAddSelection?(i: number): boolean
    vfuncClearSelection?(): boolean
    vfuncGetSelectionCount?(): number
    vfuncIsChildSelected?(i: number): boolean
    vfuncRefSelection?(i: number): Object | null
    vfuncRemoveSelection?(i: number): boolean
    vfuncSelectAllSelection?(): boolean
    vfuncSelectionChanged?(): void
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: ((obj: Selection) => void)): number
    connect_after(sigName: "selection-changed", callback: ((obj: Selection) => void)): number
    emit(sigName: "selection-changed"): void
    on(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class StreamableContent {
    /* Methods of Atk.StreamableContent */
    getMimeType(i: number): string
    getNMimeTypes(): number
    getStream(mime_type: string): GLib.IOChannel
    getUri(mime_type: string): string | null
    /* Virtual methods of Atk.StreamableContent */
    vfuncGetMimeType?(i: number): string
    vfuncGetNMimeTypes?(): number
    vfuncGetStream?(mime_type: string): GLib.IOChannel
    vfuncGetUri?(mime_type: string): string | null
    static name: string
}
export class Table {
    /* Methods of Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Object | null
    getColumnAtIndex(index_: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index_: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Object): void
    setSummary(accessible: Object): void
    /* Virtual methods of Atk.Table */
    vfuncAddColumnSelection?(column: number): boolean
    vfuncAddRowSelection?(row: number): boolean
    vfuncColumnDeleted?(column: number, num_deleted: number): void
    vfuncColumnInserted?(column: number, num_inserted: number): void
    vfuncColumnReordered?(): void
    vfuncGetCaption?(): Object | null
    vfuncGetColumnAtIndex?(index_: number): number
    vfuncGetColumnDescription?(column: number): string
    vfuncGetColumnExtentAt?(row: number, column: number): number
    vfuncGetColumnHeader?(column: number): Object | null
    vfuncGetIndexAt?(row: number, column: number): number
    vfuncGetNColumns?(): number
    vfuncGetNRows?(): number
    vfuncGetRowAtIndex?(index_: number): number
    vfuncGetRowDescription?(row: number): string | null
    vfuncGetRowExtentAt?(row: number, column: number): number
    vfuncGetRowHeader?(row: number): Object | null
    vfuncGetSelectedColumns?(selected: number): number
    vfuncGetSelectedRows?(selected: number): number
    vfuncGetSummary?(): Object
    vfuncIsColumnSelected?(column: number): boolean
    vfuncIsRowSelected?(row: number): boolean
    vfuncIsSelected?(row: number, column: number): boolean
    vfuncModelChanged?(): void
    vfuncRefAt?(row: number, column: number): Object
    vfuncRemoveColumnSelection?(column: number): boolean
    vfuncRemoveRowSelection?(row: number): boolean
    vfuncRowDeleted?(row: number, num_deleted: number): void
    vfuncRowInserted?(row: number, num_inserted: number): void
    vfuncRowReordered?(): void
    vfuncSetCaption?(caption: Object): void
    vfuncSetColumnDescription?(column: number, description: string): void
    vfuncSetColumnHeader?(column: number, header: Object): void
    vfuncSetRowDescription?(row: number, description: string): void
    vfuncSetRowHeader?(row: number, header: Object): void
    vfuncSetSummary?(accessible: Object): void
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    on(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-inserted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    on(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-reordered", callback: ((obj: Table) => void)): number
    connect_after(sigName: "column-reordered", callback: ((obj: Table) => void)): number
    emit(sigName: "column-reordered"): void
    on(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "model-changed", callback: ((obj: Table) => void)): number
    connect_after(sigName: "model-changed", callback: ((obj: Table) => void)): number
    emit(sigName: "model-changed"): void
    on(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-deleted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    on(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-inserted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    on(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-reordered", callback: ((obj: Table) => void)): number
    connect_after(sigName: "row-reordered", callback: ((obj: Table) => void)): number
    emit(sigName: "row-reordered"): void
    on(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class TableCell {
    /* Methods of Atk.TableCell */
    getColumnHeaderCells(): Object[]
    getColumnSpan(): number
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    getRowHeaderCells(): Object[]
    getRowSpan(): number
    getTable(): Object
    /* Virtual methods of Atk.TableCell */
    vfuncGetColumnHeaderCells?(): Object[]
    vfuncGetColumnSpan?(): number
    vfuncGetPosition?(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    vfuncGetRowColumnSpan?(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    vfuncGetRowHeaderCells?(): Object[]
    vfuncGetRowSpan?(): number
    vfuncGetTable?(): Object
    static name: string
}
export class Text {
    /* Methods of Atk.Text */
    addSelection(start_offset: number, end_offset: number): boolean
    getBoundedRanges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    getRangeExtents(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    getSelection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    getText(start_offset: number, end_offset: number): string
    getTextAfterOffset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    getTextAtOffset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    getTextBeforeOffset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    removeSelection(selection_num: number): boolean
    scrollSubstringTo(start_offset: number, end_offset: number, type: ScrollType): boolean
    scrollSubstringToPoint(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Virtual methods of Atk.Text */
    vfuncAddSelection?(start_offset: number, end_offset: number): boolean
    vfuncGetBoundedRanges?(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    vfuncGetCaretOffset?(): number
    vfuncGetCharacterAtOffset?(offset: number): number
    vfuncGetCharacterCount?(): number
    vfuncGetCharacterExtents?(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetDefaultAttributes?(): AttributeSet
    vfuncGetNSelections?(): number
    vfuncGetOffsetAtPoint?(x: number, y: number, coords: CoordType): number
    vfuncGetRangeExtents?(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    vfuncGetRunAttributes?(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    vfuncGetSelection?(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfuncGetStringAtOffset?(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    vfuncGetText?(start_offset: number, end_offset: number): string
    vfuncGetTextAfterOffset?(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfuncGetTextAtOffset?(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfuncGetTextBeforeOffset?(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfuncRemoveSelection?(selection_num: number): boolean
    vfuncScrollSubstringTo?(start_offset: number, end_offset: number, type: ScrollType): boolean
    vfuncScrollSubstringToPoint?(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    vfuncSetCaretOffset?(offset: number): boolean
    vfuncSetSelection?(selection_num: number, start_offset: number, end_offset: number): boolean
    vfuncTextAttributesChanged?(): void
    vfuncTextCaretMoved?(location: number): void
    vfuncTextChanged?(position: number, length: number): void
    vfuncTextSelectionChanged?(): void
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: ((obj: Text) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: ((obj: Text) => void)): number
    emit(sigName: "text-attributes-changed"): void
    on(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-caret-moved", callback: ((obj: Text, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: ((obj: Text, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    on(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-changed", callback: ((obj: Text, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: ((obj: Text, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    on(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-insert", callback: ((obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: ((obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-remove", callback: ((obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: ((obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-selection-changed", callback: ((obj: Text) => void)): number
    connect_after(sigName: "text-selection-changed", callback: ((obj: Text) => void)): number
    emit(sigName: "text-selection-changed"): void
    on(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    static freeRanges(ranges: TextRange[]): void
}
export class Value {
    /* Methods of Atk.Value */
    getCurrentValue(): /* value */ any
    getIncrement(): number
    getMaximumValue(): /* value */ any
    getMinimumIncrement(): /* value */ any
    getMinimumValue(): /* value */ any
    getRange(): Range | null
    getSubRanges(): Range[]
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    setCurrentValue(value: any): boolean
    setValue(new_value: number): void
    /* Virtual methods of Atk.Value */
    vfuncGetCurrentValue?(): /* value */ any
    vfuncGetIncrement?(): number
    vfuncGetMaximumValue?(): /* value */ any
    vfuncGetMinimumIncrement?(): /* value */ any
    vfuncGetMinimumValue?(): /* value */ any
    vfuncGetRange?(): Range | null
    vfuncGetSubRanges?(): Range[]
    vfuncGetValueAndText?(): [ /* value */ number, /* text */ string | null ]
    vfuncSetCurrentValue?(value: any): boolean
    vfuncSetValue?(new_value: number): void
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: ((obj: Value, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: ((obj: Value, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Window {
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: ((obj: Window) => void)): number
    connect_after(sigName: "activate", callback: ((obj: Window) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: ((obj: Window) => void)): number
    connect_after(sigName: "create", callback: ((obj: Window) => void)): number
    emit(sigName: "create"): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivate", callback: ((obj: Window) => void)): number
    connect_after(sigName: "deactivate", callback: ((obj: Window) => void)): number
    emit(sigName: "deactivate"): void
    on(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: ((obj: Window) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: Window) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "maximize", callback: ((obj: Window) => void)): number
    connect_after(sigName: "maximize", callback: ((obj: Window) => void)): number
    emit(sigName: "maximize"): void
    on(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "minimize", callback: ((obj: Window) => void)): number
    connect_after(sigName: "minimize", callback: ((obj: Window) => void)): number
    emit(sigName: "minimize"): void
    on(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move", callback: ((obj: Window) => void)): number
    connect_after(sigName: "move", callback: ((obj: Window) => void)): number
    emit(sigName: "move"): void
    on(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resize", callback: ((obj: Window) => void)): number
    connect_after(sigName: "resize", callback: ((obj: Window) => void)): number
    emit(sigName: "resize"): void
    on(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restore", callback: ((obj: Window) => void)): number
    connect_after(sigName: "restore", callback: ((obj: Window) => void)): number
    emit(sigName: "restore"): void
    on(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface GObjectAccessible_ConstructProps extends Object_ConstructProps {
}
export class GObjectAccessible {
    /* Properties of Atk.Object */
    readonly accessible_component_layer:number
    readonly accessible_component_mdi_zorder:number
    accessible_description:string
    readonly accessible_hypertext_nlinks:number
    accessible_name:string
    accessible_parent:Object
    accessible_role:Role
    accessible_table_caption:string
    accessible_table_caption_object:Object
    accessible_table_column_description:string
    accessible_table_column_header:Object
    accessible_table_row_description:string
    accessible_table_row_header:Object
    accessible_table_summary:Object
    accessible_value:number
    /* Fields of Atk.GObjectAccessible */
    parent:Object
    /* Fields of Atk.Object */
    description:string
    name:string
    role:Role
    relation_set:RelationSet
    layer:Layer
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    nullget_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    nullget_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handler_id: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    nullset_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged?(child?: object | null): void
    vfuncChildrenChanged?(change_index: number, changed_child?: object | null): void
    vfuncFocusEvent?(focus_in: boolean): void
    vfuncGetAttributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfuncGetIndexInParent?(): number
    vfuncGetLayer?(): Layer
    vfuncGetMdiZorder?(): number
    vfuncGetNChildren?(): number
    vfunc_get_name?(): string | null
    vfuncGetObjectLocale?(): string
    vfuncGetParent?(): Object
    vfuncGetRole?(): Role
    vfuncInitialize?(data?: object | null): void
    vfuncPropertyChange?(values: PropertyValues): void
    vfuncRefRelationSet?(): RelationSet
    vfuncRefStateSet?(): StateSet
    vfuncRemovePropertyChangeHandler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfuncSetName?(name: string): void
    vfuncSetParent?(parent: Object): void
    vfuncSetRole?(role: Role): void
    vfuncStateChange?(name: string, state_set: boolean): void
    vfuncVisibleDataChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: GObjectAccessible, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: ((obj: GObjectAccessible, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: ((obj: GObjectAccessible, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: ((obj: GObjectAccessible, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: ((obj: GObjectAccessible, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: ((obj: GObjectAccessible, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: ((obj: GObjectAccessible, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: ((obj: GObjectAccessible, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: ((obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: ((obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: ((obj: GObjectAccessible) => void)): number
    connect_after(sigName: "visible-data-changed", callback: ((obj: GObjectAccessible) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GObjectAccessible_ConstructProps)
    _init (config?: GObjectAccessible_ConstructProps): void
    static forObject(obj: GObject.Object): Object
    static $gtype: GObject.Type
}
export interface Hyperlink_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hyperlink {
    /* Properties of Atk.Hyperlink */
    readonly end_index:number
    readonly number_of_anchors:number
    readonly selected_link:boolean
    readonly start_index:number
    /* Fields of Atk.Hyperlink */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Hyperlink */
    getEndIndex(): number
    getNAnchors(): number
    getObject(i: number): Object
    getStartIndex(): number
    getUri(i: number): string
    isInline(): boolean
    isSelectedLink(): boolean
    isValid(): boolean
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
    /* Methods of Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Virtual methods of Atk.Hyperlink */
    vfuncGetEndIndex?(): number
    vfuncGetNAnchors?(): number
    vfuncGetObject?(i: number): Object
    vfuncGetStartIndex?(): number
    vfuncGetUri?(i: number): string
    vfuncIsSelectedLink?(): boolean
    vfuncIsValid?(): boolean
    vfuncLinkActivated?(): void
    vfuncLinkState?(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Hyperlink */
    connect(sigName: "link-activated", callback: ((obj: Hyperlink) => void)): number
    connect_after(sigName: "link-activated", callback: ((obj: Hyperlink) => void)): number
    emit(sigName: "link-activated"): void
    on(sigName: "link-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "link-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "link-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-index", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-index", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number-of-anchors", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-of-anchors", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-link", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-link", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}
export class Misc {
    /* Fields of Atk.Misc */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Misc */
    threadsEnter(): void
    threadsLeave(): void
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
    /* Virtual methods of Atk.Misc */
    vfuncThreadsEnter?(): void
    vfuncThreadsLeave?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Misc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Misc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Misc_ConstructProps)
    _init (config?: Misc_ConstructProps): void
    static getInstance(): Misc
    static $gtype: GObject.Type
}
export interface NoOpObject_ConstructProps extends Object_ConstructProps {
}
export class NoOpObject {
    /* Properties of Atk.Object */
    readonly accessible_component_layer:number
    readonly accessible_component_mdi_zorder:number
    accessible_description:string
    readonly accessible_hypertext_nlinks:number
    accessible_name:string
    accessible_parent:Object
    accessible_role:Role
    accessible_table_caption:string
    accessible_table_caption_object:Object
    accessible_table_column_description:string
    accessible_table_column_header:Object
    accessible_table_row_description:string
    accessible_table_row_header:Object
    accessible_table_summary:Object
    accessible_value:number
    /* Fields of Atk.NoOpObject */
    parent:Object
    /* Fields of Atk.Object */
    description:string
    name:string
    role:Role
    relation_set:RelationSet
    layer:Layer
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    nullget_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    nullget_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handler_id: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    nullset_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk.Action */
    doAction(i: number): boolean
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    getAlpha(): number
    getExtents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coord_type: CoordType): Object | null
    removeFocusHandler(handler_id: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    setPosition(x: number, y: number, coord_type: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atk.Document */
    getAttributeValue(attribute_name: string): string | null
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attribute_name: string, attribute_value: string): boolean
    /* Methods of Atk.EditableText */
    copyText(start_pos: number, end_pos: number): void
    cutText(start_pos: number, end_pos: number): void
    deleteText(start_pos: number, end_pos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    setTextContents(string: string): void
    /* Methods of Atk.Hypertext */
    getLink(link_index: number): Hyperlink
    getLinkIndex(char_index: number): number
    getNLinks(): number
    /* Methods of Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    setImageDescription(description: string): boolean
    /* Methods of Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Methods of Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Object | null
    getColumnAtIndex(index_: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index_: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Object): void
    setSummary(accessible: Object): void
    /* Methods of Atk.TableCell */
    getColumnHeaderCells(): Object[]
    getColumnSpan(): number
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    getRowHeaderCells(): Object[]
    getRowSpan(): number
    getTable(): Object
    /* Methods of Atk.Text */
    getBoundedRanges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    getRangeExtents(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    getSelection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    getText(start_offset: number, end_offset: number): string
    getTextAfterOffset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    getTextAtOffset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    getTextBeforeOffset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    scrollSubstringTo(start_offset: number, end_offset: number, type: ScrollType): boolean
    scrollSubstringToPoint(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Methods of Atk.Value */
    getCurrentValue(): /* value */ any
    getIncrement(): number
    getMaximumValue(): /* value */ any
    getMinimumIncrement(): /* value */ any
    getMinimumValue(): /* value */ any
    getRange(): Range | null
    getSubRanges(): Range[]
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    setCurrentValue(value: any): boolean
    setValue(new_value: number): void
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged?(child?: object | null): void
    vfuncChildrenChanged?(change_index: number, changed_child?: object | null): void
    vfuncFocusEvent?(focus_in: boolean): void
    vfuncGetAttributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfuncGetIndexInParent?(): number
    vfuncGetLayer?(): Layer
    vfuncGetMdiZorder?(): number
    vfuncGetNChildren?(): number
    vfunc_get_name?(): string | null
    vfuncGetObjectLocale?(): string
    vfuncGetParent?(): Object
    vfuncGetRole?(): Role
    vfuncInitialize?(data?: object | null): void
    vfuncPropertyChange?(values: PropertyValues): void
    vfuncRefRelationSet?(): RelationSet
    vfuncRefStateSet?(): StateSet
    vfuncRemovePropertyChangeHandler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfuncSetName?(name: string): void
    vfuncSetParent?(parent: Object): void
    vfuncSetRole?(role: Role): void
    vfuncStateChange?(name: string, state_set: boolean): void
    vfuncVisibleDataChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: NoOpObject, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: ((obj: NoOpObject, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: ((obj: NoOpObject, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: ((obj: NoOpObject, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: ((obj: NoOpObject, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: ((obj: NoOpObject, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: ((obj: NoOpObject, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: ((obj: NoOpObject, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: ((obj: NoOpObject, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: ((obj: NoOpObject, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "visible-data-changed", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: NoOpObject, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: ((obj: NoOpObject, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "load-complete", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "load-complete"): void
    on(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-stopped", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "load-stopped", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "load-stopped"): void
    on(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-changed", callback: ((obj: NoOpObject, page_number: number) => void)): number
    connect_after(sigName: "page-changed", callback: ((obj: NoOpObject, page_number: number) => void)): number
    emit(sigName: "page-changed", page_number: number): void
    on(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reload", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "reload", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "reload"): void
    on(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: ((obj: NoOpObject, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: ((obj: NoOpObject, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    on(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "selection-changed", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "selection-changed"): void
    on(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    on(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-inserted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    on(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-reordered", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "column-reordered", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "column-reordered"): void
    on(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "model-changed", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "model-changed", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "model-changed"): void
    on(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-deleted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    on(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-inserted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    on(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-reordered", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "row-reordered", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "row-reordered"): void
    on(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "text-attributes-changed"): void
    on(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-caret-moved", callback: ((obj: NoOpObject, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: ((obj: NoOpObject, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    on(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-changed", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    on(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-insert", callback: ((obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: ((obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-remove", callback: ((obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: ((obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-selection-changed", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "text-selection-changed", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "text-selection-changed"): void
    on(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: ((obj: NoOpObject, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: ((obj: NoOpObject, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "activate", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "create", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "create"): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivate", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "deactivate", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "deactivate"): void
    on(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "destroy", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "maximize", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "maximize", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "maximize"): void
    on(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "minimize", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "minimize", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "minimize"): void
    on(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "move", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "move"): void
    on(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resize", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "resize", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "resize"): void
    on(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restore", callback: ((obj: NoOpObject) => void)): number
    connect_after(sigName: "restore", callback: ((obj: NoOpObject) => void)): number
    emit(sigName: "restore"): void
    on(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoOpObject_ConstructProps)
    _init (config?: NoOpObject_ConstructProps): void
    static new(obj: GObject.Object): NoOpObject
    static $gtype: GObject.Type
}
export interface NoOpObjectFactory_ConstructProps extends ObjectFactory_ConstructProps {
}
export class NoOpObjectFactory {
    /* Fields of Atk.NoOpObjectFactory */
    parent:ObjectFactory
    /* Fields of Atk.ObjectFactory */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NoOpObjectFactory_ConstructProps)
    _init (config?: NoOpObjectFactory_ConstructProps): void
    static new(): NoOpObjectFactory
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    accessible_description?:string
    accessible_name?:string
    accessible_parent?:Object
    accessible_role?:Role
    accessible_table_caption?:string
    accessible_table_caption_object?:Object
    accessible_table_column_description?:string
    accessible_table_column_header?:Object
    accessible_table_row_description?:string
    accessible_table_row_header?:Object
    accessible_table_summary?:Object
    accessible_value?:number
}
export class Object {
    /* Properties of Atk.Object */
    readonly accessible_component_layer:number
    readonly accessible_component_mdi_zorder:number
    accessible_description:string
    readonly accessible_hypertext_nlinks:number
    accessible_name:string
    accessible_parent:Object
    accessible_role:Role
    accessible_table_caption:string
    accessible_table_caption_object:Object
    accessible_table_column_description:string
    accessible_table_column_header:Object
    accessible_table_row_description:string
    accessible_table_row_header:Object
    accessible_table_summary:Object
    accessible_value:number
    /* Fields of Atk.Object */
    parent:GObject.Object
    description:string
    name:string
    role:Role
    relation_set:RelationSet
    layer:Layer
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    nullget_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    nullget_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handler_id: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    nullset_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged?(child?: object | null): void
    vfuncChildrenChanged?(change_index: number, changed_child?: object | null): void
    vfuncFocusEvent?(focus_in: boolean): void
    vfuncGetAttributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfuncGetIndexInParent?(): number
    vfuncGetLayer?(): Layer
    vfuncGetMdiZorder?(): number
    vfuncGetNChildren?(): number
    vfunc_get_name?(): string | null
    vfuncGetObjectLocale?(): string
    vfuncGetParent?(): Object
    vfuncGetRole?(): Role
    vfuncInitialize?(data?: object | null): void
    vfuncPropertyChange?(values: PropertyValues): void
    vfuncRefRelationSet?(): RelationSet
    vfuncRefStateSet?(): StateSet
    vfuncRemovePropertyChangeHandler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfuncSetName?(name: string): void
    vfuncSetParent?(parent: Object): void
    vfuncSetRole?(role: Role): void
    vfuncStateChange?(name: string, state_set: boolean): void
    vfuncVisibleDataChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: Object, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: ((obj: Object, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: ((obj: Object, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: ((obj: Object, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: ((obj: Object, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: ((obj: Object, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: ((obj: Object, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: ((obj: Object, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: ((obj: Object, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: ((obj: Object, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: ((obj: Object) => void)): number
    connect_after(sigName: "visible-data-changed", callback: ((obj: Object) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactory {
    /* Fields of Atk.ObjectFactory */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plug_ConstructProps extends Object_ConstructProps {
}
export class Plug {
    /* Properties of Atk.Object */
    readonly accessible_component_layer:number
    readonly accessible_component_mdi_zorder:number
    accessible_description:string
    readonly accessible_hypertext_nlinks:number
    accessible_name:string
    accessible_parent:Object
    accessible_role:Role
    accessible_table_caption:string
    accessible_table_caption_object:Object
    accessible_table_column_description:string
    accessible_table_column_header:Object
    accessible_table_row_description:string
    accessible_table_row_header:Object
    accessible_table_summary:Object
    accessible_value:number
    /* Fields of Atk.Plug */
    parent:Object
    /* Fields of Atk.Object */
    description:string
    name:string
    role:Role
    relation_set:RelationSet
    layer:Layer
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Plug */
    getId(): string
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    nullget_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    nullget_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handler_id: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    nullset_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    getAlpha(): number
    getExtents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coord_type: CoordType): Object | null
    removeFocusHandler(handler_id: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    setPosition(x: number, y: number, coord_type: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Plug */
    vfuncGetObjectId?(): string
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged?(child?: object | null): void
    vfuncChildrenChanged?(change_index: number, changed_child?: object | null): void
    vfuncFocusEvent?(focus_in: boolean): void
    vfuncGetAttributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfuncGetIndexInParent?(): number
    vfuncGetLayer?(): Layer
    vfuncGetMdiZorder?(): number
    vfuncGetNChildren?(): number
    vfunc_get_name?(): string | null
    vfuncGetObjectLocale?(): string
    vfuncGetParent?(): Object
    vfuncGetRole?(): Role
    vfuncInitialize?(data?: object | null): void
    vfuncPropertyChange?(values: PropertyValues): void
    vfuncRefRelationSet?(): RelationSet
    vfuncRefStateSet?(): StateSet
    vfuncRemovePropertyChangeHandler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfuncSetName?(name: string): void
    vfuncSetParent?(parent: Object): void
    vfuncSetRole?(role: Role): void
    vfuncStateChange?(name: string, state_set: boolean): void
    vfuncVisibleDataChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: Plug, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: ((obj: Plug, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: ((obj: Plug, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: ((obj: Plug, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: ((obj: Plug, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: ((obj: Plug, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: ((obj: Plug, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: ((obj: Plug, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: ((obj: Plug, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: ((obj: Plug, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: ((obj: Plug) => void)): number
    connect_after(sigName: "visible-data-changed", callback: ((obj: Plug) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: Plug, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: ((obj: Plug, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    static new(): Plug
    static $gtype: GObject.Type
}
export interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
export class Registry {
    /* Fields of Atk.Registry */
    parent:GObject.Object
    factory_type_registry:GLib.HashTable
    factory_singleton_cache:GLib.HashTable
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Registry */
    getFactory(type: GObject.Type): ObjectFactory
    getFactoryType(type: GObject.Type): GObject.Type
    setFactoryType(type: GObject.Type, factory_type: GObject.Type): void
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
    connect(sigName: "notify", callback: ((obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Registry, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
    relation_type?:RelationType
    target?:GObject.ValueArray
}
export class Relation {
    /* Properties of Atk.Relation */
    relation_type:RelationType
    target:GObject.ValueArray
    /* Fields of Atk.Relation */
    parent:GObject.Object
    relationship:RelationType
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Relation */
    addTarget(target: Object): void
    getRelationType(): RelationType
    getTarget(): Object[]
    removeTarget(target: Object): boolean
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
    connect(sigName: "notify", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    static new(targets: Object[], relationship: RelationType): Relation
    static $gtype: GObject.Type
}
export interface RelationSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class RelationSet {
    /* Fields of Atk.RelationSet */
    parent:GObject.Object
    relations:object[]
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.RelationSet */
    add(relation: Relation): void
    addRelationByType(relationship: RelationType, target: Object): void
    contains(relationship: RelationType): boolean
    containsTarget(relationship: RelationType, target: Object): boolean
    getNRelations(): number
    getRelation(i: number): Relation
    getRelationByType(relationship: RelationType): Relation
    remove(relation: Relation): void
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
    connect(sigName: "notify", callback: ((obj: RelationSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: RelationSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RelationSet_ConstructProps)
    _init (config?: RelationSet_ConstructProps): void
    static new(): RelationSet
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends Object_ConstructProps {
}
export class Socket {
    /* Properties of Atk.Object */
    readonly accessible_component_layer:number
    readonly accessible_component_mdi_zorder:number
    accessible_description:string
    readonly accessible_hypertext_nlinks:number
    accessible_name:string
    accessible_parent:Object
    accessible_role:Role
    accessible_table_caption:string
    accessible_table_caption_object:Object
    accessible_table_column_description:string
    accessible_table_column_header:Object
    accessible_table_row_description:string
    accessible_table_row_header:Object
    accessible_table_summary:Object
    accessible_value:number
    /* Fields of Atk.Socket */
    parent:Object
    /* Fields of Atk.Object */
    description:string
    name:string
    role:Role
    relation_set:RelationSet
    layer:Layer
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Socket */
    embed(plug_id: string): void
    isOccupied(): boolean
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    nullget_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    nullget_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handler_id: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    nullset_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    getAlpha(): number
    getExtents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coord_type: CoordType): Object | null
    removeFocusHandler(handler_id: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    setPosition(x: number, y: number, coord_type: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Socket */
    vfuncEmbed?(plug_id: string): void
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged?(child?: object | null): void
    vfuncChildrenChanged?(change_index: number, changed_child?: object | null): void
    vfuncFocusEvent?(focus_in: boolean): void
    vfuncGetAttributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfuncGetIndexInParent?(): number
    vfuncGetLayer?(): Layer
    vfuncGetMdiZorder?(): number
    vfuncGetNChildren?(): number
    vfunc_get_name?(): string | null
    vfuncGetObjectLocale?(): string
    vfuncGetParent?(): Object
    vfuncGetRole?(): Role
    vfuncInitialize?(data?: object | null): void
    vfuncPropertyChange?(values: PropertyValues): void
    vfuncRefRelationSet?(): RelationSet
    vfuncRefStateSet?(): StateSet
    vfuncRemovePropertyChangeHandler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfuncSetName?(name: string): void
    vfuncSetParent?(parent: Object): void
    vfuncSetRole?(role: Role): void
    vfuncStateChange?(name: string, state_set: boolean): void
    vfuncVisibleDataChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: Socket, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: ((obj: Socket, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: ((obj: Socket, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: ((obj: Socket, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: ((obj: Socket, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: ((obj: Socket, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: ((obj: Socket, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: ((obj: Socket, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: ((obj: Socket, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: ((obj: Socket, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: ((obj: Socket) => void)): number
    connect_after(sigName: "visible-data-changed", callback: ((obj: Socket) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: Socket, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: ((obj: Socket, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    static new(): Socket
    static $gtype: GObject.Type
}
export interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class StateSet {
    /* Fields of Atk.StateSet */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.StateSet */
    addState(type: StateType): boolean
    addStates(types: StateType[]): void
    andSets(compare_set: StateSet): StateSet
    clearStates(): void
    containsState(type: StateType): boolean
    containsStates(types: StateType[]): boolean
    isEmpty(): boolean
    orSets(compare_set: StateSet): StateSet | null
    removeState(type: StateType): boolean
    xorSets(compare_set: StateSet): StateSet
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
    connect(sigName: "notify", callback: ((obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: StateSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    static new(): StateSet
    static $gtype: GObject.Type
}
export interface Util_ConstructProps extends GObject.Object_ConstructProps {
}
export class Util {
    /* Fields of Atk.Util */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    connect(sigName: "notify", callback: ((obj: Util, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Util, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
export class Attribute {
    /* Fields of Atk.Attribute */
    name:string
    value:string
    static name: string
    static setFree(attrib_set: AttributeSet): void
}
export class Implementor {
    /* Methods of Atk.Implementor */
    refAccessible(): Object
    static name: string
}
export class KeyEventStruct {
    /* Fields of Atk.KeyEventStruct */
    type:number
    state:number
    keyval:number
    length:number
    string:string
    keycode:number
    timestamp:number
    static name: string
}
export class PropertyValues {
    /* Fields of Atk.PropertyValues */
    property_name:string
    old_value:any
    new_value:any
    static name: string
}
export class Range {
    /* Methods of Atk.Range */
    copy(): Range
    free(): void
    getDescription(): string
    getLowerLimit(): number
    getUpperLimit(): number
    static name: string
    static new(lower_limit: number, upper_limit: number, description: string): Range
    constructor(lower_limit: number, upper_limit: number, description: string)
    static new(lower_limit: number, upper_limit: number, description: string): Range
}
export class Rectangle {
    /* Fields of Atk.Rectangle */
    x:number
    y:number
    width:number
    height:number
    static name: string
}
export class TextRange {
    /* Fields of Atk.TextRange */
    bounds:TextRectangle
    start_offset:number
    end_offset:number
    content:string
    static name: string
}
export class TextRectangle {
    /* Fields of Atk.TextRectangle */
    x:number
    y:number
    width:number
    height:number
    static name: string
}
type AttributeSet = any
type State = number
}