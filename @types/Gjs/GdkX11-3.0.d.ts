/**
 * GdkX11-3.0
 */

import type * as Gjs from './Gjs';
import type * as xlib from './xlib-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Gdk from './Gdk-3.0';

export function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom
export function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom
export function x11_device_get_id(device: X11DeviceCore): number
export function x11_device_manager_lookup(device_manager: X11DeviceManagerCore, device_id: number): X11DeviceCore | null
export function x11_free_compound_text(ctext: number): void
export function x11_free_text_list(list: string): void
export function x11_get_default_root_xwindow(): xlib.Window
export function x11_get_default_screen(): number
export function x11_get_default_xdisplay(): xlib.Display
export function x11_get_parent_relative_pattern(): cairo.Pattern
export function x11_get_server_time(window: X11Window): number
export function x11_get_xatom_by_name(atom_name: string): xlib.Atom
export function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom
export function x11_get_xatom_name(xatom: xlib.Atom): string
export function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string
export function x11_grab_server(): void
export function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display
export function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void
export function x11_set_sm_client_id(sm_client_id?: string | null): void
export function x11_ungrab_server(): void
export function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom
export function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom
export interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
export class X11AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.AppLaunchContext */
    set_desktop(desktop: number): void
    set_display(display: Gdk.Display): void
    set_icon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_screen(screen: Gdk.Screen): void
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
export interface X11Cursor_ConstructProps extends Gdk.Cursor_ConstructProps {
}
export class X11Cursor {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Cursor */
    get_xcursor(): xlib.Cursor
    get_xdisplay(): xlib.Display
    /* Methods of Gdk.Cursor */
    get_cursor_type(): Gdk.CursorType
    get_display(): Gdk.Display
    get_image(): GdkPixbuf.Pixbuf | null
    get_surface(): [ /* returnType */ cairo.Surface | null, /* x_hot */ number | null, /* y_hot */ number | null ]
    ref(): Gdk.Cursor
    unref(): void
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
    connect(sigName: "notify", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Cursor_ConstructProps)
    _init (config?: X11Cursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceCore_ConstructProps extends Gdk.Device_ConstructProps {
}
export class X11DeviceCore {
    /* Properties of Gdk.Device */
    readonly associated_device: Gdk.Device
    readonly axes: Gdk.AxisFlags
    input_mode: Gdk.InputMode
    readonly n_axes: number
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Device */
    get_associated_device(): Gdk.Device | null
    get_axes(): Gdk.AxisFlags
    get_axis_use(index_: number): Gdk.AxisUse
    get_device_type(): Gdk.DeviceType
    get_display(): Gdk.Display
    get_has_cursor(): boolean
    get_key(index_: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ Gdk.ModifierType ]
    get_last_event_window(): Gdk.Window | null
    get_mode(): Gdk.InputMode
    get_n_axes(): number
    get_n_keys(): number
    get_name(): string
    get_position(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    get_position_double(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    get_product_id(): string | null
    get_seat(): Gdk.Seat
    get_source(): Gdk.InputSource
    get_vendor_id(): string | null
    get_window_at_position(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    get_window_at_position_double(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    grab(window: Gdk.Window, grab_ownership: Gdk.GrabOwnership, owner_events: boolean, event_mask: Gdk.EventMask, cursor: Gdk.Cursor | null, time_: number): Gdk.GrabStatus
    list_axes(): Gdk.Atom[]
    list_slave_devices(): Gdk.Device[] | null
    set_axis_use(index_: number, use: Gdk.AxisUse): void
    set_key(index_: number, keyval: number, modifiers: Gdk.ModifierType): void
    set_mode(mode: Gdk.InputMode): boolean
    ungrab(time_: number): void
    warp(screen: Gdk.Screen, x: number, y: number): void
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
    connect(sigName: "changed", callback: (($obj: X11DeviceCore) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceCore) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceCore, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceCore, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated-device", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceCore_ConstructProps)
    _init (config?: X11DeviceCore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceManagerCore_ConstructProps extends Gdk.DeviceManager_ConstructProps {
}
export class X11DeviceManagerCore {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.DeviceManager */
    get_client_pointer(): Gdk.Device
    get_display(): Gdk.Display | null
    list_devices(type: Gdk.DeviceType): Gdk.Device[]
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
    /* Signals of Gdk.DeviceManager */
    connect(sigName: "device-added", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    connect(sigName: "device-changed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-changed", device: Gdk.Device): void
    connect(sigName: "device-removed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceManagerCore_ConstructProps)
    _init (config?: X11DeviceManagerCore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceManagerXI2_ConstructProps extends X11DeviceManagerCore_ConstructProps {
    major?: number
    minor?: number
    opcode?: number
}
export class X11DeviceManagerXI2 {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.DeviceManager */
    get_client_pointer(): Gdk.Device
    get_display(): Gdk.Display | null
    list_devices(type: Gdk.DeviceType): Gdk.Device[]
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
    /* Signals of Gdk.DeviceManager */
    connect(sigName: "device-added", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    connect(sigName: "device-changed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-changed", device: Gdk.Device): void
    connect(sigName: "device-removed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
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
    readonly associated_device: Gdk.Device
    readonly axes: Gdk.AxisFlags
    input_mode: Gdk.InputMode
    readonly n_axes: number
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Device */
    get_associated_device(): Gdk.Device | null
    get_axes(): Gdk.AxisFlags
    get_axis_use(index_: number): Gdk.AxisUse
    get_device_type(): Gdk.DeviceType
    get_display(): Gdk.Display
    get_has_cursor(): boolean
    get_key(index_: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ Gdk.ModifierType ]
    get_last_event_window(): Gdk.Window | null
    get_mode(): Gdk.InputMode
    get_n_axes(): number
    get_n_keys(): number
    get_name(): string
    get_position(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    get_position_double(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    get_product_id(): string | null
    get_seat(): Gdk.Seat
    get_source(): Gdk.InputSource
    get_vendor_id(): string | null
    get_window_at_position(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    get_window_at_position_double(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    grab(window: Gdk.Window, grab_ownership: Gdk.GrabOwnership, owner_events: boolean, event_mask: Gdk.EventMask, cursor: Gdk.Cursor | null, time_: number): Gdk.GrabStatus
    list_axes(): Gdk.Atom[]
    list_slave_devices(): Gdk.Device[] | null
    set_axis_use(index_: number, use: Gdk.AxisUse): void
    set_key(index_: number, keyval: number, modifiers: Gdk.ModifierType): void
    set_mode(mode: Gdk.InputMode): boolean
    ungrab(time_: number): void
    warp(screen: Gdk.Screen, x: number, y: number): void
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
    connect(sigName: "notify::associated-device", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Display */
    error_trap_pop(): number
    error_trap_pop_ignored(): void
    error_trap_push(): void
    get_startup_notification_id(): string
    get_user_time(): number
    get_xdisplay(): xlib.Display
    grab(): void
    set_cursor_theme(theme: string | null, size: number): void
    set_startup_notification_id(startup_id: string): void
    set_window_scale(scale: number): void
    string_to_compound_text(str: string): [ /* returnType */ number, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ Uint8Array ]
    text_property_to_text_list(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
    ungrab(): void
    utf8_to_compound_text(str: string): [ /* returnType */ boolean, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ Uint8Array ]
    /* Methods of Gdk.Display */
    beep(): void
    close(): void
    device_is_grabbed(device: Gdk.Device): boolean
    flush(): void
    get_app_launch_context(): Gdk.AppLaunchContext
    get_default_cursor_size(): number
    get_default_group(): Gdk.Window
    get_default_screen(): Gdk.Screen
    get_default_seat(): Gdk.Seat
    get_device_manager(): Gdk.DeviceManager | null
    get_event(): Gdk.Event | null
    get_maximal_cursor_size(): [ /* width */ number, /* height */ number ]
    get_monitor(monitor_num: number): Gdk.Monitor | null
    get_monitor_at_point(x: number, y: number): Gdk.Monitor
    get_monitor_at_window(window: Gdk.Window): Gdk.Monitor
    get_n_monitors(): number
    get_n_screens(): number
    get_name(): string
    get_pointer(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_primary_monitor(): Gdk.Monitor | null
    get_screen(screen_num: number): Gdk.Screen
    get_window_at_pointer(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    has_pending(): boolean
    is_closed(): boolean
    keyboard_ungrab(time_: number): void
    list_devices(): Gdk.Device[]
    list_seats(): Gdk.Seat[]
    notify_startup_complete(startup_id: string): void
    peek_event(): Gdk.Event | null
    pointer_is_grabbed(): boolean
    pointer_ungrab(time_: number): void
    put_event(event: Gdk.Event): void
    request_selection_notification(selection: Gdk.Atom): boolean
    set_double_click_distance(distance: number): void
    set_double_click_time(msec: number): void
    store_clipboard(clipboard_window: Gdk.Window, time_: number, targets: Gdk.Atom[] | null): void
    supports_clipboard_persistence(): boolean
    supports_composite(): boolean
    supports_cursor_alpha(): boolean
    supports_cursor_color(): boolean
    supports_input_shapes(): boolean
    supports_selection_notification(): boolean
    supports_shapes(): boolean
    sync(): void
    warp_pointer(screen: Gdk.Screen, x: number, y: number): void
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
    /* Signals of Gdk.Display */
    connect(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    connect(sigName: "monitor-added", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "monitor-added", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "monitor-added", monitor: Gdk.Monitor): void
    connect(sigName: "monitor-removed", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "monitor-removed", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "monitor-removed", monitor: Gdk.Monitor): void
    connect(sigName: "opened", callback: (($obj: X11Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: X11Display) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    connect(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_glx_version(display: Gdk.Display): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    static $gtype: GObject.Type
}
export interface X11DisplayManager_ConstructProps extends Gdk.DisplayManager_ConstructProps {
}
export class X11DisplayManager {
    /* Properties of Gdk.DisplayManager */
    default_display: Gdk.Display
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.DisplayManager */
    get_default_display(): Gdk.Display | null
    list_displays(): Gdk.Display[]
    open_display(name: string): Gdk.Display | null
    set_default_display(display: Gdk.Display): void
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
    /* Signals of Gdk.DisplayManager */
    connect(sigName: "display-opened", callback: (($obj: X11DisplayManager, display: Gdk.Display) => void)): number
    connect_after(sigName: "display-opened", callback: (($obj: X11DisplayManager, display: Gdk.Display) => void)): number
    emit(sigName: "display-opened", display: Gdk.Display): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-display", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DisplayManager_ConstructProps)
    _init (config?: X11DisplayManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DragContext_ConstructProps extends Gdk.DragContext_ConstructProps {
}
export class X11DragContext {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.DragContext */
    get_actions(): Gdk.DragAction
    get_dest_window(): Gdk.Window
    get_device(): Gdk.Device
    get_drag_window(): Gdk.Window | null
    get_protocol(): Gdk.DragProtocol
    get_selected_action(): Gdk.DragAction
    get_source_window(): Gdk.Window
    get_suggested_action(): Gdk.DragAction
    list_targets(): Gdk.Atom[]
    manage_dnd(ipc_window: Gdk.Window, actions: Gdk.DragAction): boolean
    set_device(device: Gdk.Device): void
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
    /* Signals of Gdk.DragContext */
    connect(sigName: "action-changed", callback: (($obj: X11DragContext, action: Gdk.DragAction) => void)): number
    connect_after(sigName: "action-changed", callback: (($obj: X11DragContext, action: Gdk.DragAction) => void)): number
    emit(sigName: "action-changed", action: Gdk.DragAction): void
    connect(sigName: "cancel", callback: (($obj: X11DragContext, reason: Gdk.DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: X11DragContext, reason: Gdk.DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    connect(sigName: "dnd-finished", callback: (($obj: X11DragContext) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: X11DragContext) => void)): number
    emit(sigName: "dnd-finished"): void
    connect(sigName: "drop-performed", callback: (($obj: X11DragContext, time: number) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: X11DragContext, time: number) => void)): number
    emit(sigName: "drop-performed", time: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DragContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DragContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DragContext_ConstructProps)
    _init (config?: X11DragContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class X11GLContext {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.GLContext */
    get_debug_enabled(): boolean
    get_display(): Gdk.Display | null
    get_forward_compatible(): boolean
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    get_shared_context(): Gdk.GLContext | null
    get_use_es(): boolean
    get_version(): [ /* major */ number, /* minor */ number ]
    get_window(): Gdk.Window | null
    is_legacy(): boolean
    make_current(): void
    realize(): boolean
    set_debug_enabled(enabled: boolean): void
    set_forward_compatible(compatible: boolean): void
    set_required_version(major: number, minor: number): void
    set_use_es(use_es: number): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Keymap_ConstructProps extends Gdk.Keymap_ConstructProps {
}
export class X11Keymap {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Keymap */
    get_group_for_state(state: number): number
    key_is_modifier(keycode: number): boolean
    /* Methods of Gdk.Keymap */
    add_virtual_modifiers(state: Gdk.ModifierType): /* state */ Gdk.ModifierType
    get_caps_lock_state(): boolean
    get_direction(): Pango.Direction
    get_entries_for_keycode(hardware_keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    get_entries_for_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_state(): number
    get_num_lock_state(): boolean
    get_scroll_lock_state(): boolean
    have_bidi_layouts(): boolean
    lookup_key(key: Gdk.KeymapKey): number
    map_virtual_modifiers(state: Gdk.ModifierType): [ /* returnType */ boolean, /* state */ Gdk.ModifierType ]
    translate_keyboard_state(hardware_keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed_modifiers */ Gdk.ModifierType | null ]
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
    /* Signals of Gdk.Keymap */
    connect(sigName: "direction-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "direction-changed"): void
    connect(sigName: "keys-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "keys-changed"): void
    connect(sigName: "state-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "state-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Keymap_ConstructProps)
    _init (config?: X11Keymap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class X11Monitor {
    /* Properties of Gdk.Monitor */
    readonly geometry: Gdk.Rectangle
    readonly height_mm: number
    readonly manufacturer: string
    readonly model: string
    readonly refresh_rate: number
    readonly scale_factor: number
    readonly subpixel_layout: Gdk.SubpixelLayout
    readonly width_mm: number
    readonly workarea: Gdk.Rectangle
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Monitor */
    get_display(): Gdk.Display
    get_geometry(): /* geometry */ Gdk.Rectangle
    get_height_mm(): number
    get_manufacturer(): string | null
    get_model(): string | null
    get_refresh_rate(): number
    get_scale_factor(): number
    get_subpixel_layout(): Gdk.SubpixelLayout
    get_width_mm(): number
    get_workarea(): /* workarea */ Gdk.Rectangle
    is_primary(): boolean
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
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workarea", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workarea", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_output(monitor: Gdk.Monitor): xlib.XID
    static $gtype: GObject.Type
}
export interface X11Screen_ConstructProps extends Gdk.Screen_ConstructProps {
}
export class X11Screen {
    /* Properties of Gdk.Screen */
    font_options: object
    resolution: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Screen */
    get_current_desktop(): number
    get_monitor_output(monitor_num: number): xlib.XID
    get_number_of_desktops(): number
    get_screen_number(): number
    get_window_manager_name(): string
    get_xscreen(): xlib.Screen
    lookup_visual(xvisualid: xlib.VisualID): X11Visual
    supports_net_wm_hint(property: Gdk.Atom): boolean
    /* Methods of Gdk.Screen */
    get_active_window(): Gdk.Window | null
    get_display(): Gdk.Display
    get_font_options(): cairo.FontOptions | null
    get_height(): number
    get_height_mm(): number
    get_monitor_at_point(x: number, y: number): number
    get_monitor_at_window(window: Gdk.Window): number
    get_monitor_geometry(monitor_num: number): /* dest */ Gdk.Rectangle | null
    get_monitor_height_mm(monitor_num: number): number
    get_monitor_plug_name(monitor_num: number): string | null
    get_monitor_scale_factor(monitor_num: number): number
    get_monitor_width_mm(monitor_num: number): number
    get_monitor_workarea(monitor_num: number): /* dest */ Gdk.Rectangle | null
    get_n_monitors(): number
    get_number(): number
    get_primary_monitor(): number
    get_resolution(): number
    get_rgba_visual(): Gdk.Visual | null
    get_root_window(): Gdk.Window
    get_setting(name: string, value: any): boolean
    get_system_visual(): Gdk.Visual
    get_toplevel_windows(): Gdk.Window[]
    get_width(): number
    get_width_mm(): number
    get_window_stack(): Gdk.Window[] | null
    is_composited(): boolean
    list_visuals(): Gdk.Visual[]
    make_display_name(): string
    set_font_options(options?: cairo.FontOptions | null): void
    set_resolution(dpi: number): void
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
    /* Signals of Gdk.Screen */
    connect(sigName: "composited-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "monitors-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "monitors-changed"): void
    connect(sigName: "size-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "size-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-options", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Visual_ConstructProps extends Gdk.Visual_ConstructProps {
}
export class X11Visual {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Visual */
    get_xvisual(): xlib.Visual
    /* Methods of Gdk.Visual */
    get_bits_per_rgb(): number
    get_blue_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_byte_order(): Gdk.ByteOrder
    get_colormap_size(): number
    get_depth(): number
    get_green_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_red_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_screen(): Gdk.Screen
    get_visual_type(): Gdk.VisualType
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
    connect(sigName: "notify", callback: (($obj: X11Visual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Visual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Visual_ConstructProps)
    _init (config?: X11Visual_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Window_ConstructProps extends Gdk.Window_ConstructProps {
}
export class X11Window {
    /* Properties of Gdk.Window */
    cursor: Gdk.Cursor
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11.X11Window */
    get_desktop(): number
    get_xid(): xlib.Window
    move_to_current_desktop(): void
    move_to_desktop(desktop: number): void
    set_frame_extents(left: number, right: number, top: number, bottom: number): void
    set_frame_sync_enabled(frame_sync_enabled: boolean): void
    set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void
    set_theme_variant(variant: string): void
    set_user_time(timestamp: number): void
    set_utf8_property(name: string, value?: string | null): void
    /* Methods of Gdk.Window */
    beep(): void
    begin_draw_frame(region: cairo.Region): Gdk.DrawingContext
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    begin_move_drag_for_device(device: Gdk.Device, button: number, root_x: number, root_y: number, timestamp: number): void
    begin_paint_rect(rectangle: Gdk.Rectangle): void
    begin_paint_region(region: cairo.Region): void
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    begin_resize_drag_for_device(edge: Gdk.WindowEdge, device: Gdk.Device, button: number, root_x: number, root_y: number, timestamp: number): void
    configure_finished(): void
    coords_from_parent(parent_x: number, parent_y: number): [ /* x */ number | null, /* y */ number | null ]
    coords_to_parent(x: number, y: number): [ /* parent_x */ number | null, /* parent_y */ number | null ]
    create_gl_context(): Gdk.GLContext
    create_similar_image_surface(format: number, width: number, height: number, scale: number): cairo.Surface
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    deiconify(): void
    destroy(): void
    destroy_notify(): void
    enable_synchronized_configure(): void
    end_draw_frame(context: Gdk.DrawingContext): void
    end_paint(): void
    ensure_native(): boolean
    flush(): void
    focus(timestamp: number): void
    freeze_toplevel_updates_libgtk_only(): void
    freeze_updates(): void
    fullscreen(): void
    fullscreen_on_monitor(monitor: number): void
    geometry_changed(): void
    get_accept_focus(): boolean
    get_background_pattern(): cairo.Pattern | null
    get_children(): Gdk.Window[]
    get_children_with_user_data(user_data?: object | null): Gdk.Window[]
    get_clip_region(): cairo.Region
    get_composited(): boolean
    get_cursor(): Gdk.Cursor | null
    get_decorations(): [ /* returnType */ boolean, /* decorations */ Gdk.WMDecoration ]
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_device_position(device: Gdk.Device): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_device_position_double(device: Gdk.Device): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_drag_protocol(): [ /* returnType */ Gdk.DragProtocol, /* target */ Gdk.Window | null ]
    get_effective_parent(): Gdk.Window
    get_effective_toplevel(): Gdk.Window
    get_event_compression(): boolean
    get_events(): Gdk.EventMask
    get_focus_on_map(): boolean
    get_frame_clock(): Gdk.FrameClock
    get_frame_extents(): /* rect */ Gdk.Rectangle
    get_fullscreen_mode(): Gdk.FullscreenMode
    get_geometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_group(): Gdk.Window
    get_height(): number
    get_modal_hint(): boolean
    get_origin(): [ /* returnType */ number, /* x */ number | null, /* y */ number | null ]
    get_parent(): Gdk.Window
    get_pass_through(): boolean
    get_pointer(): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_root_coords(x: number, y: number): [ /* root_x */ number, /* root_y */ number ]
    get_root_origin(): [ /* x */ number, /* y */ number ]
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_source_events(source: Gdk.InputSource): Gdk.EventMask
    get_state(): Gdk.WindowState
    get_support_multidevice(): boolean
    get_toplevel(): Gdk.Window
    get_type_hint(): Gdk.WindowTypeHint
    get_update_area(): cairo.Region
    get_user_data(): /* data */ object | null
    get_visible_region(): cairo.Region
    get_visual(): Gdk.Visual
    get_width(): number
    get_window_type(): Gdk.WindowType
    has_native(): boolean
    hide(): void
    iconify(): void
    input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void
    invalidate_maybe_recurse(region: cairo.Region, child_func?: Gdk.WindowChildFunc | null): void
    invalidate_rect(rect: Gdk.Rectangle | null, invalidate_children: boolean): void
    invalidate_region(region: cairo.Region, invalidate_children: boolean): void
    is_destroyed(): boolean
    is_input_only(): boolean
    is_shaped(): boolean
    is_viewable(): boolean
    is_visible(): boolean
    lower(): void
    mark_paint_from_clip(cr: cairo.Context): void
    maximize(): void
    merge_child_input_shapes(): void
    merge_child_shapes(): void
    move(x: number, y: number): void
    move_region(region: cairo.Region, dx: number, dy: number): void
    move_resize(x: number, y: number, width: number, height: number): void
    move_to_rect(rect: Gdk.Rectangle, rect_anchor: Gdk.Gravity, window_anchor: Gdk.Gravity, anchor_hints: Gdk.AnchorHints, rect_anchor_dx: number, rect_anchor_dy: number): void
    peek_children(): Gdk.Window[]
    process_updates(update_children: boolean): void
    raise(): void
    register_dnd(): void
    reparent(new_parent: Gdk.Window, x: number, y: number): void
    resize(width: number, height: number): void
    restack(sibling: Gdk.Window | null, above: boolean): void
    scroll(dx: number, dy: number): void
    set_accept_focus(accept_focus: boolean): void
    set_background(color: Gdk.Color): void
    set_background_pattern(pattern?: cairo.Pattern | null): void
    set_background_rgba(rgba: Gdk.RGBA): void
    set_child_input_shapes(): void
    set_child_shapes(): void
    set_composited(composited: boolean): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_decorations(decorations: Gdk.WMDecoration): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_device_events(device: Gdk.Device, event_mask: Gdk.EventMask): void
    set_event_compression(event_compression: boolean): void
    set_events(event_mask: Gdk.EventMask): void
    set_focus_on_map(focus_on_map: boolean): void
    set_fullscreen_mode(mode: Gdk.FullscreenMode): void
    set_functions(functions: Gdk.WMFunction): void
    set_geometry_hints(geometry: Gdk.Geometry, geom_mask: Gdk.WindowHints): void
    set_group(leader?: Gdk.Window | null): void
    set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void
    set_icon_name(name?: string | null): void
    set_keep_above(setting: boolean): void
    set_keep_below(setting: boolean): void
    set_modal_hint(modal: boolean): void
    set_opacity(opacity: number): void
    set_opaque_region(region?: cairo.Region | null): void
    set_override_redirect(override_redirect: boolean): void
    set_pass_through(pass_through: boolean): void
    set_role(role: string): void
    set_shadow_width(left: number, right: number, top: number, bottom: number): void
    set_skip_pager_hint(skips_pager: boolean): void
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    set_source_events(source: Gdk.InputSource, event_mask: Gdk.EventMask): void
    set_startup_id(startup_id: string): void
    set_static_gravities(use_static: boolean): boolean
    set_support_multidevice(support_multidevice: boolean): void
    set_title(title: string): void
    set_transient_for(parent: Gdk.Window): void
    set_type_hint(hint: Gdk.WindowTypeHint): void
    set_urgency_hint(urgent: boolean): void
    set_user_data(user_data?: GObject.Object | null): void
    shape_combine_region(shape_region: cairo.Region | null, offset_x: number, offset_y: number): void
    show(): void
    show_unraised(): void
    show_window_menu(event: Gdk.Event): boolean
    stick(): void
    thaw_toplevel_updates_libgtk_only(): void
    thaw_updates(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    withdraw(): void
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
    /* Virtual methods of Gdk.Window */
    vfunc_create_surface(width: number, height: number): cairo.Surface
    vfunc_from_embedder(embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void
    vfunc_to_embedder(offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Window */
    connect(sigName: "create-surface", callback: (($obj: X11Window, width: number, height: number) => cairo.Surface)): number
    connect_after(sigName: "create-surface", callback: (($obj: X11Window, width: number, height: number) => cairo.Surface)): number
    emit(sigName: "create-surface", width: number, height: number): void
    connect(sigName: "from-embedder", callback: (($obj: X11Window, embedder_x: number, embedder_y: number) => void)): number
    connect_after(sigName: "from-embedder", callback: (($obj: X11Window, embedder_x: number, embedder_y: number) => void)): number
    emit(sigName: "from-embedder", embedder_x: number, embedder_y: number): void
    connect(sigName: "moved-to-rect", callback: (($obj: X11Window, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    connect_after(sigName: "moved-to-rect", callback: (($obj: X11Window, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    emit(sigName: "moved-to-rect", flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean): void
    connect(sigName: "pick-embedded-child", callback: (($obj: X11Window, x: number, y: number) => Gdk.Window | null)): number
    connect_after(sigName: "pick-embedded-child", callback: (($obj: X11Window, x: number, y: number) => Gdk.Window | null)): number
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    connect(sigName: "to-embedder", callback: (($obj: X11Window, offscreen_x: number, offscreen_y: number) => void)): number
    connect_after(sigName: "to-embedder", callback: (($obj: X11Window, offscreen_x: number, offscreen_y: number) => void)): number
    emit(sigName: "to-embedder", offscreen_x: number, offscreen_y: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Window_ConstructProps)
    _init (config?: X11Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static foreign_new_for_display(display: X11Display, window: xlib.Window): X11Window
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Window
    static $gtype: GObject.Type
}
export abstract class X11AppLaunchContextClass {
    static name: string
}
export abstract class X11CursorClass {
    static name: string
}
export abstract class X11DeviceCoreClass {
    static name: string
}
export abstract class X11DeviceManagerCoreClass {
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
export abstract class X11DisplayManagerClass {
    static name: string
}
export abstract class X11DragContextClass {
    static name: string
}
export abstract class X11GLContextClass {
    static name: string
}
export abstract class X11KeymapClass {
    static name: string
}
export abstract class X11MonitorClass {
    static name: string
}
export abstract class X11ScreenClass {
    static name: string
}
export abstract class X11VisualClass {
    static name: string
}
export abstract class X11WindowClass {
    static name: string
}