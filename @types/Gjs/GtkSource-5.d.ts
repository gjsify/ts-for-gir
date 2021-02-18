/**
 * GtkSource-5
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-4.0';
import type * as Gsk from './Gsk-4.0';
import type * as Graphene from './Graphene-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gdk from './Gdk-4.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

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
export enum CompletionActivation {
    NONE,
    INTERACTIVE,
    USER_REQUESTED,
}
export enum CompletionColumn {
    ICON,
    BEFORE,
    TYPED_TEXT,
    AFTER,
    COMMENT,
    DETAILS,
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
export enum FileSaverFlags {
    NONE,
    IGNORE_INVALID_CHARS,
    IGNORE_MODIFICATION_TIME,
    CREATE_BACKUP,
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
export function encoding_get_all(): Encoding[]
export function encoding_get_current(): Encoding
export function encoding_get_default_candidates(): Encoding[]
export function encoding_get_from_charset(charset: string): Encoding | null
export function encoding_get_utf8(): Encoding
export function file_loader_error_quark(): GLib.Quark
export function file_saver_error_quark(): GLib.Quark
export function finalize(): void
export function init(): void
export function utils_escape_search_text(text: string): string
export function utils_unescape_search_text(text: string): string
export class CompletionProposal {
    static name: string
}
export class CompletionProvider {
    /* Methods of GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    get_priority(context: CompletionContext): number
    get_title(): string
    is_trigger(iter: Gtk.TextIter, ch: number): boolean
    key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populate_finish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GtkSource.CompletionProvider */
    vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void
    vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    vfunc_get_priority(context: CompletionContext): number
    vfunc_get_title(): string
    vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean
    vfunc_key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    vfunc_populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel
    vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void
    static name: string
}
export class StyleSchemeChooser {
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme: StyleScheme
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooser */
    vfunc_get_style_scheme(): StyleScheme
    vfunc_set_style_scheme(scheme: StyleScheme): void
    static name: string
}
export interface Buffer_ConstructProps extends Gtk.TextBuffer_ConstructProps {
    highlight_matching_brackets?: boolean
    highlight_syntax?: boolean
    implicit_trailing_newline?: boolean
    language?: Language
    style_scheme?: StyleScheme
}
export class Buffer {
    /* Properties of GtkSource.Buffer */
    highlight_matching_brackets: boolean
    highlight_syntax: boolean
    implicit_trailing_newline: boolean
    language: Language
    style_scheme: StyleScheme
    /* Properties of Gtk.TextBuffer */
    readonly can_redo: boolean
    readonly can_undo: boolean
    readonly cursor_position: number
    enable_undo: boolean
    readonly has_selection: boolean
    text: string
    /* Fields of GtkSource.Buffer */
    parent_instance: Gtk.TextBuffer
    /* Fields of Gtk.TextBuffer */
    priv: Gtk.TextBufferPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Buffer */
    backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark
    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_context_classes_at_iter(iter: Gtk.TextIter): string[]
    get_highlight_matching_brackets(): boolean
    get_highlight_syntax(): boolean
    get_implicit_trailing_newline(): boolean
    get_language(): Language | null
    get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[]
    get_source_marks_at_line(line: number, category?: string | null): Mark[]
    get_style_scheme(): StyleScheme | null
    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean
    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    set_highlight_matching_brackets(highlight: boolean): void
    set_highlight_syntax(highlight: boolean): void
    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void
    set_language(language?: Language | null): void
    set_style_scheme(scheme?: StyleScheme | null): void
    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    /* Methods of Gtk.TextBuffer */
    add_mark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    add_selection_clipboard(clipboard: Gdk.Clipboard): void
    apply_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    apply_tag_by_name(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    backspace(iter: Gtk.TextIter, interactive: boolean, default_editable: boolean): boolean
    begin_irreversible_action(): void
    begin_user_action(): void
    copy_clipboard(clipboard: Gdk.Clipboard): void
    create_child_anchor(iter: Gtk.TextIter): Gtk.TextChildAnchor
    create_mark(mark_name: string | null, where: Gtk.TextIter, left_gravity: boolean): Gtk.TextMark
    cut_clipboard(clipboard: Gdk.Clipboard, default_editable: boolean): void
    delete(start: Gtk.TextIter, end: Gtk.TextIter): void
    delete_interactive(start_iter: Gtk.TextIter, end_iter: Gtk.TextIter, default_editable: boolean): boolean
    delete_mark(mark: Gtk.TextMark): void
    delete_mark_by_name(name: string): void
    delete_selection(interactive: boolean, default_editable: boolean): boolean
    end_irreversible_action(): void
    end_user_action(): void
    get_bounds(): [ /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_can_redo(): boolean
    get_can_undo(): boolean
    get_char_count(): number
    get_enable_undo(): boolean
    get_end_iter(): /* iter */ Gtk.TextIter
    get_has_selection(): boolean
    get_insert(): Gtk.TextMark
    get_iter_at_child_anchor(anchor: Gtk.TextChildAnchor): /* iter */ Gtk.TextIter
    get_iter_at_line(line_number: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_iter_at_line_index(line_number: number, byte_index: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_iter_at_line_offset(line_number: number, char_offset: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_iter_at_mark(mark: Gtk.TextMark): /* iter */ Gtk.TextIter
    get_iter_at_offset(char_offset: number): /* iter */ Gtk.TextIter
    get_line_count(): number
    get_mark(name: string): Gtk.TextMark | null
    get_max_undo_levels(): number
    get_modified(): boolean
    get_selection_bound(): Gtk.TextMark
    get_selection_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_selection_content(): Gdk.ContentProvider
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
    insert_paintable(iter: Gtk.TextIter, paintable: Gdk.Paintable): void
    insert_range(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    insert_range_interactive(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter, default_editable: boolean): boolean
    move_mark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    move_mark_by_name(name: string, where: Gtk.TextIter): void
    paste_clipboard(clipboard: Gdk.Clipboard, override_location: Gtk.TextIter | null, default_editable: boolean): void
    place_cursor(where: Gtk.TextIter): void
    redo(): void
    remove_all_tags(start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_selection_clipboard(clipboard: Gdk.Clipboard): void
    remove_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_tag_by_name(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    select_range(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    set_enable_undo(enable_undo: boolean): void
    set_max_undo_levels(max_undo_levels: number): void
    set_modified(setting: boolean): void
    set_text(text: string, len: number): void
    undo(): void
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
    /* Virtual methods of GtkSource.Buffer */
    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void
    /* Virtual methods of Gtk.TextBuffer */
    vfunc_apply_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_begin_user_action(): void
    vfunc_changed(): void
    vfunc_delete_range(start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_end_user_action(): void
    vfunc_insert_child_anchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    vfunc_insert_paintable(iter: Gtk.TextIter, paintable: Gdk.Paintable): void
    vfunc_insert_text(pos: Gtk.TextIter, new_text: string, new_text_length: number): void
    vfunc_mark_deleted(mark: Gtk.TextMark): void
    vfunc_mark_set(location: Gtk.TextIter, mark: Gtk.TextMark): void
    vfunc_modified_changed(): void
    vfunc_paste_done(clipboard: Gdk.Clipboard): void
    vfunc_redo(): void
    vfunc_remove_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    vfunc_undo(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: (($obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    connect_after(sigName: "bracket-matched", callback: (($obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType): void
    connect(sigName: "cursor-moved", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Buffer) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "highlight-updated", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "highlight-updated", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "source-mark-updated", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "source-mark-updated", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark): void
    /* Signals of Gtk.TextBuffer */
    connect(sigName: "apply-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "apply-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "apply-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "begin-user-action", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "begin-user-action", callback: (($obj: Buffer) => void)): number
    emit(sigName: "begin-user-action"): void
    connect(sigName: "changed", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Buffer) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "delete-range", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "delete-range", callback: (($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "delete-range", start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "end-user-action", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "end-user-action", callback: (($obj: Buffer) => void)): number
    emit(sigName: "end-user-action"): void
    connect(sigName: "insert-child-anchor", callback: (($obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    connect_after(sigName: "insert-child-anchor", callback: (($obj: Buffer, location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    emit(sigName: "insert-child-anchor", location: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    connect(sigName: "insert-paintable", callback: (($obj: Buffer, location: Gtk.TextIter, paintable: Gdk.Paintable) => void)): number
    connect_after(sigName: "insert-paintable", callback: (($obj: Buffer, location: Gtk.TextIter, paintable: Gdk.Paintable) => void)): number
    emit(sigName: "insert-paintable", location: Gtk.TextIter, paintable: Gdk.Paintable): void
    connect(sigName: "insert-text", callback: (($obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): number
    connect_after(sigName: "insert-text", callback: (($obj: Buffer, location: Gtk.TextIter, text: string, len: number) => void)): number
    emit(sigName: "insert-text", location: Gtk.TextIter, text: string, len: number): void
    connect(sigName: "mark-deleted", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "mark-deleted", callback: (($obj: Buffer, mark: Gtk.TextMark) => void)): number
    emit(sigName: "mark-deleted", mark: Gtk.TextMark): void
    connect(sigName: "mark-set", callback: (($obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    connect_after(sigName: "mark-set", callback: (($obj: Buffer, location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    emit(sigName: "mark-set", location: Gtk.TextIter, mark: Gtk.TextMark): void
    connect(sigName: "modified-changed", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "modified-changed", callback: (($obj: Buffer) => void)): number
    emit(sigName: "modified-changed"): void
    connect(sigName: "paste-done", callback: (($obj: Buffer, clipboard: Gdk.Clipboard) => void)): number
    connect_after(sigName: "paste-done", callback: (($obj: Buffer, clipboard: Gdk.Clipboard) => void)): number
    emit(sigName: "paste-done", clipboard: Gdk.Clipboard): void
    connect(sigName: "redo", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "redo", callback: (($obj: Buffer) => void)): number
    emit(sigName: "redo"): void
    connect(sigName: "remove-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    connect_after(sigName: "remove-tag", callback: (($obj: Buffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    emit(sigName: "remove-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "undo", callback: (($obj: Buffer) => void)): number
    connect_after(sigName: "undo", callback: (($obj: Buffer) => void)): number
    emit(sigName: "undo"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(table?: Gtk.TextTagTable | null): Buffer
    static new_with_language(language: Language): Buffer
    static $gtype: GObject.Type
}
export interface Completion_ConstructProps extends GObject.Object_ConstructProps {
    page_size?: number
    remember_info_visibility?: boolean
    select_on_show?: boolean
    show_icons?: boolean
    view?: View
}
export class Completion {
    /* Properties of GtkSource.Completion */
    readonly buffer: Gtk.TextView
    page_size: number
    remember_info_visibility: boolean
    select_on_show: boolean
    show_icons: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Completion */
    add_provider(provider: CompletionProvider): void
    block_interactive(): void
    get_buffer(): Buffer
    get_page_size(): number
    get_view(): View
    hide(): void
    remove_provider(provider: CompletionProvider): void
    set_page_size(page_size: number): void
    show(): void
    unblock_interactive(): void
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
    /* Signals of GtkSource.Completion */
    connect(sigName: "hide", callback: (($obj: Completion) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Completion) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "provider-added", callback: (($obj: Completion, provider: CompletionProvider) => void)): number
    connect_after(sigName: "provider-added", callback: (($obj: Completion, provider: CompletionProvider) => void)): number
    emit(sigName: "provider-added", provider: CompletionProvider): void
    connect(sigName: "provider-removed", callback: (($obj: Completion, provider: CompletionProvider) => void)): number
    connect_after(sigName: "provider-removed", callback: (($obj: Completion, provider: CompletionProvider) => void)): number
    emit(sigName: "provider-removed", provider: CompletionProvider): void
    connect(sigName: "show", callback: (($obj: Completion) => void)): number
    connect_after(sigName: "show", callback: (($obj: Completion) => void)): number
    emit(sigName: "show"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remember-info-visibility", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-info-visibility", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::select-on-show", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-on-show", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-icons", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-icons", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Completion_ConstructProps)
    _init (config?: Completion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fuzzy_highlight(haystack: string, casefold_query: string): Pango.AttrList | null
    static fuzzy_match(haystack: string | null, casefold_needle: string): [ /* returnType */ boolean, /* priority */ number | null ]
    static $gtype: GObject.Type
}
export interface CompletionCell_ConstructProps extends Gtk.Widget_ConstructProps {
    column?: CompletionColumn
    markup?: string
    paintable?: Gdk.Paintable
    text?: string
    widget?: Gtk.Widget
    accessible_role?: Gtk.AccessibleRole
}
export class CompletionCell {
    /* Properties of GtkSource.CompletionCell */
    markup: string
    paintable: Gdk.Paintable
    text: string
    widget: Gtk.Widget
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionCell */
    get_column(): CompletionColumn
    get_widget(): Gtk.Widget | null
    set_gicon(gicon: Gio.Icon): void
    set_icon_name(icon_name: string): void
    set_markup(markup: string): void
    set_paintable(paintable: Gdk.Paintable): void
    set_text(text: string): void
    set_text_with_attributes(text: string, attrs: Pango.AttrList): void
    set_widget(child: Gtk.Widget): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of GtkSource.CompletionCell */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: CompletionCell, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: CompletionCell, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "hide", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: CompletionCell, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: CompletionCell, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "map", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: CompletionCell, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: CompletionCell, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: CompletionCell, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: CompletionCell, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: CompletionCell, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CompletionCell, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "realize", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "show", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: CompletionCell, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: CompletionCell, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: CompletionCell) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: CompletionCell) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::markup", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paintable", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paintable", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::widget", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: CompletionCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompletionCell_ConstructProps)
    _init (config?: CompletionCell_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CompletionContext_ConstructProps extends GObject.Object_ConstructProps {
    completion?: Completion
}
export class CompletionContext {
    /* Properties of GtkSource.CompletionContext */
    readonly busy: boolean
    readonly empty: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionContext */
    get_activation(): CompletionActivation
    get_bounds(): [ /* returnType */ boolean, /* begin */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    get_buffer(): Buffer | null
    get_busy(): boolean
    get_completion(): Completion | null
    get_empty(): boolean
    get_language(): Language | null
    get_start_iter(iter: Gtk.TextIter): void
    get_view(): View | null
    get_word(): string
    set_proposals_for_provider(provider: CompletionProvider, results?: Gio.ListModel | null): void
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
    /* Methods of Gio.ListModel */
    get_item_type(): GObject.Type
    get_n_items(): number
    get_item(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of GtkSource.CompletionContext */
    vfunc_get_item(position: number): GObject.Object | null
    vfunc_get_item_type(): GObject.Type
    vfunc_get_n_items(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: CompletionContext, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: CompletionContext, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: "notify::busy", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompletionContext_ConstructProps)
    _init (config?: CompletionContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CompletionSnippets_ConstructProps extends GObject.Object_ConstructProps {
    priority?: number
    title?: string
}
export class CompletionSnippets {
    /* Properties of GtkSource.CompletionSnippets */
    priority: number
    title: string
    /* Fields of GtkSource.CompletionSnippets */
    parent_instance: GObject.Object
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
    /* Methods of GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    get_priority(context: CompletionContext): number
    get_title(): string
    is_trigger(iter: Gtk.TextIter, ch: number): boolean
    key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populate_finish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GtkSource.CompletionSnippets */
    vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void
    vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    vfunc_get_priority(context: CompletionContext): number
    vfunc_get_title(): string
    vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean
    vfunc_key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    vfunc_populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel
    vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionSnippets, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionSnippets, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::priority", callback: (($obj: CompletionSnippets, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: CompletionSnippets, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CompletionSnippets, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CompletionSnippets, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompletionSnippets_ConstructProps)
    _init (config?: CompletionSnippets_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompletionSnippets
    static $gtype: GObject.Type
}
export interface CompletionWords_ConstructProps extends GObject.Object_ConstructProps {
    minimum_word_size?: number
    priority?: number
    proposals_batch_size?: number
    scan_batch_size?: number
    title?: string
}
export class CompletionWords {
    /* Properties of GtkSource.CompletionWords */
    minimum_word_size: number
    priority: number
    proposals_batch_size: number
    scan_batch_size: number
    title: string
    /* Fields of GtkSource.CompletionWords */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.CompletionWords */
    register(buffer: Gtk.TextBuffer): void
    unregister(buffer: Gtk.TextBuffer): void
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
    /* Methods of GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    get_priority(context: CompletionContext): number
    get_title(): string
    is_trigger(iter: Gtk.TextIter, ch: number): boolean
    key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populate_finish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GtkSource.CompletionWords */
    vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void
    vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    vfunc_get_priority(context: CompletionContext): number
    vfunc_get_title(): string
    vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean
    vfunc_key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    vfunc_populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel
    vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::minimum-word-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-word-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proposals-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposals-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompletionWords_ConstructProps)
    _init (config?: CompletionWords_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title?: string | null): CompletionWords
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    location?: Gio.File
}
export class File {
    /* Properties of GtkSource.File */
    readonly compression_type: CompressionType
    readonly encoding: Encoding
    location: Gio.File
    readonly newline_type: NewlineType
    readonly read_only: boolean
    /* Fields of GtkSource.File */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    input_stream?: Gio.InputStream
    location?: Gio.File
}
export class FileLoader {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.FileLoader */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_input_stream(): Gio.InputStream | null
    get_location(): Gio.File | null
    get_newline_type(): NewlineType
    load_async(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(result: Gio.AsyncResult): boolean
    set_candidate_encodings(candidate_encodings: Encoding[]): void
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
    connect(sigName: "notify", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileLoader_ConstructProps)
    _init (config?: FileLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, file: File): FileLoader
    static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
    static $gtype: GObject.Type
}
export interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Buffer
    compression_type?: CompressionType
    encoding?: Encoding
    file?: File
    flags?: FileSaverFlags
    location?: Gio.File
    newline_type?: NewlineType
}
export class FileSaver {
    /* Properties of GtkSource.FileSaver */
    compression_type: CompressionType
    encoding: Encoding
    flags: FileSaverFlags
    newline_type: NewlineType
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.FileSaver */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    save_async(io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): boolean
    set_compression_type(compression_type: CompressionType): void
    set_encoding(encoding?: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    set_newline_type(newline_type: NewlineType): void
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
    connect(sigName: "notify", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileSaver_ConstructProps)
    _init (config?: FileSaver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, file: File): FileSaver
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
    static $gtype: GObject.Type
}
export interface Gutter_ConstructProps extends Gtk.Widget_ConstructProps {
    view?: View
    window_type?: Gtk.TextWindowType
    accessible_role?: Gtk.AccessibleRole
}
export class Gutter {
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Gutter */
    get_view(): View
    insert(renderer: GutterRenderer, position: number): boolean
    remove(renderer: GutterRenderer): void
    reorder(renderer: GutterRenderer, position: number): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of GtkSource.Gutter */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Gutter) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Gutter, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Gutter, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Gutter) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Gutter, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Gutter, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "map", callback: (($obj: Gutter) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Gutter, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Gutter, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Gutter, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Gutter, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Gutter, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Gutter, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Gutter) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "show", callback: (($obj: Gutter) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Gutter, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Gutter, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Gutter) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Gutter) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Gutter) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Gutter_ConstructProps)
    _init (config?: Gutter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterLines_ConstructProps extends GObject.Object_ConstructProps {
}
export class GutterLines {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.GutterLines */
    add_class(line: number, name: string): void
    add_qclass(line: number, qname: GLib.Quark): void
    get_buffer(): Gtk.TextBuffer
    get_first(): number
    get_iter_at_line(line: number): /* iter */ Gtk.TextIter
    get_last(): number
    get_line_yrange(line: number, mode: GutterRendererAlignmentMode): [ /* y */ number, /* height */ number ]
    get_view(): Gtk.TextView
    get_yrange(line: number, line_y: number, line_height: number): void
    has_class(line: number, name: string): boolean
    has_qclass(line: number, qname: GLib.Quark): boolean
    is_cursor(line: number): boolean
    is_prelit(line: number): boolean
    is_selected(line: number): boolean
    remove_class(line: number, name: string): void
    remove_qclass(line: number, qname: GLib.Quark): void
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
    connect(sigName: "notify", callback: (($obj: GutterLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GutterLines_ConstructProps)
    _init (config?: GutterLines_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterRenderer_ConstructProps extends Gtk.Widget_ConstructProps {
    alignment_mode?: GutterRendererAlignmentMode
    xalign?: number
    xpad?: number
    yalign?: number
    ypad?: number
    accessible_role?: Gtk.AccessibleRole
}
export class GutterRenderer {
    /* Properties of GtkSource.GutterRenderer */
    alignment_mode: GutterRendererAlignmentMode
    readonly lines: GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of GtkSource.GutterRenderer */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    align_cell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    get_alignment_mode(): GutterRendererAlignmentMode
    get_buffer(): Buffer | null
    get_view(): View
    get_xalign(): number
    get_xpad(): number
    get_yalign(): number
    get_ypad(): number
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    set_alignment_mode(mode: GutterRendererAlignmentMode): void
    set_xalign(xalign: number): void
    set_xpad(xpad: number): void
    set_yalign(yalign: number): void
    set_ypad(ypad: number): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    vfunc_begin(lines: GutterLines): void
    vfunc_change_buffer(old_buffer?: Buffer | null): void
    vfunc_change_view(old_view?: View | null): void
    vfunc_end(): void
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    vfunc_query_data(lines: GutterLines, line: number): void
    vfunc_snapshot_line(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    connect(sigName: "query-activatable", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    connect(sigName: "query-data", callback: (($obj: GutterRenderer, object: GObject.Object, p0: number) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRenderer, object: GObject.Object, p0: number) => void)): number
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: GutterRenderer, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: GutterRenderer, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "hide", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: GutterRenderer, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: GutterRenderer, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "map", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: GutterRenderer, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: GutterRenderer, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: GutterRenderer, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: GutterRenderer, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: GutterRenderer, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRenderer, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "realize", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "show", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: GutterRenderer, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: GutterRenderer, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: GutterRenderer) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: GutterRenderer) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lines", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GutterRenderer_ConstructProps)
    _init (config?: GutterRenderer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GutterRendererPixbuf_ConstructProps extends GutterRenderer_ConstructProps {
    gicon?: Gio.Icon
    icon_name?: string
    paintable?: Gdk.Paintable
    pixbuf?: GdkPixbuf.Pixbuf
    accessible_role?: Gtk.AccessibleRole
}
export class GutterRendererPixbuf {
    /* Properties of GtkSource.GutterRendererPixbuf */
    gicon: Gio.Icon
    icon_name: string
    paintable: Gdk.Paintable
    pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GtkSource.GutterRenderer */
    alignment_mode: GutterRendererAlignmentMode
    readonly lines: GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of GtkSource.GutterRendererPixbuf */
    parent_instance: GutterRenderer
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.GutterRendererPixbuf */
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_paintable(): Gdk.Paintable | null
    get_pixbuf(): GdkPixbuf.Pixbuf
    overlay_paintable(paintable: Gdk.Paintable): void
    set_gicon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_paintable(paintable?: Gdk.Paintable | null): void
    set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    align_cell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    get_alignment_mode(): GutterRendererAlignmentMode
    get_buffer(): Buffer | null
    get_view(): View
    get_xalign(): number
    get_xpad(): number
    get_yalign(): number
    get_ypad(): number
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    set_alignment_mode(mode: GutterRendererAlignmentMode): void
    set_xalign(xalign: number): void
    set_xpad(xpad: number): void
    set_yalign(yalign: number): void
    set_ypad(ypad: number): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    vfunc_begin(lines: GutterLines): void
    vfunc_change_buffer(old_buffer?: Buffer | null): void
    vfunc_change_view(old_view?: View | null): void
    vfunc_end(): void
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    vfunc_query_data(lines: GutterLines, line: number): void
    vfunc_snapshot_line(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    connect(sigName: "query-activatable", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRendererPixbuf, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    connect(sigName: "query-data", callback: (($obj: GutterRendererPixbuf, object: GObject.Object, p0: number) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRendererPixbuf, object: GObject.Object, p0: number) => void)): number
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: GutterRendererPixbuf, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: GutterRendererPixbuf, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "hide", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "map", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: GutterRendererPixbuf, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: GutterRendererPixbuf, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: GutterRendererPixbuf, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: GutterRendererPixbuf, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRendererPixbuf, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "realize", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "show", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: GutterRendererPixbuf, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: GutterRendererPixbuf, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: GutterRendererPixbuf) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: GutterRendererPixbuf) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gicon", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paintable", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paintable", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixbuf", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lines", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    accessible_role?: Gtk.AccessibleRole
}
export class GutterRendererText {
    /* Properties of GtkSource.GutterRendererText */
    markup: string
    text: string
    /* Properties of GtkSource.GutterRenderer */
    alignment_mode: GutterRendererAlignmentMode
    readonly lines: GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of GtkSource.GutterRendererText */
    parent_instance: GutterRenderer
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.GutterRendererText */
    measure(text: string): [ /* width */ number | null, /* height */ number | null ]
    measure_markup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    set_markup(markup: string, length: number): void
    set_text(text: string, length: number): void
    /* Methods of GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    align_cell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    get_alignment_mode(): GutterRendererAlignmentMode
    get_buffer(): Buffer | null
    get_view(): View
    get_xalign(): number
    get_xpad(): number
    get_yalign(): number
    get_ypad(): number
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    set_alignment_mode(mode: GutterRendererAlignmentMode): void
    set_xalign(xalign: number): void
    set_xpad(xpad: number): void
    set_yalign(yalign: number): void
    set_ypad(ypad: number): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of GtkSource.GutterRenderer */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    vfunc_begin(lines: GutterLines): void
    vfunc_change_buffer(old_buffer?: Buffer | null): void
    vfunc_change_view(old_view?: View | null): void
    vfunc_end(): void
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    vfunc_query_data(lines: GutterLines, line: number): void
    vfunc_snapshot_line(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    connect_after(sigName: "activate", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void
    connect(sigName: "query-activatable", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "query-activatable", callback: (($obj: GutterRendererText, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    connect(sigName: "query-data", callback: (($obj: GutterRendererText, object: GObject.Object, p0: number) => void)): number
    connect_after(sigName: "query-data", callback: (($obj: GutterRendererText, object: GObject.Object, p0: number) => void)): number
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: GutterRendererText, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: GutterRendererText, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "hide", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "map", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: GutterRendererText, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: GutterRendererText, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: GutterRendererText, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: GutterRendererText, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: GutterRendererText, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "realize", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "show", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: GutterRendererText, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: GutterRendererText, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: GutterRendererText) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: GutterRendererText) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lines", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hidden", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::section", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::section", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Language_ConstructProps)
    _init (config?: Language_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LanguageManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?: string[]
}
export class LanguageManager {
    /* Properties of GtkSource.LanguageManager */
    readonly language_ids: string[]
    search_path: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.LanguageManager */
    get_language(id: string): Language | null
    get_language_ids(): string[] | null
    get_search_path(): string[]
    guess_language(filename?: string | null, content_type?: string | null): Language | null
    set_search_path(dirs?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::language-ids", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-ids", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-path", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LanguageManager_ConstructProps)
    _init (config?: LanguageManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LanguageManager
    static get_default(): LanguageManager
    static $gtype: GObject.Type
}
export interface Map_ConstructProps extends View_ConstructProps {
    font_desc?: Pango.FontDescription
    view?: View
    accessible_role?: Gtk.AccessibleRole
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class Map {
    /* Properties of GtkSource.Map */
    font_desc: Pango.FontDescription
    view: View
    /* Properties of GtkSource.View */
    auto_indent: boolean
    background_pattern: BackgroundPatternType
    readonly completion: Completion
    enable_snippets: boolean
    highlight_current_line: boolean
    indent_on_tab: boolean
    indent_width: number
    insert_spaces_instead_of_tabs: boolean
    right_margin_position: number
    show_line_marks: boolean
    show_line_numbers: boolean
    show_right_margin: boolean
    smart_backspace: boolean
    smart_home_end: SmartHomeEndType
    readonly space_drawer: SpaceDrawer
    tab_width: number
    /* Properties of Gtk.TextView */
    accepts_tab: boolean
    bottom_margin: number
    buffer: Gtk.TextBuffer
    cursor_visible: boolean
    editable: boolean
    extra_menu: Gio.MenuModel
    im_module: string
    indent: number
    input_hints: Gtk.InputHints
    input_purpose: Gtk.InputPurpose
    justification: Gtk.Justification
    left_margin: number
    monospace: boolean
    overwrite: boolean
    pixels_above_lines: number
    pixels_below_lines: number
    pixels_inside_wrap: number
    right_margin: number
    tabs: Pango.TabArray
    top_margin: number
    wrap_mode: Gtk.WrapMode
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of GtkSource.Map */
    parent_instance: View
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Map */
    get_view(): View | null
    set_view(view: View): void
    /* Methods of GtkSource.View */
    get_auto_indent(): boolean
    get_background_pattern(): BackgroundPatternType
    get_completion(): Completion
    get_enable_snippets(): boolean
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
    push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    set_auto_indent(enable: boolean): void
    set_background_pattern(background_pattern: BackgroundPatternType): void
    set_enable_snippets(enable_snippets: boolean): void
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
    add_overlay(child: Gtk.Widget, xpos: number, ypos: number): void
    backward_display_line(iter: Gtk.TextIter): boolean
    backward_display_line_start(iter: Gtk.TextIter): boolean
    buffer_to_window_coords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forward_display_line(iter: Gtk.TextIter): boolean
    forward_display_line_end(iter: Gtk.TextIter): boolean
    get_accepts_tab(): boolean
    get_bottom_margin(): number
    get_buffer(): Gtk.TextBuffer
    get_cursor_locations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    get_cursor_visible(): boolean
    get_editable(): boolean
    get_extra_menu(): Gio.MenuModel
    get_gutter(win: Gtk.TextWindowType): Gtk.Widget | null
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
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.Event): boolean
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_overlay(child: Gtk.Widget, xpos: number, ypos: number): void
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
    remove(child: Gtk.Widget): void
    reset_cursor_blink(): void
    reset_im_context(): void
    scroll_mark_onscreen(mark: Gtk.TextMark): void
    scroll_to_iter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scroll_to_mark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    set_accepts_tab(accepts_tab: boolean): void
    set_bottom_margin(bottom_margin: number): void
    set_buffer(buffer?: Gtk.TextBuffer | null): void
    set_cursor_visible(setting: boolean): void
    set_editable(setting: boolean): void
    set_extra_menu(model?: Gio.MenuModel | null): void
    set_gutter(win: Gtk.TextWindowType, widget?: Gtk.Widget | null): void
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
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
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
    vfunc_line_mark_activated(iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void
    vfunc_move_lines(down: boolean): void
    vfunc_move_words(step: number): void
    vfunc_push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    vfunc_show_completion(): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.TextView */
    vfunc_backspace(): void
    vfunc_copy_clipboard(): void
    vfunc_cut_clipboard(): void
    vfunc_delete_from_cursor(type: Gtk.DeleteType, count: number): void
    vfunc_extend_selection(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor(str: string): void
    vfunc_insert_emoji(): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard(): void
    vfunc_set_anchor(): void
    vfunc_snapshot_layer(layer: Gtk.TextViewLayer, snapshot: Gtk.Snapshot): void
    vfunc_toggle_overwrite(): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: (($obj: Map, case_type: ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: (($obj: Map, case_type: ChangeCaseType) => void)): number
    emit(sigName: "change-case", case_type: ChangeCaseType): void
    connect(sigName: "change-number", callback: (($obj: Map, count: number) => void)): number
    connect_after(sigName: "change-number", callback: (($obj: Map, count: number) => void)): number
    emit(sigName: "change-number", count: number): void
    connect(sigName: "join-lines", callback: (($obj: Map) => void)): number
    connect_after(sigName: "join-lines", callback: (($obj: Map) => void)): number
    emit(sigName: "join-lines"): void
    connect(sigName: "line-mark-activated", callback: (($obj: Map, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    connect_after(sigName: "line-mark-activated", callback: (($obj: Map, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void
    connect(sigName: "move-lines", callback: (($obj: Map, down: boolean) => void)): number
    connect_after(sigName: "move-lines", callback: (($obj: Map, down: boolean) => void)): number
    emit(sigName: "move-lines", down: boolean): void
    connect(sigName: "move-to-matching-bracket", callback: (($obj: Map, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-to-matching-bracket", callback: (($obj: Map, extend_selection: boolean) => void)): number
    emit(sigName: "move-to-matching-bracket", extend_selection: boolean): void
    connect(sigName: "move-words", callback: (($obj: Map, count: number) => void)): number
    connect_after(sigName: "move-words", callback: (($obj: Map, count: number) => void)): number
    emit(sigName: "move-words", count: number): void
    connect(sigName: "push-snippet", callback: (($obj: Map, snippet: Snippet, location: Gtk.TextIter) => void)): number
    connect_after(sigName: "push-snippet", callback: (($obj: Map, snippet: Snippet, location: Gtk.TextIter) => void)): number
    emit(sigName: "push-snippet", snippet: Snippet, location: Gtk.TextIter): void
    connect(sigName: "show-completion", callback: (($obj: Map) => void)): number
    connect_after(sigName: "show-completion", callback: (($obj: Map) => void)): number
    emit(sigName: "show-completion"): void
    connect(sigName: "smart-home-end", callback: (($obj: Map, iter: Gtk.TextIter, count: number) => void)): number
    connect_after(sigName: "smart-home-end", callback: (($obj: Map, iter: Gtk.TextIter, count: number) => void)): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: (($obj: Map) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: Map) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "copy-clipboard", callback: (($obj: Map) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: Map) => void)): number
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "cut-clipboard", callback: (($obj: Map) => void)): number
    connect_after(sigName: "cut-clipboard", callback: (($obj: Map) => void)): number
    emit(sigName: "cut-clipboard"): void
    connect(sigName: "delete-from-cursor", callback: (($obj: Map, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: (($obj: Map, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    connect(sigName: "extend-selection", callback: (($obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: (($obj: Map, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "insert-at-cursor", callback: (($obj: Map, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: (($obj: Map, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    connect(sigName: "insert-emoji", callback: (($obj: Map) => void)): number
    connect_after(sigName: "insert-emoji", callback: (($obj: Map) => void)): number
    emit(sigName: "insert-emoji"): void
    connect(sigName: "move-cursor", callback: (($obj: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: Map, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    connect(sigName: "move-viewport", callback: (($obj: Map, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: (($obj: Map, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    connect(sigName: "paste-clipboard", callback: (($obj: Map) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: Map) => void)): number
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "preedit-changed", callback: (($obj: Map, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: (($obj: Map, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    connect(sigName: "select-all", callback: (($obj: Map, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: Map, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    connect(sigName: "set-anchor", callback: (($obj: Map) => void)): number
    connect_after(sigName: "set-anchor", callback: (($obj: Map) => void)): number
    emit(sigName: "set-anchor"): void
    connect(sigName: "toggle-cursor-visible", callback: (($obj: Map) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: (($obj: Map) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    connect(sigName: "toggle-overwrite", callback: (($obj: Map) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: (($obj: Map) => void)): number
    emit(sigName: "toggle-overwrite"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Map) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Map) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Map, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Map, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Map) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Map) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Map, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Map, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Map) => void)): number
    connect_after(sigName: "map", callback: (($obj: Map) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Map, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Map, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Map, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Map, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Map, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Map) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Map) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Map) => void)): number
    connect_after(sigName: "show", callback: (($obj: Map) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Map, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Map, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Map) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Map) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Map) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Map) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-desc", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-pattern", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completion", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-snippets", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-snippets", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::highlight-current-line", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-on-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin-position", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-line-marks", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-line-numbers", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-backspace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-home-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::space-drawer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tab-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accepts-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bottom-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-menu", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-module", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::justification", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monospace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overwrite", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::top-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Map
    static new_with_buffer(buffer: Buffer): Map
    static new_with_buffer(buffer: Gtk.TextBuffer): Map
    static $gtype: GObject.Type
}
export interface Mark_ConstructProps extends Gtk.TextMark_ConstructProps {
    category?: string
}
export class Mark {
    /* Fields of GtkSource.Mark */
    parent_instance: Gtk.TextMark
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Mark */
    get_category(): string
    next(category?: string | null): Mark | null
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
    connect(sigName: "notify", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mark_ConstructProps)
    _init (config?: Mark_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, category: string): Mark
    static new(name: string | null, left_gravity: boolean): Mark
    static $gtype: GObject.Type
}
export interface MarkAttributes_ConstructProps extends GObject.Object_ConstructProps {
    background?: Gdk.RGBA
    gicon?: Gio.Icon
    icon_name?: string
    pixbuf?: GdkPixbuf.Pixbuf
}
export class MarkAttributes {
    /* Properties of GtkSource.MarkAttributes */
    background: Gdk.RGBA
    gicon: Gio.Icon
    icon_name: string
    pixbuf: GdkPixbuf.Pixbuf
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.MarkAttributes */
    get_background(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_tooltip_markup(mark: Mark): string
    get_tooltip_text(mark: Mark): string
    render_icon(widget: Gtk.Widget, size: number): Gdk.Paintable
    set_background(background: Gdk.RGBA): void
    set_gicon(gicon: Gio.Icon): void
    set_icon_name(icon_name: string): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
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
    /* Signals of GtkSource.MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    connect_after(sigName: "query-tooltip-markup", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    emit(sigName: "query-tooltip-markup", mark: Mark): void
    connect(sigName: "query-tooltip-text", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    connect_after(sigName: "query-tooltip-text", callback: (($obj: MarkAttributes, mark: Mark) => string)): number
    emit(sigName: "query-tooltip-text", mark: Mark): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::background", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gicon", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixbuf", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MarkAttributes_ConstructProps)
    _init (config?: MarkAttributes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MarkAttributes
    static $gtype: GObject.Type
}
export interface PrintCompositor_ConstructProps extends GObject.Object_ConstructProps {
    body_font_name?: string
    buffer?: Buffer
    footer_font_name?: string
    header_font_name?: string
    highlight_syntax?: boolean
    line_numbers_font_name?: string
    print_footer?: boolean
    print_header?: boolean
    print_line_numbers?: number
    tab_width?: number
    wrap_mode?: Gtk.WrapMode
}
export class PrintCompositor {
    /* Properties of GtkSource.PrintCompositor */
    body_font_name: string
    footer_font_name: string
    header_font_name: string
    highlight_syntax: boolean
    line_numbers_font_name: string
    readonly n_pages: number
    print_footer: boolean
    print_header: boolean
    print_line_numbers: number
    tab_width: number
    wrap_mode: Gtk.WrapMode
    /* Fields of GtkSource.PrintCompositor */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::body-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::footer-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::footer-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::header-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::highlight-syntax", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-numbers-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-numbers-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-pages", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-footer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-footer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-header", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-header", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-line-numbers", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-line-numbers", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tab-width", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintCompositor_ConstructProps)
    _init (config?: PrintCompositor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer): PrintCompositor
    static new_from_view(view: View): PrintCompositor
    static $gtype: GObject.Type
}
export interface Region_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Gtk.TextBuffer
}
export class Region {
    /* Fields of GtkSource.Region */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    match_style?: Style
    settings?: SearchSettings
}
export class SearchContext {
    /* Properties of GtkSource.SearchContext */
    highlight: boolean
    match_style: Style
    readonly occurrences_count: number
    readonly regex_error: GLib.Error
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.SearchContext */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    backward_async(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    backward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    forward_async(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null, /* has_wrapped_around */ boolean | null ]
    get_buffer(): Buffer
    get_highlight(): boolean
    get_match_style(): Style
    get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number
    get_occurrences_count(): number
    get_regex_error(): GLib.Error | null
    get_settings(): SearchSettings
    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    replace_all(replace: string, replace_length: number): number
    set_highlight(highlight: boolean): void
    set_match_style(match_style?: Style | null): void
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
    connect(sigName: "notify", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::highlight", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::match-style", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-style", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::occurrences-count", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::occurrences-count", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::regex-error", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-error", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SearchContext_ConstructProps)
    _init (config?: SearchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, settings?: SearchSettings | null): SearchContext
    static $gtype: GObject.Type
}
export interface SearchSettings_ConstructProps extends GObject.Object_ConstructProps {
    at_word_boundaries?: boolean
    case_sensitive?: boolean
    regex_enabled?: boolean
    search_text?: string
    wrap_around?: boolean
}
export class SearchSettings {
    /* Properties of GtkSource.SearchSettings */
    at_word_boundaries: boolean
    case_sensitive: boolean
    regex_enabled: boolean
    search_text: string
    wrap_around: boolean
    /* Fields of GtkSource.SearchSettings */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::at-word-boundaries", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::at-word-boundaries", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::case-sensitive", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::regex-enabled", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-enabled", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-text", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-around", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-around", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SearchSettings_ConstructProps)
    _init (config?: SearchSettings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SearchSettings
    static $gtype: GObject.Type
}
export interface Snippet_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    language_id?: string
    name?: string
    trigger?: string
}
export class Snippet {
    /* Properties of GtkSource.Snippet */
    readonly buffer: Gtk.TextBuffer
    description: string
    readonly focus_position: number
    language_id: string
    name: string
    trigger: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Snippet */
    add_chunk(chunk: SnippetChunk): void
    copy(): Snippet
    get_context(): SnippetContext | null
    get_description(): string
    get_focus_position(): number
    get_language_id(): string
    get_n_chunks(): number
    get_name(): string
    get_nth_chunk(nth: number): SnippetChunk
    get_trigger(): string | null
    set_description(description: string): void
    set_language_id(language_id: string): void
    set_name(name: string): void
    set_trigger(trigger: string): void
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
    connect(sigName: "notify", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-position", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-position", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language-id", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-id", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::trigger", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trigger", callback: (($obj: Snippet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Snippet_ConstructProps)
    _init (config?: Snippet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(trigger?: string | null, language_id?: string | null): Snippet
    static $gtype: GObject.Type
}
export interface SnippetChunk_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    context?: SnippetContext
    focus_position?: number
    spec?: string
    text?: string
    text_set?: boolean
    tooltip_text?: string
}
export class SnippetChunk {
    /* Properties of GtkSource.SnippetChunk */
    context: SnippetContext
    focus_position: number
    spec: string
    text: string
    text_set: boolean
    tooltip_text: string
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.SnippetChunk */
    copy(): SnippetChunk
    get_context(): SnippetContext
    get_focus_position(): number
    get_spec(): string | null
    get_text(): string
    get_text_set(): boolean
    get_tooltip_text(): string
    set_context(context: SnippetContext): void
    set_focus_position(focus_position: number): void
    set_spec(spec: string): void
    set_text(text: string): void
    set_text_set(text_set: boolean): void
    set_tooltip_text(tooltip_text: string): void
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
    connect(sigName: "notify", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-position", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-position", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spec", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spec", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-set", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-set", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SnippetChunk, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SnippetChunk_ConstructProps)
    _init (config?: SnippetChunk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SnippetChunk
    static $gtype: GObject.Type
}
export interface SnippetContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class SnippetContext {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.SnippetContext */
    clear_variables(): void
    expand(input: string): string
    get_variable(key: string): string | null
    set_constant(key: string, value: string): void
    set_line_prefix(line_prefix: string): void
    set_tab_width(tab_width: number): void
    set_use_spaces(use_spaces: boolean): void
    set_variable(key: string, value: string): void
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
    /* Signals of GtkSource.SnippetContext */
    connect(sigName: "changed", callback: (($obj: SnippetContext) => void)): number
    connect_after(sigName: "changed", callback: (($obj: SnippetContext) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SnippetContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SnippetContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SnippetContext_ConstructProps)
    _init (config?: SnippetContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SnippetContext
    static $gtype: GObject.Type
}
export interface SnippetManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?: string[]
}
export class SnippetManager {
    /* Properties of GtkSource.SnippetManager */
    search_path: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.SnippetManager */
    get_search_path(): string[]
    get_snippet(group: string | null, language_id: string | null, trigger: string): Snippet | null
    list_groups(): string[]
    list_matching(group?: string | null, language_id?: string | null, trigger_prefix?: string | null): Gio.ListModel
    set_search_path(dirs?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: SnippetManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SnippetManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-path", callback: (($obj: SnippetManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: SnippetManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SnippetManager_ConstructProps)
    _init (config?: SnippetManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): SnippetManager
    static $gtype: GObject.Type
}
export interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    enable_matrix?: boolean
    matrix?: GLib.Variant
}
export class SpaceDrawer {
    /* Properties of GtkSource.SpaceDrawer */
    enable_matrix: boolean
    matrix: GLib.Variant
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.SpaceDrawer */
    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    get_enable_matrix(): boolean
    get_matrix(): GLib.Variant
    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags
    set_enable_matrix(enable_matrix: boolean): void
    set_matrix(matrix?: GLib.Variant | null): void
    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void
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
    connect(sigName: "notify", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SpaceDrawer_ConstructProps)
    _init (config?: SpaceDrawer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SpaceDrawer
    static $gtype: GObject.Type
}
export interface Style_ConstructProps extends GObject.Object_ConstructProps {
    background?: string
    background_set?: boolean
    bold?: boolean
    bold_set?: boolean
    foreground?: string
    foreground_set?: boolean
    italic?: boolean
    italic_set?: boolean
    line_background?: string
    line_background_set?: boolean
    pango_underline?: Pango.Underline
    scale?: string
    scale_set?: boolean
    strikethrough?: boolean
    strikethrough_set?: boolean
    underline_color?: string
    underline_color_set?: boolean
    underline_set?: boolean
}
export class Style {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.Style */
    apply(tag: Gtk.TextTag): void
    copy(): Style
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
    connect(sigName: "notify", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.StyleScheme */
    get_authors(): string[] | null
    get_description(): string | null
    get_filename(): string | null
    get_id(): string
    get_name(): string
    get_style(style_id: string): Style | null
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
    connect(sigName: "notify", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StyleScheme_ConstructProps)
    _init (config?: StyleScheme_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StyleSchemeChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
    accessible_role?: Gtk.AccessibleRole
    action_name?: string
    action_target?: GLib.Variant
    style_scheme?: StyleScheme
}
export class StyleSchemeChooserButton {
    /* Properties of Gtk.Button */
    child: Gtk.Widget
    has_frame: boolean
    icon_name: string
    label: string
    use_underline: boolean
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Properties of Gtk.Actionable */
    action_name: string
    action_target: GLib.Variant
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme: StyleScheme
    /* Fields of GtkSource.StyleSchemeChooserButton */
    parent_instance: Gtk.Button
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk.Button */
    get_child(): Gtk.Widget | null
    get_has_frame(): boolean
    get_icon_name(): string | null
    get_label(): string | null
    get_use_underline(): boolean
    set_child(child?: Gtk.Widget | null): void
    set_has_frame(has_frame: boolean): void
    set_icon_name(icon_name: string): void
    set_label(label: string): void
    set_use_underline(use_underline: boolean): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Actionable */
    get_action_name(): string | null
    get_action_target_value(): GLib.Variant | null
    set_action_name(action_name?: string | null): void
    set_action_target_value(target_value?: GLib.Variant | null): void
    set_detailed_action_name(detailed_action_name: string): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooserButton */
    vfunc_get_action_name(): string | null
    vfunc_get_action_target_value(): GLib.Variant | null
    vfunc_set_action_name(action_name?: string | null): void
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_style_scheme(): StyleScheme
    vfunc_set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Button */
    vfunc_activate(): void
    vfunc_clicked(): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Button */
    connect(sigName: "activate", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "activate", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "clicked", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "clicked"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserButton, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "hide", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "map", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserButton, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: StyleSchemeChooserButton, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "realize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "show", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserButton, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: StyleSchemeChooserButton) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-underline", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StyleSchemeChooserButton_ConstructProps)
    _init (config?: StyleSchemeChooserButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeChooserButton
    static $gtype: GObject.Type
}
export interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Widget_ConstructProps {
    accessible_role?: Gtk.AccessibleRole
    style_scheme?: StyleScheme
}
export class StyleSchemeChooserWidget {
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Properties of GtkSource.StyleSchemeChooser */
    style_scheme: StyleScheme
    /* Fields of GtkSource.StyleSchemeChooserWidget */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of GtkSource.StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of GtkSource.StyleSchemeChooserWidget */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_style_scheme(): StyleScheme
    vfunc_set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: StyleSchemeChooserWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: StyleSchemeChooserWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: StyleSchemeChooserWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: StyleSchemeChooserWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: StyleSchemeChooserWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: StyleSchemeChooserWidget) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StyleSchemeChooserWidget_ConstructProps)
    _init (config?: StyleSchemeChooserWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeChooserWidget
    static $gtype: GObject.Type
}
export interface StyleSchemeManager_ConstructProps extends GObject.Object_ConstructProps {
    search_path?: string[]
}
export class StyleSchemeManager {
    /* Properties of GtkSource.StyleSchemeManager */
    readonly scheme_ids: string[]
    search_path: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.StyleSchemeManager */
    append_search_path(path: string): void
    force_rescan(): void
    get_scheme(scheme_id: string): StyleScheme | null
    get_scheme_ids(): string[] | null
    get_search_path(): string[]
    prepend_search_path(path: string): void
    set_search_path(path?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scheme-ids", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-ids", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-path", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StyleSchemeManager_ConstructProps)
    _init (config?: StyleSchemeManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeManager
    static get_default(): StyleSchemeManager
    static $gtype: GObject.Type
}
export interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    draw_spaces?: boolean
    draw_spaces_set?: boolean
}
export class Tag {
    /* Properties of GtkSource.Tag */
    draw_spaces: boolean
    draw_spaces_set: boolean
    /* Properties of Gtk.TextTag */
    accumulative_margin: boolean
    allow_breaks: boolean
    allow_breaks_set: boolean
    background: string
    background_full_height: boolean
    background_full_height_set: boolean
    background_rgba: Gdk.RGBA
    background_set: boolean
    direction: Gtk.TextDirection
    editable: boolean
    editable_set: boolean
    fallback: boolean
    fallback_set: boolean
    family: string
    family_set: boolean
    font: string
    font_desc: Pango.FontDescription
    font_features: string
    font_features_set: boolean
    foreground: string
    foreground_rgba: Gdk.RGBA
    foreground_set: boolean
    indent: number
    indent_set: boolean
    insert_hyphens: boolean
    insert_hyphens_set: boolean
    invisible: boolean
    invisible_set: boolean
    justification: Gtk.Justification
    justification_set: boolean
    language: string
    language_set: boolean
    left_margin: number
    left_margin_set: boolean
    letter_spacing: number
    letter_spacing_set: boolean
    overline: Pango.Overline
    overline_rgba: Gdk.RGBA
    overline_rgba_set: boolean
    overline_set: boolean
    paragraph_background: string
    paragraph_background_rgba: Gdk.RGBA
    paragraph_background_set: boolean
    pixels_above_lines: number
    pixels_above_lines_set: boolean
    pixels_below_lines: number
    pixels_below_lines_set: boolean
    pixels_inside_wrap: number
    pixels_inside_wrap_set: boolean
    right_margin: number
    right_margin_set: boolean
    rise: number
    rise_set: boolean
    scale: number
    scale_set: boolean
    show_spaces: Pango.ShowFlags
    show_spaces_set: boolean
    size: number
    size_points: number
    size_set: boolean
    stretch: Pango.Stretch
    stretch_set: boolean
    strikethrough: boolean
    strikethrough_rgba: Gdk.RGBA
    strikethrough_rgba_set: boolean
    strikethrough_set: boolean
    style: Pango.Style
    style_set: boolean
    tabs: Pango.TabArray
    tabs_set: boolean
    underline: Pango.Underline
    underline_rgba: Gdk.RGBA
    underline_rgba_set: boolean
    underline_set: boolean
    variant: Pango.Variant
    variant_set: boolean
    weight: number
    weight_set: boolean
    wrap_mode: Gtk.WrapMode
    wrap_mode_set: boolean
    /* Fields of GtkSource.Tag */
    parent_instance: Gtk.TextTag
    /* Fields of Gtk.TextTag */
    priv: Gtk.TextTagPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk.TextTag */
    changed(size_changed: boolean): void
    get_priority(): number
    set_priority(priority: number): void
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
    connect(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::draw-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draw-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accumulative-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accumulative-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-breaks", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-breaks", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-breaks-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-breaks-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-full-height", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-full-height-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fallback", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fallback-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-features", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-features-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreground", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreground-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreground-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insert-hyphens", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-hyphens", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insert-hyphens-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-hyphens-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::justification", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::justification-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::letter-spacing", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::letter-spacing-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paragraph-background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paragraph-background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paragraph-background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-above-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-below-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-inside-wrap-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rise", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rise-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size-points", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stretch", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stretch-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strikethrough", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strikethrough-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strikethrough-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strikethrough-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::underline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::underline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::underline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::underline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::variant", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::variant-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::weight", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::weight-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tag_ConstructProps)
    _init (config?: Tag_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Tag
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends Gtk.TextView_ConstructProps {
    auto_indent?: boolean
    background_pattern?: BackgroundPatternType
    enable_snippets?: boolean
    highlight_current_line?: boolean
    indent_on_tab?: boolean
    indent_width?: number
    insert_spaces_instead_of_tabs?: boolean
    right_margin_position?: number
    show_line_marks?: boolean
    show_line_numbers?: boolean
    show_right_margin?: boolean
    smart_backspace?: boolean
    smart_home_end?: SmartHomeEndType
    tab_width?: number
    accessible_role?: Gtk.AccessibleRole
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class View {
    /* Properties of GtkSource.View */
    auto_indent: boolean
    background_pattern: BackgroundPatternType
    readonly completion: Completion
    enable_snippets: boolean
    highlight_current_line: boolean
    indent_on_tab: boolean
    indent_width: number
    insert_spaces_instead_of_tabs: boolean
    right_margin_position: number
    show_line_marks: boolean
    show_line_numbers: boolean
    show_right_margin: boolean
    smart_backspace: boolean
    smart_home_end: SmartHomeEndType
    readonly space_drawer: SpaceDrawer
    tab_width: number
    /* Properties of Gtk.TextView */
    accepts_tab: boolean
    bottom_margin: number
    buffer: Gtk.TextBuffer
    cursor_visible: boolean
    editable: boolean
    extra_menu: Gio.MenuModel
    im_module: string
    indent: number
    input_hints: Gtk.InputHints
    input_purpose: Gtk.InputPurpose
    justification: Gtk.Justification
    left_margin: number
    monospace: boolean
    overwrite: boolean
    pixels_above_lines: number
    pixels_below_lines: number
    pixels_inside_wrap: number
    right_margin: number
    tabs: Pango.TabArray
    top_margin: number
    wrap_mode: Gtk.WrapMode
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of GtkSource.View */
    parent_instance: Gtk.TextView
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkSource.View */
    get_auto_indent(): boolean
    get_background_pattern(): BackgroundPatternType
    get_completion(): Completion
    get_enable_snippets(): boolean
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
    push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    set_auto_indent(enable: boolean): void
    set_background_pattern(background_pattern: BackgroundPatternType): void
    set_enable_snippets(enable_snippets: boolean): void
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
    add_overlay(child: Gtk.Widget, xpos: number, ypos: number): void
    backward_display_line(iter: Gtk.TextIter): boolean
    backward_display_line_start(iter: Gtk.TextIter): boolean
    buffer_to_window_coords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forward_display_line(iter: Gtk.TextIter): boolean
    forward_display_line_end(iter: Gtk.TextIter): boolean
    get_accepts_tab(): boolean
    get_bottom_margin(): number
    get_buffer(): Gtk.TextBuffer
    get_cursor_locations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    get_cursor_visible(): boolean
    get_editable(): boolean
    get_extra_menu(): Gio.MenuModel
    get_gutter(win: Gtk.TextWindowType): Gtk.Widget | null
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
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.Event): boolean
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_overlay(child: Gtk.Widget, xpos: number, ypos: number): void
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
    remove(child: Gtk.Widget): void
    reset_cursor_blink(): void
    reset_im_context(): void
    scroll_mark_onscreen(mark: Gtk.TextMark): void
    scroll_to_iter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scroll_to_mark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    set_accepts_tab(accepts_tab: boolean): void
    set_bottom_margin(bottom_margin: number): void
    set_buffer(buffer?: Gtk.TextBuffer | null): void
    set_cursor_visible(setting: boolean): void
    set_editable(setting: boolean): void
    set_extra_menu(model?: Gio.MenuModel | null): void
    set_gutter(win: Gtk.TextWindowType, widget?: Gtk.Widget | null): void
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
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
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
    vfunc_line_mark_activated(iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void
    vfunc_move_lines(down: boolean): void
    vfunc_move_words(step: number): void
    vfunc_push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    vfunc_show_completion(): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.TextView */
    vfunc_backspace(): void
    vfunc_copy_clipboard(): void
    vfunc_cut_clipboard(): void
    vfunc_delete_from_cursor(type: Gtk.DeleteType, count: number): void
    vfunc_extend_selection(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor(str: string): void
    vfunc_insert_emoji(): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard(): void
    vfunc_set_anchor(): void
    vfunc_snapshot_layer(layer: Gtk.TextViewLayer, snapshot: Gtk.Snapshot): void
    vfunc_toggle_overwrite(): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkSource.View */
    connect(sigName: "change-case", callback: (($obj: View, case_type: ChangeCaseType) => void)): number
    connect_after(sigName: "change-case", callback: (($obj: View, case_type: ChangeCaseType) => void)): number
    emit(sigName: "change-case", case_type: ChangeCaseType): void
    connect(sigName: "change-number", callback: (($obj: View, count: number) => void)): number
    connect_after(sigName: "change-number", callback: (($obj: View, count: number) => void)): number
    emit(sigName: "change-number", count: number): void
    connect(sigName: "join-lines", callback: (($obj: View) => void)): number
    connect_after(sigName: "join-lines", callback: (($obj: View) => void)): number
    emit(sigName: "join-lines"): void
    connect(sigName: "line-mark-activated", callback: (($obj: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    connect_after(sigName: "line-mark-activated", callback: (($obj: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number) => void)): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void
    connect(sigName: "move-lines", callback: (($obj: View, down: boolean) => void)): number
    connect_after(sigName: "move-lines", callback: (($obj: View, down: boolean) => void)): number
    emit(sigName: "move-lines", down: boolean): void
    connect(sigName: "move-to-matching-bracket", callback: (($obj: View, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-to-matching-bracket", callback: (($obj: View, extend_selection: boolean) => void)): number
    emit(sigName: "move-to-matching-bracket", extend_selection: boolean): void
    connect(sigName: "move-words", callback: (($obj: View, count: number) => void)): number
    connect_after(sigName: "move-words", callback: (($obj: View, count: number) => void)): number
    emit(sigName: "move-words", count: number): void
    connect(sigName: "push-snippet", callback: (($obj: View, snippet: Snippet, location: Gtk.TextIter) => void)): number
    connect_after(sigName: "push-snippet", callback: (($obj: View, snippet: Snippet, location: Gtk.TextIter) => void)): number
    emit(sigName: "push-snippet", snippet: Snippet, location: Gtk.TextIter): void
    connect(sigName: "show-completion", callback: (($obj: View) => void)): number
    connect_after(sigName: "show-completion", callback: (($obj: View) => void)): number
    emit(sigName: "show-completion"): void
    connect(sigName: "smart-home-end", callback: (($obj: View, iter: Gtk.TextIter, count: number) => void)): number
    connect_after(sigName: "smart-home-end", callback: (($obj: View, iter: Gtk.TextIter, count: number) => void)): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    /* Signals of Gtk.TextView */
    connect(sigName: "backspace", callback: (($obj: View) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: View) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "copy-clipboard", callback: (($obj: View) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: View) => void)): number
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "cut-clipboard", callback: (($obj: View) => void)): number
    connect_after(sigName: "cut-clipboard", callback: (($obj: View) => void)): number
    emit(sigName: "cut-clipboard"): void
    connect(sigName: "delete-from-cursor", callback: (($obj: View, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: (($obj: View, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    connect(sigName: "extend-selection", callback: (($obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: (($obj: View, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "insert-at-cursor", callback: (($obj: View, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: (($obj: View, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    connect(sigName: "insert-emoji", callback: (($obj: View) => void)): number
    connect_after(sigName: "insert-emoji", callback: (($obj: View) => void)): number
    emit(sigName: "insert-emoji"): void
    connect(sigName: "move-cursor", callback: (($obj: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: View, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    connect(sigName: "move-viewport", callback: (($obj: View, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: (($obj: View, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    connect(sigName: "paste-clipboard", callback: (($obj: View) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: View) => void)): number
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "preedit-changed", callback: (($obj: View, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: (($obj: View, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    connect(sigName: "select-all", callback: (($obj: View, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: View, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    connect(sigName: "set-anchor", callback: (($obj: View) => void)): number
    connect_after(sigName: "set-anchor", callback: (($obj: View) => void)): number
    emit(sigName: "set-anchor"): void
    connect(sigName: "toggle-cursor-visible", callback: (($obj: View) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: (($obj: View) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    connect(sigName: "toggle-overwrite", callback: (($obj: View) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: (($obj: View) => void)): number
    emit(sigName: "toggle-overwrite"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: View) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: View) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: View, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: View, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: View) => void)): number
    connect_after(sigName: "hide", callback: (($obj: View) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: View, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: View, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: View) => void)): number
    connect_after(sigName: "map", callback: (($obj: View) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: View, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: View, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: View, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: View, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: View) => void)): number
    connect_after(sigName: "realize", callback: (($obj: View) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: View) => void)): number
    connect_after(sigName: "show", callback: (($obj: View) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: View, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: View, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: View) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: View) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: View) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: View) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-snippets", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-snippets", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-menu", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): View
    static new_with_buffer(buffer: Buffer): View
    static new_with_buffer(buffer: Gtk.TextBuffer): View
    static $gtype: GObject.Type
}
export abstract class BufferClass {
    /* Fields of GtkSource.BufferClass */
    parent_class: Gtk.TextBufferClass
    bracket_matched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
    static name: string
}
export abstract class CompletionCellClass {
    /* Fields of GtkSource.CompletionCellClass */
    parent_class: Gtk.WidgetClass
    static name: string
}
export abstract class CompletionClass {
    /* Fields of GtkSource.CompletionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CompletionContextClass {
    /* Fields of GtkSource.CompletionContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CompletionProposalInterface {
    /* Fields of GtkSource.CompletionProposalInterface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class CompletionProviderInterface {
    /* Fields of GtkSource.CompletionProviderInterface */
    parent_iface: GObject.TypeInterface
    get_title: (self: CompletionProvider) => string
    get_priority: (self: CompletionProvider, context: CompletionContext) => number
    is_trigger: (self: CompletionProvider, iter: Gtk.TextIter, ch: number) => boolean
    key_activates: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType) => boolean
    populate_async: (self: CompletionProvider, context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    populate_finish: (self: CompletionProvider, result: Gio.AsyncResult) => Gio.ListModel
    refilter: (self: CompletionProvider, context: CompletionContext, model: Gio.ListModel) => void
    display: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell) => void
    activate: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => void
    list_alternates: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => CompletionProposal[] | null
    static name: string
}
export abstract class CompletionSnippetsClass {
    /* Fields of GtkSource.CompletionSnippetsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CompletionWordsClass {
    /* Fields of GtkSource.CompletionWordsClass */
    parent_class: GObject.ObjectClass
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
    /* Static methods and pseudo-constructors */
    static get_all(): Encoding[]
    static get_current(): Encoding
    static get_default_candidates(): Encoding[]
    static get_from_charset(charset: string): Encoding | null
    static get_utf8(): Encoding
}
export abstract class FileClass {
    /* Fields of GtkSource.FileClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FileLoaderClass {
    /* Fields of GtkSource.FileLoaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FileSaverClass {
    /* Fields of GtkSource.FileSaverClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class GutterClass {
    /* Fields of GtkSource.GutterClass */
    parent_class: Gtk.WidgetClass
    static name: string
}
export abstract class GutterLinesClass {
    /* Fields of GtkSource.GutterLinesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class GutterRendererClass {
    /* Fields of GtkSource.GutterRendererClass */
    parent_class: Gtk.WidgetClass
    query_data: (renderer: GutterRenderer, lines: GutterLines, line: number) => void
    begin: (renderer: GutterRenderer, lines: GutterLines) => void
    snapshot_line: (renderer: GutterRenderer, snapshot: Gtk.Snapshot, lines: GutterLines, line: number) => void
    end: (renderer: GutterRenderer) => void
    change_view: (renderer: GutterRenderer, old_view?: View | null) => void
    change_buffer: (renderer: GutterRenderer, old_buffer?: Buffer | null) => void
    query_activatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean
    activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number) => void
    static name: string
}
export abstract class GutterRendererPixbufClass {
    /* Fields of GtkSource.GutterRendererPixbufClass */
    parent_class: GutterRendererClass
    static name: string
}
export abstract class GutterRendererTextClass {
    /* Fields of GtkSource.GutterRendererTextClass */
    parent_class: GutterRendererClass
    static name: string
}
export abstract class LanguageClass {
    /* Fields of GtkSource.LanguageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LanguageManagerClass {
    /* Fields of GtkSource.LanguageManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MapClass {
    /* Fields of GtkSource.MapClass */
    parent_class: ViewClass
    static name: string
}
export abstract class MarkAttributesClass {
    /* Fields of GtkSource.MarkAttributesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MarkClass {
    /* Fields of GtkSource.MarkClass */
    parent_class: Gtk.TextMarkClass
    static name: string
}
export abstract class PrintCompositorClass {
    /* Fields of GtkSource.PrintCompositorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RegionClass {
    /* Fields of GtkSource.RegionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RegionIter {
    /* Methods of GtkSource.RegionIter */
    get_subregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    is_end(): boolean
    next(): boolean
    static name: string
}
export abstract class SearchContextClass {
    /* Fields of GtkSource.SearchContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SearchSettingsClass {
    /* Fields of GtkSource.SearchSettingsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SnippetChunkClass {
    /* Fields of GtkSource.SnippetChunkClass */
    parent_class: GObject.InitiallyUnownedClass
    static name: string
}
export abstract class SnippetClass {
    /* Fields of GtkSource.SnippetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SnippetContextClass {
    /* Fields of GtkSource.SnippetContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SnippetManagerClass {
    /* Fields of GtkSource.SnippetManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SpaceDrawerClass {
    /* Fields of GtkSource.SpaceDrawerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StyleClass {
    /* Fields of GtkSource.StyleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StyleSchemeChooserButtonClass {
    /* Fields of GtkSource.StyleSchemeChooserButtonClass */
    parent: Gtk.ButtonClass
    static name: string
}
export abstract class StyleSchemeChooserInterface {
    /* Fields of GtkSource.StyleSchemeChooserInterface */
    base_interface: GObject.TypeInterface
    get_style_scheme: (chooser: StyleSchemeChooser) => StyleScheme
    set_style_scheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
    static name: string
}
export abstract class StyleSchemeChooserWidgetClass {
    /* Fields of GtkSource.StyleSchemeChooserWidgetClass */
    parent: Gtk.WidgetClass
    static name: string
}
export abstract class StyleSchemeClass {
    /* Fields of GtkSource.StyleSchemeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StyleSchemeManagerClass {
    /* Fields of GtkSource.StyleSchemeManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TagClass {
    /* Fields of GtkSource.TagClass */
    parent_class: Gtk.TextTagClass
    static name: string
}
export abstract class ViewClass {
    /* Fields of GtkSource.ViewClass */
    parent_class: Gtk.TextViewClass
    line_mark_activated: (view: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number) => void
    show_completion: (view: View) => void
    move_lines: (view: View, down: boolean) => void
    move_words: (view: View, step: number) => void
    push_snippet: (view: View, snippet: Snippet, location?: Gtk.TextIter | null) => void
    static name: string
}