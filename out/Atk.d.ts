/**
 * Atk-1.0
 */

import * as Gjs from './Gjs'
import * as GObject from './GObject'
import * as GLib from './GLib'
export enum CoordType {
    SCREEN,
    WINDOW,
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
    LAST_DEFINED,
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
export function attribute_set_free(attrib_set: AttributeSet): void
export function focus_tracker_notify(object: Object): void
export function get_binary_age(): number
export function get_default_registry(): Registry
export function get_focus_object(): Object
export function get_interface_age(): number
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
export function get_root(): Object
export function get_toolkit_name(): string
export function get_toolkit_version(): string
export function get_version(): string
export function relation_type_for_name(name: string): RelationType
export function relation_type_get_name(type: RelationType): string
export function relation_type_register(name: string): RelationType
export function remove_focus_tracker(tracker_id: number): void
export function remove_global_event_listener(listener_id: number): void
export function remove_key_event_listener(listener_id: number): void
export function role_for_name(name: string): Role
export function role_get_localized_name(role: Role): string
export function role_get_name(role: Role): string
export function role_register(name: string): Role
export function state_type_for_name(name: string): StateType
export function state_type_get_name(type: StateType): string
export function state_type_register(name: string): StateType
export function text_attribute_for_name(name: string): TextAttribute
export function text_attribute_get_name(attr: TextAttribute): string
export function text_attribute_get_value(attr: TextAttribute, index_: number): string | null
export function text_attribute_register(name: string): TextAttribute
export function text_free_ranges(ranges: TextRange[]): void
export function value_type_get_localized_name(value_type: ValueType): string
export function value_type_get_name(value_type: ValueType): string
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
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Virtual methods of Atk.Action */
    vfunc_do_action?(i: number): boolean
    vfunc_get_description?(i: number): string | null
    vfunc_get_keybinding?(i: number): string | null
    vfunc_get_localized_name?(i: number): string | null
    vfunc_get_n_actions?(): number
    vfunc_get_name?(i: number): string | null
    vfunc_set_description?(i: number, desc: string): boolean
    static name: string
}
export class Component {
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): void
    get_layer(): Layer
    get_mdi_zorder(): number
    get_position(x: number, y: number, coord_type: CoordType): void
    get_size(width: number, height: number): void
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Atk.Component */
    vfunc_bounds_changed?(bounds: Rectangle): void
    vfunc_contains?(x: number, y: number, coord_type: CoordType): boolean
    vfunc_get_alpha?(): number
    vfunc_get_extents?(x: number, y: number, width: number, height: number, coord_type: CoordType): void
    vfunc_get_layer?(): Layer
    vfunc_get_mdi_zorder?(): number
    vfunc_get_position?(x: number, y: number, coord_type: CoordType): void
    vfunc_get_size?(width: number, height: number): void
    vfunc_grab_focus?(): boolean
    vfunc_ref_accessible_at_point?(x: number, y: number, coord_type: CoordType): Object | null
    vfunc_remove_focus_handler?(handler_id: number): void
    vfunc_set_extents?(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    vfunc_set_position?(x: number, y: number, coord_type: CoordType): boolean
    vfunc_set_size?(width: number, height: number): boolean
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: Component, arg1: Rectangle) => void)): void
    static name: string
}
export class Document {
    /* Methods of Atk.Document */
    get_attribute_value(attribute_name: string): string | null
    get_attributes(): AttributeSet
    get_current_page_number(): number
    get_document(): object
    get_document_type(): string
    get_locale(): string
    get_page_count(): number
    set_attribute_value(attribute_name: string, attribute_value: string): boolean
    /* Virtual methods of Atk.Document */
    vfunc_get_current_page_number?(): number
    vfunc_get_document?(): object
    vfunc_get_document_attribute_value?(attribute_name: string): string
    vfunc_get_document_locale?(): string
    vfunc_get_document_type?(): string
    vfunc_get_page_count?(): number
    vfunc_set_document_attribute?(attribute_name: string, attribute_value: string): boolean
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: ((obj: Document) => void)): void
    connect(sigName: "load-stopped", callback: ((obj: Document) => void)): void
    connect(sigName: "page-changed", callback: ((obj: Document, page_number: number) => void)): void
    connect(sigName: "reload", callback: ((obj: Document) => void)): void
    static name: string
}
export class EditableText {
    /* Methods of Atk.EditableText */
    copy_text(start_pos: number, end_pos: number): void
    cut_text(start_pos: number, end_pos: number): void
    delete_text(start_pos: number, end_pos: number): void
    insert_text(string: string, length: number, position: number): void
    paste_text(position: number): void
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    set_text_contents(string: string): void
    /* Virtual methods of Atk.EditableText */
    vfunc_copy_text?(start_pos: number, end_pos: number): void
    vfunc_cut_text?(start_pos: number, end_pos: number): void
    vfunc_delete_text?(start_pos: number, end_pos: number): void
    vfunc_insert_text?(string: string, length: number, position: number): void
    vfunc_paste_text?(position: number): void
    vfunc_set_run_attributes?(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    vfunc_set_text_contents?(string: string): void
    static name: string
}
export class HyperlinkImpl {
    /* Methods of Atk.HyperlinkImpl */
    get_hyperlink(): Hyperlink
    /* Virtual methods of Atk.HyperlinkImpl */
    vfunc_get_hyperlink?(): Hyperlink
    static name: string
}
export class Hypertext {
    /* Methods of Atk.Hypertext */
    get_link(link_index: number): Hyperlink
    get_link_index(char_index: number): number
    get_n_links(): number
    /* Virtual methods of Atk.Hypertext */
    vfunc_get_link?(link_index: number): Hyperlink
    vfunc_get_link_index?(char_index: number): number
    vfunc_get_n_links?(): number
    vfunc_link_selected?(link_index: number): void
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: ((obj: Hypertext, arg1: number) => void)): void
    static name: string
}
export class Image {
    /* Methods of Atk.Image */
    get_image_description(): string
    get_image_locale(): string | null
    get_image_position(x: number, y: number, coord_type: CoordType): void
    get_image_size(width: number, height: number): void
    set_image_description(description: string): boolean
    /* Virtual methods of Atk.Image */
    vfunc_get_image_description?(): string
    vfunc_get_image_locale?(): string | null
    vfunc_get_image_position?(x: number, y: number, coord_type: CoordType): void
    vfunc_get_image_size?(width: number, height: number): void
    vfunc_set_image_description?(description: string): boolean
    static name: string
}
export class ImplementorIface {
    static name: string
}
export class Selection {
    /* Methods of Atk.Selection */
    add_selection(i: number): boolean
    clear_selection(): boolean
    get_selection_count(): number
    is_child_selected(i: number): boolean
    ref_selection(i: number): Object | null
    remove_selection(i: number): boolean
    select_all_selection(): boolean
    /* Virtual methods of Atk.Selection */
    vfunc_add_selection?(i: number): boolean
    vfunc_clear_selection?(): boolean
    vfunc_get_selection_count?(): number
    vfunc_is_child_selected?(i: number): boolean
    vfunc_ref_selection?(i: number): Object | null
    vfunc_remove_selection?(i: number): boolean
    vfunc_select_all_selection?(): boolean
    vfunc_selection_changed?(): void
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: ((obj: Selection) => void)): void
    static name: string
}
export class StreamableContent {
    /* Methods of Atk.StreamableContent */
    get_mime_type(i: number): string
    get_n_mime_types(): number
    get_stream(mime_type: string): GLib.IOChannel
    get_uri(mime_type: string): string | null
    /* Virtual methods of Atk.StreamableContent */
    vfunc_get_mime_type?(i: number): string
    vfunc_get_n_mime_types?(): number
    vfunc_get_stream?(mime_type: string): GLib.IOChannel
    vfunc_get_uri?(mime_type: string): string | null
    static name: string
}
export class Table {
    /* Methods of Atk.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_caption(): Object | null
    get_column_at_index(index_: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Object | null
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_row_at_index(index_: number): number
    get_row_description(row: number): string | null
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Object | null
    get_selected_columns(selected: number): number
    get_selected_rows(selected: number): number
    get_summary(): Object
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    ref_at(row: number, column: number): Object
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    set_caption(caption: Object): void
    set_column_description(column: number, description: string): void
    set_column_header(column: number, header: Object): void
    set_row_description(row: number, description: string): void
    set_row_header(row: number, header: Object): void
    set_summary(accessible: Object): void
    /* Virtual methods of Atk.Table */
    vfunc_add_column_selection?(column: number): boolean
    vfunc_add_row_selection?(row: number): boolean
    vfunc_column_deleted?(column: number, num_deleted: number): void
    vfunc_column_inserted?(column: number, num_inserted: number): void
    vfunc_column_reordered?(): void
    vfunc_get_caption?(): Object | null
    vfunc_get_column_at_index?(index_: number): number
    vfunc_get_column_description?(column: number): string
    vfunc_get_column_extent_at?(row: number, column: number): number
    vfunc_get_column_header?(column: number): Object | null
    vfunc_get_index_at?(row: number, column: number): number
    vfunc_get_n_columns?(): number
    vfunc_get_n_rows?(): number
    vfunc_get_row_at_index?(index_: number): number
    vfunc_get_row_description?(row: number): string | null
    vfunc_get_row_extent_at?(row: number, column: number): number
    vfunc_get_row_header?(row: number): Object | null
    vfunc_get_selected_columns?(selected: number): number
    vfunc_get_selected_rows?(selected: number): number
    vfunc_get_summary?(): Object
    vfunc_is_column_selected?(column: number): boolean
    vfunc_is_row_selected?(row: number): boolean
    vfunc_is_selected?(row: number, column: number): boolean
    vfunc_model_changed?(): void
    vfunc_ref_at?(row: number, column: number): Object
    vfunc_remove_column_selection?(column: number): boolean
    vfunc_remove_row_selection?(row: number): boolean
    vfunc_row_deleted?(row: number, num_deleted: number): void
    vfunc_row_inserted?(row: number, num_inserted: number): void
    vfunc_row_reordered?(): void
    vfunc_set_caption?(caption: Object): void
    vfunc_set_column_description?(column: number, description: string): void
    vfunc_set_column_header?(column: number, header: Object): void
    vfunc_set_row_description?(row: number, description: string): void
    vfunc_set_row_header?(row: number, header: Object): void
    vfunc_set_summary?(accessible: Object): void
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: ((obj: Table, arg1: number, arg2: number) => void)): void
    connect(sigName: "column-inserted", callback: ((obj: Table, arg1: number, arg2: number) => void)): void
    connect(sigName: "column-reordered", callback: ((obj: Table) => void)): void
    connect(sigName: "model-changed", callback: ((obj: Table) => void)): void
    connect(sigName: "row-deleted", callback: ((obj: Table, arg1: number, arg2: number) => void)): void
    connect(sigName: "row-inserted", callback: ((obj: Table, arg1: number, arg2: number) => void)): void
    connect(sigName: "row-reordered", callback: ((obj: Table) => void)): void
    static name: string
}
export class TableCell {
    /* Methods of Atk.TableCell */
    get_column_header_cells(): Object[]
    get_column_span(): number
    get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Object[]
    get_row_span(): number
    get_table(): Object
    /* Virtual methods of Atk.TableCell */
    vfunc_get_column_header_cells?(): Object[]
    vfunc_get_column_span?(): number
    vfunc_get_position?(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    vfunc_get_row_column_span?(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    vfunc_get_row_header_cells?(): Object[]
    vfunc_get_row_span?(): number
    vfunc_get_table?(): Object
    static name: string
}
export class Text {
    /* Methods of Atk.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, x: number, y: number, width: number, height: number, coords: CoordType): void
    get_default_attributes(): AttributeSet
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, coords: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType, rect: TextRectangle): void
    get_run_attributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_string_at_offset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    remove_selection(selection_num: number): boolean
    set_caret_offset(offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Virtual methods of Atk.Text */
    vfunc_add_selection?(start_offset: number, end_offset: number): boolean
    vfunc_get_bounded_ranges?(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange
    vfunc_get_caret_offset?(): number
    vfunc_get_character_at_offset?(offset: number): number
    vfunc_get_character_count?(): number
    vfunc_get_character_extents?(offset: number, x: number, y: number, width: number, height: number, coords: CoordType): void
    vfunc_get_default_attributes?(): AttributeSet
    vfunc_get_n_selections?(): number
    vfunc_get_offset_at_point?(x: number, y: number, coords: CoordType): number
    vfunc_get_range_extents?(start_offset: number, end_offset: number, coord_type: CoordType, rect: TextRectangle): void
    vfunc_get_run_attributes?(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_selection?(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_string_at_offset?(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text?(start_offset: number, end_offset: number): string
    vfunc_get_text_after_offset?(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_at_offset?(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_before_offset?(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_remove_selection?(selection_num: number): boolean
    vfunc_set_caret_offset?(offset: number): boolean
    vfunc_set_selection?(selection_num: number, start_offset: number, end_offset: number): boolean
    vfunc_text_attributes_changed?(): void
    vfunc_text_caret_moved?(location: number): void
    vfunc_text_changed?(position: number, length: number): void
    vfunc_text_selection_changed?(): void
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: ((obj: Text) => void)): void
    connect(sigName: "text-caret-moved", callback: ((obj: Text, arg1: number) => void)): void
    connect(sigName: "text-changed", callback: ((obj: Text, arg1: number, arg2: number) => void)): void
    connect(sigName: "text-insert", callback: ((obj: Text, arg1: number, arg2: number, arg3: string) => void)): void
    connect(sigName: "text-remove", callback: ((obj: Text, arg1: number, arg2: number, arg3: string) => void)): void
    connect(sigName: "text-selection-changed", callback: ((obj: Text) => void)): void
    static name: string
    static free_ranges(ranges: TextRange[]): void
}
export class Value {
    /* Methods of Atk.Value */
    get_current_value(value: any): void
    get_increment(): number
    get_maximum_value(value: any): void
    get_minimum_increment(value: any): void
    get_minimum_value(value: any): void
    get_range(): Range | null
    get_sub_ranges(): GLib.SList
    get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    set_current_value(value: any): boolean
    set_value(new_value: number): void
    /* Virtual methods of Atk.Value */
    vfunc_get_current_value?(value: any): void
    vfunc_get_increment?(): number
    vfunc_get_maximum_value?(value: any): void
    vfunc_get_minimum_increment?(value: any): void
    vfunc_get_minimum_value?(value: any): void
    vfunc_get_range?(): Range | null
    vfunc_get_sub_ranges?(): GLib.SList
    vfunc_get_value_and_text?(): [ /* value */ number, /* text */ string | null ]
    vfunc_set_current_value?(value: any): boolean
    vfunc_set_value?(new_value: number): void
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: ((obj: Value, value: number, text: string) => void)): void
    static name: string
}
export class Window {
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: ((obj: Window) => void)): void
    connect(sigName: "create", callback: ((obj: Window) => void)): void
    connect(sigName: "deactivate", callback: ((obj: Window) => void)): void
    connect(sigName: "destroy", callback: ((obj: Window) => void)): void
    connect(sigName: "maximize", callback: ((obj: Window) => void)): void
    connect(sigName: "minimize", callback: ((obj: Window) => void)): void
    connect(sigName: "move", callback: ((obj: Window) => void)): void
    connect(sigName: "resize", callback: ((obj: Window) => void)): void
    connect(sigName: "restore", callback: ((obj: Window) => void)): void
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
    accessible_role:number
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
    get_object(): GObject.Object
    /* Methods of Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_attributes(): AttributeSet
    nullget_description(): string | null
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    nullget_name(): string | null
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data: object): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    nullset_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed?(child: object): void
    vfunc_children_changed?(change_index: number, changed_child: object): void
    vfunc_focus_event?(focus_in: boolean): void
    vfunc_get_attributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfunc_get_index_in_parent?(): number
    vfunc_get_layer?(): Layer
    vfunc_get_mdi_zorder?(): number
    vfunc_get_n_children?(): number
    vfunc_get_name?(): string | null
    vfunc_get_object_locale?(): string
    vfunc_get_parent?(): Object
    vfunc_get_role?(): Role
    vfunc_initialize?(data: object): void
    vfunc_property_change?(values: PropertyValues): void
    vfunc_ref_relation_set?(): RelationSet
    vfunc_ref_state_set?(): StateSet
    vfunc_remove_property_change_handler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfunc_set_name?(name: string): void
    vfunc_set_parent?(parent: Object): void
    vfunc_set_role?(role: Role): void
    vfunc_state_change?(name: string, state_set: boolean): void
    vfunc_visible_data_changed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: GObjectAccessible, arg1: object) => void)): void
    connect(sigName: "children-changed", callback: ((obj: GObjectAccessible, arg1: number, arg2: object) => void)): void
    connect(sigName: "focus-event", callback: ((obj: GObjectAccessible, arg1: boolean) => void)): void
    connect(sigName: "property-change", callback: ((obj: GObjectAccessible, arg1: object) => void)): void
    connect(sigName: "state-change", callback: ((obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): void
    connect(sigName: "visible-data-changed", callback: ((obj: GObjectAccessible) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-name", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-parent", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-role", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-value", callback: ((obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: GObjectAccessible_ConstructProps)
    static for_object(obj: GObject.Object): Object
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
    get_end_index(): number
    get_n_anchors(): number
    get_object(i: number): Object
    get_start_index(): number
    get_uri(i: number): string
    is_inline(): boolean
    is_selected_link(): boolean
    is_valid(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Virtual methods of Atk.Hyperlink */
    vfunc_get_end_index?(): number
    vfunc_get_n_anchors?(): number
    vfunc_get_object?(i: number): Object
    vfunc_get_start_index?(): number
    vfunc_get_uri?(i: number): string
    vfunc_is_selected_link?(): boolean
    vfunc_is_valid?(): boolean
    vfunc_link_activated?(): void
    vfunc_link_state?(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Hyperlink */
    connect(sigName: "link-activated", callback: ((obj: Hyperlink) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::end-index", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::number-of-anchors", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::selected-link", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::start-index", callback: ((obj: Hyperlink, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
}
export interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}
export class Misc {
    /* Fields of Atk.Misc */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.Misc */
    threads_enter(): void
    threads_leave(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atk.Misc */
    vfunc_threads_enter?(): void
    vfunc_threads_leave?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Misc, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Misc_ConstructProps)
    static get_instance(): Misc
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
    accessible_role:number
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
    add_relationship(relationship: RelationType, target: Object): boolean
    get_attributes(): AttributeSet
    nullget_description(): string | null
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    nullget_name(): string | null
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data: object): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    nullset_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Atk.Action */
    do_action(i: number): boolean
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): void
    get_position(x: number, y: number, coord_type: CoordType): void
    get_size(width: number, height: number): void
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Methods of Atk.Document */
    get_attribute_value(attribute_name: string): string | null
    get_current_page_number(): number
    get_document(): object
    get_document_type(): string
    get_locale(): string
    get_page_count(): number
    set_attribute_value(attribute_name: string, attribute_value: string): boolean
    /* Methods of Atk.EditableText */
    copy_text(start_pos: number, end_pos: number): void
    cut_text(start_pos: number, end_pos: number): void
    delete_text(start_pos: number, end_pos: number): void
    insert_text(string: string, length: number, position: number): void
    paste_text(position: number): void
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    set_text_contents(string: string): void
    /* Methods of Atk.Hypertext */
    get_link(link_index: number): Hyperlink
    get_link_index(char_index: number): number
    get_n_links(): number
    /* Methods of Atk.Image */
    get_image_description(): string
    get_image_locale(): string | null
    get_image_position(x: number, y: number, coord_type: CoordType): void
    get_image_size(width: number, height: number): void
    set_image_description(description: string): boolean
    /* Methods of Atk.Selection */
    add_selection(i: number): boolean
    clear_selection(): boolean
    get_selection_count(): number
    is_child_selected(i: number): boolean
    ref_selection(i: number): Object | null
    remove_selection(i: number): boolean
    select_all_selection(): boolean
    /* Methods of Atk.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_caption(): Object | null
    get_column_at_index(index_: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Object | null
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_row_at_index(index_: number): number
    get_row_description(row: number): string | null
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Object | null
    get_selected_columns(selected: number): number
    get_selected_rows(selected: number): number
    get_summary(): Object
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    ref_at(row: number, column: number): Object
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    set_caption(caption: Object): void
    set_column_description(column: number, description: string): void
    set_column_header(column: number, header: Object): void
    set_row_description(row: number, description: string): void
    set_row_header(row: number, header: Object): void
    set_summary(accessible: Object): void
    /* Methods of Atk.TableCell */
    get_column_header_cells(): Object[]
    get_column_span(): number
    get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Object[]
    get_row_span(): number
    get_table(): Object
    /* Methods of Atk.Text */
    get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, x: number, y: number, width: number, height: number, coords: CoordType): void
    get_default_attributes(): AttributeSet
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, coords: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType, rect: TextRectangle): void
    get_run_attributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_string_at_offset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    set_caret_offset(offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Methods of Atk.Value */
    get_current_value(value: any): void
    get_increment(): number
    get_maximum_value(value: any): void
    get_minimum_increment(value: any): void
    get_minimum_value(value: any): void
    get_range(): Range | null
    get_sub_ranges(): GLib.SList
    get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    set_current_value(value: any): boolean
    set_value(new_value: number): void
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed?(child: object): void
    vfunc_children_changed?(change_index: number, changed_child: object): void
    vfunc_focus_event?(focus_in: boolean): void
    vfunc_get_attributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfunc_get_index_in_parent?(): number
    vfunc_get_layer?(): Layer
    vfunc_get_mdi_zorder?(): number
    vfunc_get_n_children?(): number
    vfunc_get_name?(): string | null
    vfunc_get_object_locale?(): string
    vfunc_get_parent?(): Object
    vfunc_get_role?(): Role
    vfunc_initialize?(data: object): void
    vfunc_property_change?(values: PropertyValues): void
    vfunc_ref_relation_set?(): RelationSet
    vfunc_ref_state_set?(): StateSet
    vfunc_remove_property_change_handler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfunc_set_name?(name: string): void
    vfunc_set_parent?(parent: Object): void
    vfunc_set_role?(role: Role): void
    vfunc_state_change?(name: string, state_set: boolean): void
    vfunc_visible_data_changed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: NoOpObject, arg1: object) => void)): void
    connect(sigName: "children-changed", callback: ((obj: NoOpObject, arg1: number, arg2: object) => void)): void
    connect(sigName: "focus-event", callback: ((obj: NoOpObject, arg1: boolean) => void)): void
    connect(sigName: "property-change", callback: ((obj: NoOpObject, arg1: object) => void)): void
    connect(sigName: "state-change", callback: ((obj: NoOpObject, arg1: string, arg2: boolean) => void)): void
    connect(sigName: "visible-data-changed", callback: ((obj: NoOpObject) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: NoOpObject, arg1: Rectangle) => void)): void
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "load-stopped", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "page-changed", callback: ((obj: NoOpObject, page_number: number) => void)): void
    connect(sigName: "reload", callback: ((obj: NoOpObject) => void)): void
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: ((obj: NoOpObject, arg1: number) => void)): void
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: ((obj: NoOpObject) => void)): void
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): void
    connect(sigName: "column-inserted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): void
    connect(sigName: "column-reordered", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "model-changed", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "row-deleted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): void
    connect(sigName: "row-inserted", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): void
    connect(sigName: "row-reordered", callback: ((obj: NoOpObject) => void)): void
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "text-caret-moved", callback: ((obj: NoOpObject, arg1: number) => void)): void
    connect(sigName: "text-changed", callback: ((obj: NoOpObject, arg1: number, arg2: number) => void)): void
    connect(sigName: "text-insert", callback: ((obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): void
    connect(sigName: "text-remove", callback: ((obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): void
    connect(sigName: "text-selection-changed", callback: ((obj: NoOpObject) => void)): void
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: ((obj: NoOpObject, value: number, text: string) => void)): void
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "create", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "deactivate", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "destroy", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "maximize", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "minimize", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "move", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "resize", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "restore", callback: ((obj: NoOpObject) => void)): void
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-name", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-parent", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-role", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-value", callback: ((obj: NoOpObject, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: NoOpObject_ConstructProps)
    static new(obj: GObject.Object): NoOpObject
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
    create_accessible(obj: GObject.Object): Object
    get_accessible_type(): number
    invalidate(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atk.ObjectFactory */
    vfunc_invalidate?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: NoOpObjectFactory_ConstructProps)
    static new(): NoOpObjectFactory
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    accessible_description?:string
    accessible_name?:string
    accessible_parent?:Object
    accessible_role?:number
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
    accessible_role:number
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
    add_relationship(relationship: RelationType, target: Object): boolean
    get_attributes(): AttributeSet
    nullget_description(): string | null
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    nullget_name(): string | null
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data: object): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    nullset_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed?(child: object): void
    vfunc_children_changed?(change_index: number, changed_child: object): void
    vfunc_focus_event?(focus_in: boolean): void
    vfunc_get_attributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfunc_get_index_in_parent?(): number
    vfunc_get_layer?(): Layer
    vfunc_get_mdi_zorder?(): number
    vfunc_get_n_children?(): number
    vfunc_get_name?(): string | null
    vfunc_get_object_locale?(): string
    vfunc_get_parent?(): Object
    vfunc_get_role?(): Role
    vfunc_initialize?(data: object): void
    vfunc_property_change?(values: PropertyValues): void
    vfunc_ref_relation_set?(): RelationSet
    vfunc_ref_state_set?(): StateSet
    vfunc_remove_property_change_handler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfunc_set_name?(name: string): void
    vfunc_set_parent?(parent: Object): void
    vfunc_set_role?(role: Role): void
    vfunc_state_change?(name: string, state_set: boolean): void
    vfunc_visible_data_changed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: Object, arg1: object) => void)): void
    connect(sigName: "children-changed", callback: ((obj: Object, arg1: number, arg2: object) => void)): void
    connect(sigName: "focus-event", callback: ((obj: Object, arg1: boolean) => void)): void
    connect(sigName: "property-change", callback: ((obj: Object, arg1: object) => void)): void
    connect(sigName: "state-change", callback: ((obj: Object, arg1: string, arg2: boolean) => void)): void
    connect(sigName: "visible-data-changed", callback: ((obj: Object) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-name", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-parent", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-role", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-value", callback: ((obj: Object, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Object_ConstructProps)
}
export interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactory {
    /* Fields of Atk.ObjectFactory */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    create_accessible(obj: GObject.Object): Object
    get_accessible_type(): number
    invalidate(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Atk.ObjectFactory */
    vfunc_invalidate?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: ObjectFactory_ConstructProps)
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
    accessible_role:number
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
    get_id(): string
    /* Methods of Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_attributes(): AttributeSet
    nullget_description(): string | null
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    nullget_name(): string | null
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data: object): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    nullset_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): void
    get_position(x: number, y: number, coord_type: CoordType): void
    get_size(width: number, height: number): void
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Atk.Plug */
    vfunc_get_object_id?(): string
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed?(child: object): void
    vfunc_children_changed?(change_index: number, changed_child: object): void
    vfunc_focus_event?(focus_in: boolean): void
    vfunc_get_attributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfunc_get_index_in_parent?(): number
    vfunc_get_layer?(): Layer
    vfunc_get_mdi_zorder?(): number
    vfunc_get_n_children?(): number
    vfunc_get_name?(): string | null
    vfunc_get_object_locale?(): string
    vfunc_get_parent?(): Object
    vfunc_get_role?(): Role
    vfunc_initialize?(data: object): void
    vfunc_property_change?(values: PropertyValues): void
    vfunc_ref_relation_set?(): RelationSet
    vfunc_ref_state_set?(): StateSet
    vfunc_remove_property_change_handler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfunc_set_name?(name: string): void
    vfunc_set_parent?(parent: Object): void
    vfunc_set_role?(role: Role): void
    vfunc_state_change?(name: string, state_set: boolean): void
    vfunc_visible_data_changed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: Plug, arg1: object) => void)): void
    connect(sigName: "children-changed", callback: ((obj: Plug, arg1: number, arg2: object) => void)): void
    connect(sigName: "focus-event", callback: ((obj: Plug, arg1: boolean) => void)): void
    connect(sigName: "property-change", callback: ((obj: Plug, arg1: object) => void)): void
    connect(sigName: "state-change", callback: ((obj: Plug, arg1: string, arg2: boolean) => void)): void
    connect(sigName: "visible-data-changed", callback: ((obj: Plug) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: Plug, arg1: Rectangle) => void)): void
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-name", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-parent", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-role", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-value", callback: ((obj: Plug, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Plug_ConstructProps)
    static new(): Plug
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
    get_factory(type: number): ObjectFactory
    get_factory_type(type: number): number
    set_factory_type(type: number, factory_type: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Registry, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Registry_ConstructProps)
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
    add_target(target: Object): void
    get_relation_type(): RelationType
    get_target(): Object[]
    remove_target(target: Object): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::relation-type", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::target", callback: ((obj: Relation, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Relation_ConstructProps)
    static new(targets: Object[], relationship: RelationType): Relation
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
    add_relation_by_type(relationship: RelationType, target: Object): void
    contains(relationship: RelationType): boolean
    contains_target(relationship: RelationType, target: Object): boolean
    get_n_relations(): number
    get_relation(i: number): Relation
    get_relation_by_type(relationship: RelationType): Relation
    remove(relation: Relation): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: RelationSet, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: RelationSet_ConstructProps)
    static new(): RelationSet
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
    accessible_role:number
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
    is_occupied(): boolean
    /* Methods of Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_attributes(): AttributeSet
    nullget_description(): string | null
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    nullget_name(): string | null
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data: object): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    nullset_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): void
    get_position(x: number, y: number, coord_type: CoordType): void
    get_size(width: number, height: number): void
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Atk.Socket */
    vfunc_embed?(plug_id: string): void
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed?(child: object): void
    vfunc_children_changed?(change_index: number, changed_child: object): void
    vfunc_focus_event?(focus_in: boolean): void
    vfunc_get_attributes?(): AttributeSet
    vfunc_get_description?(): string | null
    vfunc_get_index_in_parent?(): number
    vfunc_get_layer?(): Layer
    vfunc_get_mdi_zorder?(): number
    vfunc_get_n_children?(): number
    vfunc_get_name?(): string | null
    vfunc_get_object_locale?(): string
    vfunc_get_parent?(): Object
    vfunc_get_role?(): Role
    vfunc_initialize?(data: object): void
    vfunc_property_change?(values: PropertyValues): void
    vfunc_ref_relation_set?(): RelationSet
    vfunc_ref_state_set?(): StateSet
    vfunc_remove_property_change_handler?(handler_id: number): void
    vfunc_set_description?(description: string): boolean | null
    vfunc_set_name?(name: string): void
    vfunc_set_parent?(parent: Object): void
    vfunc_set_role?(role: Role): void
    vfunc_state_change?(name: string, state_set: boolean): void
    vfunc_visible_data_changed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((obj: Socket, arg1: object) => void)): void
    connect(sigName: "children-changed", callback: ((obj: Socket, arg1: number, arg2: object) => void)): void
    connect(sigName: "focus-event", callback: ((obj: Socket, arg1: boolean) => void)): void
    connect(sigName: "property-change", callback: ((obj: Socket, arg1: object) => void)): void
    connect(sigName: "state-change", callback: ((obj: Socket, arg1: string, arg2: boolean) => void)): void
    connect(sigName: "visible-data-changed", callback: ((obj: Socket) => void)): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: ((obj: Socket, arg1: Rectangle) => void)): void
    connect(sigName: "notify::accessible-component-layer", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-name", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-parent", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-role", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-caption-object", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-column-header", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-description", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-row-header", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-table-summary", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: "notify::accessible-value", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Socket_ConstructProps)
    static new(): Socket
}
export interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class StateSet {
    /* Fields of Atk.StateSet */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Atk.StateSet */
    add_state(type: StateType): boolean
    add_states(types: StateType[]): void
    and_sets(compare_set: StateSet): StateSet
    clear_states(): void
    contains_state(type: StateType): boolean
    contains_states(types: StateType[]): boolean
    is_empty(): boolean
    or_sets(compare_set: StateSet): StateSet | null
    remove_state(type: StateType): boolean
    xor_sets(compare_set: StateSet): StateSet
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StateSet, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: StateSet_ConstructProps)
    static new(): StateSet
}
export interface Util_ConstructProps extends GObject.Object_ConstructProps {
}
export class Util {
    /* Fields of Atk.Util */
    parent:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Util, pspec: GObject.ParamSpec) => void)): void
    connect(sigName: string, callback: any): void
    static name: string
    constructor (config?: Util_ConstructProps)
}
export class Attribute {
    /* Fields of Atk.Attribute */
    name:string
    value:string
    static name: string
    static set_free(attrib_set: AttributeSet): void
}
export class Implementor {
    /* Methods of Atk.Implementor */
    ref_accessible(): Object
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
    get_description(): string
    get_lower_limit(): number
    get_upper_limit(): number
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
type AttributeSet = GLib.SList
type State = number