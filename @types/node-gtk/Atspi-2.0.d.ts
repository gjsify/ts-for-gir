/**
 * Atspi-2.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="DBus-1.0.d.ts" />

declare namespace Atspi {

export enum CollectionMatchType {
    INVALID,
    ALL,
    ANY,
    NONE,
    EMPTY,
    LAST_DEFINED,
}
export enum CollectionSortOrder {
    INVALID,
    CANONICAL,
    FLOW,
    TAB,
    REVERSE_CANONICAL,
    REVERSE_FLOW,
    REVERSE_TAB,
    LAST_DEFINED,
}
export enum CollectionTreeTraversalType {
    RESTRICT_CHILDREN,
    RESTRICT_SIBLING,
    INORDER,
    LAST_DEFINED,
}
export enum ComponentLayer {
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
    LAST_DEFINED,
}
export enum CoordType {
    SCREEN,
    WINDOW,
    PARENT,
}
export enum EventType {
    KEY_PRESSED_EVENT,
    KEY_RELEASED_EVENT,
    BUTTON_PRESSED_EVENT,
    BUTTON_RELEASED_EVENT,
}
export enum KeyEventType {
    PRESSED,
    RELEASED,
}
export enum KeySynthType {
    PRESS,
    RELEASE,
    PRESSRELEASE,
    SYM,
    STRING,
    LOCKMODIFIERS,
    UNLOCKMODIFIERS,
}
export enum LocaleType {
    MESSAGES,
    COLLATE,
    CTYPE,
    MONETARY,
    NUMERIC,
    TIME,
}
export enum ModifierType {
    SHIFT,
    SHIFTLOCK,
    CONTROL,
    ALT,
    META,
    META2,
    META3,
    NUMLOCK,
}
export enum RelationType {
    NULL,
    LABEL_FOR,
    LABELLED_BY,
    CONTROLLER_FOR,
    CONTROLLED_BY,
    MEMBER_OF,
    TOOLTIP_FOR,
    NODE_CHILD_OF,
    NODE_PARENT_OF,
    EXTENDED,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIPTION_FOR,
    DESCRIBED_BY,
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
    FOCUS_TRAVERSABLE,
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
    SPIN_BUTTON,
    SPLIT_PANE,
    STATUS_BAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAROFF_MENU_ITEM,
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
    EXTENDED,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDITBAR,
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
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    FOOTNOTE,
    CONTENT_DELETION,
    CONTENT_INSERTION,
    MARK,
    SUGGESTION,
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
    COLLAPSED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HAS_TOOLTIP,
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
    REQUIRED,
    TRUNCATED,
    ANIMATED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    IS_DEFAULT,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    READ_ONLY,
    LAST_DEFINED,
}
export enum TextBoundaryType {
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
export enum Cache {
    NONE,
    PARENT,
    CHILDREN,
    NAME,
    DESCRIPTION,
    STATES,
    ROLE,
    INTERFACES,
    ATTRIBUTES,
    ALL,
    DEFAULT,
    UNDEFINED,
}
export enum KeyListenerSyncType {
    NOSYNC,
    SYNCHRONOUS,
    CANCONSUME,
    ALL_WINDOWS,
}
export const COMPONENTLAYER_COUNT: number
export const COORD_TYPE_COUNT: number
export const DBUS_INTERFACE_ACCESSIBLE: string
export const DBUS_INTERFACE_ACTION: string
export const DBUS_INTERFACE_APPLICATION: string
export const DBUS_INTERFACE_CACHE: string
export const DBUS_INTERFACE_COLLECTION: string
export const DBUS_INTERFACE_COMPONENT: string
export const DBUS_INTERFACE_DEC: string
export const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string
export const DBUS_INTERFACE_DOCUMENT: string
export const DBUS_INTERFACE_EDITABLE_TEXT: string
export const DBUS_INTERFACE_EVENT_KEYBOARD: string
export const DBUS_INTERFACE_EVENT_MOUSE: string
export const DBUS_INTERFACE_EVENT_OBJECT: string
export const DBUS_INTERFACE_EVENT_SCREEN_READER: string
export const DBUS_INTERFACE_HYPERLINK: string
export const DBUS_INTERFACE_HYPERTEXT: string
export const DBUS_INTERFACE_IMAGE: string
export const DBUS_INTERFACE_REGISTRY: string
export const DBUS_INTERFACE_SELECTION: string
export const DBUS_INTERFACE_SOCKET: string
export const DBUS_INTERFACE_TABLE: string
export const DBUS_INTERFACE_TABLE_CELL: string
export const DBUS_INTERFACE_TEXT: string
export const DBUS_INTERFACE_VALUE: string
export const DBUS_NAME_REGISTRY: string
export const DBUS_PATH_DEC: string
export const DBUS_PATH_NULL: string
export const DBUS_PATH_REGISTRY: string
export const DBUS_PATH_ROOT: string
export const DBUS_PATH_SCREEN_READER: string
export const EVENTTYPE_COUNT: number
export const KEYEVENTTYPE_COUNT: number
export const KEYSYNTHTYPE_COUNT: number
export const LOCALE_TYPE_COUNT: number
export const MATCHTYPES_COUNT: number
export const MODIFIERTYPE_COUNT: number
export const RELATIONTYPE_COUNT: number
export const ROLE_COUNT: number
export const SCROLLTYPE_COUNT: number
export const SORTORDER_COUNT: number
export const STATETYPE_COUNT: number
export const TEXT_BOUNDARY_TYPE_COUNT: number
export const TEXT_CLIP_TYPE_COUNT: number
export const TREETRAVERSALTYPE_COUNT: number
export function deregisterDeviceEventListener(listener: DeviceListener, filter?: object | null): boolean
export function deregisterKeystrokeListener(listener: DeviceListener, keySet: KeyDefinition[] | null, modmask: KeyMaskType, eventTypes: KeyEventMask): boolean
export function eventMain(): void
export function eventQuit(): void
export function exit(): number
export function generateKeyboardEvent(keyval: number, keystring: string | null, synthType: KeySynthType): boolean
export function generateMouseEvent(x: number, y: number, name: string): boolean
export function getDesktop(i: number): Accessible
export function getDesktopCount(): number
export function getDesktopList(): Accessible[]
export function init(): number
export function isInitialized(): boolean
export function registerDeviceEventListener(listener: DeviceListener, eventTypes: DeviceEventMask, filter?: object | null): boolean
export function registerKeystrokeListener(listener: DeviceListener, keySet: KeyDefinition[] | null, modmask: KeyMaskType, eventTypes: KeyEventMask, syncType: KeyListenerSyncType): boolean
export function roleGetName(role: Role): string
export function setMainContext(cnx: GLib.MainContext): void
export function setReferenceWindow(accessible: Accessible): void
export function setTimeout(val: number, startupTime: number): void
export interface DeviceListenerCB {
    (stroke: DeviceEvent): boolean
}
export interface DeviceListenerSimpleCB {
    (stroke: DeviceEvent): boolean
}
export interface EventListenerCB {
    (event: Event): void
}
export interface EventListenerSimpleCB {
    (event: Event): void
}
export interface KeyCallback {
    (device: Device, pressed: boolean, keycode: number, keysym: number, modifiers: number, keystring: string): void
}
export class Action {
    /* Methods of Atspi.Action */
    doAction(i: number): boolean
    getActionDescription(i: number): string
    getKeyBinding(i: number): string
    getLocalizedName(i: number): string
    getNActions(): number
    getActionName(i: number): string
    static name: string
}
export class Collection {
    /* Methods of Atspi.Collection */
    getActiveDescendant(): Accessible
    getMatches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    getMatchesFrom(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    getMatchesTo(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limitScope: boolean, count: number, traverse: boolean): Accessible[]
    isAncestorOf(test: Accessible): boolean
    static name: string
}
export class Component {
    /* Methods of Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    getAccessibleAtPoint(x: number, y: number, ctype: CoordType): Accessible | null
    getAlpha(): number
    getExtents(ctype: CoordType): Rect
    getLayer(): ComponentLayer
    getMdiZOrder(): number
    getPosition(ctype: CoordType): Point
    getSize(): Point
    grabFocus(): boolean
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    setPosition(x: number, y: number, ctype: CoordType): boolean
    setSize(width: number, height: number): boolean
    static name: string
}
export class Document {
    /* Methods of Atspi.Document */
    getDocumentAttributeValue(attribute: string): string
    getDocumentAttributes(): GLib.HashTable
    getCurrentPageNumber(): number
    getLocale(): string
    getPageCount(): number
    static name: string
}
export class EditableText {
    /* Methods of Atspi.EditableText */
    copyText(startPos: number, endPos: number): boolean
    cutText(startPos: number, endPos: number): boolean
    deleteText(startPos: number, endPos: number): boolean
    insertText(position: number, text: string, length: number): boolean
    pasteText(position: number): boolean
    setTextContents(newContents: string): boolean
    static name: string
}
export class Hypertext {
    /* Methods of Atspi.Hypertext */
    getLink(linkIndex: number): Hyperlink | null
    getLinkIndex(characterOffset: number): number
    getNLinks(): number
    static name: string
}
export class Image {
    /* Methods of Atspi.Image */
    getImageDescription(): string
    getImageExtents(ctype: CoordType): Rect
    getImageLocale(): string
    getImagePosition(ctype: CoordType): Point
    getImageSize(): Point
    static name: string
}
export class Selection {
    /* Methods of Atspi.Selection */
    clearSelection(): boolean
    deselectChild(childIndex: number): boolean
    deselectSelectedChild(selectedChildIndex: number): boolean
    getNSelectedChildren(): number
    getSelectedChild(selectedChildIndex: number): Accessible
    isChildSelected(childIndex: number): boolean
    selectAll(): boolean
    selectChild(childIndex: number): boolean
    static name: string
}
export class Table {
    /* Methods of Atspi.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getAccessibleAt(row: number, column: number): Accessible
    getCaption(): Accessible
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Accessible
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getNSelectedColumns(): number
    getNSelectedRows(): number
    getRowAtIndex(index: number): number
    getRowColumnExtentsAtIndex(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* rowExtents */ number, /* colExtents */ number, /* isSelected */ boolean ]
    getRowDescription(row: number): string
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Accessible
    getSelectedColumns(): number[]
    getSelectedRows(): number[]
    getSummary(): Accessible
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    static name: string
}
export class TableCell {
    /* Methods of Atspi.TableCell */
    getColumnHeaderCells(): Accessible[]
    getColumnIndex(): number
    getColumnSpan(): number
    getPosition(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    getRowColumnSpan(): [ /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getRowHeaderCells(): Accessible[]
    getRowSpan(): number
    getTable(): Accessible
    static name: string
}
export class Text {
    /* Methods of Atspi.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getAttributeRun(offset: number, includeDefaults: boolean): [ /* returnType */ GLib.HashTable, /* startOffset */ number, /* endOffset */ number ]
    getTextAttributeValue(offset: number, attributeName: string): string | null
    getTextAttributes(offset: number): [ /* returnType */ GLib.HashTable, /* startOffset */ number, /* endOffset */ number ]
    getBoundedRanges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, type: CoordType): Rect
    getDefaultAttributes(): GLib.HashTable
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, type: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, type: CoordType): Rect
    getSelection(selectionNum: number): Range
    getStringAtOffset(offset: number, granularity: TextGranularity): TextRange
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, type: TextBoundaryType): TextRange
    getTextAtOffset(offset: number, type: TextBoundaryType): TextRange
    getTextBeforeOffset(offset: number, type: TextBoundaryType): TextRange
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(newOffset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    static name: string
}
export class Value {
    /* Methods of Atspi.Value */
    getCurrentValue(): number
    getMaximumValue(): number
    getMinimumIncrement(): number
    getMinimumValue(): number
    setCurrentValue(newValue: number): boolean
    static name: string
}
export interface Accessible_ConstructProps extends Object_ConstructProps {
}
export class Accessible {
    /* Fields of Atspi.Accessible */
    parent: Object
    accessibleParent: Accessible
    children: object[]
    role: Role
    interfaces: number
    name: string
    description: string
    states: StateSet
    attributes: GLib.HashTable
    cachedProperties: number
    priv: AccessiblePrivate
    /* Fields of Atspi.Object */
    app: Application
    path: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.Accessible */
    clearCache(): void
    getAccessibleId(): string
    getActionIface(): Action
    getApplication(): Accessible
    getAtspiVersion(): string
    getAttributes(): GLib.HashTable
    getAttributesAsArray(): string[]
    getChildAtIndex(childIndex: number): Accessible
    getChildCount(): number
    getCollectionIface(): Collection
    getComponentIface(): Component
    getDescription(): string
    getDocumentIface(): Document
    getEditableTextIface(): EditableText
    getHyperlink(): Hyperlink
    getHypertextIface(): Hypertext
    getId(): number
    getImageIface(): Image
    getIndexInParent(): number
    getInterfaces(): string[]
    getLocalizedRoleName(): string
    getName(): string
    getObjectLocale(): string
    getParent(): Accessible | null
    getProcessId(): number
    getRelationSet(): Relation[]
    getRole(): Role
    getRoleName(): string
    getSelectionIface(): Selection
    getStateSet(): StateSet
    getTableIface(): Table
    getTableCell(): TableCell
    getTextIface(): Text
    getToolkitName(): string
    getToolkitVersion(): string
    getValueIface(): Value
    setCacheMask(mask: Cache): void
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
    /* Methods of Atspi.Action */
    doAction(i: number): boolean
    getActionDescription(i: number): string
    getKeyBinding(i: number): string
    getLocalizedName(i: number): string
    getNActions(): number
    getActionName(i: number): string
    /* Methods of Atspi.Collection */
    getActiveDescendant(): Accessible
    getMatches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    getMatchesFrom(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    getMatchesTo(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limitScope: boolean, count: number, traverse: boolean): Accessible[]
    isAncestorOf(test: Accessible): boolean
    /* Methods of Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    getAccessibleAtPoint(x: number, y: number, ctype: CoordType): Accessible | null
    getAlpha(): number
    getExtents(ctype: CoordType): Rect
    getLayer(): ComponentLayer
    getMdiZOrder(): number
    getPosition(ctype: CoordType): Point
    getSize(): Point
    grabFocus(): boolean
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    setPosition(x: number, y: number, ctype: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atspi.Document */
    getDocumentAttributeValue(attribute: string): string
    getDocumentAttributes(): GLib.HashTable
    getCurrentPageNumber(): number
    getLocale(): string
    getPageCount(): number
    /* Methods of Atspi.EditableText */
    copyText(startPos: number, endPos: number): boolean
    cutText(startPos: number, endPos: number): boolean
    deleteText(startPos: number, endPos: number): boolean
    insertText(position: number, text: string, length: number): boolean
    pasteText(position: number): boolean
    setTextContents(newContents: string): boolean
    /* Methods of Atspi.Hypertext */
    getLink(linkIndex: number): Hyperlink | null
    getLinkIndex(characterOffset: number): number
    getNLinks(): number
    /* Methods of Atspi.Image */
    getImageDescription(): string
    getImageExtents(ctype: CoordType): Rect
    getImageLocale(): string
    getImagePosition(ctype: CoordType): Point
    getImageSize(): Point
    /* Methods of Atspi.Selection */
    clearSelection(): boolean
    deselectChild(childIndex: number): boolean
    deselectSelectedChild(selectedChildIndex: number): boolean
    getNSelectedChildren(): number
    getSelectedChild(selectedChildIndex: number): Accessible
    isChildSelected(childIndex: number): boolean
    selectAll(): boolean
    selectChild(childIndex: number): boolean
    /* Methods of Atspi.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getAccessibleAt(row: number, column: number): Accessible
    getCaption(): Accessible
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Accessible
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getNSelectedColumns(): number
    getNSelectedRows(): number
    getRowAtIndex(index: number): number
    getRowColumnExtentsAtIndex(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* rowExtents */ number, /* colExtents */ number, /* isSelected */ boolean ]
    getRowDescription(row: number): string
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Accessible
    getSelectedColumns(): number[]
    getSelectedRows(): number[]
    getSummary(): Accessible
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    /* Methods of Atspi.TableCell */
    getColumnHeaderCells(): Accessible[]
    getColumnIndex(): number
    getColumnSpan(): number
    getPosition(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    getRowColumnSpan(): [ /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getRowHeaderCells(): Accessible[]
    getRowSpan(): number
    getTable(): Accessible
    /* Methods of Atspi.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getAttributeRun(offset: number, includeDefaults: boolean): [ /* returnType */ GLib.HashTable, /* startOffset */ number, /* endOffset */ number ]
    getTextAttributeValue(offset: number, attributeName: string): string | null
    getTextAttributes(offset: number): [ /* returnType */ GLib.HashTable, /* startOffset */ number, /* endOffset */ number ]
    getBoundedRanges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, type: CoordType): Rect
    getDefaultAttributes(): GLib.HashTable
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, type: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, type: CoordType): Rect
    getSelection(selectionNum: number): Range
    getStringAtOffset(offset: number, granularity: TextGranularity): TextRange
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, type: TextBoundaryType): TextRange
    getTextAtOffset(offset: number, type: TextBoundaryType): TextRange
    getTextBeforeOffset(offset: number, type: TextBoundaryType): TextRange
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(newOffset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Methods of Atspi.Value */
    getCurrentValue(): number
    getMaximumValue(): number
    getMinimumIncrement(): number
    getMinimumValue(): number
    setCurrentValue(newValue: number): boolean
    /* Virtual methods of Atspi.Accessible */
    vfuncModeChanged(enabled: boolean): void
    vfuncRegionChanged(currentOffset: number, lastOffset: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atspi.Accessible */
    connect(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    connect_after(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    emit(sigName: "mode-changed", arg1: number, why: string): void
    on(sigName: "mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "region-changed", arg1: number, arg2: number): void
    on(sigName: "region-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "region-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "region-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Accessible_ConstructProps)
    _init (config?: Accessible_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
}
export class Application {
    /* Fields of Atspi.Application */
    parent: GObject.Object
    hash: GLib.HashTable
    busName: string
    bus: DBus.Connection
    root: object
    cache: Cache
    toolkitName: string
    toolkitVersion: string
    atspiVersion: string
    timeAdded: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
export class Device {
    /* Fields of Atspi.Device */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.Device */
    addKeyGrab(kd: KeyDefinition, callback: KeyCallback | null): number
    addKeyWatcher(): void
    getGrabById(id: number): KeyDefinition
    getLockedModifiers(): number
    getModifier(keycode: number): number
    grabKeyboard(): boolean
    mapModifier(keycode: number): number
    notifyKey(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    removeKeyGrab(id: number): void
    ungrabKeyboard(): void
    unmapModifier(keycode: number): void
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
    /* Virtual methods of Atspi.Device */
    vfuncAddKeyGrab(kd: KeyDefinition): void
    vfuncGetLockedModifiers(): number
    vfuncGetModifier(keycode: number): number
    vfuncGrabKeyboard(): boolean
    vfuncMapModifier(keycode: number): number
    vfuncRemoveKeyGrab(id: number): void
    vfuncUngrabKeyboard(): void
    vfuncUnmapModifier(keycode: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    static $gtype: GObject.Type
}
export interface DeviceLegacy_ConstructProps extends Device_ConstructProps {
}
export class DeviceLegacy {
    /* Fields of Atspi.DeviceLegacy */
    parent: Device
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.Device */
    addKeyGrab(kd: KeyDefinition, callback: KeyCallback | null): number
    addKeyWatcher(): void
    getGrabById(id: number): KeyDefinition
    getLockedModifiers(): number
    getModifier(keycode: number): number
    grabKeyboard(): boolean
    mapModifier(keycode: number): number
    notifyKey(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    removeKeyGrab(id: number): void
    ungrabKeyboard(): void
    unmapModifier(keycode: number): void
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
    /* Virtual methods of Atspi.Device */
    vfuncAddKeyGrab(kd: KeyDefinition): void
    vfuncGetLockedModifiers(): number
    vfuncGetModifier(keycode: number): number
    vfuncGrabKeyboard(): boolean
    vfuncMapModifier(keycode: number): number
    vfuncRemoveKeyGrab(id: number): void
    vfuncUngrabKeyboard(): void
    vfuncUnmapModifier(keycode: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceLegacy_ConstructProps)
    _init (config?: DeviceLegacy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceLegacy
    static $gtype: GObject.Type
}
export interface DeviceListener_ConstructProps extends GObject.Object_ConstructProps {
}
export class DeviceListener {
    /* Fields of Atspi.DeviceListener */
    parent: GObject.Object
    id: number
    callbacks: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.DeviceListener */
    addCallback(callback: DeviceListenerCB): void
    removeCallback(callback: DeviceListenerCB): void
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
    /* Virtual methods of Atspi.DeviceListener */
    vfuncDeviceEvent(event: DeviceEvent): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceListener_ConstructProps)
    _init (config?: DeviceListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: DeviceListenerCB): DeviceListener
    static $gtype: GObject.Type
}
export interface DeviceX11_ConstructProps extends Device_ConstructProps {
}
export class DeviceX11 {
    /* Fields of Atspi.DeviceX11 */
    parent: Device
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.Device */
    addKeyGrab(kd: KeyDefinition, callback: KeyCallback | null): number
    addKeyWatcher(): void
    getGrabById(id: number): KeyDefinition
    getLockedModifiers(): number
    getModifier(keycode: number): number
    grabKeyboard(): boolean
    mapModifier(keycode: number): number
    notifyKey(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    removeKeyGrab(id: number): void
    ungrabKeyboard(): void
    unmapModifier(keycode: number): void
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
    /* Virtual methods of Atspi.Device */
    vfuncAddKeyGrab(kd: KeyDefinition): void
    vfuncGetLockedModifiers(): number
    vfuncGetModifier(keycode: number): number
    vfuncGrabKeyboard(): boolean
    vfuncMapModifier(keycode: number): number
    vfuncRemoveKeyGrab(id: number): void
    vfuncUngrabKeyboard(): void
    vfuncUnmapModifier(keycode: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceX11_ConstructProps)
    _init (config?: DeviceX11_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceX11
    static $gtype: GObject.Type
}
export interface EventListener_ConstructProps extends GObject.Object_ConstructProps {
}
export class EventListener {
    /* Fields of Atspi.EventListener */
    parent: GObject.Object
    callback: EventListenerCB
    userData: object
    cbDestroyed: GLib.DestroyNotify
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.EventListener */
    deregister(eventType: string): boolean
    register(eventType: string): boolean
    registerFull(eventType: string, properties?: string[] | null): boolean
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
    connect(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EventListener_ConstructProps)
    _init (config?: EventListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: EventListenerCB): EventListener
    static deregisterFromCallback(callback: EventListenerCB, eventType: string): boolean
    static registerFromCallback(callback: EventListenerCB, eventType: string): boolean
    static registerFromCallbackFull(eventType: string, properties: string[]): boolean
    static $gtype: GObject.Type
}
export interface Hyperlink_ConstructProps extends Object_ConstructProps {
}
export class Hyperlink {
    /* Fields of Atspi.Hyperlink */
    parent: Object
    /* Fields of Atspi.Object */
    app: Application
    path: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.Hyperlink */
    getEndIndex(): number
    getIndexRange(): Range
    getNAnchors(): number
    getObject(i: number): Accessible
    getStartIndex(): number
    getUri(i: number): string
    isValid(): boolean
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
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MatchRule_ConstructProps extends GObject.Object_ConstructProps {
}
export class MatchRule {
    /* Fields of Atspi.MatchRule */
    parent: GObject.Object
    states: StateSet
    statematchtype: CollectionMatchType
    attributes: GLib.HashTable
    attributematchtype: CollectionMatchType
    interfaces: object[]
    interfacematchtype: CollectionMatchType
    roles: number[]
    rolematchtype: CollectionMatchType
    invert: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MatchRule_ConstructProps)
    _init (config?: MatchRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateSet, statematchtype: CollectionMatchType, attributes: GLib.HashTable, attributematchtype: CollectionMatchType, roles: Role[], rolematchtype: CollectionMatchType, interfaces: string[], interfacematchtype: CollectionMatchType, invert: boolean): MatchRule
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
export class Object {
    /* Fields of Atspi.Object */
    parent: GObject.Object
    app: Application
    path: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Relation {
    /* Fields of Atspi.Relation */
    parent: GObject.Object
    relationType: RelationType
    targets: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.Relation */
    getNTargets(): number
    getRelationType(): RelationType
    getTarget(i: number): Accessible
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class StateSet {
    /* Fields of Atspi.StateSet */
    parent: GObject.Object
    accessible: object
    states: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi.StateSet */
    add(state: StateType): void
    compare(set2: StateSet): StateSet
    contains(state: StateType): boolean
    equals(set2: StateSet): boolean
    getStates(): StateType[]
    isEmpty(): boolean
    remove(state: StateType): void
    setByName(name: string, enabled: boolean): void
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
    connect(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
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
    /* Static methods and pseudo-constructors */
    static new(states: StateType[]): StateSet
    static $gtype: GObject.Type
}
export abstract class AccessibleClass {
    /* Fields of Atspi.AccessibleClass */
    parentClass: ObjectClass
    regionChanged: (accessible: Accessible, currentOffset: number, lastOffset: number) => void
    modeChanged: (accessible: Accessible, enabled: boolean) => void
    static name: string
}
export class AccessiblePrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Atspi.ApplicationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DeviceClass {
    /* Fields of Atspi.DeviceClass */
    parentClass: GObject.ObjectClass
    addKeyGrab: (device: Device, kd: KeyDefinition) => void
    removeKeyGrab: (device: Device, id: number) => void
    mapModifier: (device: Device, keycode: number) => number
    unmapModifier: (device: Device, keycode: number) => void
    getModifier: (device: Device, keycode: number) => number
    grabKeyboard: (device: Device) => boolean
    ungrabKeyboard: (device: Device) => void
    getLockedModifiers: (device: Device) => number
    static name: string
}
export class DeviceEvent {
    /* Fields of Atspi.DeviceEvent */
    type: EventType
    id: number
    hwCode: number
    modifiers: number
    timestamp: number
    eventString: string
    isText: boolean
    static name: string
}
export abstract class DeviceLegacyClass {
    /* Fields of Atspi.DeviceLegacyClass */
    parentClass: DeviceClass
    static name: string
}
export abstract class DeviceListenerClass {
    /* Fields of Atspi.DeviceListenerClass */
    parentClass: GObject.ObjectClass
    deviceEvent: (listener: DeviceListener, event: DeviceEvent) => boolean
    static name: string
}
export abstract class DeviceX11Class {
    /* Fields of Atspi.DeviceX11Class */
    parentClass: DeviceClass
    static name: string
}
export class Event {
    /* Fields of Atspi.Event */
    type: string
    source: Accessible
    detail1: number
    detail2: number
    anyData: any
    sender: Accessible
    static name: string
    /* Static methods and pseudo-constructors */
    static main(): void
    static quit(): void
}
export abstract class EventListenerClass {
    /* Fields of Atspi.EventListenerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class EventListenerMode {
    /* Fields of Atspi.EventListenerMode */
    synchronous: boolean
    preemptive: boolean
    global: boolean
    static name: string
}
export abstract class HyperlinkClass {
    /* Fields of Atspi.HyperlinkClass */
    parentClass: ObjectClass
    static name: string
}
export class KeyDefinition {
    /* Fields of Atspi.KeyDefinition */
    keycode: number
    keysym: number
    keystring: string
    modifiers: number
    static name: string
}
export class KeySet {
    /* Fields of Atspi.KeySet */
    keysyms: number
    keycodes: number
    keystrings: string
    len: number
    static name: string
}
export abstract class MatchRuleClass {
    /* Fields of Atspi.MatchRuleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Atspi.ObjectClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Point {
    /* Fields of Atspi.Point */
    x: number
    y: number
    /* Methods of Atspi.Point */
    copy(): Point
    static name: string
}
export class Range {
    /* Fields of Atspi.Range */
    startOffset: number
    endOffset: number
    /* Methods of Atspi.Range */
    copy(): Range
    static name: string
}
export class Rect {
    /* Fields of Atspi.Rect */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Atspi.Rect */
    copy(): Rect
    static name: string
}
export abstract class RelationClass {
    /* Fields of Atspi.RelationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class StateSetClass {
    /* Fields of Atspi.StateSetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class TextRange {
    /* Fields of Atspi.TextRange */
    startOffset: number
    endOffset: number
    content: string
    static name: string
}
type ControllerEventMask = number
type DeviceEventMask = number
type KeyEventMask = number
type KeyMaskType = number
type KeystrokeListener = void
}