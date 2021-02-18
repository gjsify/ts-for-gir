/**
 * GstController-1.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstController {

export enum InterpolationMode {
    NONE,
    LINEAR,
    CUBIC,
    CUBIC_MONOTONIC,
}
export enum LFOWaveform {
    SINE,
    SQUARE,
    SAW,
    REVERSE_SAW,
    TRIANGLE,
}
export function timedValueControlInvalidateCache(self: TimedValueControlSource): void
export interface DirectControlBindingConvertGValue {
    (self: DirectControlBinding, srcValue: number, destValue: any): void
}
export interface DirectControlBindingConvertValue {
    (self: DirectControlBinding, srcValue: number, destValue?: object | null): void
}
export interface ARGBControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
    controlSourceA?: Gst.ControlSource
    controlSourceB?: Gst.ControlSource
    controlSourceG?: Gst.ControlSource
    controlSourceR?: Gst.ControlSource
}
export class ARGBControlBinding {
    /* Properties of GstController.ARGBControlBinding */
    controlSourceA: Gst.ControlSource
    controlSourceB: Gst.ControlSource
    controlSourceG: Gst.ControlSource
    controlSourceR: Gst.ControlSource
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getValue(timestamp: Gst.ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.ControlBinding */
    vfuncGetGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    vfuncGetValue(timestamp: Gst.ClockTime): any | null
    vfuncSyncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ARGBControlBinding, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ARGBControlBinding, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-a", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-a", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-b", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-b", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-g", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-g", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-r", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-r", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ARGBControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ARGBControlBinding_ConstructProps)
    _init (config?: ARGBControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, propertyName: string, csA: Gst.ControlSource, csR: Gst.ControlSource, csG: Gst.ControlSource, csB: Gst.ControlSource): ARGBControlBinding
    static $gtype: GObject.Type
}
export interface DirectControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
    absolute?: boolean
    controlSource?: Gst.ControlSource
}
export class DirectControlBinding {
    /* Properties of GstController.DirectControlBinding */
    controlSource: Gst.ControlSource
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getValue(timestamp: Gst.ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.ControlBinding */
    vfuncGetGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    vfuncGetValue(timestamp: Gst.ClockTime): any | null
    vfuncSyncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DirectControlBinding, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DirectControlBinding, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DirectControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DirectControlBinding_ConstructProps)
    _init (config?: DirectControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, propertyName: string, cs: Gst.ControlSource): DirectControlBinding
    static newAbsolute(object: Gst.Object, propertyName: string, cs: Gst.ControlSource): DirectControlBinding
    static $gtype: GObject.Type
}
export interface InterpolationControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {
    mode?: InterpolationMode
}
export class InterpolationControlSource {
    /* Properties of GstController.InterpolationControlSource */
    mode: InterpolationMode
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstController.TimedValueControlSource */
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    validCache: boolean
    /* Fields of Gst.ControlSource */
    getValue: Gst.ControlSourceGetValue
    getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstController.TimedValueControlSource */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    getAll(): Gst.TimedValue[]
    getCount(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unsetAll(): void
    /* Methods of Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: (($obj: InterpolationControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-added", callback: (($obj: InterpolationControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-added", timedValue: ControlPoint): void
    on(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-changed", callback: (($obj: InterpolationControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: InterpolationControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-changed", timedValue: ControlPoint): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-removed", callback: (($obj: InterpolationControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-removed", callback: (($obj: InterpolationControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-removed", timedValue: ControlPoint): void
    on(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: InterpolationControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: InterpolationControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InterpolationControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InterpolationControlSource_ConstructProps)
    _init (config?: InterpolationControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InterpolationControlSource
    static $gtype: GObject.Type
}
export interface LFOControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
    amplitude?: number
    frequency?: number
    offset?: number
    timeshift?: number
    waveform?: LFOWaveform
}
export class LFOControlSource {
    /* Properties of GstController.LFOControlSource */
    amplitude: number
    frequency: number
    offset: number
    timeshift: number
    waveform: LFOWaveform
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlSource */
    getValue: Gst.ControlSourceGetValue
    getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: LFOControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: LFOControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::amplitude", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::amplitude", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::frequency", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frequency", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeshift", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeshift", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::waveform", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::waveform", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LFOControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LFOControlSource_ConstructProps)
    _init (config?: LFOControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LFOControlSource
    static $gtype: GObject.Type
}
export interface ProxyControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
}
export class ProxyControlBinding {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getValue(timestamp: Gst.ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.ControlBinding */
    vfuncGetGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    vfuncGetValue(timestamp: Gst.ClockTime): any | null
    vfuncSyncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ProxyControlBinding, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ProxyControlBinding, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProxyControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyControlBinding_ConstructProps)
    _init (config?: ProxyControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, propertyName: string, refObject: Gst.Object, refPropertyName: string): ProxyControlBinding
    static $gtype: GObject.Type
}
export interface TimedValueControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
}
export class TimedValueControlSource {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstController.TimedValueControlSource */
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    validCache: boolean
    /* Fields of Gst.ControlSource */
    getValue: Gst.ControlSourceGetValue
    getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstController.TimedValueControlSource */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    getAll(): Gst.TimedValue[]
    getCount(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unsetAll(): void
    /* Methods of Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: (($obj: TimedValueControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-added", callback: (($obj: TimedValueControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-added", timedValue: ControlPoint): void
    on(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-changed", callback: (($obj: TimedValueControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: TimedValueControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-changed", timedValue: ControlPoint): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-removed", callback: (($obj: TimedValueControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-removed", callback: (($obj: TimedValueControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-removed", timedValue: ControlPoint): void
    on(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TimedValueControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TimedValueControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimedValueControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimedValueControlSource_ConstructProps)
    _init (config?: TimedValueControlSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TriggerControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {
    tolerance?: number
}
export class TriggerControlSource {
    /* Properties of GstController.TriggerControlSource */
    tolerance: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstController.TimedValueControlSource */
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    validCache: boolean
    /* Fields of Gst.ControlSource */
    getValue: Gst.ControlSourceGetValue
    getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstController.TimedValueControlSource */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    getAll(): Gst.TimedValue[]
    getCount(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unsetAll(): void
    /* Methods of Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: (($obj: TriggerControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-added", callback: (($obj: TriggerControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-added", timedValue: ControlPoint): void
    on(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-changed", callback: (($obj: TriggerControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: TriggerControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-changed", timedValue: ControlPoint): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-removed", callback: (($obj: TriggerControlSource, timedValue: ControlPoint) => void)): number
    connect_after(sigName: "value-removed", callback: (($obj: TriggerControlSource, timedValue: ControlPoint) => void)): number
    emit(sigName: "value-removed", timedValue: ControlPoint): void
    on(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TriggerControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TriggerControlSource, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tolerance", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TriggerControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TriggerControlSource_ConstructProps)
    _init (config?: TriggerControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TriggerControlSource
    static $gtype: GObject.Type
}
export abstract class ARGBControlBindingClass {
    /* Fields of GstController.ARGBControlBindingClass */
    parentClass: Gst.ControlBindingClass
    static name: string
}
export class ControlPoint {
    /* Fields of GstController.ControlPoint */
    timestamp: Gst.ClockTime
    value: number
    /* Methods of GstController.ControlPoint */
    copy(): ControlPoint
    free(): void
    static name: string
}
export abstract class DirectControlBindingClass {
    /* Fields of GstController.DirectControlBindingClass */
    parentClass: Gst.ControlBindingClass
    static name: string
}
export abstract class InterpolationControlSourceClass {
    /* Fields of GstController.InterpolationControlSourceClass */
    parentClass: TimedValueControlSourceClass
    static name: string
}
export class InterpolationControlSourcePrivate {
    static name: string
}
export abstract class LFOControlSourceClass {
    /* Fields of GstController.LFOControlSourceClass */
    parentClass: Gst.ControlSourceClass
    static name: string
}
export class LFOControlSourcePrivate {
    static name: string
}
export abstract class ProxyControlBindingClass {
    static name: string
}
export abstract class TimedValueControlSourceClass {
    /* Fields of GstController.TimedValueControlSourceClass */
    parentClass: Gst.ControlSourceClass
    static name: string
}
export class TimedValueControlSourcePrivate {
    static name: string
}
export abstract class TriggerControlSourceClass {
    /* Fields of GstController.TriggerControlSourceClass */
    parentClass: TimedValueControlSourceClass
    static name: string
}
export class TriggerControlSourcePrivate {
    static name: string
}
}