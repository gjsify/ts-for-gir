/**
 * GstInsertBin-1.0
 */

/// <reference types="node" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GstInsertBin {

export interface InsertBinCallback {
    (insertbin: InsertBin, element: Gst.Element, success: boolean): void
}
export interface InsertBin_ConstructProps extends Gst.Bin_ConstructProps {
}
export class InsertBin {
    /* Properties of Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    childrenCookie: number
    childBus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Gst.Clock
    clockProvider: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstInsertBin.InsertBin */
    append(element: Gst.Element, callback: InsertBinCallback): void
    insertAfter(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    insertBefore(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    prepend(element: Gst.Element, callback: InsertBinCallback): void
    remove(element: Gst.Element, callback: InsertBinCallback): void
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    /* Methods of Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Virtual methods of GstInsertBin.InsertBin */
    vfuncChildAdded(child: GObject.Object, name: string): void
    vfuncChildRemoved(child: GObject.Object, name: string): void
    vfuncGetChildByIndex(index: number): GObject.Object | null
    vfuncGetChildByName(name: string): GObject.Object | null
    vfuncGetChildrenCount(): number
    /* Virtual methods of Gst.Bin */
    vfuncAddElement(element: Gst.Element): boolean
    vfuncDeepElementAdded(subBin: Gst.Bin, child: Gst.Element): void
    vfuncDeepElementRemoved(subBin: Gst.Bin, child: Gst.Element): void
    vfuncDoLatency(): boolean
    vfuncElementAdded(child: Gst.Element): void
    vfuncElementRemoved(child: Gst.Element): void
    vfuncHandleMessage(message: Gst.Message): void
    vfuncRemoveElement(element: Gst.Element): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Gst.Pad): void
    vfuncPadRemoved(pad: Gst.Pad): void
    vfuncPostMessage(message: Gst.Message): boolean
    vfuncProvideClock(): Gst.Clock | null
    vfuncQuery(query: Gst.Query): boolean
    vfuncReleasePad(pad: Gst.Pad): void
    vfuncRequestNewPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent(event: Gst.Event): boolean
    vfuncSetBus(bus?: Gst.Bus | null): void
    vfuncSetClock(clock?: Gst.Clock | null): boolean
    vfuncSetContext(context: Gst.Context): void
    vfuncSetState(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
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
    /* Signals of GstInsertBin.InsertBin */
    connect(sigName: "append", callback: (($obj: InsertBin, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    connect_after(sigName: "append", callback: (($obj: InsertBin, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    emit(sigName: "append", callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    on(sigName: "append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-after", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    connect_after(sigName: "insert-after", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    emit(sigName: "insert-after", sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    on(sigName: "insert-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-before", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    connect_after(sigName: "insert-before", callback: (($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    emit(sigName: "insert-before", sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    on(sigName: "insert-before", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-before", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-before", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "prepend", callback: (($obj: InsertBin, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    connect_after(sigName: "prepend", callback: (($obj: InsertBin, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    emit(sigName: "prepend", callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    on(sigName: "prepend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prepend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prepend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: InsertBin, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    connect_after(sigName: "remove", callback: (($obj: InsertBin, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    emit(sigName: "remove", callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: InsertBin, subBin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: InsertBin, subBin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    on(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deep-element-removed", callback: (($obj: InsertBin, subBin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: InsertBin, subBin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    on(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "do-latency", callback: (($obj: InsertBin) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: InsertBin) => boolean)): number
    emit(sigName: "do-latency"): void
    on(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-added", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    on(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-removed", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: InsertBin, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    on(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: InsertBin) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: InsertBin) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: InsertBin, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: InsertBin, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: InsertBin, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: InsertBin, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: InsertBin, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: InsertBin, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: InsertBin, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InsertBin_ConstructProps)
    _init (config?: InsertBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): InsertBin
    static $gtype: GObject.Type
}
export abstract class InsertBinClass {
    /* Fields of GstInsertBin.InsertBinClass */
    parentClass: Gst.BinClass
    static name: string
}
export class InsertBinPrivate {
    static name: string
}
}