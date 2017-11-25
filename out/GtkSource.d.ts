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
export interface CompletionProposal {
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
    vfunc_changed(): void
    vfunc_equal(other: CompletionProposal): boolean
    vfunc_get_gicon(): Gio.Icon | null
    vfunc_get_icon(): GdkPixbuf.Pixbuf | null
    vfunc_get_icon_name(): string | null
    vfunc_get_info(): string | null
    vfunc_get_label(): string
    vfunc_get_markup(): string
    vfunc_get_text(): string
    vfunc_hash(): number
    /* Signals of GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: ((obj: CompletionProposal) => void))
}
export interface CompletionProposal_Static {
    name: string
}
export declare var CompletionProposal: CompletionProposal_Static
export interface CompletionProvider {
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
    vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    vfunc_get_activation(): CompletionActivation
    vfunc_get_gicon(): Gio.Icon | null
    vfunc_get_icon(): GdkPixbuf.Pixbuf | null
    vfunc_get_icon_name(): string | null
    vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null
    vfunc_get_interactive_delay(): number
    vfunc_get_name(): string
    vfunc_get_priority(): number
    vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    vfunc_match(context: CompletionContext): boolean
    vfunc_populate(context: CompletionContext): void
    vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void
}
export interface CompletionProvider_Static {
    name: string
}
export declare var CompletionProvider: CompletionProvider_Static
export interface StyleSchemeChooser {
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooser */
    vfunc_get_style_scheme(): StyleScheme
    vfunc_set_style_scheme(scheme: StyleScheme): void
}
export interface StyleSchemeChooser_Static {
    name: string
}
export declare var StyleSchemeChooser: StyleSchemeChooser_Static
export interface UndoManager {
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
    vfunc_begin_not_undoable_action(): void
    vfunc_can_redo(): boolean
    vfunc_can_redo_changed(): void
    vfunc_can_undo(): boolean
    vfunc_can_undo_changed(): void
    vfunc_end_not_undoable_action(): void
    vfunc_redo(): void
    vfunc_undo(): void
    /* Signals of GtkSource.UndoManager */
    connect(sigName: "can-redo-changed", callback: ((obj: UndoManager) => void))
    connect(sigName: "can-undo-changed", callback: ((obj: UndoManager) => void))
}
export interface UndoManager_Static {
    name: string
}
export declare var UndoManager: UndoManager_Static
export interface Buffer_ConstructProps extends Gtk.TextBuffer_ConstructProps {
    highlight_matching_brackets?:boolean
    highlight_syntax?:boolean
    implicit_trailing_newline?:boolean
    language?:Language
    max_undo_levels?:number
    style_scheme?:StyleScheme
    undo_manager?:UndoManager
}
export interface Buffer {
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
    backward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): boolean
    begin_not_undoable_action(): void
    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark
    end_not_undoable_action(): void
    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): boolean
    get_context_classes_at_iter(iter: Gtk.TextIter): string[]
    get_highlight_matching_brackets(): boolean
    get_highlight_syntax(): boolean
    get_implicit_trailing_newline(): boolean
    get_language(): Language | null
    get_max_undo_levels(): number
    get_source_marks_at_iter(iter: Gtk.TextIter, category: string | null): GLib.SList
    get_source_marks_at_line(line: number, category: string | null): GLib.SList
    get_style_scheme(): StyleScheme | null
    get_undo_manager(): UndoManager | null
    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean
    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean
    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean
    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    redo(): void
    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category: string | null): void
    set_highlight_matching_brackets(highlight: boolean): void
    set_highlight_syntax(highlight: boolean): void
    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void
    set_language(language: Language | null): void
    set_max_undo_levels(max_undo_levels: number): void
    set_style_scheme(scheme: StyleScheme | null): void
    set_undo_manager(manager: UndoManager | null): void
    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    undo(): void
    /* Methods of Gtk.TextBuffer */
    add_mark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    add_selection_clipboard(clipboard: Gtk.Clipboard): void
    apply_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    apply_tag_by_name(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    backspace(iter: Gtk.TextIter, interactive: boolean, default_editable: boolean): boolean
    begin_user_action(): void
    copy_clipboard(clipboard: Gtk.Clipboard): void
    create_child_anchor(iter: Gtk.TextIter): Gtk.TextChildAnchor
    create_mark(mark_name: string | null, where: Gtk.TextIter, left_gravity: boolean): Gtk.TextMark
    cut_clipboard(clipboard: Gtk.Clipboard, default_editable: boolean): void
    delete(start: Gtk.TextIter, end: Gtk.TextIter): void
    delete_interactive(start_iter: Gtk.TextIter, end_iter: Gtk.TextIter, default_editable: boolean): boolean
    delete_mark(mark: Gtk.TextMark): void
    delete_mark_by_name(name: string): void
    delete_selection(interactive: boolean, default_editable: boolean): boolean
    deserialize(content_buffer: Gtk.TextBuffer, format: Gdk.Atom, iter: Gtk.TextIter, data: Gjs.byteArray.ByteArray): boolean
    deserialize_get_can_create_tags(format: Gdk.Atom): boolean
    deserialize_set_can_create_tags(format: Gdk.Atom, can_create_tags: boolean): void
    end_user_action(): void
    get_bounds(): [ /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_char_count(): number
    get_copy_target_list(): Gtk.TargetList
    get_deserialize_formats(): [ /* returnType */ Gdk.Atom[], /* n_formats */ number ]
    get_end_iter(): /* iter */ Gtk.TextIter
    get_has_selection(): boolean
    get_insert(): Gtk.TextMark
    get_iter_at_child_anchor(anchor: Gtk.TextChildAnchor): /* iter */ Gtk.TextIter
    get_iter_at_line(line_number: number): /* iter */ Gtk.TextIter
    get_iter_at_line_index(line_number: number, byte_index: number): /* iter */ Gtk.TextIter
    get_iter_at_line_offset(line_number: number, char_offset: number): /* iter */ Gtk.TextIter
    get_iter_at_mark(mark: Gtk.TextMark): /* iter */ Gtk.TextIter
    get_iter_at_offset(char_offset: number): /* iter */ Gtk.TextIter
    get_line_count(): number
    get_mark(name: string): Gtk.TextMark | null
    get_modified(): boolean
    get_paste_target_list(): Gtk.TargetList
    get_selection_bound(): Gtk.TextMark
    get_selection_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_serialize_formats(): [ /* returnType */ Gdk.Atom[], /* n_formats */ number ]
    get_slice(start: Gtk.TextIter, end: Gtk.TextIter, include_hidden_chars: boolean): string
    get_start_iter(): /* iter */ Gtk.TextIter
    get_tag_table(): Gtk.TextTagTable
    get_text(start: Gtk.TextIter, end: Gtk.TextIter, include_hidden_chars: boolean): string
    insert(iter: Gtk.TextIter, text: string, len: number): void
    insert_at_cursor(text: string, len: number): void
    insert_child_anchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    insert_interactive(iter: Gtk.TextIter, text: string, len: number, default_editable: boolean): boolean
    insert_interactive_at_cursor(text: string, len: number, default_editable: boolean): boolean
    insert_markup(iter: Gtk.TextIter, markup: string, len: number): void
    insert_pixbuf(iter: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    insert_range(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    insert_range_interactive(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter, default_editable: boolean): boolean
    move_mark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    move_mark_by_name(name: string, where: Gtk.TextIter): void
    paste_clipboard(clipboard: Gtk.Clipboard, override_location: Gtk.TextIter | null, default_editable: boolean): void
    place_cursor(where: Gtk.TextIter): void
    register_deserialize_format(mime_type: string, function_: Gtk.TextBufferDeserializeFunc, user_data: object | null, user_data_destroy: GLib.DestroyNotify): Gdk.Atom
    register_deserialize_tagset(tagset_name: string | null): Gdk.Atom
    register_serialize_format(mime_type: string, function_: Gtk.TextBufferSerializeFunc, user_data: object | null, user_data_destroy: GLib.DestroyNotify): Gdk.Atom
    register_serialize_tagset(tagset_name: string | null): Gdk.Atom
    remove_all_tags(start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_selection_clipboard(clipboard: Gtk.Clipboard): void
    remove_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_tag_by_name(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    select_range(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    serialize(content_buffer: Gtk.TextBuffer, format: Gdk.Atom, start: Gtk.TextIter, end: Gtk.TextIter): [ /* returnType */ Gjs.byteArray.ByteArray, /* length */ number ]
    set_modified(setting: boolean): void
    set_text(text: string, len: number): void
    unregister_deserialize_format(format: Gdk.Atom): void
    unregister_serialize_format(format: Gdk.Atom): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.Buffer */
    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void
    vfunc_redo(): void
    vfunc_undo(): void
    /* Virtual methods of Gtk.TextBuffer */
    vfunc_apply_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_begin_user_action(): void
    vfunc_changed(): void
    vfunc_delete_range(start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_end_user_action(): void
    vfunc_insert_child_anchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    vfunc_insert_pixbuf(iter: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_insert_text(pos: Gtk.TextIter, new_text: string, new_text_length: number): void
    vfunc_mark_deleted(mark: Gtk.TextMark): void
    vfunc_mark_set(location: Gtk.TextIter, mark: Gtk.TextMark): void
    vfunc_modified_changed(): void
    vfunc_paste_done(clipboard: Gtk.Clipboard): void
    vfunc_remove_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: ((obj: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void))
    connect(sigName: "highlight-updated", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "redo", callback: ((obj: Buffer) => void))
    connect(sigName: "source-mark-updated", callback: ((obj: Buffer, mark: Gtk.TextMark) => void))
    connect(sigName: "undo", callback: ((obj: Buffer) => void))
    /* Signals of Gtk.TextBuffer */
    connect(sigName: "apply-tag", callback: ((obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "begin-user-action", callback: ((obj: Buffer) => void))
    connect(sigName: "changed", callback: ((obj: Buffer) => void))
    connect(sigName: "delete-range", callback: ((obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "end-user-action", callback: ((obj: Buffer) => void))
    connect(sigName: "insert-child-anchor", callback: ((obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void))
    connect(sigName: "insert-pixbuf", callback: ((obj: Buffer, location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void))
    connect(sigName: "insert-text", callback: ((obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void))
    connect(sigName: "mark-deleted", callback: ((obj: Buffer, mark: Gtk.TextMark) => void))
    connect(sigName: "mark-set", callback: ((obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void))
    connect(sigName: "modified-changed", callback: ((obj: Buffer) => void))
    connect(sigName: "paste-done", callback: ((obj: Buffer, clipboard: Gtk.Clipboard) => void))
    connect(sigName: "remove-tag", callback: ((obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-redo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-undo", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-matching-brackets", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-syntax", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::implicit-trailing-newline", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::language", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::max-undo-levels", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style-scheme", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::undo-manager", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::copy-target-list", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::cursor-position", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-selection", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::paste-target-list", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::text", callback: ((obj: Buffer, pspec: GObject.ParamSpec) => void))
}
export interface Buffer_Static {
    name: string
    new (config?: Buffer_ConstructProps): Buffer
}
export declare class Buffer_Static {
    new(table: Gtk.TextTagTable | null): Buffer
    new_with_language(language: Language): Buffer
}
export declare var Buffer: Buffer_Static
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
export interface Completion {
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
    add_provider(provider: CompletionProvider): boolean
    block_interactive(): void
    create_context(position: Gtk.TextIter | null): CompletionContext
    get_info_window(): CompletionInfo
    get_providers(): GLib.List
    get_view(): View | null
    hide(): void
    move_window(iter: Gtk.TextIter): void
    remove_provider(provider: CompletionProvider): boolean
    show(providers: GLib.List | null, context: CompletionContext): boolean
    unblock_interactive(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.Completion */
    vfunc_activate_proposal(): void
    vfunc_hide(): void
    vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void
    vfunc_move_page(step: Gtk.ScrollStep, num: number): void
    vfunc_populate_context(context: CompletionContext): void
    vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean
    vfunc_show(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Completion */
    connect(sigName: "activate-proposal", callback: ((obj: Completion) => void))
    connect(sigName: "hide", callback: ((obj: Completion) => void))
    connect(sigName: "move-cursor", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void))
    connect(sigName: "move-page", callback: ((obj: Completion, step: Gtk.ScrollStep, num: number) => void))
    connect(sigName: "populate-context", callback: ((obj: Completion, context: CompletionContext) => void))
    connect(sigName: "show", callback: ((obj: Completion) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::accelerators", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::auto-complete-delay", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::proposal-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::provider-page-size", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::remember-info-visibility", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::select-on-show", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-headers", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-icons", callback: ((obj: Completion, pspec: GObject.ParamSpec) => void))
}
export interface Completion_Static {
    name: string
    new (config?: Completion_ConstructProps): Completion
}
export declare var Completion: Completion_Static
export interface CompletionContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    activation?:CompletionActivation
    completion?:Completion
    iter?:Gtk.TextIter
}
export interface CompletionContext {
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
    add_proposals(provider: CompletionProvider, proposals: GLib.List | null, finished: boolean): void
    get_activation(): CompletionActivation
    get_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.CompletionContext */
    vfunc_cancelled(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionContext */
    connect(sigName: "cancelled", callback: ((obj: CompletionContext) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::activation", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::iter", callback: ((obj: CompletionContext, pspec: GObject.ParamSpec) => void))
}
export interface CompletionContext_Static {
    name: string
    new (config?: CompletionContext_ConstructProps): CompletionContext
}
export declare var CompletionContext: CompletionContext_Static
export interface CompletionInfo_ConstructProps extends Gtk.Window_ConstructProps {
}
export interface CompletionInfo {
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
    get_widget(): Gtk.Widget
    move_to_iter(view: Gtk.TextView, iter: Gtk.TextIter | null): void
    set_widget(widget: Gtk.Widget | null): void
    /* Methods of Gtk.Window */
    activate_default(): boolean
    activate_focus(): boolean
    activate_key(event: Gdk.EventKey): boolean
    add_accel_group(accel_group: Gtk.AccelGroup): void
    add_mnemonic(keyval: number, target: Gtk.Widget): void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    close(): void
    deiconify(): void
    fullscreen(): void
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void
    get_accept_focus(): boolean
    get_application(): Gtk.Application | null
    get_attached_to(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_on_map(): boolean
    get_focus_visible(): boolean
    get_gravity(): Gdk.Gravity
    get_group(): Gtk.WindowGroup
    get_has_resize_grip(): boolean
    get_hide_titlebar_when_maximized(): boolean
    get_icon(): GdkPixbuf.Pixbuf
    get_icon_list(): GLib.List
    get_icon_name(): string | null
    get_mnemonic_modifier(): Gdk.ModifierType
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_opacity(): number
    get_position(): [ /* root_x */ number | null, /* root_y */ number | null ]
    get_resizable(): boolean
    get_resize_grip_area(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    get_role(): string | null
    get_screen(): Gdk.Screen
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_skip_pager_hint(): boolean
    get_skip_taskbar_hint(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    get_type_hint(): Gdk.WindowTypeHint
    get_urgency_hint(): boolean
    get_window_type(): Gtk.WindowType
    has_group(): boolean
    iconify(): void
    maximize(): void
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean
    move(x: number, y: number): void
    parse_geometry(geometry: string): boolean
    present(): void
    present_with_time(timestamp: number): void
    propagate_key_event(event: Gdk.EventKey): boolean
    remove_accel_group(accel_group: Gtk.AccelGroup): void
    remove_mnemonic(keyval: number, target: Gtk.Widget): void
    reshow_with_initial_size(): void
    resize(width: number, height: number): void
    resize_grip_is_visible(): boolean
    resize_to_geometry(width: number, height: number): void
    set_accept_focus(setting: boolean): void
    set_application(application: Gtk.Application | null): void
    set_attached_to(attach_widget: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default(default_widget: Gtk.Widget | null): void
    set_default_geometry(width: number, height: number): void
    set_default_size(width: number, height: number): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_focus(focus: Gtk.Widget | null): void
    set_focus_on_map(setting: boolean): void
    set_focus_visible(setting: boolean): void
    set_geometry_hints(geometry_widget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void
    set_gravity(gravity: Gdk.Gravity): void
    set_has_resize_grip(value: boolean): void
    set_has_user_ref_count(setting: boolean): void
    set_hide_titlebar_when_maximized(setting: boolean): void
    set_icon(icon: GdkPixbuf.Pixbuf | null): void
    set_icon_from_file(filename: string): boolean
    set_icon_list(list: GLib.List): void
    set_icon_name(name: string | null): void
    set_keep_above(setting: boolean): void
    set_keep_below(setting: boolean): void
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_opacity(opacity: number): void
    set_position(position: Gtk.WindowPosition): void
    set_resizable(resizable: boolean): void
    set_role(role: string): void
    set_screen(screen: Gdk.Screen): void
    set_skip_pager_hint(setting: boolean): void
    set_skip_taskbar_hint(setting: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title: string): void
    set_titlebar(titlebar: Gtk.Widget | null): void
    set_transient_for(parent: Gtk.Window | null): void
    set_type_hint(hint: Gdk.WindowTypeHint): void
    set_urgency_hint(setting: boolean): void
    set_wmclass(wmclass_name: string, wmclass_class: string): void
    stick(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    /* Methods of Gtk.Bin */
    get_child(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object | null): void
    foreach(callback: Gtk.Callback, callback_data: object | null): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: GLib.List): void
    set_focus_child(child: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region: cairo.Region | null): void
    insert_action_group(name: string, group: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): GLib.List
    list_action_prefixes(): string[]
    list_mnemonic_labels(): GLib.List
    map(): void
    modify_base(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_font(font_desc: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void
    override_font(font_desc: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map: Pango.FontMap | null): void
    set_font_options(options: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup: string | null): void
    set_tooltip_text(text: string | null): void
    set_tooltip_window(custom_window: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.CompletionInfo */
    vfunc_before_show(): void
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    vfunc_set_focus(focus: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object | null): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.CompletionInfo */
    connect(sigName: "before-show", callback: ((obj: CompletionInfo) => void))
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "activate-focus", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "enable-debugging", callback: ((obj: CompletionInfo, toggle: boolean) => boolean))
    connect(sigName: "keys-changed", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "set-focus", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void))
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "remove", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((obj: CompletionInfo, object: Gtk.Widget) => void))
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "button-press-event", callback: ((obj: CompletionInfo, event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((obj: CompletionInfo, event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((obj: CompletionInfo, signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((obj: CompletionInfo, child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "configure-event", callback: ((obj: CompletionInfo, event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((obj: CompletionInfo, event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "destroy-event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((obj: CompletionInfo, previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((obj: CompletionInfo, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((obj: CompletionInfo, context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((obj: CompletionInfo, context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((obj: CompletionInfo, context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((obj: CompletionInfo, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((obj: CompletionInfo, cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((obj: CompletionInfo, event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((obj: CompletionInfo, event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((obj: CompletionInfo, event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((obj: CompletionInfo, event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((obj: CompletionInfo, event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "grab-notify", callback: ((obj: CompletionInfo, was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "hierarchy-changed", callback: ((obj: CompletionInfo, previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((obj: CompletionInfo, event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((obj: CompletionInfo, event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "map-event", callback: ((obj: CompletionInfo, event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((obj: CompletionInfo, group_cycling: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((obj: CompletionInfo, direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((obj: CompletionInfo, old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: ((obj: CompletionInfo) => boolean))
    connect(sigName: "property-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((obj: CompletionInfo, event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((obj: CompletionInfo, event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((obj: CompletionInfo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "screen-changed", callback: ((obj: CompletionInfo, previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((obj: CompletionInfo, event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((obj: CompletionInfo, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((obj: CompletionInfo, data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((obj: CompletionInfo, event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "show-help", callback: ((obj: CompletionInfo, help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((obj: CompletionInfo, allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((obj: CompletionInfo, state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((obj: CompletionInfo, flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((obj: CompletionInfo, previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "touch-event", callback: ((obj: CompletionInfo, object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "unmap-event", callback: ((obj: CompletionInfo, event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: ((obj: CompletionInfo) => void))
    connect(sigName: "visibility-notify-event", callback: ((obj: CompletionInfo, event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((obj: CompletionInfo, event: Gdk.EventWindowState) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::accept-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::application", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::attached-to", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::decorated", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::default-height", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::default-width", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::deletable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::destroy-with-parent", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-on-map", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::gravity", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-resize-grip", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-toplevel-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-active", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-maximized", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::mnemonics-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::modal", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resizable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resize-grip-visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::role", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::screen", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::skip-pager-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::skip-taskbar-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::startup-id", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::title", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::transient-for", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::type-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::urgency-hint", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window-position", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::border-width", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::child", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resize-mode", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::app-paintable", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::composite-child", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::double-buffered", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::events", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::expand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-on-click", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::halign", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-tooltip", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::height-request", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand-set", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-focus", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-bottom", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-end", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-left", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-right", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-start", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-top", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::no-show-all", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::opacity", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::parent", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::receives-default", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale-factor", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::sensitive", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-markup", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-text", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::valign", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand-set", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::width-request", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window", callback: ((obj: CompletionInfo, pspec: GObject.ParamSpec) => void))
}
export interface CompletionInfo_Static {
    name: string
    new (config?: CompletionInfo_ConstructProps): CompletionInfo
}
export declare class CompletionInfo_Static {
    new(): CompletionInfo
}
export declare var CompletionInfo: CompletionInfo_Static
export interface CompletionItem_ConstructProps extends GObject.Object_ConstructProps {
    gicon?:Gio.Icon
    icon?:GdkPixbuf.Pixbuf
    icon_name?:string
    info?:string
    label?:string
    markup?:string
    text?:string
}
export interface CompletionItem {
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
    set_gicon(gicon: Gio.Icon | null): void
    set_icon(icon: GdkPixbuf.Pixbuf | null): void
    set_icon_name(icon_name: string | null): void
    set_info(info: string | null): void
    set_label(label: string | null): void
    set_markup(markup: string | null): void
    set_text(text: string | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::gicon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::info", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::label", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::markup", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::text", callback: ((obj: CompletionItem, pspec: GObject.ParamSpec) => void))
}
export interface CompletionItem_Static {
    name: string
    new (config?: CompletionItem_ConstructProps): CompletionItem
}
export declare class CompletionItem_Static {
    new(label: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    new_from_stock(label: string | null, text: string, stock: string, info: string | null): CompletionItem
    new_with_markup(markup: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    new2(): CompletionItem
}
export declare var CompletionItem: CompletionItem_Static
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
export interface CompletionWords {
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::activation", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::interactive-delay", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::minimum-word-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::priority", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::proposals-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scan-batch-size", callback: ((obj: CompletionWords, pspec: GObject.ParamSpec) => void))
}
export interface CompletionWords_Static {
    name: string
    new (config?: CompletionWords_ConstructProps): CompletionWords
}
export declare class CompletionWords_Static {
    new(name: string | null, icon: GdkPixbuf.Pixbuf | null): CompletionWords
}
export declare var CompletionWords: CompletionWords_Static
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    location?:Gio.File
}
export interface File {
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
    check_file_on_disk(): void
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_location(): Gio.File
    get_newline_type(): NewlineType
    is_deleted(): boolean
    is_externally_modified(): boolean
    is_local(): boolean
    is_readonly(): boolean
    set_location(location: Gio.File | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::compression-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::encoding", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::location", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::newline-type", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::read-only", callback: ((obj: File, pspec: GObject.ParamSpec) => void))
}
export interface File_Static {
    name: string
    new (config?: File_ConstructProps): File
}
export declare class File_Static {
    new(): File
}
export declare var File: File_Static
export interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    file?:File
    input_stream?:Gio.InputStream
    location?:Gio.File
}
export interface FileLoader {
    /* Properties of GtkSource.FileLoader */
    /* Fields of GtkSource.FileLoader */
    parent:GObject.Object
    priv:FileLoaderPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.FileLoader */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_input_stream(): Gio.InputStream | null
    get_location(): Gio.File | null
    get_newline_type(): NewlineType
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object | null, progress_callback_notify: GLib.DestroyNotify | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void
    load_finish(result: Gio.AsyncResult): boolean
    set_candidate_encodings(candidate_encodings: GLib.SList): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: FileLoader, pspec: GObject.ParamSpec) => void))
}
export interface FileLoader_Static {
    name: string
    new (config?: FileLoader_ConstructProps): FileLoader
}
export declare class FileLoader_Static {
    new(buffer: Buffer, file: File): FileLoader
    new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
}
export declare var FileLoader: FileLoader_Static
export interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    compression_type?:CompressionType
    encoding?:Encoding
    file?:File
    flags?:FileSaverFlags
    location?:Gio.File
    newline_type?:NewlineType
}
export interface FileSaver {
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
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object | null, progress_callback_notify: GLib.DestroyNotify | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void
    save_finish(result: Gio.AsyncResult): boolean
    set_compression_type(compression_type: CompressionType): void
    set_encoding(encoding: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    set_newline_type(newline_type: NewlineType): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::compression-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::encoding", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::flags", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::newline-type", callback: ((obj: FileSaver, pspec: GObject.ParamSpec) => void))
}
export interface FileSaver_Static {
    name: string
    new (config?: FileSaver_ConstructProps): FileSaver
}
export declare class FileSaver_Static {
    new(buffer: Buffer, file: File): FileSaver
    new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
}
export declare var FileSaver: FileSaver_Static
export interface Gutter_ConstructProps extends GObject.Object_ConstructProps {
    view?:View
    window_type?:Gtk.TextWindowType
    xpad?:number
    ypad?:number
}
export interface Gutter {
    /* Properties of GtkSource.Gutter */
    xpad:number
    ypad:number
    /* Fields of GtkSource.Gutter */
    parent:GObject.Object
    priv:GutterPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xpad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ypad", callback: ((obj: Gutter, pspec: GObject.ParamSpec) => void))
}
export interface Gutter_Static {
    name: string
    new (config?: Gutter_ConstructProps): Gutter
}
export declare var Gutter: Gutter_Static
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
export interface GutterRenderer {
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
    set_background(color: Gdk.RGBA | null): void
    set_padding(xpad: number, ypad: number): void
    set_size(size: number): void
    set_visible(visible: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfunc_begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_change_buffer(old_buffer: Gtk.TextBuffer | null): void
    vfunc_change_view(old_view: Gtk.TextView | null): void
    vfunc_draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_end(): void
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: ((obj: GutterRenderer) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GutterRenderer, pspec: GObject.ParamSpec) => void))
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
}
export interface GutterRenderer_Static {
    name: string
    new (config?: GutterRenderer_ConstructProps): GutterRenderer
}
export declare var GutterRenderer: GutterRenderer_Static
export interface GutterRendererPixbuf_ConstructProps extends GutterRenderer_ConstructProps {
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export interface GutterRendererPixbuf {
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
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_stock_id(): string
    set_gicon(icon: Gio.Icon | null): void
    set_icon_name(icon_name: string | null): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void
    set_stock_id(stock_id: string | null): void
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
    set_background(color: Gdk.RGBA | null): void
    set_padding(xpad: number, ypad: number): void
    set_size(size: number): void
    set_visible(visible: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfunc_begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_change_buffer(old_buffer: Gtk.TextBuffer | null): void
    vfunc_change_view(old_view: Gtk.TextView | null): void
    vfunc_draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_end(): void
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((obj: GutterRendererPixbuf, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: ((obj: GutterRendererPixbuf) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::gicon", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixbuf", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::stock-id", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::alignment-mode", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-rgba", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-set", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::size", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::view", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window-type", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xalign", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xpad", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::yalign", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ypad", callback: ((obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void))
}
export interface GutterRendererPixbuf_Static {
    name: string
    new (config?: GutterRendererPixbuf_ConstructProps): GutterRendererPixbuf
}
export declare class GutterRendererPixbuf_Static {
    new(): GutterRendererPixbuf
}
export declare var GutterRendererPixbuf: GutterRendererPixbuf_Static
export interface GutterRendererText_ConstructProps extends GutterRenderer_ConstructProps {
    markup?:string
    text?:string
}
export interface GutterRendererText {
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
    measure_markup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    set_markup(markup: string, length: number): void
    set_text(text: string, length: number): void
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
    set_background(color: Gdk.RGBA | null): void
    set_padding(xpad: number, ypad: number): void
    set_size(size: number): void
    set_visible(visible: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    vfunc_begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_change_buffer(old_buffer: Gtk.TextBuffer | null): void
    vfunc_change_view(old_view: Gtk.TextView | null): void
    vfunc_draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_end(): void
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    vfunc_query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((obj: GutterRendererText, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: ((obj: GutterRendererText) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::markup", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::text", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::alignment-mode", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-rgba", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-set", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::size", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::view", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window-type", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xalign", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xpad", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::yalign", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ypad", callback: ((obj: GutterRendererText, pspec: GObject.ParamSpec) => void))
}
export interface GutterRendererText_Static {
    name: string
    new (config?: GutterRendererText_ConstructProps): GutterRendererText
}
export declare class GutterRendererText_Static {
    new(): GutterRendererText
}
export declare var GutterRendererText: GutterRendererText_Static
export interface Language_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Language {
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hidden", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::id", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::section", callback: ((obj: Language, pspec: GObject.ParamSpec) => void))
}
export interface Language_Static {
    name: string
    new (config?: Language_ConstructProps): Language
}
export declare var Language: Language_Static
export interface LanguageManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?:string[]
}
export interface LanguageManager {
    /* Properties of GtkSource.LanguageManager */
    readonly language_ids:string[]
    search_path:string[]
    /* Fields of GtkSource.LanguageManager */
    parent_instance:GObject.Object
    priv:LanguageManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.LanguageManager */
    get_language(id: string): Language | null
    get_language_ids(): string[] | null
    get_search_path(): string[]
    guess_language(filename: string | null, content_type: string | null): Language | null
    set_search_path(dirs: string[] | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::language-ids", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::search-path", callback: ((obj: LanguageManager, pspec: GObject.ParamSpec) => void))
}
export interface LanguageManager_Static {
    name: string
    new (config?: LanguageManager_ConstructProps): LanguageManager
}
export declare class LanguageManager_Static {
    new(): LanguageManager
    get_default(): LanguageManager
}
export declare var LanguageManager: LanguageManager_Static
export interface Map_ConstructProps extends View_ConstructProps {
    font_desc?:Pango.FontDescription
    view?:View
}
export interface Map {
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
    get_view(): View | null
    set_view(view: View): void
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
    /* Methods of Gtk.TextView */
    add_child_at_anchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    add_child_in_window(child: Gtk.Widget, which_window: Gtk.TextWindowType, xpos: number, ypos: number): void
    backward_display_line(iter: Gtk.TextIter): boolean
    backward_display_line_start(iter: Gtk.TextIter): boolean
    buffer_to_window_coords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forward_display_line(iter: Gtk.TextIter): boolean
    forward_display_line_end(iter: Gtk.TextIter): boolean
    get_accepts_tab(): boolean
    get_border_window_size(type: Gtk.TextWindowType): number
    get_bottom_margin(): number
    get_buffer(): Gtk.TextBuffer
    get_cursor_locations(iter: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    get_cursor_visible(): boolean
    get_default_attributes(): Gtk.TextAttributes
    get_editable(): boolean
    get_hadjustment(): Gtk.Adjustment
    get_indent(): number
    get_input_hints(): Gtk.InputHints
    get_input_purpose(): Gtk.InputPurpose
    get_iter_at_location(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_iter_at_position(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    get_iter_location(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    get_justification(): Gtk.Justification
    get_left_margin(): number
    get_line_at_y(y: number): [ /* target_iter */ Gtk.TextIter, /* line_top */ number ]
    get_line_yrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    get_monospace(): boolean
    get_overwrite(): boolean
    get_pixels_above_lines(): number
    get_pixels_below_lines(): number
    get_pixels_inside_wrap(): number
    get_right_margin(): number
    get_tabs(): Pango.TabArray | null
    get_top_margin(): number
    get_vadjustment(): Gtk.Adjustment
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_window_type(window: Gdk.Window): Gtk.TextWindowType
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.EventKey): boolean
    move_child(child: Gtk.Widget, xpos: number, ypos: number): void
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
    reset_cursor_blink(): void
    reset_im_context(): void
    scroll_mark_onscreen(mark: Gtk.TextMark): void
    scroll_to_iter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scroll_to_mark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    set_accepts_tab(accepts_tab: boolean): void
    set_border_window_size(type: Gtk.TextWindowType, size: number): void
    set_bottom_margin(bottom_margin: number): void
    set_buffer(buffer: Gtk.TextBuffer | null): void
    set_cursor_visible(setting: boolean): void
    set_editable(setting: boolean): void
    set_indent(indent: number): void
    set_input_hints(hints: Gtk.InputHints): void
    set_input_purpose(purpose: Gtk.InputPurpose): void
    set_justification(justification: Gtk.Justification): void
    set_left_margin(left_margin: number): void
    set_monospace(monospace: boolean): void
    set_overwrite(overwrite: boolean): void
    set_pixels_above_lines(pixels_above_lines: number): void
    set_pixels_below_lines(pixels_below_lines: number): void
    set_pixels_inside_wrap(pixels_inside_wrap: number): void
    set_right_margin(right_margin: number): void
    set_tabs(tabs: Pango.TabArray): void
    set_top_margin(top_margin: number): void
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void
    starts_display_line(iter: Gtk.TextIter): boolean
    window_to_buffer_coords(win: Gtk.TextWindowType, window_x: number, window_y: number): [ /* buffer_x */ number | null, /* buffer_y */ number | null ]
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object | null): void
    foreach(callback: Gtk.Callback, callback_data: object | null): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: GLib.List): void
    set_focus_child(child: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region: cairo.Region | null): void
    insert_action_group(name: string, group: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): GLib.List
    list_action_prefixes(): string[]
    list_mnemonic_labels(): GLib.List
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_font(font_desc: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void
    override_font(font_desc: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map: Pango.FontMap | null): void
    set_font_options(options: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup: string | null): void
    set_tooltip_text(text: string | null): void
    set_tooltip_window(custom_window: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.View */
    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines(copy: boolean, step: number): void
    vfunc_move_words(step: number): void
    vfunc_redo(): void
    vfunc_show_completion(): void
    vfunc_undo(): void
    /* Virtual methods of Gtk.TextView */
    vfunc_backspace(): void
    vfunc_copy_clipboard(): void
    vfunc_cut_clipboard(): void
    vfunc_delete_from_cursor(type: Gtk.DeleteType, count: number): void
    vfunc_draw_layer(layer: Gtk.TextViewLayer, cr: cairo.Context): void
    vfunc_extend_selection(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor(str: string): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard(): void
    vfunc_populate_popup(popup: Gtk.Widget): void
    vfunc_set_anchor(): void
    vfunc_toggle_overwrite(): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object | null): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: ((obj: Map, case_type: ChangeCaseType) => void))
    connect(sigName: "change-number", callback: ((obj: Map, count: number) => void))
    connect(sigName: "join-lines", callback: ((obj: Map) => void))
    connect(sigName: "line-mark-activated", callback: ((obj: Map, iter: Gtk.TextIter, event: Gdk.Event) => void))
    connect(sigName: "move-lines", callback: ((obj: Map, copy: boolean, count: number) => void))
    connect(sigName: "move-to-matching-bracket", callback: ((obj: Map, extend_selection: boolean) => void))
    connect(sigName: "move-words", callback: ((obj: Map, count: number) => void))
    connect(sigName: "redo", callback: ((obj: Map) => void))
    connect(sigName: "show-completion", callback: ((obj: Map) => void))
    connect(sigName: "smart-home-end", callback: ((obj: Map, iter: Gtk.TextIter, count: number) => void))
    connect(sigName: "undo", callback: ((obj: Map) => void))
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: ((obj: Map) => void))
    connect(sigName: "copy-clipboard", callback: ((obj: Map) => void))
    connect(sigName: "cut-clipboard", callback: ((obj: Map) => void))
    connect(sigName: "delete-from-cursor", callback: ((obj: Map, type: Gtk.DeleteType, count: number) => void))
    connect(sigName: "extend-selection", callback: ((obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean))
    connect(sigName: "insert-at-cursor", callback: ((obj: Map, string: string) => void))
    connect(sigName: "move-cursor", callback: ((obj: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void))
    connect(sigName: "move-viewport", callback: ((obj: Map, step: Gtk.ScrollStep, count: number) => void))
    connect(sigName: "paste-clipboard", callback: ((obj: Map) => void))
    connect(sigName: "populate-popup", callback: ((obj: Map, popup: Gtk.Widget) => void))
    connect(sigName: "preedit-changed", callback: ((obj: Map, preedit: string) => void))
    connect(sigName: "select-all", callback: ((obj: Map, select: boolean) => void))
    connect(sigName: "set-anchor", callback: ((obj: Map) => void))
    connect(sigName: "toggle-cursor-visible", callback: ((obj: Map) => void))
    connect(sigName: "toggle-overwrite", callback: ((obj: Map) => void))
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: Map, object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: ((obj: Map) => void))
    connect(sigName: "remove", callback: ((obj: Map, object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((obj: Map, object: Gtk.Widget) => void))
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: Map) => void))
    connect(sigName: "button-press-event", callback: ((obj: Map, event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((obj: Map, event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((obj: Map, signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((obj: Map, child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: ((obj: Map) => void))
    connect(sigName: "configure-event", callback: ((obj: Map, event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((obj: Map, event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((obj: Map, event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: ((obj: Map) => void))
    connect(sigName: "destroy-event", callback: ((obj: Map, event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((obj: Map, previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((obj: Map, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((obj: Map, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((obj: Map, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((obj: Map, context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((obj: Map, context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((obj: Map, context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((obj: Map, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((obj: Map, cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((obj: Map, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((obj: Map, event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((obj: Map, event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((obj: Map, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((obj: Map, event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((obj: Map, event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((obj: Map, event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: ((obj: Map) => void))
    connect(sigName: "grab-notify", callback: ((obj: Map, was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: ((obj: Map) => void))
    connect(sigName: "hierarchy-changed", callback: ((obj: Map, previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((obj: Map, event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((obj: Map, event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((obj: Map, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((obj: Map, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: ((obj: Map) => void))
    connect(sigName: "map-event", callback: ((obj: Map, event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((obj: Map, group_cycling: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((obj: Map, event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((obj: Map, direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((obj: Map, old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: ((obj: Map) => boolean))
    connect(sigName: "property-notify-event", callback: ((obj: Map, event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((obj: Map, event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((obj: Map, event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((obj: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: ((obj: Map) => void))
    connect(sigName: "screen-changed", callback: ((obj: Map, previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((obj: Map, event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((obj: Map, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((obj: Map, data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((obj: Map, event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: ((obj: Map) => void))
    connect(sigName: "show-help", callback: ((obj: Map, help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((obj: Map, allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((obj: Map, state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((obj: Map, flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((obj: Map, previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: ((obj: Map) => void))
    connect(sigName: "touch-event", callback: ((obj: Map, object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: ((obj: Map) => void))
    connect(sigName: "unmap-event", callback: ((obj: Map, event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: ((obj: Map) => void))
    connect(sigName: "visibility-notify-event", callback: ((obj: Map, event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((obj: Map, event: Gdk.EventWindowState) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::font-desc", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::view", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::auto-indent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-pattern", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::completion", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::draw-spaces", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight-current-line", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent-on-tab", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::right-margin-position", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-line-marks", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-line-numbers", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::show-right-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::smart-backspace", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::smart-home-end", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::space-drawer", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tab-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::accepts-tab", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::bottom-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::buffer", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::cursor-visible", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::editable", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::im-module", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-hints", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-purpose", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::justification", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::left-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::monospace", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::overwrite", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-above-lines", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-below-lines", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-inside-wrap", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::populate-all", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::right-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tabs", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::top-margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-mode", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::border-width", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::child", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resize-mode", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::app-paintable", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::composite-child", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::double-buffered", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::events", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::expand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-on-click", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::halign", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-tooltip", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::height-request", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand-set", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-focus", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-bottom", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-end", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-left", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-right", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-start", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-top", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::no-show-all", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::opacity", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::parent", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::receives-default", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale-factor", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::sensitive", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-markup", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-text", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::valign", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand-set", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::width-request", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window", callback: ((obj: Map, pspec: GObject.ParamSpec) => void))
}
export interface Map_Static {
    name: string
    new (config?: Map_ConstructProps): Map
}
export declare class Map_Static {
    new(): Map
}
export declare var Map: Map_Static
export interface Mark_ConstructProps extends Gtk.TextMark_ConstructProps {
    category?:string
}
export interface Mark {
    /* Properties of GtkSource.Mark */
    /* Properties of Gtk.TextMark */
    /* Fields of GtkSource.Mark */
    parent_instance:Gtk.TextMark
    priv:MarkPrivate
    /* Fields of Gtk.TextMark */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Mark */
    get_category(): string
    next(category: string | null): Mark | null
    prev(category: string): Mark | null
    /* Methods of Gtk.TextMark */
    get_buffer(): Gtk.TextBuffer
    get_deleted(): boolean
    get_left_gravity(): boolean
    get_name(): string | null
    get_visible(): boolean
    set_visible(setting: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: Mark, pspec: GObject.ParamSpec) => void))
}
export interface Mark_Static {
    name: string
    new (config?: Mark_ConstructProps): Mark
}
export declare class Mark_Static {
    new(name: string, category: string): Mark
}
export declare var Mark: Mark_Static
export interface MarkAttributes_ConstructProps extends GObject.Object_ConstructProps {
    background?:Gdk.RGBA
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export interface MarkAttributes {
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    /* Signals of GtkSource.MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: ((obj: MarkAttributes, mark: Mark) => string))
    connect(sigName: "query-tooltip-text", callback: ((obj: MarkAttributes, mark: Mark) => string))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::gicon", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixbuf", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::stock-id", callback: ((obj: MarkAttributes, pspec: GObject.ParamSpec) => void))
}
export interface MarkAttributes_Static {
    name: string
    new (config?: MarkAttributes_ConstructProps): MarkAttributes
}
export declare class MarkAttributes_Static {
    new(): MarkAttributes
}
export declare var MarkAttributes: MarkAttributes_Static
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
export interface PrintCompositor {
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
    set_footer_font_name(font_name: string | null): void
    set_footer_format(separator: boolean, left: string | null, center: string | null, right: string | null): void
    set_header_font_name(font_name: string | null): void
    set_header_format(separator: boolean, left: string | null, center: string | null, right: string | null): void
    set_highlight_syntax(highlight: boolean): void
    set_left_margin(margin: number, unit: Gtk.Unit): void
    set_line_numbers_font_name(font_name: string | null): void
    set_print_footer(print: boolean): void
    set_print_header(print: boolean): void
    set_print_line_numbers(interval: number): void
    set_right_margin(margin: number, unit: Gtk.Unit): void
    set_tab_width(width: number): void
    set_top_margin(margin: number, unit: Gtk.Unit): void
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: PrintCompositor, pspec: GObject.ParamSpec) => void))
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
}
export interface PrintCompositor_Static {
    name: string
    new (config?: PrintCompositor_ConstructProps): PrintCompositor
}
export declare class PrintCompositor_Static {
    new(buffer: Buffer): PrintCompositor
    new_from_view(view: View): PrintCompositor
}
export declare var PrintCompositor: PrintCompositor_Static
export interface Region_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Gtk.TextBuffer
}
export interface Region {
    /* Properties of GtkSource.Region */
    /* Fields of GtkSource.Region */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Region */
    add_region(region_to_add: Region | null): void
    add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    get_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    get_buffer(): Gtk.TextBuffer | null
    get_start_region_iter(): /* iter */ RegionIter
    intersect_region(region2: Region | null): Region | null
    intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null
    is_empty(): boolean
    subtract_region(region_to_subtract: Region | null): void
    subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    to_string(): string | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: Region, pspec: GObject.ParamSpec) => void))
}
export interface Region_Static {
    name: string
    new (config?: Region_ConstructProps): Region
}
export declare class Region_Static {
    new(buffer: Gtk.TextBuffer): Region
}
export declare var Region: Region_Static
export interface SearchContext_ConstructProps extends GObject.Object_ConstructProps {
    buffer?:Buffer
    highlight?:boolean
    match_style?:Style
    settings?:SearchSettings
}
export interface SearchContext {
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
    backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void
    backward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    backward_finish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void
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
    set_match_style(match_style: Style | null): void
    set_settings(settings: SearchSettings | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::highlight", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::match-style", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::occurrences-count", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::regex-error", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::settings", callback: ((obj: SearchContext, pspec: GObject.ParamSpec) => void))
}
export interface SearchContext_Static {
    name: string
    new (config?: SearchContext_ConstructProps): SearchContext
}
export declare class SearchContext_Static {
    new(buffer: Buffer, settings: SearchSettings | null): SearchContext
}
export declare var SearchContext: SearchContext_Static
export interface SearchSettings_ConstructProps extends GObject.Object_ConstructProps {
    at_word_boundaries?:boolean
    case_sensitive?:boolean
    regex_enabled?:boolean
    search_text?:string
    wrap_around?:boolean
}
export interface SearchSettings {
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
    get_at_word_boundaries(): boolean
    get_case_sensitive(): boolean
    get_regex_enabled(): boolean
    get_search_text(): string | null
    get_wrap_around(): boolean
    set_at_word_boundaries(at_word_boundaries: boolean): void
    set_case_sensitive(case_sensitive: boolean): void
    set_regex_enabled(regex_enabled: boolean): void
    set_search_text(search_text: string | null): void
    set_wrap_around(wrap_around: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::at-word-boundaries", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::case-sensitive", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::regex-enabled", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::search-text", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-around", callback: ((obj: SearchSettings, pspec: GObject.ParamSpec) => void))
}
export interface SearchSettings_Static {
    name: string
    new (config?: SearchSettings_ConstructProps): SearchSettings
}
export declare class SearchSettings_Static {
    new(): SearchSettings
}
export declare var SearchSettings: SearchSettings_Static
export interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    enable_matrix?:boolean
    matrix?:GLib.Variant
}
export interface SpaceDrawer {
    /* Properties of GtkSource.SpaceDrawer */
    enable_matrix:boolean
    matrix:GLib.Variant
    /* Fields of GtkSource.SpaceDrawer */
    parent:GObject.Object
    priv:SpaceDrawerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.SpaceDrawer */
    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    get_enable_matrix(): boolean
    get_matrix(): GLib.Variant
    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags
    set_enable_matrix(enable_matrix: boolean): void
    set_matrix(matrix: GLib.Variant | null): void
    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::enable-matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::matrix", callback: ((obj: SpaceDrawer, pspec: GObject.ParamSpec) => void))
}
export interface SpaceDrawer_Static {
    name: string
    new (config?: SpaceDrawer_ConstructProps): SpaceDrawer
}
export declare class SpaceDrawer_Static {
    new(): SpaceDrawer
}
export declare var SpaceDrawer: SpaceDrawer_Static
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
export interface Style {
    /* Properties of GtkSource.Style */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.Style */
    apply(tag: Gtk.TextTag): void
    copy(): Style
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: Style, pspec: GObject.ParamSpec) => void))
}
export interface Style_Static {
    name: string
    new (config?: Style_ConstructProps): Style
}
export declare var Style: Style_Static
export interface StyleScheme_ConstructProps extends GObject.Object_ConstructProps {
    id?:string
}
export interface StyleScheme {
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
    get_authors(): string[] | null
    get_description(): string | null
    get_filename(): string | null
    get_id(): string
    get_name(): string
    get_style(style_id: string): Style | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::description", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::filename", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: StyleScheme, pspec: GObject.ParamSpec) => void))
}
export interface StyleScheme_Static {
    name: string
    new (config?: StyleScheme_ConstructProps): StyleScheme
}
export declare var StyleScheme: StyleScheme_Static
export interface StyleSchemeChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
}
export interface StyleSchemeChooserButton {
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
    get_alignment(): [ /* xalign */ number, /* yalign */ number ]
    get_always_show_image(): boolean
    get_event_window(): Gdk.Window
    get_focus_on_click(): boolean
    get_image(): Gtk.Widget | null
    get_image_position(): Gtk.PositionType
    get_label(): string
    get_relief(): Gtk.ReliefStyle
    get_use_stock(): boolean
    get_use_underline(): boolean
    leave(): void
    pressed(): void
    released(): void
    set_alignment(xalign: number, yalign: number): void
    set_always_show_image(always_show: boolean): void
    set_focus_on_click(focus_on_click: boolean): void
    set_image(image: Gtk.Widget | null): void
    set_image_position(position: Gtk.PositionType): void
    set_label(label: string): void
    set_relief(relief: Gtk.ReliefStyle): void
    set_use_stock(use_stock: boolean): void
    set_use_underline(use_underline: boolean): void
    /* Methods of Gtk.Bin */
    get_child(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object | null): void
    foreach(callback: Gtk.Callback, callback_data: object | null): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: GLib.List): void
    set_focus_child(child: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region: cairo.Region | null): void
    insert_action_group(name: string, group: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): GLib.List
    list_action_prefixes(): string[]
    list_mnemonic_labels(): GLib.List
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_font(font_desc: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void
    override_font(font_desc: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_font_map(font_map: Pango.FontMap | null): void
    set_font_options(options: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup: string | null): void
    set_tooltip_text(text: string | null): void
    set_tooltip_window(custom_window: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gtk.Button */
    vfunc_activate(): void
    vfunc_clicked(): void
    vfunc_enter(): void
    vfunc_leave(): void
    vfunc_pressed(): void
    vfunc_released(): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object | null): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Button */
    connect(sigName: "activate", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "clicked", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "enter", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "leave", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "pressed", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "released", callback: ((obj: StyleSchemeChooserButton) => void))
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "remove", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((obj: StyleSchemeChooserButton, object: Gtk.Widget) => void))
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "button-press-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((obj: StyleSchemeChooserButton, signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((obj: StyleSchemeChooserButton, child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "configure-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "destroy-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((obj: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((obj: StyleSchemeChooserButton, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((obj: StyleSchemeChooserButton, cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((obj: StyleSchemeChooserButton, event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "grab-notify", callback: ((obj: StyleSchemeChooserButton, was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "hierarchy-changed", callback: ((obj: StyleSchemeChooserButton, previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "map-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((obj: StyleSchemeChooserButton, group_cycling: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((obj: StyleSchemeChooserButton, old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: ((obj: StyleSchemeChooserButton) => boolean))
    connect(sigName: "property-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((obj: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "screen-changed", callback: ((obj: StyleSchemeChooserButton, previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((obj: StyleSchemeChooserButton, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((obj: StyleSchemeChooserButton, data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "show-help", callback: ((obj: StyleSchemeChooserButton, help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((obj: StyleSchemeChooserButton, allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((obj: StyleSchemeChooserButton, state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((obj: StyleSchemeChooserButton, previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "touch-event", callback: ((obj: StyleSchemeChooserButton, object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "unmap-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: ((obj: StyleSchemeChooserButton) => void))
    connect(sigName: "visibility-notify-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((obj: StyleSchemeChooserButton, event: Gdk.EventWindowState) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::always-show-image", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::image", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::image-position", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::label", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::relief", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::use-stock", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::use-underline", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::xalign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::yalign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::border-width", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::child", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resize-mode", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::app-paintable", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::composite-child", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::double-buffered", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::events", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::expand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-on-click", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::halign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-tooltip", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::height-request", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand-set", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-focus", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-bottom", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-end", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-left", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-right", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-start", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-top", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::no-show-all", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::opacity", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::parent", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::receives-default", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale-factor", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::sensitive", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-markup", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-text", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::valign", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand-set", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::width-request", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window", callback: ((obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void))
}
export interface StyleSchemeChooserButton_Static {
    name: string
    new (config?: StyleSchemeChooserButton_ConstructProps): StyleSchemeChooserButton
}
export declare class StyleSchemeChooserButton_Static {
    new(): StyleSchemeChooserButton
}
export declare var StyleSchemeChooserButton: StyleSchemeChooserButton_Static
export interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Bin_ConstructProps {
}
export interface StyleSchemeChooserWidget {
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
    get_child(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object | null): void
    foreach(callback: Gtk.Callback, callback_data: object | null): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: GLib.List): void
    set_focus_child(child: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region: cairo.Region | null): void
    insert_action_group(name: string, group: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): GLib.List
    list_action_prefixes(): string[]
    list_mnemonic_labels(): GLib.List
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_font(font_desc: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void
    override_font(font_desc: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map: Pango.FontMap | null): void
    set_font_options(options: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup: string | null): void
    set_tooltip_text(text: string | null): void
    set_tooltip_window(custom_window: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object | null): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "remove", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((obj: StyleSchemeChooserWidget, object: Gtk.Widget) => void))
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "button-press-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((obj: StyleSchemeChooserWidget, signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((obj: StyleSchemeChooserWidget, child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "configure-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "destroy-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((obj: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((obj: StyleSchemeChooserWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((obj: StyleSchemeChooserWidget, cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "grab-notify", callback: ((obj: StyleSchemeChooserWidget, was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "hierarchy-changed", callback: ((obj: StyleSchemeChooserWidget, previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "map-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((obj: StyleSchemeChooserWidget, group_cycling: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((obj: StyleSchemeChooserWidget, old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: ((obj: StyleSchemeChooserWidget) => boolean))
    connect(sigName: "property-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((obj: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "screen-changed", callback: ((obj: StyleSchemeChooserWidget, previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((obj: StyleSchemeChooserWidget, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((obj: StyleSchemeChooserWidget, data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "show-help", callback: ((obj: StyleSchemeChooserWidget, help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((obj: StyleSchemeChooserWidget, allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((obj: StyleSchemeChooserWidget, state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((obj: StyleSchemeChooserWidget, previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "touch-event", callback: ((obj: StyleSchemeChooserWidget, object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "unmap-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: ((obj: StyleSchemeChooserWidget) => void))
    connect(sigName: "visibility-notify-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((obj: StyleSchemeChooserWidget, event: Gdk.EventWindowState) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::border-width", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::child", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resize-mode", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::app-paintable", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::composite-child", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::double-buffered", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::events", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::expand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-on-click", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::halign", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-tooltip", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::height-request", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand-set", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-focus", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-bottom", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-end", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-left", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-right", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-start", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-top", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::no-show-all", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::opacity", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::parent", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::receives-default", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale-factor", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::sensitive", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-markup", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-text", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::valign", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand-set", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::width-request", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window", callback: ((obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void))
}
export interface StyleSchemeChooserWidget_Static {
    name: string
    new (config?: StyleSchemeChooserWidget_ConstructProps): StyleSchemeChooserWidget
}
export declare class StyleSchemeChooserWidget_Static {
    new(): StyleSchemeChooserWidget
}
export declare var StyleSchemeChooserWidget: StyleSchemeChooserWidget_Static
export interface StyleSchemeManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?:string[]
}
export interface StyleSchemeManager {
    /* Properties of GtkSource.StyleSchemeManager */
    readonly scheme_ids:string[]
    search_path:string[]
    /* Fields of GtkSource.StyleSchemeManager */
    parent:GObject.Object
    priv:StyleSchemeManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GtkSource.StyleSchemeManager */
    append_search_path(path: string): void
    force_rescan(): void
    get_scheme(scheme_id: string): StyleScheme
    get_scheme_ids(): string[] | null
    get_search_path(): string[]
    prepend_search_path(path: string): void
    set_search_path(path: string[] | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
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
    connect(sigName: "notify", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scheme-ids", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::search-path", callback: ((obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void))
}
export interface StyleSchemeManager_Static {
    name: string
    new (config?: StyleSchemeManager_ConstructProps): StyleSchemeManager
}
export declare class StyleSchemeManager_Static {
    new(): StyleSchemeManager
    get_default(): StyleSchemeManager
}
export declare var StyleSchemeManager: StyleSchemeManager_Static
export interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    draw_spaces?:boolean
    draw_spaces_set?:boolean
}
export interface Tag {
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
    get_priority(): number
    set_priority(priority: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gtk.TextTag */
    vfunc_event(event_object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TextTag */
    connect(sigName: "event", callback: ((obj: Tag, object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::draw-spaces", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::draw-spaces-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::accumulative-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-full-height", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-full-height-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::background-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::direction", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::editable", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::editable-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::fallback", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::fallback-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::font", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::font-desc", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::font-features", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::font-features-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::foreground", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::foreground-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::foreground-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::foreground-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::invisible", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::invisible-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::justification", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::justification-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::language", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::language-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::left-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::left-margin-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::letter-spacing", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::letter-spacing-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::paragraph-background", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::paragraph-background-gdk", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::paragraph-background-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::paragraph-background-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-above-lines", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-above-lines-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-below-lines", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-below-lines-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-inside-wrap", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-inside-wrap-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::right-margin", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::right-margin-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::rise", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::rise-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::size", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::size-points", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::size-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::stretch", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::stretch-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::strikethrough", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::strikethrough-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::strikethrough-rgba-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::strikethrough-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tabs", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tabs-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::underline", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::underline-rgba", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::underline-rgba-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::underline-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::variant", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::variant-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::weight", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::weight-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-mode", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-mode-set", callback: ((obj: Tag, pspec: GObject.ParamSpec) => void))
}
export interface Tag_Static {
    name: string
    new (config?: Tag_ConstructProps): Tag
}
export declare class Tag_Static {
    new(name: string | null): Tag
}
export declare var Tag: Tag_Static
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
export interface View {
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
    /* Methods of Gtk.TextView */
    add_child_at_anchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    add_child_in_window(child: Gtk.Widget, which_window: Gtk.TextWindowType, xpos: number, ypos: number): void
    backward_display_line(iter: Gtk.TextIter): boolean
    backward_display_line_start(iter: Gtk.TextIter): boolean
    buffer_to_window_coords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forward_display_line(iter: Gtk.TextIter): boolean
    forward_display_line_end(iter: Gtk.TextIter): boolean
    get_accepts_tab(): boolean
    get_border_window_size(type: Gtk.TextWindowType): number
    get_bottom_margin(): number
    get_buffer(): Gtk.TextBuffer
    get_cursor_locations(iter: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    get_cursor_visible(): boolean
    get_default_attributes(): Gtk.TextAttributes
    get_editable(): boolean
    get_hadjustment(): Gtk.Adjustment
    get_indent(): number
    get_input_hints(): Gtk.InputHints
    get_input_purpose(): Gtk.InputPurpose
    get_iter_at_location(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_iter_at_position(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    get_iter_location(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    get_justification(): Gtk.Justification
    get_left_margin(): number
    get_line_at_y(y: number): [ /* target_iter */ Gtk.TextIter, /* line_top */ number ]
    get_line_yrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    get_monospace(): boolean
    get_overwrite(): boolean
    get_pixels_above_lines(): number
    get_pixels_below_lines(): number
    get_pixels_inside_wrap(): number
    get_right_margin(): number
    get_tabs(): Pango.TabArray | null
    get_top_margin(): number
    get_vadjustment(): Gtk.Adjustment
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_window_type(window: Gdk.Window): Gtk.TextWindowType
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.EventKey): boolean
    move_child(child: Gtk.Widget, xpos: number, ypos: number): void
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
    reset_cursor_blink(): void
    reset_im_context(): void
    scroll_mark_onscreen(mark: Gtk.TextMark): void
    scroll_to_iter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scroll_to_mark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    set_accepts_tab(accepts_tab: boolean): void
    set_border_window_size(type: Gtk.TextWindowType, size: number): void
    set_bottom_margin(bottom_margin: number): void
    set_buffer(buffer: Gtk.TextBuffer | null): void
    set_cursor_visible(setting: boolean): void
    set_editable(setting: boolean): void
    set_indent(indent: number): void
    set_input_hints(hints: Gtk.InputHints): void
    set_input_purpose(purpose: Gtk.InputPurpose): void
    set_justification(justification: Gtk.Justification): void
    set_left_margin(left_margin: number): void
    set_monospace(monospace: boolean): void
    set_overwrite(overwrite: boolean): void
    set_pixels_above_lines(pixels_above_lines: number): void
    set_pixels_below_lines(pixels_below_lines: number): void
    set_pixels_inside_wrap(pixels_inside_wrap: number): void
    set_right_margin(right_margin: number): void
    set_tabs(tabs: Pango.TabArray): void
    set_top_margin(top_margin: number): void
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void
    starts_display_line(iter: Gtk.TextIter): boolean
    window_to_buffer_coords(win: Gtk.TextWindowType, window_x: number, window_y: number): [ /* buffer_x */ number | null, /* buffer_y */ number | null ]
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object | null): void
    foreach(callback: Gtk.Callback, callback_data: object | null): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: GLib.List): void
    set_focus_child(child: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): void
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: number): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: number, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region: cairo.Region | null): void
    insert_action_group(name: string, group: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): GLib.List
    list_action_prefixes(): string[]
    list_mnemonic_labels(): GLib.List
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color: Gdk.Color | null): void
    modify_font(font_desc: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color: Gdk.RGBA | null): void
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void
    override_font(font_desc: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map: Pango.FontMap | null): void
    set_font_options(options: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup: string | null): void
    set_tooltip_text(text: string | null): void
    set_tooltip_window(custom_window: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GtkSource.View */
    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines(copy: boolean, step: number): void
    vfunc_move_words(step: number): void
    vfunc_redo(): void
    vfunc_show_completion(): void
    vfunc_undo(): void
    /* Virtual methods of Gtk.TextView */
    vfunc_backspace(): void
    vfunc_copy_clipboard(): void
    vfunc_cut_clipboard(): void
    vfunc_delete_from_cursor(type: Gtk.DeleteType, count: number): void
    vfunc_draw_layer(layer: Gtk.TextViewLayer, cr: cairo.Context): void
    vfunc_extend_selection(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor(str: string): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard(): void
    vfunc_populate_popup(popup: Gtk.Widget): void
    vfunc_set_anchor(): void
    vfunc_toggle_overwrite(): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object | null): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: ((obj: View) => void))
    connect(sigName: "copy-clipboard", callback: ((obj: View) => void))
    connect(sigName: "cut-clipboard", callback: ((obj: View) => void))
    connect(sigName: "delete-from-cursor", callback: ((obj: View, type: Gtk.DeleteType, count: number) => void))
    connect(sigName: "extend-selection", callback: ((obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean))
    connect(sigName: "insert-at-cursor", callback: ((obj: View, string: string) => void))
    connect(sigName: "move-cursor", callback: ((obj: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void))
    connect(sigName: "move-viewport", callback: ((obj: View, step: Gtk.ScrollStep, count: number) => void))
    connect(sigName: "paste-clipboard", callback: ((obj: View) => void))
    connect(sigName: "populate-popup", callback: ((obj: View, popup: Gtk.Widget) => void))
    connect(sigName: "preedit-changed", callback: ((obj: View, preedit: string) => void))
    connect(sigName: "select-all", callback: ((obj: View, select: boolean) => void))
    connect(sigName: "set-anchor", callback: ((obj: View) => void))
    connect(sigName: "toggle-cursor-visible", callback: ((obj: View) => void))
    connect(sigName: "toggle-overwrite", callback: ((obj: View) => void))
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: ((obj: View, object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: ((obj: View) => void))
    connect(sigName: "remove", callback: ((obj: View, object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((obj: View, object: Gtk.Widget) => void))
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: ((obj: View) => void))
    connect(sigName: "button-press-event", callback: ((obj: View, event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((obj: View, event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((obj: View, signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((obj: View, child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: ((obj: View) => void))
    connect(sigName: "configure-event", callback: ((obj: View, event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((obj: View, event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((obj: View, event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: ((obj: View) => void))
    connect(sigName: "destroy-event", callback: ((obj: View, event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((obj: View, previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((obj: View, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((obj: View, context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((obj: View, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((obj: View, context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((obj: View, context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((obj: View, context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((obj: View, context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((obj: View, cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((obj: View, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((obj: View, event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((obj: View, event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((obj: View, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((obj: View, event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((obj: View, event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((obj: View, event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: ((obj: View) => void))
    connect(sigName: "grab-notify", callback: ((obj: View, was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: ((obj: View) => void))
    connect(sigName: "hierarchy-changed", callback: ((obj: View, previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((obj: View, event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((obj: View, event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((obj: View, direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((obj: View, event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: ((obj: View) => void))
    connect(sigName: "map-event", callback: ((obj: View, event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((obj: View, group_cycling: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((obj: View, event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((obj: View, direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((obj: View, old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: ((obj: View) => boolean))
    connect(sigName: "property-notify-event", callback: ((obj: View, event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((obj: View, event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((obj: View, event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: ((obj: View) => void))
    connect(sigName: "screen-changed", callback: ((obj: View, previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((obj: View, event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((obj: View, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((obj: View, data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((obj: View, event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: ((obj: View) => void))
    connect(sigName: "show-help", callback: ((obj: View, help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((obj: View, allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((obj: View, state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((obj: View, flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((obj: View, previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: ((obj: View) => void))
    connect(sigName: "touch-event", callback: ((obj: View, object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: ((obj: View) => void))
    connect(sigName: "unmap-event", callback: ((obj: View, event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: ((obj: View) => void))
    connect(sigName: "visibility-notify-event", callback: ((obj: View, event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((obj: View, event: Gdk.EventWindowState) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
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
    connect(sigName: "notify::accepts-tab", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::bottom-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::buffer", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::cursor-visible", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::editable", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::im-module", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::indent", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-hints", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-purpose", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::justification", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::left-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::monospace", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::overwrite", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-above-lines", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-below-lines", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::pixels-inside-wrap", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::populate-all", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::right-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tabs", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::top-margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::wrap-mode", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::border-width", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::child", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resize-mode", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::app-paintable", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::composite-child", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::double-buffered", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::events", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::expand", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::focus-on-click", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::halign", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-tooltip", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::height-request", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::hexpand-set", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-focus", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-bottom", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-end", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-left", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-right", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-start", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::margin-top", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::no-show-all", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::opacity", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::parent", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::receives-default", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scale-factor", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::sensitive", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::style", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-markup", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tooltip-text", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::valign", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::vexpand-set", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::visible", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::width-request", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::window", callback: ((obj: View, pspec: GObject.ParamSpec) => void))
}
export interface View_Static {
    name: string
    new (config?: View_ConstructProps): View
}
export declare class View_Static {
    new(): View
    new_with_buffer(buffer: Buffer): View
}
export declare var View: View_Static
export interface BufferPrivate {
}
export interface BufferPrivate_Static {
    name: string
}
export declare var BufferPrivate: BufferPrivate_Static
export interface CompletionContextPrivate {
}
export interface CompletionContextPrivate_Static {
    name: string
}
export declare var CompletionContextPrivate: CompletionContextPrivate_Static
export interface CompletionInfoPrivate {
}
export interface CompletionInfoPrivate_Static {
    name: string
}
export declare var CompletionInfoPrivate: CompletionInfoPrivate_Static
export interface CompletionItemPrivate {
}
export interface CompletionItemPrivate_Static {
    name: string
}
export declare var CompletionItemPrivate: CompletionItemPrivate_Static
export interface CompletionPrivate {
}
export interface CompletionPrivate_Static {
    name: string
}
export declare var CompletionPrivate: CompletionPrivate_Static
export interface CompletionWordsPrivate {
}
export interface CompletionWordsPrivate_Static {
    name: string
}
export declare var CompletionWordsPrivate: CompletionWordsPrivate_Static
export interface Encoding {
    /* Methods of GtkSource.Encoding */
    copy(): Encoding
    free(): void
    get_charset(): string
    get_name(): string
    to_string(): string
}
export interface Encoding_Static {
    name: string
}
export declare class Encoding_Static {
    get_all(): GLib.SList
    get_current(): Encoding
    get_default_candidates(): GLib.SList
    get_from_charset(charset: string): Encoding | null
    get_utf8(): Encoding
}
export declare var Encoding: Encoding_Static
export interface FileLoaderPrivate {
}
export interface FileLoaderPrivate_Static {
    name: string
}
export declare var FileLoaderPrivate: FileLoaderPrivate_Static
export interface FilePrivate {
}
export interface FilePrivate_Static {
    name: string
}
export declare var FilePrivate: FilePrivate_Static
export interface FileSaverPrivate {
}
export interface FileSaverPrivate_Static {
    name: string
}
export declare var FileSaverPrivate: FileSaverPrivate_Static
export interface GutterPrivate {
}
export interface GutterPrivate_Static {
    name: string
}
export declare var GutterPrivate: GutterPrivate_Static
export interface GutterRendererPixbufPrivate {
}
export interface GutterRendererPixbufPrivate_Static {
    name: string
}
export declare var GutterRendererPixbufPrivate: GutterRendererPixbufPrivate_Static
export interface GutterRendererPrivate {
}
export interface GutterRendererPrivate_Static {
    name: string
}
export declare var GutterRendererPrivate: GutterRendererPrivate_Static
export interface GutterRendererTextPrivate {
}
export interface GutterRendererTextPrivate_Static {
    name: string
}
export declare var GutterRendererTextPrivate: GutterRendererTextPrivate_Static
export interface LanguageManagerPrivate {
}
export interface LanguageManagerPrivate_Static {
    name: string
}
export declare var LanguageManagerPrivate: LanguageManagerPrivate_Static
export interface LanguagePrivate {
}
export interface LanguagePrivate_Static {
    name: string
}
export declare var LanguagePrivate: LanguagePrivate_Static
export interface MarkAttributesPrivate {
}
export interface MarkAttributesPrivate_Static {
    name: string
}
export declare var MarkAttributesPrivate: MarkAttributesPrivate_Static
export interface MarkPrivate {
}
export interface MarkPrivate_Static {
    name: string
}
export declare var MarkPrivate: MarkPrivate_Static
export interface PrintCompositorPrivate {
}
export interface PrintCompositorPrivate_Static {
    name: string
}
export declare var PrintCompositorPrivate: PrintCompositorPrivate_Static
export interface RegionIter {
    /* Fields of GtkSource.RegionIter */
    /* Methods of GtkSource.RegionIter */
    get_subregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    is_end(): boolean
    next(): boolean
}
export interface RegionIter_Static {
    name: string
}
export declare var RegionIter: RegionIter_Static
export interface SearchContextPrivate {
}
export interface SearchContextPrivate_Static {
    name: string
}
export declare var SearchContextPrivate: SearchContextPrivate_Static
export interface SearchSettingsPrivate {
}
export interface SearchSettingsPrivate_Static {
    name: string
}
export declare var SearchSettingsPrivate: SearchSettingsPrivate_Static
export interface SpaceDrawerPrivate {
}
export interface SpaceDrawerPrivate_Static {
    name: string
}
export declare var SpaceDrawerPrivate: SpaceDrawerPrivate_Static
export interface StyleSchemeManagerPrivate {
}
export interface StyleSchemeManagerPrivate_Static {
    name: string
}
export declare var StyleSchemeManagerPrivate: StyleSchemeManagerPrivate_Static
export interface StyleSchemePrivate {
}
export interface StyleSchemePrivate_Static {
    name: string
}
export declare var StyleSchemePrivate: StyleSchemePrivate_Static
export interface ViewPrivate {
}
export interface ViewPrivate_Static {
    name: string
}
export declare var ViewPrivate: ViewPrivate_Static