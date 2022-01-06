/**
 * UnityExtras-7.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type Unity from './Unity-7.0';

export namespace UnityExtras {

function show_in_folder(uri: string, _callback_?: Gio.AsyncReadyCallback | null): void
function show_in_folder_finish(_res_: Gio.AsyncResult): void
function dbus_name_has_owner(name: string): boolean
function dbus_own_name(name: string, scope_creation_cb: CreateScopeCallback): Gio.Application | null
interface CreateScopeCallback {
    (): void
}
export interface PreviewPlayer_ConstructProps extends GObject.Object_ConstructProps {
}
class PreviewPlayer {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UnityExtras-7.0.UnityExtras.PreviewPlayer */
    play(uri: string, _callback_?: Gio.AsyncReadyCallback | null): void
    play_finish(_res_: Gio.AsyncResult): void
    pause(_callback_?: Gio.AsyncReadyCallback | null): void
    pause_finish(_res_: Gio.AsyncResult): void
    pause_resume(_callback_?: Gio.AsyncReadyCallback | null): void
    pause_resume_finish(_res_: Gio.AsyncResult): void
    resume(_callback_?: Gio.AsyncReadyCallback | null): void
    resume_finish(_res_: Gio.AsyncResult): void
    stop(_callback_?: Gio.AsyncReadyCallback | null): void
    stop_finish(_res_: Gio.AsyncResult): void
    close(_callback_?: Gio.AsyncReadyCallback | null): void
    close_finish(_res_: Gio.AsyncResult): void
    video_properties(uri: string, _callback_?: Gio.AsyncReadyCallback | null): void
    video_properties_finish(_res_: Gio.AsyncResult): GLib.HashTable
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
    /* Signals of UnityExtras-7.0.UnityExtras.PreviewPlayer */
    connect(sigName: "progress", callback: (($obj: PreviewPlayer, uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: PreviewPlayer, uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void)): number
    emit(sigName: "progress", uri: string, state: Unity.MusicPreviewTrackState, progress: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewPlayer_ConstructProps)
    _init (config?: PreviewPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PreviewPlayer
    static $gtype: GObject.Type
}
abstract class PreviewPlayerClass {
    static name: string
}
class PreviewPlayerPrivate {
    static name: string
}
}
export default UnityExtras