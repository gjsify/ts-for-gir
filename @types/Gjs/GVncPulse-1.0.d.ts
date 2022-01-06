/**
 * GVncPulse-1.0
 */

import type * as Gjs from './Gjs';
import type * as GVnc from './GVnc-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export interface AudioPulse_ConstructProps extends GVnc.BaseAudio_ConstructProps {
}
export class AudioPulse {
    /* Fields of GVncPulse-1.0.GVncPulse.AudioPulse */
    parent: GVnc.BaseAudio
    priv: AudioPulsePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GVnc-1.0.GVnc.Audio */
    playback_data(sample: GVnc.AudioSample): void
    playback_start(format: GVnc.AudioFormat): void
    playback_stop(): void
    /* Virtual methods of GVncPulse-1.0.GVncPulse.AudioPulse */
    vfunc_playback_data(sample: GVnc.AudioSample): boolean
    vfunc_playback_start(format: GVnc.AudioFormat): boolean
    vfunc_playback_stop(): boolean
    /* Virtual methods of GVnc-1.0.GVnc.BaseAudio */
    vfunc_playback_data(sample: GVnc.AudioSample): boolean
    vfunc_playback_start(format: GVnc.AudioFormat): boolean
    vfunc_playback_stop(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GVnc-1.0.GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: (($obj: AudioPulse, object: GVnc.AudioSample) => void)): number
    connect_after(sigName: "vnc-audio-playback-data", callback: (($obj: AudioPulse, object: GVnc.AudioSample) => void)): number
    emit(sigName: "vnc-audio-playback-data", object: GVnc.AudioSample): void
    connect(sigName: "vnc-audio-playback-start", callback: (($obj: AudioPulse, object: GVnc.AudioFormat) => void)): number
    connect_after(sigName: "vnc-audio-playback-start", callback: (($obj: AudioPulse, object: GVnc.AudioFormat) => void)): number
    emit(sigName: "vnc-audio-playback-start", object: GVnc.AudioFormat): void
    connect(sigName: "vnc-audio-playback-stop", callback: (($obj: AudioPulse) => void)): number
    connect_after(sigName: "vnc-audio-playback-stop", callback: (($obj: AudioPulse) => void)): number
    emit(sigName: "vnc-audio-playback-stop"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioPulse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioPulse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioPulse_ConstructProps)
    _init (config?: AudioPulse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioPulse
    static $gtype: GObject.Type
}
export abstract class AudioPulseClass {
    /* Fields of GVncPulse-1.0.GVncPulse.AudioPulseClass */
    parent_class: GVnc.BaseAudioClass
    static name: string
}
export class AudioPulsePrivate {
    static name: string
}