/**
 * LibvirtGConfig-1.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace LibvirtGConfig {

enum DomainChannelTargetType {
    GUESTFWD,
    VIRTIO,
    SPICEPORT,
}
enum DomainClockOffset {
    UTC,
    LOCALTIME,
    TIMEZONE,
    VARIABLE,
}
enum DomainConsoleTargetType {
    XEN,
    SERIAL,
    UML,
    VIRTIO,
    LXC,
    OPENVZ,
}
enum DomainControllerUsbModel {
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
enum DomainCpuFeaturePolicy {
    FORCE,
    REQUIRE,
    OPTIONAL,
    DISABLE,
    FORBID,
}
enum DomainCpuMatchPolicy {
    MINIMUM,
    EXACT,
    STRICT,
}
enum DomainCpuMode {
    CUSTOM,
    HOST_MODEL,
    HOST_PASSTHROUGH,
}
enum DomainDiskBus {
    IDE,
    FDC,
    SCSI,
    VIRTIO,
    XEN,
    USB,
    UML,
    SATA,
}
enum DomainDiskCacheType {
    DEFAULT,
    NONE,
    WRITETHROUGH,
    WRITEBACK,
    DIRECTSYNC,
    UNSAFE,
}
enum DomainDiskDriverDiscard {
    UNMAP,
    IGNORE,
}
enum DomainDiskDriverErrorPolicy {
    STOP,
    REPORT,
    IGNORE,
    ENOSPACE,
}
enum DomainDiskDriverIoPolicy {
    THREADS,
    NATIVE,
}
enum DomainDiskFormat {
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
enum DomainDiskGuestDeviceType {
    DISK,
    FLOPPY,
    CDROM,
}
enum DomainDiskSnapshotType {
    NO,
    INTERNAL,
    EXTERNAL,
}
enum DomainDiskStartupPolicy {
    MANDATORY,
    REQUISITE,
    OPTIONAL,
}
enum DomainDiskType {
    FILE,
    BLOCK,
    DIR,
    NETWORK,
}
enum DomainFilesysAccessType {
    PASSTHROUGH,
    MAPPED,
    SQUASH,
}
enum DomainFilesysDriverType {
    DEFAULT,
    PATH,
    HANDLE,
    LOOP,
    NBD,
    PLOOP,
}
enum DomainFilesysType {
    MOUNT,
    BLOCK,
    FILE,
    TEMPLATE,
    RAM,
    BIND,
}
enum DomainGraphicsSpiceImageCompression {
    AUTO_GLZ,
    AUTO_LZ,
    QUIC,
    GLZ,
    LZ,
    OFF,
}
enum DomainInputBus {
    PS2,
    USB,
    XEN,
}
enum DomainInputDeviceType {
    MOUSE,
    TABLET,
    KEYBOARD,
}
enum DomainInterfaceLinkState {
    DEFAULT,
    UP,
    DOWN,
}
enum DomainLifecycleAction {
    DESTROY,
    RESTART,
    PRESERVE,
    RENAME_RESTART,
    COREDUMP_DESTROY,
    COREDUMP_RESTART,
}
enum DomainLifecycleEvent {
    ON_POWEROFF,
    ON_REBOOT,
    ON_CRASH,
}
enum DomainMemballoonModel {
    NONE,
    VIRTIO,
}
enum DomainOsBootDevice {
    FD,
    HD,
    CDROM,
    NETWORK,
}
enum DomainOsFirmware {
    BIOS,
    EFI,
}
enum DomainOsSmBiosMode {
    EMULATE,
    HOST,
    SYSINFO,
}
enum DomainOsType {
    HVM,
    LINUX,
    EXE,
    XEN,
    UML,
}
enum DomainRedirdevBus {
    USB,
}
enum DomainSeclabelType {
    DYNAMIC,
    STATIC,
}
enum DomainSnapshotDomainState {
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
enum DomainSnapshotMemoryState {
    NONE,
    INTERNAL,
    EXTERNAL,
}
enum DomainSoundModel {
    SB16,
    ES1370,
    PCSPK,
    AC97,
    ICH6,
    ICH9,
}
enum DomainTimerTickPolicy {
    DELAY,
    CATCHUP,
    MERGE,
    DISCARD,
}
enum DomainVideoModel {
    VGA,
    CIRRUS,
    VMVGA,
    XEN,
    VBOX,
    QXL,
    VIRTIO,
    BOCHS,
}
enum DomainVirtType {
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
enum StoragePoolType {
    DIR,
    FS,
    NETFS,
    LOGICAL,
    DISK,
    ISCSI,
    SCSI,
    MPATH,
}
enum StorageVolTargetFeatures {
    REFCOUNT,
}
function init(argv?: string[] | null): /* argv */ string[] | null
function init_check(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export interface Capabilities_ConstructProps extends Object_ConstructProps {
}
class Capabilities {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities */
    parent: Object
    priv: CapabilitiesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities */
    get_guests(): CapabilitiesGuest[]
    get_host(): CapabilitiesHost
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Capabilities_ConstructProps)
    _init (config?: Capabilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Capabilities
    static new(type: GObject.Type, root_name: string, schema: string): Capabilities
    static new_from_xml(xml: string): Capabilities
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): Capabilities
    static $gtype: GObject.Type
}
export interface CapabilitiesCpu_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpu {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    parent: Object
    priv: CapabilitiesCpuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    add_feature(feature: CapabilitiesCpuFeature): void
    get_arch(): string
    get_features(): CapabilitiesCpuFeature[]
    get_model(): CapabilitiesCpuModel
    get_topology(): CapabilitiesCpuTopology
    set_topology(topology: CapabilitiesCpuTopology): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    vfunc_get_features(): CapabilitiesCpuFeature[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesCpu_ConstructProps)
    _init (config?: CapabilitiesCpu_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesCpuFeature_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpuFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    parent: Object
    priv: CapabilitiesCpuFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    get_name(): string
    set_name(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesCpuFeature_ConstructProps)
    _init (config?: CapabilitiesCpuFeature_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesCpuModel_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpuModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    parent: Object
    priv: CapabilitiesCpuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    get_name(): string
    set_name(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesCpuModel_ConstructProps)
    _init (config?: CapabilitiesCpuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CapabilitiesCpuModel
    static new(type: GObject.Type, root_name: string, schema: string): CapabilitiesCpuModel
    static new_from_xml(xml: string): CapabilitiesCpuModel
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): CapabilitiesCpuModel
    static $gtype: GObject.Type
}
export interface CapabilitiesCpuTopology_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpuTopology {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology */
    parent: Object
    priv: CapabilitiesCpuTopologyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology */
    get_cores(): number
    get_sockets(): number
    get_threads(): number
    set_cores(cores: number): void
    set_sockets(sockets: number): void
    set_threads(threads: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesCpuTopology_ConstructProps)
    _init (config?: CapabilitiesCpuTopology_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CapabilitiesCpuTopology
    static new(type: GObject.Type, root_name: string, schema: string): CapabilitiesCpuTopology
    static new_from_xml(xml: string): CapabilitiesCpuTopology
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): CapabilitiesCpuTopology
    static $gtype: GObject.Type
}
export interface CapabilitiesGuest_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuest {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest */
    parent: Object
    priv: CapabilitiesGuestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest */
    get_arch(): CapabilitiesGuestArch
    get_features(): CapabilitiesGuestFeature[]
    get_os_type(): DomainOsType
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesGuest_ConstructProps)
    _init (config?: CapabilitiesGuest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesGuestArch_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuestArch {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch */
    parent: Object
    priv: CapabilitiesGuestArchPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch */
    get_domains(): CapabilitiesGuestDomain[]
    get_emulator(): string
    get_name(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesGuestArch_ConstructProps)
    _init (config?: CapabilitiesGuestArch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesGuestDomain_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuestDomain {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain */
    parent: Object
    priv: CapabilitiesGuestDomainPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain */
    get_emulator(): string
    get_virt_type(): DomainVirtType
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesGuestDomain_ConstructProps)
    _init (config?: CapabilitiesGuestDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesGuestFeature_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuestFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature */
    parent: Object
    priv: CapabilitiesGuestFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature */
    get_name(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesGuestFeature_ConstructProps)
    _init (config?: CapabilitiesGuestFeature_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesHost_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesHost {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost */
    parent: Object
    priv: CapabilitiesHostPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost */
    get_cpu(): CapabilitiesCpu
    get_secmodels(): CapabilitiesHostSecModel[]
    get_uuid(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesHost_ConstructProps)
    _init (config?: CapabilitiesHost_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CapabilitiesHostSecModel_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesHostSecModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel */
    parent: Object
    priv: CapabilitiesHostSecModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel */
    get_doi(): string
    get_model(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CapabilitiesHostSecModel_ConstructProps)
    _init (config?: CapabilitiesHostSecModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Domain_ConstructProps extends Object_ConstructProps {
    current_memory?: number
    description?: string
    features?: string[]
    memory?: number
    name?: string
    title?: string
    uuid?: string
    vcpu?: number
}
class Domain {
    /* Properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    current_memory: number
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
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    add_device(device: DomainDevice): void
    get_clock(): DomainClock
    get_cpu(): DomainCpu
    get_current_memory(): number
    get_custom_xml(ns_uri: string): string
    get_description(): string
    get_devices(): DomainDevice[]
    get_features(): string[]
    get_memory(): number
    get_name(): string
    get_os(): DomainOs
    get_title(): string
    get_uuid(): string
    get_vcpus(): number
    get_virt_type(): DomainVirtType
    set_clock(klock?: DomainClock | null): void
    set_cpu(cpu?: DomainCpu | null): void
    set_current_memory(memory: number): void
    set_custom_xml(xml: string, ns: string, ns_uri: string): boolean
    set_custom_xml_ns_children(xml: string, ns: string, ns_uri: string): boolean
    set_description(description?: string | null): void
    set_devices(devices: DomainDevice[]): void
    set_features(features: string[]): void
    set_lifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void
    set_memory(memory: number): void
    set_name(name?: string | null): void
    set_os(os?: DomainOs | null): void
    set_power_management(pm?: DomainPowerManagement | null): void
    set_seclabel(seclabel?: DomainSeclabel | null): void
    set_title(title?: string | null): void
    set_uuid(uuid?: string | null): void
    set_vcpus(vcpu_count: number): void
    set_virt_type(type: DomainVirtType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::features", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vcpu", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vcpu", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Domain_ConstructProps)
    _init (config?: Domain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Domain
    static new(type: GObject.Type, root_name: string, schema: string): Domain
    static new_from_xml(xml: string): Domain
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): Domain
    static $gtype: GObject.Type
}
export interface DomainAddress_ConstructProps extends Object_ConstructProps {
}
class DomainAddress {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress */
    parent: Object
    priv: DomainAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainAddress_ConstructProps)
    _init (config?: DomainAddress_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainAddressPci_ConstructProps extends DomainAddress_ConstructProps {
}
class DomainAddressPci {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci */
    parent: DomainAddress
    priv: DomainAddressPciPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci */
    get_bus(): number
    get_domain(): number
    get_function(): number
    get_multifunction(): boolean
    get_slot(): number
    set_bus(bus: number): void
    set_domain(pci_domain: number): void
    set_function(function_: number): void
    set_multifunction(multifunction: boolean): void
    set_slot(slot: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainAddressPci_ConstructProps)
    _init (config?: DomainAddressPci_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainAddressPci
    static new(type: GObject.Type, root_name: string, schema: string): DomainAddressPci
    static new_from_xml(xml: string): DomainAddressPci
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainAddressPci
    static $gtype: GObject.Type
}
export interface DomainAddressUsb_ConstructProps extends DomainAddress_ConstructProps {
}
class DomainAddressUsb {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb */
    parent: DomainAddress
    priv: DomainAddressUsbPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb */
    set_bus(bus: number): void
    set_port(port: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainAddressUsb_ConstructProps)
    _init (config?: DomainAddressUsb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainAddressUsb
    static new(type: GObject.Type, root_name: string, schema: string): DomainAddressUsb
    static new_from_xml(xml: string): DomainAddressUsb
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainAddressUsb
    static $gtype: GObject.Type
}
export interface DomainCapabilities_ConstructProps extends Object_ConstructProps {
}
class DomainCapabilities {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities */
    parent: Object
    priv: DomainCapabilitiesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities */
    get_os(): DomainCapabilitiesOs
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainCapabilities_ConstructProps)
    _init (config?: DomainCapabilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCapabilities
    static new(type: GObject.Type, root_name: string, schema: string): DomainCapabilities
    static new_from_xml(xml: string): DomainCapabilities
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainCapabilities
    static $gtype: GObject.Type
}
export interface DomainCapabilitiesOs_ConstructProps extends Object_ConstructProps {
}
class DomainCapabilitiesOs {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs */
    parent: Object
    priv: DomainCapabilitiesOsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs */
    get_firmwares(): DomainOsFirmware[]
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs */
    vfunc_get_firmwares(): DomainOsFirmware[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainCapabilitiesOs_ConstructProps)
    _init (config?: DomainCapabilitiesOs_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainChannel_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainChannel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel */
    parent: DomainChardev
    priv: DomainChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel */
    get_target_name(): string
    get_target_type(): DomainChannelTargetType
    set_target_name(name: string): void
    set_target_type(type: DomainChannelTargetType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChannel_ConstructProps)
    _init (config?: DomainChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChannel
    static new(type: GObject.Type, root_name: string, schema: string): DomainChannel
    static new_from_xml(xml: string): DomainChannel
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainChannel
    static $gtype: GObject.Type
}
export interface DomainChardev_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainChardev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    parent: DomainDevice
    priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChardev_ConstructProps)
    _init (config?: DomainChardev_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainChardevSource_ConstructProps extends Object_ConstructProps {
}
class DomainChardevSource {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource */
    parent: Object
    priv: DomainChardevSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChardevSource_ConstructProps)
    _init (config?: DomainChardevSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainChardevSourcePty_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourcePty {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty */
    parent: DomainChardevSource
    priv: DomainChardevSourcePtyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty */
    get_path(): string
    set_path(path: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChardevSourcePty_ConstructProps)
    _init (config?: DomainChardevSourcePty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourcePty
    static new(type: GObject.Type, root_name: string, schema: string): DomainChardevSourcePty
    static new_from_xml(xml: string): DomainChardevSourcePty
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainChardevSourcePty
    static $gtype: GObject.Type
}
export interface DomainChardevSourceSpicePort_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourceSpicePort {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort */
    parent: DomainChardevSource
    priv: DomainChardevSourceSpicePortPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort */
    get_channel(): string
    set_channel(channel: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChardevSourceSpicePort_ConstructProps)
    _init (config?: DomainChardevSourceSpicePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceSpicePort
    static new(type: GObject.Type, root_name: string, schema: string): DomainChardevSourceSpicePort
    static new_from_xml(xml: string): DomainChardevSourceSpicePort
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainChardevSourceSpicePort
    static $gtype: GObject.Type
}
export interface DomainChardevSourceSpiceVmc_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourceSpiceVmc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc */
    parent: DomainChardevSource
    priv: DomainChardevSourceSpiceVmcPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChardevSourceSpiceVmc_ConstructProps)
    _init (config?: DomainChardevSourceSpiceVmc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceSpiceVmc
    static new(type: GObject.Type, root_name: string, schema: string): DomainChardevSourceSpiceVmc
    static new_from_xml(xml: string): DomainChardevSourceSpiceVmc
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainChardevSourceSpiceVmc
    static $gtype: GObject.Type
}
export interface DomainChardevSourceUnix_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourceUnix {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix */
    parent: DomainChardevSource
    priv: DomainChardevSourceUnixPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainChardevSourceUnix_ConstructProps)
    _init (config?: DomainChardevSourceUnix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceUnix
    static new(type: GObject.Type, root_name: string, schema: string): DomainChardevSourceUnix
    static new_from_xml(xml: string): DomainChardevSourceUnix
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainChardevSourceUnix
    static $gtype: GObject.Type
}
export interface DomainClock_ConstructProps extends Object_ConstructProps {
}
class DomainClock {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock */
    parent: Object
    priv: DomainClockPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock */
    add_timer(timer: DomainTimer): void
    get_offset(): DomainClockOffset
    get_timezone(): string
    get_variable_offset(): number
    set_offset(offset: DomainClockOffset): void
    set_timezone(tz: string): void
    set_variable_offset(seconds: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainClock_ConstructProps)
    _init (config?: DomainClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainClock
    static new(type: GObject.Type, root_name: string, schema: string): DomainClock
    static new_from_xml(xml: string): DomainClock
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainClock
    static $gtype: GObject.Type
}
export interface DomainConsole_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainConsole {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole */
    parent: DomainChardev
    priv: DomainConsolePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole */
    set_target_type(type: DomainConsoleTargetType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainConsole_ConstructProps)
    _init (config?: DomainConsole_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainConsole
    static new(type: GObject.Type, root_name: string, schema: string): DomainConsole
    static new_from_xml(xml: string): DomainConsole
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainConsole
    static $gtype: GObject.Type
}
export interface DomainController_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainController {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    parent: DomainDevice
    priv: DomainControllerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    get_index(): number
    get_ports(): number
    set_address(address?: DomainAddress | null): void
    set_index(index: number): void
    set_ports(ports: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainController_ConstructProps)
    _init (config?: DomainController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainControllerUsb_ConstructProps extends DomainController_ConstructProps {
}
class DomainControllerUsb {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb */
    parent: DomainController
    priv: DomainControllerUsbPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb */
    set_master(master: DomainControllerUsb, startport: number): void
    set_model(model: DomainControllerUsbModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    get_index(): number
    get_ports(): number
    set_address(address?: DomainAddress | null): void
    set_index(index: number): void
    set_ports(ports: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainControllerUsb_ConstructProps)
    _init (config?: DomainControllerUsb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainControllerUsb
    static new(type: GObject.Type, root_name: string, schema: string): DomainControllerUsb
    static new_from_xml(xml: string): DomainControllerUsb
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainControllerUsb
    static $gtype: GObject.Type
}
export interface DomainCpu_ConstructProps extends CapabilitiesCpu_ConstructProps {
}
class DomainCpu {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu */
    parent: CapabilitiesCpu
    priv: DomainCpuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu */
    get_match_policy(): DomainCpuMatchPolicy
    get_mode(): DomainCpuMode
    set_match_policy(policy: DomainCpuMatchPolicy): void
    set_mode(mode: DomainCpuMode): void
    set_model(model: DomainCpuModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    add_feature(feature: CapabilitiesCpuFeature): void
    get_arch(): string
    get_features(): CapabilitiesCpuFeature[]
    get_model(): CapabilitiesCpuModel
    get_topology(): CapabilitiesCpuTopology
    set_topology(topology: CapabilitiesCpuTopology): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    vfunc_get_features(): CapabilitiesCpuFeature[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainCpu_ConstructProps)
    _init (config?: DomainCpu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpu
    static new(type: GObject.Type, root_name: string, schema: string): DomainCpu
    static new_from_xml(xml: string): DomainCpu
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainCpu
    static $gtype: GObject.Type
}
export interface DomainCpuFeature_ConstructProps extends CapabilitiesCpuFeature_ConstructProps {
}
class DomainCpuFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature */
    parent: CapabilitiesCpu
    priv: DomainCpuFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature */
    get_policy(): DomainCpuFeaturePolicy
    set_policy(policy: DomainCpuFeaturePolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    get_name(): string
    set_name(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainCpuFeature_ConstructProps)
    _init (config?: DomainCpuFeature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpuFeature
    static new(type: GObject.Type, root_name: string, schema: string): DomainCpuFeature
    static new_from_xml(xml: string): DomainCpuFeature
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainCpuFeature
    static $gtype: GObject.Type
}
export interface DomainCpuModel_ConstructProps extends CapabilitiesCpuModel_ConstructProps {
}
class DomainCpuModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel */
    parent: CapabilitiesCpuModel
    priv: DomainCpuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    get_name(): string
    set_name(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainCpuModel_ConstructProps)
    _init (config?: DomainCpuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpuModel
    static new(type: GObject.Type, root_name: string, schema: string): DomainCpuModel
    static new_from_xml(xml: string): DomainCpuModel
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainCpuModel
    static $gtype: GObject.Type
}
export interface DomainDevice_ConstructProps extends Object_ConstructProps {
}
class DomainDevice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    parent: Object
    priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainDevice_ConstructProps)
    _init (config?: DomainDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainDisk {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk */
    parent: DomainDevice
    priv: DomainDiskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk */
    get_disk_type(): DomainDiskType
    get_driver(): DomainDiskDriver
    get_driver_cache(): DomainDiskCacheType
    get_driver_format(): DomainDiskFormat
    get_driver_name(): string
    get_driver_type(): string
    get_guest_device_type(): DomainDiskGuestDeviceType
    get_snapshot_type(): DomainDiskSnapshotType
    get_source(): string
    get_startup_policy(): DomainDiskStartupPolicy
    get_target_bus(): DomainDiskBus
    get_target_dev(): string
    set_driver(driver?: DomainDiskDriver | null): void
    set_driver_cache(cache_type: DomainDiskCacheType): void
    set_driver_format(format: DomainDiskFormat): void
    set_driver_name(driver_name: string): void
    set_driver_type(driver_type: string): void
    set_guest_device_type(type: DomainDiskGuestDeviceType): void
    set_readonly(readonly: boolean): void
    set_snapshot_type(type: DomainDiskSnapshotType): void
    set_source(source: string): void
    set_startup_policy(policy: DomainDiskStartupPolicy): void
    set_target_bus(bus: DomainDiskBus): void
    set_target_dev(dev: string): void
    set_type(type: DomainDiskType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainDisk_ConstructProps)
    _init (config?: DomainDisk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainDisk
    static new(type: GObject.Type, root_name: string, schema: string): DomainDisk
    static new_from_xml(xml: string): DomainDisk
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainDisk
    static $gtype: GObject.Type
}
export interface DomainDiskDriver_ConstructProps extends Object_ConstructProps {
}
class DomainDiskDriver {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver */
    parent: Object
    priv: DomainDiskDriverPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver */
    get_cache(): DomainDiskCacheType
    get_copy_on_read(): boolean
    get_discard(): DomainDiskDriverDiscard
    get_error_policy(): DomainDiskDriverErrorPolicy
    get_format(): DomainDiskFormat
    get_io_policy(): DomainDiskDriverIoPolicy
    get_name(): string
    set_cache(cache_type: DomainDiskCacheType): void
    set_copy_on_read(copy_on_read: boolean): void
    set_discard(discard: DomainDiskDriverDiscard): void
    set_error_policy(policy: DomainDiskDriverErrorPolicy): void
    set_format(format: DomainDiskFormat): void
    set_io_policy(policy: DomainDiskDriverIoPolicy): void
    set_name(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainDiskDriver_ConstructProps)
    _init (config?: DomainDiskDriver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainDiskDriver
    static new(type: GObject.Type, root_name: string, schema: string): DomainDiskDriver
    static new_from_xml(xml: string): DomainDiskDriver
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainDiskDriver
    static $gtype: GObject.Type
}
export interface DomainFilesys_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainFilesys {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys */
    parent: DomainDevice
    priv: DomainFilesysPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys */
    set_access_type(type: DomainFilesysAccessType): void
    set_driver_format(format: DomainDiskFormat): void
    set_driver_type(type: DomainFilesysDriverType): void
    set_ram_usage(bytes: number): void
    set_readonly(readonly: boolean): void
    set_source(source: string): void
    set_target(target: string): void
    set_type(type: DomainFilesysType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainFilesys_ConstructProps)
    _init (config?: DomainFilesys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainFilesys
    static new(type: GObject.Type, root_name: string, schema: string): DomainFilesys
    static new_from_xml(xml: string): DomainFilesys
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainFilesys
    static $gtype: GObject.Type
}
export interface DomainGraphics_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainGraphics {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    parent: DomainDevice
    priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainGraphics_ConstructProps)
    _init (config?: DomainGraphics_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainGraphicsDesktop_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsDesktop {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop */
    parent: DomainGraphics
    priv: DomainGraphicsDesktopPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop */
    get_display(): string
    get_fullscreen(): boolean
    set_display(disp: string): void
    set_fullscreen(fullscreen: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainGraphicsDesktop_ConstructProps)
    _init (config?: DomainGraphicsDesktop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsDesktop
    static new(type: GObject.Type, root_name: string, schema: string): DomainGraphicsDesktop
    static new_from_xml(xml: string): DomainGraphicsDesktop
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainGraphicsDesktop
    static $gtype: GObject.Type
}
export interface DomainGraphicsRdp_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsRdp {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp */
    parent: DomainGraphics
    priv: DomainGraphicsRdpPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp */
    get_multi_user(): boolean
    get_port(): number
    get_replace_user(): boolean
    set_autoport(autoport: boolean): void
    set_multi_user(multi_user: boolean): void
    set_port(port: number): void
    set_replace_user(replace_user: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainGraphicsRdp_ConstructProps)
    _init (config?: DomainGraphicsRdp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsRdp
    static new(type: GObject.Type, root_name: string, schema: string): DomainGraphicsRdp
    static new_from_xml(xml: string): DomainGraphicsRdp
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainGraphicsRdp
    static $gtype: GObject.Type
}
export interface DomainGraphicsSdl_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsSdl {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl */
    parent: DomainGraphics
    priv: DomainGraphicsSdlPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl */
    set_display(disp: string): void
    set_fullscreen(fullscreen: boolean): void
    set_xauthority(path: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainGraphicsSdl_ConstructProps)
    _init (config?: DomainGraphicsSdl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsSdl
    static new(type: GObject.Type, root_name: string, schema: string): DomainGraphicsSdl
    static new_from_xml(xml: string): DomainGraphicsSdl
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainGraphicsSdl
    static $gtype: GObject.Type
}
export interface DomainGraphicsSpice_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsSpice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice */
    parent: DomainGraphics
    priv: DomainGraphicsSpicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice */
    get_image_compression(): DomainGraphicsSpiceImageCompression
    get_port(): number
    set_autoport(autoport: boolean): void
    set_gl(gl: boolean): void
    set_image_compression(compression: DomainGraphicsSpiceImageCompression): void
    set_password(password: string): void
    set_port(port: number): void
    set_tls_port(port: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainGraphicsSpice_ConstructProps)
    _init (config?: DomainGraphicsSpice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsSpice
    static new(type: GObject.Type, root_name: string, schema: string): DomainGraphicsSpice
    static new_from_xml(xml: string): DomainGraphicsSpice
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainGraphicsSpice
    static $gtype: GObject.Type
}
export interface DomainGraphicsVnc_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsVnc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc */
    parent: DomainGraphics
    priv: DomainGraphicsVncPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc */
    get_port(): number
    get_socket(): string
    set_autoport(autoport: boolean): void
    set_password(password: string): void
    set_port(port: number): void
    set_socket(socket: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainGraphicsVnc_ConstructProps)
    _init (config?: DomainGraphicsVnc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsVnc
    static new(type: GObject.Type, root_name: string, schema: string): DomainGraphicsVnc
    static new_from_xml(xml: string): DomainGraphicsVnc
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainGraphicsVnc
    static $gtype: GObject.Type
}
export interface DomainHostdev_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainHostdev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    parent: DomainDevice
    priv: DomainHostdevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    get_boot_order(): number
    get_readonly(): boolean
    get_shareable(): boolean
    set_boot_order(order: number): void
    set_readonly(readonly: boolean): void
    set_shareable(shareable: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainHostdev_ConstructProps)
    _init (config?: DomainHostdev_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainHostdevPci_ConstructProps extends DomainHostdev_ConstructProps {
}
class DomainHostdevPci {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci */
    parent: DomainHostdev
    priv: DomainHostdevPciPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci */
    get_address(): DomainAddressPci
    get_managed(): boolean
    get_rom_bar(): boolean
    get_rom_file(): string
    set_address(address: DomainAddressPci): void
    set_managed(managed: boolean): void
    set_rom_bar(bar: boolean): void
    set_rom_file(file: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    get_boot_order(): number
    get_readonly(): boolean
    get_shareable(): boolean
    set_boot_order(order: number): void
    set_readonly(readonly: boolean): void
    set_shareable(shareable: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainHostdevPci_ConstructProps)
    _init (config?: DomainHostdevPci_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainHostdevPci
    static new(type: GObject.Type, root_name: string, schema: string): DomainHostdevPci
    static new_from_xml(xml: string): DomainHostdevPci
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainHostdevPci
    static $gtype: GObject.Type
}
export interface DomainInput_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainInput {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput */
    parent: DomainDevice
    priv: DomainInputPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput */
    get_bus(): DomainInputBus
    get_device_type(): DomainInputDeviceType
    set_bus(bus: DomainInputBus): void
    set_device_type(type: DomainInputDeviceType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInput_ConstructProps)
    _init (config?: DomainInput_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInput
    static new(type: GObject.Type, root_name: string, schema: string): DomainInput
    static new_from_xml(xml: string): DomainInput
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainInput
    static $gtype: GObject.Type
}
export interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainInterface {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    parent: DomainDevice
    priv: DomainInterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    get_filterref(): DomainInterfaceFilterref
    get_ifname(): string
    get_link_state(): DomainInterfaceLinkState
    get_mac(): string
    get_model(): string
    set_filterref(filterref?: DomainInterfaceFilterref | null): void
    set_ifname(ifname: string): void
    set_link_state(state: DomainInterfaceLinkState): void
    set_mac(mac_address: string): void
    set_model(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterface_ConstructProps)
    _init (config?: DomainInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainInterfaceBridge_ConstructProps extends DomainInterface_ConstructProps {
}
class DomainInterfaceBridge {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge */
    parent: DomainInterface
    priv: DomainInterfaceBridgePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge */
    set_source(brname: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    get_filterref(): DomainInterfaceFilterref
    get_ifname(): string
    get_link_state(): DomainInterfaceLinkState
    get_mac(): string
    get_model(): string
    set_filterref(filterref?: DomainInterfaceFilterref | null): void
    set_ifname(ifname: string): void
    set_link_state(state: DomainInterfaceLinkState): void
    set_mac(mac_address: string): void
    set_model(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterfaceBridge_ConstructProps)
    _init (config?: DomainInterfaceBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceBridge
    static new(type: GObject.Type, root_name: string, schema: string): DomainInterfaceBridge
    static new_from_xml(xml: string): DomainInterfaceBridge
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainInterfaceBridge
    static $gtype: GObject.Type
}
export interface DomainInterfaceFilterref_ConstructProps extends Object_ConstructProps {
}
class DomainInterfaceFilterref {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref */
    parent: Object
    priv: DomainInterfaceFilterrefPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref */
    add_parameter(parameter: DomainInterfaceFilterrefParameter): void
    get_name(): string
    get_parameters(): DomainInterfaceFilterrefParameter[]
    set_name(filter: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterfaceFilterref_ConstructProps)
    _init (config?: DomainInterfaceFilterref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceFilterref
    static new(type: GObject.Type, root_name: string, schema: string): DomainInterfaceFilterref
    static new_from_xml(xml: string): DomainInterfaceFilterref
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainInterfaceFilterref
    static $gtype: GObject.Type
}
export interface DomainInterfaceFilterrefParameter_ConstructProps extends Object_ConstructProps {
}
class DomainInterfaceFilterrefParameter {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter */
    parent: Object
    priv: DomainInterfaceFilterrefParameterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter */
    get_name(): string
    get_value(): string
    set_name(name: string): void
    set_value(value: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterfaceFilterrefParameter_ConstructProps)
    _init (config?: DomainInterfaceFilterrefParameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceFilterrefParameter
    static new(type: GObject.Type, root_name: string, schema: string): DomainInterfaceFilterrefParameter
    static new_from_xml(xml: string): DomainInterfaceFilterrefParameter
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainInterfaceFilterrefParameter
    static $gtype: GObject.Type
}
export interface DomainInterfaceNetwork_ConstructProps extends DomainInterface_ConstructProps {
}
class DomainInterfaceNetwork {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork */
    parent: DomainInterface
    priv: DomainInterfaceNetworkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork */
    set_source(source: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    get_filterref(): DomainInterfaceFilterref
    get_ifname(): string
    get_link_state(): DomainInterfaceLinkState
    get_mac(): string
    get_model(): string
    set_filterref(filterref?: DomainInterfaceFilterref | null): void
    set_ifname(ifname: string): void
    set_link_state(state: DomainInterfaceLinkState): void
    set_mac(mac_address: string): void
    set_model(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterfaceNetwork_ConstructProps)
    _init (config?: DomainInterfaceNetwork_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceNetwork
    static new(type: GObject.Type, root_name: string, schema: string): DomainInterfaceNetwork
    static new_from_xml(xml: string): DomainInterfaceNetwork
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainInterfaceNetwork
    static $gtype: GObject.Type
}
export interface DomainInterfaceUser_ConstructProps extends DomainInterface_ConstructProps {
}
class DomainInterfaceUser {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser */
    parent: DomainInterface
    priv: DomainInterfaceUserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    get_filterref(): DomainInterfaceFilterref
    get_ifname(): string
    get_link_state(): DomainInterfaceLinkState
    get_mac(): string
    get_model(): string
    set_filterref(filterref?: DomainInterfaceFilterref | null): void
    set_ifname(ifname: string): void
    set_link_state(state: DomainInterfaceLinkState): void
    set_mac(mac_address: string): void
    set_model(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterfaceUser_ConstructProps)
    _init (config?: DomainInterfaceUser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceUser
    static new(type: GObject.Type, root_name: string, schema: string): DomainInterfaceUser
    static new_from_xml(xml: string): DomainInterfaceUser
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainInterfaceUser
    static $gtype: GObject.Type
}
export interface DomainMemballoon_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainMemballoon {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon */
    parent: DomainDevice
    priv: DomainMemballoonPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon */
    set_model(model: DomainMemballoonModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainMemballoon_ConstructProps)
    _init (config?: DomainMemballoon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainMemballoon
    static new(type: GObject.Type, root_name: string, schema: string): DomainMemballoon
    static new_from_xml(xml: string): DomainMemballoon
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainMemballoon
    static $gtype: GObject.Type
}
export interface DomainOs_ConstructProps extends Object_ConstructProps {
}
class DomainOs {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs */
    parent: Object
    priv: DomainOsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs */
    bios_enable_serial(enable: boolean): void
    enable_boot_menu(enable: boolean): void
    get_arch(): string
    get_boot_devices(): DomainOsBootDevice[]
    get_firmware(): DomainOsFirmware
    get_machine(): string
    get_os_type(): DomainOsType
    set_arch(arch: string): void
    set_boot_devices(boot_devices: DomainOsBootDevice[]): void
    set_cmdline(cmdline?: string | null): void
    set_firmware(firmware: DomainOsFirmware): void
    set_init(init?: string | null): void
    set_kernel(kernel?: string | null): void
    set_loader(loader?: string | null): void
    set_machine(machine: string): void
    set_os_type(type: DomainOsType): void
    set_ramdisk(ramdisk?: string | null): void
    set_smbios_mode(mode: DomainOsSmBiosMode): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainOs_ConstructProps)
    _init (config?: DomainOs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainOs
    static new(type: GObject.Type, root_name: string, schema: string): DomainOs
    static new_from_xml(xml: string): DomainOs
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainOs
    static $gtype: GObject.Type
}
export interface DomainParallel_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainParallel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel */
    parent: DomainChardev
    priv: DomainParallelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainParallel_ConstructProps)
    _init (config?: DomainParallel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainParallel
    static new(type: GObject.Type, root_name: string, schema: string): DomainParallel
    static new_from_xml(xml: string): DomainParallel
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainParallel
    static $gtype: GObject.Type
}
export interface DomainPowerManagement_ConstructProps extends Object_ConstructProps {
}
class DomainPowerManagement {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement */
    parent: Object
    priv: DomainPowerManagementPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement */
    set_disk_suspend_enabled(enabled: boolean): void
    set_mem_suspend_enabled(enabled: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainPowerManagement_ConstructProps)
    _init (config?: DomainPowerManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainPowerManagement
    static new(type: GObject.Type, root_name: string, schema: string): DomainPowerManagement
    static new_from_xml(xml: string): DomainPowerManagement
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainPowerManagement
    static $gtype: GObject.Type
}
export interface DomainRedirdev_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainRedirdev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev */
    parent: DomainChardev
    priv: DomainRedirdevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev */
    set_address(address?: DomainAddress | null): void
    set_bus(bus: DomainRedirdevBus): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainRedirdev_ConstructProps)
    _init (config?: DomainRedirdev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainRedirdev
    static new(type: GObject.Type, root_name: string, schema: string): DomainRedirdev
    static new_from_xml(xml: string): DomainRedirdev
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainRedirdev
    static $gtype: GObject.Type
}
export interface DomainSeclabel_ConstructProps extends Object_ConstructProps {
}
class DomainSeclabel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel */
    parent: Object
    priv: DomainSeclabelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel */
    set_baselabel(label?: string | null): void
    set_label(label?: string | null): void
    set_model(model: string): void
    set_type(type: DomainSeclabelType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSeclabel_ConstructProps)
    _init (config?: DomainSeclabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSeclabel
    static new(type: GObject.Type, root_name: string, schema: string): DomainSeclabel
    static new_from_xml(xml: string): DomainSeclabel
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSeclabel
    static $gtype: GObject.Type
}
export interface DomainSerial_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainSerial {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial */
    parent: DomainChardev
    priv: DomainSerialPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSerial_ConstructProps)
    _init (config?: DomainSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSerial
    static new(type: GObject.Type, root_name: string, schema: string): DomainSerial
    static new_from_xml(xml: string): DomainSerial
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSerial
    static $gtype: GObject.Type
}
export interface DomainSmartcard_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainSmartcard {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard */
    parent: DomainDevice
    priv: DomainSmartcardPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSmartcard_ConstructProps)
    _init (config?: DomainSmartcard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static set_address(redirdev: DomainRedirdev, address?: DomainAddress | null): void
    static $gtype: GObject.Type
}
export interface DomainSmartcardHost_ConstructProps extends DomainSmartcard_ConstructProps {
}
class DomainSmartcardHost {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost */
    parent: DomainSmartcard
    priv: DomainSmartcardHostPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSmartcardHost_ConstructProps)
    _init (config?: DomainSmartcardHost_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardHost
    static new(type: GObject.Type, root_name: string, schema: string): DomainSmartcardHost
    static new_from_xml(xml: string): DomainSmartcardHost
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSmartcardHost
    static $gtype: GObject.Type
}
export interface DomainSmartcardHostCertificates_ConstructProps extends DomainSmartcard_ConstructProps {
}
class DomainSmartcardHostCertificates {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates */
    parent: DomainSmartcard
    priv: DomainSmartcardHostCertificatesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates */
    set_certificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void
    set_database(path?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSmartcardHostCertificates_ConstructProps)
    _init (config?: DomainSmartcardHostCertificates_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardHostCertificates
    static new(type: GObject.Type, root_name: string, schema: string): DomainSmartcardHostCertificates
    static new_from_xml(xml: string): DomainSmartcardHostCertificates
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSmartcardHostCertificates
    static $gtype: GObject.Type
}
export interface DomainSmartcardPassthrough_ConstructProps extends DomainSmartcard_ConstructProps {
}
class DomainSmartcardPassthrough {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough */
    parent: DomainSmartcard
    priv: DomainSmartcardPassthroughPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough */
    set_source(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSmartcardPassthrough_ConstructProps)
    _init (config?: DomainSmartcardPassthrough_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardPassthrough
    static new(type: GObject.Type, root_name: string, schema: string): DomainSmartcardPassthrough
    static new_from_xml(xml: string): DomainSmartcardPassthrough
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSmartcardPassthrough
    static $gtype: GObject.Type
}
export interface DomainSnapshot_ConstructProps extends Object_ConstructProps {
}
class DomainSnapshot {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot */
    parent: Object
    priv: DomainSnapshotPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot */
    add_disk(disk: DomainSnapshotDisk): void
    get_creation_time(): number
    get_description(): string
    get_disks(): DomainSnapshotDisk[]
    get_domain(): Domain
    get_memory_file(): string
    get_memory_state(): DomainSnapshotMemoryState
    get_name(): string
    get_parent(): string
    get_state(): DomainSnapshotDomainState
    set_description(description: string): void
    set_disks(disks: DomainSnapshotDisk[]): void
    set_memory_file(filename: string): void
    set_memory_state(state: DomainSnapshotMemoryState): void
    set_name(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSnapshot_ConstructProps)
    _init (config?: DomainSnapshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSnapshot
    static new(type: GObject.Type, root_name: string, schema: string): DomainSnapshot
    static new_from_xml(xml: string): DomainSnapshot
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSnapshot
    static $gtype: GObject.Type
}
export interface DomainSnapshotDisk_ConstructProps extends Object_ConstructProps {
}
class DomainSnapshotDisk {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk */
    parent: Object
    priv: DomainSnapshotDiskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk */
    get_driver_format(): DomainDiskFormat
    get_name(): string
    get_snapshot_type(): DomainDiskSnapshotType
    get_source_file(): string
    set_driver_format(format: DomainDiskFormat): void
    set_name(name: string): void
    set_snapshot_type(type: DomainDiskSnapshotType): void
    set_source_file(filename: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSnapshotDisk_ConstructProps)
    _init (config?: DomainSnapshotDisk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSnapshotDisk
    static new(type: GObject.Type, root_name: string, schema: string): DomainSnapshotDisk
    static new_from_xml(xml: string): DomainSnapshotDisk
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSnapshotDisk
    static $gtype: GObject.Type
}
export interface DomainSound_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainSound {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound */
    parent: DomainDevice
    priv: DomainSoundPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound */
    set_model(model: DomainSoundModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSound_ConstructProps)
    _init (config?: DomainSound_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSound
    static new(type: GObject.Type, root_name: string, schema: string): DomainSound
    static new_from_xml(xml: string): DomainSound
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainSound
    static $gtype: GObject.Type
}
export interface DomainTimer_ConstructProps extends Object_ConstructProps {
}
class DomainTimer {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    parent: Object
    priv: DomainTimerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    get_present(): boolean
    get_tick_policy(): DomainTimerTickPolicy
    set_present(present: boolean): void
    set_tick_policy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainTimer_ConstructProps)
    _init (config?: DomainTimer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainTimerHpet_ConstructProps extends DomainTimer_ConstructProps {
}
class DomainTimerHpet {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet */
    parent: DomainTimer
    priv: DomainTimerHpetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    get_present(): boolean
    get_tick_policy(): DomainTimerTickPolicy
    set_present(present: boolean): void
    set_tick_policy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainTimerHpet_ConstructProps)
    _init (config?: DomainTimerHpet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerHpet
    static new(type: GObject.Type, root_name: string, schema: string): DomainTimerHpet
    static new_from_xml(xml: string): DomainTimerHpet
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainTimerHpet
    static $gtype: GObject.Type
}
export interface DomainTimerPit_ConstructProps extends DomainTimer_ConstructProps {
}
class DomainTimerPit {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit */
    parent: DomainTimer
    priv: DomainTimerPitPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    get_present(): boolean
    get_tick_policy(): DomainTimerTickPolicy
    set_present(present: boolean): void
    set_tick_policy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainTimerPit_ConstructProps)
    _init (config?: DomainTimerPit_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerPit
    static new(type: GObject.Type, root_name: string, schema: string): DomainTimerPit
    static new_from_xml(xml: string): DomainTimerPit
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainTimerPit
    static $gtype: GObject.Type
}
export interface DomainTimerRtc_ConstructProps extends DomainTimer_ConstructProps {
}
class DomainTimerRtc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc */
    parent: DomainTimer
    priv: DomainTimerRtcPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    get_present(): boolean
    get_tick_policy(): DomainTimerTickPolicy
    set_present(present: boolean): void
    set_tick_policy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainTimerRtc_ConstructProps)
    _init (config?: DomainTimerRtc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerRtc
    static new(type: GObject.Type, root_name: string, schema: string): DomainTimerRtc
    static new_from_xml(xml: string): DomainTimerRtc
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainTimerRtc
    static $gtype: GObject.Type
}
export interface DomainVideo_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainVideo {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo */
    parent: DomainDevice
    priv: DomainVideoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo */
    get_model(): DomainVideoModel
    set_accel3d(accel3d: boolean): void
    set_heads(head_count: number): void
    set_model(model: DomainVideoModel): void
    set_ram(kbytes: number): void
    set_vgamem(kbytes: number): void
    set_vram(kbytes: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    get_alias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainVideo_ConstructProps)
    _init (config?: DomainVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainVideo
    static new(type: GObject.Type, root_name: string, schema: string): DomainVideo
    static new_from_xml(xml: string): DomainVideo
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): DomainVideo
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends Object_ConstructProps {
}
class Interface {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Interface */
    parent: Object
    priv: InterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Interface
    static new(type: GObject.Type, root_name: string, schema: string): Interface
    static new_from_xml(xml: string): Interface
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): Interface
    static $gtype: GObject.Type
}
export interface Network_ConstructProps extends Object_ConstructProps {
}
class Network {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Network */
    parent: Object
    priv: NetworkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Network_ConstructProps)
    _init (config?: Network_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Network
    static new(type: GObject.Type, root_name: string, schema: string): Network
    static new_from_xml(xml: string): Network
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): Network
    static $gtype: GObject.Type
}
export interface NetworkFilter_ConstructProps extends Object_ConstructProps {
}
class NetworkFilter {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter */
    parent: Object
    priv: NetworkFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkFilter_ConstructProps)
    _init (config?: NetworkFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NetworkFilter
    static new(type: GObject.Type, root_name: string, schema: string): NetworkFilter
    static new_from_xml(xml: string): NetworkFilter
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): NetworkFilter
    static $gtype: GObject.Type
}
export interface NodeDevice_ConstructProps extends Object_ConstructProps {
}
class NodeDevice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice */
    parent: Object
    priv: NodeDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NodeDevice_ConstructProps)
    _init (config?: NodeDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NodeDevice
    static new(type: GObject.Type, root_name: string, schema: string): NodeDevice
    static new_from_xml(xml: string): NodeDevice
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): NodeDevice
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    node?: object
    schema?: string
}
class Object {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    parent: GObject.Object
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, root_name: string, schema: string): Object
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): Object
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Secret_ConstructProps extends Object_ConstructProps {
}
class Secret {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Secret */
    parent: Object
    priv: SecretPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Secret_ConstructProps)
    _init (config?: Secret_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Secret
    static new(type: GObject.Type, root_name: string, schema: string): Secret
    static new_from_xml(xml: string): Secret
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): Secret
    static $gtype: GObject.Type
}
export interface StoragePermissions_ConstructProps extends Object_ConstructProps {
}
class StoragePermissions {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions */
    parent: Object
    priv: StoragePermissionsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions */
    get_group(): number
    get_label(): string
    get_mode(): number
    get_owner(): number
    set_group(group: number): void
    set_label(label?: string | null): void
    set_mode(mode: number): void
    set_owner(owner: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoragePermissions_ConstructProps)
    _init (config?: StoragePermissions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePermissions
    static new(type: GObject.Type, root_name: string, schema: string): StoragePermissions
    static new_from_xml(xml: string): StoragePermissions
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StoragePermissions
    static $gtype: GObject.Type
}
export interface StoragePool_ConstructProps extends Object_ConstructProps {
}
class StoragePool {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool */
    parent: Object
    priv: StoragePoolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool */
    get_allocation(): number
    get_available(): number
    get_capacity(): number
    get_name(): string
    get_pool_type(): StoragePoolType
    get_source(): StoragePoolSource
    get_target(): StoragePoolTarget
    get_uuid(): string
    set_allocation(allocation: number): void
    set_available(available: number): void
    set_capacity(capacity: number): void
    set_name(name?: string | null): void
    set_pool_type(type: StoragePoolType): void
    set_source(source?: StoragePoolSource | null): void
    set_target(target?: StoragePoolTarget | null): void
    set_uuid(uuid?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoragePool_ConstructProps)
    _init (config?: StoragePool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePool
    static new(type: GObject.Type, root_name: string, schema: string): StoragePool
    static new_from_xml(xml: string): StoragePool
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StoragePool
    static $gtype: GObject.Type
}
export interface StoragePoolSource_ConstructProps extends Object_ConstructProps {
}
class StoragePoolSource {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource */
    parent: Object
    priv: StoragePoolSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource */
    get_adapter(): string
    get_device_path(): string
    get_directory(): string
    get_format(): string
    get_host(): string
    get_name(): string
    get_product(): string
    get_vendor(): string
    set_adapter(adapter: string): void
    set_device_path(device_path: string): void
    set_directory(directory: string): void
    set_format(format: string): void
    set_host(host: string): void
    set_name(name?: string | null): void
    set_product(product: string): void
    set_vendor(vendor: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoragePoolSource_ConstructProps)
    _init (config?: StoragePoolSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePoolSource
    static new(type: GObject.Type, root_name: string, schema: string): StoragePoolSource
    static new_from_xml(xml: string): StoragePoolSource
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StoragePoolSource
    static $gtype: GObject.Type
}
export interface StoragePoolTarget_ConstructProps extends Object_ConstructProps {
}
class StoragePoolTarget {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget */
    parent: Object
    priv: StoragePoolTargetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget */
    get_path(): string
    get_permissions(): StoragePermissions
    set_path(path?: string | null): void
    set_permissions(perms: StoragePermissions): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoragePoolTarget_ConstructProps)
    _init (config?: StoragePoolTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePoolTarget
    static new(type: GObject.Type, root_name: string, schema: string): StoragePoolTarget
    static new_from_xml(xml: string): StoragePoolTarget
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StoragePoolTarget
    static $gtype: GObject.Type
}
export interface StorageVol_ConstructProps extends Object_ConstructProps {
}
class StorageVol {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol */
    parent: Object
    priv: StorageVolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol */
    set_allocation(allocation: number): void
    set_backing_store(backing_store?: StorageVolBackingStore | null): void
    set_capacity(capacity: number): void
    set_name(name?: string | null): void
    set_target(target?: StorageVolTarget | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StorageVol_ConstructProps)
    _init (config?: StorageVol_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVol
    static new(type: GObject.Type, root_name: string, schema: string): StorageVol
    static new_from_xml(xml: string): StorageVol
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StorageVol
    static $gtype: GObject.Type
}
export interface StorageVolBackingStore_ConstructProps extends Object_ConstructProps {
}
class StorageVolBackingStore {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore */
    parent: Object
    priv: StorageVolBackingStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore */
    set_format(format: string): void
    set_path(path?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StorageVolBackingStore_ConstructProps)
    _init (config?: StorageVolBackingStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVolBackingStore
    static new(type: GObject.Type, root_name: string, schema: string): StorageVolBackingStore
    static new_from_xml(xml: string): StorageVolBackingStore
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StorageVolBackingStore
    static $gtype: GObject.Type
}
export interface StorageVolTarget_ConstructProps extends Object_ConstructProps {
}
class StorageVolTarget {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget */
    parent: Object
    priv: StorageVolTargetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget */
    set_compat(compat?: string | null): void
    set_features(features: number): void
    set_format(format: string): void
    set_permissions(perms?: StoragePermissions | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    get_schema(): string
    to_xml(): string
    validate(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StorageVolTarget_ConstructProps)
    _init (config?: StorageVolTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVolTarget
    static new(type: GObject.Type, root_name: string, schema: string): StorageVolTarget
    static new_from_xml(xml: string): StorageVolTarget
    static new_from_xml(type: GObject.Type, root_name: string, schema: string, xml: string): StorageVolTarget
    static $gtype: GObject.Type
}
abstract class CapabilitiesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class CapabilitiesCpuClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass */
    parent_class: ObjectClass
    get_features: (cpu: CapabilitiesCpu) => CapabilitiesCpuFeature[]
    padding: object[]
    static name: string
}
abstract class CapabilitiesCpuFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesCpuFeaturePrivate {
    static name: string
}
abstract class CapabilitiesCpuModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModelClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesCpuModelPrivate {
    static name: string
}
class CapabilitiesCpuPrivate {
    static name: string
}
abstract class CapabilitiesCpuTopologyClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopologyClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesCpuTopologyPrivate {
    static name: string
}
abstract class CapabilitiesGuestArchClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArchClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesGuestArchPrivate {
    static name: string
}
abstract class CapabilitiesGuestClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class CapabilitiesGuestDomainClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesGuestDomainPrivate {
    static name: string
}
abstract class CapabilitiesGuestFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeatureClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesGuestFeaturePrivate {
    static name: string
}
class CapabilitiesGuestPrivate {
    static name: string
}
abstract class CapabilitiesHostClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesHostPrivate {
    static name: string
}
abstract class CapabilitiesHostSecModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModelClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class CapabilitiesHostSecModelPrivate {
    static name: string
}
class CapabilitiesPrivate {
    static name: string
}
abstract class DomainAddressClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class DomainAddressPciClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass */
    parent_class: DomainAddressClass
    padding: object[]
    static name: string
}
class DomainAddressPciPrivate {
    static name: string
}
class DomainAddressPrivate {
    static name: string
}
abstract class DomainAddressUsbClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsbClass */
    parent_class: DomainAddressClass
    padding: object[]
    static name: string
}
class DomainAddressUsbPrivate {
    static name: string
}
abstract class DomainCapabilitiesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class DomainCapabilitiesOsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass */
    parent_class: ObjectClass
    get_firmwares: (os: DomainCapabilitiesOs) => DomainOsFirmware[]
    padding: object[]
    static name: string
}
class DomainCapabilitiesOsPrivate {
    static name: string
}
class DomainCapabilitiesPrivate {
    static name: string
}
abstract class DomainChannelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannelClass */
    parent_class: DomainChardevClass
    padding: object[]
    static name: string
}
class DomainChannelPrivate {
    static name: string
}
abstract class DomainChardevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainChardevPrivate {
    static name: string
}
abstract class DomainChardevSourceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainChardevSourcePrivate {
    static name: string
}
abstract class DomainChardevSourcePtyClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePtyClass */
    parent_class: DomainChardevSourceClass
    padding: object[]
    static name: string
}
class DomainChardevSourcePtyPrivate {
    static name: string
}
abstract class DomainChardevSourceSpicePortClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePortClass */
    parent_class: DomainChardevSourceClass
    padding: object[]
    static name: string
}
class DomainChardevSourceSpicePortPrivate {
    static name: string
}
abstract class DomainChardevSourceSpiceVmcClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmcClass */
    parent_class: DomainChardevSourceClass
    padding: object[]
    static name: string
}
class DomainChardevSourceSpiceVmcPrivate {
    static name: string
}
abstract class DomainChardevSourceUnixClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnixClass */
    parent_class: DomainChardevSourceClass
    padding: object[]
    static name: string
}
class DomainChardevSourceUnixPrivate {
    static name: string
}
abstract class DomainClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class DomainClockClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainClockPrivate {
    static name: string
}
abstract class DomainConsoleClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsoleClass */
    parent_class: DomainChardevClass
    padding: object[]
    static name: string
}
class DomainConsolePrivate {
    static name: string
}
abstract class DomainControllerClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainControllerPrivate {
    static name: string
}
abstract class DomainControllerUsbClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsbClass */
    parent_class: DomainControllerClass
    padding: object[]
    static name: string
}
class DomainControllerUsbPrivate {
    static name: string
}
abstract class DomainCpuClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass */
    parent_class: CapabilitiesCpuClass
    padding: object[]
    static name: string
}
abstract class DomainCpuFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass */
    parent_class: CapabilitiesCpuClass
    padding: object[]
    static name: string
}
class DomainCpuFeaturePrivate {
    static name: string
}
abstract class DomainCpuModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModelClass */
    parent_class: CapabilitiesCpuModelClass
    padding: object[]
    static name: string
}
class DomainCpuModelPrivate {
    static name: string
}
class DomainCpuPrivate {
    static name: string
}
abstract class DomainDeviceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDeviceClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainDevicePrivate {
    static name: string
}
abstract class DomainDiskClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
abstract class DomainDiskDriverClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainDiskDriverPrivate {
    static name: string
}
class DomainDiskPrivate {
    static name: string
}
abstract class DomainFilesysClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesysClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainFilesysPrivate {
    static name: string
}
abstract class DomainGraphicsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
abstract class DomainGraphicsDesktopClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass */
    parent_class: DomainGraphicsClass
    padding: object[]
    static name: string
}
class DomainGraphicsDesktopPrivate {
    static name: string
}
class DomainGraphicsPrivate {
    static name: string
}
abstract class DomainGraphicsRdpClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdpClass */
    parent_class: DomainGraphicsClass
    padding: object[]
    static name: string
}
class DomainGraphicsRdpPrivate {
    static name: string
}
abstract class DomainGraphicsSdlClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdlClass */
    parent_class: DomainGraphicsClass
    padding: object[]
    static name: string
}
class DomainGraphicsSdlPrivate {
    static name: string
}
abstract class DomainGraphicsSpiceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpiceClass */
    parent_class: DomainGraphicsClass
    padding: object[]
    static name: string
}
class DomainGraphicsSpicePrivate {
    static name: string
}
abstract class DomainGraphicsVncClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVncClass */
    parent_class: DomainGraphicsClass
    padding: object[]
    static name: string
}
class DomainGraphicsVncPrivate {
    static name: string
}
abstract class DomainHostdevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
abstract class DomainHostdevPciClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass */
    parent_class: DomainHostdevClass
    padding: object[]
    static name: string
}
class DomainHostdevPciPrivate {
    static name: string
}
class DomainHostdevPrivate {
    static name: string
}
abstract class DomainInputClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInputClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainInputPrivate {
    static name: string
}
abstract class DomainInterfaceBridgeClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridgeClass */
    parent_class: DomainInterfaceClass
    padding: object[]
    static name: string
}
class DomainInterfaceBridgePrivate {
    static name: string
}
abstract class DomainInterfaceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
abstract class DomainInterfaceFilterrefClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class DomainInterfaceFilterrefParameterClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainInterfaceFilterrefParameterPrivate {
    static name: string
}
class DomainInterfaceFilterrefPrivate {
    static name: string
}
abstract class DomainInterfaceNetworkClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetworkClass */
    parent_class: DomainInterfaceClass
    padding: object[]
    static name: string
}
class DomainInterfaceNetworkPrivate {
    static name: string
}
class DomainInterfacePrivate {
    static name: string
}
abstract class DomainInterfaceUserClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUserClass */
    parent_class: DomainInterfaceClass
    padding: object[]
    static name: string
}
class DomainInterfaceUserPrivate {
    static name: string
}
abstract class DomainMemballoonClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoonClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainMemballoonPrivate {
    static name: string
}
abstract class DomainOsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOsClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainOsPrivate {
    static name: string
}
abstract class DomainParallelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallelClass */
    parent_class: DomainChardevClass
    padding: object[]
    static name: string
}
class DomainParallelPrivate {
    static name: string
}
abstract class DomainPowerManagementClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagementClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainPowerManagementPrivate {
    static name: string
}
class DomainPrivate {
    static name: string
}
abstract class DomainRedirdevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdevClass */
    parent_class: DomainChardevClass
    padding: object[]
    static name: string
}
class DomainRedirdevPrivate {
    static name: string
}
abstract class DomainSeclabelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabelClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainSeclabelPrivate {
    static name: string
}
abstract class DomainSerialClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerialClass */
    parent_class: DomainChardevClass
    padding: object[]
    static name: string
}
class DomainSerialPrivate {
    static name: string
}
abstract class DomainSmartcardClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
abstract class DomainSmartcardHostCertificatesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass */
    parent_class: DomainSmartcardClass
    padding: object[]
    static name: string
}
class DomainSmartcardHostCertificatesPrivate {
    static name: string
}
abstract class DomainSmartcardHostClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostClass */
    parent_class: DomainSmartcardClass
    padding: object[]
    static name: string
}
class DomainSmartcardHostPrivate {
    static name: string
}
abstract class DomainSmartcardPassthroughClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthroughClass */
    parent_class: DomainSmartcardClass
    padding: object[]
    static name: string
}
class DomainSmartcardPassthroughPrivate {
    static name: string
}
class DomainSmartcardPrivate {
    static name: string
}
abstract class DomainSnapshotClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class DomainSnapshotDiskClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class DomainSnapshotDiskPrivate {
    static name: string
}
class DomainSnapshotPrivate {
    static name: string
}
abstract class DomainSoundClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSoundClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainSoundPrivate {
    static name: string
}
abstract class DomainTimerClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class DomainTimerHpetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass */
    parent_class: DomainTimerClass
    padding: object[]
    static name: string
}
class DomainTimerHpetPrivate {
    static name: string
}
abstract class DomainTimerPitClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPitClass */
    parent_class: DomainTimerClass
    padding: object[]
    static name: string
}
class DomainTimerPitPrivate {
    static name: string
}
class DomainTimerPrivate {
    static name: string
}
abstract class DomainTimerRtcClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtcClass */
    parent_class: DomainTimerClass
    padding: object[]
    static name: string
}
class DomainTimerRtcPrivate {
    static name: string
}
abstract class DomainVideoClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideoClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainVideoPrivate {
    static name: string
}
abstract class InterfaceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.InterfaceClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class InterfacePrivate {
    static name: string
}
abstract class NetworkClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
abstract class NetworkFilterClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class NetworkFilterPrivate {
    static name: string
}
class NetworkPrivate {
    static name: string
}
abstract class NodeDeviceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDeviceClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class NodeDevicePrivate {
    static name: string
}
abstract class ObjectClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.ObjectClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class SecretClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.SecretClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class SecretPrivate {
    static name: string
}
abstract class StoragePermissionsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissionsClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StoragePermissionsPrivate {
    static name: string
}
abstract class StoragePoolClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StoragePoolPrivate {
    static name: string
}
abstract class StoragePoolSourceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSourceClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StoragePoolSourcePrivate {
    static name: string
}
abstract class StoragePoolTargetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTargetClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StoragePoolTargetPrivate {
    static name: string
}
abstract class StorageVolBackingStoreClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStoreClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StorageVolBackingStorePrivate {
    static name: string
}
abstract class StorageVolClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StorageVolPrivate {
    static name: string
}
abstract class StorageVolTargetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTargetClass */
    parent_class: ObjectClass
    padding: object[]
    static name: string
}
class StorageVolTargetPrivate {
    static name: string
}
}
export default LibvirtGConfig