/**
 * GnomeBG-4.0
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

export interface BG_ConstructProps extends GObject.Object_ConstructProps {
}
export class BG {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBG-4.0.GnomeBG.BG */
    changes_with_time(): boolean
    create_frame_thumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screen_area: cairo.RectangleInt, dest_width: number, dest_height: number, frame_num: number): GdkPixbuf.Pixbuf
    create_surface(window: Gdk.Surface, width: number, height: number): cairo.Surface
    create_thumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screen_area: cairo.RectangleInt, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    get_filename(): string
    get_image_size(factory: GnomeDesktop.DesktopThumbnailFactory, best_width: number, best_height: number, width: number, height: number): boolean
    get_placement(): GDesktopEnums.BackgroundStyle
    get_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    has_multiple_sizes(): boolean
    is_dark(dest_width: number, dest_height: number): boolean
    load_from_preferences(settings: Gio.Settings): void
    save_to_preferences(settings: Gio.Settings): void
    set_filename(filename: string): void
    set_placement(placement: GDesktopEnums.BackgroundStyle): void
    set_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
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
    /* Signals of GnomeBG-4.0.GnomeBG.BG */
    connect(sigName: "changed", callback: (($obj: BG) => void)): number
    connect_after(sigName: "changed", callback: (($obj: BG) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "transitioned", callback: (($obj: BG) => void)): number
    connect_after(sigName: "transitioned", callback: (($obj: BG) => void)): number
    emit(sigName: "transitioned"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BG, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BG, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BG_ConstructProps)
    _init (config?: BG_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BG
    static $gtype: GObject.Type
}
export interface BGSlideShow_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
}
export class BGSlideShow {
    /* Properties of GnomeBG-4.0.GnomeBG.BGSlideShow */
    readonly has_multiple_sizes: boolean
    readonly start_time: number
    readonly total_duration: number
    /* Fields of GnomeBG-4.0.GnomeBG.BGSlideShow */
    parent_object: GObject.Object
    priv: BGSlideShowPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBG-4.0.GnomeBG.BGSlideShow */
    get_current_slide(width: number, height: number): [ /* progress */ number | null, /* duration */ number | null, /* is_fixed */ boolean | null, /* file1 */ string | null, /* file2 */ string | null ]
    get_has_multiple_sizes(): boolean
    get_num_slides(): number
    get_slide(frame_number: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number | null, /* duration */ number | null, /* is_fixed */ boolean | null, /* file1 */ string | null, /* file2 */ string | null ]
    get_start_time(): number
    get_total_duration(): number
    load(): boolean
    load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    connect(sigName: "notify", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BGSlideShow_ConstructProps)
    _init (config?: BGSlideShow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): BGSlideShow
    static $gtype: GObject.Type
}
export abstract class BGClass {
    static name: string
}
export abstract class BGSlideShowClass {
    /* Fields of GnomeBG-4.0.GnomeBG.BGSlideShowClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BGSlideShowPrivate {
    static name: string
}