/**
 * Atspi-2.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as DBus from './DBus-1.0';

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
export function deregister_device_event_listener(listener: DeviceListener, filter?: object | null): boolean
export function deregister_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask): boolean
export function event_main(): void
export function event_quit(): void
export function exit(): number
export function generate_keyboard_event(keyval: number, keystring: string | null, synth_type: KeySynthType): boolean
export function generate_mouse_event(x: number, y: number, name: string): boolean
export function get_desktop(i: number): Accessible
export function get_desktop_count(): number
export function get_desktop_list(): Accessible[]
export function init(): number
export function is_initialized(): boolean
export function register_device_event_listener(listener: DeviceListener, event_types: DeviceEventMask, filter?: object | null): boolean
export function register_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask, sync_type: KeyListenerSyncType): boolean
export function role_get_name(role: Role): string
export function set_main_context(cnx: GLib.MainContext): void
export function set_reference_window(accessible: Accessible): void
export function set_timeout(val: number, startup_time: number): void
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
    do_action(i: number): boolean
    get_action_description(i: number): string
    get_key_binding(i: number): string
    get_localized_name(i: number): string
    get_n_actions(): number
    get_action_name(i: number): string
    static name: string
}
export class Collection {
    /* Methods of Atspi.Collection */
    get_active_descendant(): Accessible
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[]
    is_ancestor_of(test: Accessible): boolean
    static name: string
}
export class Component {
    /* Methods of Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null
    get_alpha(): number
    get_extents(ctype: CoordType): Rect
    get_layer(): ComponentLayer
    get_mdi_z_order(): number
    get_position(ctype: CoordType): Point
    get_size(): Point
    grab_focus(): boolean
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    set_position(x: number, y: number, ctype: CoordType): boolean
    set_size(width: number, height: number): boolean
    static name: string
}
export class Document {
    /* Methods of Atspi.Document */
    get_document_attribute_value(attribute: string): string
    get_document_attributes(): GLib.HashTable
    get_current_page_number(): number
    get_locale(): string
    get_page_count(): number
    static name: string
}
export class EditableText {
    /* Methods of Atspi.EditableText */
    copy_text(start_pos: number, end_pos: number): boolean
    cut_text(start_pos: number, end_pos: number): boolean
    delete_text(start_pos: number, end_pos: number): boolean
    insert_text(position: number, text: string, length: number): boolean
    paste_text(position: number): boolean
    set_text_contents(new_contents: string): boolean
    static name: string
}
export class Hypertext {
    /* Methods of Atspi.Hypertext */
    get_link(link_index: number): Hyperlink | null
    get_link_index(character_offset: number): number
    get_n_links(): number
    static name: string
}
export class Image {
    /* Methods of Atspi.Image */
    get_image_description(): string
    get_image_extents(ctype: CoordType): Rect
    get_image_locale(): string
    get_image_position(ctype: CoordType): Point
    get_image_size(): Point
    static name: string
}
export class Selection {
    /* Methods of Atspi.Selection */
    clear_selection(): boolean
    deselect_child(child_index: number): boolean
    deselect_selected_child(selected_child_index: number): boolean
    get_n_selected_children(): number
    get_selected_child(selected_child_index: number): Accessible
    is_child_selected(child_index: number): boolean
    select_all(): boolean
    select_child(child_index: number): boolean
    static name: string
}
export class Table {
    /* Methods of Atspi.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_accessible_at(row: number, column: number): Accessible
    get_caption(): Accessible
    get_column_at_index(index: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Accessible
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_n_selected_columns(): number
    get_n_selected_rows(): number
    get_row_at_index(index: number): number
    get_row_column_extents_at_index(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* row_extents */ number, /* col_extents */ number, /* is_selected */ boolean ]
    get_row_description(row: number): string
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Accessible
    get_selected_columns(): number[]
    get_selected_rows(): number[]
    get_summary(): Accessible
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    static name: string
}
export class TableCell {
    /* Methods of Atspi.TableCell */
    get_column_header_cells(): Accessible[]
    get_column_index(): number
    get_column_span(): number
    get_position(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Accessible[]
    get_row_span(): number
    get_table(): Accessible
    static name: string
}
export class Text {
    /* Methods of Atspi.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_attribute_run(offset: number, include_defaults: boolean): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_text_attribute_value(offset: number, attribute_name: string): string | null
    get_text_attributes(offset: number): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, type: CoordType): Rect
    get_default_attributes(): GLib.HashTable
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, type: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect
    get_selection(selection_num: number): Range
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    set_caret_offset(new_offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    static name: string
}
export class Value {
    /* Methods of Atspi.Value */
    get_current_value(): number
    get_maximum_value(): number
    get_minimum_increment(): number
    get_minimum_value(): number
    set_current_value(new_value: number): boolean
    static name: string
}
export interface Accessible_ConstructProps extends Object_ConstructProps {
}
export class Accessible {
    /* Fields of Atspi.Accessible */
    parent: Object
    accessible_parent: Accessible
    children: object[]
    role: Role
    interfaces: number
    name: string
    description: string
    states: StateSet
    attributes: GLib.HashTable
    cached_properties: number
    priv: AccessiblePrivate
    /* Fields of Atspi.Object */
    app: Application
    path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.Accessible */
    clear_cache(): void
    get_accessible_id(): string
    get_action_iface(): Action
    get_application(): Accessible
    get_atspi_version(): string
    get_attributes(): GLib.HashTable
    get_attributes_as_array(): string[]
    get_child_at_index(child_index: number): Accessible
    get_child_count(): number
    get_collection_iface(): Collection
    get_component_iface(): Component
    get_description(): string
    get_document_iface(): Document
    get_editable_text_iface(): EditableText
    get_hyperlink(): Hyperlink
    get_hypertext_iface(): Hypertext
    get_id(): number
    get_image_iface(): Image
    get_index_in_parent(): number
    get_interfaces(): string[]
    get_localized_role_name(): string
    get_name(): string
    get_object_locale(): string
    get_parent(): Accessible | null
    get_process_id(): number
    get_relation_set(): Relation[]
    get_role(): Role
    get_role_name(): string
    get_selection_iface(): Selection
    get_state_set(): StateSet
    get_table_iface(): Table
    get_table_cell(): TableCell
    get_text_iface(): Text
    get_toolkit_name(): string
    get_toolkit_version(): string
    get_value_iface(): Value
    set_cache_mask(mask: Cache): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Atspi.Action */
    do_action(i: number): boolean
    get_action_description(i: number): string
    get_key_binding(i: number): string
    get_localized_name(i: number): string
    get_n_actions(): number
    get_action_name(i: number): string
    /* Methods of Atspi.Collection */
    get_active_descendant(): Accessible
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[]
    is_ancestor_of(test: Accessible): boolean
    /* Methods of Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null
    get_alpha(): number
    get_extents(ctype: CoordType): Rect
    get_layer(): ComponentLayer
    get_mdi_z_order(): number
    get_position(ctype: CoordType): Point
    get_size(): Point
    grab_focus(): boolean
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    set_position(x: number, y: number, ctype: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Methods of Atspi.Document */
    get_document_attribute_value(attribute: string): string
    get_document_attributes(): GLib.HashTable
    get_current_page_number(): number
    get_locale(): string
    get_page_count(): number
    /* Methods of Atspi.EditableText */
    copy_text(start_pos: number, end_pos: number): boolean
    cut_text(start_pos: number, end_pos: number): boolean
    delete_text(start_pos: number, end_pos: number): boolean
    insert_text(position: number, text: string, length: number): boolean
    paste_text(position: number): boolean
    set_text_contents(new_contents: string): boolean
    /* Methods of Atspi.Hypertext */
    get_link(link_index: number): Hyperlink | null
    get_link_index(character_offset: number): number
    get_n_links(): number
    /* Methods of Atspi.Image */
    get_image_description(): string
    get_image_extents(ctype: CoordType): Rect
    get_image_locale(): string
    get_image_position(ctype: CoordType): Point
    get_image_size(): Point
    /* Methods of Atspi.Selection */
    clear_selection(): boolean
    deselect_child(child_index: number): boolean
    deselect_selected_child(selected_child_index: number): boolean
    get_n_selected_children(): number
    get_selected_child(selected_child_index: number): Accessible
    is_child_selected(child_index: number): boolean
    select_all(): boolean
    select_child(child_index: number): boolean
    /* Methods of Atspi.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_accessible_at(row: number, column: number): Accessible
    get_caption(): Accessible
    get_column_at_index(index: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Accessible
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_n_selected_columns(): number
    get_n_selected_rows(): number
    get_row_at_index(index: number): number
    get_row_column_extents_at_index(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* row_extents */ number, /* col_extents */ number, /* is_selected */ boolean ]
    get_row_description(row: number): string
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Accessible
    get_selected_columns(): number[]
    get_selected_rows(): number[]
    get_summary(): Accessible
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    /* Methods of Atspi.TableCell */
    get_column_header_cells(): Accessible[]
    get_column_index(): number
    get_column_span(): number
    get_position(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Accessible[]
    get_row_span(): number
    get_table(): Accessible
    /* Methods of Atspi.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_attribute_run(offset: number, include_defaults: boolean): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_text_attribute_value(offset: number, attribute_name: string): string | null
    get_text_attributes(offset: number): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, type: CoordType): Rect
    get_default_attributes(): GLib.HashTable
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, type: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect
    get_selection(selection_num: number): Range
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    set_caret_offset(new_offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Methods of Atspi.Value */
    get_current_value(): number
    get_maximum_value(): number
    get_minimum_increment(): number
    get_minimum_value(): number
    set_current_value(new_value: number): boolean
    /* Virtual methods of Atspi.Accessible */
    vfunc_mode_changed(enabled: boolean): void
    vfunc_region_changed(current_offset: number, last_offset: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atspi.Accessible */
    connect(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    connect_after(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    emit(sigName: "mode-changed", arg1: number, why: string): void
    connect(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "region-changed", arg1: number, arg2: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    bus_name: string
    bus: DBus.Connection
    root: object
    cache: Cache
    toolkit_name: string
    toolkit_version: string
    atspi_version: string
    time_added: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.Device */
    add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number
    add_key_watcher(): void
    get_grab_by_id(id: number): KeyDefinition
    get_locked_modifiers(): number
    get_modifier(keycode: number): number
    grab_keyboard(): boolean
    map_modifier(keycode: number): number
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    remove_key_grab(id: number): void
    ungrab_keyboard(): void
    unmap_modifier(keycode: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atspi.Device */
    vfunc_add_key_grab(kd: KeyDefinition): void
    vfunc_get_locked_modifiers(): number
    vfunc_get_modifier(keycode: number): number
    vfunc_grab_keyboard(): boolean
    vfunc_map_modifier(keycode: number): number
    vfunc_remove_key_grab(id: number): void
    vfunc_ungrab_keyboard(): void
    vfunc_unmap_modifier(keycode: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.Device */
    add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number
    add_key_watcher(): void
    get_grab_by_id(id: number): KeyDefinition
    get_locked_modifiers(): number
    get_modifier(keycode: number): number
    grab_keyboard(): boolean
    map_modifier(keycode: number): number
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    remove_key_grab(id: number): void
    ungrab_keyboard(): void
    unmap_modifier(keycode: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atspi.Device */
    vfunc_add_key_grab(kd: KeyDefinition): void
    vfunc_get_locked_modifiers(): number
    vfunc_get_modifier(keycode: number): number
    vfunc_grab_keyboard(): boolean
    vfunc_map_modifier(keycode: number): number
    vfunc_remove_key_grab(id: number): void
    vfunc_ungrab_keyboard(): void
    vfunc_unmap_modifier(keycode: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.DeviceListener */
    add_callback(callback: DeviceListenerCB): void
    remove_callback(callback: DeviceListenerCB): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atspi.DeviceListener */
    vfunc_device_event(event: DeviceEvent): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.Device */
    add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number
    add_key_watcher(): void
    get_grab_by_id(id: number): KeyDefinition
    get_locked_modifiers(): number
    get_modifier(keycode: number): number
    grab_keyboard(): boolean
    map_modifier(keycode: number): number
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    remove_key_grab(id: number): void
    ungrab_keyboard(): void
    unmap_modifier(keycode: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atspi.Device */
    vfunc_add_key_grab(kd: KeyDefinition): void
    vfunc_get_locked_modifiers(): number
    vfunc_get_modifier(keycode: number): number
    vfunc_grab_keyboard(): boolean
    vfunc_map_modifier(keycode: number): number
    vfunc_remove_key_grab(id: number): void
    vfunc_ungrab_keyboard(): void
    vfunc_unmap_modifier(keycode: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    user_data: object
    cb_destroyed: GLib.DestroyNotify
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.EventListener */
    deregister(event_type: string): boolean
    register(event_type: string): boolean
    register_full(event_type: string, properties?: string[] | null): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EventListener_ConstructProps)
    _init (config?: EventListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: EventListenerCB): EventListener
    static deregister_from_callback(callback: EventListenerCB, event_type: string): boolean
    static register_from_callback(callback: EventListenerCB, event_type: string): boolean
    static register_from_callback_full(event_type: string, properties: string[]): boolean
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.Hyperlink */
    get_end_index(): number
    get_index_range(): Range
    get_n_anchors(): number
    get_object(i: number): Accessible
    get_start_index(): number
    get_uri(i: number): string
    is_valid(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    relation_type: RelationType
    targets: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.Relation */
    get_n_targets(): number
    get_relation_type(): RelationType
    get_target(i: number): Accessible
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Atspi.StateSet */
    add(state: StateType): void
    compare(set2: StateSet): StateSet
    contains(state: StateType): boolean
    equals(set2: StateSet): boolean
    get_states(): StateType[]
    is_empty(): boolean
    remove(state: StateType): void
    set_by_name(name: string, enabled: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateType[]): StateSet
    static $gtype: GObject.Type
}
export abstract class AccessibleClass {
    /* Fields of Atspi.AccessibleClass */
    parent_class: ObjectClass
    region_changed: (accessible: Accessible, current_offset: number, last_offset: number) => void
    mode_changed: (accessible: Accessible, enabled: boolean) => void
    static name: string
}
export class AccessiblePrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Atspi.ApplicationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DeviceClass {
    /* Fields of Atspi.DeviceClass */
    parent_class: GObject.ObjectClass
    add_key_grab: (device: Device, kd: KeyDefinition) => void
    remove_key_grab: (device: Device, id: number) => void
    map_modifier: (device: Device, keycode: number) => number
    unmap_modifier: (device: Device, keycode: number) => void
    get_modifier: (device: Device, keycode: number) => number
    grab_keyboard: (device: Device) => boolean
    ungrab_keyboard: (device: Device) => void
    get_locked_modifiers: (device: Device) => number
    static name: string
}
export class DeviceEvent {
    /* Fields of Atspi.DeviceEvent */
    type: EventType
    id: number
    hw_code: number
    modifiers: number
    timestamp: number
    event_string: string
    is_text: boolean
    static name: string
}
export abstract class DeviceLegacyClass {
    /* Fields of Atspi.DeviceLegacyClass */
    parent_class: DeviceClass
    static name: string
}
export abstract class DeviceListenerClass {
    /* Fields of Atspi.DeviceListenerClass */
    parent_class: GObject.ObjectClass
    device_event: (listener: DeviceListener, event: DeviceEvent) => boolean
    static name: string
}
export abstract class DeviceX11Class {
    /* Fields of Atspi.DeviceX11Class */
    parent_class: DeviceClass
    static name: string
}
export class Event {
    /* Fields of Atspi.Event */
    type: string
    source: Accessible
    detail1: number
    detail2: number
    any_data: any
    sender: Accessible
    static name: string
    /* Static methods and pseudo-constructors */
    static main(): void
    static quit(): void
}
export abstract class EventListenerClass {
    /* Fields of Atspi.EventListenerClass */
    parent_class: GObject.ObjectClass
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
    parent_class: ObjectClass
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
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Atspi.ObjectClass */
    parent_class: GObject.ObjectClass
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
    start_offset: number
    end_offset: number
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
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StateSetClass {
    /* Fields of Atspi.StateSetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TextRange {
    /* Fields of Atspi.TextRange */
    start_offset: number
    end_offset: number
    content: string
    static name: string
}
type ControllerEventMask = number
type DeviceEventMask = number
type KeyEventMask = number
type KeyMaskType = number
type KeystrokeListener = void