/**
 * GstGLX11-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstVideo from './GstVideo-1.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GstGL from './GstGL-1.0';

export interface GLDisplayX11_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}
export class GLDisplayX11 {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL.GLDisplay */
    add_context(context: GstGL.GLContext): boolean
    create_context(other_context: GstGL.GLContext): [ /* returnType */ boolean, /* p_context */ GstGL.GLContext ]
    create_window(): GstGL.GLWindow
    filter_gl_api(gl_api: GstGL.GLAPI): void
    find_window(data: object | null, compare_func: GLib.CompareFunc): GstGL.GLWindow
    get_gl_api(): GstGL.GLAPI
    get_gl_api_unlocked(): GstGL.GLAPI
    get_gl_context_for_thread(thread: GLib.Thread): GstGL.GLContext
    get_handle(): number
    get_handle_type(): GstGL.GLDisplayType
    remove_context(context: GstGL.GLContext): void
    remove_window(window: GstGL.GLWindow): boolean
    retrieve_window(data: object | null, compare_func: GLib.CompareFunc): GstGL.GLWindow
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
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
    /* Virtual methods of GstGL.GLDisplay */
    vfunc_create_window(): GstGL.GLWindow
    vfunc_get_handle(): number
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstGL.GLDisplay */
    connect(sigName: "create-context", callback: (($obj: GLDisplayX11, context: GstGL.GLContext) => GstGL.GLContext)): number
    connect_after(sigName: "create-context", callback: (($obj: GLDisplayX11, context: GstGL.GLContext) => GstGL.GLContext)): number
    emit(sigName: "create-context", context: GstGL.GLContext): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLDisplayX11, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLDisplayX11, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLDisplayX11, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLDisplayX11, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLDisplayX11, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLDisplayX11, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLDisplayX11, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLDisplayX11, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLDisplayX11_ConstructProps)
    _init (config?: GLDisplayX11_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): GLDisplayX11
    static new(): GLDisplayX11
    static $gtype: GObject.Type
}
export abstract class GLDisplayX11Class {
    /* Fields of GstGLX11.GLDisplayX11Class */
    object_class: GstGL.GLDisplayClass
    _padding: object[]
    static name: string
}