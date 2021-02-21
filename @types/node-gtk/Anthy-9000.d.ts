/**
 * Anthy-9000
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Anthy {

export const COMPILED_ENCODING: number
export const EUC_JP_ENCODING: number
export const NTH_HALFKANA_CANDIDATE: number
export const NTH_HIRAGANA_CANDIDATE: number
export const NTH_KATAKANA_CANDIDATE: number
export const NTH_UNCONVERTED_CANDIDATE: number
export const RECONVERT_ALWAYS: number
export const RECONVERT_AUTO: number
export const RECONVERT_DISABLE: number
export const UTF8_ENCODING: number
export function commitPrediction(arg0: anthy_context_t, arg1: number): number
export function commitSegment(arg0: anthy_context_t, arg1: number, arg2: number): number
export function confOverride(arg0: string, arg1: string): void
export function contextSetEncoding(ac: anthy_context_t, encoding: number): number
export function getPrediction(arg0: anthy_context_t, arg1: number, arg2: string, arg3: number): number
export function getPredictionStat(arg0: anthy_context_t, arg1: object): number
export function getSegment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string, arg4: number): number
export function getSegmentStat(arg0: anthy_context_t, arg1: number, arg2: object): number
export function getStat(arg0: anthy_context_t, arg1: object): number
export function getVersionString(): string
export function init(): number
export function printContext(arg0: anthy_context_t): void
export function quit(): void
export function releaseContext(arg0: anthy_context_t): void
export function resetContext(arg0: anthy_context_t): void
export function resizeSegment(arg0: anthy_context_t, arg1: number, arg2: number): void
export function setPersonality(arg0: string): number
export function setPredictionString(arg0: anthy_context_t, arg1: string): number
export function setReconversionMode(ac: anthy_context_t, mode: number): number
export function setString(arg0: anthy_context_t, arg1: string): number
export interface logger {
    (level: number, arg1: string): void
}
export interface GContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class GContext {
    /* Fields of Anthy-9000.Anthy.GContext */
    parent: GObject.InitiallyUnowned
    priv: GContextPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Anthy-9000.Anthy.GContext */
    commitPrediction(nthSeg: number): number
    commitSegment(nthSeg: number, nthLookup: number): number
    doSetPersonality(dictName: string): number
    getNrCandidates(nthSeg: number): number
    getNrPredictions(): number
    getNrSegments(): number
    getPrediction(nthSeg: number): string
    getSegment(nthSeg: number, nthLookup: number): string
    initPersonality(): void
    resizeSegment(nth: number, resize: number): void
    setEncoding(encoding: number): number
    setPredictionString(string: string): number
    setString(string: string): number
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GContext_ConstructProps)
    _init (config?: GContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GContext
    static $gtype: GObject.Type
}
export abstract class GContextClass {
    /* Fields of Anthy-9000.Anthy.GContextClass */
    parent: GObject.InitiallyUnownedClass
    static name: string
}
export class GContextPrivate {
    static name: string
}
export class anthy_context_t {
    static name: string
}
export class anthy_conv_stat {
    /* Fields of Anthy-9000.Anthy.anthy_conv_stat */
    nrSegment: number
    static name: string
}
export class anthy_prediction_stat {
    /* Fields of Anthy-9000.Anthy.anthy_prediction_stat */
    nrPrediction: number
    static name: string
}
export class anthy_segment_stat {
    /* Fields of Anthy-9000.Anthy.anthy_segment_stat */
    nrCandidate: number
    segLen: number
    static name: string
}
}