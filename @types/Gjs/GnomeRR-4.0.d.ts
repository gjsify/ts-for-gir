/**
 * GnomeRR-4.0
 */

import type * as Gjs from './Gjs';
import type * as GnomeDesktop from './GnomeDesktop-4.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as GDesktopEnums from './GDesktopEnums-3.0';
import type * as Gdk from './Gdk-4.0';
import type * as cairo from './cairo-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';

export enum DpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
export enum DpmsModeType {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
export enum Error {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
export enum Rotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
export const CONNECTOR_TYPE_PANEL: string
export function error_quark(): GLib.Quark
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
    screen?: Screen
}
export class Config {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeRR-4.0.GnomeRR.Config */
    applicable(screen: Screen): boolean
    apply(screen: Screen): boolean
    apply_persistent(screen: Screen): boolean
    ensure_primary(): boolean
    equal(config2: Config): boolean
    get_clone(): boolean
    get_outputs(): OutputInfo[]
    load_current(): boolean
    match(config2: Config): boolean
    sanitize(): void
    set_clone(clone: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_current(screen: Screen): Config
    static $gtype: GObject.Type
}
export interface OutputInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class OutputInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeRR-4.0.GnomeRR.OutputInfo */
    get_aspect_ratio(): number
    get_display_name(): string
    get_geometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_name(): string
    get_preferred_height(): number
    get_preferred_width(): number
    get_primary(): boolean
    get_product(): string
    get_refresh_rate(): number
    get_rotation(): Rotation
    get_serial(): string
    get_underscanning(): boolean
    get_vendor(): string
    is_active(): boolean
    is_connected(): boolean
    is_primary_tile(): boolean
    set_active(active: boolean): void
    set_geometry(x: number, y: number, width: number, height: number): void
    set_primary(primary: boolean): void
    set_refresh_rate(rate: number): void
    set_rotation(rotation: Rotation): void
    set_underscanning(underscanning: boolean): void
    supports_rotation(rotation: Rotation): boolean
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
    connect(sigName: "notify", callback: (($obj: OutputInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputInfo_ConstructProps)
    _init (config?: OutputInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    dpms_mode?: DpmsModeType
    gdk_display?: Gdk.Display
}
export class Screen {
    /* Properties of GnomeRR-4.0.GnomeRR.Screen */
    dpms_mode: DpmsModeType
    /* Fields of GnomeRR-4.0.GnomeRR.Screen */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeRR-4.0.GnomeRR.Screen */
    get_crtc_by_id(id: number): Crtc
    get_dpms_mode(): [ /* returnType */ boolean, /* mode */ DpmsMode ]
    get_output_by_id(id: number): Output
    get_output_by_name(name: string): Output
    get_ranges(): [ /* min_width */ number, /* max_width */ number, /* min_height */ number, /* max_height */ number ]
    list_clone_modes(): Mode[]
    list_crtcs(): Crtc[]
    list_modes(): Mode[]
    list_outputs(): Output[]
    refresh(): boolean
    set_dpms_mode(mode: DpmsMode): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GnomeRR-4.0.GnomeRR.Screen */
    vfunc_changed(): void
    vfunc_output_connected(output: Output): void
    vfunc_output_disconnected(output: Output): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GnomeRR-4.0.GnomeRR.Screen */
    connect(sigName: "changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "output-connected", callback: (($obj: Screen, output: Output) => void)): number
    connect_after(sigName: "output-connected", callback: (($obj: Screen, output: Output) => void)): number
    emit(sigName: "output-connected", output: Output): void
    connect(sigName: "output-disconnected", callback: (($obj: Screen, output: Output) => void)): number
    connect_after(sigName: "output-disconnected", callback: (($obj: Screen, output: Output) => void)): number
    emit(sigName: "output-disconnected", output: Output): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dpms-mode", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpms-mode", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Gdk.Display): Screen
    static new_finish(result: Gio.AsyncResult): Screen
    static new_async(display: Gdk.Display, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export class CTM {
    static name: string
}
export abstract class ConfigClass {
    /* Fields of GnomeRR-4.0.GnomeRR.ConfigClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Crtc {
    /* Methods of GnomeRR-4.0.GnomeRR.Crtc */
    can_drive_output(output: Output): boolean
    get_current_mode(): Mode
    get_current_rotation(): Rotation
    get_gamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    get_id(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_rotations(): Rotation
    set_gamma(size: number, red: number, green: number, blue: number): boolean
    supports_rotation(rotation: Rotation): boolean
    static name: string
}
export class Mode {
    /* Methods of GnomeRR-4.0.GnomeRR.Mode */
    get_freq(): number
    get_freq_f(): number
    get_height(): number
    get_id(): number
    get_is_interlaced(): boolean
    get_is_tiled(): boolean
    get_width(): number
    static name: string
}
export class Output {
    /* Methods of GnomeRR-4.0.GnomeRR.Output */
    can_clone(clone: Output): boolean
    get_backlight(): number
    get_crtc(): Crtc
    get_current_mode(): Mode
    get_display_name(): string
    get_edid_data(size: number): number
    get_id(): number
    get_ids_from_edid(): [ /* vendor */ string | null, /* product */ string | null, /* serial */ string | null ]
    get_is_primary(): boolean
    get_is_underscanning(): boolean
    get_min_backlight_step(): number
    get_name(): string
    get_physical_size(): [ /* width_mm */ number | null, /* height_mm */ number | null ]
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_possible_crtcs(): Crtc[]
    get_preferred_mode(): Mode
    is_builtin_display(): boolean
    list_modes(): Mode[]
    set_backlight(value: number): boolean
    set_color_transform(ctm: CTM): boolean
    supports_color_transform(): boolean
    supports_mode(mode: Mode): boolean
    supports_underscanning(): boolean
    static name: string
}
export abstract class OutputInfoClass {
    /* Fields of GnomeRR-4.0.GnomeRR.OutputInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ScreenClass {
    /* Fields of GnomeRR-4.0.GnomeRR.ScreenClass */
    changed: (screen: Screen) => void
    output_connected: (screen: Screen, output: Output) => void
    output_disconnected: (screen: Screen, output: Output) => void
    static name: string
}