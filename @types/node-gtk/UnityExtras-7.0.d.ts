/**
 * UnityExtras-7.0
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { Unity } from './Unity-7.0';

export declare namespace UnityExtras {

export function showInFolder(uri: string, callback?: Gio.AsyncReadyCallback | null): void
export function showInFolderFinish(res: Gio.AsyncResult): void
export function dbusNameHasOwner(name: string): boolean
export function dbusOwnName(name: string, scopeCreationCb: CreateScopeCallback): Gio.Application | null
export interface CreateScopeCallback {
    (): void
}
export interface PreviewPlayer_ConstructProps extends GObject.Object_ConstructProps {
}
export class PreviewPlayer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UnityExtras-7.0.UnityExtras.PreviewPlayer */
    play(uri: string, callback?: Gio.AsyncReadyCallback | null): void
    playFinish(res: Gio.AsyncResult): void
    pause(callback?: Gio.AsyncReadyCallback | null): void
    pauseFinish(res: Gio.AsyncResult): void
    pauseResume(callback?: Gio.AsyncReadyCallback | null): void
    pauseResumeFinish(res: Gio.AsyncResult): void
    resume(callback?: Gio.AsyncReadyCallback | null): void
    resumeFinish(res: Gio.AsyncResult): void
    stop(callback?: Gio.AsyncReadyCallback | null): void
    stopFinish(res: Gio.AsyncResult): void
    close(callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): void
    videoProperties(uri: string, callback?: Gio.AsyncReadyCallback | null): void
    videoPropertiesFinish(res: Gio.AsyncResult): GLib.HashTable
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of UnityExtras-7.0.UnityExtras.PreviewPlayer */
    connect(sigName: "progress", callback: (($obj: PreviewPlayer, uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void)): number
    on(sigName: "progress", callback: (uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", uri: string, state: Unity.MusicPreviewTrackState, progress: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PreviewPlayer_ConstructProps)
    _init (config?: PreviewPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PreviewPlayer
    static $gtype: GObject.Type
}
export abstract class PreviewPlayerClass {
    static name: string
}
export class PreviewPlayerPrivate {
    static name: string
}
}