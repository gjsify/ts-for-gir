/**
 * GtkVnc-2.0
 */

import * as Gjs from './Gjs';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';
import * as GVnc from './GVnc-1.0';

export enum DisplayCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
export enum DisplayDepthColor {
    DEFAULT,
    FULL,
    MEDIUM,
    LOW,
    ULTRA_LOW,
}
export enum DisplayKeyEvent {
    PRESS,
    RELEASE,
    CLICK,
}
export interface CairoFramebuffer_ConstructProps extends GVnc.BaseFramebuffer_ConstructProps {
    surface?: object
}
export class CairoFramebuffer {
    /* Properties of GVnc.BaseFramebuffer */
    color_map: GVnc.ColorMap
    /* Fields of GtkVnc.CairoFramebuffer */
    parent: GVnc.BaseFramebuffer
    priv: CairoFramebufferPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkVnc.CairoFramebuffer */
    get_surface(): cairo.Surface
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
    /* Methods of GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    get_buffer(): Uint8Array
    get_height(): number
    get_local_format(): GVnc.PixelFormat
    get_remote_format(): GVnc.PixelFormat
    get_rowstride(): number
    get_width(): number
    perfect_format_match(): boolean
    rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    set_color_map(map: GVnc.ColorMap): void
    set_pixel_at(src: Uint8Array, x: number, y: number): void
    /* Virtual methods of GtkVnc.CairoFramebuffer */
    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    vfunc_get_buffer(): number
    vfunc_get_height(): number
    vfunc_get_local_format(): GVnc.PixelFormat
    vfunc_get_remote_format(): GVnc.PixelFormat
    vfunc_get_rowstride(): number
    vfunc_get_width(): number
    vfunc_perfect_format_match(): boolean
    vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_set_color_map(map: GVnc.ColorMap): void
    vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color-map", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CairoFramebuffer_ConstructProps)
    _init (config?: CairoFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer
    static new(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: GVnc.PixelFormat, remoteFormat: GVnc.PixelFormat): CairoFramebuffer
    static $gtype: GObject.Type
}
export interface Display_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    allow_resize?: boolean
    depth?: DisplayDepthColor
    force_size?: boolean
    grab_keyboard?: boolean
    grab_keys?: GrabSequence
    grab_pointer?: boolean
    local_pointer?: boolean
    lossy_encoding?: boolean
    read_only?: boolean
    scaling?: boolean
    shared_flag?: boolean
    smoothing?: boolean
}
export class Display {
    /* Properties of GtkVnc.Display */
    allow_resize: boolean
    readonly connection: GVnc.Connection
    depth: DisplayDepthColor
    force_size: boolean
    grab_keyboard: boolean
    grab_keys: GrabSequence
    grab_pointer: boolean
    readonly height: number
    local_pointer: boolean
    lossy_encoding: boolean
    readonly name: string
    read_only: boolean
    scaling: boolean
    shared_flag: boolean
    smoothing: boolean
    readonly width: number
    /* Properties of Gtk.DrawingArea */
    content_height: number
    content_width: number
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
    /* Fields of GtkVnc.Display */
    priv: DisplayPrivate
    /* Fields of Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkVnc.Display */
    client_cut_text(text: string): void
    close(): void
    force_grab(enable: boolean): void
    get_allow_resize(): boolean
    get_connection(): GVnc.Connection
    get_depth(): DisplayDepthColor
    get_force_size(): boolean
    get_grab_keys(): GrabSequence
    get_height(): number
    get_keyboard_grab(): boolean
    get_lossy_encoding(): boolean
    get_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_pointer_grab(): boolean
    get_pointer_local(): boolean
    get_read_only(): boolean
    get_scaling(): boolean
    get_shared_flag(): boolean
    get_smoothing(): boolean
    get_width(): number
    is_open(): boolean
    is_pointer_absolute(): boolean
    open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean
    open_fd(fd: number): boolean
    open_fd_with_hostname(fd: number, hostname?: string | null): boolean
    open_host(host: string, port: string): boolean
    request_update(): boolean
    send_keys(keyvals: number[]): void
    send_keys_ex(keyvals: number[], kind: DisplayKeyEvent): void
    send_pointer(x: number, y: number, button_mask: number): void
    set_allow_resize(enable: boolean): void
    set_credential(type: number, data: string): boolean
    set_depth(depth: DisplayDepthColor): void
    set_force_size(enable: boolean): void
    set_grab_keys(seq: GrabSequence): void
    set_keyboard_grab(enable: boolean): void
    set_lossy_encoding(enable: boolean): void
    set_pointer_grab(enable: boolean): void
    set_pointer_local(enable: boolean): void
    set_read_only(enable: boolean): void
    set_scaling(enable: boolean): boolean
    set_shared_flag(shared: boolean): void
    set_smoothing(enable: boolean): void
    /* Methods of Gtk.DrawingArea */
    get_content_height(): number
    get_content_width(): number
    set_content_height(height: number): void
    set_content_width(width: number): void
    set_draw_func(draw_func: Gtk.DrawingAreaDrawFunc | null): void
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
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
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
    /* Virtual methods of GtkVnc.Display */
    vfunc_vnc_auth_credential(credList: GObject.ValueArray): void
    vfunc_vnc_connected(): void
    vfunc_vnc_disconnected(): void
    vfunc_vnc_initialized(): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.DrawingArea */
    vfunc_resize(width: number, height: number): void
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
    /* Signals of GtkVnc.Display */
    connect(sigName: "vnc-auth-credential", callback: (($obj: Display, object: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-credential", callback: (($obj: Display, object: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-failure", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-auth-failure", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-auth-failure", object: string): void
    connect(sigName: "vnc-auth-unsupported", callback: (($obj: Display, object: number) => void)): number
    connect_after(sigName: "vnc-auth-unsupported", callback: (($obj: Display, object: number) => void)): number
    emit(sigName: "vnc-auth-unsupported", object: number): void
    connect(sigName: "vnc-bell", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-bell", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-bell"): void
    connect(sigName: "vnc-connected", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-connected", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-connected"): void
    connect(sigName: "vnc-desktop-rename", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-desktop-rename", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-desktop-rename", object: string): void
    connect(sigName: "vnc-desktop-resize", callback: (($obj: Display, object: number, p0: number) => void)): number
    connect_after(sigName: "vnc-desktop-resize", callback: (($obj: Display, object: number, p0: number) => void)): number
    emit(sigName: "vnc-desktop-resize", object: number, p0: number): void
    connect(sigName: "vnc-disconnected", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-disconnected", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-disconnected"): void
    connect(sigName: "vnc-error", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-error", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-error", object: string): void
    connect(sigName: "vnc-initialized", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-initialized", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-initialized"): void
    connect(sigName: "vnc-keyboard-grab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-keyboard-grab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-keyboard-grab"): void
    connect(sigName: "vnc-keyboard-ungrab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-keyboard-ungrab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-keyboard-ungrab"): void
    connect(sigName: "vnc-pointer-grab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-pointer-grab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-pointer-grab"): void
    connect(sigName: "vnc-pointer-ungrab", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-pointer-ungrab", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-pointer-ungrab"): void
    connect(sigName: "vnc-power-control-failed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-power-control-failed", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-power-control-failed"): void
    connect(sigName: "vnc-power-control-initialized", callback: (($obj: Display) => void)): number
    connect_after(sigName: "vnc-power-control-initialized", callback: (($obj: Display) => void)): number
    emit(sigName: "vnc-power-control-initialized"): void
    connect(sigName: "vnc-server-cut-text", callback: (($obj: Display, object: string) => void)): number
    connect_after(sigName: "vnc-server-cut-text", callback: (($obj: Display, object: string) => void)): number
    emit(sigName: "vnc-server-cut-text", object: string): void
    /* Signals of Gtk.DrawingArea */
    connect(sigName: "resize", callback: (($obj: Display, width: number, height: number) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Display, width: number, height: number) => void)): number
    emit(sigName: "resize", width: number, height: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Display) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Display) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Display, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Display, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Display) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Display) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Display) => void)): number
    connect_after(sigName: "map", callback: (($obj: Display) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Display, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Display, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Display, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Display, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Display, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Display, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Display) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Display) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Display) => void)): number
    connect_after(sigName: "show", callback: (($obj: Display) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Display, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Display, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Display) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Display) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Display) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Display) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-resize", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-resize", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::force-size", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-size", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::grab-keys", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keys", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::grab-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lossy-encoding", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lossy-encoding", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-flag", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-flag", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smoothing", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smoothing", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Display
    static get_option_entries(): GLib.OptionEntry[]
    static get_option_group(): GLib.OptionGroup
    static $gtype: GObject.Type
}
export abstract class CairoFramebufferClass {
    /* Fields of GtkVnc.CairoFramebufferClass */
    parent_class: GVnc.BaseFramebufferClass
    _vnc_reserved: object[]
    static name: string
}
export class CairoFramebufferPrivate {
    static name: string
}
export abstract class DisplayClass {
    /* Fields of GtkVnc.DisplayClass */
    parent_class: Gtk.DrawingAreaClass
    vnc_connected: (display: Display) => void
    vnc_initialized: (display: Display) => void
    vnc_disconnected: (display: Display) => void
    vnc_auth_credential: (display: Display, credList: GObject.ValueArray) => void
    static name: string
}
export class DisplayPrivate {
    static name: string
}
export class GrabSequence {
    /* Fields of GtkVnc.GrabSequence */
    nkeysyms: number
    keysyms: number
    /* Methods of GtkVnc.GrabSequence */
    as_string(): string
    copy(): GrabSequence
    free(): void
    get_nth(n: number): number
    static name: string
    static new(keysyms: number[]): GrabSequence
    constructor(keysyms: number[])
    /* Static methods and pseudo-constructors */
    static new(keysyms: number[]): GrabSequence
    static new_from_string(str: string): GrabSequence
}