/**
 * DMAP-3.0
 */

import type * as Gjs from './Gjs';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ConnectionState {
    GET_INFO,
    LOGIN,
    GET_REVISION_NUMBER,
    GET_DB_INFO,
    GET_SONGS,
    GET_PLAYLISTS,
    GET_PLAYLIST_ENTRIES,
    LOGOUT,
    DONE,
}
export enum ContentCode {
    CC_INVALID,
    RAW,
    CC_MDCL,
    CC_MSTT,
    CC_MIID,
    CC_MINM,
    CC_MIKD,
    CC_MPER,
    CC_MCON,
    CC_MCTI,
    CC_MPCO,
    CC_MSTS,
    CC_MIMC,
    CC_MCTC,
    CC_MRCO,
    CC_MTCO,
    CC_MLCL,
    CC_MLIT,
    CC_MBCL,
    CC_MSRV,
    CC_MSAU,
    CC_MSLR,
    CC_MPRO,
    CC_MSAL,
    CC_MSUP,
    CC_MSPI,
    CC_MSEX,
    CC_MSBR,
    CC_MSQY,
    CC_MSIX,
    CC_MSRS,
    CC_MSTM,
    CC_MSDC,
    CC_MCCR,
    CC_MCNM,
    CC_MCNA,
    CC_MCTY,
    CC_MLOG,
    CC_MLID,
    CC_MUPD,
    CC_MUSR,
    CC_MUTY,
    CC_MUDL,
    CC_MSMA,
    CC_FQUESCH,
    CC_APRO,
    CC_AVDB,
    CC_ABRO,
    CC_ABAL,
    CC_ABAR,
    CC_ABCP,
    CC_ABGN,
    CC_ADBS,
    CC_ASAL,
    CC_ASAI,
    CC_ASAA,
    CC_ASAR,
    CC_ASBT,
    CC_ASBR,
    CC_ASCM,
    CC_ASCO,
    CC_ASDA,
    CC_ASDM,
    CC_ASDC,
    CC_ASDN,
    CC_ASDB,
    CC_ASEQ,
    CC_ASFM,
    CC_ASGN,
    CC_ASDT,
    CC_ASRV,
    CC_ASSR,
    CC_ASSZ,
    CC_ASST,
    CC_ASSP,
    CC_ASTM,
    CC_ASTC,
    CC_ASTN,
    CC_ASUR,
    CC_ASYR,
    CC_ASDK,
    CC_ASUL,
    CC_ASSU,
    CC_ASSA,
    CC_APLY,
    CC_ABPL,
    CC_APSO,
    CC_PRSV,
    CC_ARIF,
    CC_MSAS,
    CC_AGRP,
    CC_AGAL,
    CC_ASCP,
    CC_PPRO,
    CC_PASP,
    CC_PFDT,
    CC_PICD,
    CC_PIMF,
    CC_PFMT,
    CC_PIFS,
    CC_PLSZ,
    CC_PHGT,
    CC_PWTH,
    CC_PRAT,
    CC_PCMT,
    CC_PRET,
    CC_AESV,
    CC_AEHV,
    CC_AESP,
    CC_AEPP,
    CC_AEPS,
    CC_AESG,
    CC_AEMK,
    CC_AEFP,
    CC_CMPA,
    CC_CMNM,
    CC_CMTY,
    CC_CMPG,
    CC_CACI,
    CC_CAPS,
    CC_CASH,
    CC_CARP,
    CC_CAAS,
    CC_CAAR,
    CC_CAIA,
    CC_CANP,
    CC_CANN,
    CC_CANA,
    CC_CANL,
    CC_CANG,
    CC_CANT,
    CC_CASP,
    CC_CASS,
    CC_CAST,
    CC_CASU,
    CC_CASG,
    CC_CACR,
    CC_CMCP,
    CC_CMGT,
    CC_CMIK,
    CC_CMSP,
    CC_CMST,
    CC_CMSV,
    CC_CMSR,
    CC_CMMK,
    CC_CMVO,
    CC_CMPR,
    CC_CAPR,
    CC_AEFR,
    CC_CAOV,
    CC_CMRL,
    CC_CAHP,
    CC_CAIV,
    CC_CAVC,
}
export enum MdnsBrowserError {
    NOT_RUNNING,
    FAILED,
}
export enum MdnsBrowserServiceType {
    INVALID,
    DAAP,
    DPAP,
    DACP,
    RAOP,
    LAST,
}
export enum MdnsBrowserTransportProtocol {
    TCP,
    UDP,
    LAST,
}
export enum MdnsPublisherError {
    NOT_RUNNING,
    FAILED,
}
export enum MediaKind {
    MUSIC,
    MOVIE,
    PODCAST,
    TV_SHOW,
}
export enum Type {
    BYTE,
    SIGNED_INT,
    SHORT,
    INT,
    INT64,
    STRING,
    DATE,
    VERSION,
    CONTAINER,
    POINTER,
}
export const HASH_SIZE: number
export const STATUS_OK: number
export function content_code_dmap_type(code: ContentCode): Type
export function content_code_name(code: ContentCode): string
export function content_code_read_from_buffer(buf: string): ContentCode
export function content_code_string(code: ContentCode): string
export function content_code_string_as_int32(str: string): number
export function content_codes(number: number): ContentCodeDefinition
export function hash_generate(version_major: number, url: number, hash_select: number, out: number, request_id: number): void
export function hash_progressive_final(context: HashContext, digest: number): void
export function hash_progressive_init(context: HashContext): void
export function hash_progressive_to_string(digest: number, string: string): void
export function hash_progressive_update(context: HashContext, buffer: number, length: number): void
export function mdns_browser_error_quark(): GLib.Quark
export function mdns_publisher_error_quark(): GLib.Quark
export function mime_to_format(transcode_mimetype: string): string
export function structure_destroy(structure: GLib.Node): void
export function structure_get_size(structure: GLib.Node): number
export function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void
export function structure_print(structure: GLib.Node): void
export function structure_serialize(structure: GLib.Node, length: number): string
export interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
export interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
export class ContainerDb {
    /* Methods of DMAP.ContainerDb */
    add(record: ContainerRecord): void
    count(): number
    /* Virtual methods of DMAP.ContainerDb */
    vfunc_add(record: ContainerRecord): void
    vfunc_count(): number
    static name: string
}
export class ContainerRecord {
    /* Properties of DMAP.ContainerRecord */
    name: string
    /* Methods of DMAP.ContainerRecord */
    add_entry(record: Record, id: number): void
    get_entry_count(): number
    get_id(): number
    /* Virtual methods of DMAP.ContainerRecord */
    vfunc_add_entry(record: Record, id: number): void
    vfunc_get_entry_count(): number
    vfunc_get_id(): number
    static name: string
}
export class Db {
    /* Methods of DMAP.Db */
    add(record: Record): number
    add_path(path: string): number
    add_with_id(record: Record, id: number): number
    count(): number
    lookup_id_by_location(location: string): number
    /* Virtual methods of DMAP.Db */
    vfunc_add(record: Record): number
    vfunc_add_path(path: string): number
    vfunc_add_with_id(record: Record, id: number): number
    vfunc_count(): number
    vfunc_lookup_id_by_location(location: string): number
    static name: string
}
export class Record {
    /* Methods of DMAP.Record */
    set_from_blob(blob: Uint8Array[]): boolean
    /* Virtual methods of DMAP.Record */
    vfunc_set_from_blob(blob: Uint8Array[]): boolean
    static name: string
}
export class RecordFactory {
    static name: string
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    base_uri?: object
    database_id?: number
    db?: object
    dmap_version?: number
    factory?: object
    host?: string
    name?: string
    password?: string
    port?: number
    revision_number?: number
    session_id?: number
    username?: string
}
export class Connection {
    /* Properties of DMAP.Connection */
    base_uri: object
    database_id: number
    dmap_version: number
    password: string
    revision_number: number
    session_id: number
    /* Fields of DMAP.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of DMAP.Connection */
    authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    get_headers(uri: string): Soup.MessageHeaders
    is_connected(): boolean
    setup(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of DMAP.Connection */
    vfunc_authenticate(name: string): string
    vfunc_connected(): void
    vfunc_connecting(state: ConnectionState, progress: number): void
    vfunc_disconnected(): void
    vfunc_get_protocol_version_cc(): ContentCode
    vfunc_get_query_metadata(): string
    vfunc_operation_done(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DMAP.Connection */
    connect(sigName: "authenticate", callback: (($obj: Connection, object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: Connection, object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void)): number
    emit(sigName: "authenticate", object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    connect(sigName: "connected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "connected", callback: (($obj: Connection) => void)): number
    emit(sigName: "connected"): void
    connect(sigName: "connecting", callback: (($obj: Connection, object: number, p0: number) => void)): number
    connect_after(sigName: "connecting", callback: (($obj: Connection, object: number, p0: number) => void)): number
    emit(sigName: "connecting", object: number, p0: number): void
    connect(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "operation-done", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "operation-done", callback: (($obj: Connection) => void)): number
    emit(sigName: "operation-done"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::database-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dmap-version", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dmap-version", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision-number", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GstInputStream_ConstructProps extends Gio.InputStream_ConstructProps {
}
export class GstInputStream {
    /* Fields of DMAP.GstInputStream */
    parent: Gio.InputStream
    priv: GstInputStreamPrivate
    /* Fields of Gio.InputStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of DMAP.GstInputStream */
    vfunc_kill_pipeline(): void
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GstInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GstInputStream_ConstructProps)
    _init (config?: GstInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(transcode_mimetype: string, src_stream: Gio.InputStream): GstInputStream
    static $gtype: GObject.Type
}
export interface MdnsBrowser_ConstructProps extends GObject.Object_ConstructProps {
}
export class MdnsBrowser {
    /* Fields of DMAP.MdnsBrowser */
    object: GObject.Object
    priv: MdnsBrowserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of DMAP.MdnsBrowser */
    get_service_type(): MdnsBrowserServiceType
    start(): boolean
    stop(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of DMAP.MdnsBrowser */
    vfunc_service_added(service: MdnsBrowserService): void
    vfunc_service_removed(service: MdnsBrowserService): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DMAP.MdnsBrowser */
    connect(sigName: "service-added", callback: (($obj: MdnsBrowser, service: object) => void)): number
    connect_after(sigName: "service-added", callback: (($obj: MdnsBrowser, service: object) => void)): number
    emit(sigName: "service-added", service: object): void
    connect(sigName: "service-removed", callback: (($obj: MdnsBrowser, object: string) => void)): number
    connect_after(sigName: "service-removed", callback: (($obj: MdnsBrowser, object: string) => void)): number
    emit(sigName: "service-removed", object: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MdnsBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MdnsBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MdnsBrowser_ConstructProps)
    _init (config?: MdnsBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    static $gtype: GObject.Type
}
export interface MdnsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}
export class MdnsPublisher {
    /* Fields of DMAP.MdnsPublisher */
    object: GObject.Object
    priv: MdnsPublisherPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of DMAP.MdnsPublisher */
    publish(name: string, port: number, type_of_service: string, password_required: boolean, txt_records: string): boolean
    rename_at_port(port: number, name: string): boolean
    withdraw(port: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of DMAP.MdnsPublisher */
    vfunc_name_collision(name: string): void
    vfunc_published(name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DMAP.MdnsPublisher */
    connect(sigName: "name-collision", callback: (($obj: MdnsPublisher, object: string) => void)): number
    connect_after(sigName: "name-collision", callback: (($obj: MdnsPublisher, object: string) => void)): number
    emit(sigName: "name-collision", object: string): void
    connect(sigName: "published", callback: (($obj: MdnsPublisher, object: string) => void)): number
    connect_after(sigName: "published", callback: (($obj: MdnsPublisher, object: string) => void)): number
    emit(sigName: "published", object: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MdnsPublisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MdnsPublisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MdnsPublisher_ConstructProps)
    _init (config?: MdnsPublisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MdnsPublisher
    static $gtype: GObject.Type
}
export interface Share_ConstructProps extends GObject.Object_ConstructProps {
    auth_method?: number
    container_db?: object
    db?: object
    name?: string
    password?: string
    revision_number?: number
    transcode_mimetype?: string
    txt_records?: string[]
}
export class Share {
    /* Properties of DMAP.Share */
    auth_method: number
    name: string
    password: string
    revision_number: number
    readonly server_ipv4: Soup.Server
    readonly server_ipv6: Soup.Server
    txt_records: string[]
    /* Fields of DMAP.Share */
    parent: GObject.Object
    priv: SharePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of DMAP.Share */
    vfunc_content_codes(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_ctrl_int(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_databases(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfunc_databases_browse_xxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfunc_databases_items_xxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfunc_get_desired_port(): number
    vfunc_get_type_of_service(): string
    vfunc_login(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_logout(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_message_add_standard_headers(msg: Soup.Message): void
    vfunc_name_collision(publisher: MdnsPublisher, name: string): void
    vfunc_published(publisher: MdnsPublisher, name: string): void
    vfunc_server_info(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_update(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-method", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-method", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision-number", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-ipv4", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv4", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-ipv6", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv6", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::txt-records", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::txt-records", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Share_ConstructProps)
    _init (config?: Share_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ConnectionClass {
    /* Fields of DMAP.ConnectionClass */
    parent: GObject.ObjectClass
    get_protocol_version_cc: (connection: Connection) => ContentCode
    get_query_metadata: (connection: Connection) => string
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string) => string
    connecting: (connection: Connection, state: ConnectionState, progress: number) => void
    operation_done: (connection: Connection) => void
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export abstract class ContainerDbIface {
    /* Fields of DMAP.ContainerDbIface */
    parent: GObject.TypeInterface
    add: (db: ContainerDb, record: ContainerRecord) => void
    count: (db: ContainerDb) => number
    static name: string
}
export abstract class ContainerRecordIface {
    /* Fields of DMAP.ContainerRecordIface */
    parent: GObject.TypeInterface
    get_id: (record: ContainerRecord) => number
    add_entry: (container_record: ContainerRecord, record: Record, id: number) => void
    get_entry_count: (record: ContainerRecord) => number
    static name: string
}
export class ContentCodeDefinition {
    /* Fields of DMAP.ContentCodeDefinition */
    code: ContentCode
    int_code: number
    name: string
    string: string
    type: Type
    static name: string
}
export class DbFilterDefinition {
    /* Fields of DMAP.DbFilterDefinition */
    key: string
    value: string
    negate: boolean
    static name: string
}
export abstract class DbIface {
    /* Fields of DMAP.DbIface */
    parent: GObject.TypeInterface
    add: (db: Db, record: Record) => number
    add_with_id: (db: Db, record: Record, id: number) => number
    add_path: (db: Db, path: string) => number
    lookup_id_by_location: (db: Db, location: string) => number
    count: (db: Db) => number
    static name: string
}
export abstract class GstInputStreamClass {
    /* Fields of DMAP.GstInputStreamClass */
    parent: Gio.InputStreamClass
    kill_pipeline: (arg0: GstInputStream) => void
    static name: string
}
export class GstInputStreamPrivate {
    static name: string
}
export class HashContext {
    /* Fields of DMAP.HashContext */
    buf: number[]
    bits: number[]
    in_: number[]
    version: number
    static name: string
}
export abstract class MdnsBrowserClass {
    /* Fields of DMAP.MdnsBrowserClass */
    parent_class: GObject.ObjectClass
    service_added: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    service_removed: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    static name: string
}
export class MdnsBrowserPrivate {
    static name: string
}
export class MdnsBrowserService {
    /* Fields of DMAP.MdnsBrowserService */
    service_name: string
    name: string
    host: string
    port: number
    password_protected: boolean
    pair: string
    transport_protocol: MdnsBrowserTransportProtocol
    static name: string
}
export abstract class MdnsPublisherClass {
    /* Fields of DMAP.MdnsPublisherClass */
    parent_class: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    name_collision: (publisher: MdnsPublisher, name: string) => void
    static name: string
}
export class MdnsPublisherPrivate {
    static name: string
}
export class MetaDataMap {
    /* Fields of DMAP.MetaDataMap */
    tag: string
    md: number
    static name: string
}
export class Playlist {
    /* Fields of DMAP.Playlist */
    name: string
    id: number
    uris: object[]
    static name: string
}
export abstract class RecordFactoryIface {
    /* Fields of DMAP.RecordFactoryIface */
    parent: GObject.TypeInterface
    static name: string
}
export abstract class RecordIface {
    /* Fields of DMAP.RecordIface */
    parent: GObject.TypeInterface
    set_from_blob: (record: Record, blob: Uint8Array[]) => boolean
    static name: string
}
export abstract class ShareClass {
    /* Fields of DMAP.ShareClass */
    parent: GObject.ObjectClass
    get_desired_port: (share: Share) => number
    get_type_of_service: (share: Share) => string
    message_add_standard_headers: (share: Share, msg: Soup.Message) => void
    add_entry_to_mlcl: (id: object, record: Record, mb: object) => void
    databases_browse_xxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    databases_items_xxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    server_info: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    content_codes: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrl_int: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string) => void
    name_collision: (share: Share, publisher: MdnsPublisher, name: string) => void
    databases: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    static name: string
}
export class SharePrivate {
    static name: string
}
export class StructureItem {
    /* Fields of DMAP.StructureItem */
    content_code: ContentCode
    content: any
    size: number
    static name: string
}