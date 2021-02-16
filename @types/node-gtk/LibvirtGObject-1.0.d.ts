/**
 * LibvirtGObject-1.0
 */

/// <reference types="node" />
/// <reference path="LibvirtGLib-1.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="LibvirtGConfig-1.0.d.ts" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />

declare namespace LibvirtGObject {

export enum DomainDeleteFlags {
    NONE,
    SAVED_STATE,
    SNAPSHOTS_METADATA,
    REMOVE_NVRAM,
    KEEP_NVRAM,
}
export enum DomainRebootFlags {
    NONE,
    ACPI_POWER_BTN,
    GUEST_AGENT,
}
export enum DomainShutdownFlags {
    NONE,
    ACPI_POWER_BTN,
    GUEST_AGENT,
}
export enum DomainSnapshotCreateFlags {
    NONE,
    REDEFINE,
    CURRENT,
    NO_METADATA,
    HALT,
    DISK_ONLY,
    REUSE_EXT,
    QUIESCE,
    ATOMIC,
}
export enum DomainSnapshotDeleteFlags {
    CHILDREN,
    METADATA_ONLY,
    CHILDREN_ONLY,
}
export enum DomainSnapshotListFlags {
    ALL,
    DESCENDANTS,
    ROOTS,
    METADATA,
    LEAVES,
    NO_LEAVES,
    NO_METADATA,
    INACTIVE,
    ACTIVE,
    DISK_ONLY,
    INTERNAL,
    EXTERNAL,
}
export enum DomainSnapshotRevertFlags {
    RUNNING,
    PAUSED,
    FORCE,
}
export enum DomainState {
    NONE,
    RUNNING,
    BLOCKED,
    PAUSED,
    SHUTDOWN,
    SHUTOFF,
    CRASHED,
    PMSUSPENDED,
}
export enum DomainUpdateDeviceFlags {
    CURRENT,
    LIVE,
    CONFIG,
}
export enum DomainXMLFlags {
    NONE,
    SECURE,
    INACTIVE,
    UPDATE_CPU,
}
export enum IPAddrType {
    IPV4,
    IPV6,
}
export enum StoragePoolState {
    INACTIVE,
    BUILDING,
    RUNNING,
    DEGRADED,
    INACCESSIBLE,
}
export enum StorageVolResizeFlags {
    NONE,
    ALLOCATE,
    DELTA,
    SHRINK,
}
export enum StorageVolType {
    FILE,
    BLOCK,
    DIR,
}
export enum DomainStartFlags {
    NONE,
    PAUSED,
    AUTODESTROY,
    BYPASS_CACHE,
    FORCE_BOOT,
}
export enum StreamIOCondition {
    READABLE,
    WRITABLE,
    HANGUP,
    ERROR,
}
export function initObject(argv?: string[] | null): /* argv */ string[] | null
export function initObjectCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export interface StreamIOFunc {
    (stream: Stream, cond: StreamIOCondition, opaque?: object | null): boolean
}
export interface StreamSinkFunc {
    (stream: Stream): number
}
export interface StreamSourceFunc {
    (stream: Stream): number
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
    uri?: string
}
export class Connection {
    /* Fields of LibvirtGObject.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Connection */
    close(): void
    createDomain(conf: LibvirtGConfig.Domain): Domain
    createStoragePool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool
    fetchDomains(cancellable?: Gio.Cancellable | null): boolean
    fetchDomainsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchDomainsFinish(result: Gio.AsyncResult): boolean
    fetchInterfaces(cancellable?: Gio.Cancellable | null): boolean
    fetchInterfacesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchInterfacesFinish(result: Gio.AsyncResult): boolean
    fetchNetworks(cancellable?: Gio.Cancellable | null): boolean
    fetchNetworksAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchNetworksFinish(result: Gio.AsyncResult): boolean
    fetchStoragePools(cancellable?: Gio.Cancellable | null): boolean
    fetchStoragePoolsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchStoragePoolsFinish(result: Gio.AsyncResult): boolean
    findDomainById(id: number): Domain
    findDomainByName(name: string): Domain
    findInterfaceByMac(macaddr: string): Interface
    findNetworkByName(name: string): Network
    findStoragePoolByName(name: string): StoragePool
    getCapabilities(): LibvirtGConfig.Capabilities
    getCapabilitiesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities
    getDomain(uuid: string): Domain
    getDomainCapabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities
    getDomainCapabilitiesAsync(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDomainCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities
    getDomains(): Domain[]
    getHypervisorName(): string
    getInterface(name: string): Interface
    getInterfaces(): Interface[]
    getNetwork(uuid: string): Network
    getNetworks(): Network[]
    getNodeInfo(): NodeInfo
    getStoragePool(uuid: string): StoragePool
    getStoragePools(): StoragePool[]
    getStream(flags: number): Stream
    getUri(): string
    getVersion(): number
    isOpen(): boolean
    isReadOnly(): boolean
    open(cancellable?: Gio.Cancellable | null): boolean
    openAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openReadOnly(cancellable?: Gio.Cancellable | null): boolean
    openReadOnlyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openReadOnlyFinish(result: Gio.AsyncResult): boolean
    restoreDomainFromFile(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    restoreDomainFromFileAsync(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    restoreDomainFromFileFinish(result: Gio.AsyncResult): boolean
    startDomain(conf: LibvirtGConfig.Domain, flags: number): Domain
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
    /* Virtual methods of LibvirtGObject.Connection */
    vfuncConnectionClosed(): void
    vfuncConnectionOpened(): void
    vfuncDomainAdded(dom: Domain): void
    vfuncDomainRemoved(dom: Domain): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of LibvirtGObject.Connection */
    connect(sigName: "connection-closed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Connection) => void)): number
    emit(sigName: "connection-closed"): void
    on(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-opened", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "connection-opened", callback: (($obj: Connection) => void)): number
    emit(sigName: "connection-opened"): void
    on(sigName: "connection-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "domain-added", callback: (($obj: Connection, object: Domain) => void)): number
    connect_after(sigName: "domain-added", callback: (($obj: Connection, object: Domain) => void)): number
    emit(sigName: "domain-added", object: Domain): void
    on(sigName: "domain-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "domain-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "domain-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "domain-removed", callback: (($obj: Connection, object: Domain) => void)): number
    connect_after(sigName: "domain-removed", callback: (($obj: Connection, object: Domain) => void)): number
    emit(sigName: "domain-removed", object: Domain): void
    on(sigName: "domain-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "domain-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "domain-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): Connection
    static $gtype: GObject.Type
}
export interface Domain_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class Domain {
    /* Properties of LibvirtGObject.Domain */
    readonly persistent: boolean
    /* Fields of LibvirtGObject.Domain */
    parent: GObject.Object
    priv: DomainPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Domain */
    createSnapshot(customConf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot
    createSnapshotAsync(customConf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createSnapshotFinish(result: Gio.AsyncResult): DomainSnapshot
    delete(flags: number): boolean
    fetchSnapshots(listFlags: number, cancellable?: Gio.Cancellable | null): boolean
    fetchSnapshotsAsync(listFlags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchSnapshotsFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.Domain
    getDevices(): DomainDevice[]
    getHasCurrentSnapshot(flags: number): [ /* returnType */ boolean, /* hasCurrentSnapshot */ boolean ]
    getId(): number
    getInfo(): DomainInfo
    getInfoAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInfoFinish(result: Gio.AsyncResult): DomainInfo
    getName(): string
    getPersistent(): boolean
    getSaved(): boolean
    getSnapshots(): DomainSnapshot[]
    getUuid(): string
    openConsole(stream: Stream, devname: string | null, flags: number): boolean
    openGraphics(idx: number, fd: number, flags: number): boolean
    openGraphicsFd(idx: number, flags: number): number
    reboot(flags: number): boolean
    resume(): boolean
    resumeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resumeFinish(result: Gio.AsyncResult): boolean
    save(flags: number): boolean
    saveAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    saveToFile(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    saveToFileAsync(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveToFileFinish(result: Gio.AsyncResult): boolean
    screenshot(stream: Stream, monitorId: number, flags: number): string
    setConfig(conf: LibvirtGConfig.Domain): boolean
    setTime(dateTime: GLib.DateTime | null, flags: number): boolean
    setTimeAsync(dateTime: GLib.DateTime | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTimeFinish(result: Gio.AsyncResult): boolean
    shutdown(flags: number): boolean
    start(flags: number): boolean
    startAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(flags: number): boolean
    suspend(): boolean
    updateDevice(device: LibvirtGConfig.DomainDevice, flags: number): boolean
    wakeup(flags: number): boolean
    wakeupAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wakeupFinish(result: Gio.AsyncResult): boolean
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
    /* Virtual methods of LibvirtGObject.Domain */
    vfuncPmsuspended(): void
    vfuncResumed(): void
    vfuncStarted(): void
    vfuncStopped(): void
    vfuncSuspended(): void
    vfuncUpdated(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of LibvirtGObject.Domain */
    connect(sigName: "pmsuspended", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "pmsuspended", callback: (($obj: Domain) => void)): number
    emit(sigName: "pmsuspended"): void
    on(sigName: "pmsuspended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pmsuspended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pmsuspended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Domain) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "started", callback: (($obj: Domain) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Domain) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "suspended", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "suspended", callback: (($obj: Domain) => void)): number
    emit(sigName: "suspended"): void
    on(sigName: "suspended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "suspended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "suspended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "updated", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "updated", callback: (($obj: Domain) => void)): number
    emit(sigName: "updated"): void
    on(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::persistent", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Domain_ConstructProps)
    _init (config?: Domain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainDevice_ConstructProps extends GObject.Object_ConstructProps {
    config?: LibvirtGConfig.DomainDevice
    domain?: Domain
}
export class DomainDevice {
    /* Fields of LibvirtGObject.DomainDevice */
    parent: GObject.Object
    priv: DomainDevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.DomainDevice */
    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainDevice_ConstructProps)
    _init (config?: DomainDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainDisk {
    /* Fields of LibvirtGObject.DomainDisk */
    parent: DomainDevice
    priv: DomainDiskPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.DomainDisk */
    getStats(): DomainDiskStats
    resize(size: number, flags: number): boolean
    /* Methods of LibvirtGObject.DomainDevice */
    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainDisk_ConstructProps)
    _init (config?: DomainDisk_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainInterface {
    /* Fields of LibvirtGObject.DomainInterface */
    parent: DomainDevice
    priv: DomainInterfacePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.DomainInterface */
    getStats(): DomainInterfaceStats
    /* Methods of LibvirtGObject.DomainDevice */
    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterface_ConstructProps)
    _init (config?: DomainInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainSnapshot_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class DomainSnapshot {
    /* Fields of LibvirtGObject.DomainSnapshot */
    parent: GObject.Object
    priv: DomainSnapshotPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.DomainSnapshot */
    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.DomainSnapshot
    getIsCurrent(flags: number): [ /* returnType */ boolean, /* isCurrent */ boolean ]
    getName(): string
    revertTo(flags: number): boolean
    revertToAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revertToFinish(result: Gio.AsyncResult): boolean
    setConfig(conf: LibvirtGConfig.DomainSnapshot): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSnapshot_ConstructProps)
    _init (config?: DomainSnapshot_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class Interface {
    /* Fields of LibvirtGObject.Interface */
    parent: GObject.Object
    priv: InterfacePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Interface */
    getConfig(flags: number): LibvirtGConfig.Interface
    getMac(): string
    getName(): string
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Manager_ConstructProps extends GObject.Object_ConstructProps {
}
export class Manager {
    /* Fields of LibvirtGObject.Manager */
    parent: GObject.Object
    priv: ManagerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Manager */
    addConnection(conn: Connection): void
    findConnectionByUri(uri: string): Connection | null
    getConnections(): Connection[]
    removeConnection(conn: Connection): void
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
    /* Virtual methods of LibvirtGObject.Manager */
    vfuncConnectionAdded(conn: Connection): void
    vfuncConnectionRemoved(conn: Connection): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of LibvirtGObject.Manager */
    connect(sigName: "connection-added", callback: (($obj: Manager, object: Connection) => void)): number
    connect_after(sigName: "connection-added", callback: (($obj: Manager, object: Connection) => void)): number
    emit(sigName: "connection-added", object: Connection): void
    on(sigName: "connection-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-removed", callback: (($obj: Manager, object: Connection) => void)): number
    connect_after(sigName: "connection-removed", callback: (($obj: Manager, object: Connection) => void)): number
    emit(sigName: "connection-removed", object: Connection): void
    on(sigName: "connection-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static $gtype: GObject.Type
}
export interface Network_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class Network {
    /* Fields of LibvirtGObject.Network */
    parent: GObject.Object
    priv: NetworkPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Network */
    getConfig(flags: number): LibvirtGConfig.Network
    getDhcpLeases(mac: string | null, flags: number): NetworkDHCPLease[]
    getName(): string
    getUuid(): string
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
    /* Virtual methods of LibvirtGObject.Network */
    vfuncStarted(): void
    vfuncStopped(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Network_ConstructProps)
    _init (config?: Network_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkDHCPLease_ConstructProps extends GObject.Object_ConstructProps {
    handle?: object
}
export class NetworkDHCPLease {
    /* Fields of LibvirtGObject.NetworkDHCPLease */
    parent: GObject.Object
    priv: NetworkDHCPLeasePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.NetworkDHCPLease */
    getClientId(): string
    getExpiryTime(): number
    getHostname(): string
    getIaid(): string
    getIface(): string
    getIp(): string
    getIpType(): number
    getMac(): string
    getPrefix(): number
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkDHCPLease, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkDHCPLease, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NetworkDHCPLease_ConstructProps)
    _init (config?: NetworkDHCPLease_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkFilter_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class NetworkFilter {
    /* Fields of LibvirtGObject.NetworkFilter */
    parent: GObject.Object
    priv: NetworkFilterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.NetworkFilter */
    getConfig(flags: number): LibvirtGConfig.NetworkFilter
    getName(): string
    getUuid(): string
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NetworkFilter_ConstructProps)
    _init (config?: NetworkFilter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NodeDevice_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class NodeDevice {
    /* Fields of LibvirtGObject.NodeDevice */
    parent: GObject.Object
    priv: NodeDevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.NodeDevice */
    getConfig(flags: number): LibvirtGConfig.NodeDevice
    getName(): string
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NodeDevice_ConstructProps)
    _init (config?: NodeDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Secret_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class Secret {
    /* Fields of LibvirtGObject.Secret */
    parent: GObject.Object
    priv: SecretPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Secret */
    getConfig(flags: number): LibvirtGConfig.Secret
    getName(): string
    getUuid(): string
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Secret_ConstructProps)
    _init (config?: Secret_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StoragePool_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
export class StoragePool {
    /* Fields of LibvirtGObject.StoragePool */
    parent: GObject.Object
    priv: StoragePoolPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.StoragePool */
    build(flags: number): boolean
    buildAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    buildFinish(result: Gio.AsyncResult): boolean
    createVolume(conf: LibvirtGConfig.StorageVol): StorageVol
    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    getActive(): boolean
    getAutostart(): boolean
    getConfig(flags: number): LibvirtGConfig.StoragePool
    getInfo(): StoragePoolInfo
    getName(): string
    getPersistent(): boolean
    getUuid(): string
    getVolume(name: string): StorageVol
    getVolumes(): StorageVol[]
    refresh(cancellable?: Gio.Cancellable | null): boolean
    refreshAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    setAutostart(autostart: boolean): boolean
    start(flags: number): boolean
    startAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(): boolean
    stopAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stopFinish(result: Gio.AsyncResult): boolean
    undefine(): boolean
    undefineAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    undefineFinish(result: Gio.AsyncResult): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StoragePool_ConstructProps)
    _init (config?: StoragePool_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StorageVol_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
    pool?: StoragePool
}
export class StorageVol {
    /* Fields of LibvirtGObject.StorageVol */
    parent: GObject.Object
    priv: StorageVolPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.StorageVol */
    delete(flags: number): boolean
    download(stream: Stream, offset: number, length: number, flags: number): boolean
    getConfig(flags: number): LibvirtGConfig.StorageVol
    getInfo(): StorageVolInfo
    getName(): string
    getPath(): string
    resize(capacity: number, flags: StorageVolResizeFlags): boolean
    upload(stream: Stream, offset: number, length: number, flags: number): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StorageVol_ConstructProps)
    _init (config?: StorageVol_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends Gio.IOStream_ConstructProps {
    handle?: any
}
export class Stream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: Gio.InputStream
    readonly outputStream: Gio.OutputStream
    /* Fields of LibvirtGObject.Stream */
    parentInstance: Gio.IOStream
    priv: StreamPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject.Stream */
    addWatch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number
    receive(buffer: any, cancellable?: Gio.Cancellable | null): number
    receiveAll(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number
    send(buffer: string, size: number, cancellable?: Gio.Cancellable | null): number
    sendAll(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    getInputStream(): Gio.InputStream
    getOutputStream(): Gio.OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: Gio.IOStream, flags: Gio.IOStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish(result: Gio.AsyncResult): boolean
    vfuncCloseFn(cancellable?: Gio.Cancellable | null): boolean
    vfuncGetInputStream(): Gio.InputStream
    vfuncGetOutputStream(): Gio.OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export abstract class ConnectionClass {
    /* Fields of LibvirtGObject.ConnectionClass */
    parentClass: GObject.ObjectClass
    connectionOpened: (conn: Connection) => void
    connectionClosed: (conn: Connection) => void
    domainAdded: (conn: Connection, dom: Domain) => void
    domainRemoved: (conn: Connection, dom: Domain) => void
    padding: object[]
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export abstract class DomainClass {
    /* Fields of LibvirtGObject.DomainClass */
    parentClass: GObject.ObjectClass
    started: (dom: Domain) => void
    stopped: (dom: Domain) => void
    resumed: (dom: Domain) => void
    updated: (dom: Domain) => void
    suspended: (dom: Domain) => void
    pmsuspended: (dom: Domain) => void
    padding: object[]
    static name: string
}
export abstract class DomainDeviceClass {
    /* Fields of LibvirtGObject.DomainDeviceClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class DomainDevicePrivate {
    static name: string
}
export abstract class DomainDiskClass {
    /* Fields of LibvirtGObject.DomainDiskClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainDiskPrivate {
    static name: string
}
export class DomainDiskStats {
    /* Fields of LibvirtGObject.DomainDiskStats */
    rdReq: number
    rdBytes: number
    wrReq: number
    wrBytes: number
    errs: number
    static name: string
}
export class DomainInfo {
    /* Fields of LibvirtGObject.DomainInfo */
    state: DomainState
    maxMem: number
    memory: number
    nrVirtCpu: number
    cpuTime: number
    static name: string
}
export abstract class DomainInterfaceClass {
    /* Fields of LibvirtGObject.DomainInterfaceClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainInterfacePrivate {
    static name: string
}
export class DomainInterfaceStats {
    /* Fields of LibvirtGObject.DomainInterfaceStats */
    rxBytes: number
    rxPackets: number
    rxErrs: number
    rxDrop: number
    txBytes: number
    txPackets: number
    txErrs: number
    txDrop: number
    static name: string
}
export class DomainPrivate {
    static name: string
}
export abstract class DomainSnapshotClass {
    /* Fields of LibvirtGObject.DomainSnapshotClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class DomainSnapshotPrivate {
    static name: string
}
export abstract class InterfaceClass {
    /* Fields of LibvirtGObject.InterfaceClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class InterfacePrivate {
    static name: string
}
export abstract class ManagerClass {
    /* Fields of LibvirtGObject.ManagerClass */
    parentClass: GObject.ObjectClass
    connectionAdded: (man: Manager, conn: Connection) => void
    connectionRemoved: (man: Manager, conn: Connection) => void
    padding: object[]
    static name: string
}
export class ManagerPrivate {
    static name: string
}
export abstract class NetworkClass {
    /* Fields of LibvirtGObject.NetworkClass */
    parentClass: GObject.ObjectClass
    started: (net: Network) => void
    stopped: (net: Network) => void
    padding: object[]
    static name: string
}
export abstract class NetworkDHCPLeaseClass {
    /* Fields of LibvirtGObject.NetworkDHCPLeaseClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class NetworkDHCPLeasePrivate {
    static name: string
}
export abstract class NetworkFilterClass {
    /* Fields of LibvirtGObject.NetworkFilterClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class NetworkFilterPrivate {
    static name: string
}
export class NetworkPrivate {
    static name: string
}
export abstract class NodeDeviceClass {
    /* Fields of LibvirtGObject.NodeDeviceClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class NodeDevicePrivate {
    static name: string
}
export class NodeInfo {
    /* Fields of LibvirtGObject.NodeInfo */
    model: number[]
    memory: number
    cpus: number
    mhz: number
    nodes: number
    sockets: number
    cores: number
    threads: number
    static name: string
}
export abstract class SecretClass {
    /* Fields of LibvirtGObject.SecretClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class SecretPrivate {
    static name: string
}
export abstract class StoragePoolClass {
    /* Fields of LibvirtGObject.StoragePoolClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class StoragePoolInfo {
    /* Fields of LibvirtGObject.StoragePoolInfo */
    state: StoragePoolState
    capacity: number
    allocation: number
    available: number
    static name: string
}
export class StoragePoolPrivate {
    static name: string
}
export abstract class StorageVolClass {
    /* Fields of LibvirtGObject.StorageVolClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class StorageVolInfo {
    /* Fields of LibvirtGObject.StorageVolInfo */
    type: StorageVolType
    capacity: number
    allocation: number
    static name: string
}
export class StorageVolPrivate {
    static name: string
}
export abstract class StreamClass {
    /* Fields of LibvirtGObject.StreamClass */
    parentClass: Gio.IOStreamClass
    padding: object[]
    static name: string
}
export class StreamPrivate {
    static name: string
}
}