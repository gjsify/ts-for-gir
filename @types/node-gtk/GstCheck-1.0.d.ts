/**
 * GstCheck-1.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstCheck {

function bufferStrawGetBuffer(bin: Gst.Element, pad: Gst.Pad): Gst.Buffer
function bufferStrawStartPipeline(bin: Gst.Element, pad: Gst.Pad): void
function bufferStrawStopPipeline(bin: Gst.Element, pad: Gst.Pad): void
function checkAbiList(list: CheckABIStruct, haveAbiSizes: boolean): void
function checkBufferData(buffer: Gst.Buffer, data: object | null, size: number): void
function checkCapsEqual(caps1: Gst.Caps, caps2: Gst.Caps): void
function checkChainFunc(pad: Gst.Pad, parent: Gst.Object, buffer: Gst.Buffer): Gst.FlowReturn
function checkClearLogFilter(): void
function checkDropBuffers(): void
function checkElementPushBuffer(elementName: string, bufferIn: Gst.Buffer, capsIn: Gst.Caps, bufferOut: Gst.Buffer, capsOut: Gst.Caps): void
function checkElementPushBufferList(elementName: string, bufferIn: Gst.Buffer[], capsIn: Gst.Caps, bufferOut: Gst.Buffer[], capsOut: Gst.Caps, lastFlowReturn: Gst.FlowReturn): void
function checkInit(argc: number, argv: string): void
function checkMessageError(message: Gst.Message, type: Gst.MessageType, domain: GLib.Quark, code: number): void
function checkObjectDestroyedOnUnref(objectToUnref?: object | null): void
function checkRemoveLogFilter(filter: CheckLogFilter): void
function checkSetupElement(factory: string): Gst.Element
function checkSetupEvents(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format): void
function checkSetupEventsWithStreamId(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format, streamId: string): void
function checkSetupSinkPad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad
function checkSetupSinkPadByName(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad
function checkSetupSinkPadByNameFromTemplate(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad
function checkSetupSinkPadFromTemplate(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad
function checkSetupSrcPad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad
function checkSetupSrcPadByName(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad
function checkSetupSrcPadByNameFromTemplate(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad
function checkSetupSrcPadFromTemplate(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad
function checkTeardownElement(element: Gst.Element): void
function checkTeardownPadByName(element: Gst.Element, name: string): void
function checkTeardownSinkPad(element: Gst.Element): void
function checkTeardownSrcPad(element: Gst.Element): void
function consistencyCheckerAddPad(consist: StreamConsistency, pad: Gst.Pad): boolean
function consistencyCheckerFree(consist: StreamConsistency): void
function consistencyCheckerReset(consist: StreamConsistency): void
function harnessStressThreadStop(t: HarnessThread): number
interface CheckLogFilterFunc {
    (logDomain: string, logLevel: GLib.LogLevelFlags, message: string): boolean
}
interface HarnessPrepareBufferFunc {
    (h: Harness, data?: object | null): Gst.Buffer
}
interface HarnessPrepareEventFunc {
    (h: Harness, data?: object | null): Gst.Event
}
export interface TestClock_ConstructProps extends Gst.Clock_ConstructProps {
    clockType?: Gst.ClockType
    startTime?: number
}
class TestClock {
    /* Properties of GstCheck-1.0.GstCheck.TestClock */
    clockType: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstCheck-1.0.GstCheck.TestClock */
    advanceTime(delta: Gst.ClockTimeDiff): void
    crank(): boolean
    getNextEntryTime(): Gst.ClockTime
    hasId(id: Gst.ClockID): boolean
    peekIdCount(): number
    peekNextPendingId(): { returnType: boolean, pendingId: Gst.ClockID | null }
    processId(pendingId: Gst.ClockID): boolean
    processIdList(pendingList?: Gst.ClockID[] | null): number
    processNextClockId(): Gst.ClockID | null
    setTime(newTime: Gst.ClockTime): void
    timedWaitForMultiplePendingIds(count: number, timeoutMs: number): { returnType: boolean, pendingList: Gst.ClockID[] | null }
    waitForMultiplePendingIds(count: number): { pendingList: Gst.ClockID[] | null }
    waitForNextPendingId(): { pendingId: Gst.ClockID | null }
    waitForPendingIdCount(count: number): void
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number }
    addObservationUnapplied(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number, internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    adjustUnlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjustWithCalibration(internalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    getCalibration(): { internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    getInternalTime(): Gst.ClockTime
    getMaster(): Gst.Clock | null
    getResolution(): Gst.ClockTime
    getTime(): Gst.ClockTime
    getTimeout(): Gst.ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    newSingleShotId(time: Gst.ClockTime): Gst.ClockID
    periodicIdReinit(id: Gst.ClockID, startTime: Gst.ClockTime, interval: Gst.ClockTime): boolean
    setCalibration(internal: Gst.ClockTime, external: Gst.ClockTime, rateNum: Gst.ClockTime, rateDenom: Gst.ClockTime): void
    setMaster(master?: Gst.Clock | null): boolean
    setResolution(resolution: Gst.ClockTime): Gst.ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: Gst.ClockTime): void
    singleShotIdReinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjustUnlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjustWithCalibration(externalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    waitForSync(timeout: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: TestClock, synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TestClock, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TestClock_ConstructProps)
    _init (config?: TestClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TestClock
    static newWithStartTime(startTime: Gst.ClockTime): TestClock
    static idListGetLatestTime(pendingList?: Gst.ClockID[] | null): Gst.ClockTime
    static $gtype: GObject.Type
}
class CheckABIStruct {
    /* Fields of GstCheck-1.0.GstCheck.CheckABIStruct */
    name: string
    size: number
    abiSize: number
    static name: string
}
class CheckLogFilter {
    static name: string
}
class Harness {
    /* Fields of GstCheck-1.0.GstCheck.Harness */
    element: Gst.Element
    srcpad: Gst.Pad
    sinkpad: Gst.Pad
    srcHarness: Harness
    sinkHarness: Harness
    /* Methods of GstCheck-1.0.GstCheck.Harness */
    addElementSinkPad(sinkpad: Gst.Pad): void
    addElementSrcPad(srcpad: Gst.Pad): void
    addProbe(elementName: string, padName: string, mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): void
    addProposeAllocationMeta(api: GObject.Type, params?: Gst.Structure | null): void
    addSink(sinkElementName: string): void
    addSinkHarness(sinkHarness: Harness): void
    addSinkParse(launchline: string): void
    addSrc(srcElementName: string, hasClockWait: boolean): void
    addSrcHarness(srcHarness: Harness, hasClockWait: boolean): void
    addSrcParse(launchline: string, hasClockWait: boolean): void
    buffersInQueue(): number
    buffersReceived(): number
    crankMultipleClockWaits(waits: number): boolean
    crankSingleClockWait(): boolean
    createBuffer(size: number): Gst.Buffer
    dumpToFile(filename: string): void
    eventsInQueue(): number
    eventsReceived(): number
    findElement(elementName: string): Gst.Element | null
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getLastPushedTimestamp(): Gst.ClockTime
    getTestclock(): TestClock
    play(): void
    pull(): Gst.Buffer
    pullEvent(): Gst.Event
    pullUntilEos(): { returnType: boolean, buf: Gst.Buffer }
    pullUpstreamEvent(): Gst.Event
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushAndPull(buffer: Gst.Buffer): Gst.Buffer
    pushEvent(event: Gst.Event): boolean
    pushFromSrc(): Gst.FlowReturn
    pushToSink(): Gst.FlowReturn
    pushUpstreamEvent(event: Gst.Event): boolean
    queryLatency(): Gst.ClockTime
    setBlockingPushMode(): void
    setCaps(in_: Gst.Caps, out: Gst.Caps): void
    setCapsStr(in_: string, out: string): void
    setDropBuffers(dropBuffers: boolean): void
    setForwarding(forwarding: boolean): void
    setLive(isLive: boolean): void
    setProposeAllocator(allocator?: Gst.Allocator | null, params?: Gst.AllocationParams | null): void
    setSinkCaps(caps: Gst.Caps): void
    setSinkCapsStr(str: string): void
    setSrcCaps(caps: Gst.Caps): void
    setSrcCapsStr(str: string): void
    setTime(time: Gst.ClockTime): boolean
    setUpstreamLatency(latency: Gst.ClockTime): void
    sinkPushMany(pushes: number): Gst.FlowReturn
    srcCrankAndPushMany(cranks: number, pushes: number): Gst.FlowReturn
    srcPushEvent(): boolean
    takeAllDataAsBuffer(): Gst.Buffer
    takeAllData(): any
    teardown(): void
    tryPull(): Gst.Buffer
    tryPullEvent(): Gst.Event
    tryPullUpstreamEvent(): Gst.Event
    upstreamEventsInQueue(): number
    upstreamEventsReceived(): number
    useSystemclock(): void
    useTestclock(): void
    waitForClockIdWaits(waits: number, timeout: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static stressThreadStop(t: HarnessThread): number
}
class HarnessPrivate {
    static name: string
}
class HarnessThread {
    static name: string
}
class StreamConsistency {
    static name: string
}
abstract class TestClockClass {
    /* Fields of GstCheck-1.0.GstCheck.TestClockClass */
    parentClass: Gst.ClockClass
    static name: string
}
class TestClockPrivate {
    static name: string
}
}
export default GstCheck