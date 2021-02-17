/**
 * GVncPulse-1.0
 */

import "node"
import type { GVnc } from './GVnc-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GVncPulse {

export interface AudioPulse_ConstructProps extends GVnc.BaseAudio_ConstructProps {
}
export class AudioPulse {
    /* Fields of GVncPulse.AudioPulse */
    parent: GVnc.BaseAudio
    priv: AudioPulsePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GVnc.Audio */
    playbackData(sample: GVnc.AudioSample): void
    playbackStart(format: GVnc.AudioFormat): void
    playbackStop(): void
    /* Virtual methods of GVncPulse.AudioPulse */
    vfuncPlaybackData(sample: GVnc.AudioSample): boolean
    vfuncPlaybackStart(format: GVnc.AudioFormat): boolean
    vfuncPlaybackStop(): boolean
    /* Virtual methods of GVnc.BaseAudio */
    vfuncPlaybackData(sample: GVnc.AudioSample): boolean
    vfuncPlaybackStart(format: GVnc.AudioFormat): boolean
    vfuncPlaybackStop(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: (($obj: AudioPulse, object: GVnc.AudioSample) => void)): number
    connect_after(sigName: "vnc-audio-playback-data", callback: (($obj: AudioPulse, object: GVnc.AudioSample) => void)): number
    emit(sigName: "vnc-audio-playback-data", object: GVnc.AudioSample): void
    on(sigName: "vnc-audio-playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-audio-playback-start", callback: (($obj: AudioPulse, object: GVnc.AudioFormat) => void)): number
    connect_after(sigName: "vnc-audio-playback-start", callback: (($obj: AudioPulse, object: GVnc.AudioFormat) => void)): number
    emit(sigName: "vnc-audio-playback-start", object: GVnc.AudioFormat): void
    on(sigName: "vnc-audio-playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-audio-playback-stop", callback: (($obj: AudioPulse) => void)): number
    connect_after(sigName: "vnc-audio-playback-stop", callback: (($obj: AudioPulse) => void)): number
    emit(sigName: "vnc-audio-playback-stop"): void
    on(sigName: "vnc-audio-playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioPulse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioPulse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioPulse_ConstructProps)
    _init (config?: AudioPulse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioPulse
    static $gtype: GObject.Type
}
export abstract class AudioPulseClass {
    /* Fields of GVncPulse.AudioPulseClass */
    parentClass: GVnc.BaseAudioClass
    static name: string
}
export class AudioPulsePrivate {
    static name: string
}
}