/**
 * Flatpak-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Flatpak {

enum Error {
    ALREADY_INSTALLED,
    NOT_INSTALLED,
    ONLY_PULLED,
    DIFFERENT_REMOTE,
    ABORTED,
    SKIPPED,
    NEED_NEW_FLATPAK,
    REMOTE_NOT_FOUND,
    RUNTIME_NOT_FOUND,
    DOWNGRADE,
    INVALID_REF,
    INVALID_DATA,
    UNTRUSTED,
    SETUP_FAILED,
    EXPORT_FAILED,
    REMOTE_USED,
    RUNTIME_USED,
    INVALID_NAME,
    OUT_OF_SPACE,
    WRONG_USER,
    NOT_CACHED,
    REF_NOT_FOUND,
    PERMISSION_DENIED,
    AUTHENTICATION_FAILED,
    NOT_AUTHORIZED,
}
enum PortalError {
    FAILED,
    INVALID_ARGUMENT,
    NOT_FOUND,
    EXISTS,
    NOT_ALLOWED,
    CANCELLED,
    WINDOW_DESTROYED,
}
enum RefKind {
    APP,
    RUNTIME,
}
enum RemoteType {
    STATIC,
    USB,
    LAN,
}
enum StorageType {
    DEFAULT,
    HARD_DISK,
    SDCARD,
    MMC,
    NETWORK,
}
enum TransactionOperationType {
    INSTALL,
    UPDATE,
    INSTALL_BUNDLE,
    UNINSTALL,
    LAST_TYPE,
}
enum TransactionRemoteReason {
    GENERIC_REPO,
    RUNTIME_DEPS,
}
enum InstallFlags {
    NONE,
    NO_STATIC_DELTAS,
    NO_DEPLOY,
    NO_PULL,
    NO_TRIGGERS,
}
enum LaunchFlags {
    NONE,
    DO_NOT_REAP,
}
enum QueryFlags {
    NONE,
    ONLY_CACHED,
    ONLY_SIDELOADED,
}
enum TransactionErrorDetails {
    FATAL,
}
enum TransactionResult {
    CHANGE,
}
enum UninstallFlags {
    NONE,
    NO_PRUNE,
    NO_TRIGGERS,
}
enum UpdateFlags {
    NONE,
    NO_DEPLOY,
    NO_PULL,
    NO_STATIC_DELTAS,
    NO_PRUNE,
    NO_TRIGGERS,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
function errorQuark(): GLib.Quark
function getDefaultArch(): string
function getSupportedArches(): string[]
function getSystemInstallations(cancellable?: Gio.Cancellable | null): Installation[]
function portalErrorQuark(): GLib.Quark
function transactionOperationTypeToString(kind: TransactionOperationType): string
interface ProgressCallback {
    (status: string, progress: number, estimating: boolean): void
}
export interface BundleRef_ConstructProps extends Ref_ConstructProps {
    file?: Gio.File
}
class BundleRef {
    /* Fields of Flatpak-1.0.Flatpak.BundleRef */
    parent: Ref
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.BundleRef */
    getAppstream(): any
    getFile(): Gio.File
    getIcon(size: number): any
    getInstalledSize(): number
    getMetadata(): any
    getOrigin(): string
    getRuntimeRepoUrl(): string
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    formatRef(): string
    getArch(): string
    getBranch(): string
    getCollectionId(): string
    getCommit(): string
    getKind(): RefKind
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: BundleRef, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BundleRef_ConstructProps)
    _init (config?: BundleRef_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): BundleRef
    static $gtype: GObject.Type
}
export interface Installation_ConstructProps extends GObject.Object_ConstructProps {
}
class Installation {
    /* Fields of Flatpak-1.0.Flatpak.Installation */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Installation */
    addRemote(remote: Remote, ifNeeded: boolean, cancellable?: Gio.Cancellable | null): boolean
    cleanupLocalRefsSync(cancellable?: Gio.Cancellable | null): boolean
    createMonitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    dropCaches(cancellable?: Gio.Cancellable | null): boolean
    fetchRemoteMetadataSync(remoteName: string, ref: Ref, cancellable?: Gio.Cancellable | null): any
    fetchRemoteRefSync(remoteName: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): RemoteRef
    fetchRemoteRefSyncFull(remoteName: string, kind: RefKind, name: string, arch: string | null, branch: string | null, flags: QueryFlags, cancellable?: Gio.Cancellable | null): RemoteRef
    fetchRemoteSizeSync(remoteName: string, ref: Ref, cancellable?: Gio.Cancellable | null): { returnType: boolean, downloadSize: number, installedSize: number }
    getConfig(key: string, cancellable?: Gio.Cancellable | null): string
    getCurrentInstalledApp(name: string, cancellable?: Gio.Cancellable | null): InstalledRef
    getDefaultLanguages(): string[]
    getDefaultLocales(): string[]
    getDisplayName(): string
    getId(): string
    getInstalledRef(kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    getIsUser(): boolean
    getMinFreeSpaceBytes(): { returnType: boolean, outBytes: number }
    getNoInteraction(): boolean
    getPath(): Gio.File
    getPriority(): number
    getRemoteByName(name: string, cancellable?: Gio.Cancellable | null): Remote
    getStorageType(): StorageType
    install(remoteName: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    installBundle(file: Gio.File, cancellable?: Gio.Cancellable | null): InstalledRef
    installFull(flags: InstallFlags, remoteName: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, subpaths?: string[] | null, cancellable?: Gio.Cancellable | null): InstalledRef
    installRefFile(refFileData: any, cancellable?: Gio.Cancellable | null): RemoteRef
    launch(name: string, arch?: string | null, branch?: string | null, commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    launchFull(flags: LaunchFlags, name: string, arch?: string | null, branch?: string | null, commit?: string | null, instanceOut?: Instance | null, cancellable?: Gio.Cancellable | null): boolean
    listInstalledRefs(cancellable?: Gio.Cancellable | null): InstalledRef[]
    listInstalledRefsByKind(kind: RefKind, cancellable?: Gio.Cancellable | null): InstalledRef[]
    listInstalledRefsForUpdate(cancellable?: Gio.Cancellable | null): InstalledRef[]
    listInstalledRelatedRefsSync(remoteName: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[]
    listRemoteRefsSync(remoteOrUri: string, cancellable?: Gio.Cancellable | null): RemoteRef[]
    listRemoteRefsSyncFull(remoteOrUri: string, flags: QueryFlags, cancellable?: Gio.Cancellable | null): RemoteRef[]
    listRemoteRelatedRefsSync(remoteName: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[]
    listRemotes(cancellable?: Gio.Cancellable | null): Remote[]
    listRemotesByType(types: RemoteType[], cancellable?: Gio.Cancellable | null): Remote[]
    listUnusedRefs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[]
    loadAppOverrides(appId: string, cancellable?: Gio.Cancellable | null): string
    modifyRemote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean
    pruneLocalRepo(cancellable?: Gio.Cancellable | null): boolean
    removeLocalRefSync(remoteName: string, ref: string, cancellable?: Gio.Cancellable | null): boolean
    removeRemote(name: string, cancellable?: Gio.Cancellable | null): boolean
    runTriggers(cancellable?: Gio.Cancellable | null): boolean
    setConfigSync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    setNoInteraction(noInteraction: boolean): void
    uninstall(kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): boolean
    uninstallFull(flags: UninstallFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): boolean
    update(flags: UpdateFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    updateAppstreamFullSync(remoteName: string, arch?: string | null, outChanged?: boolean | null, cancellable?: Gio.Cancellable | null): boolean
    updateAppstreamSync(remoteName: string, arch?: string | null, outChanged?: boolean | null, cancellable?: Gio.Cancellable | null): boolean
    updateFull(flags: UpdateFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, subpaths?: string[] | null, cancellable?: Gio.Cancellable | null): InstalledRef
    updateRemoteSync(name: string, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Installation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Installation_ConstructProps)
    _init (config?: Installation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForPath(path: Gio.File, user: boolean, cancellable?: Gio.Cancellable | null): Installation
    static newSystem(cancellable?: Gio.Cancellable | null): Installation
    static newSystemWithId(id?: string | null, cancellable?: Gio.Cancellable | null): Installation
    static newUser(cancellable?: Gio.Cancellable | null): Installation
    static $gtype: GObject.Type
}
export interface InstalledRef_ConstructProps extends Ref_ConstructProps {
    appdataContentRating?: GLib.HashTable
    appdataContentRatingType?: string
    appdataLicense?: string
    appdataName?: string
    appdataSummary?: string
    appdataVersion?: string
    deployDir?: string
    endOfLife?: string
    endOfLifeRebase?: string
    installedSize?: number
    isCurrent?: boolean
    latestCommit?: string
    origin?: string
    subpaths?: string[]
}
class InstalledRef {
    /* Properties of Flatpak-1.0.Flatpak.InstalledRef */
    deployDir: string
    installedSize: number
    isCurrent: boolean
    latestCommit: string
    origin: string
    subpaths: string[]
    /* Fields of Flatpak-1.0.Flatpak.InstalledRef */
    parent: Ref
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.InstalledRef */
    getAppdataContentRating(): GLib.HashTable | null
    getAppdataContentRatingType(): string | null
    getAppdataLicense(): string
    getAppdataName(): string
    getAppdataSummary(): string
    getAppdataVersion(): string
    getDeployDir(): string
    getEol(): string
    getEolRebase(): string
    getInstalledSize(): number
    getIsCurrent(): boolean
    getLatestCommit(): string | null
    getOrigin(): string
    getSubpaths(): string[]
    loadAppdata(cancellable?: Gio.Cancellable | null): any
    loadMetadata(cancellable?: Gio.Cancellable | null): any
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    formatRef(): string
    getArch(): string
    getBranch(): string
    getCollectionId(): string
    getCommit(): string
    getKind(): RefKind
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deploy-dir", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deploy-dir", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installed-size", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installed-size", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-current", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-current", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latest-commit", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latest-commit", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpaths", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpaths", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstalledRef_ConstructProps)
    _init (config?: InstalledRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Instance_ConstructProps extends GObject.Object_ConstructProps {
}
class Instance {
    /* Fields of Flatpak-1.0.Flatpak.Instance */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Instance */
    getApp(): string
    getArch(): string
    getBranch(): string
    getChildPid(): number
    getCommit(): string
    getId(): string
    getInfo(): GLib.KeyFile
    getPid(): number
    getRuntime(): string
    getRuntimeCommit(): string
    isRunning(): boolean
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
    connect(sigName: "notify", callback: (($obj: Instance, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Instance_ConstructProps)
    _init (config?: Instance_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getAll(): Instance[]
    static $gtype: GObject.Type
}
export interface Ref_ConstructProps extends GObject.Object_ConstructProps {
    arch?: string
    branch?: string
    collectionId?: string
    commit?: string
    kind?: RefKind
    name?: string
}
class Ref {
    /* Fields of Flatpak-1.0.Flatpak.Ref */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    formatRef(): string
    getArch(): string
    getBranch(): string
    getCollectionId(): string
    getCommit(): string
    getKind(): RefKind
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Ref_ConstructProps)
    _init (config?: Ref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(ref: string): Ref
    static $gtype: GObject.Type
}
export interface RelatedRef_ConstructProps extends Ref_ConstructProps {
    shouldAutoprune?: boolean
    shouldDelete?: boolean
    shouldDownload?: boolean
    subpaths?: string[]
}
class RelatedRef {
    /* Fields of Flatpak-1.0.Flatpak.RelatedRef */
    parent: Ref
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.RelatedRef */
    getSubpaths(): string[]
    shouldAutoprune(): boolean
    shouldDelete(): boolean
    shouldDownload(): boolean
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    formatRef(): string
    getArch(): string
    getBranch(): string
    getCollectionId(): string
    getCommit(): string
    getKind(): RefKind
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: RelatedRef, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RelatedRef_ConstructProps)
    _init (config?: RelatedRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Remote_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    type?: RemoteType
}
class Remote {
    /* Properties of Flatpak-1.0.Flatpak.Remote */
    name: string
    /* Fields of Flatpak-1.0.Flatpak.Remote */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Remote */
    getAppstreamDir(arch?: string | null): Gio.File
    getAppstreamTimestamp(arch?: string | null): Gio.File
    getCollectionId(): string | null
    getComment(): string
    getDefaultBranch(): string
    getDescription(): string
    getDisabled(): boolean
    getFilter(): string
    getGpgVerify(): boolean
    getHomepage(): string
    getIcon(): string
    getMainRef(): string
    getName(): string
    getNodeps(): boolean
    getNoenumerate(): boolean
    getPrio(): number
    getRemoteType(): RemoteType
    getTitle(): string
    getUrl(): string
    setCollectionId(collectionId?: string | null): void
    setComment(comment: string): void
    setDefaultBranch(defaultBranch: string): void
    setDescription(description: string): void
    setDisabled(disabled: boolean): void
    setFilter(filterPath: string): void
    setGpgKey(gpgKey: any): void
    setGpgVerify(gpgVerify: boolean): void
    setHomepage(homepage: string): void
    setIcon(icon: string): void
    setMainRef(mainRef: string): void
    setNodeps(nodeps: boolean): void
    setNoenumerate(noenumerate: boolean): void
    setPrio(prio: number): void
    setTitle(title: string): void
    setUrl(url: string): void
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
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Remote
    static newFromFile(name: string, data: any): Remote
    static $gtype: GObject.Type
}
export interface RemoteRef_ConstructProps extends Ref_ConstructProps {
    downloadSize?: number
    endOfLife?: string
    endOfLifeRebase?: string
    installedSize?: number
    metadata?: any
    remoteName?: string
}
class RemoteRef {
    /* Fields of Flatpak-1.0.Flatpak.RemoteRef */
    parent: Ref
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.RemoteRef */
    getDownloadSize(): number
    getEol(): string
    getEolRebase(): string
    getInstalledSize(): number
    getMetadata(): any | null
    getRemoteName(): string
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    formatRef(): string
    getArch(): string
    getBranch(): string
    getCollectionId(): string
    getCommit(): string
    getKind(): RefKind
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: RemoteRef, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteRef_ConstructProps)
    _init (config?: RemoteRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transaction_ConstructProps extends GObject.Object_ConstructProps {
    installation?: Installation
}
class Transaction {
    /* Fields of Flatpak-1.0.Flatpak.Transaction */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Transaction */
    abortWebflow(id: number): void
    addDefaultDependencySources(): void
    addDependencySource(installation: Installation): void
    addInstall(remote: string, ref: string, subpaths?: string[] | null): boolean
    addInstallBundle(file: Gio.File, gpgData?: any | null): boolean
    addInstallFlatpakref(flatpakrefData: any): boolean
    addRebase(remote: string, ref: string, subpaths?: string | null, previousIds?: string[] | null): boolean
    addSideloadRepo(path: string): void
    addUninstall(ref: string): boolean
    addUpdate(ref: string, subpaths?: string[] | null, commit?: string | null): boolean
    completeBasicAuth(id: number, user: string, password: string, options: GLib.Variant): void
    getCurrentOperation(): TransactionOperation
    getInstallation(): Installation
    getNoDeploy(): boolean
    getNoPull(): boolean
    getOperations(): TransactionOperation[]
    getParentWindow(): string
    isEmpty(): boolean
    run(cancellable?: Gio.Cancellable | null): boolean
    setDefaultArch(arch: string): void
    setDisableDependencies(disableDependencies: boolean): void
    setDisablePrune(disablePrune: boolean): void
    setDisableRelated(disableRelated: boolean): void
    setDisableStaticDeltas(disableStaticDeltas: boolean): void
    setForceUninstall(forceUninstall: boolean): void
    setNoDeploy(noDeploy: boolean): void
    setNoInteraction(noInteraction: boolean): void
    setNoPull(noPull: boolean): void
    setParentWindow(parentWindow: string): void
    setReinstall(reinstall: boolean): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Flatpak-1.0.Flatpak.Transaction */
    connect(sigName: "add-new-remote", callback: (($obj: Transaction, reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => boolean)): number
    on(sigName: "add-new-remote", callback: (reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-new-remote", callback: (reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-new-remote", callback: (reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => void): NodeJS.EventEmitter
    emit(sigName: "add-new-remote", reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string): void
    connect(sigName: "basic-auth-start", callback: (($obj: Transaction, remote: string, realm: string, options: GLib.Variant, id: number) => boolean)): number
    on(sigName: "basic-auth-start", callback: (remote: string, realm: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "basic-auth-start", callback: (remote: string, realm: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "basic-auth-start", callback: (remote: string, realm: string, options: GLib.Variant, id: number) => void): NodeJS.EventEmitter
    emit(sigName: "basic-auth-start", remote: string, realm: string, options: GLib.Variant, id: number): void
    connect(sigName: "choose-remote-for-ref", callback: (($obj: Transaction, forRef: string, runtimeRef: string, remotes: string[]) => number)): number
    on(sigName: "choose-remote-for-ref", callback: (forRef: string, runtimeRef: string, remotes: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choose-remote-for-ref", callback: (forRef: string, runtimeRef: string, remotes: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choose-remote-for-ref", callback: (forRef: string, runtimeRef: string, remotes: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "choose-remote-for-ref", forRef: string, runtimeRef: string, remotes: string[]): void
    connect(sigName: "end-of-lifed", callback: (($obj: Transaction, ref: string, reason: string, rebase: string) => void)): number
    on(sigName: "end-of-lifed", callback: (ref: string, reason: string, rebase: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-lifed", callback: (ref: string, reason: string, rebase: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-lifed", callback: (ref: string, reason: string, rebase: string) => void): NodeJS.EventEmitter
    emit(sigName: "end-of-lifed", ref: string, reason: string, rebase: string): void
    connect(sigName: "end-of-lifed-with-rebase", callback: (($obj: Transaction, remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => boolean)): number
    on(sigName: "end-of-lifed-with-rebase", callback: (remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-lifed-with-rebase", callback: (remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-lifed-with-rebase", callback: (remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "end-of-lifed-with-rebase", remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]): void
    connect(sigName: "install-authenticator", callback: (($obj: Transaction, remote: string, authenticatorRef: string) => void)): number
    on(sigName: "install-authenticator", callback: (remote: string, authenticatorRef: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "install-authenticator", callback: (remote: string, authenticatorRef: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "install-authenticator", callback: (remote: string, authenticatorRef: string) => void): NodeJS.EventEmitter
    emit(sigName: "install-authenticator", remote: string, authenticatorRef: string): void
    connect(sigName: "new-operation", callback: (($obj: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void)): number
    on(sigName: "new-operation", callback: (operation: TransactionOperation, progress: TransactionProgress) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-operation", callback: (operation: TransactionOperation, progress: TransactionProgress) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-operation", callback: (operation: TransactionOperation, progress: TransactionProgress) => void): NodeJS.EventEmitter
    emit(sigName: "new-operation", operation: TransactionOperation, progress: TransactionProgress): void
    connect(sigName: "operation-done", callback: (($obj: Transaction, operation: TransactionOperation, commit: string, result: TransactionResult) => void)): number
    on(sigName: "operation-done", callback: (operation: TransactionOperation, commit: string, result: TransactionResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: (operation: TransactionOperation, commit: string, result: TransactionResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: (operation: TransactionOperation, commit: string, result: TransactionResult) => void): NodeJS.EventEmitter
    emit(sigName: "operation-done", operation: TransactionOperation, commit: string, result: TransactionResult): void
    connect(sigName: "operation-error", callback: (($obj: Transaction, operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => boolean)): number
    on(sigName: "operation-error", callback: (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-error", callback: (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-error", callback: (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => void): NodeJS.EventEmitter
    emit(sigName: "operation-error", operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails): void
    connect(sigName: "ready", callback: (($obj: Transaction) => boolean)): number
    on(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "ready"): void
    connect(sigName: "webflow-done", callback: (($obj: Transaction, options: GLib.Variant, id: number) => void)): number
    on(sigName: "webflow-done", callback: (options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "webflow-done", callback: (options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "webflow-done", callback: (options: GLib.Variant, id: number) => void): NodeJS.EventEmitter
    emit(sigName: "webflow-done", options: GLib.Variant, id: number): void
    connect(sigName: "webflow-start", callback: (($obj: Transaction, remote: string, url: string, options: GLib.Variant, id: number) => boolean)): number
    on(sigName: "webflow-start", callback: (remote: string, url: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "webflow-start", callback: (remote: string, url: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "webflow-start", callback: (remote: string, url: string, options: GLib.Variant, id: number) => void): NodeJS.EventEmitter
    emit(sigName: "webflow-start", remote: string, url: string, options: GLib.Variant, id: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForInstallation(installation: Installation, cancellable?: Gio.Cancellable | null): Transaction
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface TransactionOperation_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionOperation {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.TransactionOperation */
    getBundlePath(): Gio.File
    getCommit(): string
    getDownloadSize(): number
    getInstalledSize(): number
    getIsSkipped(): boolean
    getMetadata(): GLib.KeyFile
    getOldMetadata(): GLib.KeyFile
    getOperationType(): TransactionOperationType
    getRef(): string
    getRelatedToOps(): TransactionOperation[] | null
    getRemote(): string
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
    connect(sigName: "notify", callback: (($obj: TransactionOperation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TransactionOperation_ConstructProps)
    _init (config?: TransactionOperation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TransactionProgress_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionProgress {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.TransactionProgress */
    getBytesTransferred(): number
    getIsEstimating(): boolean
    getProgress(): number
    getStartTime(): number
    getStatus(): string
    setUpdateFrequency(updateInterval: number): void
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
    /* Signals of Flatpak-1.0.Flatpak.TransactionProgress */
    connect(sigName: "changed", callback: (($obj: TransactionProgress) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransactionProgress, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TransactionProgress_ConstructProps)
    _init (config?: TransactionProgress_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class BundleRefClass {
    /* Fields of Flatpak-1.0.Flatpak.BundleRefClass */
    parentClass: RefClass
    static name: string
}
abstract class InstallationClass {
    /* Fields of Flatpak-1.0.Flatpak.InstallationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class InstalledRefClass {
    /* Fields of Flatpak-1.0.Flatpak.InstalledRefClass */
    parentClass: RefClass
    static name: string
}
abstract class InstanceClass {
    /* Fields of Flatpak-1.0.Flatpak.InstanceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RefClass {
    /* Fields of Flatpak-1.0.Flatpak.RefClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RelatedRefClass {
    /* Fields of Flatpak-1.0.Flatpak.RelatedRefClass */
    parentClass: RefClass
    static name: string
}
abstract class RemoteClass {
    /* Fields of Flatpak-1.0.Flatpak.RemoteClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RemoteRefClass {
    /* Fields of Flatpak-1.0.Flatpak.RemoteRefClass */
    parentClass: RefClass
    static name: string
}
abstract class TransactionClass {
    /* Fields of Flatpak-1.0.Flatpak.TransactionClass */
    parentClass: GObject.ObjectClass
    newOperation: (transaction: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void
    operationDone: (transaction: Transaction, operation: TransactionOperation, commit: string, details: TransactionResult) => void
    operationError: (transaction: Transaction, operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails) => boolean
    chooseRemoteForRef: (transaction: Transaction, forRef: string, runtimeRef: string, remotes: string) => number
    endOfLifed: (transaction: Transaction, ref: string, reason: string, rebase: string) => void
    ready: (transaction: Transaction) => boolean
    addNewRemote: (transaction: Transaction, reason: TransactionRemoteReason, fromId: string, remoteName: string, url: string) => boolean
    run: (transaction: Transaction, cancellable?: Gio.Cancellable | null) => boolean
    endOfLifedWithRebase: (transaction: Transaction, remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string) => boolean
    webflowStart: (transaction: Transaction, remote: string, url: string, options: GLib.Variant, id: number) => boolean
    webflowDone: (transaction: Transaction, options: GLib.Variant, id: number) => void
    basicAuthStart: (transaction: Transaction, remote: string, realm: string, options: GLib.Variant, id: number) => boolean
    installAuthenticator: (transaction: Transaction, remote: string, authenticatorRef: string) => void
    padding: object[]
    static name: string
}
abstract class TransactionOperationClass {
    /* Fields of Flatpak-1.0.Flatpak.TransactionOperationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TransactionProgressClass {
    /* Fields of Flatpak-1.0.Flatpak.TransactionProgressClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default Flatpak