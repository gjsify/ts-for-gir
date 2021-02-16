/**
 * Vte-2.91
 */

import * as Gjs from './Gjs';
import * as Pango from './Pango-1.0';
import * as cairo from './cairo-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';

export enum CursorBlinkMode {
    SYSTEM,
    ON,
    OFF,
}
export enum CursorShape {
    BLOCK,
    IBEAM,
    UNDERLINE,
}
export enum EraseBinding {
    AUTO,
    ASCII_BACKSPACE,
    ASCII_DELETE,
    DELETE_SEQUENCE,
    TTY,
}
export enum Format {
    TEXT,
    HTML,
}
export enum PtyError {
    PTY_HELPER_FAILED,
    PTY98_FAILED,
}
export enum RegexError {
    INCOMPATIBLE,
    NOT_SUPPORTED,
}
export enum TextBlinkMode {
    NEVER,
    FOCUSED,
    UNFOCUSED,
    ALWAYS,
}
export enum WriteFlags {
    DEFAULT,
}
export enum FeatureFlags {
    FLAG_BIDI,
    FLAG_ICU,
    FLAG_SYSTEMD,
    FLAG_SIXEL,
    FLAGS_MASK,
}
export enum PtyFlags {
    NO_LASTLOG,
    NO_UTMP,
    NO_WTMP,
    NO_HELPER,
    NO_FALLBACK,
    NO_SESSION,
    NO_CTTY,
    DEFAULT,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const REGEX_FLAGS_DEFAULT: number
export const SPAWN_NO_PARENT_ENVV: number
export const SPAWN_NO_SYSTEMD_SCOPE: number
export const SPAWN_REQUIRE_SYSTEMD_SCOPE: number
export const TEST_FLAGS_ALL: number
export const TEST_FLAGS_NONE: number
export function get_encoding_supported(encoding: string): boolean
export function get_encodings(include_aliases: boolean): string[]
export function get_feature_flags(): FeatureFlags
export function get_features(): string
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
export function get_user_shell(): string
export function pty_error_quark(): GLib.Quark
export function regex_error_quark(): GLib.Quark
export interface SelectionFunc {
    (terminal: Terminal, column: number, row: number): boolean
}
export interface TerminalSpawnAsyncCallback {
    (terminal: Terminal, pid: GLib.Pid, error: GLib.Error): void
}
export interface Pty_ConstructProps extends GObject.Object_ConstructProps {
    fd?: number
    flags?: PtyFlags
}
export class Pty {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Vte.Pty */
    child_setup(): void
    close(): void
    get_fd(): number
    get_size(): [ /* returnType */ boolean, /* rows */ number | null, /* columns */ number | null ]
    set_size(rows: number, columns: number): boolean
    set_utf8(utf8: boolean): boolean
    spawn_async(working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    spawn_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* child_pid */ GLib.Pid | null ]
    spawn_with_fds_async(working_directory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, map_fds: number[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Vte.Pty */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pty_ConstructProps)
    _init (config?: Pty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_foreign_sync(fd: number, cancellable?: Gio.Cancellable | null): Pty
    static new_sync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Terminal_ConstructProps extends Gtk.Widget_ConstructProps {
    allow_bold?: boolean
    allow_hyperlink?: boolean
    audible_bell?: boolean
    backspace_binding?: EraseBinding
    bold_is_bright?: boolean
    cell_height_scale?: number
    cell_width_scale?: number
    cjk_ambiguous_width?: number
    cursor_blink_mode?: CursorBlinkMode
    cursor_shape?: CursorShape
    delete_binding?: EraseBinding
    enable_bidi?: boolean
    enable_fallback_scrolling?: boolean
    enable_shaping?: boolean
    enable_sixel?: boolean
    encoding?: string
    font_desc?: Pango.FontDescription
    font_scale?: number
    input_enabled?: boolean
    pointer_autohide?: boolean
    pty?: Pty
    rewrap_on_resize?: boolean
    scroll_on_keystroke?: boolean
    scroll_on_output?: boolean
    scrollback_lines?: number
    text_blink_mode?: TextBlinkMode
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class Terminal {
    /* Properties of Vte.Terminal */
    allow_bold: boolean
    allow_hyperlink: boolean
    audible_bell: boolean
    backspace_binding: EraseBinding
    bold_is_bright: boolean
    cell_height_scale: number
    cell_width_scale: number
    cjk_ambiguous_width: number
    readonly current_directory_uri: string
    readonly current_file_uri: string
    cursor_blink_mode: CursorBlinkMode
    cursor_shape: CursorShape
    delete_binding: EraseBinding
    enable_bidi: boolean
    enable_fallback_scrolling: boolean
    enable_shaping: boolean
    enable_sixel: boolean
    encoding: string
    font_desc: Pango.FontDescription
    font_scale: number
    readonly hyperlink_hover_uri: string
    readonly icon_title: string
    input_enabled: boolean
    pointer_autohide: boolean
    pty: Pty
    rewrap_on_resize: boolean
    scroll_on_keystroke: boolean
    scroll_on_output: boolean
    scrollback_lines: number
    text_blink_mode: TextBlinkMode
    readonly window_title: string
    readonly word_char_exceptions: string
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
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of Vte.Terminal */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Vte.Terminal */
    copy_clipboard(): void
    copy_clipboard_format(format: Format): void
    copy_primary(): void
    event_check_gregex_simple(event: Gdk.Event, regexes: GLib.Regex[], match_flags: GLib.RegexMatchFlags): [ /* returnType */ boolean, /* matches */ string[] ]
    event_check_regex_simple(event: Gdk.Event, regexes: Regex[], match_flags: number): string[] | null
    feed(data: Uint8Array | null): void
    feed_child(text: Uint8Array | null): void
    feed_child_binary(data: Uint8Array | null): void
    get_allow_bold(): boolean
    get_allow_hyperlink(): boolean
    get_audible_bell(): boolean
    get_bold_is_bright(): boolean
    get_cell_height_scale(): number
    get_cell_width_scale(): number
    get_char_height(): number
    get_char_width(): number
    get_cjk_ambiguous_width(): number
    get_color_background_for_draw(): /* color */ Gdk.RGBA
    get_column_count(): number
    get_current_directory_uri(): string | null
    get_current_file_uri(): string | null
    get_cursor_blink_mode(): CursorBlinkMode
    get_cursor_position(): [ /* column */ number | null, /* row */ number | null ]
    get_cursor_shape(): CursorShape
    get_enable_bidi(): boolean
    get_enable_fallback_scrolling(): boolean
    get_enable_shaping(): boolean
    get_enable_sixel(): boolean
    get_encoding(): string | null
    get_font(): Pango.FontDescription
    get_font_scale(): number
    get_geometry_hints(min_rows: number, min_columns: number): /* hints */ Gdk.Geometry
    get_has_selection(): boolean
    get_icon_title(): string | null
    get_input_enabled(): boolean
    get_mouse_autohide(): boolean
    get_pty(): Pty
    get_rewrap_on_resize(): boolean
    get_row_count(): number
    get_scroll_on_keystroke(): boolean
    get_scroll_on_output(): boolean
    get_scrollback_lines(): number
    get_text(is_selected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    get_text_blink_mode(): TextBlinkMode
    get_text_include_trailing_spaces(is_selected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    get_text_range(start_row: number, start_col: number, end_row: number, end_col: number, is_selected?: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    get_window_title(): string | null
    get_word_char_exceptions(): string | null
    hyperlink_check_event(event: Gdk.Event): string | null
    match_add_gregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number
    match_add_regex(regex: Regex, flags: number): number
    match_check(column: number, row: number): [ /* returnType */ string | null, /* tag */ number | null ]
    match_check_event(event: Gdk.Event): [ /* returnType */ string | null, /* tag */ number | null ]
    match_remove(tag: number): void
    match_remove_all(): void
    match_set_cursor(tag: number, cursor?: Gdk.Cursor | null): void
    match_set_cursor_name(tag: number, cursor_name: string): void
    match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType): void
    paste_clipboard(): void
    paste_primary(): void
    pty_new_sync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty
    reset(clear_tabstops: boolean, clear_history: boolean): void
    search_find_next(): boolean
    search_find_previous(): boolean
    search_get_gregex(): GLib.Regex
    search_get_regex(): Regex
    search_get_wrap_around(): boolean
    search_set_gregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void
    search_set_regex(regex: Regex | null, flags: number): void
    search_set_wrap_around(wrap_around: boolean): void
    select_all(): void
    set_allow_bold(allow_bold: boolean): void
    set_allow_hyperlink(allow_hyperlink: boolean): void
    set_audible_bell(is_audible: boolean): void
    set_backspace_binding(binding: EraseBinding): void
    set_bold_is_bright(bold_is_bright: boolean): void
    set_cell_height_scale(scale: number): void
    set_cell_width_scale(scale: number): void
    set_cjk_ambiguous_width(width: number): void
    set_clear_background(setting: boolean): void
    set_color_background(background: Gdk.RGBA): void
    set_color_bold(bold?: Gdk.RGBA | null): void
    set_color_cursor(cursor_background?: Gdk.RGBA | null): void
    set_color_cursor_foreground(cursor_foreground?: Gdk.RGBA | null): void
    set_color_foreground(foreground: Gdk.RGBA): void
    set_color_highlight(highlight_background?: Gdk.RGBA | null): void
    set_color_highlight_foreground(highlight_foreground?: Gdk.RGBA | null): void
    set_colors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null): void
    set_cursor_blink_mode(mode: CursorBlinkMode): void
    set_cursor_shape(shape: CursorShape): void
    set_default_colors(): void
    set_delete_binding(binding: EraseBinding): void
    set_enable_bidi(enable_bidi: boolean): void
    set_enable_fallback_scrolling(enable: boolean): void
    set_enable_shaping(enable_shaping: boolean): void
    set_enable_sixel(enabled: boolean): void
    set_encoding(codeset?: string | null): boolean
    set_font(font_desc?: Pango.FontDescription | null): void
    set_font_scale(scale: number): void
    set_geometry_hints_for_window(window: Gtk.Window): void
    set_input_enabled(enabled: boolean): void
    set_mouse_autohide(setting: boolean): void
    set_pty(pty?: Pty | null): void
    set_rewrap_on_resize(rewrap: boolean): void
    set_scroll_on_keystroke(scroll: boolean): void
    set_scroll_on_output(scroll: boolean): void
    set_scrollback_lines(lines: number): void
    set_size(columns: number, rows: number): void
    set_text_blink_mode(text_blink_mode: TextBlinkMode): void
    set_word_char_exceptions(exceptions: string): void
    spawn_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    spawn_sync(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup?: GLib.SpawnChildSetupFunc | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* child_pid */ GLib.Pid | null ]
    spawn_with_fds_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, map_fds: number[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable?: Gio.Cancellable | null): void
    unselect_all(): void
    watch_child(child_pid: GLib.Pid): void
    write_contents_sync(stream: Gio.OutputStream, flags: WriteFlags, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Vte.Terminal */
    vfunc_bell(): void
    vfunc_char_size_changed(char_width: number, char_height: number): void
    vfunc_child_exited(status: number): void
    vfunc_commit(text: string, size: number): void
    vfunc_contents_changed(): void
    vfunc_copy_clipboard(): void
    vfunc_cursor_moved(): void
    vfunc_decrease_font_size(): void
    vfunc_deiconify_window(): void
    vfunc_encoding_changed(): void
    vfunc_eof(): void
    vfunc_icon_title_changed(): void
    vfunc_iconify_window(): void
    vfunc_increase_font_size(): void
    vfunc_lower_window(): void
    vfunc_maximize_window(): void
    vfunc_move_window(x: number, y: number): void
    vfunc_paste_clipboard(): void
    vfunc_raise_window(): void
    vfunc_refresh_window(): void
    vfunc_resize_window(width: number, height: number): void
    vfunc_restore_window(): void
    vfunc_selection_changed(): void
    vfunc_text_deleted(): void
    vfunc_text_inserted(): void
    vfunc_text_modified(): void
    vfunc_text_scrolled(delta: number): void
    vfunc_window_title_changed(): void
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
    /* Signals of Vte.Terminal */
    connect(sigName: "bell", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "bell", callback: (($obj: Terminal) => void)): number
    emit(sigName: "bell"): void
    connect(sigName: "char-size-changed", callback: (($obj: Terminal, width: number, height: number) => void)): number
    connect_after(sigName: "char-size-changed", callback: (($obj: Terminal, width: number, height: number) => void)): number
    emit(sigName: "char-size-changed", width: number, height: number): void
    connect(sigName: "child-exited", callback: (($obj: Terminal, status: number) => void)): number
    connect_after(sigName: "child-exited", callback: (($obj: Terminal, status: number) => void)): number
    emit(sigName: "child-exited", status: number): void
    connect(sigName: "commit", callback: (($obj: Terminal, text: string, size: number) => void)): number
    connect_after(sigName: "commit", callback: (($obj: Terminal, text: string, size: number) => void)): number
    emit(sigName: "commit", text: string, size: number): void
    connect(sigName: "contents-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "contents-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "contents-changed"): void
    connect(sigName: "copy-clipboard", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: Terminal) => void)): number
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "current-directory-uri-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "current-directory-uri-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "current-directory-uri-changed"): void
    connect(sigName: "current-file-uri-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "current-file-uri-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "current-file-uri-changed"): void
    connect(sigName: "cursor-moved", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Terminal) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "decrease-font-size", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "decrease-font-size", callback: (($obj: Terminal) => void)): number
    emit(sigName: "decrease-font-size"): void
    connect(sigName: "deiconify-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "deiconify-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "deiconify-window"): void
    connect(sigName: "encoding-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "encoding-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "encoding-changed"): void
    connect(sigName: "eof", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "eof", callback: (($obj: Terminal) => void)): number
    emit(sigName: "eof"): void
    connect(sigName: "hyperlink-hover-uri-changed", callback: (($obj: Terminal, uri: string, bbox: Gdk.Rectangle) => void)): number
    connect_after(sigName: "hyperlink-hover-uri-changed", callback: (($obj: Terminal, uri: string, bbox: Gdk.Rectangle) => void)): number
    emit(sigName: "hyperlink-hover-uri-changed", uri: string, bbox: Gdk.Rectangle): void
    connect(sigName: "icon-title-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "icon-title-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "icon-title-changed"): void
    connect(sigName: "iconify-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "iconify-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "iconify-window"): void
    connect(sigName: "increase-font-size", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "increase-font-size", callback: (($obj: Terminal) => void)): number
    emit(sigName: "increase-font-size"): void
    connect(sigName: "lower-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "lower-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "lower-window"): void
    connect(sigName: "maximize-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "maximize-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "maximize-window"): void
    connect(sigName: "move-window", callback: (($obj: Terminal, x: number, y: number) => void)): number
    connect_after(sigName: "move-window", callback: (($obj: Terminal, x: number, y: number) => void)): number
    emit(sigName: "move-window", x: number, y: number): void
    connect(sigName: "paste-clipboard", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: Terminal) => void)): number
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "raise-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "raise-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "raise-window"): void
    connect(sigName: "refresh-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "refresh-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "refresh-window"): void
    connect(sigName: "resize-window", callback: (($obj: Terminal, width: number, height: number) => void)): number
    connect_after(sigName: "resize-window", callback: (($obj: Terminal, width: number, height: number) => void)): number
    emit(sigName: "resize-window", width: number, height: number): void
    connect(sigName: "restore-window", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "restore-window", callback: (($obj: Terminal) => void)): number
    emit(sigName: "restore-window"): void
    connect(sigName: "selection-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "selection-changed"): void
    connect(sigName: "text-deleted", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "text-deleted", callback: (($obj: Terminal) => void)): number
    emit(sigName: "text-deleted"): void
    connect(sigName: "text-inserted", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "text-inserted", callback: (($obj: Terminal) => void)): number
    emit(sigName: "text-inserted"): void
    connect(sigName: "text-modified", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "text-modified", callback: (($obj: Terminal) => void)): number
    emit(sigName: "text-modified"): void
    connect(sigName: "text-scrolled", callback: (($obj: Terminal, delta: number) => void)): number
    connect_after(sigName: "text-scrolled", callback: (($obj: Terminal, delta: number) => void)): number
    emit(sigName: "text-scrolled", delta: number): void
    connect(sigName: "window-title-changed", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "window-title-changed", callback: (($obj: Terminal) => void)): number
    emit(sigName: "window-title-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Terminal) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Terminal, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Terminal, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Terminal) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Terminal, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "map", callback: (($obj: Terminal) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Terminal, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Terminal, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Terminal, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Terminal, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Terminal, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Terminal) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "show", callback: (($obj: Terminal) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Terminal, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Terminal, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Terminal) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Terminal) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Terminal) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-bold", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-bold", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-hyperlink", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-hyperlink", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audible-bell", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audible-bell", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backspace-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backspace-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bold-is-bright", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bold-is-bright", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-height-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-height-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-width-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-width-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cjk-ambiguous-width", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cjk-ambiguous-width", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-directory-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-directory-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-file-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-file-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-shape", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-shape", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delete-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-bidi", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-bidi", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-fallback-scrolling", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fallback-scrolling", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-shaping", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-shaping", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-sixel", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-sixel", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encoding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hyperlink-hover-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hyperlink-hover-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-enabled", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-enabled", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-autohide", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-autohide", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pty", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pty", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rewrap-on-resize", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rewrap-on-resize", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-on-keystroke", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-keystroke", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-on-output", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-output", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scrollback-lines", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollback-lines", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::word-char-exceptions", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::word-char-exceptions", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Terminal_ConstructProps)
    _init (config?: Terminal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Terminal
    static $gtype: GObject.Type
}
export class CharAttributes {
    static name: string
}
export abstract class PtyClass {
    static name: string
}
export class Regex {
    /* Methods of Vte.Regex */
    jit(flags: number): boolean
    ref(): Regex
    substitute(subject: string, replacement: string, flags: number): string
    unref(): Regex
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_match(pattern: string, pattern_length: number, flags: number): Regex
    static new_for_search(pattern: string, pattern_length: number, flags: number): Regex
}
export abstract class TerminalClass {
    /* Fields of Vte.TerminalClass */
    parent_class: Gtk.WidgetClass
    eof: (terminal: Terminal) => void
    child_exited: (terminal: Terminal, status: number) => void
    encoding_changed: (terminal: Terminal) => void
    char_size_changed: (terminal: Terminal, char_width: number, char_height: number) => void
    window_title_changed: (terminal: Terminal) => void
    icon_title_changed: (terminal: Terminal) => void
    selection_changed: (terminal: Terminal) => void
    contents_changed: (terminal: Terminal) => void
    cursor_moved: (terminal: Terminal) => void
    commit: (terminal: Terminal, text: string, size: number) => void
    deiconify_window: (terminal: Terminal) => void
    iconify_window: (terminal: Terminal) => void
    raise_window: (terminal: Terminal) => void
    lower_window: (terminal: Terminal) => void
    refresh_window: (terminal: Terminal) => void
    restore_window: (terminal: Terminal) => void
    maximize_window: (terminal: Terminal) => void
    resize_window: (terminal: Terminal, width: number, height: number) => void
    move_window: (terminal: Terminal, x: number, y: number) => void
    increase_font_size: (terminal: Terminal) => void
    decrease_font_size: (terminal: Terminal) => void
    text_modified: (terminal: Terminal) => void
    text_inserted: (terminal: Terminal) => void
    text_deleted: (terminal: Terminal) => void
    text_scrolled: (terminal: Terminal, delta: number) => void
    copy_clipboard: (terminal: Terminal) => void
    paste_clipboard: (terminal: Terminal) => void
    bell: (terminal: Terminal) => void
    padding: object[]
    priv: TerminalClassPrivate
    static name: string
}
export class TerminalClassPrivate {
    static name: string
}