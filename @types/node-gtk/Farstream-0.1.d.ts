/**
 * Farstream-0.1
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
// WARN: Dependency not found: 'Gst-0.10'
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Farstream {

export enum CandidateType {
    HOST,
    SRFLX,
    PRFLX,
    RELAY,
    MULTICAST,
}
export enum ComponentType {
    NONE,
    RTP,
    RTCP,
}
export enum DTMFEvent {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    STAR,
    POUND,
    A,
    B,
    C,
    D,
}
export enum DTMFMethod {
    RTP_RFC4733,
    SOUND,
}
export enum Error {
    CONSTRUCTION,
    INTERNAL,
    INVALID_ARGUMENTS,
    NETWORK,
    NOT_IMPLEMENTED,
    NEGOTIATION_FAILED,
    UNKNOWN_CODEC,
    NO_CODECS,
    NO_CODECS_LEFT,
    CONNECTION_FAILED,
    DISPOSED,
    ALREADY_EXISTS,
}
export enum MediaType {
    AUDIO,
    VIDEO,
    LAST,
}
export enum NetworkProtocol {
    UDP,
    TCP,
}
export enum StreamState {
    FAILED,
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
}
export enum StreamDirection {
    NONE,
    SEND,
    RECV,
    BOTH,
}
export const CODEC_FORMAT: string
export const CODEC_ID_ANY: number
export const CODEC_ID_DISABLE: number
export const RTP_HEADER_EXTENSION_FORMAT: string
export function candidateListCopy(candidateList: Codec[]): Codec[]
export function codecListAreEqual(list1: Codec[], list2: Codec[]): boolean
export function codecListCopy(codecList: Codec[]): Codec[]
export function codecListFromKeyfile(filename: string): Codec[]
export function errorQuark(): GLib.Quark
export function mediaTypeToString(mediaType: MediaType): string
export function parseError(object: GObject.Object, message: any): { returnType: boolean, error: Error, errorMsg: string }
export function rtpHeaderExtensionListCopy(extensions: any[]): any[]
export function rtpHeaderExtensionListFromKeyfile(filename: string, mediaType: MediaType): any[]
export function utilsGetDefaultCodecPreferences(element: any): Codec[]
export function utilsGetDefaultElementProperties(element: any): GLib.KeyFile
export function utilsGetDefaultRtpHeaderExtensionPreferences(element: any, mediaType: MediaType): Codec[]
export function utilsSetBitrate(element: any, bitrate: number): void
export class Conference {
    /* Fields of Farstream-0.1.Farstream.Conference */
    parent: any
    /* Methods of Farstream-0.1.Farstream.Conference */
    newParticipant(): Participant
    newSession(mediaType: MediaType): Session
    static name: string
}
export interface ElementAddedNotifier_ConstructProps extends GObject.Object_ConstructProps {
}
export class ElementAddedNotifier {
    /* Fields of Farstream-0.1.Farstream.ElementAddedNotifier */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.ElementAddedNotifier */
    add(bin: any): void
    remove(bin: any): boolean
    setDefaultProperties(element: any): void
    setPropertiesFromFile(filename: string): boolean
    setPropertiesFromKeyfile(keyfile: GLib.KeyFile): void
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
    /* Signals of Farstream-0.1.Farstream.ElementAddedNotifier */
    connect(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: any, element: any) => void)): number
    on(sigName: "element-added", callback: (bin: any, element: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (bin: any, element: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (bin: any, element: any) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", bin: any, element: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ElementAddedNotifier_ConstructProps)
    _init (config?: ElementAddedNotifier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ElementAddedNotifier
    static $gtype: GObject.Type
}
export interface Participant_ConstructProps extends Gst.Object_ConstructProps {
}
export class Participant {
    /* Fields of Farstream-0.1.Farstream.Participant */
    parent: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Participant_ConstructProps)
    _init (config?: Participant_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export class Plugin {
    /* Fields of Farstream-0.1.Farstream.Plugin */
    parent: GObject.TypeModule
    /* Fields of GObject-2.0.GObject.TypeModule */
    parentInstance: GObject.Object
    useCount: number
    typeInfos: object[]
    interfaceInfos: object[]
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    addInterface(instanceType: GObject.Type, interfaceType: GObject.Type, interfaceInfo: GObject.InterfaceInfo): void
    registerEnum(name: string, constStaticValues: GObject.EnumValue): GObject.Type
    registerFlags(name: string, constStaticValues: GObject.FlagsValue): GObject.Type
    registerType(parentType: GObject.Type, typeName: string, typeInfo: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    setName(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    completeInterfaceInfo(instanceType: GObject.Type, interfaceType: GObject.Type, info: GObject.InterfaceInfo): void
    completeTypeInfo(gType: GObject.Type, info: GObject.TypeInfo, valueTable: GObject.TypeValueTable): void
    use(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listAvailable(typeSuffix: string): string[]
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends Gst.Object_ConstructProps {
    conference?: Conference
    id?: number
    mediaType?: MediaType
    tos?: number
}
export class Session {
    /* Properties of Farstream-0.1.Farstream.Session */
    readonly codecPreferences: Codec[]
    readonly codecs: Codec[]
    readonly codecsWithoutConfig: Codec[]
    readonly currentSendCodec: Codec
    readonly sinkPad: any
    tos: number
    /* Fields of Farstream-0.1.Farstream.Session */
    parent: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Session */
    codecsNeedResend(oldCodecs: Codec[], newCodecs: Codec[]): Codec[]
    destroy(): void
    emitError(errorNo: number, errorMsg: string): void
    getStreamTransmitterType(transmitter: string): GObject.Type
    listTransmitters(): string[]
    newStream(participant: Participant, direction: StreamDirection): Stream
    parseCodecsChanged(message: any): boolean
    parseSendCodecChanged(message: any): { returnType: boolean, codec: Codec, secondaryCodecs: Codec[] }
    parseTelephonyEventStarted(message: any): { returnType: boolean, method: DTMFMethod, event: DTMFEvent, volume: number }
    parseTelephonyEventStopped(message: any): { returnType: boolean, method: DTMFMethod }
    setCodecPreferences(codecPreferences: Codec[]): boolean
    setSendCodec(sendCodec: Codec): boolean
    startTelephonyEvent(event: number, volume: number): boolean
    stopTelephonyEvent(): boolean
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
    /* Signals of Farstream-0.1.Farstream.Session */
    connect(sigName: "error", callback: (($obj: Session, object: GObject.Object, errorNo: Error, errorMsg: string) => void)): number
    on(sigName: "error", callback: (object: GObject.Object, errorNo: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (object: GObject.Object, errorNo: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (object: GObject.Object, errorNo: Error, errorMsg: string) => void): NodeJS.EventEmitter
    emit(sigName: "error", object: GObject.Object, errorNo: Error, errorMsg: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codec-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codec-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codec-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codecs-without-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codecs-without-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codecs-without-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-send-codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-send-codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-send-codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends Gst.Object_ConstructProps {
    direction?: StreamDirection
    participant?: Participant
    session?: Session
}
export class Stream {
    /* Properties of Farstream-0.1.Farstream.Stream */
    readonly currentRecvCodecs: Codec[]
    direction: StreamDirection
    readonly negotiatedCodecs: Codec[]
    readonly remoteCodecs: Codec[]
    /* Fields of Farstream-0.1.Farstream.Stream */
    parent: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Stream */
    addId(id: number): void
    addRemoteCandidates(candidates: Candidate[]): boolean
    destroy(): void
    emitError(errorNo: number, errorMsg: string): void
    emitSrcPadAdded(pad: any, codec: Codec): void
    forceRemoteCandidates(remoteCandidates: Candidate[]): boolean
    parseComponentStateChanged(message: any): { returnType: boolean, component: number, state: StreamState }
    parseLocalCandidatesPrepared(message: any): boolean
    parseNewActiveCandidatePair(message: any): { returnType: boolean, localCandidate: Candidate, remoteCandidate: Candidate }
    parseNewLocalCandidate(message: any): { returnType: boolean, candidate: Candidate }
    parseRecvCodecsChanged(message: any): { returnType: boolean, codecs: Codec[] }
    setRemoteCodecs(remoteCodecs: Codec[]): boolean
    setTransmitter(transmitter: string, streamTransmitterParameters: GObject.Parameter, streamTransmitterNParameters: number): boolean
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
    /* Signals of Farstream-0.1.Farstream.Stream */
    connect(sigName: "error", callback: (($obj: Stream, errorno: Error, errorMsg: string) => void)): number
    on(sigName: "error", callback: (errorno: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (errorno: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (errorno: Error, errorMsg: string) => void): NodeJS.EventEmitter
    emit(sigName: "error", errorno: Error, errorMsg: string): void
    connect(sigName: "src-pad-added", callback: (($obj: Stream, pad: any, codec: Codec) => void)): number
    on(sigName: "src-pad-added", callback: (pad: any, codec: Codec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "src-pad-added", callback: (pad: any, codec: Codec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "src-pad-added", callback: (pad: any, codec: Codec) => void): NodeJS.EventEmitter
    emit(sigName: "src-pad-added", pad: any, codec: Codec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-recv-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-recv-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-recv-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-codecs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StreamTransmitter_ConstructProps extends Gst.Object_ConstructProps {
    associateOnSource?: boolean
    preferredLocalCandidates?: any
    sending?: boolean
}
export class StreamTransmitter {
    /* Properties of Farstream-0.1.Farstream.StreamTransmitter */
    sending: boolean
    /* Fields of Farstream-0.1.Farstream.StreamTransmitter */
    parent: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.StreamTransmitter */
    addRemoteCandidates(candidates: Candidate[]): boolean
    emitError(errorNo: number, errorMsg: string): void
    forceRemoteCandidates(remoteCandidates: Candidate[]): boolean
    gatherLocalCandidates(): boolean
    stop(): void
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
    /* Signals of Farstream-0.1.Farstream.StreamTransmitter */
    connect(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, errorMsg: string) => void)): number
    on(sigName: "error", callback: (errorno: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (errorno: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (errorno: Error, errorMsg: string) => void): NodeJS.EventEmitter
    emit(sigName: "error", errorno: Error, errorMsg: string): void
    connect(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    on(sigName: "known-source-packet-received", callback: (component: number, buffer: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "known-source-packet-received", callback: (component: number, buffer: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "known-source-packet-received", callback: (component: number, buffer: object) => void): NodeJS.EventEmitter
    emit(sigName: "known-source-packet-received", component: number, buffer: object): void
    connect(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    on(sigName: "local-candidates-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "local-candidates-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "local-candidates-prepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "local-candidates-prepared"): void
    connect(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, localCandidate: Candidate, remoteCandidate: Candidate) => void)): number
    on(sigName: "new-active-candidate-pair", callback: (localCandidate: Candidate, remoteCandidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-active-candidate-pair", callback: (localCandidate: Candidate, remoteCandidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-active-candidate-pair", callback: (localCandidate: Candidate, remoteCandidate: Candidate) => void): NodeJS.EventEmitter
    emit(sigName: "new-active-candidate-pair", localCandidate: Candidate, remoteCandidate: Candidate): void
    connect(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, localCandidate: Candidate) => void)): number
    on(sigName: "new-local-candidate", callback: (localCandidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-local-candidate", callback: (localCandidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-local-candidate", callback: (localCandidate: Candidate) => void): NodeJS.EventEmitter
    emit(sigName: "new-local-candidate", localCandidate: Candidate): void
    connect(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    on(sigName: "state-changed", callback: (component: number, state: StreamState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (component: number, state: StreamState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (component: number, state: StreamState) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", component: number, state: StreamState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamTransmitter_ConstructProps)
    _init (config?: StreamTransmitter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transmitter_ConstructProps extends Gst.Object_ConstructProps {
    components?: number
    tos?: number
}
export class Transmitter {
    /* Properties of Farstream-0.1.Farstream.Transmitter */
    readonly gstSink: any
    readonly gstSrc: any
    tos: number
    /* Fields of Farstream-0.1.Farstream.Transmitter */
    parent: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Transmitter */
    emitError(errorNo: number, errorMsg: string): void
    getRecvonlyFilter(component: number): any
    getStreamTransmitterType(): GObject.Type
    newStreamTransmitter(participant: Participant, nParameters: number, parameters: GObject.Parameter): StreamTransmitter
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
    /* Signals of Farstream-0.1.Farstream.Transmitter */
    connect(sigName: "error", callback: (($obj: Transmitter, errorno: Error, errorMsg: string) => void)): number
    on(sigName: "error", callback: (errorno: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (errorno: Error, errorMsg: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (errorno: Error, errorMsg: string) => void): NodeJS.EventEmitter
    emit(sigName: "error", errorno: Error, errorMsg: string): void
    connect(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => any)): number
    on(sigName: "get-recvonly-filter", callback: (component: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-recvonly-filter", callback: (component: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-recvonly-filter", callback: (component: number) => void): NodeJS.EventEmitter
    emit(sigName: "get-recvonly-filter", component: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gst-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gst-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gst-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gst-src", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gst-src", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gst-src", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transmitter_ConstructProps)
    _init (config?: Transmitter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: string, components: number, tos: number): Transmitter
    static listAvailable(): string[]
    static $gtype: GObject.Type
}
export class Candidate {
    /* Fields of Farstream-0.1.Farstream.Candidate */
    foundation: string
    componentId: number
    ip: string
    port: number
    baseIp: string
    basePort: number
    proto: NetworkProtocol
    priority: number
    type: CandidateType
    username: string
    password: string
    ttl: number
    /* Methods of Farstream-0.1.Farstream.Candidate */
    copy(): Candidate
    destroy(): void
    static name: string
    static new(foundation: string, componentId: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
    constructor(foundation: string, componentId: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number)
    /* Static methods and pseudo-constructors */
    static new(foundation: string, componentId: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
}
export class Codec {
    /* Fields of Farstream-0.1.Farstream.Codec */
    id: number
    encodingName: string
    mediaType: MediaType
    clockRate: number
    channels: number
    minimumReportingInterval: number
    optionalParams: CodecParameter[]
    feedbackParams: FeedbackParameter[]
    /* Methods of Farstream-0.1.Farstream.Codec */
    addFeedbackParameter(type: string, subtype: string, extraParams: string): void
    addOptionalParameter(name: string, value: string): void
    areEqual(codec2: Codec): boolean
    copy(): Codec
    destroy(): void
    getFeedbackParameter(type: string, subtype: string, extraParams: string): FeedbackParameter
    getOptionalParameter(name: string, value: string): CodecParameter
    removeFeedbackParameter(item: FeedbackParameter[]): void
    removeOptionalParameter(param: CodecParameter): void
    toString(): string
    static name: string
    static new(id: number, encodingName: string, mediaType: MediaType, clockRate: number): Codec
    constructor(id: number, encodingName: string, mediaType: MediaType, clockRate: number)
    /* Static methods and pseudo-constructors */
    static new(id: number, encodingName: string, mediaType: MediaType, clockRate: number): Codec
}
export class CodecParameter {
    /* Fields of Farstream-0.1.Farstream.CodecParameter */
    name: string
    value: string
    /* Methods of Farstream-0.1.Farstream.CodecParameter */
    copy(): CodecParameter
    free(): void
    static name: string
}
export abstract class ConferenceClass {
    /* Fields of Farstream-0.1.Farstream.ConferenceClass */
    parent: any
    newSession: (conference: Conference, mediaType: MediaType) => Session
    newParticipant: (conference: Conference) => Participant
    static name: string
}
export abstract class ElementAddedNotifierClass {
    /* Fields of Farstream-0.1.Farstream.ElementAddedNotifierClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ElementAddedNotifierPrivate {
    static name: string
}
export class FeedbackParameter {
    /* Fields of Farstream-0.1.Farstream.FeedbackParameter */
    type: string
    subtype: string
    extraParams: string
    /* Methods of Farstream-0.1.Farstream.FeedbackParameter */
    copy(): FeedbackParameter
    free(): void
    static name: string
}
export abstract class ParticipantClass {
    /* Fields of Farstream-0.1.Farstream.ParticipantClass */
    parentClass: any
    static name: string
}
export class ParticipantPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Farstream-0.1.Farstream.PluginClass */
    parentClass: GObject.TypeModuleClass
    static name: string
}
export class PluginPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Farstream-0.1.Farstream.SessionClass */
    parentClass: any
    newStream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    startTelephonyEvent: (session: Session, event: number, volume: number) => boolean
    stopTelephonyEvent: (session: Session) => boolean
    setSendCodec: (session: Session, sendCodec: Codec) => boolean
    setCodecPreferences: (session: Session, codecPreferences: Codec[]) => boolean
    listTransmitters: (session: Session) => string[]
    getStreamTransmitterType: (session: Session, transmitter: string) => GObject.Type
    codecsNeedResend: (session: Session, oldCodecs: Codec[], newCodecs: Codec[]) => Codec[]
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class StreamClass {
    /* Fields of Farstream-0.1.Farstream.StreamClass */
    parentClass: any
    addRemoteCandidates: (stream: Stream, candidates: Candidate[]) => boolean
    forceRemoteCandidates: (stream: Stream, remoteCandidates: Candidate[]) => boolean
    setRemoteCodecs: (stream: Stream, remoteCodecs: Codec[]) => boolean
    addId: (stream: Stream, id: number) => void
    setTransmitter: (stream: Stream, transmitter: string, streamTransmitterParameters: GObject.Parameter, streamTransmitterNParameters: number) => boolean
    static name: string
}
export class StreamPrivate {
    static name: string
}
export abstract class StreamTransmitterClass {
    /* Fields of Farstream-0.1.Farstream.StreamTransmitterClass */
    parentClass: any
    addRemoteCandidates: (streamtransmitter: StreamTransmitter, candidates: Candidate[]) => boolean
    forceRemoteCandidates: (streamtransmitter: StreamTransmitter, remoteCandidates: Candidate[]) => boolean
    gatherLocalCandidates: (streamtransmitter: StreamTransmitter) => boolean
    stop: (streamtransmitter: StreamTransmitter) => void
    static name: string
}
export class StreamTransmitterPrivate {
    static name: string
}
export abstract class TransmitterClass {
    /* Fields of Farstream-0.1.Farstream.TransmitterClass */
    parentClass: any
    newStreamTransmitter: (transmitter: Transmitter, participant: Participant, nParameters: number, parameters: GObject.Parameter) => StreamTransmitter
    getStreamTransmitterType: (transmitter: Transmitter) => GObject.Type
    static name: string
}
export class TransmitterPrivate {
    static name: string
}
export class _RtpHeaderExtension {
    /* Fields of Farstream-0.1.Farstream._RtpHeaderExtension */
    id: number
    direction: StreamDirection
    uri: string
    static name: string
}
}