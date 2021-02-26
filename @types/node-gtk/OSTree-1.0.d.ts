/**
 * OSTree-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace OSTree {

export enum DeploymentUnlockedState {
    NONE,
    DEVELOPMENT,
    HOTFIX,
}
export enum GpgSignatureAttr {
    VALID,
    SIG_EXPIRED,
    KEY_EXPIRED,
    KEY_REVOKED,
    KEY_MISSING,
    FINGERPRINT,
    TIMESTAMP,
    EXP_TIMESTAMP,
    PUBKEY_ALGO_NAME,
    HASH_ALGO_NAME,
    USER_NAME,
    USER_EMAIL,
}
export enum GpgSignatureFormatFlags {
    GPG_SIGNATURE_FORMAT_DEFAULT,
}
export enum ObjectType {
    FILE,
    DIR_TREE,
    DIR_META,
    COMMIT,
    TOMBSTONE_COMMIT,
    COMMIT_META,
}
export enum RepoCheckoutMode {
    NONE,
    USER,
}
export enum RepoCheckoutOverwriteMode {
    NONE,
    UNION_FILES,
}
export enum RepoCommitFilterResult {
    ALLOW,
    SKIP,
}
export enum RepoCommitIterResult {
    ERROR,
    END,
    FILE,
    DIR,
}
export enum RepoListRefsExtFlags {
    REPO_LIST_REFS_EXT_NONE,
}
export enum RepoMode {
    BARE,
    ARCHIVE_Z2,
    BARE_USER,
}
export enum RepoPruneFlags {
    NONE,
    NO_PRUNE,
    REFS_ONLY,
}
export enum RepoRemoteChange {
    ADD,
    ADD_IF_NOT_EXISTS,
    DELETE,
    DELETE_IF_EXISTS,
}
export enum RepoResolveRevExtFlags {
    REPO_RESOLVE_REV_EXT_NONE,
}
export enum StaticDeltaGenerateOpt {
    LOWLATENCY,
    MAJOR,
}
export enum DiffFlags {
    NONE,
    IGNORE_XATTRS,
}
export enum RepoCommitModifierFlags {
    NONE,
    SKIP_XATTRS,
    GENERATE_SIZES,
}
export enum RepoCommitState {
    REPO_COMMIT_STATE_PARTIAL,
}
export enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE,
}
export enum RepoListObjectsFlags {
    LOOSE,
    PACKED,
    ALL,
    NO_PARENTS,
}
export enum RepoPullFlags {
    NONE,
    MIRROR,
    COMMIT_ONLY,
    UNTRUSTED,
}
export enum SePolicyRestoreconFlags {
    NONE,
    ALLOW_NOLABEL,
    KEEP_EXISTING,
}
export enum SysrootSimpleWriteDeploymentFlags {
    NONE,
    RETAIN,
    NOT_DEFAULT,
    NO_CLEAN,
}
export enum SysrootUpgraderFlags {
    IGNORE_UNCONFIGURED,
}
export enum SysrootUpgraderPullFlags {
    NONE,
    ALLOW_OLDER,
}
export const COMMIT_GVARIANT_STRING: string
export const DIRMETA_GVARIANT_STRING: string
export const FILEMETA_GVARIANT_STRING: string
export const MAX_METADATA_SIZE: number
export const MAX_METADATA_WARN_SIZE: number
export const MAX_RECURSION: number
export const SHA256_DIGEST_LEN: number
export const SHA256_STRING_LEN: number
export const SUMMARY_GVARIANT_STRING: string
export const SUMMARY_SIG_GVARIANT_STRING: string
export const TIMESTAMP: number
export const TREE_GVARIANT_STRING: string
export const WITH_AUTOCLEANUPS: number
export function checksumB64FromBytes(csum: any[]): string
export function checksumB64ToBytes(checksum: string): any[]
export function checksumBytesPeek(bytes: GLib.Variant): any[]
export function checksumBytesPeekValidate(bytes: GLib.Variant): any[]
export function checksumFile(f: Gio.File, objtype: ObjectType, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCsum: any[] }
export function checksumFileAsync(f: Gio.File, objtype: ObjectType, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function checksumFileAsyncFinish(f: Gio.File, result: Gio.AsyncResult): { returnType: boolean, outCsum: any[] }
export function checksumFileFromInput(fileInfo: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCsum: any[] }
export function checksumFromBytes(csum: any[]): string
export function checksumFromBytesV(csumV: GLib.Variant): string
export function checksumInplaceToBytes(checksum: string, buf: number): void
export function checksumToBytes(checksum: string): any[]
export function checksumToBytesV(checksum: string): GLib.Variant
export function cmdprivate(): CmdPrivateVTable
export function cmpChecksumBytes(a: number, b: number): number
export function commitGetParent(commitVariant: GLib.Variant): string
export function commitGetTimestamp(commitVariant: GLib.Variant): number
export function contentFileParse(compressed: boolean, contentPath: Gio.File, trusted: boolean, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream, outFileInfo: Gio.FileInfo, outXattrs: GLib.Variant }
export function contentFileParseAt(compressed: boolean, parentDfd: number, path: string, trusted: boolean, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream, outFileInfo: Gio.FileInfo, outXattrs: GLib.Variant }
export function contentStreamParse(compressed: boolean, input: Gio.InputStream, inputLength: number, trusted: boolean, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream, outFileInfo: Gio.FileInfo, outXattrs: GLib.Variant }
export function createDirectoryMetadata(dirInfo: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant
export function diffDirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable?: Gio.Cancellable | null): boolean
export function diffPrint(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
export function hashObjectName(a?: object | null): number
export function metadataVariantType(objtype: ObjectType): GLib.VariantType
export function objectFromString(str: string): { outChecksum: string, outObjtype: ObjectType }
export function objectNameDeserialize(variant: GLib.Variant): { outChecksum: string, outObjtype: ObjectType }
export function objectNameSerialize(checksum: string, objtype: ObjectType): GLib.Variant
export function objectToString(checksum: string, objtype: ObjectType): string
export function objectTypeFromString(str: string): ObjectType
export function objectTypeToString(objtype: ObjectType): string
export function parseRefspec(refspec: string): { returnType: boolean, outRemote: string | null, outRef: string | null }
export function rawFileToArchiveZ2Stream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream }
export function rawFileToContentStream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream, outLength: number }
export function repoCommitTraverseIterCleanup(p?: object | null): void
export function validateChecksumString(sha256: string): boolean
export function validateRev(rev: string): boolean
export function validateStructureofChecksumString(checksum: string): boolean
export function validateStructureofCommit(commit: GLib.Variant): boolean
export function validateStructureofCsumV(checksum: GLib.Variant): boolean
export function validateStructureofDirmeta(dirmeta: GLib.Variant): boolean
export function validateStructureofDirtree(dirtree: GLib.Variant): boolean
export function validateStructureofFileMode(mode: number): boolean
export function validateStructureofObjtype(objtype: number): boolean
export interface RepoCommitFilter {
    (repo: Repo, path: string, fileInfo: Gio.FileInfo): RepoCommitFilterResult
}
export interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string, fileInfo: Gio.FileInfo): GLib.Variant
}
export interface AsyncProgress_ConstructProps extends GObject.Object_ConstructProps {
}
export class AsyncProgress {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.AsyncProgress */
    finish(): void
    getStatus(): string
    getUint(key: string): number
    getUint64(key: string): number
    setStatus(status: string): void
    setUint(key: string, value: number): void
    setUint64(key: string, value: number): void
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
    /* Signals of OSTree-1.0.OSTree.AsyncProgress */
    connect(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AsyncProgress_ConstructProps)
    _init (config?: AsyncProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncProgress
    static newAndConnect(changed?: object | null, userData?: object | null): AsyncProgress
    static $gtype: GObject.Type
}
export interface BootconfigParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class BootconfigParser {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.BootconfigParser */
    clone(): BootconfigParser
    get(key: string): string
    parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    parseAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    set(key: string, value: string): void
    write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    writeAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BootconfigParser_ConstructProps)
    _init (config?: BootconfigParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BootconfigParser
    static $gtype: GObject.Type
}
export interface ChecksumInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    checksum?: object
}
export class ChecksumInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of OSTree-1.0.OSTree.ChecksumInputStream */
    parentInstance: Gio.FilterInputStream
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    connect(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChecksumInputStream_ConstructProps)
    _init (config?: ChecksumInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.InputStream, checksum: GLib.Checksum): ChecksumInputStream
    static $gtype: GObject.Type
}
export interface Deployment_ConstructProps extends GObject.Object_ConstructProps {
}
export class Deployment {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Deployment */
    clone(): Deployment
    equal(bp: Deployment): boolean
    getBootconfig(): BootconfigParser
    getBootcsum(): string
    getBootserial(): number
    getCsum(): string
    getDeployserial(): number
    getIndex(): number
    getOrigin(): GLib.KeyFile
    getOriginRelpath(): string
    getOsname(): string
    getUnlocked(): DeploymentUnlockedState
    setBootconfig(bootconfig: BootconfigParser): void
    setBootserial(index: number): void
    setIndex(index: number): void
    setOrigin(origin: GLib.KeyFile): void
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
    connect(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: number, osname: string, csum: string, deployserial: number, bootcsum: string, bootserial: number): Deployment
    static hash(v?: object | null): number
    static unlockedStateToString(state: DeploymentUnlockedState): string
    static $gtype: GObject.Type
}
export interface GpgVerifyResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class GpgVerifyResult {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.GpgVerifyResult */
    countAll(): number
    countValid(): number
    describe(signatureIndex: number, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    get(signatureIndex: number, attrs: GpgSignatureAttr[]): GLib.Variant
    getAll(signatureIndex: number): GLib.Variant
    lookup(keyId: string): { returnType: boolean, outSignatureIndex: number }
    requireValidSignature(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GpgVerifyResult_ConstructProps)
    _init (config?: GpgVerifyResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static describeVariant(variant: GLib.Variant, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface MutableTree_ConstructProps extends GObject.Object_ConstructProps {
}
export class MutableTree {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.MutableTree */
    ensureDir(name: string, outSubdir: MutableTree): boolean
    ensureParentDirs(splitPath: string[], metadataChecksum: string): { returnType: boolean, outParent: MutableTree }
    getContentsChecksum(): string
    getFiles(): GLib.HashTable
    getMetadataChecksum(): string
    getSubdirs(): GLib.HashTable
    lookup(name: string, outFileChecksum: string, outSubdir: MutableTree): boolean
    replaceFile(name: string, checksum: string): boolean
    setContentsChecksum(checksum: string): void
    setMetadataChecksum(checksum: string): void
    walk(splitPath: string[], start: number): { returnType: boolean, outSubdir: MutableTree }
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
    connect(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MutableTree_ConstructProps)
    _init (config?: MutableTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MutableTree
    static $gtype: GObject.Type
}
export interface Repo_ConstructProps extends GObject.Object_ConstructProps {
    path?: Gio.File
    remotesConfigDir?: string
    sysrootPath?: Gio.File
}
export class Repo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Repo */
    abortTransaction(cancellable?: Gio.Cancellable | null): boolean
    addGpgSignatureSummary(keyId: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    appendGpgSignature(commitChecksum: string, signatureBytes: any, cancellable?: Gio.Cancellable | null): boolean
    checkoutAt(options: RepoCheckoutAtOptions | null, destinationDfd: number, destinationPath: string, commit: string, cancellable?: Gio.Cancellable | null): boolean
    checkoutGc(cancellable?: Gio.Cancellable | null): boolean
    checkoutTree(mode: RepoCheckoutMode, overwriteMode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, sourceInfo: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    commitTransaction(cancellable?: Gio.Cancellable | null): { returnType: boolean, outStats: RepoTransactionStats | null }
    copyConfig(): GLib.KeyFile
    create(mode: RepoMode, cancellable?: Gio.Cancellable | null): boolean
    deleteObject(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean
    getConfig(): GLib.KeyFile
    getDfd(): number
    getDisableFsync(): boolean
    getMode(): RepoMode
    getParent(): Repo
    getPath(): Gio.File
    getRemoteBooleanOption(remoteName: string, optionName: string, defaultValue: boolean): { returnType: boolean, outValue: boolean }
    getRemoteListOption(remoteName: string, optionName: string): { returnType: boolean, outValue: string[] }
    getRemoteOption(remoteName: string, optionName: string, defaultValue?: string | null): { returnType: boolean, outValue: string }
    gpgVerifyData(remoteName: string | null, data: any, signatures: any, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    hasObject(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outHaveObject: boolean }
    importObjectFrom(source: Repo, objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): boolean
    importObjectFromWithTrust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable?: Gio.Cancellable | null): boolean
    isSystem(): boolean
    isWritable(): boolean
    listCommitObjectsStartingWith(start: string, outCommits: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    listObjects(flags: RepoListObjectsFlags, cancellable?: Gio.Cancellable | null): { returnType: boolean, outObjects: GLib.HashTable }
    listRefs(refspecPrefix?: string | null, cancellable?: Gio.Cancellable | null): { returnType: boolean, outAllRefs: GLib.HashTable }
    listRefsExt(refspecPrefix: string | null, flags: RepoListRefsExtFlags, cancellable?: Gio.Cancellable | null): { returnType: boolean, outAllRefs: GLib.HashTable }
    listStaticDeltaNames(cancellable?: Gio.Cancellable | null): { returnType: boolean, outDeltas: string[] }
    loadCommit(checksum: string): { returnType: boolean, outCommit: GLib.Variant | null, outState: RepoCommitState | null }
    loadFile(checksum: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream | null, outFileInfo: Gio.FileInfo | null, outXattrs: GLib.Variant | null }
    loadObjectStream(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outInput: Gio.InputStream, outSize: number }
    loadVariant(objtype: ObjectType, sha256: string): { returnType: boolean, outVariant: GLib.Variant }
    loadVariantIfExists(objtype: ObjectType, sha256: string): { returnType: boolean, outVariant: GLib.Variant }
    open(cancellable?: Gio.Cancellable | null): boolean
    prepareTransaction(cancellable?: Gio.Cancellable | null): { returnType: boolean, outTransactionResume: boolean | null }
    prune(flags: RepoPruneFlags, depth: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outObjectsTotal: number, outObjectsPruned: number, outPrunedObjectSizeTotal: number }
    pruneStaticDeltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    pull(remoteName: string, refsToFetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    pullOneDir(remoteName: string, dirToPull: string, refsToFetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    pullWithOptions(remoteNameOrBaseurl: string, options: GLib.Variant, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    queryObjectStorageSize(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outSize: number }
    readCommit(ref: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outRoot: Gio.File, outCommit: string }
    readCommitDetachedMetadata(checksum: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outMetadata: GLib.Variant }
    regenerateSummary(additionalMetadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remoteAdd(name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remoteChange(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remoteDelete(name: string, cancellable?: Gio.Cancellable | null): boolean
    remoteFetchSummary(name: string, outSummary?: any | null, outSignatures?: any | null, cancellable?: Gio.Cancellable | null): boolean
    remoteFetchSummaryWithOptions(name: string, options?: GLib.Variant | null, outSummary?: any | null, outSignatures?: any | null, cancellable?: Gio.Cancellable | null): boolean
    remoteGetGpgVerify(name: string): { returnType: boolean, outGpgVerify: boolean | null }
    remoteGetGpgVerifySummary(name: string): { returnType: boolean, outGpgVerifySummary: boolean | null }
    remoteGetUrl(name: string): { returnType: boolean, outUrl: string | null }
    remoteGpgImport(name: string, sourceStream?: Gio.InputStream | null, keyIds?: string[] | null, outImported?: number | null, cancellable?: Gio.Cancellable | null): boolean
    remoteList(): string[]
    remoteListRefs(remoteName: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outAllRefs: GLib.HashTable }
    resolveRev(refspec: string, allowNoent: boolean): { returnType: boolean, outRev: string }
    resolveRevExt(refspec: string, allowNoent: boolean, flags: RepoResolveRevExtFlags): { returnType: boolean, outRev: string }
    scanHardlinks(cancellable?: Gio.Cancellable | null): boolean
    setCacheDir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    setDisableFsync(disableFsync: boolean): void
    setRefImmediate(remote: string | null, ref: string, checksum?: string | null, cancellable?: Gio.Cancellable | null): boolean
    signCommit(commitChecksum: string, keyId: string, homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    signDelta(fromCommit: string, toCommit: string, keyId: string, homedir: string, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaExecuteOffline(dirOrFile: Gio.File, skipValidation: boolean, cancellable?: Gio.Cancellable | null): boolean
    staticDeltaGenerate(opt: StaticDeltaGenerateOpt, from: string, to: string, metadata?: GLib.Variant | null, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    transactionSetRef(remote: string | null, ref: string, checksum: string): void
    transactionSetRefspec(refspec: string, checksum: string): void
    traverseCommit(commitChecksum: string, maxdepth: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outReachable: GLib.HashTable }
    verifyCommit(commitChecksum: string, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): boolean
    verifyCommitExt(commitChecksum: string, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    verifySummary(remoteName: string, summary: any, signatures: any, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    writeArchiveToMtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreateParents: boolean, cancellable?: Gio.Cancellable | null): boolean
    writeCommit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCommit: string }
    writeCommitDetachedMetadata(checksum: string, metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    writeCommitWithTime(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCommit: string }
    writeConfig(newConfig: GLib.KeyFile): boolean
    writeContent(expectedChecksum: string | null, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCsum: any[] | null }
    writeContentAsync(expectedChecksum: string | null, object: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeContentFinish(result: Gio.AsyncResult): { returnType: boolean, outCsum: number }
    writeContentTrusted(checksum: string, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    writeDfdToMtree(dfd: number, path: string, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    writeDirectoryToMtree(dir: Gio.File, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    writeMetadata(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCsum: any[] | null }
    writeMetadataAsync(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeMetadataFinish(result: Gio.AsyncResult, outCsum: number): boolean
    writeMetadataStreamTrusted(objtype: ObjectType, checksum: string, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    writeMetadataTrusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    writeMtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): { returnType: boolean, outFile: Gio.File }
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
    /* Signals of OSTree-1.0.OSTree.Repo */
    connect(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    on(sigName: "gpg-verify-result", callback: (checksum: string, result: GpgVerifyResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gpg-verify-result", callback: (checksum: string, result: GpgVerifyResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gpg-verify-result", callback: (checksum: string, result: GpgVerifyResult) => void): NodeJS.EventEmitter
    emit(sigName: "gpg-verify-result", checksum: string, result: GpgVerifyResult): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Repo_ConstructProps)
    _init (config?: Repo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File): Repo
    static newDefault(): Repo
    static newForSysrootPath(repoPath: Gio.File, sysrootPath: Gio.File): Repo
    static modeFromString(mode: string, outMode: RepoMode): boolean
    static pullDefaultConsoleProgressChanged(progress: AsyncProgress, userData?: object | null): void
    static traverseNewReachable(): GLib.HashTable
    static $gtype: GObject.Type
}
export interface RepoFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class RepoFile {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.RepoFile */
    ensureResolved(): boolean
    getChecksum(): string
    getRepo(): Repo
    getRoot(): RepoFile
    getXattrs(outXattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    treeFindChild(name: string, isDir: boolean, outContainer: GLib.Variant): number
    treeGetContents(): GLib.Variant
    treeGetContentsChecksum(): string
    treeGetMetadata(): GLib.Variant
    treeGetMetadataChecksum(): string
    treeQueryChild(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, outInfo: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    treeSetMetadata(checksum: string, metadata: GLib.Variant): void
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
    /* Methods of Gio-2.0.Gio.File */
    appendTo(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    appendToAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    appendToFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    buildAttributeListForCopy(flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): string
    copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null): boolean
    copyAsync(destination: Gio.File, flags: Gio.FileCopyFlags, ioPriority: number, cancellable?: Gio.Cancellable | null): void
    copyAttributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
    copyFinish(res: Gio.AsyncResult): boolean
    create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    createAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    createReadwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    createReadwriteAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    delete(cancellable?: Gio.Cancellable | null): boolean
    deleteAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    dup(): Gio.File
    ejectMountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ejectMountableFinish(result: Gio.AsyncResult): boolean
    ejectMountableWithOperation(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ejectMountableWithOperationFinish(result: Gio.AsyncResult): boolean
    enumerateChildren(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    enumerateChildrenAsync(attributes: string, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerateChildrenFinish(res: Gio.AsyncResult): Gio.FileEnumerator
    equal(file2: Gio.File): boolean
    findEnclosingMount(cancellable?: Gio.Cancellable | null): Gio.Mount
    findEnclosingMountAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findEnclosingMountFinish(res: Gio.AsyncResult): Gio.Mount
    getBasename(): string | null
    getChild(name: string): Gio.File
    getChildForDisplayName(displayName: string): Gio.File
    getParent(): Gio.File | null
    getParseName(): string
    getPath(): string | null
    getRelativePath(descendant: Gio.File): string | null
    getUri(): string
    getUriScheme(): string | null
    hasParent(parent?: Gio.File | null): boolean
    hasPrefix(prefix: Gio.File): boolean
    hasUriScheme(uriScheme: string): boolean
    hash(): number
    isNative(): boolean
    loadBytes(cancellable?: Gio.Cancellable | null): { returnType: any, etagOut: string | null }
    loadBytesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadBytesFinish(result: Gio.AsyncResult): { returnType: any, etagOut: string | null }
    loadContents(cancellable?: Gio.Cancellable | null): { returnType: boolean, contents: any[], etagOut: string | null }
    loadContentsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadContentsFinish(res: Gio.AsyncResult): { returnType: boolean, contents: any[], etagOut: string | null }
    loadPartialContentsFinish(res: Gio.AsyncResult): { returnType: boolean, contents: any[], etagOut: string | null }
    makeDirectory(cancellable?: Gio.Cancellable | null): boolean
    makeDirectoryAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    makeDirectoryFinish(result: Gio.AsyncResult): boolean
    makeDirectoryWithParents(cancellable?: Gio.Cancellable | null): boolean
    makeSymbolicLink(symlinkValue: string, cancellable?: Gio.Cancellable | null): boolean
    measureDiskUsageFinish(result: Gio.AsyncResult): { returnType: boolean, diskUsage: number | null, numDirs: number | null, numFiles: number | null }
    monitor(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    monitorDirectory(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    monitorFile(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    mountEnclosingVolume(flags: Gio.MountMountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mountEnclosingVolumeFinish(result: Gio.AsyncResult): boolean
    mountMountable(flags: Gio.MountMountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mountMountableFinish(result: Gio.AsyncResult): Gio.File
    move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null): boolean
    openReadwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    openReadwriteAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    peekPath(): string | null
    pollMountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    pollMountableFinish(result: Gio.AsyncResult): boolean
    queryDefaultHandler(cancellable?: Gio.Cancellable | null): Gio.AppInfo
    queryDefaultHandlerAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryDefaultHandlerFinish(result: Gio.AsyncResult): Gio.AppInfo
    queryExists(cancellable?: Gio.Cancellable | null): boolean
    queryFileType(flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileType
    queryFilesystemInfo(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFilesystemInfoFinish(res: Gio.AsyncResult): Gio.FileInfo
    queryInfo(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    queryInfoAsync(attributes: string, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryInfoFinish(res: Gio.AsyncResult): Gio.FileInfo
    querySettableAttributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    queryWritableNamespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    read(cancellable?: Gio.Cancellable | null): Gio.FileInputStream
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readFinish(res: Gio.AsyncResult): Gio.FileInputStream
    replace(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    replaceAsync(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceContents(contents: any[], etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): { returnType: boolean, newEtag: string | null }
    replaceContentsAsync(contents: any[], etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceContentsBytesAsync(contents: any, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceContentsFinish(res: Gio.AsyncResult): { returnType: boolean, newEtag: string | null }
    replaceFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    replaceReadwrite(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    replaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replaceReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    resolveRelativePath(relativePath: string): Gio.File
    setAttribute(attribute: string, type: Gio.FileAttributeType, valueP: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeByteString(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeInt32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeInt64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeString(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeUint32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributeUint64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setAttributesAsync(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAttributesFinish(result: Gio.AsyncResult): { returnType: boolean, info: Gio.FileInfo }
    setAttributesFromInfo(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    setDisplayName(displayName: string, cancellable?: Gio.Cancellable | null): Gio.File
    setDisplayNameAsync(displayName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDisplayNameFinish(res: Gio.AsyncResult): Gio.File
    startMountable(flags: Gio.DriveStartFlags, startOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startMountableFinish(result: Gio.AsyncResult): boolean
    stopMountable(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stopMountableFinish(result: Gio.AsyncResult): boolean
    supportsThreadContexts(): boolean
    trash(cancellable?: Gio.Cancellable | null): boolean
    trashAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trashFinish(result: Gio.AsyncResult): boolean
    unmountMountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unmountMountableFinish(result: Gio.AsyncResult): boolean
    unmountMountableWithOperation(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unmountMountableWithOperationFinish(result: Gio.AsyncResult): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RepoFile_ConstructProps)
    _init (config?: RepoFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForCommandlineArg(arg: string): Gio.File
    static newForCommandlineArgAndCwd(arg: string, cwd: string): Gio.File
    static newForPath(path: string): Gio.File
    static newForUri(uri: string): Gio.File
    static newTmp(tmpl?: string | null): { returnType: Gio.File, iostream: Gio.FileIOStream }
    static parseName(parseName: string): Gio.File
    static $gtype: GObject.Type
}
export interface SePolicy_ConstructProps extends GObject.Object_ConstructProps {
    path?: Gio.File
}
export class SePolicy {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SePolicy */
    getCsum(): string
    getLabel(relpath: string, unixMode: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outLabel: string | null }
    getName(): string
    getPath(): Gio.File
    restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable?: Gio.Cancellable | null): { returnType: boolean, outNewLabel: string | null }
    setfscreatecon(path: string, mode: number): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SePolicy_ConstructProps)
    _init (config?: SePolicy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy
    static fscreateconCleanup(unused?: object | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Sysroot_ConstructProps extends GObject.Object_ConstructProps {
    path?: Gio.File
}
export class Sysroot {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Sysroot */
    cleanup(cancellable?: Gio.Cancellable | null): boolean
    deployTree(osname: string | null, revision: string, origin?: GLib.KeyFile | null, providedMergeDeployment?: Deployment | null, overrideKernelArgv?: string[] | null, cancellable?: Gio.Cancellable | null): { returnType: boolean, outNewDeployment: Deployment }
    deploymentSetKargs(deployment: Deployment, newKargs: string[], cancellable?: Gio.Cancellable | null): boolean
    deploymentSetMutable(deployment: Deployment, isMutable: boolean, cancellable?: Gio.Cancellable | null): boolean
    deploymentUnlock(deployment: Deployment, unlockedState: DeploymentUnlockedState, cancellable?: Gio.Cancellable | null): boolean
    ensureInitialized(cancellable?: Gio.Cancellable | null): boolean
    getBootedDeployment(): Deployment
    getBootversion(): number
    getDeploymentDirectory(deployment: Deployment): Gio.File
    getDeploymentDirpath(deployment: Deployment): string
    getDeployments(): Deployment[]
    getFd(): number
    getMergeDeployment(osname?: string | null): Deployment
    getPath(): Gio.File
    getRepo(cancellable?: Gio.Cancellable | null): { returnType: boolean, outRepo: Repo }
    getSubbootversion(): number
    initOsname(osname: string, cancellable?: Gio.Cancellable | null): boolean
    load(cancellable?: Gio.Cancellable | null): boolean
    loadIfChanged(outChanged: boolean, cancellable?: Gio.Cancellable | null): boolean
    lock(): boolean
    lockAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(result: Gio.AsyncResult): boolean
    originNewFromRefspec(refspec: string): GLib.KeyFile
    prepareCleanup(cancellable?: Gio.Cancellable | null): boolean
    simpleWriteDeployment(osname: string | null, newDeployment: Deployment, mergeDeployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable?: Gio.Cancellable | null): boolean
    tryLock(): { returnType: boolean, outAcquired: boolean }
    unload(): void
    unlock(): void
    writeDeployments(newDeployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean
    writeOriginFile(deployment: Deployment, newOrigin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Sysroot_ConstructProps)
    _init (config?: Sysroot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path?: Gio.File | null): Sysroot
    static newDefault(): Sysroot
    static getDeploymentOriginPath(deploymentPath: Gio.File): Gio.File
    static $gtype: GObject.Type
}
export interface SysrootUpgrader_ConstructProps extends GObject.Object_ConstructProps {
    flags?: SysrootUpgraderFlags
    osname?: string
    sysroot?: Sysroot
}
export class SysrootUpgrader {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SysrootUpgrader */
    deploy(cancellable?: Gio.Cancellable | null): boolean
    dupOrigin(): GLib.KeyFile
    getOrigin(): GLib.KeyFile
    getOriginDescription(): string
    pull(flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): { returnType: boolean, outChanged: boolean }
    pullOneDir(dirToPull: string, flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress: AsyncProgress, outChanged: boolean, cancellable?: Gio.Cancellable | null): boolean
    setOrigin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SysrootUpgrader_ConstructProps)
    _init (config?: SysrootUpgrader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static newForOs(sysroot: Sysroot, osname?: string | null, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static newForOsWithFlags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static checkTimestamps(repo: Repo, fromRev: string, toRev: string): boolean
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class AsyncProgressClass {
    /* Fields of OSTree-1.0.OSTree.AsyncProgressClass */
    parentClass: GObject.ObjectClass
    changed: (self: AsyncProgress) => void
    static name: string
}
export class Bootloader {
    static name: string
}
export class BootloaderGrub2 {
    static name: string
}
export class BootloaderInterface {
    /* Fields of OSTree-1.0.OSTree.BootloaderInterface */
    gIface: GObject.TypeInterface
    query: (bootloader: Bootloader, outIsActive: boolean, cancellable: Gio.Cancellable) => boolean
    getName: (self: Bootloader) => string
    writeConfig: (self: Bootloader, bootversion: number, cancellable: Gio.Cancellable) => boolean
    isAtomic: (self: Bootloader) => boolean
    static name: string
}
export class BootloaderSyslinux {
    static name: string
}
export class BootloaderUboot {
    static name: string
}
export abstract class ChecksumInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.ChecksumInputStreamClass */
    parentClass: Gio.FilterInputStreamClass
    static name: string
}
export class ChecksumInputStreamPrivate {
    static name: string
}
export class CmdPrivateVTable {
    /* Fields of OSTree-1.0.OSTree.CmdPrivateVTable */
    ostreeGenerateGrub2Config: (sysroot: Sysroot, bootversion: number, targetFd: number, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaDump: (repo: Repo, deltaId: string, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaQueryExists: (repo: Repo, deltaId: string, outExists: boolean, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaDelete: (repo: Repo, deltaId: string, cancellable: Gio.Cancellable) => boolean
    static name: string
}
export class DiffItem {
    /* Fields of OSTree-1.0.OSTree.DiffItem */
    refcount: number
    src: Gio.File
    target: Gio.File
    srcInfo: Gio.FileInfo
    targetInfo: Gio.FileInfo
    srcChecksum: string
    targetChecksum: string
    /* Methods of OSTree-1.0.OSTree.DiffItem */
    ref(): DiffItem
    unref(): void
    static name: string
}
export class GpgVerifier {
    static name: string
}
export class LibarchiveInputStream {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStream */
    parentInstance: Gio.InputStream
    static name: string
}
export class LibarchiveInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStreamClass */
    parentClass: Gio.InputStreamClass
    static name: string
}
export class LibarchiveInputStreamPrivate {
    static name: string
}
export class LzmaCompressor {
    static name: string
}
export class LzmaCompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaCompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LzmaDecompressor {
    static name: string
}
export class LzmaDecompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaDecompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MutableTreeClass {
    /* Fields of OSTree-1.0.OSTree.MutableTreeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MutableTreeIter {
    /* Fields of OSTree-1.0.OSTree.MutableTreeIter */
    inFiles: boolean
    iter: GLib.HashTableIter
    static name: string
}
export class RepoCheckoutAtOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutAtOptions */
    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: boolean
    enableFsync: boolean
    processWhiteouts: boolean
    noCopyFallback: boolean
    unusedBools: boolean[]
    subpath: string
    devinoToCsumCache: RepoDevInoCache
    unusedInts: number[]
    unusedPtrs: object[]
    static name: string
}
export class RepoCheckoutOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutOptions */
    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: number
    disableFsync: number
    processWhiteouts: number
    noCopyFallback: number
    reserved: number
    subpath: string
    devinoToCsumCache: RepoDevInoCache
    unusedUints: number[]
    unusedPtrs: object[]
    static name: string
}
export class RepoCommitModifier {
    /* Methods of OSTree-1.0.OSTree.RepoCommitModifier */
    ref(): RepoCommitModifier
    setDevinoCache(cache: RepoDevInoCache): void
    setSepolicy(sepolicy?: SePolicy | null): void
    setXattrCallback(callback: RepoCommitModifierXattrCallback): void
    unref(): void
    static name: string
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
    constructor(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null)
    /* Static methods and pseudo-constructors */
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
}
export class RepoCommitTraverseIter {
    /* Fields of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    initialized: boolean
    dummy: object[]
    dummyChecksumData: number[]
    /* Methods of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    clear(): void
    getDir(): { outName: string, outContentChecksum: string, outMetaChecksum: string }
    getFile(): { outName: string, outChecksum: string }
    initCommit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    initDirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    next(cancellable?: Gio.Cancellable | null): RepoCommitIterResult
    static name: string
    /* Static methods and pseudo-constructors */
    static cleanup(p?: object | null): void
}
export class RepoDevInoCache {
    /* Methods of OSTree-1.0.OSTree.RepoDevInoCache */
    ref(): RepoDevInoCache
    unref(): void
    static name: string
    static new(): RepoDevInoCache
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RepoDevInoCache
}
export class RepoExportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoExportArchiveOptions */
    disableXattrs: number
    reserved: number
    timestampSecs: number
    unusedUint: number[]
    pathPrefix: string
    unusedPtrs: object[]
    static name: string
}
export abstract class RepoFileClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RepoFileEnumerator {
    static name: string
}
export class RepoFileEnumeratorClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileEnumeratorClass */
    parentClass: Gio.FileEnumeratorClass
    static name: string
}
export class RepoImportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoImportArchiveOptions */
    ignoreUnsupportedContent: number
    autocreateParents: number
    useOstreeConvention: number
    callbackWithEntryPathname: number
    reserved: number
    unusedUint: number[]
    unusedPtrs: object[]
    static name: string
}
export class RepoTransactionStats {
    /* Fields of OSTree-1.0.OSTree.RepoTransactionStats */
    metadataObjectsTotal: number
    metadataObjectsWritten: number
    contentObjectsTotal: number
    contentObjectsWritten: number
    contentBytesWritten: number
    padding1: number
    padding2: number
    padding3: number
    padding4: number
    static name: string
}
export class RollsumMatches {
    /* Fields of OSTree-1.0.OSTree.RollsumMatches */
    fromRollsums: GLib.HashTable
    toRollsums: GLib.HashTable
    crcmatches: number
    bufmatches: number
    total: number
    matchSize: number
    matches: object[]
    static name: string
}
export class TlsCertInteraction {
    static name: string
}
export class TlsCertInteractionClass {
    static name: string
}
}