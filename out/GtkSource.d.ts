/**
 * GtkSource-3.0
 */

import * as Gjs from './Gjs'
import * as Gtk from './Gtk'
import * as xlib from './xlib'
import * as Gdk from './Gdk'
import * as cairo from './cairo'
import * as Pango from './Pango'
import * as GObject from './GObject'
import * as GLib from './GLib'
import * as Gio from './Gio'
import * as GdkPixbuf from './GdkPixbuf'
import * as GModule from './GModule'
import * as Atk from './Atk'
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
export function completion_error_quark(): GLib.Quark
export function encoding_get_all(): GLib.SList
export function encoding_get_current(): Encoding
export function encoding_get_default_candidates(): GLib.SList
export function encoding_get_from_charset(charset: string): Encoding | null
export function encoding_get_utf8(): Encoding
export function file_loader_error_quark(): GLib.Quark
export function file_saver_error_quark(): GLib.Quark
export function utils_escape_search_text(text: string): string
export function utils_unescape_search_text(text: string): string
export class CompletionProposal {
    /* Methods of GtkSource.CompletionProposal */
    changed(): void
    equal(other: CompletionProposal): boolean
    get_gicon(): Gio.Icon | null
    get_icon(): GdkPixbuf.Pixbuf | null
    get_icon_name(): string | null
    get_info(): string | null
    get_label(): string
    get_markup(): string
    get_text(): string
    hash(): number
    /* Virtual methods of GtkSource.CompletionProposal */
    vfunc_changed?(): void
    vfunc_equal?(other: CompletionProposal): boolean
    vfunc_get_gicon?(): Gio.Icon | null
    vfunc_get_icon?(): GdkPixbuf.Pixbuf | null
    vfunc_get_icon_name?(): string | null
    vfunc_get_info?(): string | null
    vfunc_get_label?(): string
    vfunc_get_markup?(): string
    vfunc_get_text?(): string
    vfunc_hash?(): number
    /* Signals of GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: ((obj: CompletionProposal) => void))
    static name: string
}
export class CompletionProvider {
    /* Methods of GtkSource.CompletionProvider */
    activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    get_activation(): CompletionActivation
    get_gicon(): Gio.Icon | null
    get_icon(): GdkPixbuf.Pixbuf | null
    get_icon_name(): string | null
    get_info_widget(proposal: CompletionProposal): Gtk.Widget | null
    get_interactive_delay(): number
    get_name(): string
    get_priority(): number
    get_start_iter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    match(context: CompletionContext): boolean
    populate(context: CompletionContext): void
    update_info(proposal: CompletionProposal, info: CompletionInfo): void
    /* Virtual methods of GtkSource.CompletionProvider */
    vfunc_activate_proposal?(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    vfunc_get_activation?(): CompletionActivation
    vfunc_get_gicon?(): Gio.Icon | null
    vfunc_get_icon?(): GdkPixbuf.Pixbuf | null
    vfunc_get_icon_name?(): string | null
    vfunc_get_info_widget?(proposal: CompletionProposal): Gtk.Widget | null
    vfunc_get_interactive_delay?(): number
    vfunc_get_name?(): string
    vfunc_get_priority?(): number
    vfunc_get_start_iter?(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    vfunc_match?(context: CompletionContext): boolean
    vfunc_populate?(context: CompletionContext): void
    vfunc_update_info?(proposal: CompletionProposal, info: CompletionInfo): void
    static name: string
}
export class StyleSchemeChooser {
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooser */
    vfunc_get_style_scheme?(): StyleScheme
    vfunc_set_style_scheme?(scheme: StyleScheme): void
    static name: string
}
export class UndoManager {
    /* Methods of GtkSource.UndoManager */
    begin_not_undoable_action(): void
    can_redo(): boolean
    can_redo_changed(): void
    can_undo(): boolean
    can_undo_changed(): void
    end_not_undoable_action(): void
    redo(): void
    undo(): void
    /* Virtual methods of GtkSource.UndoManager */
    vfunc_begin_not_undoable_action?(): void
    vfunc_can_redo?(): boolean
    vfunc_can_redo_changed?(): void
    vfunc_can_undo?(): boolean
    vfunc_can_undo_changed?(): void
    vfunc_end_not_undoable_action?(): void
    vfunc_redo?(): void
    vfunc_undo?(): void
    /* Signals of GtkSource.UndoManager */
    connect(sigName: "can-redo-changed", callback: ((obj: UndoManager) => void))
    connect(sigName: "can-undo-changed", callback: ((obj: UndoManager) => void))
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
export class Buffer extends Gtk.TextBuffer {
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
    /* Fields of GtkSource.Buffer */
    parent_instance:Gtk.TextBuffer
    priv:BufferPrivate
    /* Methods of GtkSource.Buffer */
    backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean
    begin_not_undoable_action(): void
    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark
    end_not_undoable_action(): void
    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean
    get_context_classes_at_iter(iter: Gtk.TextIter): string[]
    get_highlight_matching_brackets(): boolean
    get_highlight_syntax(): boolean
    get_implicit_trailing_newline(): boolean
    get_language(): Language | null
    get_max_undo_levels(): number
    get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): GLib.SList
    get_source_marks_at_line(line: number, category?: string | null): GLib.SList
    get_style_scheme(): StyleScheme | null
    get_undo_manager(): UndoManager | null
    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean
    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean
    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean
    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    redo(): void
    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    set_highlight_matching_brackets(highlight: boolean): void
    set_highlight_syntax(highlight: boolean): void
    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void
    set_language(language?: Language | null): void
    set_max_undo_levels(max_undo_levels: number): void
    set_style_scheme(scheme?: StyleScheme | null): void
    set_undo_manager(manager?: UndoManager | null): void
    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    undo(): void
    /* Virtual methods of GtkSource.Buffer */
    vfunc_bracket_matched?(iter: Gtk.TextIter, state: BracketMatchType): void
    vfunc_redo?(): void
    vfunc_undo?(): void
    /* Virtual methods of Gtk.TextBuffer */
    vfunc_apply_tag?(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_begin_user_action?(): void
    vfunc_changed?(): void
    vfunc_delete_range?(start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_end_user_action?(): void
    vfunc_insert_child_anchor?(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    vfunc_insert_pixbuf?(iter: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_insert_text?(pos: Gtk.TextIter, new_text: string, new_text_length: number): void
    vfunc_mark_deleted?(mark: Gtk.TextMark): void
    vfunc_mark_set?(location: Gtk.TextIter, mark: Gtk.TextMark): void
    vfunc_modified_changed?(): void
    vfunc_paste_done?(clipboard: Gtk.Clipboard): void
    vfunc_remove_tag?(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: ((obj: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void))
    connect(sigName: "highlight-updated", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "redo", callback: ((obj: Buffer) => void))
    connect(sigName: "source-mark-updated", callback: ((obj: Buffer, mark: Gtk.TextMark) => void))
    connect(sigName: "undo", callback: ((obj: Buffer) => void))
    connect(sigName: "notify::can-redo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-undo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-matching-brackets", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-syntax", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::implicit-trailing-newline", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::language", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::max-undo-levels", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style-scheme", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::undo-manager", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Buffer_ConstructProps): Buffer
    constructor (config?: Buffer_ConstructProps)
    static new_with_language(language: Language): Buffer
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
export class Completion extends GObject.Object {
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
    /* Methods of GtkSource.Completion */
    add_provider(provider: CompletionProvider): boolean
    block_interactive(): void
    create_context(position?: Gtk.TextIter | null): CompletionContext
    get_info_window(): CompletionInfo
    get_providers(): CompletionProvider[]
    get_view(): View | null
    hide(): void
    move_window(iter: Gtk.TextIter): void
    remove_provider(provider: CompletionProvider): boolean
    show(providers: CompletionProvider[] | null, context: CompletionContext): boolean
    unblock_interactive(): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    get_name(): string
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    set_name(name: string): void
    /* Virtual methods of GtkSource.Completion */
    vfunc_activate_proposal?(): void
    vfunc_hide?(): void
    vfunc_move_cursor?(step: Gtk.ScrollStep, num: number): void
    vfunc_move_page?(step: Gtk.ScrollStep, num: number): void
    vfunc_populate_context?(context: CompletionContext): void
    vfunc_proposal_activated?(provider: CompletionProvider, proposal: CompletionProposal): boolean
    vfunc_show?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Completion */
    connect(sigName: "activate-proposal", callback: ((obj: Completion) => void))
    connect(sigName: "hide", callback: ((obj: Completion) => void))
    connect(sigName: "move-cursor", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void))
    connect(sigName: "move-page", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void))
    connect(sigName: "populate-context", callback: ((obj: Completion, context: CompletionContext) => void))
    connect(sigName: "show", callback: ((obj: Completion) => void))
    connect(sigName: "notify::accelerators", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::auto-complete-delay", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::proposal-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::provider-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::remember-info-visibility", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::select-on-show", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-headers", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-icons", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Completion_ConstructProps): Completion
    constructor (config?: Completion_ConstructProps)
}
export interface CompletionContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    activation?:CompletionActivation
    completion?:Completion
    iter?:Gtk.TextIter
}
export class CompletionContext extends GObject.InitiallyUnowned {
    /* Properties of GtkSource.CompletionContext */
    activation:CompletionActivation
    iter:Gtk.TextIter
    /* Fields of GtkSource.CompletionContext */
    parent: any
    priv:CompletionContextPrivate
    /* Methods of GtkSource.CompletionContext */
    add_proposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void
    get_activation(): CompletionActivation
    get_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /* Virtual methods of GtkSource.CompletionContext */
    vfunc_cancelled?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionContext */
    connect(sigName: "cancelled", callback: ((obj: CompletionContext) => void))
    connect(sigName: "notify::activation", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::iter", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: CompletionContext_ConstructProps): CompletionContext
    constructor (config?: CompletionContext_ConstructProps)
}
export interface CompletionInfo_ConstructProps extends Gtk.Window_ConstructProps {
}
export class CompletionInfo extends Gtk.Window {
    /* Fields of GtkSource.CompletionInfo */
    parent: any
    priv:CompletionInfoPrivate
    /* Methods of GtkSource.CompletionInfo */
    get_widget(): Gtk.Widget
    move_to_iter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void
    set_widget(widget?: Gtk.Widget | null): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    get_name(): string
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    set_name(name: string): void
    /* Virtual methods of GtkSource.CompletionInfo */
    vfunc_before_show?(): void
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default?(): void
    vfunc_activate_focus?(): void
    vfunc_enable_debugging?(toggle: boolean): boolean
    vfunc_keys_changed?(): void
    vfunc_set_focus?(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionInfo */
    connect(sigName: "before-show", callback: ((obj: CompletionInfo) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: CompletionInfo_ConstructProps): CompletionInfo
    constructor (config?: CompletionInfo_ConstructProps)
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
export class CompletionItem extends GObject.Object {
    /* Properties of GtkSource.CompletionItem */
    gicon:Gio.Icon
    icon:GdkPixbuf.Pixbuf
    icon_name:string
    info:string
    label:string
    markup:string
    text:string
    /* Fields of GtkSource.CompletionItem */
    parent: any
    priv:CompletionItemPrivate
    /* Methods of GtkSource.CompletionItem */
    set_gicon(gicon?: Gio.Icon | null): void
    set_icon(icon?: GdkPixbuf.Pixbuf | null): void
    set_icon_name(icon_name?: string | null): void
    set_info(info?: string | null): void
    set_label(label?: string | null): void
    set_markup(markup?: string | null): void
    set_text(text?: string | null): void
    /* Methods of GtkSource.CompletionProposal */
    changed(): void
    equal(other: CompletionProposal): boolean
    get_gicon(): Gio.Icon | null
    get_icon(): GdkPixbuf.Pixbuf | null
    get_icon_name(): string | null
    get_info(): string | null
    get_label(): string
    get_markup(): string
    get_text(): string
    hash(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: ((obj: CompletionItem) => void))
    connect(sigName: "notify::gicon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::info", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::label", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::markup", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::text", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: CompletionItem_ConstructProps): CompletionItem
    constructor (config?: CompletionItem_ConstructProps)
    static new_from_stock(label: string | null, text: string, stock: string, info?: string | null): CompletionItem
    static new_with_markup(markup: string, text: string, icon?: GdkPixbuf.Pixbuf | null, info?: string | null): CompletionItem
    static new2(): CompletionItem
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
export class CompletionWords extends GObject.Object {
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
    parent: any
    priv:CompletionWordsPrivate
    /* Methods of GtkSource.CompletionWords */
    register(buffer: Gtk.TextBuffer): void
    unregister(buffer: Gtk.TextBuffer): void
    /* Methods of GtkSource.CompletionProvider */
    activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    get_activation(): CompletionActivation
    get_gicon(): Gio.Icon | null
    get_icon(): GdkPixbuf.Pixbuf | null
    get_icon_name(): string | null
    get_info_widget(proposal: CompletionProposal): Gtk.Widget | null
    get_interactive_delay(): number
    get_name(): string
    get_priority(): number
    get_start_iter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    match(context: CompletionContext): boolean
    populate(context: CompletionContext): void
    update_info(proposal: CompletionProposal, info: CompletionInfo): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activation", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::interactive-delay", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::minimum-word-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::priority", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::proposals-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scan-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: CompletionWords_ConstructProps): CompletionWords
    constructor (config?: CompletionWords_ConstructProps)
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    location?:Gio.File
}
export class File extends GObject.Object {
    /* Properties of GtkSource.File */
    readonly compression_type:CompressionType
    readonly encoding:Encoding
    location:Gio.File
    readonly newline_type:NewlineType
    readonly read_only:boolean
    /* Fields of GtkSource.File */
    parent: any
    priv:FilePrivate
    /* Methods of GtkSource.File */
    check_file_on_disk(): void
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_location(): Gio.File
    get_newline_type(): NewlineType
    is_deleted(): boolean
    is_externally_modified(): boolean
    is_local(): boolean
    is_readonly(): boolean
    set_location(location?: Gio.File | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::encoding", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::location", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::newline-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::read-only", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: File_ConstructProps): File
    constructor (config?: File_ConstructProps)
}
export interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    file?:File
    input_stream?:Gio.InputStream
    location?:Gio.File
}
export class FileLoader extends GObject.Object {
    /* Properties of GtkSource.FileLoader */
    /* Fields of GtkSource.FileLoader */
    parent: any
    priv:FileLoaderPrivate
    /* Methods of GtkSource.FileLoader */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_input_stream(): Gio.InputStream | null
    get_location(): Gio.File | null
    get_newline_type(): NewlineType
    load_async(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, progress_callback_notify?: GLib.DestroyNotify | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(result: Gio.AsyncResult): boolean
    set_candidate_encodings(candidate_encodings: GLib.SList): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: FileLoader_ConstructProps): FileLoader
    constructor (config?: FileLoader_ConstructProps)
    static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
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
export class FileSaver extends GObject.Object {
    /* Properties of GtkSource.FileSaver */
    compression_type:CompressionType
    encoding:Encoding
    flags:FileSaverFlags
    newline_type:NewlineType
    /* Fields of GtkSource.FileSaver */
    object:GObject.Object
    priv:FileSaverPrivate
    /* Methods of GtkSource.FileSaver */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    save_async(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, progress_callback_notify?: GLib.DestroyNotify | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): boolean
    set_compression_type(compression_type: CompressionType): void
    set_encoding(encoding?: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    set_newline_type(newline_type: NewlineType): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::encoding", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::flags", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::newline-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: FileSaver_ConstructProps): FileSaver
    constructor (config?: FileSaver_ConstructProps)
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
}
export interface Gutter_ConstructProps extends GObject.Object_ConstructProps {
    view?:View
    window_type?:Gtk.TextWindowType
    xpad?:number
    ypad?:number
}
export class Gutter extends GObject.Object {
    /* Properties of GtkSource.Gutter */
    xpad:number
    ypad:number
    /* Fields of GtkSource.Gutter */
    parent: any
    priv:GutterPrivate
    /* Methods of GtkSource.Gutter */
    get_padding(xpad: number, ypad: number): void
    get_renderer_at_pos(x: number, y: number): GutterRenderer | null
    get_view(): View
    get_window(): Gdk.Window
    get_window_type(): Gtk.TextWindowType
    insert(renderer: GutterRenderer, position: number): boolean
    queue_draw(): void
    remove(renderer: GutterRenderer): void
    reorder(renderer: GutterRenderer, position: number): void
    set_padding(xpad: number, ypad: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::xpad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ypad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Gutter_ConstructProps): Gutter
    constructor (config?: Gutter_ConstructProps)
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
export class GutterRenderer extends GObject.InitiallyUnowned {
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
    parent: any
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    end(): void
    get_alignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    get_alignment_mode(): GutterRendererAlignmentMode
    get_background(): [ /* returnType */ boolean, /* color */ Gdk.RGBA | null ]
    get_padding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    get_size(): number
    get_view(): Gtk.TextView
    get_visible(): boolean
    get_window_type(): Gtk.TextWindowType
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    queue_draw(): void
    set_alignment(xalign: number, yalign: number): void
    set_alignment_mode(mode: GutterRendererAlignmentMode): void
    set_background(color?: Gdk.RGBA | null): void
    set_padding(xpad: number, ypad: number): void
    set_size(size: number): void
    set_visible(visible: boolean): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfunc_begin?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_change_buffer?(old_buffer?: Gtk.TextBuffer | null): void
    vfunc_change_view?(old_view?: Gtk.TextView | null): void
    vfunc_draw?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_end?(): void
    vfunc_query_activatable?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfunc_query_data?(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_query_tooltip?(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: ((obj: GutterRenderer) => void))
    connect(sigName: "notify::alignment-mode", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-rgba", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-set", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::size", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::view", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window-type", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xalign", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xpad", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::yalign", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ypad", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: GutterRenderer_ConstructProps): GutterRenderer
    constructor (config?: GutterRenderer_ConstructProps)
}
export interface GutterRendererPixbuf_ConstructProps extends GutterRenderer_ConstructProps {
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export class GutterRendererPixbuf extends GutterRenderer {
    /* Properties of GtkSource.GutterRendererPixbuf */
    gicon:Gio.Icon
    icon_name:string
    pixbuf:GdkPixbuf.Pixbuf
    stock_id:string
    /* Fields of GtkSource.GutterRendererPixbuf */
    /* Methods of GtkSource.GutterRendererPixbuf */
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_stock_id(): string
    set_gicon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    set_stock_id(stock_id?: string | null): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfunc_begin?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_change_buffer?(old_buffer?: Gtk.TextBuffer | null): void
    vfunc_change_view?(old_view?: Gtk.TextView | null): void
    vfunc_draw?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_end?(): void
    vfunc_query_activatable?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfunc_query_data?(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_query_tooltip?(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gicon", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixbuf", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::stock-id", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: GutterRendererPixbuf_ConstructProps): GutterRendererPixbuf
    constructor (config?: GutterRendererPixbuf_ConstructProps)
}
export interface GutterRendererText_ConstructProps extends GutterRenderer_ConstructProps {
    markup?:string
    text?:string
}
export class GutterRendererText extends GutterRenderer {
    /* Properties of GtkSource.GutterRendererText */
    markup:string
    text:string
    /* Fields of GtkSource.GutterRendererText */
    /* Methods of GtkSource.GutterRendererText */
    measure(text: string): [ /* width */ number | null, /* height */ number | null ]
    measure_markup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    set_markup(markup: string, length: number): void
    set_text(text: string, length: number): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfunc_begin?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_change_buffer?(old_buffer?: Gtk.TextBuffer | null): void
    vfunc_change_view?(old_view?: Gtk.TextView | null): void
    vfunc_draw?(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_end?(): void
    vfunc_query_activatable?(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfunc_query_data?(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_query_tooltip?(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::markup", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::text", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: GutterRendererText_ConstructProps): GutterRendererText
    constructor (config?: GutterRendererText_ConstructProps)
}
export interface Language_ConstructProps extends GObject.Object_ConstructProps {
}
export class Language extends GObject.Object {
    /* Properties of GtkSource.Language */
    readonly hidden:boolean
    readonly id:string
    readonly name:string
    readonly section:string
    /* Fields of GtkSource.Language */
    parent_instance:GObject.Object
    priv:LanguagePrivate
    /* Methods of GtkSource.Language */
    get_globs(): string[] | null
    get_hidden(): boolean
    get_id(): string
    get_metadata(name: string): string | null
    get_mime_types(): string[] | null
    get_name(): string
    get_section(): string
    get_style_fallback(style_id: string): string | null
    get_style_ids(): string[] | null
    get_style_name(style_id: string): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hidden", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::id", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::section", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Language_ConstructProps): Language
    constructor (config?: Language_ConstructProps)
}
export interface LanguageManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?:string[]
}
export class LanguageManager extends GObject.Object {
    /* Properties of GtkSource.LanguageManager */
    readonly language_ids:string[]
    search_path:string[]
    /* Fields of GtkSource.LanguageManager */
    parent_instance:GObject.Object
    priv:LanguageManagerPrivate
    /* Methods of GtkSource.LanguageManager */
    get_language(id: string): Language | null
    get_language_ids(): string[] | null
    get_search_path(): string[]
    guess_language(filename?: string | null, content_type?: string | null): Language | null
    set_search_path(dirs?: string[] | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::language-ids", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::search-path", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: LanguageManager_ConstructProps): LanguageManager
    constructor (config?: LanguageManager_ConstructProps)
    static get_default(): LanguageManager
}
export interface Map_ConstructProps extends View_ConstructProps {
    font_desc?:Pango.FontDescription
    view?:View
}
export class Map extends View {
    /* Properties of GtkSource.Map */
    font_desc:Pango.FontDescription
    view:View
    /* Properties of Gtk.Scrollable */
    hadjustment:Gtk.Adjustment
    hscroll_policy:Gtk.ScrollablePolicy
    vadjustment:Gtk.Adjustment
    vscroll_policy:Gtk.ScrollablePolicy
    /* Fields of GtkSource.Map */
    parent_instance:View
    /* Methods of GtkSource.Map */
    get_view(): View | null
    set_view(view: View): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    get_name(): string
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    set_name(name: string): void
    /* Methods of Gtk.Scrollable */
    get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    get_hadjustment(): Gtk.Adjustment
    get_hscroll_policy(): Gtk.ScrollablePolicy
    get_vadjustment(): Gtk.Adjustment
    get_vscroll_policy(): Gtk.ScrollablePolicy
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of GtkSource.View */
    vfunc_line_mark_activated?(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines?(copy: boolean, step: number): void
    vfunc_move_words?(step: number): void
    vfunc_redo?(): void
    vfunc_show_completion?(): void
    vfunc_undo?(): void
    /* Virtual methods of Gtk.TextView */
    vfunc_backspace?(): void
    vfunc_copy_clipboard?(): void
    vfunc_cut_clipboard?(): void
    vfunc_delete_from_cursor?(type: Gtk.DeleteType, count: number): void
    vfunc_draw_layer?(layer: Gtk.TextViewLayer, cr: cairo.Context): void
    vfunc_extend_selection?(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor?(str: string): void
    vfunc_move_cursor?(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard?(): void
    vfunc_populate_popup?(popup: Gtk.Widget): void
    vfunc_set_anchor?(): void
    vfunc_toggle_overwrite?(): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-desc", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::view", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hadjustment", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hscroll-policy", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vadjustment", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vscroll-policy", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Map_ConstructProps): Map
    constructor (config?: Map_ConstructProps)
}
export interface Mark_ConstructProps extends Gtk.TextMark_ConstructProps {
    category?:string
}
export class Mark extends Gtk.TextMark {
    /* Properties of GtkSource.Mark */
    /* Fields of GtkSource.Mark */
    parent_instance:Gtk.TextMark
    priv:MarkPrivate
    /* Methods of GtkSource.Mark */
    get_category(): string
    next(category?: string | null): Mark | null
    prev(category: string): Mark | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Mark_ConstructProps): Mark
    constructor (config?: Mark_ConstructProps)
}
export interface MarkAttributes_ConstructProps extends GObject.Object_ConstructProps {
    background?:Gdk.RGBA
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export class MarkAttributes extends GObject.Object {
    /* Properties of GtkSource.MarkAttributes */
    background:Gdk.RGBA
    gicon:Gio.Icon
    icon_name:string
    pixbuf:GdkPixbuf.Pixbuf
    stock_id:string
    /* Fields of GtkSource.MarkAttributes */
    /* Methods of GtkSource.MarkAttributes */
    get_background(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_stock_id(): string
    get_tooltip_markup(mark: Mark): string
    get_tooltip_text(mark: Mark): string
    render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf
    set_background(background: Gdk.RGBA): void
    set_gicon(gicon: Gio.Icon): void
    set_icon_name(icon_name: string): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    set_stock_id(stock_id: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: ((obj: MarkAttributes, mark: Mark) => string))
    connect(sigName: "query-tooltip-text", callback: ((obj: MarkAttributes, mark: Mark) => string))
    connect(sigName: "notify::background", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::gicon", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixbuf", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::stock-id", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: MarkAttributes_ConstructProps): MarkAttributes
    constructor (config?: MarkAttributes_ConstructProps)
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
export class PrintCompositor extends GObject.Object {
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
    /* Methods of GtkSource.PrintCompositor */
    draw_page(context: Gtk.PrintContext, page_nr: number): void
    get_body_font_name(): string
    get_bottom_margin(unit: Gtk.Unit): number
    get_buffer(): Buffer
    get_footer_font_name(): string
    get_header_font_name(): string
    get_highlight_syntax(): boolean
    get_left_margin(unit: Gtk.Unit): number
    get_line_numbers_font_name(): string
    get_n_pages(): number
    get_pagination_progress(): number
    get_print_footer(): boolean
    get_print_header(): boolean
    get_print_line_numbers(): number
    get_right_margin(unit: Gtk.Unit): number
    get_tab_width(): number
    get_top_margin(unit: Gtk.Unit): number
    get_wrap_mode(): Gtk.WrapMode
    paginate(context: Gtk.PrintContext): boolean
    set_body_font_name(font_name: string): void
    set_bottom_margin(margin: number, unit: Gtk.Unit): void
    set_footer_font_name(font_name?: string | null): void
    set_footer_format(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    set_header_font_name(font_name?: string | null): void
    set_header_format(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    set_highlight_syntax(highlight: boolean): void
    set_left_margin(margin: number, unit: Gtk.Unit): void
    set_line_numbers_font_name(font_name?: string | null): void
    set_print_footer(print: boolean): void
    set_print_header(print: boolean): void
    set_print_line_numbers(interval: number): void
    set_right_margin(margin: number, unit: Gtk.Unit): void
    set_tab_width(width: number): void
    set_top_margin(margin: number, unit: Gtk.Unit): void
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::body-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::footer-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::header-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-syntax", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::line-numbers-font-name", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::n-pages", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::print-footer", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::print-header", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::print-line-numbers", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tab-width", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-mode", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: PrintCompositor_ConstructProps): PrintCompositor
    constructor (config?: PrintCompositor_ConstructProps)
    static new_from_view(view: View): PrintCompositor
}
export interface Region_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Gtk.TextBuffer
}
export class Region extends GObject.Object {
    /* Properties of GtkSource.Region */
    /* Fields of GtkSource.Region */
    parent_instance:GObject.Object
    /* Methods of GtkSource.Region */
    add_region(region_to_add?: Region | null): void
    add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    get_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    get_buffer(): Gtk.TextBuffer | null
    get_start_region_iter(): /* iter */ RegionIter
    intersect_region(region2?: Region | null): Region | null
    intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null
    is_empty(): boolean
    subtract_region(region_to_subtract?: Region | null): void
    subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    to_string(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Region_ConstructProps): Region
    constructor (config?: Region_ConstructProps)
}
export interface SearchContext_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    highlight?:boolean
    match_style?:Style
    settings?:SearchSettings
}
export class SearchContext extends GObject.Object {
    /* Properties of GtkSource.SearchContext */
    highlight:boolean
    match_style:Style
    readonly occurrences_count:number
    readonly regex_error:object
    settings:SearchSettings
    /* Fields of GtkSource.SearchContext */
    parent: any
    priv:SearchContextPrivate
    /* Methods of GtkSource.SearchContext */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    backward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    backward_async(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    backward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    backward_finish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward_async(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forward_finish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    get_buffer(): Buffer
    get_highlight(): boolean
    get_match_style(): Style
    get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number
    get_occurrences_count(): number
    get_regex_error(): GLib.Error | null
    get_settings(): SearchSettings
    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    replace2(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    replace_all(replace: string, replace_length: number): number
    set_highlight(highlight: boolean): void
    set_match_style(match_style?: Style | null): void
    set_settings(settings?: SearchSettings | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::highlight", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::match-style", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::occurrences-count", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::regex-error", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::settings", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: SearchContext_ConstructProps): SearchContext
    constructor (config?: SearchContext_ConstructProps)
}
export interface SearchSettings_ConstructProps extends GObject.Object_ConstructProps {
    at_word_boundaries?:boolean
    case_sensitive?:boolean
    regex_enabled?:boolean
    search_text?:string
    wrap_around?:boolean
}
export class SearchSettings extends GObject.Object {
    /* Properties of GtkSource.SearchSettings */
    at_word_boundaries:boolean
    case_sensitive:boolean
    regex_enabled:boolean
    search_text:string
    wrap_around:boolean
    /* Fields of GtkSource.SearchSettings */
    parent: any
    priv:SearchSettingsPrivate
    /* Methods of GtkSource.SearchSettings */
    get_at_word_boundaries(): boolean
    get_case_sensitive(): boolean
    get_regex_enabled(): boolean
    get_search_text(): string | null
    get_wrap_around(): boolean
    set_at_word_boundaries(at_word_boundaries: boolean): void
    set_case_sensitive(case_sensitive: boolean): void
    set_regex_enabled(regex_enabled: boolean): void
    set_search_text(search_text?: string | null): void
    set_wrap_around(wrap_around: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::at-word-boundaries", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::case-sensitive", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::regex-enabled", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::search-text", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-around", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: SearchSettings_ConstructProps): SearchSettings
    constructor (config?: SearchSettings_ConstructProps)
}
export interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    enable_matrix?:boolean
    matrix?:GLib.Variant
}
export class SpaceDrawer extends GObject.Object {
    /* Properties of GtkSource.SpaceDrawer */
    enable_matrix:boolean
    matrix:GLib.Variant
    /* Fields of GtkSource.SpaceDrawer */
    parent: any
    priv:SpaceDrawerPrivate
    /* Methods of GtkSource.SpaceDrawer */
    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    get_enable_matrix(): boolean
    get_matrix(): GLib.Variant
    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags
    set_enable_matrix(enable_matrix: boolean): void
    set_matrix(matrix?: GLib.Variant | null): void
    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: SpaceDrawer_ConstructProps): SpaceDrawer
    constructor (config?: SpaceDrawer_ConstructProps)
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
export class Style extends GObject.Object {
    /* Properties of GtkSource.Style */
    /* Methods of GtkSource.Style */
    apply(tag: Gtk.TextTag): void
    copy(): Style
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Style_ConstructProps): Style
    constructor (config?: Style_ConstructProps)
}
export interface StyleScheme_ConstructProps extends GObject.Object_ConstructProps {
    id?:string
}
export class StyleScheme extends GObject.Object {
    /* Properties of GtkSource.StyleScheme */
    readonly description:string
    readonly filename:string
    readonly name:string
    /* Fields of GtkSource.StyleScheme */
    base:GObject.Object
    priv:StyleSchemePrivate
    /* Methods of GtkSource.StyleScheme */
    get_authors(): string[] | null
    get_description(): string | null
    get_filename(): string | null
    get_id(): string
    get_name(): string
    get_style(style_id: string): Style | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::filename", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: StyleScheme_ConstructProps): StyleScheme
    constructor (config?: StyleScheme_ConstructProps)
}
export interface StyleSchemeChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
}
export class StyleSchemeChooserButton extends Gtk.Button {
    /* Properties of Gtk.Actionable */
    action_name:string
    action_target:GLib.Variant
    /* Properties of Gtk.Activatable */
    related_action:Gtk.Action
    use_action_appearance:boolean
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Fields of GtkSource.StyleSchemeChooserButton */
    parent: any
    /* Methods of Gtk.Actionable */
    get_action_name(): string | null
    get_action_target_value(): GLib.Variant
    set_action_name(action_name?: string | null): void
    set_action_target_value(target_value: GLib.Variant): void
    set_detailed_action_name(detailed_action_name: string): void
    /* Methods of Gtk.Activatable */
    do_set_related_action(action: Gtk.Action): void
    get_related_action(): Gtk.Action
    get_use_action_appearance(): boolean
    set_related_action(action: Gtk.Action): void
    set_use_action_appearance(use_appearance: boolean): void
    sync_action_properties(action?: Gtk.Action | null): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    get_name(): string
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    set_name(name: string): void
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Button */
    vfunc_activate?(): void
    vfunc_clicked?(): void
    vfunc_enter?(): void
    vfunc_leave?(): void
    vfunc_pressed?(): void
    vfunc_released?(): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::action-name", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::action-target", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::related-action", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::use-action-appearance", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style-scheme", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: StyleSchemeChooserButton_ConstructProps): StyleSchemeChooserButton
    constructor (config?: StyleSchemeChooserButton_ConstructProps)
}
export interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Bin_ConstructProps {
}
export class StyleSchemeChooserWidget extends Gtk.Bin {
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Fields of GtkSource.StyleSchemeChooserWidget */
    parent: any
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    get_name(): string
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    set_name(name: string): void
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::style-scheme", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: StyleSchemeChooserWidget_ConstructProps): StyleSchemeChooserWidget
    constructor (config?: StyleSchemeChooserWidget_ConstructProps)
}
export interface StyleSchemeManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?:string[]
}
export class StyleSchemeManager extends GObject.Object {
    /* Properties of GtkSource.StyleSchemeManager */
    readonly scheme_ids:string[]
    search_path:string[]
    /* Fields of GtkSource.StyleSchemeManager */
    parent: any
    priv:StyleSchemeManagerPrivate
    /* Methods of GtkSource.StyleSchemeManager */
    append_search_path(path: string): void
    force_rescan(): void
    get_scheme(scheme_id: string): StyleScheme
    get_scheme_ids(): string[] | null
    get_search_path(): string[]
    prepend_search_path(path: string): void
    set_search_path(path?: string[] | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scheme-ids", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::search-path", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: StyleSchemeManager_ConstructProps): StyleSchemeManager
    constructor (config?: StyleSchemeManager_ConstructProps)
    static get_default(): StyleSchemeManager
}
export interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    draw_spaces?:boolean
    draw_spaces_set?:boolean
}
export class Tag extends Gtk.TextTag {
    /* Properties of GtkSource.Tag */
    draw_spaces:boolean
    draw_spaces_set:boolean
    /* Fields of GtkSource.Tag */
    parent_instance:Gtk.TextTag
    /* Virtual methods of Gtk.TextTag */
    vfunc_event?(event_object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::draw-spaces", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::draw-spaces-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Tag_ConstructProps): Tag
    constructor (config?: Tag_ConstructProps)
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
export class View extends Gtk.TextView {
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
    /* Properties of Gtk.Scrollable */
    hadjustment:Gtk.Adjustment
    hscroll_policy:Gtk.ScrollablePolicy
    vadjustment:Gtk.Adjustment
    vscroll_policy:Gtk.ScrollablePolicy
    /* Fields of GtkSource.View */
    parent: any
    priv:ViewPrivate
    /* Methods of GtkSource.View */
    get_auto_indent(): boolean
    get_background_pattern(): BackgroundPatternType
    get_completion(): Completion
    get_draw_spaces(): DrawSpacesFlags
    get_gutter(window_type: Gtk.TextWindowType): Gutter
    get_highlight_current_line(): boolean
    get_indent_on_tab(): boolean
    get_indent_width(): number
    get_insert_spaces_instead_of_tabs(): boolean
    get_mark_attributes(category: string, priority: number): MarkAttributes
    get_right_margin_position(): number
    get_show_line_marks(): boolean
    get_show_line_numbers(): boolean
    get_show_right_margin(): boolean
    get_smart_backspace(): boolean
    get_smart_home_end(): SmartHomeEndType
    get_space_drawer(): SpaceDrawer
    get_tab_width(): number
    get_visual_column(iter: Gtk.TextIter): number
    indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    set_auto_indent(enable: boolean): void
    set_background_pattern(background_pattern: BackgroundPatternType): void
    set_draw_spaces(flags: DrawSpacesFlags): void
    set_highlight_current_line(highlight: boolean): void
    set_indent_on_tab(enable: boolean): void
    set_indent_width(width: number): void
    set_insert_spaces_instead_of_tabs(enable: boolean): void
    set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void
    set_right_margin_position(pos: number): void
    set_show_line_marks(show: boolean): void
    set_show_line_numbers(show: boolean): void
    set_show_right_margin(show: boolean): void
    set_smart_backspace(smart_backspace: boolean): void
    set_smart_home_end(smart_home_end: SmartHomeEndType): void
    set_tab_width(width: number): void
    unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    get_name(): string
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    set_name(name: string): void
    /* Methods of Gtk.Scrollable */
    get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    get_hadjustment(): Gtk.Adjustment
    get_hscroll_policy(): Gtk.ScrollablePolicy
    get_vadjustment(): Gtk.Adjustment
    get_vscroll_policy(): Gtk.ScrollablePolicy
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of GtkSource.View */
    vfunc_line_mark_activated?(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines?(copy: boolean, step: number): void
    vfunc_move_words?(step: number): void
    vfunc_redo?(): void
    vfunc_show_completion?(): void
    vfunc_undo?(): void
    /* Virtual methods of Gtk.TextView */
    vfunc_backspace?(): void
    vfunc_copy_clipboard?(): void
    vfunc_cut_clipboard?(): void
    vfunc_delete_from_cursor?(type: Gtk.DeleteType, count: number): void
    vfunc_draw_layer?(layer: Gtk.TextViewLayer, cr: cairo.Context): void
    vfunc_extend_selection?(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor?(str: string): void
    vfunc_move_cursor?(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard?(): void
    vfunc_populate_popup?(popup: Gtk.Widget): void
    vfunc_set_anchor?(): void
    vfunc_toggle_overwrite?(): void
    /* Virtual methods of Gtk.Container */
    vfunc_add?(widget: Gtk.Widget): void
    vfunc_check_resize?(): void
    vfunc_child_type?(): number
    vfunc_composite_name?(child: Gtk.Widget): string
    vfunc_forall?(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child?(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove?(widget: Gtk.Widget): void
    vfunc_set_child_property?(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child?(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation?(baseline: number): void
    vfunc_adjust_baseline_request?(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request?(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event?(event: Gdk.EventButton): boolean
    vfunc_button_release_event?(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel?(signal_id: number): boolean
    vfunc_child_notify?(child_property: GObject.ParamSpec): void
    vfunc_composited_changed?(): void
    vfunc_compute_expand?(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event?(event: Gdk.EventConfigure): boolean
    vfunc_damage_event?(event: Gdk.EventExpose): boolean
    vfunc_delete_event?(event: Gdk.EventAny): boolean
    vfunc_destroy?(): void
    vfunc_destroy_event?(event: Gdk.EventAny): boolean
    vfunc_direction_changed?(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin?(context: Gdk.DragContext): void
    vfunc_drag_data_delete?(context: Gdk.DragContext): void
    vfunc_drag_data_get?(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received?(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end?(context: Gdk.DragContext): void
    vfunc_drag_failed?(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave?(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion?(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw?(cr: cairo.Context): boolean
    vfunc_enter_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_event?(event: Gdk.Event): boolean
    vfunc_focus?(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event?(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event?(event: Gdk.EventFocus): boolean
    vfunc_get_accessible?(): Atk.Object
    vfunc_get_preferred_height?(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width?(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width?(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height?(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode?(): Gtk.SizeRequestMode
    vfunc_grab_broken_event?(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus?(): void
    vfunc_grab_notify?(was_grabbed: boolean): void
    vfunc_hide?(): void
    vfunc_hierarchy_changed?(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event?(event: Gdk.EventKey): boolean
    vfunc_key_release_event?(event: Gdk.EventKey): boolean
    vfunc_keynav_failed?(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event?(event: Gdk.EventCrossing): boolean
    vfunc_map?(): void
    vfunc_map_event?(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate?(group_cycling: boolean): boolean
    vfunc_motion_notify_event?(event: Gdk.EventMotion): boolean
    vfunc_move_focus?(direction: Gtk.DirectionType): void
    vfunc_parent_set?(previous_parent: Gtk.Widget): void
    vfunc_popup_menu?(): boolean
    vfunc_property_notify_event?(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event?(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event?(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip?(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region?(region: cairo.Region): void
    vfunc_realize?(): void
    vfunc_screen_changed?(previous_screen: Gdk.Screen): void
    vfunc_scroll_event?(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_get?(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event?(event: Gdk.EventSelection): boolean
    vfunc_selection_received?(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event?(event: Gdk.EventSelection): boolean
    vfunc_show?(): void
    vfunc_show_all?(): void
    vfunc_show_help?(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate?(allocation: Gtk.Allocation): void
    vfunc_state_changed?(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed?(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set?(previous_style: Gtk.Style): void
    vfunc_style_updated?(): void
    vfunc_touch_event?(event: Gdk.EventTouch): boolean
    vfunc_unmap?(): void
    vfunc_unmap_event?(event: Gdk.EventAny): boolean
    vfunc_unrealize?(): void
    vfunc_visibility_notify_event?(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event?(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: ((obj: View, case_type: ChangeCaseType) => void))
    connect(sigName: "change-number", callback: ((obj: View, count: number) => void))
    connect(sigName: "join-lines", callback: ((obj: View) => void))
    connect(sigName: "line-mark-activated", callback: ((obj: View, iter: Gtk.TextIter, event: Gdk.Event) => void))
    connect(sigName: "move-lines", callback: ((obj: View, copy: boolean, count: number) => void))
    connect(sigName: "move-to-matching-bracket", callback: ((obj: View, extend_selection: boolean) => void))
    connect(sigName: "move-words", callback: ((obj: View, count: number) => void))
    connect(sigName: "redo", callback: ((obj: View) => void))
    connect(sigName: "show-completion", callback: ((obj: View) => void))
    connect(sigName: "smart-home-end", callback: ((obj: View, iter: Gtk.TextIter, count: number) => void))
    connect(sigName: "undo", callback: ((obj: View) => void))
    connect(sigName: "notify::auto-indent", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-pattern", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::completion", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::draw-spaces", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-current-line", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent-on-tab", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::right-margin-position", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-line-marks", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-line-numbers", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-right-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::smart-backspace", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::smart-home-end", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::space-drawer", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tab-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hadjustment", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hscroll-policy", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vadjustment", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vscroll-policy", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: View_ConstructProps): View
    constructor (config?: View_ConstructProps)
    new_with_buffer(buffer: Buffer): View
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
    get_charset(): string
    get_name(): string
    to_string(): string
    static name: string
    static get_all(): GLib.SList
    static get_current(): Encoding
    static get_default_candidates(): GLib.SList
    static get_from_charset(charset: string): Encoding | null
    static get_utf8(): Encoding
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
    get_subregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    is_end(): boolean
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