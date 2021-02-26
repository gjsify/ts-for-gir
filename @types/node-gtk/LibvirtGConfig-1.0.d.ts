/**
 * LibvirtGConfig-1.0
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace LibvirtGConfig {

export enum DomainChannelTargetType {
    GUESTFWD,
    VIRTIO,
    SPICEPORT,
}
export enum DomainClockOffset {
    UTC,
    LOCALTIME,
    TIMEZONE,
    VARIABLE,
}
export enum DomainConsoleTargetType {
    XEN,
    SERIAL,
    UML,
    VIRTIO,
    LXC,
    OPENVZ,
}
export enum DomainControllerUsbModel {
    PIIX3_UHCI,
    PIIX4_UHCI,
    EHCI,
    ICH9_EHCI1,
    ICH9_UHCI1,
    ICH9_UHCI2,
    ICH9_UHCI3,
    VT82C686B_UHCI,
    PCI_OHCI,
    QEMU_XHCI,
}
export enum DomainCpuFeaturePolicy {
    FORCE,
    REQUIRE,
    OPTIONAL,
    DISABLE,
    FORBID,
}
export enum DomainCpuMatchPolicy {
    MINIMUM,
    EXACT,
    STRICT,
}
export enum DomainCpuMode {
    CUSTOM,
    HOST_MODEL,
    HOST_PASSTHROUGH,
}
export enum DomainDiskBus {
    IDE,
    FDC,
    SCSI,
    VIRTIO,
    XEN,
    USB,
    UML,
    SATA,
}
export enum DomainDiskCacheType {
    DEFAULT,
    NONE,
    WRITETHROUGH,
    WRITEBACK,
    DIRECTSYNC,
    UNSAFE,
}
export enum DomainDiskDriverDiscard {
    UNMAP,
    IGNORE,
}
export enum DomainDiskDriverErrorPolicy {
    STOP,
    REPORT,
    IGNORE,
    ENOSPACE,
}
export enum DomainDiskDriverIoPolicy {
    THREADS,
    NATIVE,
}
export enum DomainDiskFormat {
    RAW,
    DIR,
    BOCHS,
    CLOOP,
    COW,
    DMG,
    ISO,
    QCOW,
    QCOW2,
    QED,
    VMDK,
    VPC,
    FAT,
    VHD,
}
export enum DomainDiskGuestDeviceType {
    DISK,
    FLOPPY,
    CDROM,
}
export enum DomainDiskSnapshotType {
    NO,
    INTERNAL,
    EXTERNAL,
}
export enum DomainDiskStartupPolicy {
    MANDATORY,
    REQUISITE,
    OPTIONAL,
}
export enum DomainDiskType {
    FILE,
    BLOCK,
    DIR,
    NETWORK,
}
export enum DomainFilesysAccessType {
    PASSTHROUGH,
    MAPPED,
    SQUASH,
}
export enum DomainFilesysDriverType {
    DEFAULT,
    PATH,
    HANDLE,
    LOOP,
    NBD,
    PLOOP,
}
export enum DomainFilesysType {
    MOUNT,
    BLOCK,
    FILE,
    TEMPLATE,
    RAM,
    BIND,
}
export enum DomainGraphicsSpiceImageCompression {
    AUTO_GLZ,
    AUTO_LZ,
    QUIC,
    GLZ,
    LZ,
    OFF,
}
export enum DomainInputBus {
    PS2,
    USB,
    XEN,
}
export enum DomainInputDeviceType {
    MOUSE,
    TABLET,
    KEYBOARD,
}
export enum DomainInterfaceLinkState {
    DEFAULT,
    UP,
    DOWN,
}
export enum DomainLifecycleAction {
    DESTROY,
    RESTART,
    PRESERVE,
    RENAME_RESTART,
    COREDUMP_DESTROY,
    COREDUMP_RESTART,
}
export enum DomainLifecycleEvent {
    ON_POWEROFF,
    ON_REBOOT,
    ON_CRASH,
}
export enum DomainMemballoonModel {
    NONE,
    VIRTIO,
}
export enum DomainOsBootDevice {
    FD,
    HD,
    CDROM,
    NETWORK,
}
export enum DomainOsFirmware {
    BIOS,
    EFI,
}
export enum DomainOsSmBiosMode {
    EMULATE,
    HOST,
    SYSINFO,
}
export enum DomainOsType {
    HVM,
    LINUX,
    EXE,
    XEN,
    UML,
}
export enum DomainRedirdevBus {
    USB,
}
export enum DomainSeclabelType {
    DYNAMIC,
    STATIC,
}
export enum DomainSnapshotDomainState {
    NOSTATE,
    RUNNING,
    BLOCKED,
    PAUSED,
    SHUTDOWN,
    SHUTOFF,
    CRASHED,
    PMSUSPENDED,
    DISK_SNAPSHOT,
}
export enum DomainSnapshotMemoryState {
    NONE,
    INTERNAL,
    EXTERNAL,
}
export enum DomainSoundModel {
    SB16,
    ES1370,
    PCSPK,
    AC97,
    ICH6,
    ICH9,
}
export enum DomainTimerTickPolicy {
    DELAY,
    CATCHUP,
    MERGE,
    DISCARD,
}
export enum DomainVideoModel {
    VGA,
    CIRRUS,
    VMVGA,
    XEN,
    VBOX,
    QXL,
    VIRTIO,
    BOCHS,
}
export enum DomainVirtType {
    QEMU,
    KQEMU,
    KVM,
    XEN,
    LXC,
    UML,
    OPENVZ,
    VSERVER,
    LDOM,
    TEST,
    VMWARE,
    HYPERV,
    VBOX,
    ONE,
    PHYP,
}
export enum StoragePoolType {
    DIR,
    FS,
    NETFS,
    LOGICAL,
    DISK,
    ISCSI,
    SCSI,
    MPATH,
}
export enum StorageVolTargetFeatures {
    REFCOUNT,
}
export function init(argv?: string[] | null): { argv: string[] | null }
export function initCheck(argv?: string[] | null): { returnType: boolean, argv: string[] | null }
export interface Capabilities_ConstructProps extends Object_ConstructProps {
}
export class Capabilities {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities */
    parent: Object
    priv: CapabilitiesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities */
    getGuests(): CapabilitiesGuest[]
    getHost(): CapabilitiesHost
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Capabilities_ConstructProps)
    _init (config?: Capabilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Capabilities
    static new(type: GObject.Type, rootName: string, schema: string): Capabilities
    static newFromXml(xml: string): Capabilities
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Capabilities
    static $gtype: GObject.Type
}
export interface CapabilitiesCpu_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesCpu {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    parent: Object
    priv: CapabilitiesCpuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    addFeature(feature: CapabilitiesCpuFeature): void
    getArch(): string
    getFeatures(): CapabilitiesCpuFeature[]
    getModel(): CapabilitiesCpuModel
    getTopology(): CapabilitiesCpuTopology
    setTopology(topology: CapabilitiesCpuTopology): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesCpu_ConstructProps)
    _init (config?: CapabilitiesCpu_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesCpuFeature_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesCpuFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    parent: Object
    priv: CapabilitiesCpuFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesCpuFeature_ConstructProps)
    _init (config?: CapabilitiesCpuFeature_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesCpuModel_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesCpuModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    parent: Object
    priv: CapabilitiesCpuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesCpuModel_ConstructProps)
    _init (config?: CapabilitiesCpuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CapabilitiesCpuModel
    static new(type: GObject.Type, rootName: string, schema: string): CapabilitiesCpuModel
    static newFromXml(xml: string): CapabilitiesCpuModel
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): CapabilitiesCpuModel
    static $gtype: GObject.Type
}
export interface CapabilitiesCpuTopology_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesCpuTopology {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology */
    parent: Object
    priv: CapabilitiesCpuTopologyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology */
    getCores(): number
    getSockets(): number
    getThreads(): number
    setCores(cores: number): void
    setSockets(sockets: number): void
    setThreads(threads: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesCpuTopology_ConstructProps)
    _init (config?: CapabilitiesCpuTopology_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CapabilitiesCpuTopology
    static new(type: GObject.Type, rootName: string, schema: string): CapabilitiesCpuTopology
    static newFromXml(xml: string): CapabilitiesCpuTopology
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): CapabilitiesCpuTopology
    static $gtype: GObject.Type
}
export interface CapabilitiesGuest_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesGuest {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest */
    parent: Object
    priv: CapabilitiesGuestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest */
    getArch(): CapabilitiesGuestArch
    getFeatures(): CapabilitiesGuestFeature[]
    getOsType(): DomainOsType
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesGuest_ConstructProps)
    _init (config?: CapabilitiesGuest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesGuestArch_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesGuestArch {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch */
    parent: Object
    priv: CapabilitiesGuestArchPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch */
    getDomains(): CapabilitiesGuestDomain[]
    getEmulator(): string
    getName(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesGuestArch_ConstructProps)
    _init (config?: CapabilitiesGuestArch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesGuestDomain_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesGuestDomain {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain */
    parent: Object
    priv: CapabilitiesGuestDomainPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain */
    getEmulator(): string
    getVirtType(): DomainVirtType
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesGuestDomain_ConstructProps)
    _init (config?: CapabilitiesGuestDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesGuestFeature_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesGuestFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature */
    parent: Object
    priv: CapabilitiesGuestFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature */
    getName(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesGuestFeature_ConstructProps)
    _init (config?: CapabilitiesGuestFeature_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesHost_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesHost {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost */
    parent: Object
    priv: CapabilitiesHostPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost */
    getCpu(): CapabilitiesCpu
    getSecmodels(): CapabilitiesHostSecModel[]
    getUuid(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesHost_ConstructProps)
    _init (config?: CapabilitiesHost_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesHostSecModel_ConstructProps extends Object_ConstructProps {
}
export class CapabilitiesHostSecModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel */
    parent: Object
    priv: CapabilitiesHostSecModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel */
    getDoi(): string
    getModel(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CapabilitiesHostSecModel_ConstructProps)
    _init (config?: CapabilitiesHostSecModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Domain_ConstructProps extends Object_ConstructProps {
    currentMemory?: number
    description?: string
    features?: string[]
    memory?: number
    name?: string
    title?: string
    uuid?: string
    vcpu?: number
}
export class Domain {
    /* Properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    currentMemory: number
    description: string
    features: string[]
    memory: number
    name: string
    title: string
    uuid: string
    vcpu: number
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    parent: Object
    priv: DomainPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    addDevice(device: DomainDevice): void
    getClock(): DomainClock
    getCpu(): DomainCpu
    getCurrentMemory(): number
    getCustomXml(nsUri: string): string
    getDescription(): string
    getDevices(): DomainDevice[]
    getFeatures(): string[]
    getMemory(): number
    getName(): string
    getOs(): DomainOs
    getTitle(): string
    getUuid(): string
    getVcpus(): number
    getVirtType(): DomainVirtType
    setClock(klock?: DomainClock | null): void
    setCpu(cpu?: DomainCpu | null): void
    setCurrentMemory(memory: number): void
    setCustomXml(xml: string, ns: string, nsUri: string): boolean
    setCustomXmlNsChildren(xml: string, ns: string, nsUri: string): boolean
    setDescription(description?: string | null): void
    setDevices(devices: DomainDevice[]): void
    setFeatures(features: string[]): void
    setLifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void
    setMemory(memory: number): void
    setName(name?: string | null): void
    setOs(os?: DomainOs | null): void
    setPowerManagement(pm?: DomainPowerManagement | null): void
    setSeclabel(seclabel?: DomainSeclabel | null): void
    setTitle(title?: string | null): void
    setUuid(uuid?: string | null): void
    setVcpus(vcpuCount: number): void
    setVirtType(type: DomainVirtType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::features", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vcpu", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vcpu", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(): Domain
    static new(type: GObject.Type, rootName: string, schema: string): Domain
    static newFromXml(xml: string): Domain
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Domain
    static $gtype: GObject.Type
}
export interface DomainAddress_ConstructProps extends Object_ConstructProps {
}
export class DomainAddress {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress */
    parent: Object
    priv: DomainAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainAddress_ConstructProps)
    _init (config?: DomainAddress_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainAddressPci_ConstructProps extends DomainAddress_ConstructProps {
}
export class DomainAddressPci {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci */
    parent: DomainAddress
    priv: DomainAddressPciPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci */
    getBus(): number
    getDomain(): number
    getFunction(): number
    getMultifunction(): boolean
    getSlot(): number
    setBus(bus: number): void
    setDomain(pciDomain: number): void
    setFunction(function_: number): void
    setMultifunction(multifunction: boolean): void
    setSlot(slot: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainAddressPci_ConstructProps)
    _init (config?: DomainAddressPci_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainAddressPci
    static new(type: GObject.Type, rootName: string, schema: string): DomainAddressPci
    static newFromXml(xml: string): DomainAddressPci
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainAddressPci
    static $gtype: GObject.Type
}
export interface DomainAddressUsb_ConstructProps extends DomainAddress_ConstructProps {
}
export class DomainAddressUsb {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb */
    parent: DomainAddress
    priv: DomainAddressUsbPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb */
    setBus(bus: number): void
    setPort(port: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainAddressUsb_ConstructProps)
    _init (config?: DomainAddressUsb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainAddressUsb
    static new(type: GObject.Type, rootName: string, schema: string): DomainAddressUsb
    static newFromXml(xml: string): DomainAddressUsb
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainAddressUsb
    static $gtype: GObject.Type
}
export interface DomainCapabilities_ConstructProps extends Object_ConstructProps {
}
export class DomainCapabilities {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities */
    parent: Object
    priv: DomainCapabilitiesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities */
    getOs(): DomainCapabilitiesOs
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainCapabilities_ConstructProps)
    _init (config?: DomainCapabilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCapabilities
    static new(type: GObject.Type, rootName: string, schema: string): DomainCapabilities
    static newFromXml(xml: string): DomainCapabilities
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCapabilities
    static $gtype: GObject.Type
}
export interface DomainCapabilitiesOs_ConstructProps extends Object_ConstructProps {
}
export class DomainCapabilitiesOs {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs */
    parent: Object
    priv: DomainCapabilitiesOsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs */
    getFirmwares(): DomainOsFirmware[]
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainCapabilitiesOs_ConstructProps)
    _init (config?: DomainCapabilitiesOs_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainChannel_ConstructProps extends DomainChardev_ConstructProps {
}
export class DomainChannel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel */
    parent: DomainChardev
    priv: DomainChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel */
    getTargetName(): string
    getTargetType(): DomainChannelTargetType
    setTargetName(name: string): void
    setTargetType(type: DomainChannelTargetType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChannel_ConstructProps)
    _init (config?: DomainChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChannel
    static new(type: GObject.Type, rootName: string, schema: string): DomainChannel
    static newFromXml(xml: string): DomainChannel
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChannel
    static $gtype: GObject.Type
}
export interface DomainChardev_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainChardev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    parent: DomainDevice
    priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChardev_ConstructProps)
    _init (config?: DomainChardev_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainChardevSource_ConstructProps extends Object_ConstructProps {
}
export class DomainChardevSource {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource */
    parent: Object
    priv: DomainChardevSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChardevSource_ConstructProps)
    _init (config?: DomainChardevSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainChardevSourcePty_ConstructProps extends DomainChardevSource_ConstructProps {
}
export class DomainChardevSourcePty {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty */
    parent: DomainChardevSource
    priv: DomainChardevSourcePtyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty */
    getPath(): string
    setPath(path: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChardevSourcePty_ConstructProps)
    _init (config?: DomainChardevSourcePty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourcePty
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourcePty
    static newFromXml(xml: string): DomainChardevSourcePty
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourcePty
    static $gtype: GObject.Type
}
export interface DomainChardevSourceSpicePort_ConstructProps extends DomainChardevSource_ConstructProps {
}
export class DomainChardevSourceSpicePort {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort */
    parent: DomainChardevSource
    priv: DomainChardevSourceSpicePortPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort */
    getChannel(): string
    setChannel(channel: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChardevSourceSpicePort_ConstructProps)
    _init (config?: DomainChardevSourceSpicePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceSpicePort
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourceSpicePort
    static newFromXml(xml: string): DomainChardevSourceSpicePort
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourceSpicePort
    static $gtype: GObject.Type
}
export interface DomainChardevSourceSpiceVmc_ConstructProps extends DomainChardevSource_ConstructProps {
}
export class DomainChardevSourceSpiceVmc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc */
    parent: DomainChardevSource
    priv: DomainChardevSourceSpiceVmcPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChardevSourceSpiceVmc_ConstructProps)
    _init (config?: DomainChardevSourceSpiceVmc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceSpiceVmc
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourceSpiceVmc
    static newFromXml(xml: string): DomainChardevSourceSpiceVmc
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourceSpiceVmc
    static $gtype: GObject.Type
}
export interface DomainChardevSourceUnix_ConstructProps extends DomainChardevSource_ConstructProps {
}
export class DomainChardevSourceUnix {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix */
    parent: DomainChardevSource
    priv: DomainChardevSourceUnixPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainChardevSourceUnix_ConstructProps)
    _init (config?: DomainChardevSourceUnix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceUnix
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourceUnix
    static newFromXml(xml: string): DomainChardevSourceUnix
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourceUnix
    static $gtype: GObject.Type
}
export interface DomainClock_ConstructProps extends Object_ConstructProps {
}
export class DomainClock {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock */
    parent: Object
    priv: DomainClockPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock */
    addTimer(timer: DomainTimer): void
    getOffset(): DomainClockOffset
    getTimezone(): string
    getVariableOffset(): number
    setOffset(offset: DomainClockOffset): void
    setTimezone(tz: string): void
    setVariableOffset(seconds: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainClock_ConstructProps)
    _init (config?: DomainClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainClock
    static new(type: GObject.Type, rootName: string, schema: string): DomainClock
    static newFromXml(xml: string): DomainClock
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainClock
    static $gtype: GObject.Type
}
export interface DomainConsole_ConstructProps extends DomainChardev_ConstructProps {
}
export class DomainConsole {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole */
    parent: DomainChardev
    priv: DomainConsolePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole */
    setTargetType(type: DomainConsoleTargetType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainConsole_ConstructProps)
    _init (config?: DomainConsole_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainConsole
    static new(type: GObject.Type, rootName: string, schema: string): DomainConsole
    static newFromXml(xml: string): DomainConsole
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainConsole
    static $gtype: GObject.Type
}
export interface DomainController_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainController {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    parent: DomainDevice
    priv: DomainControllerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    getIndex(): number
    getPorts(): number
    setAddress(address?: DomainAddress | null): void
    setIndex(index: number): void
    setPorts(ports: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainController_ConstructProps)
    _init (config?: DomainController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainControllerUsb_ConstructProps extends DomainController_ConstructProps {
}
export class DomainControllerUsb {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb */
    parent: DomainController
    priv: DomainControllerUsbPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb */
    setMaster(master: DomainControllerUsb, startport: number): void
    setModel(model: DomainControllerUsbModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    getIndex(): number
    getPorts(): number
    setAddress(address?: DomainAddress | null): void
    setIndex(index: number): void
    setPorts(ports: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainControllerUsb_ConstructProps)
    _init (config?: DomainControllerUsb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainControllerUsb
    static new(type: GObject.Type, rootName: string, schema: string): DomainControllerUsb
    static newFromXml(xml: string): DomainControllerUsb
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainControllerUsb
    static $gtype: GObject.Type
}
export interface DomainCpu_ConstructProps extends CapabilitiesCpu_ConstructProps {
}
export class DomainCpu {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu */
    parent: CapabilitiesCpu
    priv: DomainCpuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu */
    getMatchPolicy(): DomainCpuMatchPolicy
    getMode(): DomainCpuMode
    setMatchPolicy(policy: DomainCpuMatchPolicy): void
    setMode(mode: DomainCpuMode): void
    setModel(model: DomainCpuModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    addFeature(feature: CapabilitiesCpuFeature): void
    getArch(): string
    getFeatures(): CapabilitiesCpuFeature[]
    getModel(): CapabilitiesCpuModel
    getTopology(): CapabilitiesCpuTopology
    setTopology(topology: CapabilitiesCpuTopology): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainCpu_ConstructProps)
    _init (config?: DomainCpu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpu
    static new(type: GObject.Type, rootName: string, schema: string): DomainCpu
    static newFromXml(xml: string): DomainCpu
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCpu
    static $gtype: GObject.Type
}
export interface DomainCpuFeature_ConstructProps extends CapabilitiesCpuFeature_ConstructProps {
}
export class DomainCpuFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature */
    parent: CapabilitiesCpu
    priv: DomainCpuFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature */
    getPolicy(): DomainCpuFeaturePolicy
    setPolicy(policy: DomainCpuFeaturePolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainCpuFeature_ConstructProps)
    _init (config?: DomainCpuFeature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpuFeature
    static new(type: GObject.Type, rootName: string, schema: string): DomainCpuFeature
    static newFromXml(xml: string): DomainCpuFeature
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCpuFeature
    static $gtype: GObject.Type
}
export interface DomainCpuModel_ConstructProps extends CapabilitiesCpuModel_ConstructProps {
}
export class DomainCpuModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel */
    parent: CapabilitiesCpuModel
    priv: DomainCpuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainCpuModel_ConstructProps)
    _init (config?: DomainCpuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpuModel
    static new(type: GObject.Type, rootName: string, schema: string): DomainCpuModel
    static newFromXml(xml: string): DomainCpuModel
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCpuModel
    static $gtype: GObject.Type
}
export interface DomainDevice_ConstructProps extends Object_ConstructProps {
}
export class DomainDevice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    parent: Object
    priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainDevice_ConstructProps)
    _init (config?: DomainDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainDisk {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk */
    parent: DomainDevice
    priv: DomainDiskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk */
    getDiskType(): DomainDiskType
    getDriver(): DomainDiskDriver
    getDriverCache(): DomainDiskCacheType
    getDriverFormat(): DomainDiskFormat
    getDriverName(): string
    getDriverType(): string
    getGuestDeviceType(): DomainDiskGuestDeviceType
    getSnapshotType(): DomainDiskSnapshotType
    getSource(): string
    getStartupPolicy(): DomainDiskStartupPolicy
    getTargetBus(): DomainDiskBus
    getTargetDev(): string
    setDriver(driver?: DomainDiskDriver | null): void
    setDriverCache(cacheType: DomainDiskCacheType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverName(driverName: string): void
    setDriverType(driverType: string): void
    setGuestDeviceType(type: DomainDiskGuestDeviceType): void
    setReadonly(readonly: boolean): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSource(source: string): void
    setStartupPolicy(policy: DomainDiskStartupPolicy): void
    setTargetBus(bus: DomainDiskBus): void
    setTargetDev(dev: string): void
    setType(type: DomainDiskType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainDisk_ConstructProps)
    _init (config?: DomainDisk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainDisk
    static new(type: GObject.Type, rootName: string, schema: string): DomainDisk
    static newFromXml(xml: string): DomainDisk
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainDisk
    static $gtype: GObject.Type
}
export interface DomainDiskDriver_ConstructProps extends Object_ConstructProps {
}
export class DomainDiskDriver {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver */
    parent: Object
    priv: DomainDiskDriverPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver */
    getCache(): DomainDiskCacheType
    getCopyOnRead(): boolean
    getDiscard(): DomainDiskDriverDiscard
    getErrorPolicy(): DomainDiskDriverErrorPolicy
    getFormat(): DomainDiskFormat
    getIoPolicy(): DomainDiskDriverIoPolicy
    getName(): string
    setCache(cacheType: DomainDiskCacheType): void
    setCopyOnRead(copyOnRead: boolean): void
    setDiscard(discard: DomainDiskDriverDiscard): void
    setErrorPolicy(policy: DomainDiskDriverErrorPolicy): void
    setFormat(format: DomainDiskFormat): void
    setIoPolicy(policy: DomainDiskDriverIoPolicy): void
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainDiskDriver_ConstructProps)
    _init (config?: DomainDiskDriver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainDiskDriver
    static new(type: GObject.Type, rootName: string, schema: string): DomainDiskDriver
    static newFromXml(xml: string): DomainDiskDriver
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainDiskDriver
    static $gtype: GObject.Type
}
export interface DomainFilesys_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainFilesys {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys */
    parent: DomainDevice
    priv: DomainFilesysPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys */
    setAccessType(type: DomainFilesysAccessType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverType(type: DomainFilesysDriverType): void
    setRamUsage(bytes: number): void
    setReadonly(readonly: boolean): void
    setSource(source: string): void
    setTarget(target: string): void
    setType(type: DomainFilesysType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainFilesys_ConstructProps)
    _init (config?: DomainFilesys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainFilesys
    static new(type: GObject.Type, rootName: string, schema: string): DomainFilesys
    static newFromXml(xml: string): DomainFilesys
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainFilesys
    static $gtype: GObject.Type
}
export interface DomainGraphics_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainGraphics {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    parent: DomainDevice
    priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainGraphics_ConstructProps)
    _init (config?: DomainGraphics_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainGraphicsDesktop_ConstructProps extends DomainGraphics_ConstructProps {
}
export class DomainGraphicsDesktop {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop */
    parent: DomainGraphics
    priv: DomainGraphicsDesktopPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop */
    getDisplay(): string
    getFullscreen(): boolean
    setDisplay(disp: string): void
    setFullscreen(fullscreen: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainGraphicsDesktop_ConstructProps)
    _init (config?: DomainGraphicsDesktop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsDesktop
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsDesktop
    static newFromXml(xml: string): DomainGraphicsDesktop
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsDesktop
    static $gtype: GObject.Type
}
export interface DomainGraphicsRdp_ConstructProps extends DomainGraphics_ConstructProps {
}
export class DomainGraphicsRdp {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp */
    parent: DomainGraphics
    priv: DomainGraphicsRdpPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp */
    getMultiUser(): boolean
    getPort(): number
    getReplaceUser(): boolean
    setAutoport(autoport: boolean): void
    setMultiUser(multiUser: boolean): void
    setPort(port: number): void
    setReplaceUser(replaceUser: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainGraphicsRdp_ConstructProps)
    _init (config?: DomainGraphicsRdp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsRdp
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsRdp
    static newFromXml(xml: string): DomainGraphicsRdp
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsRdp
    static $gtype: GObject.Type
}
export interface DomainGraphicsSdl_ConstructProps extends DomainGraphics_ConstructProps {
}
export class DomainGraphicsSdl {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl */
    parent: DomainGraphics
    priv: DomainGraphicsSdlPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl */
    setDisplay(disp: string): void
    setFullscreen(fullscreen: boolean): void
    setXauthority(path: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainGraphicsSdl_ConstructProps)
    _init (config?: DomainGraphicsSdl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsSdl
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsSdl
    static newFromXml(xml: string): DomainGraphicsSdl
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsSdl
    static $gtype: GObject.Type
}
export interface DomainGraphicsSpice_ConstructProps extends DomainGraphics_ConstructProps {
}
export class DomainGraphicsSpice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice */
    parent: DomainGraphics
    priv: DomainGraphicsSpicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice */
    getImageCompression(): DomainGraphicsSpiceImageCompression
    getPort(): number
    setAutoport(autoport: boolean): void
    setGl(gl: boolean): void
    setImageCompression(compression: DomainGraphicsSpiceImageCompression): void
    setPassword(password: string): void
    setPort(port: number): void
    setTlsPort(port: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainGraphicsSpice_ConstructProps)
    _init (config?: DomainGraphicsSpice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsSpice
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsSpice
    static newFromXml(xml: string): DomainGraphicsSpice
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsSpice
    static $gtype: GObject.Type
}
export interface DomainGraphicsVnc_ConstructProps extends DomainGraphics_ConstructProps {
}
export class DomainGraphicsVnc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc */
    parent: DomainGraphics
    priv: DomainGraphicsVncPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc */
    getPort(): number
    getSocket(): string
    setAutoport(autoport: boolean): void
    setPassword(password: string): void
    setPort(port: number): void
    setSocket(socket: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainGraphicsVnc_ConstructProps)
    _init (config?: DomainGraphicsVnc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsVnc
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsVnc
    static newFromXml(xml: string): DomainGraphicsVnc
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsVnc
    static $gtype: GObject.Type
}
export interface DomainHostdev_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainHostdev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    parent: DomainDevice
    priv: DomainHostdevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    getBootOrder(): number
    getReadonly(): boolean
    getShareable(): boolean
    setBootOrder(order: number): void
    setReadonly(readonly: boolean): void
    setShareable(shareable: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainHostdev_ConstructProps)
    _init (config?: DomainHostdev_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainHostdevPci_ConstructProps extends DomainHostdev_ConstructProps {
}
export class DomainHostdevPci {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci */
    parent: DomainHostdev
    priv: DomainHostdevPciPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci */
    getAddress(): DomainAddressPci
    getManaged(): boolean
    getRomBar(): boolean
    getRomFile(): string
    setAddress(address: DomainAddressPci): void
    setManaged(managed: boolean): void
    setRomBar(bar: boolean): void
    setRomFile(file: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    getBootOrder(): number
    getReadonly(): boolean
    getShareable(): boolean
    setBootOrder(order: number): void
    setReadonly(readonly: boolean): void
    setShareable(shareable: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainHostdevPci_ConstructProps)
    _init (config?: DomainHostdevPci_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainHostdevPci
    static new(type: GObject.Type, rootName: string, schema: string): DomainHostdevPci
    static newFromXml(xml: string): DomainHostdevPci
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainHostdevPci
    static $gtype: GObject.Type
}
export interface DomainInput_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainInput {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput */
    parent: DomainDevice
    priv: DomainInputPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput */
    getBus(): DomainInputBus
    getDeviceType(): DomainInputDeviceType
    setBus(bus: DomainInputBus): void
    setDeviceType(type: DomainInputDeviceType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInput_ConstructProps)
    _init (config?: DomainInput_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInput
    static new(type: GObject.Type, rootName: string, schema: string): DomainInput
    static newFromXml(xml: string): DomainInput
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInput
    static $gtype: GObject.Type
}
export interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainInterface {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    parent: DomainDevice
    priv: DomainInterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterface_ConstructProps)
    _init (config?: DomainInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainInterfaceBridge_ConstructProps extends DomainInterface_ConstructProps {
}
export class DomainInterfaceBridge {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge */
    parent: DomainInterface
    priv: DomainInterfaceBridgePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge */
    setSource(brname: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterfaceBridge_ConstructProps)
    _init (config?: DomainInterfaceBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceBridge
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceBridge
    static newFromXml(xml: string): DomainInterfaceBridge
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceBridge
    static $gtype: GObject.Type
}
export interface DomainInterfaceFilterref_ConstructProps extends Object_ConstructProps {
}
export class DomainInterfaceFilterref {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref */
    parent: Object
    priv: DomainInterfaceFilterrefPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref */
    addParameter(parameter: DomainInterfaceFilterrefParameter): void
    getName(): string
    getParameters(): DomainInterfaceFilterrefParameter[]
    setName(filter: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterfaceFilterref_ConstructProps)
    _init (config?: DomainInterfaceFilterref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceFilterref
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceFilterref
    static newFromXml(xml: string): DomainInterfaceFilterref
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceFilterref
    static $gtype: GObject.Type
}
export interface DomainInterfaceFilterrefParameter_ConstructProps extends Object_ConstructProps {
}
export class DomainInterfaceFilterrefParameter {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter */
    parent: Object
    priv: DomainInterfaceFilterrefParameterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter */
    getName(): string
    getValue(): string
    setName(name: string): void
    setValue(value: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterfaceFilterrefParameter_ConstructProps)
    _init (config?: DomainInterfaceFilterrefParameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceFilterrefParameter
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceFilterrefParameter
    static newFromXml(xml: string): DomainInterfaceFilterrefParameter
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceFilterrefParameter
    static $gtype: GObject.Type
}
export interface DomainInterfaceNetwork_ConstructProps extends DomainInterface_ConstructProps {
}
export class DomainInterfaceNetwork {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork */
    parent: DomainInterface
    priv: DomainInterfaceNetworkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork */
    setSource(source: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterfaceNetwork_ConstructProps)
    _init (config?: DomainInterfaceNetwork_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceNetwork
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceNetwork
    static newFromXml(xml: string): DomainInterfaceNetwork
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceNetwork
    static $gtype: GObject.Type
}
export interface DomainInterfaceUser_ConstructProps extends DomainInterface_ConstructProps {
}
export class DomainInterfaceUser {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser */
    parent: DomainInterface
    priv: DomainInterfaceUserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainInterfaceUser_ConstructProps)
    _init (config?: DomainInterfaceUser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceUser
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceUser
    static newFromXml(xml: string): DomainInterfaceUser
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceUser
    static $gtype: GObject.Type
}
export interface DomainMemballoon_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainMemballoon {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon */
    parent: DomainDevice
    priv: DomainMemballoonPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon */
    setModel(model: DomainMemballoonModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainMemballoon_ConstructProps)
    _init (config?: DomainMemballoon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainMemballoon
    static new(type: GObject.Type, rootName: string, schema: string): DomainMemballoon
    static newFromXml(xml: string): DomainMemballoon
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainMemballoon
    static $gtype: GObject.Type
}
export interface DomainOs_ConstructProps extends Object_ConstructProps {
}
export class DomainOs {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs */
    parent: Object
    priv: DomainOsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs */
    biosEnableSerial(enable: boolean): void
    enableBootMenu(enable: boolean): void
    getArch(): string
    getBootDevices(): DomainOsBootDevice[]
    getFirmware(): DomainOsFirmware
    getMachine(): string
    getOsType(): DomainOsType
    setArch(arch: string): void
    setBootDevices(bootDevices: DomainOsBootDevice[]): void
    setCmdline(cmdline?: string | null): void
    setFirmware(firmware: DomainOsFirmware): void
    setInit(init?: string | null): void
    setKernel(kernel?: string | null): void
    setLoader(loader?: string | null): void
    setMachine(machine: string): void
    setOsType(type: DomainOsType): void
    setRamdisk(ramdisk?: string | null): void
    setSmbiosMode(mode: DomainOsSmBiosMode): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainOs_ConstructProps)
    _init (config?: DomainOs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainOs
    static new(type: GObject.Type, rootName: string, schema: string): DomainOs
    static newFromXml(xml: string): DomainOs
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainOs
    static $gtype: GObject.Type
}
export interface DomainParallel_ConstructProps extends DomainChardev_ConstructProps {
}
export class DomainParallel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel */
    parent: DomainChardev
    priv: DomainParallelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainParallel_ConstructProps)
    _init (config?: DomainParallel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainParallel
    static new(type: GObject.Type, rootName: string, schema: string): DomainParallel
    static newFromXml(xml: string): DomainParallel
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainParallel
    static $gtype: GObject.Type
}
export interface DomainPowerManagement_ConstructProps extends Object_ConstructProps {
}
export class DomainPowerManagement {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement */
    parent: Object
    priv: DomainPowerManagementPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement */
    setDiskSuspendEnabled(enabled: boolean): void
    setMemSuspendEnabled(enabled: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainPowerManagement_ConstructProps)
    _init (config?: DomainPowerManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainPowerManagement
    static new(type: GObject.Type, rootName: string, schema: string): DomainPowerManagement
    static newFromXml(xml: string): DomainPowerManagement
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainPowerManagement
    static $gtype: GObject.Type
}
export interface DomainRedirdev_ConstructProps extends DomainChardev_ConstructProps {
}
export class DomainRedirdev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev */
    parent: DomainChardev
    priv: DomainRedirdevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev */
    setAddress(address?: DomainAddress | null): void
    setBus(bus: DomainRedirdevBus): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainRedirdev_ConstructProps)
    _init (config?: DomainRedirdev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainRedirdev
    static new(type: GObject.Type, rootName: string, schema: string): DomainRedirdev
    static newFromXml(xml: string): DomainRedirdev
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainRedirdev
    static $gtype: GObject.Type
}
export interface DomainSeclabel_ConstructProps extends Object_ConstructProps {
}
export class DomainSeclabel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel */
    parent: Object
    priv: DomainSeclabelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel */
    setBaselabel(label?: string | null): void
    setLabel(label?: string | null): void
    setModel(model: string): void
    setType(type: DomainSeclabelType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSeclabel_ConstructProps)
    _init (config?: DomainSeclabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSeclabel
    static new(type: GObject.Type, rootName: string, schema: string): DomainSeclabel
    static newFromXml(xml: string): DomainSeclabel
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSeclabel
    static $gtype: GObject.Type
}
export interface DomainSerial_ConstructProps extends DomainChardev_ConstructProps {
}
export class DomainSerial {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial */
    parent: DomainChardev
    priv: DomainSerialPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSerial_ConstructProps)
    _init (config?: DomainSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSerial
    static new(type: GObject.Type, rootName: string, schema: string): DomainSerial
    static newFromXml(xml: string): DomainSerial
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSerial
    static $gtype: GObject.Type
}
export interface DomainSmartcard_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainSmartcard {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard */
    parent: DomainDevice
    priv: DomainSmartcardPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSmartcard_ConstructProps)
    _init (config?: DomainSmartcard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static setAddress(redirdev: DomainRedirdev, address?: DomainAddress | null): void
    static $gtype: GObject.Type
}
export interface DomainSmartcardHost_ConstructProps extends DomainSmartcard_ConstructProps {
}
export class DomainSmartcardHost {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost */
    parent: DomainSmartcard
    priv: DomainSmartcardHostPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSmartcardHost_ConstructProps)
    _init (config?: DomainSmartcardHost_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardHost
    static new(type: GObject.Type, rootName: string, schema: string): DomainSmartcardHost
    static newFromXml(xml: string): DomainSmartcardHost
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSmartcardHost
    static $gtype: GObject.Type
}
export interface DomainSmartcardHostCertificates_ConstructProps extends DomainSmartcard_ConstructProps {
}
export class DomainSmartcardHostCertificates {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates */
    parent: DomainSmartcard
    priv: DomainSmartcardHostCertificatesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates */
    setCertificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void
    setDatabase(path?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSmartcardHostCertificates_ConstructProps)
    _init (config?: DomainSmartcardHostCertificates_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardHostCertificates
    static new(type: GObject.Type, rootName: string, schema: string): DomainSmartcardHostCertificates
    static newFromXml(xml: string): DomainSmartcardHostCertificates
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSmartcardHostCertificates
    static $gtype: GObject.Type
}
export interface DomainSmartcardPassthrough_ConstructProps extends DomainSmartcard_ConstructProps {
}
export class DomainSmartcardPassthrough {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough */
    parent: DomainSmartcard
    priv: DomainSmartcardPassthroughPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough */
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSmartcardPassthrough_ConstructProps)
    _init (config?: DomainSmartcardPassthrough_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardPassthrough
    static new(type: GObject.Type, rootName: string, schema: string): DomainSmartcardPassthrough
    static newFromXml(xml: string): DomainSmartcardPassthrough
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSmartcardPassthrough
    static $gtype: GObject.Type
}
export interface DomainSnapshot_ConstructProps extends Object_ConstructProps {
}
export class DomainSnapshot {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot */
    parent: Object
    priv: DomainSnapshotPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot */
    addDisk(disk: DomainSnapshotDisk): void
    getCreationTime(): number
    getDescription(): string
    getDisks(): DomainSnapshotDisk[]
    getDomain(): Domain
    getMemoryFile(): string
    getMemoryState(): DomainSnapshotMemoryState
    getName(): string
    getParent(): string
    getState(): DomainSnapshotDomainState
    setDescription(description: string): void
    setDisks(disks: DomainSnapshotDisk[]): void
    setMemoryFile(filename: string): void
    setMemoryState(state: DomainSnapshotMemoryState): void
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSnapshot_ConstructProps)
    _init (config?: DomainSnapshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSnapshot
    static new(type: GObject.Type, rootName: string, schema: string): DomainSnapshot
    static newFromXml(xml: string): DomainSnapshot
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSnapshot
    static $gtype: GObject.Type
}
export interface DomainSnapshotDisk_ConstructProps extends Object_ConstructProps {
}
export class DomainSnapshotDisk {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk */
    parent: Object
    priv: DomainSnapshotDiskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk */
    getDriverFormat(): DomainDiskFormat
    getName(): string
    getSnapshotType(): DomainDiskSnapshotType
    getSourceFile(): string
    setDriverFormat(format: DomainDiskFormat): void
    setName(name: string): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSourceFile(filename: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSnapshotDisk_ConstructProps)
    _init (config?: DomainSnapshotDisk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSnapshotDisk
    static new(type: GObject.Type, rootName: string, schema: string): DomainSnapshotDisk
    static newFromXml(xml: string): DomainSnapshotDisk
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSnapshotDisk
    static $gtype: GObject.Type
}
export interface DomainSound_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainSound {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound */
    parent: DomainDevice
    priv: DomainSoundPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound */
    setModel(model: DomainSoundModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainSound_ConstructProps)
    _init (config?: DomainSound_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSound
    static new(type: GObject.Type, rootName: string, schema: string): DomainSound
    static newFromXml(xml: string): DomainSound
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSound
    static $gtype: GObject.Type
}
export interface DomainTimer_ConstructProps extends Object_ConstructProps {
}
export class DomainTimer {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    parent: Object
    priv: DomainTimerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainTimer_ConstructProps)
    _init (config?: DomainTimer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainTimerHpet_ConstructProps extends DomainTimer_ConstructProps {
}
export class DomainTimerHpet {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet */
    parent: DomainTimer
    priv: DomainTimerHpetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainTimerHpet_ConstructProps)
    _init (config?: DomainTimerHpet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerHpet
    static new(type: GObject.Type, rootName: string, schema: string): DomainTimerHpet
    static newFromXml(xml: string): DomainTimerHpet
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainTimerHpet
    static $gtype: GObject.Type
}
export interface DomainTimerPit_ConstructProps extends DomainTimer_ConstructProps {
}
export class DomainTimerPit {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit */
    parent: DomainTimer
    priv: DomainTimerPitPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainTimerPit_ConstructProps)
    _init (config?: DomainTimerPit_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerPit
    static new(type: GObject.Type, rootName: string, schema: string): DomainTimerPit
    static newFromXml(xml: string): DomainTimerPit
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainTimerPit
    static $gtype: GObject.Type
}
export interface DomainTimerRtc_ConstructProps extends DomainTimer_ConstructProps {
}
export class DomainTimerRtc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc */
    parent: DomainTimer
    priv: DomainTimerRtcPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainTimerRtc_ConstructProps)
    _init (config?: DomainTimerRtc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerRtc
    static new(type: GObject.Type, rootName: string, schema: string): DomainTimerRtc
    static newFromXml(xml: string): DomainTimerRtc
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainTimerRtc
    static $gtype: GObject.Type
}
export interface DomainVideo_ConstructProps extends DomainDevice_ConstructProps {
}
export class DomainVideo {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo */
    parent: DomainDevice
    priv: DomainVideoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo */
    getModel(): DomainVideoModel
    setAccel3d(accel3d: boolean): void
    setHeads(headCount: number): void
    setModel(model: DomainVideoModel): void
    setRam(kbytes: number): void
    setVgamem(kbytes: number): void
    setVram(kbytes: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DomainVideo_ConstructProps)
    _init (config?: DomainVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainVideo
    static new(type: GObject.Type, rootName: string, schema: string): DomainVideo
    static newFromXml(xml: string): DomainVideo
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainVideo
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends Object_ConstructProps {
}
export class Interface {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Interface */
    parent: Object
    priv: InterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Interface
    static new(type: GObject.Type, rootName: string, schema: string): Interface
    static newFromXml(xml: string): Interface
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Interface
    static $gtype: GObject.Type
}
export interface Network_ConstructProps extends Object_ConstructProps {
}
export class Network {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Network */
    parent: Object
    priv: NetworkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Network_ConstructProps)
    _init (config?: Network_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Network
    static new(type: GObject.Type, rootName: string, schema: string): Network
    static newFromXml(xml: string): Network
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Network
    static $gtype: GObject.Type
}
export interface NetworkFilter_ConstructProps extends Object_ConstructProps {
}
export class NetworkFilter {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter */
    parent: Object
    priv: NetworkFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NetworkFilter_ConstructProps)
    _init (config?: NetworkFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NetworkFilter
    static new(type: GObject.Type, rootName: string, schema: string): NetworkFilter
    static newFromXml(xml: string): NetworkFilter
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): NetworkFilter
    static $gtype: GObject.Type
}
export interface NodeDevice_ConstructProps extends Object_ConstructProps {
}
export class NodeDevice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice */
    parent: Object
    priv: NodeDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NodeDevice_ConstructProps)
    _init (config?: NodeDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NodeDevice
    static new(type: GObject.Type, rootName: string, schema: string): NodeDevice
    static newFromXml(xml: string): NodeDevice
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): NodeDevice
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    node?: object
    schema?: string
}
export class Object {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    parent: GObject.Object
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, rootName: string, schema: string): Object
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Object
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Secret_ConstructProps extends Object_ConstructProps {
}
export class Secret {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Secret */
    parent: Object
    priv: SecretPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Secret_ConstructProps)
    _init (config?: Secret_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Secret
    static new(type: GObject.Type, rootName: string, schema: string): Secret
    static newFromXml(xml: string): Secret
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Secret
    static $gtype: GObject.Type
}
export interface StoragePermissions_ConstructProps extends Object_ConstructProps {
}
export class StoragePermissions {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions */
    parent: Object
    priv: StoragePermissionsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions */
    getGroup(): number
    getLabel(): string
    getMode(): number
    getOwner(): number
    setGroup(group: number): void
    setLabel(label?: string | null): void
    setMode(mode: number): void
    setOwner(owner: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StoragePermissions_ConstructProps)
    _init (config?: StoragePermissions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePermissions
    static new(type: GObject.Type, rootName: string, schema: string): StoragePermissions
    static newFromXml(xml: string): StoragePermissions
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePermissions
    static $gtype: GObject.Type
}
export interface StoragePool_ConstructProps extends Object_ConstructProps {
}
export class StoragePool {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool */
    parent: Object
    priv: StoragePoolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool */
    getAllocation(): number
    getAvailable(): number
    getCapacity(): number
    getName(): string
    getPoolType(): StoragePoolType
    getSource(): StoragePoolSource
    getTarget(): StoragePoolTarget
    getUuid(): string
    setAllocation(allocation: number): void
    setAvailable(available: number): void
    setCapacity(capacity: number): void
    setName(name?: string | null): void
    setPoolType(type: StoragePoolType): void
    setSource(source?: StoragePoolSource | null): void
    setTarget(target?: StoragePoolTarget | null): void
    setUuid(uuid?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StoragePool_ConstructProps)
    _init (config?: StoragePool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePool
    static new(type: GObject.Type, rootName: string, schema: string): StoragePool
    static newFromXml(xml: string): StoragePool
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePool
    static $gtype: GObject.Type
}
export interface StoragePoolSource_ConstructProps extends Object_ConstructProps {
}
export class StoragePoolSource {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource */
    parent: Object
    priv: StoragePoolSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource */
    getAdapter(): string
    getDevicePath(): string
    getDirectory(): string
    getFormat(): string
    getHost(): string
    getName(): string
    getProduct(): string
    getVendor(): string
    setAdapter(adapter: string): void
    setDevicePath(devicePath: string): void
    setDirectory(directory: string): void
    setFormat(format: string): void
    setHost(host: string): void
    setName(name?: string | null): void
    setProduct(product: string): void
    setVendor(vendor: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StoragePoolSource_ConstructProps)
    _init (config?: StoragePoolSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePoolSource
    static new(type: GObject.Type, rootName: string, schema: string): StoragePoolSource
    static newFromXml(xml: string): StoragePoolSource
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePoolSource
    static $gtype: GObject.Type
}
export interface StoragePoolTarget_ConstructProps extends Object_ConstructProps {
}
export class StoragePoolTarget {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget */
    parent: Object
    priv: StoragePoolTargetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget */
    getPath(): string
    getPermissions(): StoragePermissions
    setPath(path?: string | null): void
    setPermissions(perms: StoragePermissions): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StoragePoolTarget_ConstructProps)
    _init (config?: StoragePoolTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePoolTarget
    static new(type: GObject.Type, rootName: string, schema: string): StoragePoolTarget
    static newFromXml(xml: string): StoragePoolTarget
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePoolTarget
    static $gtype: GObject.Type
}
export interface StorageVol_ConstructProps extends Object_ConstructProps {
}
export class StorageVol {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol */
    parent: Object
    priv: StorageVolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol */
    setAllocation(allocation: number): void
    setBackingStore(backingStore?: StorageVolBackingStore | null): void
    setCapacity(capacity: number): void
    setName(name?: string | null): void
    setTarget(target?: StorageVolTarget | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StorageVol_ConstructProps)
    _init (config?: StorageVol_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVol
    static new(type: GObject.Type, rootName: string, schema: string): StorageVol
    static newFromXml(xml: string): StorageVol
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StorageVol
    static $gtype: GObject.Type
}
export interface StorageVolBackingStore_ConstructProps extends Object_ConstructProps {
}
export class StorageVolBackingStore {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore */
    parent: Object
    priv: StorageVolBackingStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore */
    setFormat(format: string): void
    setPath(path?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StorageVolBackingStore_ConstructProps)
    _init (config?: StorageVolBackingStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVolBackingStore
    static new(type: GObject.Type, rootName: string, schema: string): StorageVolBackingStore
    static newFromXml(xml: string): StorageVolBackingStore
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StorageVolBackingStore
    static $gtype: GObject.Type
}
export interface StorageVolTarget_ConstructProps extends Object_ConstructProps {
}
export class StorageVolTarget {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget */
    parent: Object
    priv: StorageVolTargetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget */
    setCompat(compat?: string | null): void
    setFeatures(features: number): void
    setFormat(format: string): void
    setPermissions(perms?: StoragePermissions | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StorageVolTarget_ConstructProps)
    _init (config?: StorageVolTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVolTarget
    static new(type: GObject.Type, rootName: string, schema: string): StorageVolTarget
    static newFromXml(xml: string): StorageVolTarget
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StorageVolTarget
    static $gtype: GObject.Type
}
export abstract class CapabilitiesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class CapabilitiesCpuClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass */
    parentClass: ObjectClass
    getFeatures: (cpu: CapabilitiesCpu) => CapabilitiesCpuFeature[]
    padding: object[]
    static name: string
}
export abstract class CapabilitiesCpuFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesCpuFeaturePrivate {
    static name: string
}
export abstract class CapabilitiesCpuModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModelClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesCpuModelPrivate {
    static name: string
}
export class CapabilitiesCpuPrivate {
    static name: string
}
export abstract class CapabilitiesCpuTopologyClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopologyClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesCpuTopologyPrivate {
    static name: string
}
export abstract class CapabilitiesGuestArchClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArchClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesGuestArchPrivate {
    static name: string
}
export abstract class CapabilitiesGuestClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class CapabilitiesGuestDomainClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesGuestDomainPrivate {
    static name: string
}
export abstract class CapabilitiesGuestFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeatureClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesGuestFeaturePrivate {
    static name: string
}
export class CapabilitiesGuestPrivate {
    static name: string
}
export abstract class CapabilitiesHostClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesHostPrivate {
    static name: string
}
export abstract class CapabilitiesHostSecModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModelClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class CapabilitiesHostSecModelPrivate {
    static name: string
}
export class CapabilitiesPrivate {
    static name: string
}
export abstract class DomainAddressClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class DomainAddressPciClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass */
    parentClass: DomainAddressClass
    padding: object[]
    static name: string
}
export class DomainAddressPciPrivate {
    static name: string
}
export class DomainAddressPrivate {
    static name: string
}
export abstract class DomainAddressUsbClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsbClass */
    parentClass: DomainAddressClass
    padding: object[]
    static name: string
}
export class DomainAddressUsbPrivate {
    static name: string
}
export abstract class DomainCapabilitiesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class DomainCapabilitiesOsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass */
    parentClass: ObjectClass
    getFirmwares: (os: DomainCapabilitiesOs) => DomainOsFirmware[]
    padding: object[]
    static name: string
}
export class DomainCapabilitiesOsPrivate {
    static name: string
}
export class DomainCapabilitiesPrivate {
    static name: string
}
export abstract class DomainChannelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannelClass */
    parentClass: DomainChardevClass
    padding: object[]
    static name: string
}
export class DomainChannelPrivate {
    static name: string
}
export abstract class DomainChardevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainChardevPrivate {
    static name: string
}
export abstract class DomainChardevSourceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainChardevSourcePrivate {
    static name: string
}
export abstract class DomainChardevSourcePtyClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePtyClass */
    parentClass: DomainChardevSourceClass
    padding: object[]
    static name: string
}
export class DomainChardevSourcePtyPrivate {
    static name: string
}
export abstract class DomainChardevSourceSpicePortClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePortClass */
    parentClass: DomainChardevSourceClass
    padding: object[]
    static name: string
}
export class DomainChardevSourceSpicePortPrivate {
    static name: string
}
export abstract class DomainChardevSourceSpiceVmcClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmcClass */
    parentClass: DomainChardevSourceClass
    padding: object[]
    static name: string
}
export class DomainChardevSourceSpiceVmcPrivate {
    static name: string
}
export abstract class DomainChardevSourceUnixClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnixClass */
    parentClass: DomainChardevSourceClass
    padding: object[]
    static name: string
}
export class DomainChardevSourceUnixPrivate {
    static name: string
}
export abstract class DomainClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class DomainClockClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainClockPrivate {
    static name: string
}
export abstract class DomainConsoleClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsoleClass */
    parentClass: DomainChardevClass
    padding: object[]
    static name: string
}
export class DomainConsolePrivate {
    static name: string
}
export abstract class DomainControllerClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainControllerPrivate {
    static name: string
}
export abstract class DomainControllerUsbClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsbClass */
    parentClass: DomainControllerClass
    padding: object[]
    static name: string
}
export class DomainControllerUsbPrivate {
    static name: string
}
export abstract class DomainCpuClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass */
    parentClass: CapabilitiesCpuClass
    padding: object[]
    static name: string
}
export abstract class DomainCpuFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass */
    parentClass: CapabilitiesCpuClass
    padding: object[]
    static name: string
}
export class DomainCpuFeaturePrivate {
    static name: string
}
export abstract class DomainCpuModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModelClass */
    parentClass: CapabilitiesCpuModelClass
    padding: object[]
    static name: string
}
export class DomainCpuModelPrivate {
    static name: string
}
export class DomainCpuPrivate {
    static name: string
}
export abstract class DomainDeviceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDeviceClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainDevicePrivate {
    static name: string
}
export abstract class DomainDiskClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export abstract class DomainDiskDriverClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainDiskDriverPrivate {
    static name: string
}
export class DomainDiskPrivate {
    static name: string
}
export abstract class DomainFilesysClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesysClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainFilesysPrivate {
    static name: string
}
export abstract class DomainGraphicsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export abstract class DomainGraphicsDesktopClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass */
    parentClass: DomainGraphicsClass
    padding: object[]
    static name: string
}
export class DomainGraphicsDesktopPrivate {
    static name: string
}
export class DomainGraphicsPrivate {
    static name: string
}
export abstract class DomainGraphicsRdpClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdpClass */
    parentClass: DomainGraphicsClass
    padding: object[]
    static name: string
}
export class DomainGraphicsRdpPrivate {
    static name: string
}
export abstract class DomainGraphicsSdlClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdlClass */
    parentClass: DomainGraphicsClass
    padding: object[]
    static name: string
}
export class DomainGraphicsSdlPrivate {
    static name: string
}
export abstract class DomainGraphicsSpiceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpiceClass */
    parentClass: DomainGraphicsClass
    padding: object[]
    static name: string
}
export class DomainGraphicsSpicePrivate {
    static name: string
}
export abstract class DomainGraphicsVncClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVncClass */
    parentClass: DomainGraphicsClass
    padding: object[]
    static name: string
}
export class DomainGraphicsVncPrivate {
    static name: string
}
export abstract class DomainHostdevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export abstract class DomainHostdevPciClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass */
    parentClass: DomainHostdevClass
    padding: object[]
    static name: string
}
export class DomainHostdevPciPrivate {
    static name: string
}
export class DomainHostdevPrivate {
    static name: string
}
export abstract class DomainInputClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInputClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainInputPrivate {
    static name: string
}
export abstract class DomainInterfaceBridgeClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridgeClass */
    parentClass: DomainInterfaceClass
    padding: object[]
    static name: string
}
export class DomainInterfaceBridgePrivate {
    static name: string
}
export abstract class DomainInterfaceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export abstract class DomainInterfaceFilterrefClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class DomainInterfaceFilterrefParameterClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainInterfaceFilterrefParameterPrivate {
    static name: string
}
export class DomainInterfaceFilterrefPrivate {
    static name: string
}
export abstract class DomainInterfaceNetworkClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetworkClass */
    parentClass: DomainInterfaceClass
    padding: object[]
    static name: string
}
export class DomainInterfaceNetworkPrivate {
    static name: string
}
export class DomainInterfacePrivate {
    static name: string
}
export abstract class DomainInterfaceUserClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUserClass */
    parentClass: DomainInterfaceClass
    padding: object[]
    static name: string
}
export class DomainInterfaceUserPrivate {
    static name: string
}
export abstract class DomainMemballoonClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoonClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainMemballoonPrivate {
    static name: string
}
export abstract class DomainOsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOsClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainOsPrivate {
    static name: string
}
export abstract class DomainParallelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallelClass */
    parentClass: DomainChardevClass
    padding: object[]
    static name: string
}
export class DomainParallelPrivate {
    static name: string
}
export abstract class DomainPowerManagementClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagementClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainPowerManagementPrivate {
    static name: string
}
export class DomainPrivate {
    static name: string
}
export abstract class DomainRedirdevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdevClass */
    parentClass: DomainChardevClass
    padding: object[]
    static name: string
}
export class DomainRedirdevPrivate {
    static name: string
}
export abstract class DomainSeclabelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabelClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainSeclabelPrivate {
    static name: string
}
export abstract class DomainSerialClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerialClass */
    parentClass: DomainChardevClass
    padding: object[]
    static name: string
}
export class DomainSerialPrivate {
    static name: string
}
export abstract class DomainSmartcardClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export abstract class DomainSmartcardHostCertificatesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass */
    parentClass: DomainSmartcardClass
    padding: object[]
    static name: string
}
export class DomainSmartcardHostCertificatesPrivate {
    static name: string
}
export abstract class DomainSmartcardHostClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostClass */
    parentClass: DomainSmartcardClass
    padding: object[]
    static name: string
}
export class DomainSmartcardHostPrivate {
    static name: string
}
export abstract class DomainSmartcardPassthroughClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthroughClass */
    parentClass: DomainSmartcardClass
    padding: object[]
    static name: string
}
export class DomainSmartcardPassthroughPrivate {
    static name: string
}
export class DomainSmartcardPrivate {
    static name: string
}
export abstract class DomainSnapshotClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class DomainSnapshotDiskClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class DomainSnapshotDiskPrivate {
    static name: string
}
export class DomainSnapshotPrivate {
    static name: string
}
export abstract class DomainSoundClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSoundClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainSoundPrivate {
    static name: string
}
export abstract class DomainTimerClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class DomainTimerHpetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass */
    parentClass: DomainTimerClass
    padding: object[]
    static name: string
}
export class DomainTimerHpetPrivate {
    static name: string
}
export abstract class DomainTimerPitClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPitClass */
    parentClass: DomainTimerClass
    padding: object[]
    static name: string
}
export class DomainTimerPitPrivate {
    static name: string
}
export class DomainTimerPrivate {
    static name: string
}
export abstract class DomainTimerRtcClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtcClass */
    parentClass: DomainTimerClass
    padding: object[]
    static name: string
}
export class DomainTimerRtcPrivate {
    static name: string
}
export abstract class DomainVideoClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideoClass */
    parentClass: DomainDeviceClass
    padding: object[]
    static name: string
}
export class DomainVideoPrivate {
    static name: string
}
export abstract class InterfaceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.InterfaceClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class InterfacePrivate {
    static name: string
}
export abstract class NetworkClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export abstract class NetworkFilterClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass */
    parentClass: ObjectClass
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
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDeviceClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class NodeDevicePrivate {
    static name: string
}
export abstract class ObjectClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.ObjectClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ObjectPrivate {
    static name: string
}
export abstract class SecretClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.SecretClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class SecretPrivate {
    static name: string
}
export abstract class StoragePermissionsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissionsClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StoragePermissionsPrivate {
    static name: string
}
export abstract class StoragePoolClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StoragePoolPrivate {
    static name: string
}
export abstract class StoragePoolSourceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSourceClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StoragePoolSourcePrivate {
    static name: string
}
export abstract class StoragePoolTargetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTargetClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StoragePoolTargetPrivate {
    static name: string
}
export abstract class StorageVolBackingStoreClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStoreClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StorageVolBackingStorePrivate {
    static name: string
}
export abstract class StorageVolClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StorageVolPrivate {
    static name: string
}
export abstract class StorageVolTargetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTargetClass */
    parentClass: ObjectClass
    padding: object[]
    static name: string
}
export class StorageVolTargetPrivate {
    static name: string
}
}