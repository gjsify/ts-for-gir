/**
 * GtkVnc-2.0
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';
import type * as GVnc from './GVnc-1.0';

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
    /* Properties of GVnc-1.0.GVnc.BaseFramebuffer */
    color_map: GVnc.ColorMap
    /* Fields of GtkVnc-2.0.GtkVnc.CairoFramebuffer */
    parent: GVnc.BaseFramebuffer
    priv: CairoFramebufferPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkVnc-2.0.GtkVnc.CairoFramebuffer */
    get_surface(): cairo.Surface
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: Uint8Array[], x: number, y: number, width: number, height: number): void
    get_buffer(): Uint8Array[]
    get_height(): number
    get_local_format(): GVnc.PixelFormat
    get_remote_format(): GVnc.PixelFormat
    get_rowstride(): number
    get_width(): number
    perfect_format_match(): boolean
    rgb24_blt(src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number): void
    set_color_map(map: GVnc.ColorMap): void
    set_pixel_at(src: Uint8Array[], x: number, y: number): void
    /* Virtual methods of GtkVnc-2.0.GtkVnc.CairoFramebuffer */
    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfunc_fill(src: Uint8Array[], x: number, y: number, width: number, height: number): void
    vfunc_get_buffer(): number
    vfunc_get_height(): number
    vfunc_get_local_format(): GVnc.PixelFormat
    vfunc_get_remote_format(): GVnc.PixelFormat
    vfunc_get_rowstride(): number
    vfunc_get_width(): number
    vfunc_perfect_format_match(): boolean
    vfunc_rgb24_blt(src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_set_color_map(map: GVnc.ColorMap): void
    vfunc_set_pixel_at(src: Uint8Array[], x: number, y: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    static new(buffer: Uint8Array[], width: number, height: number, rowstride: number, localFormat: GVnc.PixelFormat, remoteFormat: GVnc.PixelFormat): CairoFramebuffer
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
    /* Properties of GtkVnc-2.0.GtkVnc.Display */
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
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focus_on_click: boolean
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    is_focus: boolean
    margin: number
    margin_bottom: number
    margin_end: number
    margin_left: number
    margin_right: number
    margin_start: number
    margin_top: number
    no_show_all: boolean
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    readonly scale_factor: number
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Fields of GtkVnc-2.0.GtkVnc.Display */
    priv: DisplayPrivate
    /* Fields of Gtk-3.0.Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkVnc-2.0.GtkVnc.Display */
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
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
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
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
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
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
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
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
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
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function[]
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
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
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
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
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
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
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of GtkVnc-2.0.GtkVnc.Display */
    vfunc_vnc_auth_credential(credList: GObject.ValueArray): void
    vfunc_vnc_connected(): void
    vfunc_vnc_disconnected(): void
    vfunc_vnc_initialized(): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_get_name(): string
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GtkVnc-2.0.GtkVnc.Display */
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
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Display, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Display, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Display, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Display, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Display, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Display, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: Display, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Display, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Display, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Display, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Display, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Display, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: Display, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Display, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: Display) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Display) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: Display, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Display, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Display, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Display, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Display, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Display, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Display, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Display, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Display, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Display, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Display, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Display, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Display, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Display, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Display, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Display, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Display, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Display, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Display, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Display, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Display, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Display, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: Display, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Display, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: Display, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Display, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Display, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Display, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Display, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Display, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Display, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Display, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Display, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Display, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Display, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Display, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Display) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Display) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Display, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Display, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Display) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Display) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Display, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Display, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Display, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Display, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Display, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Display, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Display, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Display, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Display, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Display) => void)): number
    connect_after(sigName: "map", callback: (($obj: Display) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Display, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Display, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Display, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Display, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Display, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Display, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Display, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Display, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: Display, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Display, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Display) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Display) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Display, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Display, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Display, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Display, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Display, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Display, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Display, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Display, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Display) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Display) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Display, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Display, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Display, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Display, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Display, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Display, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Display, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Display, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Display, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Display, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Display, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Display, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Display, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Display, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Display) => void)): number
    connect_after(sigName: "show", callback: (($obj: Display) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Display, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Display, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Display, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Display, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: Display, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Display, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: Display, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Display, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: Display, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Display, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: Display) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: Display) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Display, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Display, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: Display) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Display) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Display, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Display, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Display) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Display) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Display, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Display, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Display, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Display, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
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
    connect(sigName: "notify::app-paintable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::is-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GtkVnc-2.0.GtkVnc.CairoFramebufferClass */
    parent_class: GVnc.BaseFramebufferClass
    _vnc_reserved: object[]
    static name: string
}
export class CairoFramebufferPrivate {
    static name: string
}
export abstract class DisplayClass {
    /* Fields of GtkVnc-2.0.GtkVnc.DisplayClass */
    parent_class: Gtk.DrawingAreaClass
    vnc_connected: (display: Display) => void
    vnc_initialized: (display: Display) => void
    vnc_disconnected: (display: Display) => void
    vnc_auth_credential: any
    static name: string
}
export class DisplayPrivate {
    static name: string
}
export class GrabSequence {
    /* Fields of GtkVnc-2.0.GtkVnc.GrabSequence */
    nkeysyms: number
    keysyms: number
    /* Methods of GtkVnc-2.0.GtkVnc.GrabSequence */
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