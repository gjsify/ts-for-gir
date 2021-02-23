/**
 * GstInterfaces-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gst } from './Gst-0.10';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstInterfaces {

export enum ColorBalanceType {
    HARDWARE,
    SOFTWARE,
}
export enum MixerMessageType {
    INVALID,
    MUTE_TOGGLED,
    RECORD_TOGGLED,
    VOLUME_CHANGED,
    OPTION_CHANGED,
    OPTIONS_LIST_CHANGED,
    MIXER_CHANGED,
}
export enum MixerType {
    HARDWARE,
    SOFTWARE,
}
export enum NavigationCommand {
    INVALID,
    MENU1,
    MENU2,
    MENU3,
    MENU4,
    MENU5,
    MENU6,
    MENU7,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    ACTIVATE,
    PREV_ANGLE,
    NEXT_ANGLE,
}
export enum NavigationEventType {
    INVALID,
    KEY_PRESS,
    KEY_RELEASE,
    MOUSE_BUTTON_PRESS,
    MOUSE_BUTTON_RELEASE,
    MOUSE_MOVE,
    COMMAND,
}
export enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
}
export enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
export enum StreamVolumeFormat {
    LINEAR,
    CUBIC,
    DB,
}
export enum MixerFlags {
    NONE,
    AUTO_NOTIFICATIONS,
    HAS_WHITELIST,
    GROUPING,
}
export enum MixerTrackFlags {
    INPUT,
    OUTPUT,
    MUTE,
    RECORD,
    MASTER,
    SOFTWARE,
    NO_RECORD,
    NO_MUTE,
    WHITELIST,
    READONLY,
    WRITEONLY,
}
export enum TunerChannelFlags {
    INPUT,
    OUTPUT,
    FREQUENCY,
    AUDIO,
}
export function interfacesMarshalVOIDOBJECTBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function interfacesMarshalVOIDOBJECTINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function interfacesMarshalVOIDOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function interfacesMarshalVOIDOBJECTSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function interfacesMarshalVOIDOBJECTULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function mixerMessageGetType(message: Gst.Message): MixerMessageType
export function mixerMessageParseMuteToggled(message: Gst.Message, track: MixerTrack, mute: boolean): void
export function mixerMessageParseOptionChanged(message: Gst.Message, options: MixerOptions, value: string): void
export function mixerMessageParseOptionsListChanged(message: Gst.Message, options: MixerOptions): void
export function mixerMessageParseRecordToggled(message: Gst.Message, track: MixerTrack, record: boolean): void
export function mixerMessageParseVolumeChanged(message: Gst.Message, track: MixerTrack, volumes: number, numChannels: number): void
export function navigationEventGetType(event: Gst.Event): NavigationEventType
export function navigationEventParseCommand(event: Gst.Event, command: NavigationCommand): boolean
export function navigationEventParseKeyEvent(event: Gst.Event, key: string): boolean
export function navigationEventParseMouseButtonEvent(event: Gst.Event, button: number, x: number, y: number): boolean
export function navigationEventParseMouseMoveEvent(event: Gst.Event, x: number, y: number): boolean
export function navigationMessageGetType(message: Gst.Message): NavigationMessageType
export function navigationMessageParseAnglesChanged(message: Gst.Message, curAngle: number, nAngles: number): boolean
export function navigationMessageParseMouseOver(message: Gst.Message, active: boolean): boolean
export function navigationQueryGetType(query: Gst.Query): NavigationQueryType
export function navigationQueryParseAngles(query: Gst.Query, curAngle: number, nAngles: number): boolean
export function navigationQueryParseCommandsLength(query: Gst.Query, nCmds: number): boolean
export function navigationQueryParseCommandsNth(query: Gst.Query, nth: number, cmd: NavigationCommand): boolean
export function navigationQuerySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
export function navigationQuerySetCommandsv(query: Gst.Query, nCmds: number, cmds: NavigationCommand): void
export function streamVolumeConvertVolume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
export interface ColorBalance_ConstructProps extends Gst.Element_ConstructProps {
}
export class ColorBalance {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    getBalanceType(): ColorBalanceType
    getValue(channel: ColorBalanceChannel): number
    listChannels(): object[]
    setValue(channel: ColorBalanceChannel, value: number): void
    valueChanged(channel: ColorBalanceChannel, value: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: ColorBalance, object: ColorBalanceChannel, p0: number) => void)): number
    on(sigName: "value-changed", callback: (object: ColorBalanceChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (object: ColorBalanceChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (object: ColorBalanceChannel, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", object: ColorBalanceChannel, p0: number): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: ColorBalance) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: ColorBalance, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: ColorBalance, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ColorBalance, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ColorBalance, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ColorBalance, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: ColorBalance, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalance, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ColorBalance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ColorBalance, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ColorBalance_ConstructProps)
    _init (config?: ColorBalance_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Mixer_ConstructProps extends Gst.Element_ConstructProps {
}
export class Mixer {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.Mixer */
    getMixerFlags(): MixerFlags
    getMixerType(): MixerType
    getOption(opts: MixerOptions): string
    getVolume(track: MixerTrack, volumes: number): void
    listTracks(): object[]
    mixerChanged(): void
    muteToggled(track: MixerTrack, mute: boolean): void
    optionChanged(opts: MixerOptions, value: string): void
    optionsListChanged(opts: MixerOptions): void
    recordToggled(track: MixerTrack, record: boolean): void
    setMute(track: MixerTrack, mute: boolean): void
    setOption(opts: MixerOptions, value: string): void
    setRecord(track: MixerTrack, record: boolean): void
    setVolume(track: MixerTrack, volumes: number): void
    volumeChanged(track: MixerTrack, volumes: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.Mixer */
    connect(sigName: "mute-toggled", callback: (($obj: Mixer, object: MixerTrack, p0: boolean) => void)): number
    on(sigName: "mute-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-toggled", callback: (object: MixerTrack, p0: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mute-toggled", object: MixerTrack, p0: boolean): void
    connect(sigName: "option-changed", callback: (($obj: Mixer, object: MixerOptions, p0: string) => void)): number
    on(sigName: "option-changed", callback: (object: MixerOptions, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "option-changed", callback: (object: MixerOptions, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "option-changed", callback: (object: MixerOptions, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "option-changed", object: MixerOptions, p0: string): void
    connect(sigName: "record-toggled", callback: (($obj: Mixer, object: MixerTrack, p0: boolean) => void)): number
    on(sigName: "record-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-toggled", callback: (object: MixerTrack, p0: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "record-toggled", object: MixerTrack, p0: boolean): void
    connect(sigName: "volume-changed", callback: (($obj: Mixer, object: MixerTrack, p0: object) => void)): number
    on(sigName: "volume-changed", callback: (object: MixerTrack, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (object: MixerTrack, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (object: MixerTrack, p0: object) => void): NodeJS.EventEmitter
    emit(sigName: "volume-changed", object: MixerTrack, p0: object): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Mixer) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Mixer, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Mixer, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Mixer, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Mixer, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Mixer, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Mixer, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Mixer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Mixer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Mixer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mixer_ConstructProps)
    _init (config?: Mixer_ConstructProps): void
    static $gtype: GObject.Type
}
export class Navigation {
    /* Methods of GstInterfaces-0.10.GstInterfaces.Navigation */
    sendCommand(command: NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    static name: string
}
export class PropertyProbe {
    /* Methods of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    getProperties(): object[]
    getProperty(name: string): GObject.ParamSpec
    getValues(pspec: GObject.ParamSpec): GObject.ValueArray
    getValuesName(name: string): GObject.ValueArray
    needsProbe(pspec: GObject.ParamSpec): boolean
    needsProbeName(name: string): boolean
    probeAndGetValues(pspec: GObject.ParamSpec): GObject.ValueArray
    probeAndGetValuesName(name: string): GObject.ValueArray
    probeProperty(pspec: GObject.ParamSpec): void
    probePropertyName(name: string): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    connect(sigName: "probe-needed", callback: (($obj: PropertyProbe, object: object) => void)): number
    on(sigName: "probe-needed", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "probe-needed", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "probe-needed", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "probe-needed", object: object): void
    static name: string
}
export class StreamVolume {
    /* Properties of GstInterfaces-0.10.GstInterfaces.StreamVolume */
    mute: boolean
    volume: number
    /* Methods of GstInterfaces-0.10.GstInterfaces.StreamVolume */
    getMute(): boolean
    getVolume(format: StreamVolumeFormat): number
    setMute(mute: boolean): void
    setVolume(format: StreamVolumeFormat, val: number): void
    static name: string
}
export interface Tuner_ConstructProps extends Gst.Element_ConstructProps {
}
export class Tuner {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.Tuner */
    channelChanged(channel: TunerChannel): void
    frequencyChanged(channel: TunerChannel, frequency: number): void
    getFrequency(channel: TunerChannel): number
    listChannels(): object[]
    listNorms(): object[]
    normChanged(norm: TunerNorm): void
    setChannel(channel: TunerChannel): void
    setFrequency(channel: TunerChannel, frequency: number): void
    setNorm(norm: TunerNorm): void
    signalChanged(channel: TunerChannel, signal: number): void
    signalStrength(channel: TunerChannel): number
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.Tuner */
    connect(sigName: "channel-changed", callback: (($obj: Tuner, object: TunerChannel) => void)): number
    on(sigName: "channel-changed", callback: (object: TunerChannel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-changed", callback: (object: TunerChannel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-changed", callback: (object: TunerChannel) => void): NodeJS.EventEmitter
    emit(sigName: "channel-changed", object: TunerChannel): void
    connect(sigName: "frequency-changed", callback: (($obj: Tuner, object: TunerChannel, p0: number) => void)): number
    on(sigName: "frequency-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frequency-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frequency-changed", callback: (object: TunerChannel, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frequency-changed", object: TunerChannel, p0: number): void
    connect(sigName: "norm-changed", callback: (($obj: Tuner, object: TunerNorm) => void)): number
    on(sigName: "norm-changed", callback: (object: TunerNorm) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "norm-changed", callback: (object: TunerNorm) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "norm-changed", callback: (object: TunerNorm) => void): NodeJS.EventEmitter
    emit(sigName: "norm-changed", object: TunerNorm): void
    connect(sigName: "signal-changed", callback: (($obj: Tuner, object: TunerChannel, p0: number) => void)): number
    on(sigName: "signal-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-changed", callback: (object: TunerChannel, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "signal-changed", object: TunerChannel, p0: number): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Tuner) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Tuner, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Tuner, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Tuner, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Tuner, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Tuner, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Tuner, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tuner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Tuner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tuner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tuner_ConstructProps)
    _init (config?: Tuner_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoOrientation_ConstructProps extends Gst.Element_ConstructProps {
}
export class VideoOrientation {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.VideoOrientation */
    getHcenter(center: number): boolean
    getHflip(flip: boolean): boolean
    getVcenter(center: number): boolean
    getVflip(flip: boolean): boolean
    setHcenter(center: number): boolean
    setHflip(flip: boolean): boolean
    setVcenter(center: number): boolean
    setVflip(flip: boolean): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoOrientation) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoOrientation, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoOrientation, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoOrientation, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: VideoOrientation, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: VideoOrientation, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: VideoOrientation, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoOrientation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: VideoOrientation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoOrientation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoOrientation_ConstructProps)
    _init (config?: VideoOrientation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface XOverlay_ConstructProps extends Gst.Element_ConstructProps {
}
export class XOverlay {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.XOverlay */
    expose(): void
    gotXwindowId(xwindowId: number): void
    handleEvents(handleEvents: boolean): void
    prepareXwindowId(): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setXwindowId(xwindowId: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: XOverlay) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: XOverlay, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: XOverlay, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: XOverlay, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: XOverlay, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: XOverlay, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: XOverlay, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: XOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XOverlay_ConstructProps)
    _init (config?: XOverlay_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
export class ColorBalanceChannel {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel */
    parent: GObject.Object
    label: string
    minValue: number
    maxValue: number
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, object: number) => void)): number
    on(sigName: "value-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerOptions_ConstructProps extends MixerTrack_ConstructProps {
}
export class MixerOptions {
    /* Properties of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    readonly flags: number
    readonly label: string
    readonly maxVolume: number
    readonly minVolume: number
    readonly numChannels: number
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerOptions */
    parent: MixerTrack
    values: object[]
    gstReserved: object[]
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
    connect(sigName: "notify", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-volume", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-volume", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-volume", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-volume", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-channels", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-channels", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerOptions_ConstructProps)
    _init (config?: MixerOptions_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerTrack_ConstructProps extends GObject.Object_ConstructProps {
    index?: number
    untranslatedLabel?: string
}
export class MixerTrack {
    /* Properties of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    readonly flags: number
    readonly label: string
    readonly maxVolume: number
    readonly minVolume: number
    readonly numChannels: number
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    parent: GObject.Object
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
    connect(sigName: "notify", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-channels", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-channels", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerTrack_ConstructProps)
    _init (config?: MixerTrack_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TunerChannel_ConstructProps extends GObject.Object_ConstructProps {
}
export class TunerChannel {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerChannel */
    parent: GObject.Object
    label: string
    flags: TunerChannelFlags
    freqMultiplicator: number
    minFrequency: number
    maxFrequency: number
    minSignal: number
    maxSignal: number
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.TunerChannel */
    connect(sigName: "frequency-changed", callback: (($obj: TunerChannel, object: number) => void)): number
    on(sigName: "frequency-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frequency-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frequency-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "frequency-changed", object: number): void
    connect(sigName: "signal-changed", callback: (($obj: TunerChannel, object: number) => void)): number
    on(sigName: "signal-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "signal-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TunerChannel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TunerChannel_ConstructProps)
    _init (config?: TunerChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TunerNorm_ConstructProps extends GObject.Object_ConstructProps {
}
export class TunerNorm {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerNorm */
    parent: GObject.Object
    label: string
    framerate: any
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
    connect(sigName: "notify", callback: (($obj: TunerNorm, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TunerNorm_ConstructProps)
    _init (config?: TunerNorm_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ColorBalanceChannelClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannelClass */
    parent: GObject.ObjectClass
    valueChanged: (channel: ColorBalanceChannel, value: number) => void
    gstReserved: object[]
    static name: string
}
export class ColorBalanceClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceClass */
    klass: GObject.TypeInterface
    balanceType: ColorBalanceType
    listChannels: (balance: ColorBalance) => object[]
    setValue: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    getValue: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    valueChanged: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    gstReserved: object[]
    static name: string
}
export class MixerClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerClass */
    klass: GObject.TypeInterface
    mixerType: MixerType
    listTracks: (mixer: Mixer) => object[]
    setVolume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    getVolume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    setMute: (mixer: Mixer, track: MixerTrack, mute: boolean) => void
    setRecord: (mixer: Mixer, track: MixerTrack, record: boolean) => void
    muteToggled: (mixer: Mixer, channel: MixerTrack, mute: boolean) => void
    recordToggled: (mixer: Mixer, channel: MixerTrack, record: boolean) => void
    volumeChanged: (mixer: Mixer, channel: MixerTrack, volumes: number) => void
    setOption: (mixer: Mixer, opts: MixerOptions, value: string) => void
    getOption: (mixer: Mixer, opts: MixerOptions) => string
    optionChanged: (mixer: Mixer, opts: MixerOptions, option: string) => void
    getMixerFlags: (mixer: Mixer) => MixerFlags
    gstReserved: object[]
    static name: string
}
export abstract class MixerOptionsClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerOptionsClass */
    parent: MixerTrackClass
    gstReserved: object[]
    static name: string
}
export abstract class MixerTrackClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerTrackClass */
    parent: GObject.ObjectClass
    gstReserved: object[]
    static name: string
}
export abstract class NavigationInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.NavigationInterface */
    gIface: GObject.TypeInterface
    sendEvent: (navigation: Navigation, structure: Gst.Structure) => void
    gstReserved: object[]
    static name: string
}
export abstract class PropertyProbeInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.PropertyProbeInterface */
    klass: GObject.TypeInterface
    probeNeeded: (probe: PropertyProbe, pspec: GObject.ParamSpec) => void
    getProperties: (probe: PropertyProbe) => object[]
    needsProbe: (probe: PropertyProbe, propId: number, pspec: GObject.ParamSpec) => boolean
    probeProperty: (probe: PropertyProbe, propId: number, pspec: GObject.ParamSpec) => void
    getValues: (probe: PropertyProbe, propId: number, pspec: GObject.ParamSpec) => GObject.ValueArray
    gstReserved: object[]
    static name: string
}
export abstract class StreamVolumeInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.StreamVolumeInterface */
    parent: GObject.TypeInterface
    gstReserved: object[]
    static name: string
}
export abstract class TunerChannelClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerChannelClass */
    parent: GObject.ObjectClass
    frequencyChanged: (channel: TunerChannel, frequency: number) => void
    signalChanged: (channel: TunerChannel, signal: number) => void
    gstReserved: object[]
    static name: string
}
export class TunerClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerClass */
    klass: GObject.TypeInterface
    listChannels: (tuner: Tuner) => object[]
    setChannel: (tuner: Tuner, channel: TunerChannel) => void
    listNorms: (tuner: Tuner) => object[]
    setNorm: (tuner: Tuner, norm: TunerNorm) => void
    setFrequency: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    getFrequency: (tuner: Tuner, channel: TunerChannel) => number
    signalStrength: (tuner: Tuner, channel: TunerChannel) => number
    channelChanged: (tuner: Tuner, channel: TunerChannel) => void
    normChanged: (tuner: Tuner, norm: TunerNorm) => void
    frequencyChanged: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    signalChanged: (tuner: Tuner, channel: TunerChannel, signal: number) => void
    gstReserved: object[]
    static name: string
}
export abstract class TunerNormClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerNormClass */
    parent: GObject.ObjectClass
    gstReserved: object[]
    static name: string
}
export abstract class VideoOrientationInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.VideoOrientationInterface */
    parent: GObject.TypeInterface
    getHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    getVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    getHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    getVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    setHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    setVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    setHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    setVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    static name: string
}
export class XOverlayClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.XOverlayClass */
    klass: GObject.TypeInterface
    setXwindowId: (overlay: XOverlay, xwindowId: number) => void
    expose: (overlay: XOverlay) => void
    handleEvents: (overlay: XOverlay, handleEvents: boolean) => void
    setRenderRectangle: (overlay: XOverlay, x: number, y: number, width: number, height: number) => void
    gstReserved: object[]
    static name: string
}
}