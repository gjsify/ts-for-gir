/**
 * GtkSource-3.0
 */

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
export interface MountOperationFactory {
    (file: File, userdata: object): Gio.MountOperation
}
export interface CompletionProposal_ConstructProps {
}
export interface CompletionProposal {
    /* Methods of CompletionProposal */
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
    /* Virtual methods of CompletionProposal */
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
    /* Signals of CompletionProposal */
    connect(sigName: "changed", callback: (() => void))
}
export interface CompletionProposal_Static {
    new (config: CompletionProposal_ConstructProps): CompletionProposal
}
export declare var CompletionProposal: CompletionProposal_Static
export interface CompletionProvider_ConstructProps {
}
export interface CompletionProvider {
    /* Methods of CompletionProvider */
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
    /* Virtual methods of CompletionProvider */
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
    new (config: CompletionProvider_ConstructProps): CompletionProvider
}
export declare var CompletionProvider: CompletionProvider_Static
export interface StyleSchemeChooser_ConstructProps {
    /* Properties of StyleSchemeChooser */
    style_scheme?:StyleScheme
}
export interface StyleSchemeChooser {
    /* Properties of StyleSchemeChooser */
    style_scheme:StyleScheme
    /* Methods of StyleSchemeChooser */
    get_style_scheme(): StyleScheme
    set_style_scheme(scheme: StyleScheme): void
    /* Virtual methods of StyleSchemeChooser */
    vfunc_get_style_scheme(): StyleScheme
    vfunc_set_style_scheme(scheme: StyleScheme): void
}
export interface StyleSchemeChooser_Static {
    new (config: StyleSchemeChooser_ConstructProps): StyleSchemeChooser
}
export declare var StyleSchemeChooser: StyleSchemeChooser_Static
export interface UndoManager_ConstructProps {
}
export interface UndoManager {
    /* Methods of UndoManager */
    begin_not_undoable_action(): void
    can_redo(): boolean
    can_redo_changed(): void
    can_undo(): boolean
    can_undo_changed(): void
    end_not_undoable_action(): void
    redo(): void
    undo(): void
    /* Virtual methods of UndoManager */
    vfunc_begin_not_undoable_action(): void
    vfunc_can_redo(): boolean
    vfunc_can_redo_changed(): void
    vfunc_can_undo(): boolean
    vfunc_can_undo_changed(): void
    vfunc_end_not_undoable_action(): void
    vfunc_redo(): void
    vfunc_undo(): void
    /* Signals of UndoManager */
    connect(sigName: "can-redo-changed", callback: (() => void))
    connect(sigName: "can-undo-changed", callback: (() => void))
}
export interface UndoManager_Static {
    new (config: UndoManager_ConstructProps): UndoManager
}
export declare var UndoManager: UndoManager_Static
export interface Buffer_ConstructProps {
    /* Properties of Buffer */
    highlight_matching_brackets?:boolean
    highlight_syntax?:boolean
    implicit_trailing_newline?:boolean
    language?:Language
    max_undo_levels?:number
    style_scheme?:StyleScheme
    undo_manager?:UndoManager
    /* Properties of TextBuffer */
    tag_table?:Gtk.TextTagTable
    text?:string
}
export interface Buffer {
    /* Properties of Buffer */
    readonly can_redo:boolean
    readonly can_undo:boolean
    highlight_matching_brackets:boolean
    highlight_syntax:boolean
    implicit_trailing_newline:boolean
    language:Language
    max_undo_levels:number
    style_scheme:StyleScheme
    undo_manager:UndoManager
    /* Properties of TextBuffer */
    readonly copy_target_list:Gtk.TargetList
    readonly cursor_position:number
    readonly has_selection:boolean
    readonly paste_target_list:Gtk.TargetList
    text:string
    /* Methods of Buffer */
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
    /* Methods of TextBuffer */
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
    deserialize(content_buffer: Gtk.TextBuffer, format: Gdk.Atom, iter: Gtk.TextIter, data: number[], length: number): boolean
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
    get_mark(name: string): Gtk.TextMark
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
    register_deserialize_format(mime_type: string, function_: Gtk.TextBufferDeserializeFunc, user_data: object, user_data_destroy: GLib.DestroyNotify): Gdk.Atom
    register_deserialize_tagset(tagset_name: string | null): Gdk.Atom
    register_serialize_format(mime_type: string, function_: Gtk.TextBufferSerializeFunc, user_data: object, user_data_destroy: GLib.DestroyNotify): Gdk.Atom
    register_serialize_tagset(tagset_name: string | null): Gdk.Atom
    remove_all_tags(start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_selection_clipboard(clipboard: Gtk.Clipboard): void
    remove_tag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    remove_tag_by_name(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    select_range(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    serialize(content_buffer: Gtk.TextBuffer, format: Gdk.Atom, start: Gtk.TextIter, end: Gtk.TextIter): [ /* returnType */ number[], /* length */ number ]
    set_modified(setting: boolean): void
    set_text(text: string, len: number): void
    unregister_deserialize_format(format: Gdk.Atom): void
    unregister_serialize_format(format: Gdk.Atom): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Buffer */
    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void
    vfunc_redo(): void
    vfunc_undo(): void
    /* Virtual methods of TextBuffer */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Buffer */
    connect(sigName: "bracket-matched", callback: ((iter: Gtk.TextIter, state: BracketMatchType) => void))
    connect(sigName: "highlight-updated", callback: ((start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "redo", callback: (() => void))
    connect(sigName: "source-mark-updated", callback: ((mark: Gtk.TextMark) => void))
    connect(sigName: "undo", callback: (() => void))
    /* Signals of TextBuffer */
    connect(sigName: "apply-tag", callback: ((tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "begin-user-action", callback: (() => void))
    connect(sigName: "changed", callback: (() => void))
    connect(sigName: "delete-range", callback: ((start: Gtk.TextIter, end: Gtk.TextIter) => void))
    connect(sigName: "end-user-action", callback: (() => void))
    connect(sigName: "insert-child-anchor", callback: ((location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void))
    connect(sigName: "insert-pixbuf", callback: ((location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void))
    connect(sigName: "insert-text", callback: ((location: Gtk.TextIter, text: string, len: number) => void))
    connect(sigName: "mark-deleted", callback: ((mark: Gtk.TextMark) => void))
    connect(sigName: "mark-set", callback: ((location: Gtk.TextIter, mark: Gtk.TextMark) => void))
    connect(sigName: "modified-changed", callback: (() => void))
    connect(sigName: "paste-done", callback: ((clipboard: Gtk.Clipboard) => void))
    connect(sigName: "remove-tag", callback: ((tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Buffer_Static {
    new (config: Buffer_ConstructProps): Buffer
}
export declare class Buffer_Static {
    new(table: Gtk.TextTagTable | null): Buffer
    new_with_language(language: Language): Buffer
}
export declare var Buffer: Buffer_Static
export interface Completion_ConstructProps {
    /* Properties of Completion */
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
    /* Properties of Completion */
    accelerators:number
    auto_complete_delay:number
    proposal_page_size:number
    provider_page_size:number
    remember_info_visibility:boolean
    select_on_show:boolean
    show_headers:boolean
    show_icons:boolean
    /* Methods of Completion */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Completion */
    vfunc_activate_proposal(): void
    vfunc_hide(): void
    vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void
    vfunc_move_page(step: Gtk.ScrollStep, num: number): void
    vfunc_populate_context(context: CompletionContext): void
    vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean
    vfunc_show(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Completion */
    connect(sigName: "activate-proposal", callback: (() => void))
    connect(sigName: "hide", callback: (() => void))
    connect(sigName: "move-cursor", callback: ((step: Gtk.ScrollStep, num: number) => void))
    connect(sigName: "move-page", callback: ((step: Gtk.ScrollStep, num: number) => void))
    connect(sigName: "populate-context", callback: ((context: CompletionContext) => void))
    connect(sigName: "show", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Completion_Static {
    new (config: Completion_ConstructProps): Completion
}
export declare var Completion: Completion_Static
export interface CompletionContext_ConstructProps {
    /* Properties of CompletionContext */
    activation?:CompletionActivation
    completion?:Completion
    iter?:Gtk.TextIter
}
export interface CompletionContext {
    /* Properties of CompletionContext */
    activation:CompletionActivation
    iter:Gtk.TextIter
    /* Methods of CompletionContext */
    add_proposals(provider: CompletionProvider, proposals: GLib.List | null, finished: boolean): void
    get_activation(): CompletionActivation
    get_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of CompletionContext */
    vfunc_cancelled(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CompletionContext */
    connect(sigName: "cancelled", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CompletionContext_Static {
    new (config: CompletionContext_ConstructProps): CompletionContext
}
export declare var CompletionContext: CompletionContext_Static
export interface CompletionInfo_ConstructProps {
    /* Properties of Window */
    accept_focus?:boolean
    application?:Gtk.Application
    attached_to?:Gtk.Widget
    decorated?:boolean
    default_height?:number
    default_width?:number
    deletable?:boolean
    destroy_with_parent?:boolean
    focus_on_map?:boolean
    focus_visible?:boolean
    gravity?:Gdk.Gravity
    has_resize_grip?:boolean
    hide_titlebar_when_maximized?:boolean
    icon?:GdkPixbuf.Pixbuf
    icon_name?:string
    mnemonics_visible?:boolean
    modal?:boolean
    resizable?:boolean
    role?:string
    screen?:Gdk.Screen
    skip_pager_hint?:boolean
    skip_taskbar_hint?:boolean
    startup_id?:string
    title?:string
    transient_for?:Gtk.Window
    type?:Gtk.WindowType
    type_hint?:Gdk.WindowTypeHint
    urgency_hint?:boolean
    window_position?:Gtk.WindowPosition
    /* Properties of Container */
    border_width?:number
    child?:Gtk.Widget
    resize_mode?:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable?:boolean
    can_default?:boolean
    can_focus?:boolean
    double_buffered?:boolean
    events?:Gdk.EventMask
    expand?:boolean
    halign?:Gtk.Align
    has_default?:boolean
    has_focus?:boolean
    has_tooltip?:boolean
    height_request?:number
    hexpand?:boolean
    hexpand_set?:boolean
    is_focus?:boolean
    margin?:number
    margin_bottom?:number
    margin_end?:number
    margin_left?:number
    margin_right?:number
    margin_start?:number
    margin_top?:number
    name?:string
    no_show_all?:boolean
    opacity?:number
    parent?:Gtk.Container
    receives_default?:boolean
    sensitive?:boolean
    style?:Gtk.Style
    tooltip_markup?:string
    tooltip_text?:string
    valign?:Gtk.Align
    vexpand?:boolean
    vexpand_set?:boolean
    visible?:boolean
    width_request?:number
}
export interface CompletionInfo {
    /* Properties of Window */
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
    /* Properties of Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
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
    /* Methods of CompletionInfo */
    get_widget(): Gtk.Widget
    move_to_iter(view: Gtk.TextView, iter: Gtk.TextIter | null): void
    set_widget(widget: Gtk.Widget | null): void
    /* Methods of Window */
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
    get_application(): Gtk.Application
    get_attached_to(): Gtk.Widget
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget
    get_focus_on_map(): boolean
    get_focus_visible(): boolean
    get_gravity(): Gdk.Gravity
    get_group(): Gtk.WindowGroup
    get_has_resize_grip(): boolean
    get_hide_titlebar_when_maximized(): boolean
    get_icon(): GdkPixbuf.Pixbuf
    get_icon_list(): GLib.List
    get_icon_name(): string
    get_mnemonic_modifier(): Gdk.ModifierType
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_opacity(): number
    get_position(): [ /* root_x */ number | null, /* root_y */ number | null ]
    get_resizable(): boolean
    get_resize_grip_area(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    get_role(): string
    get_screen(): Gdk.Screen
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_skip_pager_hint(): boolean
    get_skip_taskbar_hint(): boolean
    get_title(): string
    get_titlebar(): Gtk.Widget
    get_transient_for(): Gtk.Window
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
    /* Methods of Bin */
    get_child(): Gtk.Widget
    /* Methods of Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_notify(child: Gtk.Widget, child_property: string): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object): void
    foreach(callback: Gtk.Callback, callback_data: object): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
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
    /* Methods of Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
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
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
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
    get_frame_clock(): Gdk.FrameClock
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
    get_parent_window(): Gdk.Window
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
    get_window(): Gdk.Window
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
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle | null): boolean
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
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf
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
    style_get_property(property_name: string, value: GObject.Value): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of CompletionInfo */
    vfunc_before_show(): void
    /* Virtual methods of Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    vfunc_set_focus(focus: Gtk.Widget | null): void
    /* Virtual methods of Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Widget */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CompletionInfo */
    connect(sigName: "before-show", callback: (() => void))
    /* Signals of Window */
    connect(sigName: "activate-default", callback: (() => void))
    connect(sigName: "activate-focus", callback: (() => void))
    connect(sigName: "enable-debugging", callback: ((toggle: boolean) => boolean))
    connect(sigName: "keys-changed", callback: (() => void))
    connect(sigName: "set-focus", callback: ((object: Gtk.Widget) => void))
    /* Signals of Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: (() => void))
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void))
    /* Signals of Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void))
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: (() => void))
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: (() => void))
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: (() => void))
    connect(sigName: "grab-notify", callback: ((was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: (() => void))
    connect(sigName: "hierarchy-changed", callback: ((previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: (() => void))
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((arg1: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: (() => boolean))
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: (() => void))
    connect(sigName: "screen-changed", callback: ((previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: (() => void))
    connect(sigName: "show-help", callback: ((help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: (() => void))
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: (() => void))
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: (() => void))
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CompletionInfo_Static {
    new (config: CompletionInfo_ConstructProps): CompletionInfo
}
export declare class CompletionInfo_Static {
    new(): CompletionInfo
}
export declare var CompletionInfo: CompletionInfo_Static
export interface CompletionItem_ConstructProps {
    /* Properties of CompletionItem */
    gicon?:Gio.Icon
    icon?:GdkPixbuf.Pixbuf
    icon_name?:string
    info?:string
    label?:string
    markup?:string
    text?:string
}
export interface CompletionItem {
    /* Properties of CompletionItem */
    gicon:Gio.Icon
    icon:GdkPixbuf.Pixbuf
    icon_name:string
    info:string
    label:string
    markup:string
    text:string
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CompletionItem_Static {
    new (config: CompletionItem_ConstructProps): CompletionItem
}
export declare class CompletionItem_Static {
    new(label: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    new_from_stock(label: string | null, text: string, stock: string, info: string | null): CompletionItem
    new_with_markup(markup: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
}
export declare var CompletionItem: CompletionItem_Static
export interface CompletionWords_ConstructProps {
    /* Properties of CompletionWords */
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
    /* Properties of CompletionWords */
    activation:CompletionActivation
    icon:GdkPixbuf.Pixbuf
    interactive_delay:number
    minimum_word_size:number
    name:string
    priority:number
    proposals_batch_size:number
    scan_batch_size:number
    /* Methods of CompletionWords */
    register(buffer: Gtk.TextBuffer): void
    unregister(buffer: Gtk.TextBuffer): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CompletionWords_Static {
    new (config: CompletionWords_ConstructProps): CompletionWords
}
export declare class CompletionWords_Static {
    new(name: string | null, icon: GdkPixbuf.Pixbuf | null): CompletionWords
}
export declare var CompletionWords: CompletionWords_Static
export interface File_ConstructProps {
    /* Properties of File */
    location?:Gio.File
}
export interface File {
    /* Properties of File */
    readonly compression_type:CompressionType
    readonly encoding:Encoding
    location:Gio.File
    readonly newline_type:NewlineType
    readonly read_only:boolean
    /* Methods of File */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface File_Static {
    new (config: File_ConstructProps): File
}
export declare class File_Static {
    new(): File
}
export declare var File: File_Static
export interface FileLoader_ConstructProps {
    /* Properties of FileLoader */
    buffer?:Buffer
    file?:File
    input_stream?:Gio.InputStream
    location?:Gio.File
}
export interface FileLoader {
    /* Properties of FileLoader */
    /* Methods of FileLoader */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_input_stream(): Gio.InputStream | null
    get_location(): Gio.File | null
    get_newline_type(): NewlineType
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object, progress_callback_notify: GLib.DestroyNotify | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    load_finish(result: Gio.AsyncResult): boolean
    set_candidate_encodings(candidate_encodings: GLib.SList): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileLoader_Static {
    new (config: FileLoader_ConstructProps): FileLoader
}
export declare class FileLoader_Static {
    new(buffer: Buffer, file: File): FileLoader
    new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
}
export declare var FileLoader: FileLoader_Static
export interface FileSaver_ConstructProps {
    /* Properties of FileSaver */
    buffer?:Buffer
    compression_type?:CompressionType
    encoding?:Encoding
    file?:File
    flags?:FileSaverFlags
    location?:Gio.File
    newline_type?:NewlineType
}
export interface FileSaver {
    /* Properties of FileSaver */
    compression_type:CompressionType
    encoding:Encoding
    flags:FileSaverFlags
    newline_type:NewlineType
    /* Methods of FileSaver */
    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object, progress_callback_notify: GLib.DestroyNotify | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    save_finish(result: Gio.AsyncResult): boolean
    set_compression_type(compression_type: CompressionType): void
    set_encoding(encoding: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    set_newline_type(newline_type: NewlineType): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileSaver_Static {
    new (config: FileSaver_ConstructProps): FileSaver
}
export declare class FileSaver_Static {
    new(buffer: Buffer, file: File): FileSaver
    new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
}
export declare var FileSaver: FileSaver_Static
export interface Gutter_ConstructProps {
    /* Properties of Gutter */
    view?:View
    window_type?:Gtk.TextWindowType
    xpad?:number
    ypad?:number
}
export interface Gutter {
    /* Properties of Gutter */
    xpad:number
    ypad:number
    /* Methods of Gutter */
    get_padding(xpad: number, ypad: number): void
    get_renderer_at_pos(x: number, y: number): GutterRenderer | null
    get_window(): Gdk.Window
    insert(renderer: GutterRenderer, position: number): boolean
    queue_draw(): void
    remove(renderer: GutterRenderer): void
    reorder(renderer: GutterRenderer, position: number): void
    set_padding(xpad: number, ypad: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Gutter_Static {
    new (config: Gutter_ConstructProps): Gutter
}
export declare var Gutter: Gutter_Static
export interface GutterRenderer_ConstructProps {
    /* Properties of GutterRenderer */
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
    /* Properties of GutterRenderer */
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
    /* Methods of GutterRenderer */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GutterRenderer */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface GutterRenderer_Static {
    new (config: GutterRenderer_ConstructProps): GutterRenderer
}
export declare var GutterRenderer: GutterRenderer_Static
export interface GutterRendererPixbuf_ConstructProps {
    /* Properties of GutterRendererPixbuf */
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
    /* Properties of GutterRenderer */
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
export interface GutterRendererPixbuf {
    /* Properties of GutterRendererPixbuf */
    gicon:Gio.Icon
    icon_name:string
    pixbuf:GdkPixbuf.Pixbuf
    stock_id:string
    /* Properties of GutterRenderer */
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
    /* Methods of GutterRendererPixbuf */
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_stock_id(): string
    set_gicon(icon: Gio.Icon | null): void
    set_icon_name(icon_name: string | null): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void
    set_stock_id(stock_id: string | null): void
    /* Methods of GutterRenderer */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GutterRenderer */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface GutterRendererPixbuf_Static {
    new (config: GutterRendererPixbuf_ConstructProps): GutterRendererPixbuf
}
export declare class GutterRendererPixbuf_Static {
    new(): GutterRenderer
}
export declare var GutterRendererPixbuf: GutterRendererPixbuf_Static
export interface GutterRendererText_ConstructProps {
    /* Properties of GutterRendererText */
    markup?:string
    text?:string
    /* Properties of GutterRenderer */
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
export interface GutterRendererText {
    /* Properties of GutterRendererText */
    markup:string
    text:string
    /* Properties of GutterRenderer */
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
    /* Methods of GutterRendererText */
    measure(text: string): [ /* width */ number, /* height */ number ]
    measure_markup(markup: string): [ /* width */ number, /* height */ number ]
    set_markup(markup: string, length: number): void
    set_text(text: string, length: number): void
    /* Methods of GutterRenderer */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GutterRenderer */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void))
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean))
    connect(sigName: "query-data", callback: ((start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void))
    connect(sigName: "query-tooltip", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "queue-draw", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface GutterRendererText_Static {
    new (config: GutterRendererText_ConstructProps): GutterRendererText
}
export declare class GutterRendererText_Static {
    new(): GutterRenderer
}
export declare var GutterRendererText: GutterRendererText_Static
export interface Language_ConstructProps {
    /* Properties of Language */
}
export interface Language {
    /* Properties of Language */
    readonly hidden:boolean
    readonly id:string
    readonly name:string
    readonly section:string
    /* Methods of Language */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Language_Static {
    new (config: Language_ConstructProps): Language
}
export declare var Language: Language_Static
export interface LanguageManager_ConstructProps {
    /* Properties of LanguageManager */
    search_path?:string[]
}
export interface LanguageManager {
    /* Properties of LanguageManager */
    readonly language_ids:string[]
    search_path:string[]
    /* Methods of LanguageManager */
    get_language(id: string): Language | null
    get_language_ids(): string[] | null
    get_search_path(): string[]
    guess_language(filename: string | null, content_type: string | null): Language | null
    set_search_path(dirs: string[] | null): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface LanguageManager_Static {
    new (config: LanguageManager_ConstructProps): LanguageManager
}
export declare class LanguageManager_Static {
    new(): LanguageManager
    get_default(): LanguageManager
}
export declare var LanguageManager: LanguageManager_Static
export interface Map_ConstructProps {
    /* Properties of Map */
    font_desc?:Pango.FontDescription
    view?:View
    /* Properties of View */
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
    /* Properties of TextView */
    accepts_tab?:boolean
    bottom_margin?:number
    buffer?:Gtk.TextBuffer
    cursor_visible?:boolean
    editable?:boolean
    im_module?:string
    indent?:number
    input_hints?:Gtk.InputHints
    input_purpose?:Gtk.InputPurpose
    justification?:Gtk.Justification
    left_margin?:number
    monospace?:boolean
    overwrite?:boolean
    pixels_above_lines?:number
    pixels_below_lines?:number
    pixels_inside_wrap?:number
    populate_all?:boolean
    right_margin?:number
    tabs?:Pango.TabArray
    top_margin?:number
    wrap_mode?:Gtk.WrapMode
    /* Properties of Container */
    border_width?:number
    child?:Gtk.Widget
    resize_mode?:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable?:boolean
    can_default?:boolean
    can_focus?:boolean
    double_buffered?:boolean
    events?:Gdk.EventMask
    expand?:boolean
    halign?:Gtk.Align
    has_default?:boolean
    has_focus?:boolean
    has_tooltip?:boolean
    height_request?:number
    hexpand?:boolean
    hexpand_set?:boolean
    is_focus?:boolean
    margin?:number
    margin_bottom?:number
    margin_end?:number
    margin_left?:number
    margin_right?:number
    margin_start?:number
    margin_top?:number
    name?:string
    no_show_all?:boolean
    opacity?:number
    parent?:Gtk.Container
    receives_default?:boolean
    sensitive?:boolean
    style?:Gtk.Style
    tooltip_markup?:string
    tooltip_text?:string
    valign?:Gtk.Align
    vexpand?:boolean
    vexpand_set?:boolean
    visible?:boolean
    width_request?:number
}
export interface Map {
    /* Properties of Map */
    font_desc:Pango.FontDescription
    view:View
    /* Properties of View */
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
    tab_width:number
    /* Properties of TextView */
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
    /* Properties of Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
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
    /* Methods of Map */
    get_view(): View | null
    set_view(view: View): void
    /* Methods of View */
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
    /* Methods of TextView */
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
    get_iter_at_location(x: number, y: number): /* iter */ Gtk.TextIter
    get_iter_at_position(x: number, y: number): [ /* iter */ Gtk.TextIter, /* trailing */ number | null ]
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
    get_tabs(): Pango.TabArray
    get_top_margin(): number
    get_vadjustment(): Gtk.Adjustment
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_window(win: Gtk.TextWindowType): Gdk.Window
    get_window_type(window: Gdk.Window): Gtk.TextWindowType
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.EventKey): boolean
    move_child(child: Gtk.Widget, xpos: number, ypos: number): void
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
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
    /* Methods of Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_notify(child: Gtk.Widget, child_property: string): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object): void
    foreach(callback: Gtk.Callback, callback_data: object): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
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
    /* Methods of Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
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
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
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
    get_frame_clock(): Gdk.FrameClock
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
    get_parent_window(): Gdk.Window
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
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle | null): boolean
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
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf
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
    style_get_property(property_name: string, value: GObject.Value): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of View */
    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines(copy: boolean, step: number): void
    vfunc_move_words(step: number): void
    vfunc_redo(): void
    vfunc_show_completion(): void
    vfunc_undo(): void
    /* Virtual methods of TextView */
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
    /* Virtual methods of Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Widget */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of View */
    connect(sigName: "change-case", callback: ((case_type: ChangeCaseType) => void))
    connect(sigName: "change-number", callback: ((count: number) => void))
    connect(sigName: "join-lines", callback: (() => void))
    connect(sigName: "line-mark-activated", callback: ((iter: Gtk.TextIter, event: Gdk.Event) => void))
    connect(sigName: "move-lines", callback: ((copy: boolean, count: number) => void))
    connect(sigName: "move-to-matching-bracket", callback: ((extend_selection: boolean) => void))
    connect(sigName: "move-words", callback: ((count: number) => void))
    connect(sigName: "redo", callback: (() => void))
    connect(sigName: "show-completion", callback: (() => void))
    connect(sigName: "smart-home-end", callback: ((iter: Gtk.TextIter, count: number) => void))
    connect(sigName: "undo", callback: (() => void))
    /* Signals of TextView */
    connect(sigName: "backspace", callback: (() => void))
    connect(sigName: "copy-clipboard", callback: (() => void))
    connect(sigName: "cut-clipboard", callback: (() => void))
    connect(sigName: "delete-from-cursor", callback: ((type: Gtk.DeleteType, count: number) => void))
    connect(sigName: "extend-selection", callback: ((granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean))
    connect(sigName: "insert-at-cursor", callback: ((string: string) => void))
    connect(sigName: "move-cursor", callback: ((step: Gtk.MovementStep, count: number, extend_selection: boolean) => void))
    connect(sigName: "move-viewport", callback: ((step: Gtk.ScrollStep, count: number) => void))
    connect(sigName: "paste-clipboard", callback: (() => void))
    connect(sigName: "populate-popup", callback: ((popup: Gtk.Widget) => void))
    connect(sigName: "preedit-changed", callback: ((preedit: string) => void))
    connect(sigName: "select-all", callback: ((select: boolean) => void))
    connect(sigName: "set-anchor", callback: (() => void))
    connect(sigName: "toggle-cursor-visible", callback: (() => void))
    connect(sigName: "toggle-overwrite", callback: (() => void))
    /* Signals of Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: (() => void))
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void))
    /* Signals of Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void))
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: (() => void))
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: (() => void))
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: (() => void))
    connect(sigName: "grab-notify", callback: ((was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: (() => void))
    connect(sigName: "hierarchy-changed", callback: ((previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: (() => void))
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((arg1: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: (() => boolean))
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: (() => void))
    connect(sigName: "screen-changed", callback: ((previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: (() => void))
    connect(sigName: "show-help", callback: ((help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: (() => void))
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: (() => void))
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: (() => void))
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Map_Static {
    new (config: Map_ConstructProps): Map
}
export declare class Map_Static {
    new(): Gtk.Widget
}
export declare var Map: Map_Static
export interface Mark_ConstructProps {
    /* Properties of Mark */
    category?:string
    /* Properties of TextMark */
    left_gravity?:boolean
    name?:string
}
export interface Mark {
    /* Properties of Mark */
    /* Properties of TextMark */
    /* Methods of Mark */
    get_category(): string
    next(category: string | null): Mark | null
    prev(category: string): Mark | null
    /* Methods of TextMark */
    get_buffer(): Gtk.TextBuffer
    get_deleted(): boolean
    get_left_gravity(): boolean
    get_name(): string
    get_visible(): boolean
    set_visible(setting: boolean): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Mark_Static {
    new (config: Mark_ConstructProps): Mark
}
export declare class Mark_Static {
    new(name: string, category: string): Mark
}
export declare var Mark: Mark_Static
export interface MarkAttributes_ConstructProps {
    /* Properties of MarkAttributes */
    background?:Gdk.RGBA
    gicon?:Gio.Icon
    icon_name?:string
    pixbuf?:GdkPixbuf.Pixbuf
    stock_id?:string
}
export interface MarkAttributes {
    /* Properties of MarkAttributes */
    background:Gdk.RGBA
    gicon:Gio.Icon
    icon_name:string
    pixbuf:GdkPixbuf.Pixbuf
    stock_id:string
    /* Methods of MarkAttributes */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: ((mark: Mark) => string))
    connect(sigName: "query-tooltip-text", callback: ((mark: Mark) => string))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MarkAttributes_Static {
    new (config: MarkAttributes_ConstructProps): MarkAttributes
}
export declare class MarkAttributes_Static {
    new(): MarkAttributes
}
export declare var MarkAttributes: MarkAttributes_Static
export interface PrintCompositor_ConstructProps {
    /* Properties of PrintCompositor */
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
    /* Properties of PrintCompositor */
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
    /* Methods of PrintCompositor */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface PrintCompositor_Static {
    new (config: PrintCompositor_ConstructProps): PrintCompositor
}
export declare class PrintCompositor_Static {
    new(buffer: Buffer): PrintCompositor
    new_from_view(view: View): PrintCompositor
}
export declare var PrintCompositor: PrintCompositor_Static
export interface SearchContext_ConstructProps {
    /* Properties of SearchContext */
    buffer?:Buffer
    highlight?:boolean
    match_style?:Style
    settings?:SearchSettings
}
export interface SearchContext {
    /* Properties of SearchContext */
    highlight:boolean
    match_style:Style
    readonly occurrences_count:number
    readonly regex_error:object
    settings:SearchSettings
    /* Methods of SearchContext */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    backward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
    forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object): void
    forward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter | null, /* match_end */ Gtk.TextIter | null ]
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
    set_match_style(match_style: Style | null): void
    set_settings(settings: SearchSettings | null): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SearchContext_Static {
    new (config: SearchContext_ConstructProps): SearchContext
}
export declare class SearchContext_Static {
    new(buffer: Buffer, settings: SearchSettings | null): SearchContext
}
export declare var SearchContext: SearchContext_Static
export interface SearchSettings_ConstructProps {
    /* Properties of SearchSettings */
    at_word_boundaries?:boolean
    case_sensitive?:boolean
    regex_enabled?:boolean
    search_text?:string
    wrap_around?:boolean
}
export interface SearchSettings {
    /* Properties of SearchSettings */
    at_word_boundaries:boolean
    case_sensitive:boolean
    regex_enabled:boolean
    search_text:string
    wrap_around:boolean
    /* Methods of SearchSettings */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SearchSettings_Static {
    new (config: SearchSettings_ConstructProps): SearchSettings
}
export declare class SearchSettings_Static {
    new(): SearchSettings
}
export declare var SearchSettings: SearchSettings_Static
export interface Style_ConstructProps {
    /* Properties of Style */
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
    /* Properties of Style */
    /* Methods of Style */
    copy(): Style
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Style_Static {
    new (config: Style_ConstructProps): Style
}
export declare var Style: Style_Static
export interface StyleScheme_ConstructProps {
    /* Properties of StyleScheme */
    id?:string
}
export interface StyleScheme {
    /* Properties of StyleScheme */
    readonly description:string
    readonly filename:string
    readonly name:string
    /* Methods of StyleScheme */
    get_authors(): string[] | null
    get_description(): string | null
    get_filename(): string | null
    get_id(): string
    get_name(): string
    get_style(style_id: string): Style | null
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface StyleScheme_Static {
    new (config: StyleScheme_ConstructProps): StyleScheme
}
export declare var StyleScheme: StyleScheme_Static
export interface StyleSchemeChooserButton_ConstructProps {
    /* Properties of Button */
    always_show_image?:boolean
    focus_on_click?:boolean
    image?:Gtk.Widget
    image_position?:Gtk.PositionType
    label?:string
    relief?:Gtk.ReliefStyle
    use_stock?:boolean
    use_underline?:boolean
    xalign?:number
    yalign?:number
    /* Properties of Container */
    border_width?:number
    child?:Gtk.Widget
    resize_mode?:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable?:boolean
    can_default?:boolean
    can_focus?:boolean
    double_buffered?:boolean
    events?:Gdk.EventMask
    expand?:boolean
    halign?:Gtk.Align
    has_default?:boolean
    has_focus?:boolean
    has_tooltip?:boolean
    height_request?:number
    hexpand?:boolean
    hexpand_set?:boolean
    is_focus?:boolean
    margin?:number
    margin_bottom?:number
    margin_end?:number
    margin_left?:number
    margin_right?:number
    margin_start?:number
    margin_top?:number
    name?:string
    no_show_all?:boolean
    opacity?:number
    parent?:Gtk.Container
    receives_default?:boolean
    sensitive?:boolean
    style?:Gtk.Style
    tooltip_markup?:string
    tooltip_text?:string
    valign?:Gtk.Align
    vexpand?:boolean
    vexpand_set?:boolean
    visible?:boolean
    width_request?:number
}
export interface StyleSchemeChooserButton {
    /* Properties of Button */
    always_show_image:boolean
    focus_on_click:boolean
    image:Gtk.Widget
    image_position:Gtk.PositionType
    label:string
    relief:Gtk.ReliefStyle
    use_stock:boolean
    use_underline:boolean
    xalign:number
    yalign:number
    /* Properties of Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
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
    /* Methods of Button */
    clicked(): void
    enter(): void
    get_alignment(): [ /* xalign */ number, /* yalign */ number ]
    get_always_show_image(): boolean
    get_event_window(): Gdk.Window
    get_focus_on_click(): boolean
    get_image(): Gtk.Widget
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
    set_image(image: Gtk.Widget): void
    set_image_position(position: Gtk.PositionType): void
    set_label(label: string): void
    set_relief(relief: Gtk.ReliefStyle): void
    set_use_stock(use_stock: boolean): void
    set_use_underline(use_underline: boolean): void
    /* Methods of Bin */
    get_child(): Gtk.Widget
    /* Methods of Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_notify(child: Gtk.Widget, child_property: string): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object): void
    foreach(callback: Gtk.Callback, callback_data: object): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
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
    /* Methods of Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
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
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
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
    get_frame_clock(): Gdk.FrameClock
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
    get_parent_window(): Gdk.Window
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
    get_window(): Gdk.Window
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
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle | null): boolean
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
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf
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
    style_get_property(property_name: string, value: GObject.Value): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Button */
    vfunc_activate(): void
    vfunc_clicked(): void
    vfunc_enter(): void
    vfunc_leave(): void
    vfunc_pressed(): void
    vfunc_released(): void
    /* Virtual methods of Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Widget */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Button */
    connect(sigName: "activate", callback: (() => void))
    connect(sigName: "clicked", callback: (() => void))
    connect(sigName: "enter", callback: (() => void))
    connect(sigName: "leave", callback: (() => void))
    connect(sigName: "pressed", callback: (() => void))
    connect(sigName: "released", callback: (() => void))
    /* Signals of Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: (() => void))
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void))
    /* Signals of Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void))
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: (() => void))
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: (() => void))
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: (() => void))
    connect(sigName: "grab-notify", callback: ((was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: (() => void))
    connect(sigName: "hierarchy-changed", callback: ((previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: (() => void))
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((arg1: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: (() => boolean))
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: (() => void))
    connect(sigName: "screen-changed", callback: ((previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: (() => void))
    connect(sigName: "show-help", callback: ((help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: (() => void))
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: (() => void))
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: (() => void))
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface StyleSchemeChooserButton_Static {
    new (config: StyleSchemeChooserButton_ConstructProps): StyleSchemeChooserButton
}
export declare class StyleSchemeChooserButton_Static {
    new(): Gtk.Widget
}
export declare var StyleSchemeChooserButton: StyleSchemeChooserButton_Static
export interface StyleSchemeChooserWidget_ConstructProps {
    /* Properties of Container */
    border_width?:number
    child?:Gtk.Widget
    resize_mode?:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable?:boolean
    can_default?:boolean
    can_focus?:boolean
    double_buffered?:boolean
    events?:Gdk.EventMask
    expand?:boolean
    halign?:Gtk.Align
    has_default?:boolean
    has_focus?:boolean
    has_tooltip?:boolean
    height_request?:number
    hexpand?:boolean
    hexpand_set?:boolean
    is_focus?:boolean
    margin?:number
    margin_bottom?:number
    margin_end?:number
    margin_left?:number
    margin_right?:number
    margin_start?:number
    margin_top?:number
    name?:string
    no_show_all?:boolean
    opacity?:number
    parent?:Gtk.Container
    receives_default?:boolean
    sensitive?:boolean
    style?:Gtk.Style
    tooltip_markup?:string
    tooltip_text?:string
    valign?:Gtk.Align
    vexpand?:boolean
    vexpand_set?:boolean
    visible?:boolean
    width_request?:number
}
export interface StyleSchemeChooserWidget {
    /* Properties of Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
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
    /* Methods of Bin */
    get_child(): Gtk.Widget
    /* Methods of Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_notify(child: Gtk.Widget, child_property: string): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object): void
    foreach(callback: Gtk.Callback, callback_data: object): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
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
    /* Methods of Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
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
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
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
    get_frame_clock(): Gdk.FrameClock
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
    get_parent_window(): Gdk.Window
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
    get_window(): Gdk.Window
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
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle | null): boolean
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
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf
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
    style_get_property(property_name: string, value: GObject.Value): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Widget */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: (() => void))
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void))
    /* Signals of Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void))
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: (() => void))
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: (() => void))
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: (() => void))
    connect(sigName: "grab-notify", callback: ((was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: (() => void))
    connect(sigName: "hierarchy-changed", callback: ((previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: (() => void))
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((arg1: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: (() => boolean))
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: (() => void))
    connect(sigName: "screen-changed", callback: ((previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: (() => void))
    connect(sigName: "show-help", callback: ((help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: (() => void))
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: (() => void))
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: (() => void))
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface StyleSchemeChooserWidget_Static {
    new (config: StyleSchemeChooserWidget_ConstructProps): StyleSchemeChooserWidget
}
export declare class StyleSchemeChooserWidget_Static {
    new(): Gtk.Widget
}
export declare var StyleSchemeChooserWidget: StyleSchemeChooserWidget_Static
export interface StyleSchemeManager_ConstructProps {
    /* Properties of StyleSchemeManager */
    search_path?:string[]
}
export interface StyleSchemeManager {
    /* Properties of StyleSchemeManager */
    readonly scheme_ids:string[]
    search_path:string[]
    /* Methods of StyleSchemeManager */
    append_search_path(path: string): void
    force_rescan(): void
    get_scheme(scheme_id: string): StyleScheme
    get_scheme_ids(): string[] | null
    get_search_path(): string[]
    prepend_search_path(path: string): void
    set_search_path(path: string[] | null): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface StyleSchemeManager_Static {
    new (config: StyleSchemeManager_ConstructProps): StyleSchemeManager
}
export declare class StyleSchemeManager_Static {
    new(): StyleSchemeManager
    get_default(): StyleSchemeManager
}
export declare var StyleSchemeManager: StyleSchemeManager_Static
export interface View_ConstructProps {
    /* Properties of View */
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
    /* Properties of TextView */
    accepts_tab?:boolean
    bottom_margin?:number
    buffer?:Gtk.TextBuffer
    cursor_visible?:boolean
    editable?:boolean
    im_module?:string
    indent?:number
    input_hints?:Gtk.InputHints
    input_purpose?:Gtk.InputPurpose
    justification?:Gtk.Justification
    left_margin?:number
    monospace?:boolean
    overwrite?:boolean
    pixels_above_lines?:number
    pixels_below_lines?:number
    pixels_inside_wrap?:number
    populate_all?:boolean
    right_margin?:number
    tabs?:Pango.TabArray
    top_margin?:number
    wrap_mode?:Gtk.WrapMode
    /* Properties of Container */
    border_width?:number
    child?:Gtk.Widget
    resize_mode?:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable?:boolean
    can_default?:boolean
    can_focus?:boolean
    double_buffered?:boolean
    events?:Gdk.EventMask
    expand?:boolean
    halign?:Gtk.Align
    has_default?:boolean
    has_focus?:boolean
    has_tooltip?:boolean
    height_request?:number
    hexpand?:boolean
    hexpand_set?:boolean
    is_focus?:boolean
    margin?:number
    margin_bottom?:number
    margin_end?:number
    margin_left?:number
    margin_right?:number
    margin_start?:number
    margin_top?:number
    name?:string
    no_show_all?:boolean
    opacity?:number
    parent?:Gtk.Container
    receives_default?:boolean
    sensitive?:boolean
    style?:Gtk.Style
    tooltip_markup?:string
    tooltip_text?:string
    valign?:Gtk.Align
    vexpand?:boolean
    vexpand_set?:boolean
    visible?:boolean
    width_request?:number
}
export interface View {
    /* Properties of View */
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
    tab_width:number
    /* Properties of TextView */
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
    /* Properties of Container */
    border_width:number
    child:Gtk.Widget
    resize_mode:Gtk.ResizeMode
    /* Properties of Widget */
    app_paintable:boolean
    can_default:boolean
    can_focus:boolean
    readonly composite_child:boolean
    double_buffered:boolean
    events:Gdk.EventMask
    expand:boolean
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
    /* Methods of View */
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
    /* Methods of TextView */
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
    get_iter_at_location(x: number, y: number): /* iter */ Gtk.TextIter
    get_iter_at_position(x: number, y: number): [ /* iter */ Gtk.TextIter, /* trailing */ number | null ]
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
    get_tabs(): Pango.TabArray
    get_top_margin(): number
    get_vadjustment(): Gtk.Adjustment
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_window(win: Gtk.TextWindowType): Gdk.Window
    get_window_type(window: Gdk.Window): Gtk.TextWindowType
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.EventKey): boolean
    move_child(child: Gtk.Widget, xpos: number, ypos: number): void
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
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
    /* Methods of Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_notify(child: Gtk.Widget, child_property: string): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: GObject.Value): void
    child_type(): number
    forall(callback: Gtk.Callback, callback_data: object): void
    foreach(callback: Gtk.Callback, callback_data: object): void
    get_border_width(): number
    get_children(): GLib.List
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ GLib.List ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
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
    /* Methods of Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback, user_data: object, notify: GLib.DestroyNotify): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
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
    drag_dest_get_target_list(): Gtk.TargetList
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void
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
    get_frame_clock(): Gdk.FrameClock
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
    get_parent_window(): Gdk.Window
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
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle | null): boolean
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
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf
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
    style_get_property(property_name: string, value: GObject.Value): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of View */
    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines(copy: boolean, step: number): void
    vfunc_move_words(step: number): void
    vfunc_redo(): void
    vfunc_show_completion(): void
    vfunc_undo(): void
    /* Virtual methods of TextView */
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
    /* Virtual methods of Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): number
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback, callback_data: object): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child: Gtk.Widget | null): void
    /* Virtual methods of Widget */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of View */
    connect(sigName: "change-case", callback: ((case_type: ChangeCaseType) => void))
    connect(sigName: "change-number", callback: ((count: number) => void))
    connect(sigName: "join-lines", callback: (() => void))
    connect(sigName: "line-mark-activated", callback: ((iter: Gtk.TextIter, event: Gdk.Event) => void))
    connect(sigName: "move-lines", callback: ((copy: boolean, count: number) => void))
    connect(sigName: "move-to-matching-bracket", callback: ((extend_selection: boolean) => void))
    connect(sigName: "move-words", callback: ((count: number) => void))
    connect(sigName: "redo", callback: (() => void))
    connect(sigName: "show-completion", callback: (() => void))
    connect(sigName: "smart-home-end", callback: ((iter: Gtk.TextIter, count: number) => void))
    connect(sigName: "undo", callback: (() => void))
    /* Signals of TextView */
    connect(sigName: "backspace", callback: (() => void))
    connect(sigName: "copy-clipboard", callback: (() => void))
    connect(sigName: "cut-clipboard", callback: (() => void))
    connect(sigName: "delete-from-cursor", callback: ((type: Gtk.DeleteType, count: number) => void))
    connect(sigName: "extend-selection", callback: ((granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean))
    connect(sigName: "insert-at-cursor", callback: ((string: string) => void))
    connect(sigName: "move-cursor", callback: ((step: Gtk.MovementStep, count: number, extend_selection: boolean) => void))
    connect(sigName: "move-viewport", callback: ((step: Gtk.ScrollStep, count: number) => void))
    connect(sigName: "paste-clipboard", callback: (() => void))
    connect(sigName: "populate-popup", callback: ((popup: Gtk.Widget) => void))
    connect(sigName: "preedit-changed", callback: ((preedit: string) => void))
    connect(sigName: "select-all", callback: ((select: boolean) => void))
    connect(sigName: "set-anchor", callback: (() => void))
    connect(sigName: "toggle-cursor-visible", callback: (() => void))
    connect(sigName: "toggle-overwrite", callback: (() => void))
    /* Signals of Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "check-resize", callback: (() => void))
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void))
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void))
    /* Signals of Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void))
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean))
    connect(sigName: "can-activate-accel", callback: ((signal_id: number) => boolean))
    connect(sigName: "child-notify", callback: ((child_property: GObject.ParamSpec) => void))
    connect(sigName: "composited-changed", callback: (() => void))
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean))
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean))
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "destroy", callback: (() => void))
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "direction-changed", callback: ((previous_direction: Gtk.TextDirection) => void))
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void))
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean))
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void))
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean))
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean))
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean))
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void))
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean))
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean))
    connect(sigName: "grab-focus", callback: (() => void))
    connect(sigName: "grab-notify", callback: ((was_grabbed: boolean) => void))
    connect(sigName: "hide", callback: (() => void))
    connect(sigName: "hierarchy-changed", callback: ((previous_toplevel: Gtk.Widget | null) => void))
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean))
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean))
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean))
    connect(sigName: "map", callback: (() => void))
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "mnemonic-activate", callback: ((arg1: boolean) => boolean))
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean))
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void))
    connect(sigName: "parent-set", callback: ((old_parent: Gtk.Widget | null) => void))
    connect(sigName: "popup-menu", callback: (() => boolean))
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean))
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean))
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean))
    connect(sigName: "realize", callback: (() => void))
    connect(sigName: "screen-changed", callback: ((previous_screen: Gdk.Screen | null) => void))
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean))
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void))
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void))
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean))
    connect(sigName: "show", callback: (() => void))
    connect(sigName: "show-help", callback: ((help_type: Gtk.WidgetHelpType) => boolean))
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void))
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void))
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void))
    connect(sigName: "style-set", callback: ((previous_style: Gtk.Style | null) => void))
    connect(sigName: "style-updated", callback: (() => void))
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean))
    connect(sigName: "unmap", callback: (() => void))
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean))
    connect(sigName: "unrealize", callback: (() => void))
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean))
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface View_Static {
    new (config: View_ConstructProps): View
}
export declare class View_Static {
    new(): Gtk.Widget
    new_with_buffer(buffer: Buffer): Gtk.Widget
}
export declare var View: View_Static
export interface BufferClass_ConstructProps {
}
export interface BufferClass {
}
export interface BufferClass_Static {
    new (config: BufferClass_ConstructProps): BufferClass
}
export declare var BufferClass: BufferClass_Static
export interface BufferPrivate_ConstructProps {
}
export interface BufferPrivate {
}
export interface BufferPrivate_Static {
    new (config: BufferPrivate_ConstructProps): BufferPrivate
}
export declare var BufferPrivate: BufferPrivate_Static
export interface CompletionClass_ConstructProps {
}
export interface CompletionClass {
}
export interface CompletionClass_Static {
    new (config: CompletionClass_ConstructProps): CompletionClass
}
export declare var CompletionClass: CompletionClass_Static
export interface CompletionContextClass_ConstructProps {
}
export interface CompletionContextClass {
}
export interface CompletionContextClass_Static {
    new (config: CompletionContextClass_ConstructProps): CompletionContextClass
}
export declare var CompletionContextClass: CompletionContextClass_Static
export interface CompletionContextPrivate_ConstructProps {
}
export interface CompletionContextPrivate {
}
export interface CompletionContextPrivate_Static {
    new (config: CompletionContextPrivate_ConstructProps): CompletionContextPrivate
}
export declare var CompletionContextPrivate: CompletionContextPrivate_Static
export interface CompletionInfoClass_ConstructProps {
}
export interface CompletionInfoClass {
}
export interface CompletionInfoClass_Static {
    new (config: CompletionInfoClass_ConstructProps): CompletionInfoClass
}
export declare var CompletionInfoClass: CompletionInfoClass_Static
export interface CompletionInfoPrivate_ConstructProps {
}
export interface CompletionInfoPrivate {
}
export interface CompletionInfoPrivate_Static {
    new (config: CompletionInfoPrivate_ConstructProps): CompletionInfoPrivate
}
export declare var CompletionInfoPrivate: CompletionInfoPrivate_Static
export interface CompletionItemClass_ConstructProps {
}
export interface CompletionItemClass {
}
export interface CompletionItemClass_Static {
    new (config: CompletionItemClass_ConstructProps): CompletionItemClass
}
export declare var CompletionItemClass: CompletionItemClass_Static
export interface CompletionItemPrivate_ConstructProps {
}
export interface CompletionItemPrivate {
}
export interface CompletionItemPrivate_Static {
    new (config: CompletionItemPrivate_ConstructProps): CompletionItemPrivate
}
export declare var CompletionItemPrivate: CompletionItemPrivate_Static
export interface CompletionPrivate_ConstructProps {
}
export interface CompletionPrivate {
}
export interface CompletionPrivate_Static {
    new (config: CompletionPrivate_ConstructProps): CompletionPrivate
}
export declare var CompletionPrivate: CompletionPrivate_Static
export interface CompletionProposalIface_ConstructProps {
}
export interface CompletionProposalIface {
}
export interface CompletionProposalIface_Static {
    new (config: CompletionProposalIface_ConstructProps): CompletionProposalIface
}
export declare var CompletionProposalIface: CompletionProposalIface_Static
export interface CompletionProviderIface_ConstructProps {
}
export interface CompletionProviderIface {
}
export interface CompletionProviderIface_Static {
    new (config: CompletionProviderIface_ConstructProps): CompletionProviderIface
}
export declare var CompletionProviderIface: CompletionProviderIface_Static
export interface CompletionWordsClass_ConstructProps {
}
export interface CompletionWordsClass {
}
export interface CompletionWordsClass_Static {
    new (config: CompletionWordsClass_ConstructProps): CompletionWordsClass
}
export declare var CompletionWordsClass: CompletionWordsClass_Static
export interface CompletionWordsPrivate_ConstructProps {
}
export interface CompletionWordsPrivate {
}
export interface CompletionWordsPrivate_Static {
    new (config: CompletionWordsPrivate_ConstructProps): CompletionWordsPrivate
}
export declare var CompletionWordsPrivate: CompletionWordsPrivate_Static
export interface Encoding_ConstructProps {
}
export interface Encoding {
    /* Methods of Encoding */
    copy(): Encoding
    free(): void
    get_charset(): string
    get_name(): string
    to_string(): string
}
export interface Encoding_Static {
    new (config: Encoding_ConstructProps): Encoding
}
export declare class Encoding_Static {
    get_all(): GLib.SList
    get_current(): Encoding
    get_default_candidates(): GLib.SList
    get_from_charset(charset: string): Encoding | null
    get_utf8(): Encoding
}
export declare var Encoding: Encoding_Static
export interface FileClass_ConstructProps {
}
export interface FileClass {
}
export interface FileClass_Static {
    new (config: FileClass_ConstructProps): FileClass
}
export declare var FileClass: FileClass_Static
export interface FileLoaderClass_ConstructProps {
}
export interface FileLoaderClass {
}
export interface FileLoaderClass_Static {
    new (config: FileLoaderClass_ConstructProps): FileLoaderClass
}
export declare var FileLoaderClass: FileLoaderClass_Static
export interface FileLoaderPrivate_ConstructProps {
}
export interface FileLoaderPrivate {
}
export interface FileLoaderPrivate_Static {
    new (config: FileLoaderPrivate_ConstructProps): FileLoaderPrivate
}
export declare var FileLoaderPrivate: FileLoaderPrivate_Static
export interface FilePrivate_ConstructProps {
}
export interface FilePrivate {
}
export interface FilePrivate_Static {
    new (config: FilePrivate_ConstructProps): FilePrivate
}
export declare var FilePrivate: FilePrivate_Static
export interface FileSaverClass_ConstructProps {
}
export interface FileSaverClass {
}
export interface FileSaverClass_Static {
    new (config: FileSaverClass_ConstructProps): FileSaverClass
}
export declare var FileSaverClass: FileSaverClass_Static
export interface FileSaverPrivate_ConstructProps {
}
export interface FileSaverPrivate {
}
export interface FileSaverPrivate_Static {
    new (config: FileSaverPrivate_ConstructProps): FileSaverPrivate
}
export declare var FileSaverPrivate: FileSaverPrivate_Static
export interface GutterClass_ConstructProps {
}
export interface GutterClass {
}
export interface GutterClass_Static {
    new (config: GutterClass_ConstructProps): GutterClass
}
export declare var GutterClass: GutterClass_Static
export interface GutterPrivate_ConstructProps {
}
export interface GutterPrivate {
}
export interface GutterPrivate_Static {
    new (config: GutterPrivate_ConstructProps): GutterPrivate
}
export declare var GutterPrivate: GutterPrivate_Static
export interface GutterRendererClass_ConstructProps {
}
export interface GutterRendererClass {
}
export interface GutterRendererClass_Static {
    new (config: GutterRendererClass_ConstructProps): GutterRendererClass
}
export declare var GutterRendererClass: GutterRendererClass_Static
export interface GutterRendererPixbufClass_ConstructProps {
}
export interface GutterRendererPixbufClass {
}
export interface GutterRendererPixbufClass_Static {
    new (config: GutterRendererPixbufClass_ConstructProps): GutterRendererPixbufClass
}
export declare var GutterRendererPixbufClass: GutterRendererPixbufClass_Static
export interface GutterRendererPixbufPrivate_ConstructProps {
}
export interface GutterRendererPixbufPrivate {
}
export interface GutterRendererPixbufPrivate_Static {
    new (config: GutterRendererPixbufPrivate_ConstructProps): GutterRendererPixbufPrivate
}
export declare var GutterRendererPixbufPrivate: GutterRendererPixbufPrivate_Static
export interface GutterRendererPrivate_ConstructProps {
}
export interface GutterRendererPrivate {
}
export interface GutterRendererPrivate_Static {
    new (config: GutterRendererPrivate_ConstructProps): GutterRendererPrivate
}
export declare var GutterRendererPrivate: GutterRendererPrivate_Static
export interface GutterRendererTextClass_ConstructProps {
}
export interface GutterRendererTextClass {
}
export interface GutterRendererTextClass_Static {
    new (config: GutterRendererTextClass_ConstructProps): GutterRendererTextClass
}
export declare var GutterRendererTextClass: GutterRendererTextClass_Static
export interface GutterRendererTextPrivate_ConstructProps {
}
export interface GutterRendererTextPrivate {
}
export interface GutterRendererTextPrivate_Static {
    new (config: GutterRendererTextPrivate_ConstructProps): GutterRendererTextPrivate
}
export declare var GutterRendererTextPrivate: GutterRendererTextPrivate_Static
export interface LanguageClass_ConstructProps {
}
export interface LanguageClass {
}
export interface LanguageClass_Static {
    new (config: LanguageClass_ConstructProps): LanguageClass
}
export declare var LanguageClass: LanguageClass_Static
export interface LanguageManagerClass_ConstructProps {
}
export interface LanguageManagerClass {
}
export interface LanguageManagerClass_Static {
    new (config: LanguageManagerClass_ConstructProps): LanguageManagerClass
}
export declare var LanguageManagerClass: LanguageManagerClass_Static
export interface LanguageManagerPrivate_ConstructProps {
}
export interface LanguageManagerPrivate {
}
export interface LanguageManagerPrivate_Static {
    new (config: LanguageManagerPrivate_ConstructProps): LanguageManagerPrivate
}
export declare var LanguageManagerPrivate: LanguageManagerPrivate_Static
export interface LanguagePrivate_ConstructProps {
}
export interface LanguagePrivate {
}
export interface LanguagePrivate_Static {
    new (config: LanguagePrivate_ConstructProps): LanguagePrivate
}
export declare var LanguagePrivate: LanguagePrivate_Static
export interface MapClass_ConstructProps {
}
export interface MapClass {
}
export interface MapClass_Static {
    new (config: MapClass_ConstructProps): MapClass
}
export declare var MapClass: MapClass_Static
export interface MarkAttributesClass_ConstructProps {
}
export interface MarkAttributesClass {
}
export interface MarkAttributesClass_Static {
    new (config: MarkAttributesClass_ConstructProps): MarkAttributesClass
}
export declare var MarkAttributesClass: MarkAttributesClass_Static
export interface MarkAttributesPrivate_ConstructProps {
}
export interface MarkAttributesPrivate {
}
export interface MarkAttributesPrivate_Static {
    new (config: MarkAttributesPrivate_ConstructProps): MarkAttributesPrivate
}
export declare var MarkAttributesPrivate: MarkAttributesPrivate_Static
export interface MarkClass_ConstructProps {
}
export interface MarkClass {
}
export interface MarkClass_Static {
    new (config: MarkClass_ConstructProps): MarkClass
}
export declare var MarkClass: MarkClass_Static
export interface MarkPrivate_ConstructProps {
}
export interface MarkPrivate {
}
export interface MarkPrivate_Static {
    new (config: MarkPrivate_ConstructProps): MarkPrivate
}
export declare var MarkPrivate: MarkPrivate_Static
export interface PrintCompositorClass_ConstructProps {
}
export interface PrintCompositorClass {
}
export interface PrintCompositorClass_Static {
    new (config: PrintCompositorClass_ConstructProps): PrintCompositorClass
}
export declare var PrintCompositorClass: PrintCompositorClass_Static
export interface PrintCompositorPrivate_ConstructProps {
}
export interface PrintCompositorPrivate {
}
export interface PrintCompositorPrivate_Static {
    new (config: PrintCompositorPrivate_ConstructProps): PrintCompositorPrivate
}
export declare var PrintCompositorPrivate: PrintCompositorPrivate_Static
export interface SearchContextClass_ConstructProps {
}
export interface SearchContextClass {
}
export interface SearchContextClass_Static {
    new (config: SearchContextClass_ConstructProps): SearchContextClass
}
export declare var SearchContextClass: SearchContextClass_Static
export interface SearchContextPrivate_ConstructProps {
}
export interface SearchContextPrivate {
}
export interface SearchContextPrivate_Static {
    new (config: SearchContextPrivate_ConstructProps): SearchContextPrivate
}
export declare var SearchContextPrivate: SearchContextPrivate_Static
export interface SearchSettingsClass_ConstructProps {
}
export interface SearchSettingsClass {
}
export interface SearchSettingsClass_Static {
    new (config: SearchSettingsClass_ConstructProps): SearchSettingsClass
}
export declare var SearchSettingsClass: SearchSettingsClass_Static
export interface SearchSettingsPrivate_ConstructProps {
}
export interface SearchSettingsPrivate {
}
export interface SearchSettingsPrivate_Static {
    new (config: SearchSettingsPrivate_ConstructProps): SearchSettingsPrivate
}
export declare var SearchSettingsPrivate: SearchSettingsPrivate_Static
export interface StyleClass_ConstructProps {
}
export interface StyleClass {
}
export interface StyleClass_Static {
    new (config: StyleClass_ConstructProps): StyleClass
}
export declare var StyleClass: StyleClass_Static
export interface StyleSchemeChooserButtonClass_ConstructProps {
}
export interface StyleSchemeChooserButtonClass {
}
export interface StyleSchemeChooserButtonClass_Static {
    new (config: StyleSchemeChooserButtonClass_ConstructProps): StyleSchemeChooserButtonClass
}
export declare var StyleSchemeChooserButtonClass: StyleSchemeChooserButtonClass_Static
export interface StyleSchemeChooserInterface_ConstructProps {
}
export interface StyleSchemeChooserInterface {
}
export interface StyleSchemeChooserInterface_Static {
    new (config: StyleSchemeChooserInterface_ConstructProps): StyleSchemeChooserInterface
}
export declare var StyleSchemeChooserInterface: StyleSchemeChooserInterface_Static
export interface StyleSchemeChooserWidgetClass_ConstructProps {
}
export interface StyleSchemeChooserWidgetClass {
}
export interface StyleSchemeChooserWidgetClass_Static {
    new (config: StyleSchemeChooserWidgetClass_ConstructProps): StyleSchemeChooserWidgetClass
}
export declare var StyleSchemeChooserWidgetClass: StyleSchemeChooserWidgetClass_Static
export interface StyleSchemeClass_ConstructProps {
}
export interface StyleSchemeClass {
}
export interface StyleSchemeClass_Static {
    new (config: StyleSchemeClass_ConstructProps): StyleSchemeClass
}
export declare var StyleSchemeClass: StyleSchemeClass_Static
export interface StyleSchemeManagerClass_ConstructProps {
}
export interface StyleSchemeManagerClass {
}
export interface StyleSchemeManagerClass_Static {
    new (config: StyleSchemeManagerClass_ConstructProps): StyleSchemeManagerClass
}
export declare var StyleSchemeManagerClass: StyleSchemeManagerClass_Static
export interface StyleSchemeManagerPrivate_ConstructProps {
}
export interface StyleSchemeManagerPrivate {
}
export interface StyleSchemeManagerPrivate_Static {
    new (config: StyleSchemeManagerPrivate_ConstructProps): StyleSchemeManagerPrivate
}
export declare var StyleSchemeManagerPrivate: StyleSchemeManagerPrivate_Static
export interface StyleSchemePrivate_ConstructProps {
}
export interface StyleSchemePrivate {
}
export interface StyleSchemePrivate_Static {
    new (config: StyleSchemePrivate_ConstructProps): StyleSchemePrivate
}
export declare var StyleSchemePrivate: StyleSchemePrivate_Static
export interface UndoManagerIface_ConstructProps {
}
export interface UndoManagerIface {
}
export interface UndoManagerIface_Static {
    new (config: UndoManagerIface_ConstructProps): UndoManagerIface
}
export declare var UndoManagerIface: UndoManagerIface_Static
export interface ViewClass_ConstructProps {
}
export interface ViewClass {
}
export interface ViewClass_Static {
    new (config: ViewClass_ConstructProps): ViewClass
}
export declare var ViewClass: ViewClass_Static
export interface ViewPrivate_ConstructProps {
}
export interface ViewPrivate {
}
export interface ViewPrivate_Static {
    new (config: ViewPrivate_ConstructProps): ViewPrivate
}
export declare var ViewPrivate: ViewPrivate_Static