/**
 * GdkWayland-4.0
 */

import type * as Gjs from './Gjs';
import type * as Gdk from './Gdk-4.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

export interface WaylandToplevelExported {
    (toplevel: WaylandToplevel, handle: string): void
}
export interface WaylandDevice_ConstructProps extends Gdk.Device_ConstructProps {
}
export class WaylandDevice {
    /* Properties of Gdk-4.0.Gdk.Device */
    readonly caps_lock_state: boolean
    readonly direction: Pango.Direction
    readonly has_bidi_layouts: boolean
    readonly modifier_state: Gdk.ModifierType
    readonly n_axes: number
    readonly num_lock_state: boolean
    readonly scroll_lock_state: boolean
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandDevice */
    get_node_path(): string | null
    /* Methods of Gdk-4.0.Gdk.Device */
    get_caps_lock_state(): boolean
    get_device_tool(): Gdk.DeviceTool
    get_direction(): Pango.Direction
    get_display(): Gdk.Display
    get_has_cursor(): boolean
    get_modifier_state(): Gdk.ModifierType
    get_name(): string
    get_num_lock_state(): boolean
    get_num_touches(): number
    get_product_id(): string | null
    get_scroll_lock_state(): boolean
    get_seat(): Gdk.Seat
    get_source(): Gdk.InputSource
    get_surface_at_position(): [ /* returnType */ Gdk.Surface | null, /* win_x */ number | null, /* win_y */ number | null ]
    get_vendor_id(): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Device */
    connect(sigName: "changed", callback: (($obj: WaylandDevice) => void)): number
    connect_after(sigName: "changed", callback: (($obj: WaylandDevice) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: WaylandDevice, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: WaylandDevice, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandDevice_ConstructProps)
    _init (config?: WaylandDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandDisplay_ConstructProps extends Gdk.Display_ConstructProps {
}
export class WaylandDisplay {
    /* Properties of Gdk-4.0.Gdk.Display */
    readonly composited: boolean
    readonly input_shapes: boolean
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandDisplay */
    get_startup_notification_id(): string | null
    query_registry(global: string): boolean
    set_cursor_theme(name: string, size: number): void
    set_startup_notification_id(startup_id: string): void
    /* Methods of Gdk-4.0.Gdk.Display */
    beep(): void
    close(): void
    device_is_grabbed(device: Gdk.Device): boolean
    flush(): void
    get_app_launch_context(): Gdk.AppLaunchContext
    get_clipboard(): Gdk.Clipboard
    get_default_seat(): Gdk.Seat | null
    get_monitor_at_surface(surface: Gdk.Surface): Gdk.Monitor
    get_monitors(): Gio.ListModel
    get_name(): string
    get_primary_clipboard(): Gdk.Clipboard
    get_setting(name: string, value: any): boolean
    is_closed(): boolean
    is_composited(): boolean
    is_rgba(): boolean
    list_seats(): Gdk.Seat[]
    map_keycode(keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    map_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    notify_startup_complete(startup_id: string): void
    put_event(event: Gdk.Event): void
    supports_input_shapes(): boolean
    sync(): void
    translate_key(keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed */ Gdk.ModifierType | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Display */
    connect(sigName: "closed", callback: (($obj: WaylandDisplay, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WaylandDisplay, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    connect(sigName: "opened", callback: (($obj: WaylandDisplay) => void)): number
    connect_after(sigName: "opened", callback: (($obj: WaylandDisplay) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    connect(sigName: "seat-removed", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    connect(sigName: "setting-changed", callback: (($obj: WaylandDisplay, setting: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: WaylandDisplay, setting: string) => void)): number
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandDisplay_ConstructProps)
    _init (config?: WaylandDisplay_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandGLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class WaylandGLContext {
    /* Properties of Gdk-4.0.Gdk.DrawContext */
    readonly display: Gdk.Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    get_debug_enabled(): boolean
    get_display(): Gdk.Display | null
    get_forward_compatible(): boolean
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    get_shared_context(): Gdk.GLContext | null
    get_surface(): Gdk.Surface | null
    get_use_es(): boolean
    get_version(): [ /* major */ number, /* minor */ number ]
    is_legacy(): boolean
    make_current(): void
    realize(): boolean
    set_debug_enabled(enabled: boolean): void
    set_forward_compatible(compatible: boolean): void
    set_required_version(major: number, minor: number): void
    set_use_es(use_es: number): void
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_frame_region(): cairo.Region | null
    is_in_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandGLContext_ConstructProps)
    _init (config?: WaylandGLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandMonitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class WaylandMonitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
    readonly connector: string
    readonly geometry: Gdk.Rectangle
    readonly height_mm: number
    readonly manufacturer: string
    readonly model: string
    readonly refresh_rate: number
    readonly scale_factor: number
    readonly subpixel_layout: Gdk.SubpixelLayout
    readonly valid: boolean
    readonly width_mm: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Monitor */
    get_connector(): string | null
    get_display(): Gdk.Display
    get_geometry(): /* geometry */ Gdk.Rectangle
    get_height_mm(): number
    get_manufacturer(): string | null
    get_model(): string | null
    get_refresh_rate(): number
    get_scale_factor(): number
    get_subpixel_layout(): Gdk.SubpixelLayout
    get_width_mm(): number
    is_valid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: WaylandMonitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: WaylandMonitor) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandMonitor_ConstructProps)
    _init (config?: WaylandMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandPopup_ConstructProps extends WaylandSurface_ConstructProps {
    autohide?: boolean
    parent?: Gdk.Surface
}
export class WaylandPopup {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): Gdk.CairoContext
    create_gl_context(): Gdk.GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): Gdk.VulkanContext
    destroy(): void
    get_cursor(): Gdk.Cursor | null
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_frame_clock(): Gdk.FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Popup */
    get_autohide(): boolean
    get_parent(): Gdk.Surface
    get_position_x(): number
    get_position_y(): number
    get_rect_anchor(): Gdk.Gravity
    get_surface_anchor(): Gdk.Gravity
    present(width: number, height: number, layout: Gdk.PopupLayout): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandPopup, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WaylandPopup, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandPopup, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: WaylandPopup, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandPopup, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: WaylandPopup, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandPopup_ConstructProps)
    _init (config?: WaylandPopup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandSeat_ConstructProps extends Gdk.Seat_ConstructProps {
}
export class WaylandSeat {
    /* Fields of Gdk-4.0.Gdk.Seat */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Seat */
    get_capabilities(): Gdk.SeatCapabilities
    get_devices(capabilities: Gdk.SeatCapabilities): Gdk.Device[]
    get_display(): Gdk.Display
    get_keyboard(): Gdk.Device | null
    get_pointer(): Gdk.Device | null
    get_tools(): Gdk.DeviceTool[]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Seat */
    connect(sigName: "device-added", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    connect(sigName: "device-removed", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
    connect(sigName: "tool-added", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-added", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-added", tool: Gdk.DeviceTool): void
    connect(sigName: "tool-removed", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-removed", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-removed", tool: Gdk.DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandSeat_ConstructProps)
    _init (config?: WaylandSeat_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandSurface_ConstructProps extends Gdk.Surface_ConstructProps {
}
export class WaylandSurface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): Gdk.CairoContext
    create_gl_context(): Gdk.GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): Gdk.VulkanContext
    destroy(): void
    get_cursor(): Gdk.Cursor | null
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_frame_clock(): Gdk.FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandSurface, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WaylandSurface, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandSurface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: WaylandSurface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandSurface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: WaylandSurface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandSurface_ConstructProps)
    _init (config?: WaylandSurface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandToplevel_ConstructProps extends WaylandSurface_ConstructProps {
    decorated?: boolean
    deletable?: boolean
    fullscreen_mode?: Gdk.FullscreenMode
    icon_list?: object
    modal?: boolean
    startup_id?: string
    title?: string
    transient_for?: Gdk.Surface
}
export class WaylandToplevel {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Properties of Gdk-4.0.Gdk.Toplevel */
    decorated: boolean
    deletable: boolean
    fullscreen_mode: Gdk.FullscreenMode
    icon_list: object
    modal: boolean
    readonly shortcuts_inhibited: boolean
    startup_id: string
    readonly state: Gdk.ToplevelState
    title: string
    transient_for: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandToplevel */
    export_handle(callback: WaylandToplevelExported): boolean
    set_application_id(application_id: string): void
    set_transient_for_exported(parent_handle_str: string): boolean
    unexport_handle(): void
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): Gdk.CairoContext
    create_gl_context(): Gdk.GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): Gdk.VulkanContext
    destroy(): void
    get_cursor(): Gdk.Cursor | null
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_frame_clock(): Gdk.FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Toplevel */
    begin_move(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void
    begin_resize(edge: Gdk.SurfaceEdge, device: Gdk.Device | null, button: number, x: number, y: number, timestamp: number): void
    focus(timestamp: number): void
    get_state(): Gdk.ToplevelState
    inhibit_system_shortcuts(event?: Gdk.Event | null): void
    lower(): boolean
    minimize(): boolean
    present(layout: Gdk.ToplevelLayout): void
    restore_system_shortcuts(): void
    set_decorated(decorated: boolean): void
    set_deletable(deletable: boolean): void
    set_icon_list(surfaces: Gdk.Texture[]): void
    set_modal(modal: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title: string): void
    set_transient_for(parent: Gdk.Surface): void
    show_window_menu(event: Gdk.Event): boolean
    supports_edge_constraints(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandToplevel, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WaylandToplevel, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandToplevel, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: WaylandToplevel, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandToplevel, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: WaylandToplevel, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Toplevel */
    connect(sigName: "compute-size", callback: (($obj: WaylandToplevel) => void)): number
    connect_after(sigName: "compute-size", callback: (($obj: WaylandToplevel) => void)): number
    emit(sigName: "compute-size"): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandToplevel_ConstructProps)
    _init (config?: WaylandToplevel_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class WaylandDeviceClass {
    static name: string
}
export abstract class WaylandDisplayClass {
    static name: string
}
export abstract class WaylandGLContextClass {
    static name: string
}
export abstract class WaylandMonitorClass {
    static name: string
}
export abstract class WaylandSeatClass {
    static name: string
}