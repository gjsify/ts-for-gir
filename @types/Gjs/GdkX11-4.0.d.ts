/**
 * GdkX11-4.0
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-4.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';

export enum X11DeviceType {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
export function x11_device_get_id(device: X11DeviceXI2): number
export function x11_device_manager_lookup(device_manager: X11DeviceManagerXI2, device_id: number): X11DeviceXI2 | null
export function x11_free_compound_text(ctext: number): void
export function x11_free_text_list(list: string): void
export function x11_get_server_time(surface: X11Surface): number
export function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom
export function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string
export function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display
export function x11_set_sm_client_id(sm_client_id?: string | null): void
export interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
export class X11AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.AppLaunchContext */
    get_display(): Gdk.Display
    set_desktop(desktop: number): void
    set_icon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_timestamp(timestamp: number): void
    /* Methods of Gio.AppLaunchContext */
    get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    get_environment(): string[]
    get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
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
    /* Virtual methods of Gio.AppLaunchContext */
    vfunc_get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launched(info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    connect(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11AppLaunchContext_ConstructProps)
    _init (config?: X11AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceManagerXI2_ConstructProps extends GObject.Object_ConstructProps {
    display?: Gdk.Display
    major?: number
    minor?: number
    opcode?: number
}
export class X11DeviceManagerXI2 {
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
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceManagerXI2_ConstructProps)
    _init (config?: X11DeviceManagerXI2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {
    device_id?: number
}
export class X11DeviceXI2 {
    /* Properties of Gdk.Device */
    readonly caps_lock_state: boolean
    readonly direction: Pango.Direction
    readonly has_bidi_layouts: boolean
    readonly modifier_state: Gdk.ModifierType
    readonly n_axes: number
    readonly num_lock_state: boolean
    readonly scroll_lock_state: boolean
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Device */
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
    /* Signals of Gdk.Device */
    connect(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceXI2_ConstructProps)
    _init (config?: X11DeviceXI2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}
export class X11Display {
    /* Properties of Gdk.Display */
    readonly composited: boolean
    readonly input_shapes: boolean
    readonly rgba: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Display */
    error_trap_pop(): number
    error_trap_pop_ignored(): void
    error_trap_push(): void
    get_default_group(): Gdk.Surface
    get_glx_version(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    get_primary_monitor(): Gdk.Monitor
    get_screen(): X11Screen
    get_startup_notification_id(): string
    get_user_time(): number
    get_xcursor(cursor: Gdk.Cursor): xlib.Cursor
    get_xdisplay(): xlib.Display
    get_xrootwindow(): xlib.Window
    get_xscreen(): xlib.Screen
    grab(): void
    set_cursor_theme(theme: string | null, size: number): void
    set_startup_notification_id(startup_id: string): void
    set_surface_scale(scale: number): void
    string_to_compound_text(str: string): [ /* returnType */ number, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
    text_property_to_text_list(encoding: string, format: number, text: number, length: number, list: string): number
    ungrab(): void
    utf8_to_compound_text(str: string): [ /* returnType */ boolean, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
    /* Methods of Gdk.Display */
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
    get_startup_notification_id(): string | null
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
    /* Signals of GdkX11.X11Display */
    connect(sigName: "xevent", callback: (($obj: X11Display, xevent?: object | null) => boolean)): number
    connect_after(sigName: "xevent", callback: (($obj: X11Display, xevent?: object | null) => boolean)): number
    emit(sigName: "xevent", xevent?: object | null): void
    /* Signals of Gdk.Display */
    connect(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    connect(sigName: "opened", callback: (($obj: X11Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: X11Display) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    connect(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    connect(sigName: "setting-changed", callback: (($obj: X11Display, setting: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: X11Display, setting: string) => void)): number
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static open(display_name?: string | null): Gdk.Display | null
    static open(display_name: string): Gdk.Display | null
    static set_program_class(display: Gdk.Display, program_class: string): void
    static $gtype: GObject.Type
}
export interface X11Drag_ConstructProps extends Gdk.Drag_ConstructProps {
}
export class X11Drag {
    /* Properties of Gdk.Drag */
    actions: Gdk.DragAction
    readonly display: Gdk.Display
    selected_action: Gdk.DragAction
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Drag */
    drop_done(success: boolean): void
    get_actions(): Gdk.DragAction
    get_content(): Gdk.ContentProvider
    get_device(): Gdk.Device
    get_display(): Gdk.Display
    get_drag_surface(): Gdk.Surface | null
    get_formats(): Gdk.ContentFormats
    get_selected_action(): Gdk.DragAction
    get_surface(): Gdk.Surface
    set_hotspot(hot_x: number, hot_y: number): void
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
    /* Signals of Gdk.Drag */
    connect(sigName: "cancel", callback: (($obj: X11Drag, reason: Gdk.DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: X11Drag, reason: Gdk.DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    connect(sigName: "dnd-finished", callback: (($obj: X11Drag) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: X11Drag) => void)): number
    emit(sigName: "dnd-finished"): void
    connect(sigName: "drop-performed", callback: (($obj: X11Drag) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: X11Drag) => void)): number
    emit(sigName: "drop-performed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Drag_ConstructProps)
    _init (config?: X11Drag_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class X11GLContext {
    /* Properties of Gdk.DrawContext */
    readonly display: Gdk.Display
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.GLContext */
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
    /* Methods of Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_frame_region(): cairo.Region | null
    is_in_frame(): boolean
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
    connect(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class X11Monitor {
    /* Properties of Gdk.Monitor */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Monitor */
    get_output(): xlib.XID
    get_workarea(): /* workarea */ Gdk.Rectangle
    /* Methods of Gdk.Monitor */
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
    /* Signals of Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Screen_ConstructProps extends GObject.Object_ConstructProps {
}
export class X11Screen {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Screen */
    get_current_desktop(): number
    get_monitor_output(monitor_num: number): xlib.XID
    get_number_of_desktops(): number
    get_screen_number(): number
    get_window_manager_name(): string
    get_xscreen(): xlib.Screen
    supports_net_wm_hint(property_name: string): boolean
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
    /* Signals of GdkX11.X11Screen */
    connect(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Surface_ConstructProps extends Gdk.Surface_ConstructProps {
}
export class X11Surface {
    /* Properties of Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Surface */
    get_desktop(): number
    get_group(): Gdk.Surface
    get_xid(): xlib.Window
    move_to_current_desktop(): void
    move_to_desktop(desktop: number): void
    set_frame_sync_enabled(frame_sync_enabled: boolean): void
    set_group(leader: Gdk.Surface): void
    set_skip_pager_hint(skips_pager: boolean): void
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    set_theme_variant(variant: string): void
    set_urgency_hint(urgent: boolean): void
    set_user_time(timestamp: number): void
    set_utf8_property(name: string, value?: string | null): void
    /* Methods of Gdk.Surface */
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
    /* Signals of Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: X11Surface, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: X11Surface, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: X11Surface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: X11Surface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: X11Surface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: X11Surface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Surface_ConstructProps)
    _init (config?: X11Surface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Surface
    static $gtype: GObject.Type
}
export abstract class X11AppLaunchContextClass {
    static name: string
}
export abstract class X11DeviceManagerXI2Class {
    static name: string
}
export abstract class X11DeviceXI2Class {
    static name: string
}
export abstract class X11DisplayClass {
    static name: string
}
export abstract class X11DragClass {
    static name: string
}
export abstract class X11GLContextClass {
    static name: string
}
export abstract class X11MonitorClass {
    static name: string
}
export abstract class X11ScreenClass {
    static name: string
}
export abstract class X11SurfaceClass {
    static name: string
}